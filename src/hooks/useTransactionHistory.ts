import { useEffect, useMemo, useState } from 'react';
import { useAccount, usePublicClient } from 'wagmi';
import { formatUnits } from 'viem';
import addresses from '@lib/contracts/addresses.json';
import { diceGameAbi } from '@lib/contracts/abi/diceGame';

export interface TransactionHistoryEntry {
  txHash: `0x${string}`;
  logIndex?: number;
  action: string;
  amount?: string;
  fee?: string;
  rounds?: number;
  cost?: string;
  gameId?: number;
  endPosition?: number;
  refundAmount?: string;
  poolContribution?: string;
  roundsRemainingBefore?: number;
  timestamp?: number;
  blockNumber: bigint;
}

export function useTransactionHistory() {
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const [history, setHistory] = useState<TransactionHistoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const diceGameAddress = useMemo(
    () => addresses.contracts.DiceGame as `0x${string}`,
    [],
  );

  useEffect(() => {
    if (!address || !publicClient || !diceGameAddress) {
      setHistory([]);
      return;
    }

    let isMounted = true;
    let unwatch: (() => void) | undefined;

    const parseDepositedLog = async (log: any): Promise<TransactionHistoryEntry | null> => {
      if (!log.args || !log.args.player || log.args.player.toLowerCase() !== address?.toLowerCase()) return null;
      const block = log.blockHash ? await publicClient.getBlock({ blockHash: log.blockHash }) : undefined;
      return {
        txHash: log.transactionHash!,
        logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
        action: 'Deposit',
        amount: formatUnits((log.args.amount ?? 0n) as bigint, 6),
        fee: formatUnits((log.args.fee ?? 0n) as bigint, 6),
        timestamp: block ? Number(block.timestamp) : undefined,
        blockNumber: log.blockNumber ?? 0n,
      };
    };

    const parseWithdrawnLog = async (log: any): Promise<TransactionHistoryEntry | null> => {
      if (!log.args || !log.args.player || log.args.player.toLowerCase() !== address?.toLowerCase()) return null;
      const block = log.blockHash ? await publicClient.getBlock({ blockHash: log.blockHash }) : undefined;
      return {
        txHash: log.transactionHash!,
        logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
        action: 'Withdraw',
        amount: formatUnits((log.args.amount ?? 0n) as bigint, 6),
        fee: formatUnits((log.args.fee ?? 0n) as bigint, 6),
        timestamp: block ? Number(block.timestamp) : undefined,
        blockNumber: log.blockNumber ?? 0n,
      };
    };

    const parseRoundsPurchasedLog = async (log: any): Promise<TransactionHistoryEntry | null> => {
      if (!log.args || !log.args.player || log.args.player.toLowerCase() !== address?.toLowerCase()) return null;
      const block = log.blockHash ? await publicClient.getBlock({ blockHash: log.blockHash }) : undefined;
      return {
        txHash: log.transactionHash!,
        logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
        action: 'Buy Rounds',
        rounds: Number(log.args.rounds ?? 0),
        cost: formatUnits((log.args.cost ?? 0n) as bigint, 6),
        timestamp: block ? Number(block.timestamp) : undefined,
        blockNumber: log.blockNumber ?? 0n,
      };
    };

    const parsePendingRewardClaimedLog = async (log: any): Promise<TransactionHistoryEntry | null> => {
      if (!log.args || !log.args.player || log.args.player.toLowerCase() !== address?.toLowerCase()) return null;
      const block = log.blockHash ? await publicClient.getBlock({ blockHash: log.blockHash }) : undefined;
      return {
        txHash: log.transactionHash!,
        logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
        action: 'Claim Reward',
        amount: formatUnits((log.args.payout ?? 0n) as bigint, 6),
        gameId: Number(log.args.gameId ?? 0),
        endPosition: Number(log.args.endPosition ?? 0),
        timestamp: block ? Number(block.timestamp) : undefined,
        blockNumber: log.blockNumber ?? 0n,
      };
    };

    const parsePendingRewardForfeitedLog = async (log: any): Promise<TransactionHistoryEntry | null> => {
      if (!log.args || !log.args.player || log.args.player.toLowerCase() !== address?.toLowerCase()) return null;
      const block = log.blockHash ? await publicClient.getBlock({ blockHash: log.blockHash }) : undefined;
      return {
        txHash: log.transactionHash!,
        logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
        action: 'Forfeit Reward',
        amount: formatUnits((log.args.amount ?? 0n) as bigint, 6),
        gameId: Number(log.args.gameId ?? 0),
        endPosition: Number(log.args.endPosition ?? 0),
        timestamp: block ? Number(block.timestamp) : undefined,
        blockNumber: log.blockNumber ?? 0n,
      };
    };

    const parseClaimRefundAppliedLog = async (log: any): Promise<TransactionHistoryEntry | null> => {
      if (!log.args || !log.args.player || log.args.player.toLowerCase() !== address?.toLowerCase()) return null;
      const block = log.blockHash ? await publicClient.getBlock({ blockHash: log.blockHash }) : undefined;
      return {
        txHash: log.transactionHash!,
        logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
        action: 'Claim Refund',
        refundAmount: formatUnits((log.args.refundAmount ?? 0n) as bigint, 6),
        poolContribution: formatUnits((log.args.poolContribution ?? 0n) as bigint, 6),
        gameId: Number(log.args.gameId ?? 0),
        roundsRemainingBefore: Number(log.args.roundsRemainingBefore ?? 0),
        timestamp: block ? Number(block.timestamp) : undefined,
        blockNumber: log.blockNumber ?? 0n,
      };
    };

    // Define event names
    const eventNames = [
      'Deposited',
      'Withdrawn',
      'RoundsPurchased',
      'PendingRewardClaimed',
      'PendingRewardForfeited',
      'ClaimRefundApplied',
    ] as const;

    const fetchHistory = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Get current block and calculate a safe starting block (max 50,000 blocks back)
        const currentBlock = await publicClient.getBlockNumber();
        const maxBlockRange = 50000n;
        const fromBlock = currentBlock > maxBlockRange ? currentBlock - maxBlockRange : 0n;

        // Fetch events from both DiceGame and DiceGameExt contracts
        // Note: Events are emitted from DiceGameExt, but also declared in DiceGame
        // We'll query both to be safe

        // Query DiceGame for events (DiceGameExt is a module, events are emitted from DiceGame)
        const allLogs = await Promise.all(
          eventNames.map((eventName) =>
            publicClient.getContractEvents({
              address: diceGameAddress,
              abi: diceGameAbi,
              eventName,
              fromBlock,
              ...(address ? { args: { player: address } as any } : {}),
            }).catch(() => [])
          )
        );

        // Parse all logs based on event type
        const parsedEntries: TransactionHistoryEntry[] = [];
        
        for (const logs of allLogs.flat()) {
          let entry: TransactionHistoryEntry | null = null;
          
          // Determine event type by checking which fields are present
          if (logs.eventName === 'Deposited') {
            entry = await parseDepositedLog(logs);
          } else if (logs.eventName === 'Withdrawn') {
            entry = await parseWithdrawnLog(logs);
          } else if (logs.eventName === 'RoundsPurchased') {
            entry = await parseRoundsPurchasedLog(logs);
          } else if (logs.eventName === 'PendingRewardClaimed') {
            entry = await parsePendingRewardClaimedLog(logs);
          } else if (logs.eventName === 'PendingRewardForfeited') {
            entry = await parsePendingRewardForfeitedLog(logs);
          } else if (logs.eventName === 'ClaimRefundApplied') {
            entry = await parseClaimRefundAppliedLog(logs);
          }
          
          if (entry) {
            parsedEntries.push(entry);
          }
        }

        // Remove duplicates based on txHash and logIndex
        const uniqueEntries = Array.from(
          new Map(
            parsedEntries.map((entry) => [`${entry.txHash}-${entry.logIndex}`, entry])
          ).values()
        );

        if (!isMounted) return;
        const sorted = uniqueEntries.sort((a, b) => Number(b.blockNumber - a.blockNumber));
        setHistory(sorted);
      } catch (err: any) {
        if (!isMounted) return;
        console.error('Failed to fetch transaction history', err);
        setError(err?.shortMessage || err?.message || 'Failed to load transaction history');
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchHistory();

    // Watch for new events
    const watchEvents = () => {
      const watchers = eventNames.map((eventName) =>
        publicClient.watchContractEvent({
          address: diceGameAddress,
          abi: diceGameAbi,
          eventName,
          ...(address ? { args: { player: address } as any } : {}),
          onLogs: async (logs) => {
            const parsed: TransactionHistoryEntry[] = [];
            
            for (const log of logs) {
              let entry: TransactionHistoryEntry | null = null;
              
              if (log.eventName === 'Deposited') {
                entry = await parseDepositedLog(log);
              } else if (log.eventName === 'Withdrawn') {
                entry = await parseWithdrawnLog(log);
              } else if (log.eventName === 'RoundsPurchased') {
                entry = await parseRoundsPurchasedLog(log);
              } else if (log.eventName === 'PendingRewardClaimed') {
                entry = await parsePendingRewardClaimedLog(log);
              } else if (log.eventName === 'PendingRewardForfeited') {
                entry = await parsePendingRewardForfeitedLog(log);
              } else if (log.eventName === 'ClaimRefundApplied') {
                entry = await parseClaimRefundAppliedLog(log);
              }
              
              if (entry) {
                parsed.push(entry);
              }
            }

            setHistory((prev) => {
              const existingKeys = new Set(prev.map((entry) => `${entry.txHash}-${entry.logIndex}`));
              const merged = [
                ...parsed.filter((entry) => !existingKeys.has(`${entry.txHash}-${entry.logIndex}`)),
                ...prev,
              ];
              return merged.sort((a, b) => Number(b.blockNumber - a.blockNumber));
            });
          },
        })
      );

      return () => {
        watchers.forEach((w) => w());
      };
    };

    unwatch = watchEvents();

    return () => {
      isMounted = false;
      unwatch?.();
    };
  }, [address, publicClient, diceGameAddress]);

  return {
    history,
    isLoading,
    error,
  };
}

