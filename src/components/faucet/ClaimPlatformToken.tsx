import { useState } from 'react';
import { useAccount } from 'wagmi';
import { formatUnits } from 'viem';
import { toast } from 'sonner';
import { Coins, Loader2, Clock } from 'lucide-react';
import { useFaucet } from '@/hooks/useFaucet';

const FAUCET_AMOUNT_PLATFORM = 1_000_000_000; // 1 billion Platform Token (18 decimals)

interface ClaimPlatformTokenProps {
  className?: string;
  compact?: boolean;
}

export function ClaimPlatformToken({ className = '', compact = false }: ClaimPlatformTokenProps) {
  const { isConnected } = useAccount();
  const {
    claimMockPlatformToken,
    isPending,
    isConfirming,
    canClaimPlatform,
    remainingCooldownPlatform,
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

  const handleClaimPlatformToken = async () => {
    if (!isConnected) {
      toast.error('Please connect your wallet');
      return;
    }

    if (!canClaimPlatform) {
      toast.error(`Please wait ${formatCooldown(remainingCooldownPlatform)} before claiming Platform Token again`);
      return;
    }

    setIsClaiming(true);
    try {
      await toast.promise(claimMockPlatformToken(), {
        loading: 'Claiming Platform Token...',
        success: `Successfully claimed ${Number(formatUnits(BigInt(FAUCET_AMOUNT_PLATFORM * 10 ** 18), 18)).toLocaleString(undefined, { maximumFractionDigits: 2 })} Platform Tokens!`,
        error: (error: any) => {
          // Extract actual error message
          let errorMessage = error?.message || 'Failed to claim Platform Token';
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
      console.error('Claim Platform Token error:', error);
    } finally {
      setIsClaiming(false);
    }
  };

  const isLoading = isPending || isConfirming || isClaiming;

  if (compact) {
    return (
      <button
        onClick={handleClaimPlatformToken}
        disabled={!isConnected || !canClaimPlatform || isLoading}
        className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
          !isConnected || !canClaimPlatform || isLoading
            ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
            : 'bg-purple-600 hover:bg-purple-700 text-white'
        } ${className}`}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin inline" />
        ) : (
          <Coins className="w-4 h-4 inline mr-1" />
        )}
        Claim Platform Token
      </button>
    );
  }

  const formattedAmount = Number(formatUnits(BigInt(FAUCET_AMOUNT_PLATFORM * 10 ** 18), 18)).toLocaleString(undefined, { maximumFractionDigits: 2 });

  return (
    <div className={`bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-5 lg:p-6 ${className}`}>
      <div className="mb-3 sm:mb-4">
        <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2 text-white">
          <Coins className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" />
          Claim Platform Token
        </h3>
        <p className="text-xs sm:text-sm text-slate-400">
          Get {formattedAmount} Platform Tokens for testing
        </p>
      </div>
      <div className="space-y-3 sm:space-y-4">
        {!canClaimPlatform && remainingCooldownPlatform > 0 && (
          <div className="p-2 sm:p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-xs sm:text-sm text-purple-300 flex items-center gap-2">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>Cooldown: {formatCooldown(remainingCooldownPlatform)}</span>
          </div>
        )}
        <button
          onClick={handleClaimPlatformToken}
          disabled={!isConnected || !canClaimPlatform || isLoading}
          className={`w-full py-2.5 sm:py-3 px-4 rounded-lg font-semibold text-sm sm:text-base transition-colors flex items-center justify-center gap-2 ${
            !isConnected || !canClaimPlatform || isLoading
              ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white'
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              <span>Claiming...</span>
            </>
          ) : !canClaimPlatform ? (
            <>
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Wait {formatCooldown(remainingCooldownPlatform)}</span>
            </>
          ) : (
            <>
              <Coins className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Claim Platform Token</span>
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

