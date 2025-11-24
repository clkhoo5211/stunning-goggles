import { useAccount, useWriteContract, useWaitForTransactionReceipt, useReadContract, usePublicClient } from 'wagmi';
import { useEffect, useState } from 'react';
import addresses from '@lib/contracts/addresses.json';
import testnetFaucetAbi from '@/lib/contracts/abi/testnetFaucet';

const FAUCET_ADDRESS = addresses.contracts.TestnetFaucet as `0x${string}`;

export function useFaucet() {
  const { address, isConnected } = useAccount();
  const publicClient = usePublicClient();
  const { writeContractAsync, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });
  const [currentBlockTimestamp, setCurrentBlockTimestamp] = useState<bigint | null>(null);
  const [lastSuccessfulClaim, setLastSuccessfulClaim] = useState<'ETH' | 'USDT' | 'PLATFORM' | null>(null);

  // Read last claim times for each token type
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

  const { data: lastClaimTimeUSDT, refetch: refetchLastClaimTimeUSDT } = useReadContract({
    address: FAUCET_ADDRESS,
    abi: testnetFaucetAbi,
    functionName: 'lastClaimTimeUSDT',
    args: address ? [address] : undefined,
    query: { 
      enabled: !!address,
      refetchInterval: 2000, // Refetch every 2 seconds to keep countdown updated
      refetchOnWindowFocus: true,
    },
  });

  const { data: lastClaimTimePlatform, refetch: refetchLastClaimTimePlatform } = useReadContract({
    address: FAUCET_ADDRESS,
    abi: testnetFaucetAbi,
    functionName: 'lastClaimTimePlatform',
    args: address ? [address] : undefined,
    query: { 
      enabled: !!address,
      refetchInterval: 2000, // Refetch every 2 seconds to keep countdown updated
      refetchOnWindowFocus: true,
    },
  });

  // Read cooldown period (2 hours)
  const { data: cooldown } = useReadContract({
    address: FAUCET_ADDRESS,
    abi: testnetFaucetAbi,
    functionName: 'CLAIM_COOLDOWN',
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

  // Refetch last claim times immediately after successful transaction
  useEffect(() => {
    if (isSuccess && lastSuccessfulClaim) {
      // Wait a moment for the transaction to be mined and state updated
      const timer = setTimeout(() => {
        if (lastSuccessfulClaim === 'ETH') {
          refetchLastClaimTimeETH();
        } else if (lastSuccessfulClaim === 'USDT') {
          refetchLastClaimTimeUSDT();
        } else if (lastSuccessfulClaim === 'PLATFORM') {
          refetchLastClaimTimePlatform();
        }
        // Also refetch block timestamp to ensure accurate countdown
        if (publicClient) {
          publicClient.getBlock().then((block) => {
            setCurrentBlockTimestamp(BigInt(block.timestamp));
          });
        }
        setLastSuccessfulClaim(null);
      }, 1000); // Wait 1 second after transaction confirmation
      return () => clearTimeout(timer);
    }
  }, [isSuccess, lastSuccessfulClaim, refetchLastClaimTimeETH, refetchLastClaimTimeUSDT, refetchLastClaimTimePlatform, publicClient]);

  // Separate cooldown checks for each token type
  const canClaimETH = () => {
    if (!lastClaimTimeETH || !cooldown || !currentBlockTimestamp) return true;
    const timeSinceLastClaim = currentBlockTimestamp - (lastClaimTimeETH as bigint);
    return timeSinceLastClaim >= (cooldown as bigint);
  };

  const canClaimUSDT = () => {
    if (!lastClaimTimeUSDT || !cooldown || !currentBlockTimestamp) return true;
    const timeSinceLastClaim = currentBlockTimestamp - (lastClaimTimeUSDT as bigint);
    return timeSinceLastClaim >= (cooldown as bigint);
  };

  const canClaimPlatform = () => {
    if (!lastClaimTimePlatform || !cooldown || !currentBlockTimestamp) return true;
    const timeSinceLastClaim = currentBlockTimestamp - (lastClaimTimePlatform as bigint);
    return timeSinceLastClaim >= (cooldown as bigint);
  };

  const claimMockUSDT = async () => {
    if (!isConnected || !address) {
      throw new Error('Please connect your wallet');
    }

    if (!canClaimUSDT() && currentBlockTimestamp && lastClaimTimeUSDT && cooldown) {
      const timeSinceLastClaim = currentBlockTimestamp - (lastClaimTimeUSDT as bigint);
      const remaining = (cooldown as bigint) - timeSinceLastClaim;
      const hours = Math.floor(Number(remaining) / 3600);
      const minutes = Math.ceil((Number(remaining) % 3600) / 60);
      throw new Error(`USDT cooldown active. Please wait ${hours}h ${minutes}m before claiming again`);
    }

    try {
      const tx = await writeContractAsync({
        address: FAUCET_ADDRESS,
        abi: testnetFaucetAbi,
        functionName: 'claimMockUSDT',
        gas: 500000n, // Set reasonable gas limit (500k should be more than enough for mint + transfer)
      });
      setLastSuccessfulClaim('USDT');
      return tx;
    } catch (error: any) {
      console.error('Claim USDT error:', error);
      // Extract actual error message from viem error
      let errorMessage = 'Failed to claim USDT';
      if (error?.shortMessage) {
        errorMessage = error.shortMessage;
      } else if (error?.message) {
        errorMessage = error.message;
      } else if (error?.data?.message) {
        errorMessage = error.data.message;
      }
      // Check for common revert reasons
      if (errorMessage.includes('cooldown active')) {
        errorMessage = 'Cooldown is still active. Please wait before claiming again.';
      } else if (errorMessage.includes('Internal JSON-RPC error')) {
        errorMessage = 'Transaction failed. Please check if cooldown has expired and try again.';
      }
      throw new Error(errorMessage);
    }
  };

  const claimMockPlatformToken = async () => {
    if (!isConnected || !address) {
      throw new Error('Please connect your wallet');
    }

    if (!canClaimPlatform() && currentBlockTimestamp && lastClaimTimePlatform && cooldown) {
      const timeSinceLastClaim = currentBlockTimestamp - (lastClaimTimePlatform as bigint);
      const remaining = (cooldown as bigint) - timeSinceLastClaim;
      const hours = Math.floor(Number(remaining) / 3600);
      const minutes = Math.ceil((Number(remaining) % 3600) / 60);
      throw new Error(`Platform Token cooldown active. Please wait ${hours}h ${minutes}m before claiming again`);
    }

    try {
      const tx = await writeContractAsync({
        address: FAUCET_ADDRESS,
        abi: testnetFaucetAbi,
        functionName: 'claimMockPlatformToken',
        gas: 500000n, // Set reasonable gas limit (500k should be more than enough for mint + transfer)
      });
      setLastSuccessfulClaim('PLATFORM');
      return tx;
    } catch (error: any) {
      console.error('Claim Platform Token error:', error);
      // Extract actual error message from viem error
      let errorMessage = 'Failed to claim Platform Token';
      if (error?.shortMessage) {
        errorMessage = error.shortMessage;
      } else if (error?.message) {
        errorMessage = error.message;
      } else if (error?.data?.message) {
        errorMessage = error.data.message;
      }
      // Check for common revert reasons
      if (errorMessage.includes('cooldown active')) {
        errorMessage = 'Cooldown is still active. Please wait before claiming again.';
      } else if (errorMessage.includes('Internal JSON-RPC error')) {
        errorMessage = 'Transaction failed. Please check if cooldown has expired and try again.';
      }
      throw new Error(errorMessage);
    }
  };

  // Get remaining cooldown time in seconds for each token type
  const getRemainingCooldownETH = () => {
    if (!lastClaimTimeETH || !cooldown || !currentBlockTimestamp) return 0;
    const timeSinceLastClaim = currentBlockTimestamp - (lastClaimTimeETH as bigint);
    const remaining = (cooldown as bigint) - timeSinceLastClaim;
    return remaining > 0n ? Number(remaining) : 0;
  };

  const getRemainingCooldownUSDT = () => {
    if (!lastClaimTimeUSDT || !cooldown || !currentBlockTimestamp) return 0;
    const timeSinceLastClaim = currentBlockTimestamp - (lastClaimTimeUSDT as bigint);
    const remaining = (cooldown as bigint) - timeSinceLastClaim;
    return remaining > 0n ? Number(remaining) : 0;
  };

  const getRemainingCooldownPlatform = () => {
    if (!lastClaimTimePlatform || !cooldown || !currentBlockTimestamp) return 0;
    const timeSinceLastClaim = currentBlockTimestamp - (lastClaimTimePlatform as bigint);
    const remaining = (cooldown as bigint) - timeSinceLastClaim;
    return remaining > 0n ? Number(remaining) : 0;
  };

  return {
    claimMockUSDT,
    claimMockPlatformToken,
    isPending,
    isConfirming,
    isSuccess,
    canClaimETH: canClaimETH(),
    canClaimUSDT: canClaimUSDT(),
    canClaimPlatform: canClaimPlatform(),
    remainingCooldownETH: getRemainingCooldownETH(),
    remainingCooldownUSDT: getRemainingCooldownUSDT(),
    remainingCooldownPlatform: getRemainingCooldownPlatform(),
    lastClaimTimeETH: lastClaimTimeETH ? Number(lastClaimTimeETH as bigint) : null,
    lastClaimTimeUSDT: lastClaimTimeUSDT ? Number(lastClaimTimeUSDT as bigint) : null,
    lastClaimTimePlatform: lastClaimTimePlatform ? Number(lastClaimTimePlatform as bigint) : null,
  };
}

