import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { formatUnits, parseUnits } from 'viem';
import { toast } from 'sonner';
import { useLendingPool } from '@hooks/useLendingPool';
import { useCollateralManager } from '@hooks/useCollateralManager';
import { Modal } from '@components/ui/Modal';

interface BorrowModalProps {
  isOpen: boolean;
  onClose: () => void;
  collateralToken: `0x${string}`;
  onSuccess?: () => void;
}

export function BorrowModal({ isOpen, onClose, collateralToken, onSuccess }: BorrowModalProps) {
  const { address, isConnected } = useAccount();
  const { borrow, isLoading, getPoolStats, getUserLendingData } = useLendingPool();
  const { calculateMaxBorrow } = useCollateralManager();
  const [amount, setAmount] = useState('');
  const [maxBorrow, setMaxBorrow] = useState<bigint>(0n);
  const [currentDebt, setCurrentDebt] = useState<bigint>(0n);
  const [poolLiquidity, setPoolLiquidity] = useState<bigint>(0n);
  const [loading, setLoading] = useState(false);

  // Reset amount when modal closes
  useEffect(() => {
    if (!isOpen) {
      setAmount('');
      setLoading(false);
    }
  }, [isOpen]);

  // Fetch max borrowable amount, current debt, and pool liquidity
  // Refetch every time modal opens to get latest data
  useEffect(() => {
    if (!address || !isOpen) {
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    
    const fetchData = async () => {
      try {
        // Fetch all constraints in parallel
        const [max, poolStats, userData] = await Promise.all([
          calculateMaxBorrow(address),
          getPoolStats(),
          getUserLendingData(address)
        ]);
        
        if (!cancelled) {
          if (max !== null) {
            setMaxBorrow(max);
          }
          if (poolStats && poolStats.totalAvailable !== null) {
            setPoolLiquidity(poolStats.totalAvailable);
          }
          // Calculate current debt (borrowedAmount + interestAccrued)
          if (userData && userData.isActive) {
            const debt = userData.borrowedAmount + userData.interestAccrued;
            setCurrentDebt(debt);
          } else {
            setCurrentDebt(0n);
          }
          setLoading(false);
        }
      } catch (error) {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };
    
    fetchData();
    
    return () => {
      cancelled = true;
      setLoading(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, isOpen]); // Only depend on address and isOpen, not function references

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected || !address) {
      return;
    }
    if (!amount || parseFloat(amount) <= 0) {
      return;
    }

    // Use parseUnits to avoid floating point precision errors
    let amountWei: bigint;
    try {
      amountWei = parseUnits(amount, 18); // Platform token has 18 decimals
    } catch (error) {
      return;
    }
    
    // Recalculate actualMaxBorrow with latest data (in case it changed)
    const remainingCapacityForValidation = maxBorrow > currentDebt ? maxBorrow - currentDebt : 0n;
    const actualMaxBorrowForValidation = remainingCapacityForValidation > 0n && poolLiquidity > 0n
      ? (poolLiquidity < remainingCapacityForValidation ? poolLiquidity : remainingCapacityForValidation)
      : (remainingCapacityForValidation > 0n ? remainingCapacityForValidation : poolLiquidity);
    
    // Validate against actualMaxBorrow (which accounts for all constraints)
    if (amountWei > actualMaxBorrowForValidation) {
      let errorMsg = '';
      if (poolLiquidity < remainingCapacityForValidation) {
        errorMsg = `Amount exceeds available pool liquidity. Maximum borrowable: ${formatUnits(actualMaxBorrowForValidation, 18)} PLATFORM (limited by pool liquidity of ${formatUnits(poolLiquidity, 18)} PLATFORM)`;
      } else if (remainingCapacityForValidation < poolLiquidity) {
        errorMsg = `Amount exceeds your borrowing capacity. Maximum borrowable: ${formatUnits(actualMaxBorrowForValidation, 18)} PLATFORM (limited by collateral capacity after current debt of ${formatUnits(currentDebt, 18)} PLATFORM)`;
      } else {
        errorMsg = `Amount exceeds maximum borrowable: ${formatUnits(actualMaxBorrowForValidation, 18)} PLATFORM`;
      }
      toast.error(errorMsg);
      return;
    }

    try {
      await borrow(amount, collateralToken);
      
      // Refetch all data after successful borrow to update constraints
      const [updatedPoolStats, updatedUserData] = await Promise.all([
        getPoolStats(),
        getUserLendingData(address)
      ]);
      
      if (updatedPoolStats && updatedPoolStats.totalAvailable !== null) {
        setPoolLiquidity(updatedPoolStats.totalAvailable);
      }
      if (updatedUserData && updatedUserData.isActive) {
        const debt = updatedUserData.borrowedAmount + updatedUserData.interestAccrued;
        setCurrentDebt(debt);
      }
      
      onSuccess?.();
      onClose();
      setAmount('');
    } catch (error: any) {
      // Error already shown in hook via toast
      // Don't close modal on error so user can retry
    }
  };

  // Calculate actual maximum borrowable considering ALL constraints:
  // 1. User's max borrowable from collateral (maxBorrow)
  // 2. Current debt (borrowedAmount + interestAccrued) - reduces available capacity
  // 3. Pool liquidity (totalAvailable) - limits what can actually be borrowed
  // 
  // The contract checks: newDebt <= maxBorrow AND amount <= totalAvailable
  // So: remainingCapacity = maxBorrow - currentDebt
  //     actualMax = min(remainingCapacity, poolLiquidity)
  const remainingCapacity = maxBorrow > currentDebt ? maxBorrow - currentDebt : 0n;
  const actualMaxBorrow = remainingCapacity > 0n && poolLiquidity > 0n
    ? (poolLiquidity < remainingCapacity ? poolLiquidity : remainingCapacity)
    : (remainingCapacity > 0n ? remainingCapacity : poolLiquidity);
  const actualMaxFormatted = actualMaxBorrow > 0n ? formatUnits(actualMaxBorrow, 18) : '0';
  const remainingCapacityFormatted = remainingCapacity > 0n ? formatUnits(remainingCapacity, 18) : '0';

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

  // Helper to format max value - ensures it converts back to exactly actualMaxBorrow
  const getMaxFormatted = (): string => {
    if (actualMaxBorrow === 0n) return '0';
    
    // Use actualMaxFormatted (from formatUnits) - this is guaranteed to convert back correctly
    // parseUnits(formatUnits(x, 18), 18) === x is always true
    let formatted = actualMaxFormatted;
    
    // Remove trailing zeros ONLY after decimal point (not from whole numbers)
    // This regex only matches if there's a decimal point followed by zeros
    formatted = formatted.replace(/\.0+$/, '');
    
    // Limit to 6 decimal places for display, but verify it still converts correctly
    const parts = formatted.split('.');
    if (parts.length === 2 && parts[1].length > 6) {
      // Truncate to 6 decimals
      const truncated = parts[0] + '.' + parts[1].substring(0, 6);
      const truncatedWei = amountToWei(truncated);
      
      // Only use truncated if it's <= max (should always be true, but verify)
      if (truncatedWei !== null && truncatedWei <= actualMaxBorrow) {
        // Remove trailing zeros from decimal part only
        formatted = truncated.replace(/\.0+$/, '');
      }
      // If truncated exceeds (shouldn't happen), use original
    }
    
    return formatted;
  };

  // Note: Auto-adjustment is handled in formatAmount (onChange) and onBlur
  // No need for separate useEffect to avoid infinite loops

  const handleMax = () => {
    if (actualMaxBorrow > 0n) {
      // Get the formatted max value
      const formatted = getMaxFormatted();
      
      // Verify it converts back correctly before setting
      const testWei = amountToWei(formatted);
      if (testWei !== null && testWei <= actualMaxBorrow) {
        setAmount(formatted);
      } else {
        // Fallback: use actualMaxFormatted directly (should never happen)
        setAmount(actualMaxFormatted.replace(/\.0+$/, ''));
      }
    }
  };

  // Auto-format input value and auto-adjust if exceeds max
  const formatAmount = (value: string): string => {
    if (value === '' || value === '.') return value;
    
    // Remove any non-numeric characters except decimal point
    let cleaned = value.replace(/[^\d.]/g, '');
    
    // Only allow one decimal point
    const parts = cleaned.split('.');
    if (parts.length > 2) {
      cleaned = parts[0] + '.' + parts.slice(1).join('');
    }
    
    // Limit decimal places to 6
    if (parts.length === 2 && parts[1].length > 6) {
      cleaned = parts[0] + '.' + parts[1].substring(0, 6);
    }
    
    // Auto-adjust if exceeds maximum (do this immediately)
    if (actualMaxBorrow > 0n && cleaned) {
      const amountWei = amountToWei(cleaned);
      if (amountWei !== null && amountWei > actualMaxBorrow) {
        // Auto-adjust to max immediately
        return getMaxFormatted();
      }
    }
    
    return cleaned;
  };

  // Check if amount is valid for borrowing
  const isValidAmount = (): boolean => {
    if (!amount || actualMaxBorrow === 0n) {
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
    
    // Must be <= actualMaxBorrow (which is already the min of pool liquidity and max borrow)
    return amountWei <= actualMaxBorrow;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Borrow Platform Tokens">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Max Borrow Info */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-md p-3">
          <p className="text-sm text-blue-300">
            Maximum Borrowable: {parseFloat(actualMaxFormatted).toLocaleString()} PLATFORM
          </p>
          {currentDebt > 0n && (
            <p className="text-xs text-blue-400 mt-1">
              Current Debt: {parseFloat(formatUnits(currentDebt, 18)).toLocaleString()} PLATFORM
            </p>
          )}
          {poolLiquidity < remainingCapacity && poolLiquidity > 0n && (
            <p className="text-xs text-blue-400 mt-1">
              Limited by pool liquidity ({parseFloat(formatUnits(poolLiquidity, 18)).toLocaleString()} PLATFORM available)
            </p>
          )}
          {remainingCapacity < poolLiquidity && remainingCapacity > 0n && (
            <p className="text-xs text-blue-400 mt-1">
              Limited by borrowing capacity ({parseFloat(remainingCapacityFormatted).toLocaleString()} PLATFORM remaining)
            </p>
          )}
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Borrow Amount (PLATFORM)
          </label>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              value={amount}
              onChange={(e) => {
                // Format and auto-adjust immediately
                const formatted = formatAmount(e.target.value);
                setAmount(formatted);
              }}
              onBlur={(e) => {
                // Clean up on blur - ensure value is within max
                const value = e.target.value.trim();
                if (value && !isNaN(parseFloat(value)) && parseFloat(value) > 0 && actualMaxBorrow > 0n) {
                  const amountWei = amountToWei(value);
                  if (amountWei !== null && amountWei > actualMaxBorrow) {
                    // Auto-adjust to max
                    const maxFormatted = getMaxFormatted();
                    setAmount(maxFormatted);
                  } else {
                    // Just format the number
                    const num = parseFloat(value);
                    const formatted = num.toFixed(6).replace(/\.0+$/, '');
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
        </div>

        {/* Info */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-md p-3">
          <p className="text-sm text-slate-300">
            You can borrow platform tokens against your collateral. Interest will accrue daily on borrowed amounts.
          </p>
        </div>

        {/* Warning */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-md p-3">
          <p className="text-sm text-yellow-300">
            ⚠️ Borrowing reduces your health factor. Monitor your position to avoid liquidation.
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
            disabled={!isConnected || !address || isLoading || loading || !isValidAmount()}
            className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-md font-medium transition-colors"
          >
            {isLoading || loading ? 'Borrowing...' : 'Borrow'}
          </button>
        </div>
      </form>
    </Modal>
  );
}

