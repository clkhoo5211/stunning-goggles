import { useEffect, useMemo, useState } from 'react';
import { useAccount, usePublicClient } from 'wagmi';
import { formatUnits } from 'viem';
import addresses from '@lib/contracts/addresses.json';
import { activityLoggerAbi } from '@lib/contracts/abi/activityLogger';

type ActionType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const ACTION_LABELS: Record<ActionType, string> = {
  0: 'Deposit',
  1: 'Withdraw',
  2: 'Buy Session',
  3: 'Play Round',
  4: 'Pending Reward',
  5: 'Reward Claimed',
  6: 'Reward Forfeited',
  7: 'Leopard Bonus',
  8: 'Penalty Refund',
  9: 'Claim Refund',
  10: 'Pool Contribution',
};

export const POOL_CONTRIBUTION_SOURCES: Record<number, string> = {
  0: 'Deposit Fee',
  1: 'Withdraw Fee',
  2: 'Buy Rounds',
  3: 'Other',
};

export interface GameHistoryEntry {
  txHash: `0x${string}`;
  logIndex?: number;
  action: string;
  gameId: number;
  amount: string;
  rounds: number;
  diceValues: number[];
  diceSum: number;
  isBaozi: boolean;
  isClockwise: boolean;
  startPosition: number;
  endPosition: number;
  payout: string;
  timestamp?: number;
  deadline?: number;
  blockNumber: bigint;
}

export function useGameHistory() {
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const [history, setHistory] = useState<GameHistoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loggerAddress = useMemo(
    () => addresses.contracts.GameActivityLogger as `0x${string}`,
    [],
  );

  useEffect(() => {
    if (!address || !publicClient || !loggerAddress || loggerAddress === '0x0000000000000000000000000000000000000000') {
      setHistory([]);
      return;
    }

    let isMounted = true;
    let unwatch: (() => void) | undefined;

    const parseLog = async (log: any): Promise<GameHistoryEntry | null> => {
      if (!log.args) return null;
      const actionIdx = Number(log.args.action ?? 0) as ActionType;
      const payload = log.args.payload ?? {};
      const diceValuesRaw = Array.isArray(payload.diceValues)
        ? (payload.diceValues as readonly (bigint | number)[])
        : [];
      const block = log.blockHash ? await publicClient.getBlock({ blockHash: log.blockHash }) : undefined;
      const rawTimestamp = payload.timestamp ? Number(payload.timestamp) : undefined;
      const isPendingReward = actionIdx === 4;
      const eventTimestamp = block ? Number(block.timestamp) : rawTimestamp;
      const deadline = isPendingReward ? rawTimestamp : undefined;

      return {
        txHash: log.transactionHash!,
        logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
        action: ACTION_LABELS[actionIdx] ?? 'Unknown',
        gameId: Number(payload.gameId ?? 0),
        amount: formatUnits((payload.amount ?? 0n) as bigint, 6),
        rounds: Number(payload.rounds ?? 0),
        diceValues: diceValuesRaw.map((value) => Number(value)),
        diceSum: Number(payload.diceSum ?? 0),
        isBaozi: Boolean(payload.isBaozi),
        isClockwise: Boolean(payload.isClockwise),
        startPosition: Number(payload.startPosition ?? 0),
        endPosition: Number(payload.endPosition ?? 0),
        payout: formatUnits((payload.payout ?? 0n) as bigint, 6),
        timestamp: eventTimestamp,
        deadline,
        blockNumber: log.blockNumber ?? 0n,
      } satisfies GameHistoryEntry;
    };

    const fetchHistory = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Get current block and calculate a safe starting block (max 50,000 blocks back)
        const currentBlock = await publicClient.getBlockNumber();
        const maxBlockRange = 50000n;
        const fromBlock = currentBlock > maxBlockRange ? currentBlock - maxBlockRange : 0n;

        const logs = await publicClient.getContractEvents({
          address: loggerAddress,
          abi: activityLoggerAbi,
          eventName: 'ActivityLogged',
          fromBlock,
          ...(address ? { args: { player: address } as const } : {}),
        });

        const entries = (await Promise.all(logs.map(parseLog))).filter((entry): entry is GameHistoryEntry => entry !== null);
        if (!isMounted) return;
        const sorted = entries.sort((a, b) => Number(b.blockNumber - a.blockNumber));
        setHistory(sorted);
      } catch (err: any) {
        if (!isMounted) return;
        console.error('Failed to fetch history', err);
        setError(err?.shortMessage || err?.message || 'Failed to load history');
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchHistory();

    unwatch = publicClient.watchContractEvent({
      address: loggerAddress,
      abi: activityLoggerAbi,
      eventName: 'ActivityLogged',
      ...(address ? { args: { player: address } as const } : {}),
      onLogs: async (logs) => {
        const parsed = (await Promise.all(logs.map(parseLog))).filter((entry): entry is GameHistoryEntry => entry !== null);

        setHistory((prev) => {
          const existingKeys = new Set(prev.map((entry) => `${entry.txHash}-${entry.logIndex ?? entry.blockNumber}`));
          const merged = [...parsed.filter((entry) => !existingKeys.has(`${entry.txHash}-${entry.logIndex ?? entry.blockNumber}`)), ...prev];
          return merged.sort((a, b) => Number(b.blockNumber - a.blockNumber));
        });
      },
    });

    return () => {
      isMounted = false;
      unwatch?.();
    };
  }, [address, publicClient, loggerAddress]);

  return {
    history,
    isLoading,
    error,
  };
}
