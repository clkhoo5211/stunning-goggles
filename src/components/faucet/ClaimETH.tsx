import { useState, useEffect } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt, useReadContract, usePublicClient } from 'wagmi';
import { parseEther, formatEther } from 'viem';
import { toast } from 'sonner';
import { Coins, Loader2, Clock } from 'lucide-react';
import addresses from '@lib/contracts/addresses.json';
import testnetFaucetAbi from '@/lib/contracts/abi/testnetFaucet';

const ETH_FAUCET_AMOUNT = parseEther('10'); // 10 ETH
const FAUCET_ADDRESS = addresses.contracts.TestnetFaucet as `0x${string}`;

interface ClaimETHProps {
  className?: string;
  compact?: boolean;
}

export function ClaimETH({ className = '', compact = false }: ClaimETHProps) {
  const { address, isConnected } = useAccount();
  const publicClient = usePublicClient();
  const { writeContractAsync, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });
  const [currentBlockTimestamp, setCurrentBlockTimestamp] = useState<bigint | null>(null);

  // Read cooldown period
  const { data: cooldown } = useReadContract({
    address: FAUCET_ADDRESS,
    abi: testnetFaucetAbi,
    functionName: 'CLAIM_COOLDOWN',
  });

  // Read last claim time for ETH
  const { data: lastClaimTimeETH, refetch: refetchLastClaimTimeETH } = useReadContract({
    address: FAUCET_ADDRESS,
    abi: testnetFaucetAbi,
    functionName: 'lastClaimTimeETH',
    args: address ? [address] : undefined,
    query: { 
      enabled: !!address,
      refetchInterval: 2000, // Refetch every 2 seconds to keep countdown updated
      refetchOnWindowFocus: true,
    },
  });

  // Get current block timestamp from blockchain (not JavaScript Date)
  useEffect(() => {
    if (!publicClient) return;
    
    const fetchBlockTimestamp = async () => {
      try {
        const block = await publicClient.getBlock();
        setCurrentBlockTimestamp(BigInt(block.timestamp));
      } catch (error) {
        console.error('Failed to get block timestamp:', error);
        // Fallback to Date.now() if block fetch fails
        setCurrentBlockTimestamp(BigInt(Math.floor(Date.now() / 1000)));
      }
    };

    fetchBlockTimestamp();
    // Refresh every 5 seconds to keep timestamp current
    const interval = setInterval(fetchBlockTimestamp, 5000);
    return () => clearInterval(interval);
  }, [publicClient]);

  // Refetch last claim time immediately after successful transaction
  useEffect(() => {
    if (isSuccess) {
      // Wait a moment for the transaction to be mined and state updated
      const timer = setTimeout(() => {
        refetchLastClaimTimeETH();
        // Also refetch block timestamp to ensure accurate countdown
        if (publicClient) {
          publicClient.getBlock().then((block) => {
            setCurrentBlockTimestamp(BigInt(block.timestamp));
          });
        }
      }, 1000); // Wait 1 second after transaction confirmation
      return () => clearTimeout(timer);
    }
  }, [isSuccess, refetchLastClaimTimeETH, publicClient]);

  const canClaimNow = () => {
    if (!lastClaimTimeETH || !cooldown || !currentBlockTimestamp) return true;
    const timeSinceLastClaim = currentBlockTimestamp - (lastClaimTimeETH as bigint);
    return timeSinceLastClaim >= (cooldown as bigint);
  };
  
  const canClaim = canClaimNow();

  const getRemainingCooldown = () => {
    if (!lastClaimTimeETH || !cooldown || !currentBlockTimestamp) return 0;
    const timeSinceLastClaim = currentBlockTimestamp - (lastClaimTimeETH as bigint);
    const remaining = (cooldown as bigint) - timeSinceLastClaim;
    return remaining > 0n ? Number(remaining) : 0;
  };

  const remainingCooldown = getRemainingCooldown();

  const formatCooldown = (seconds: number) => {
    if (!seconds || isNaN(seconds) || seconds <= 0) return 'Ready';
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hours > 0) return `${hours}h ${minutes}m ${secs}s`;
    if (minutes > 0) return `${minutes}m ${secs}s`;
    return `${secs}s`;
  };

  const [isClaiming, setIsClaiming] = useState(false);

  const handleClaimETH = async () => {
    if (!isConnected || !address) {
      toast.error('Please connect your wallet');
      return;
    }

    if (!canClaim) {
      toast.error(`ETH cooldown active. Please wait ${formatCooldown(remainingCooldown)} before claiming again`);
      return;
    }

    setIsClaiming(true);
    try {
      await toast.promise(
        writeContractAsync({
          address: FAUCET_ADDRESS,
          abi: testnetFaucetAbi,
          functionName: 'claimETH',
          gas: 200000n, // Set reasonable gas limit for ETH transfer (200k should be enough)
        }),
        {
          loading: 'Claiming ETH...',
          success: `Successfully claimed ${formatEther(ETH_FAUCET_AMOUNT)} ETH!`,
          error: (error: any) => {
            // Extract actual error message
            let errorMessage = 'Failed to claim ETH';
            if (error?.shortMessage) {
              errorMessage = error.shortMessage;
            } else if (error?.message) {
              errorMessage = error.message;
            }
            // Check for common revert reasons
            if (errorMessage.includes('cooldown active')) {
              return 'Cooldown is still active. Please wait before claiming again.';
            } else if (errorMessage.includes('Internal JSON-RPC error')) {
              return 'Transaction failed. Please check if cooldown has expired and try again.';
            }
            return errorMessage;
          },
        }
      );
    } catch (error: any) {
      console.error('Claim ETH error:', error);
    } finally {
      setIsClaiming(false);
    }
  };

  const isLoading = isPending || isConfirming || isClaiming;

  if (compact) {
    return (
      <button
        onClick={handleClaimETH}
        disabled={!isConnected || !canClaim || isLoading}
        className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
          !isConnected || !canClaim || isLoading
            ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        } ${className}`}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin inline" />
        ) : (
          <Coins className="w-4 h-4 inline mr-1" />
        )}
        Claim ETH
      </button>
    );
  }

  return (
    <div className={`bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-5 lg:p-6 ${className}`}>
      <div className="mb-3 sm:mb-4">
        <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2 text-white">
          <Coins className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0" />
          Claim ETH
        </h3>
        <p className="text-xs sm:text-sm text-slate-400">
          Get {formatEther(ETH_FAUCET_AMOUNT)} ETH for testing
        </p>
      </div>
      <div className="space-y-3 sm:space-y-4">
        {!canClaim && remainingCooldown > 0 && (
          <div className="p-2 sm:p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-xs sm:text-sm text-blue-300 flex items-center gap-2">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>Cooldown: {formatCooldown(remainingCooldown)}</span>
          </div>
        )}
        <button
          onClick={handleClaimETH}
          disabled={!isConnected || !canClaim || isLoading}
          className={`w-full py-2.5 sm:py-3 px-4 rounded-lg font-semibold text-sm sm:text-base transition-colors flex items-center justify-center gap-2 ${
            !isConnected || !canClaim || isLoading
              ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white'
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              <span>Claiming...</span>
            </>
          ) : !canClaim ? (
            <>
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Wait {formatCooldown(remainingCooldown)}</span>
            </>
          ) : (
            <>
              <Coins className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Claim ETH</span>
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

