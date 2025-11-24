import { useState, useEffect } from 'react';
import { usePublicClient } from 'wagmi';
import { luckGovernorAbi } from '@lib/contracts/abi/luckGovernor';
import addresses from '@lib/contracts/addresses.json';

export interface ProposalInfo {
  proposalId: bigint;
  proposer: `0x${string}`;
  targets: `0x${string}`[];
  values: bigint[];
  calldatas: `0x${string}`[];
  description: string;
  blockNumber: bigint;
}

export function useProposals() {
  const publicClient = usePublicClient();
  const [proposals, setProposals] = useState<ProposalInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const governorAddress = addresses.contracts.LuckGovernor as `0x${string}` | undefined;

  useEffect(() => {
    if (!publicClient || !governorAddress) {
      setProposals([]);
      return;
    }

    let isMounted = true;
    let unwatch: (() => void) | undefined;

    const fetchProposals = async () => {
      setIsLoading(true);
      console.log('[useProposals] Fetching proposals from:', governorAddress);
      try {
        // Get current block and calculate a safe starting block (max 50,000 blocks back)
        const currentBlock = await publicClient.getBlockNumber();
        const maxBlockRange = 50000n;
        const fromBlock = currentBlock > maxBlockRange ? currentBlock - maxBlockRange : 0n;

        // Use getContractEvents which automatically decodes using the ABI
        const logs = await publicClient.getContractEvents({
          address: governorAddress,
          abi: luckGovernorAbi,
          eventName: 'ProposalCreated',
          fromBlock,
        });

        console.log('[useProposals] Raw logs:', logs.length, logs);

        const parsedProposals: (ProposalInfo | null)[] = await Promise.all(
          logs.map(async (log) => {
            try {
              const block = log.blockHash
                ? await publicClient.getBlock({ blockHash: log.blockHash })
                : null;

              const args = log.args as any;
              if (!args) {
                console.error('No args in log:', log);
                return null;
              }

              return {
                proposalId: args.proposalId as bigint,
                proposer: args.proposer as `0x${string}`,
                targets: args.targets as `0x${string}`[],
                values: args.values as bigint[],
                calldatas: args.calldatas as `0x${string}`[],
                description: args.description as string,
                blockNumber: block ? block.number : log.blockNumber || 0n,
              };
            } catch (decodeError) {
              console.error('Failed to decode proposal log:', decodeError, log);
              return null;
            }
          })
        );

        if (isMounted) {
          const validProposals = parsedProposals.filter((p): p is ProposalInfo => p !== null);
          console.log('[useProposals] Found proposals:', validProposals.length, validProposals);
          setProposals(validProposals.sort((a, b) => Number(b.proposalId - a.proposalId)));
        }
      } catch (error) {
        console.error('[useProposals] Failed to fetch proposals:', error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchProposals();

    // Watch for new proposals
    unwatch = publicClient.watchContractEvent({
      address: governorAddress,
      abi: luckGovernorAbi,
      eventName: 'ProposalCreated',
      onLogs: async (logs) => {
        const newProposals: (ProposalInfo | null)[] = await Promise.all(
          logs.map(async (log) => {
            try {
              const block = log.blockHash
                ? await publicClient.getBlock({ blockHash: log.blockHash })
                : null;

              return {
                proposalId: log.args.proposalId as bigint,
                proposer: log.args.proposer as `0x${string}`,
                targets: log.args.targets as `0x${string}`[],
                values: log.args.values as bigint[],
                calldatas: log.args.calldatas as `0x${string}`[],
                description: log.args.description as string,
                blockNumber: block ? block.number : log.blockNumber || 0n,
              };
            } catch (error) {
              console.error('Failed to process proposal log:', error, log);
              return null;
            }
          })
        );

        if (isMounted) {
          const validProposals = newProposals.filter((p): p is ProposalInfo => p !== null);
          setProposals((prev) => {
            const existingIds = new Set(prev.map((p) => p.proposalId.toString()));
            const unique = validProposals.filter((p) => !existingIds.has(p.proposalId.toString()));
            return [...unique, ...prev].sort((a, b) => Number(b.proposalId - a.proposalId));
          });
        }
      },
    });

    return () => {
      isMounted = false;
      unwatch?.();
    };
  }, [publicClient, governorAddress]);

  return {
    proposals,
    isLoading,
  };
}

