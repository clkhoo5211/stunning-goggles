import { useState, useEffect } from 'react';
import { useAccount, useReadContract, useWriteContract, usePublicClient } from 'wagmi';
import { formatUnits, parseUnits } from 'viem';
import { toast } from 'sonner';
import { useLendingPool } from '@hooks/useLendingPool';
import { useCollateralManager } from '@hooks/useCollateralManager';
import { Modal } from '@components/ui/Modal';
import { erc20Abi } from '@lib/contracts/abi/erc20';
import addresses from '@lib/contracts/addresses.json';

interface DepositCollateralModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export function DepositCollateralModal({ isOpen, onClose, onSuccess }: DepositCollateralModalProps) {
  const { address, isConnected } = useAccount();
  const { depositCollateral, isLoading, usdtAddress, platformTokenAddress } = useLendingPool();
  const { getCollateralConfig } = useCollateralManager();
  const { writeContractAsync } = useWriteContract();
  const publicClient = usePublicClient();
  const [amount, setAmount] = useState('');
  const [collateralToken, setCollateralToken] = useState<`0x${string}`>(usdtAddress);
  const [balance, setBalance] = useState<bigint>(0n);
  const [collateralFactor, setCollateralFactor] = useState<number>(0);
  const [allowance, setAllowance] = useState<bigint>(0n);
  const [isApproving, setIsApproving] = useState(false);
  
  const collateralManagerAddress = ((addresses.contracts as any).CollateralManager || 
    (addresses.contracts as any).collateralManager) as `0x${string}` | undefined;

  // Get user's token balance
  const { data: tokenBalance, refetch: refetchBalance } = useReadContract({
    address: collateralToken,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: {
      enabled: isConnected && !!address && !!collateralToken,
      refetchOnWindowFocus: true,
    },
  });

  // Get token allowance for CollateralManager
  const { data: tokenAllowance, refetch: refetchAllowance } = useReadContract({
    address: collateralToken,
    abi: erc20Abi,
    functionName: 'allowance',
    args: address && collateralManagerAddress ? [address, collateralManagerAddress] : undefined,
    query: {
      enabled: isConnected && !!address && !!collateralToken && !!collateralManagerAddress,
      refetchOnWindowFocus: true,
    },
  });

  useEffect(() => {
    if (tokenBalance) {
      setBalance(tokenBalance as bigint);
    }
  }, [tokenBalance]);

  useEffect(() => {
    if (tokenAllowance !== undefined) {
      setAllowance(tokenAllowance as bigint);
    }
  }, [tokenAllowance]);

  // Refetch balance and allowance when modal opens or token changes
  useEffect(() => {
    if (isOpen && address && collateralToken) {
      // Small delay to ensure contract state is ready
      const timer = setTimeout(() => {
        refetchBalance();
        refetchAllowance();
      }, 100);
      return () => clearTimeout(timer);
    } else if (!isOpen) {
      // Reset state when modal closes
      setBalance(0n);
      setAllowance(0n);
      setAmount('');
      setIsApproving(false);
    }
  }, [isOpen, address, collateralToken, refetchBalance, refetchAllowance]);

  // Get collateral config
  useEffect(() => {
    if (collateralToken && isOpen) {
      let cancelled = false;
      getCollateralConfig(collateralToken).then((config) => {
        if (!cancelled) {
          if (config) {
            setCollateralFactor(Number(config.collateralFactor) / 100); // Convert from basis points to percentage
          } else {
            setCollateralFactor(0);
          }
        }
      }).catch(() => {
        if (!cancelled) {
          setCollateralFactor(0);
        }
      });
      return () => {
        cancelled = true;
      };
    }
  }, [collateralToken, isOpen]); // Removed function reference

  // Helper to convert amount string to wei
  const amountToWei = (amountStr: string, tokenDecimals: number): bigint | null => {
    if (!amountStr) return null;
    try {
      return parseUnits(amountStr, tokenDecimals);
    } catch {
      const num = parseFloat(amountStr);
      if (isNaN(num)) return null;
      return BigInt(Math.floor(num * 10 ** tokenDecimals));
    }
  };

  // Check if amount is valid for depositing
  const isValidAmount = (): boolean => {
    if (!amount || balance === 0n) {
      return false;
    }
    
    const numValue = parseFloat(amount);
    if (isNaN(numValue) || numValue <= 0) {
      return false;
    }
    
    const decimals = collateralToken.toLowerCase() === usdtAddress.toLowerCase() ? 6 : 18;
    const amountWei = amountToWei(amount, decimals);
    if (amountWei === null) {
      return false;
    }
    
    return amountWei <= balance;
  };

  // Check if approval is needed
  const needsApproval = (): boolean => {
    if (!amount || !isValidAmount()) {
      return false;
    }
    const decimals = collateralToken.toLowerCase() === usdtAddress.toLowerCase() ? 6 : 18;
    const amountWei = amountToWei(amount, decimals);
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
    
    // Check if token is enabled as collateral
    const config = await getCollateralConfig(collateralToken);
    if (!config || !config.isEnabled) {
      toast.error('This token is not enabled as collateral. Please select USDT or Platform Token.');
      return;
    }

    const decimals = collateralToken.toLowerCase() === usdtAddress.toLowerCase() ? 6 : 18;
    
    // Use parseUnits for exact precision instead of manual calculation
    let amountWei: bigint;
    try {
      amountWei = parseUnits(amount, decimals);
    } catch (error) {
      return;
    }
    
    if (amountWei > balance) {
      return;
    }

    // Check if approval is needed
    if (needsApproval() && collateralManagerAddress) {
      setIsApproving(true);
      try {
        // Approve CollateralManager to spend tokens
        toast.info('Approving token...');
        const approveHash = await writeContractAsync({
          address: collateralToken,
          abi: erc20Abi,
          functionName: 'approve',
          args: [collateralManagerAddress, amountWei],
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
            address: collateralToken,
            abi: erc20Abi,
            functionName: 'allowance',
            args: [address, collateralManagerAddress],
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

    // Now proceed with deposit
    try {
      await depositCollateral(collateralToken, amount);
      // Refetch balance and allowance after successful deposit
      await Promise.all([refetchBalance(), refetchAllowance()]);
      onSuccess?.();
      onClose();
      setAmount('');
    } catch (error: any) {
      // Error already shown in hook via toast
      // Don't close modal on error so user can retry
    }
  };

  // Auto-format input value to limit decimal places and auto-adjust if exceeds balance
  const formatAmount = (value: string, tokenDecimals: number): string => {
    if (value === '' || value === '.') return value;
    
    // Remove any non-numeric characters except decimal point
    let cleaned = value.replace(/[^\d.]/g, '');
    
    // Only allow one decimal point
    const parts = cleaned.split('.');
    if (parts.length > 2) {
      cleaned = parts[0] + '.' + parts.slice(1).join('');
    }
    
    // Limit decimal places
    if (parts.length === 2 && parts[1].length > tokenDecimals) {
      cleaned = parts[0] + '.' + parts[1].substring(0, tokenDecimals);
    }
    
    // Auto-adjust if exceeds balance
    if (balance > 0n && cleaned) {
      const amountWei = amountToWei(cleaned, tokenDecimals);
      if (amountWei !== null && amountWei > balance) {
        // Auto-adjust to balance
        const maxAmount = formatUnits(balance, tokenDecimals);
        const formatted = parseFloat(maxAmount).toFixed(tokenDecimals === 6 ? 6 : 6).replace(/\.0+$/, '');
        return formatted;
      }
    }
    
    return cleaned;
  };

  const handleMax = () => {
    const decimals = collateralToken.toLowerCase() === usdtAddress.toLowerCase() ? 6 : 18;
    const maxAmount = formatUnits(balance, decimals);
    // Format to reasonable decimal places, remove trailing zeros (only after decimal point)
    const formatted = parseFloat(maxAmount).toFixed(decimals === 6 ? 6 : 6).replace(/\.0+$/, '');
    setAmount(formatted);
  };

  const tokenSymbol = collateralToken.toLowerCase() === usdtAddress.toLowerCase() ? 'USDT' : 'PLATFORM';
  const decimals = collateralToken.toLowerCase() === usdtAddress.toLowerCase() ? 6 : 18;
  const balanceFormatted = formatUnits(balance, decimals);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Deposit Collateral">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Collateral Token Selection */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Collateral Token
          </label>
          <select
            value={collateralToken}
            onChange={(e) => setCollateralToken(e.target.value as `0x${string}`)}
            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value={usdtAddress}>USDT</option>
            <option value={platformTokenAddress}>Platform Token</option>
          </select>
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Amount
          </label>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={amount}
              onChange={(e) => {
                const formatted = formatAmount(e.target.value, decimals);
                setAmount(formatted);
              }}
              onBlur={(e) => {
                // Format on blur - ensure value is within balance
                const value = e.target.value.trim();
                if (value && !isNaN(parseFloat(value)) && parseFloat(value) > 0) {
                  const amountWei = amountToWei(value, decimals);
                  if (amountWei !== null && amountWei > balance && balance > 0n) {
                    // Auto-adjust to balance
                    const maxAmount = formatUnits(balance, decimals);
                    const formatted = parseFloat(maxAmount).toFixed(decimals === 6 ? 6 : 6).replace(/\.0+$/, '');
                    setAmount(formatted);
                  } else {
                    // Just format the number
                    const num = parseFloat(value);
                    const formatted = num.toFixed(decimals === 6 ? 6 : 6).replace(/\.0+$/, '');
                    setAmount(formatted);
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
          <div className="mt-1 text-xs text-slate-400">
            Balance: {parseFloat(balanceFormatted).toLocaleString()} {tokenSymbol}
          </div>
        </div>

        {/* Collateral Factor Info */}
        {collateralFactor > 0 && (
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-md p-3">
            <p className="text-sm text-blue-300">
              Collateral Factor: {collateralFactor}% (You can borrow up to {collateralFactor}% of your collateral value)
            </p>
          </div>
        )}

        {/* Info */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-md p-3">
          <p className="text-sm text-slate-300">
            Depositing collateral allows you to borrow platform tokens. Make sure you have sufficient balance.
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
            disabled={!isConnected || !address || isLoading || isApproving || !isValidAmount()}
            className="flex-1 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-md font-medium transition-colors"
          >
            {isApproving ? 'Approving...' : isLoading ? 'Depositing...' : needsApproval() ? 'Approve & Deposit' : 'Deposit Collateral'}
          </button>
        </div>
      </form>
    </Modal>
  );
}

