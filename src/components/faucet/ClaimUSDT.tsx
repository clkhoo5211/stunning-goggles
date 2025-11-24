import { useState } from 'react';
import { useAccount } from 'wagmi';
import { formatUnits } from 'viem';
import { toast } from 'sonner';
import { Coins, Loader2, Clock } from 'lucide-react';
import { useFaucet } from '@/hooks/useFaucet';

const FAUCET_AMOUNT_USDT = 1_000_000_000; // 1 billion USDT (6 decimals)

interface ClaimUSDTProps {
  className?: string;
  compact?: boolean;
}

export function ClaimUSDT({ className = '', compact = false }: ClaimUSDTProps) {
  const { isConnected } = useAccount();
  const {
    claimMockUSDT,
    isPending,
    isConfirming,
    canClaimUSDT,
    remainingCooldownUSDT,
  } = useFaucet();

  const [isClaiming, setIsClaiming] = useState(false);

  const formatCooldown = (seconds: number) => {
    if (!seconds || isNaN(seconds) || seconds <= 0) return 'Ready';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hours > 0) return `${hours}h ${minutes}m ${secs}s`;
    if (minutes > 0) return `${minutes}m ${secs}s`;
    return `${secs}s`;
  };

  const handleClaimUSDT = async () => {
    if (!isConnected) {
      toast.error('Please connect your wallet');
      return;
    }

    if (!canClaimUSDT) {
      toast.error(`Please wait ${formatCooldown(remainingCooldownUSDT)} before claiming USDT again`);
      return;
    }

    setIsClaiming(true);
    try {
      await toast.promise(claimMockUSDT(), {
        loading: 'Claiming USDT...',
        success: `Successfully claimed ${formatUnits(BigInt(FAUCET_AMOUNT_USDT * 10 ** 6), 6)} USDT!`,
        error: (error: any) => {
          // Extract actual error message
          let errorMessage = error?.message || 'Failed to claim USDT';
          // Check for common revert reasons
          if (errorMessage.includes('cooldown active')) {
            return 'Cooldown is still active. Please wait before claiming again.';
          } else if (errorMessage.includes('Internal JSON-RPC error')) {
            return 'Transaction failed. Please check if cooldown has expired and try again.';
          }
          return errorMessage;
        },
      });
    } catch (error: any) {
      console.error('Claim USDT error:', error);
    } finally {
      setIsClaiming(false);
    }
  };

  const isLoading = isPending || isConfirming || isClaiming;

  if (compact) {
    return (
      <button
        onClick={handleClaimUSDT}
        disabled={!isConnected || !canClaimUSDT || isLoading}
        className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
          !isConnected || !canClaimUSDT || isLoading
            ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
            : 'bg-green-600 hover:bg-green-700 text-white'
        } ${className}`}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin inline" />
        ) : (
          <Coins className="w-4 h-4 inline mr-1" />
        )}
        Claim USDT
      </button>
    );
  }

  const formattedAmount = Number(formatUnits(BigInt(FAUCET_AMOUNT_USDT * 10 ** 6), 6)).toLocaleString(undefined, { maximumFractionDigits: 0 });

  return (
    <div className={`bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-5 lg:p-6 ${className}`}>
      <div className="mb-3 sm:mb-4">
        <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2 text-white">
          <Coins className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
          Claim USDT
        </h3>
        <p className="text-xs sm:text-sm text-slate-400">
          Get {formattedAmount} USDT for testing
        </p>
      </div>
      <div className="space-y-3 sm:space-y-4">
        {!canClaimUSDT && remainingCooldownUSDT > 0 && (
          <div className="p-2 sm:p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-xs sm:text-sm text-green-300 flex items-center gap-2">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>Cooldown: {formatCooldown(remainingCooldownUSDT)}</span>
          </div>
        )}
        <button
          onClick={handleClaimUSDT}
          disabled={!isConnected || !canClaimUSDT || isLoading}
          className={`w-full py-2.5 sm:py-3 px-4 rounded-lg font-semibold text-sm sm:text-base transition-colors flex items-center justify-center gap-2 ${
            !isConnected || !canClaimUSDT || isLoading
              ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700 active:bg-green-800 text-white'
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              <span>Claiming...</span>
            </>
          ) : !canClaimUSDT ? (
            <>
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Wait {formatCooldown(remainingCooldownUSDT)}</span>
            </>
          ) : (
            <>
              <Coins className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Claim USDT</span>
            </>
          )}
        </button>
        {!isConnected && (
          <p className="text-xs text-slate-500 text-center">
            Connect wallet to claim
          </p>
        )}
      </div>
    </div>
  );
}

