import { useState, useEffect, useRef } from 'react';
import { useAccount, useReadContract, useWriteContract, usePublicClient } from 'wagmi';
import { formatUnits, parseUnits } from 'viem';
import { toast } from 'sonner';
import { useLendingPool } from '@hooks/useLendingPool';
import { Modal } from '@components/ui/Modal';
import { erc20Abi } from '@lib/contracts/abi/erc20';
import addresses from '@lib/contracts/addresses.json';

interface RepayModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export function RepayModal({ isOpen, onClose, onSuccess }: RepayModalProps) {
  const { address, isConnected } = useAccount();
  const { repay, isLoading, platformTokenAddress, getUserLendingData } = useLendingPool();
  const { writeContractAsync } = useWriteContract();
  const publicClient = usePublicClient();
  const [amount, setAmount] = useState('');
  const [totalDebt, setTotalDebt] = useState<bigint>(0n);
  const [balance, setBalance] = useState<bigint>(0n);
  const [allowance, setAllowance] = useState<bigint>(0n);
  const [isApproving, setIsApproving] = useState(false);
  
  // Track if we've already fetched for this modal open session
  const hasFetchedRef = useRef(false);
  const previousIsOpenRef = useRef(false);
  
  const lendingPoolAddress = ((addresses.contracts as any).LendingPool || 
    (addresses.contracts as any).lendingPool) as `0x${string}` | undefined;

  // Get user's platform token balance - only fetch when modal is open
  const { data: tokenBalance, refetch: refetchBalance } = useReadContract({
    address: platformTokenAddress,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: {
      enabled: isConnected && !!address && !!platformTokenAddress && isOpen,
      refetchOnWindowFocus: false, // Disable auto-refetch to prevent loops
      refetchOnMount: true, // Always refetch when query is enabled (when modal opens)
      refetchOnReconnect: false,
    },
  });

  // Get token allowance for LendingPool
  const { data: tokenAllowance, refetch: refetchAllowance } = useReadContract({
    address: platformTokenAddress,
    abi: erc20Abi,
    functionName: 'allowance',
    args: address && lendingPoolAddress ? [address, lendingPoolAddress] : undefined,
    query: {
      enabled: isConnected && !!address && !!platformTokenAddress && !!lendingPoolAddress && isOpen,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: false,
    },
  });

  // Update balance when tokenBalance changes (from useReadContract)
  useEffect(() => {
    if (tokenBalance !== undefined) {
      // Only update if we have a value, otherwise keep current state
      // This ensures we don't overwrite with undefined
      setBalance(tokenBalance as bigint);
    }
  }, [tokenBalance]);

  // Update allowance when tokenAllowance changes
  useEffect(() => {
    if (tokenAllowance !== undefined) {
      setAllowance(tokenAllowance as bigint);
    }
  }, [tokenAllowance]);

  // Fetch data ONCE when modal opens (not on every render)
  useEffect(() => {
    // Check if modal just opened (transitioned from closed to open)
    const wasClosed = !previousIsOpenRef.current;
    const justOpened = isOpen && wasClosed;
    
    // Update the ref for next time
    previousIsOpenRef.current = isOpen;
    
    // Reset state when modal closes
    if (!isOpen) {
      setAmount('');
      setBalance(0n); // Reset balance when modal closes
      setTotalDebt(0n); // Reset debt when modal closes
      setAllowance(0n);
      setIsApproving(false);
      hasFetchedRef.current = false;
      return;
    }
    
    // Only fetch if:
    // 1. Modal just opened (transitioned from closed to open)
    // 2. We haven't fetched for this open session
    // 3. We have required addresses
    if (!justOpened || hasFetchedRef.current || !address || !platformTokenAddress) {
      return;
    }

    hasFetchedRef.current = true;
    
    let cancelled = false;
    
    const fetchAllData = async () => {
      try {
        // Force refetch balance (bypass cache)
        const balanceResult = await refetchBalance();
        if (!cancelled) {
          if (balanceResult.data !== undefined) {
            const newBalance = balanceResult.data as bigint;
            setBalance(newBalance);
          } else {
            // If no data, set to 0 to clear stale data
            setBalance(0n);
          }
        }
        
        // Fetch debt data and allowance
        const [data, allowanceResult] = await Promise.all([
          getUserLendingData(address),
          refetchAllowance()
        ]);
        if (!cancelled) {
          if (data && data.isActive) {
            const debt = data.borrowedAmount + data.interestAccrued;
            setTotalDebt(debt);
          } else {
            setTotalDebt(0n);
          }
          if (allowanceResult.data !== undefined) {
            setAllowance(allowanceResult.data as bigint);
          }
        }
      } catch (error) {
        if (!cancelled) {
          // On error, reset to 0 to avoid showing stale data
          setBalance(0n);
          setTotalDebt(0n);
        }
      }
    };
    
    // Small delay to ensure modal is fully open
    const timer = setTimeout(() => {
      fetchAllData();
    }, 100);
    
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
    // Only depend on isOpen, address, platformTokenAddress - NOT on function references
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, address, platformTokenAddress]);

  // Helper to convert amount string to wei
  const amountToWei = (amountStr: string): bigint | null => {
    if (!amountStr) return null;
    try {
      return parseUnits(amountStr, 18);
    } catch {
      const num = parseFloat(amountStr);
      if (isNaN(num)) return null;
      return BigInt(Math.floor(num * 10 ** 18));
    }
  };

  // Check if amount is valid for repaying
  const isValidAmount = (): boolean => {
    if (!amount || totalDebt === 0n) {
      return false;
    }
    
    const numValue = parseFloat(amount);
    if (isNaN(numValue) || numValue <= 0) {
      return false;
    }
    
    // Convert to wei for comparison
    const amountWei = amountToWei(amount);
    if (amountWei === null) {
      return false;
    }
    
    // Must be <= balance AND <= totalDebt
    const withinBalance = balance === 0n || amountWei <= balance;
    const withinDebt = amountWei <= totalDebt;
    
    return withinBalance && withinDebt;
  };

  // Check if user has insufficient balance for the repay amount
  const hasInsufficientBalance = (): boolean => {
    if (!amount) return false;
    
    const numValue = parseFloat(amount);
    if (isNaN(numValue) || numValue <= 0) return false;
    
    const amountWei = amountToWei(amount);
    if (amountWei === null) return false;
    
    // Check if amount exceeds balance
    return amountWei > balance && balance > 0n;
  };

  // Check if approval is needed
  const needsApproval = (): boolean => {
    if (!amount || !isValidAmount()) {
      return false;
    }
    const amountWei = amountToWei(amount);
    if (amountWei === null) {
      return false;
    }
    return allowance < amountWei;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected || !address) {
      return;
    }
    if (!amount || parseFloat(amount) <= 0) {
      return;
    }

    // Use parseUnits for exact precision instead of manual calculation
    let amountWei: bigint;
    try {
      amountWei = parseUnits(amount, 18);
    } catch (error) {
      return;
    }
    
    if (amountWei > balance) {
      return;
    }

    // Can't repay more than debt - use exact totalDebt comparison
    const maxRepay = balance < totalDebt ? balance : totalDebt;
    if (amountWei > maxRepay) {
      // Auto-adjust to max if exceeded
      const maxAmount = formatUnits(maxRepay, 18);
      const formatted = parseFloat(maxAmount).toFixed(6).replace(/\.0+$/, '');
      setAmount(formatted);
      return;
    }
    
    // Refetch balance and allowance right before submitting to ensure we have the latest values
    await Promise.all([refetchBalance(), refetchAllowance()]);
    
    // Wait a moment for the state to update
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // Double-check balance after refetch
    const latestBalance = tokenBalance as bigint | undefined;
    if (latestBalance) {
      const amountWei = parseUnits(amount, 18);
      if (amountWei > latestBalance) {
        toast.error(`Insufficient balance. Your current balance is ${formatUnits(latestBalance, 18)} PLATFORM, but you're trying to repay ${amount} PLATFORM.`);
        return;
      }
    }

    // Check if approval is needed
    if (needsApproval() && lendingPoolAddress) {
      setIsApproving(true);
      try {
        // Approve LendingPool to spend tokens
        toast.info('Approving token...');
        const approveHash = await writeContractAsync({
          address: platformTokenAddress,
          abi: erc20Abi,
          functionName: 'approve',
          args: [lendingPoolAddress, amountWei],
        });
        
        // Wait for approval transaction to be mined
        if (publicClient) {
          toast.info('Waiting for approval confirmation...');
          await publicClient.waitForTransactionReceipt({
            hash: approveHash,
            timeout: 60000,
          });
          
          // Verify approval actually went through
          const newAllowance = await publicClient.readContract({
            address: platformTokenAddress,
            abi: erc20Abi,
            functionName: 'allowance',
            args: [address, lendingPoolAddress],
          });
          
          if (newAllowance < amountWei) {
            toast.error('Approval transaction confirmed but allowance is still insufficient. Please try again.');
            setIsApproving(false);
            await refetchAllowance();
            return;
          }
          
          toast.success('Approval confirmed!');
          setAllowance(newAllowance);
        }
        setIsApproving(false);
      } catch (error: any) {
        setIsApproving(false);
        toast.error(error?.shortMessage || 'Approval failed. Please try again.');
        return;
      }
    }
    
    // Now proceed with repay
    try {
      await repay(amount);
      
      // Wait a bit for the transaction to be fully processed
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Refetch balance and debt after successful repay
      const balanceResult = await refetchBalance();
      if (balanceResult.data) {
        setBalance(balanceResult.data as bigint);
      }
      
      // Refetch debt data
      if (address) {
        const data = await getUserLendingData(address);
        if (data && data.isActive) {
          // Use interestAccrued from contract directly
          const debt = data.borrowedAmount + data.interestAccrued;
          setTotalDebt(debt);
        } else {
          setTotalDebt(0n);
        }
      }
      
      // Reset fetch flag so it will refetch if modal is reopened
      hasFetchedRef.current = false;
      
      // Refetch allowance after successful repay
      await refetchAllowance();
      
      onSuccess?.();
      onClose();
      setAmount('');
      setIsApproving(false);
    } catch (error: any) {
      // Error already shown in hook via toast
      // Don't close modal on error so user can retry
    }
  };

  // Auto-format input value to limit decimal places and auto-adjust to max if exceeded
  const formatAmount = (value: string): string => {
    if (value === '' || value === '.') return value;
    
    // Remove any non-numeric characters except decimal point
    let cleaned = value.replace(/[^\d.]/g, '');
    
    // Only allow one decimal point
    const parts = cleaned.split('.');
    if (parts.length > 2) {
      cleaned = parts[0] + '.' + parts.slice(1).join('');
    }
    
    // Limit decimal places to 6 for display
    if (parts.length === 2 && parts[1].length > 6) {
      cleaned = parts[0] + '.' + parts[1].substring(0, 6);
    }
    
    // Auto-adjust if exceeds maximum (min of balance and totalDebt)
    const amountWei = amountToWei(cleaned);
    if (amountWei !== null && amountWei > 0n) {
      const maxRepay = balance < totalDebt ? balance : totalDebt;
      
      // If exceeds max, auto-adjust to max
      if (amountWei > maxRepay && maxRepay > 0n) {
        const maxAmount = formatUnits(maxRepay, 18);
        const formatted = parseFloat(maxAmount).toFixed(6).replace(/\.0+$/, '');
        return formatted;
      }
    }
    
    return cleaned;
  };

  const handleMax = () => {
    // Use exact bigint comparison to avoid precision loss
    // Repay the minimum of balance and totalDebt
    const repayAmount = balance < totalDebt ? balance : totalDebt;
    
    // Format using exact bigint value to avoid precision issues
    const maxAmount = formatUnits(repayAmount, 18);
    // Format to 6 decimal places, remove trailing zeros (only after decimal point)
    const formatted = parseFloat(maxAmount).toFixed(6).replace(/\.0+$/, '');
    setAmount(formatted);
  };

  const totalDebtFormatted = formatUnits(totalDebt, 18);
  const balanceFormatted = formatUnits(balance, 18);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Repay Loan">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Total Debt Info */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-md p-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-300">Total Debt:</span>
            <span className="text-lg font-bold text-white">
              {parseFloat(totalDebtFormatted).toLocaleString()} PLATFORM
            </span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-slate-300">Your Balance:</span>
            <span className="text-sm text-slate-400">
              {parseFloat(balanceFormatted).toLocaleString()} PLATFORM
            </span>
          </div>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Repay Amount (PLATFORM)
          </label>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={amount}
              onChange={(e) => {
                const formatted = formatAmount(e.target.value);
                setAmount(formatted);
              }}
              onBlur={(e) => {
                // Format on blur - auto-adjust to max if exceeded
                const value = e.target.value.trim();
                if (value && !isNaN(parseFloat(value)) && parseFloat(value) > 0) {
                  const amountWei = amountToWei(value);
                  if (amountWei !== null) {
                    const maxRepay = balance < totalDebt ? balance : totalDebt;
                    
                    // Auto-adjust to max if exceeds
                    if (amountWei > maxRepay && maxRepay > 0n) {
                      const maxAmount = formatUnits(maxRepay, 18);
                      const formatted = parseFloat(maxAmount).toFixed(6).replace(/\.0+$/, '');
                      setAmount(formatted);
                    } else {
                      // Keep up to 6 decimal places, remove trailing zeros
                      const num = parseFloat(value);
                      const formatted = num.toFixed(6).replace(/\.0+$/, '');
                      setAmount(formatted);
                    }
                  }
                } else if (value === '' || value === '.') {
                  setAmount('');
                }
              }}
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 pr-20"
              placeholder="0.00"
            />
            <button
              type="button"
              onClick={handleMax}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 text-xs bg-slate-700 hover:bg-slate-600 text-white rounded-md transition-colors"
            >
              MAX
            </button>
          </div>
          {/* Insufficient Balance Error */}
          {hasInsufficientBalance() && (
            <div className="mt-2 bg-red-500/10 border border-red-500/30 rounded-md p-2">
              <p className="text-sm text-red-300">
                ⚠️ Insufficient repay token. You need more PLATFORM tokens to repay this amount.
              </p>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="bg-green-500/10 border border-green-500/30 rounded-md p-3">
          <p className="text-sm text-green-300">
            Repaying reduces your debt and improves your health factor. You can repay any amount up to your total debt.
          </p>
        </div>

        {/* Submit */}
        <div className="flex gap-2 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-md font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!isConnected || !address || isLoading || isApproving || !isValidAmount() || hasInsufficientBalance()}
            className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-md font-medium transition-colors"
          >
            {isApproving ? 'Approving...' : isLoading ? 'Repaying...' : needsApproval() ? 'Approve & Repay' : 'Repay'}
          </button>
        </div>
      </form>
    </Modal>
  );
}

