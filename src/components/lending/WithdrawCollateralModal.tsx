import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { formatUnits, parseUnits } from 'viem';
import { useLendingPool } from '@hooks/useLendingPool';
import { useCollateralManager } from '@hooks/useCollateralManager';
import { Modal } from '@components/ui/Modal';

interface WithdrawCollateralModalProps {
  isOpen: boolean;
  onClose: () => void;
  collateralToken: `0x${string}`;
  onSuccess?: () => void;
}

export function WithdrawCollateralModal({ 
  isOpen, 
  onClose, 
  collateralToken,
  onSuccess 
}: WithdrawCollateralModalProps) {
  const { address, isConnected } = useAccount();
  const { withdrawCollateral, isLoading, usdtAddress, getHealthFactor } = useLendingPool();
  const { getCollateralBalance } = useCollateralManager();
  const [amount, setAmount] = useState('');
  const [collateralBalance, setCollateralBalance] = useState<bigint>(0n);
  const [healthFactor, setHealthFactor] = useState<bigint | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch collateral balance
  useEffect(() => {
    if (address && collateralToken && isOpen) {
      let cancelled = false;
      setLoading(true);
      getCollateralBalance(address, collateralToken).then((balance) => {
        if (!cancelled && balance !== null) {
          setCollateralBalance(balance);
        }
        if (!cancelled) {
          setLoading(false);
        }
      }).catch(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });
      return () => {
        cancelled = true;
      };
    } else {
      setLoading(false);
    }
  }, [address, collateralToken, isOpen]); // Removed function references

  // Fetch current health factor from contract (standardized to use LendingPool.getHealthFactor)
  useEffect(() => {
    if (address && isOpen) {
      let cancelled = false;
      getHealthFactor(address).then((hf) => {
        if (!cancelled && hf !== null) {
          setHealthFactor(hf);
        }
      }).catch(() => {
        // Error fetching health factor - silently fail
      });
      return () => {
        cancelled = true;
      };
    } else {
      setHealthFactor(null);
    }
  }, [address, isOpen, getHealthFactor]);

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

  // Check if amount is valid for withdrawing
  const isValidAmount = (): boolean => {
    if (!amount || collateralBalance === 0n) {
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
    
    return amountWei <= collateralBalance;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected || !address) {
      return;
    }
    if (!amount || parseFloat(amount) <= 0) {
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
    
    if (amountWei > collateralBalance) {
      return;
    }

    try {
      await withdrawCollateral(collateralToken, amount);
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
    if (collateralBalance > 0n && cleaned) {
      const amountWei = amountToWei(cleaned, tokenDecimals);
      if (amountWei !== null && amountWei > collateralBalance) {
        // Auto-adjust to balance
        const maxAmount = formatUnits(collateralBalance, tokenDecimals);
        const formatted = parseFloat(maxAmount).toFixed(tokenDecimals === 6 ? 6 : 6).replace(/\.0+$/, '');
        return formatted;
      }
    }
    
    return cleaned;
  };

  const handleMax = () => {
    const decimals = collateralToken.toLowerCase() === usdtAddress.toLowerCase() ? 6 : 18;
    const maxAmount = formatUnits(collateralBalance, decimals);
    // Format to reasonable decimal places, remove trailing zeros (only after decimal point)
    const formatted = parseFloat(maxAmount).toFixed(decimals === 6 ? 6 : 6).replace(/\.0+$/, '');
    setAmount(formatted);
  };

  const tokenSymbol = collateralToken.toLowerCase() === usdtAddress.toLowerCase() ? 'USDT' : 'PLATFORM';
  const decimals = collateralToken.toLowerCase() === usdtAddress.toLowerCase() ? 6 : 18;
  const balanceFormatted = formatUnits(collateralBalance, decimals);
  
  // Format health factor consistently with Lending page
  // Health factor is scaled by 1e18 in the contract
  // type(uint256).max / 1e18 is approximately 1.157920892373162e+59
  const MAX_HEALTH_FACTOR_THRESHOLD = 1e50;
  const healthFactorNumber = healthFactor ? Number(healthFactor) / 1e18 : 0;
  const isNoDebt = healthFactorNumber > MAX_HEALTH_FACTOR_THRESHOLD;
  const healthFactorFormatted = healthFactor 
    ? (isNoDebt ? 'No active loan' : healthFactorNumber.toFixed(2))
    : 'N/A';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Withdraw Collateral">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Current Health Factor */}
        {healthFactor !== null && (
          <div className={`p-3 rounded-md border ${
            isNoDebt
              ? 'bg-green-500/20 border-green-500/30'
              : healthFactorNumber < 1.0
              ? 'bg-red-500/20 border-red-500/30'
              : healthFactorNumber < 1.5
              ? 'bg-yellow-500/20 border-yellow-500/30'
              : 'bg-green-500/20 border-green-500/30'
          }`}>
            <p className="text-sm font-medium">
              Current Health Factor: <span className="font-bold">{healthFactorFormatted}</span>
            </p>
            {!isNoDebt && healthFactorNumber < 1.0 && (
              <p className="text-xs mt-1 text-red-300">
                ⚠️ Your position is at risk of liquidation. Consider repaying debt before withdrawing.
              </p>
            )}
            {!isNoDebt && healthFactorNumber >= 1.0 && healthFactorNumber < 1.5 && (
              <p className="text-xs mt-1 text-yellow-300">
                ⚠️ Your health factor is low. Withdrawing collateral may put you at risk.
              </p>
            )}
          </div>
        )}

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Amount to Withdraw
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
                  if (amountWei !== null && amountWei > collateralBalance && collateralBalance > 0n) {
                    // Auto-adjust to balance
                    const maxAmount = formatUnits(collateralBalance, decimals);
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
            Available: {parseFloat(balanceFormatted).toLocaleString()} {tokenSymbol}
          </div>
        </div>

        {/* Warning */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-md p-3">
          <p className="text-sm text-yellow-300">
            ⚠️ Withdrawing collateral may reduce your health factor. Ensure you maintain a healthy position to avoid liquidation.
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
            className="flex-1 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-md font-medium transition-colors"
          >
            {isLoading || loading ? 'Processing...' : 'Withdraw Collateral'}
          </button>
        </div>
      </form>
    </Modal>
  );
}

