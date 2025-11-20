import { useEffect, useState } from 'react';
import { usePublicClient, useAccount } from 'wagmi';
import { luckGovernorAbi } from '@lib/contracts/abi/luckGovernor';
import addresses from '@lib/contracts/addresses.json';

export interface UserVoteInfo {
  support: 0 | 1 | 2; // 0 = Against, 1 = For, 2 = Abstain
  weight: bigint; // Voting power used
  reason?: string;
}

export function useUserVote(proposalId: bigint) {
  const publicClient = usePublicClient();
  const { address } = useAccount();
  const [userVote, setUserVote] = useState<UserVoteInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const governorAddress = addresses.contracts.LuckGovernor as `0x${string}` | undefined;

  useEffect(() => {
    if (!publicClient || !governorAddress || !address || !proposalId) {
      setUserVote(null);
      return;
    }

    let isMounted = true;

    const fetchUserVote = async () => {
      setIsLoading(true);
      try {
        // Fetch VoteCast events for this user (voter is indexed, so we can filter efficiently)
        const logs = await publicClient.getContractEvents({
          address: governorAddress,
          abi: luckGovernorAbi,
          eventName: 'VoteCast',
          args: {
            voter: address, // voter is indexed, so this filters efficiently
          } as any,
          fromBlock: 0n,
        });

        // Filter logs by proposalId (proposalId is not indexed, so we filter manually)
        const userVoteLogs = logs.filter((log) => {
          const args = log.args as any;
          return args && args.proposalId && BigInt(args.proposalId.toString()) === proposalId;
        });

        if (userVoteLogs.length > 0) {
          // Get the most recent vote (in case of multiple votes, though shouldn't happen)
          const latestVote = userVoteLogs[userVoteLogs.length - 1];
          const args = latestVote.args as any;
          
          if (isMounted && args) {
            console.log('[useUserVote] Found user vote for proposal', proposalId.toString(), ':', args);
            setUserVote({
              support: args.support as 0 | 1 | 2,
              weight: args.weight as bigint,
              reason: args.reason as string | undefined,
            });
          }
        } else {
          if (isMounted) {
            setUserVote(null);
          }
        }
      } catch (error) {
        console.error('[useUserVote] Failed to fetch user vote:', error);
        if (isMounted) {
          setUserVote(null);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchUserVote();
  }, [publicClient, governorAddress, address, proposalId]);

  return {
    userVote,
    isLoading,
  };
}

