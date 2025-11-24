import { useEffect, useMemo, useState } from 'react';
import { useAccount, usePublicClient } from 'wagmi';
import { formatUnits } from 'viem';
import addresses from '@lib/contracts/addresses.json';
import { lendingPoolAbi } from '@lib/contracts/abi/lendingPool';

export interface LendingHistoryEntry {
  txHash: `0x${string}`;
  logIndex?: number;
  action: string;
  token?: `0x${string}`;
  tokenSymbol?: string;
  amount: string;
  amountWei: bigint;
  healthFactor?: string;
  remainingDebt?: string;
  liquidator?: `0x${string}`;
  debtAmount?: string;
  collateralAmount?: string;
  timestamp?: number;
  blockNumber: bigint;
}

export function useLendingHistory() {
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const [history, setHistory] = useState<LendingHistoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const lendingPoolAddress = useMemo(
    () => ((addresses.contracts as any).LendingPool || 
            (addresses.contracts as any).lendingPool) as `0x${string}` | undefined,
    [],
  );

  const usdtAddress = useMemo(
    () => addresses.contracts.MockUSDT as `0x${string}`,
    [],
  );

  const platformTokenAddress = useMemo(
    () => addresses.contracts.MockPlatformToken as `0x${string}`,
    [],
  );

  // Helper to get token symbol from address
  const getTokenSymbol = (tokenAddress: `0x${string}` | undefined): string => {
    if (!tokenAddress) return 'Unknown';
    const tokenLower = tokenAddress.toLowerCase();
    if (tokenLower === usdtAddress.toLowerCase()) return 'USDT';
    if (tokenLower === platformTokenAddress.toLowerCase()) return 'PLATFORM';
    return 'Unknown';
  };

  // Helper to get token decimals from address
  const getTokenDecimals = (tokenAddress: `0x${string}` | undefined): number => {
    if (!tokenAddress) return 18;
    const tokenLower = tokenAddress.toLowerCase();
    if (tokenLower === usdtAddress.toLowerCase()) return 6;
    return 18; // Platform token and others use 18 decimals
  };

  useEffect(() => {
    if (!address || !publicClient || !lendingPoolAddress || 
        lendingPoolAddress === '0x0000000000000000000000000000000000000000') {
      setHistory([]);
      return;
    }

    let isMounted = true;
    let unwatch: (() => void) | undefined;

    const parseLog = async (log: any): Promise<LendingHistoryEntry | null> => {
      if (!log.args) return null;
      
      const block = log.blockHash ? await publicClient.getBlock({ blockHash: log.blockHash }) : undefined;
      const eventTimestamp = block ? Number(block.timestamp) : undefined;

      if (log.eventName === 'CollateralDeposited') {
        const token = log.args.token as `0x${string}`;
        const amountWei = log.args.amount as bigint;
        const decimals = getTokenDecimals(token);
        const tokenSymbol = getTokenSymbol(token);
        
        return {
          txHash: log.transactionHash!,
          logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
          action: 'Deposit Collateral',
          token,
          tokenSymbol,
          amount: formatUnits(amountWei, decimals),
          amountWei,
          timestamp: eventTimestamp,
          blockNumber: log.blockNumber ?? 0n,
        };
      }

      if (log.eventName === 'CollateralWithdrawn') {
        const token = log.args.token as `0x${string}`;
        const amountWei = log.args.amount as bigint;
        const decimals = getTokenDecimals(token);
        const tokenSymbol = getTokenSymbol(token);
        
        return {
          txHash: log.transactionHash!,
          logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
          action: 'Withdraw Collateral',
          token,
          tokenSymbol,
          amount: formatUnits(amountWei, decimals),
          amountWei,
          timestamp: eventTimestamp,
          blockNumber: log.blockNumber ?? 0n,
        };
      }

      if (log.eventName === 'Borrowed') {
        const amountWei = log.args.amount as bigint;
        const healthFactorWei = log.args.healthFactor as bigint;
        const healthFactor = formatUnits(healthFactorWei, 18);
        
        return {
          txHash: log.transactionHash!,
          logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
          action: 'Borrow',
          token: platformTokenAddress,
          tokenSymbol: 'PLATFORM',
          amount: formatUnits(amountWei, 18),
          amountWei,
          healthFactor,
          timestamp: eventTimestamp,
          blockNumber: log.blockNumber ?? 0n,
        };
      }

      if (log.eventName === 'Repaid') {
        const amountWei = log.args.amount as bigint;
        const remainingDebtWei = log.args.remainingDebt as bigint;
        
        return {
          txHash: log.transactionHash!,
          logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
          action: 'Repay',
          token: platformTokenAddress,
          tokenSymbol: 'PLATFORM',
          amount: formatUnits(amountWei, 18),
          amountWei,
          remainingDebt: formatUnits(remainingDebtWei, 18),
          timestamp: eventTimestamp,
          blockNumber: log.blockNumber ?? 0n,
        };
      }

      if (log.eventName === 'Liquidated') {
        const debtAmountWei = log.args.debtAmount as bigint;
        const collateralAmountWei = log.args.collateralAmount as bigint;
        const collateralToken = log.args.collateralToken as `0x${string}`;
        const collateralDecimals = getTokenDecimals(collateralToken);
        const tokenSymbol = getTokenSymbol(collateralToken);
        
        return {
          txHash: log.transactionHash!,
          logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
          action: 'Liquidated',
          token: collateralToken,
          tokenSymbol,
          amount: formatUnits(collateralAmountWei, collateralDecimals),
          amountWei: collateralAmountWei,
          liquidator: log.args.liquidator as `0x${string}`,
          debtAmount: formatUnits(debtAmountWei, 18),
          collateralAmount: formatUnits(collateralAmountWei, collateralDecimals),
          timestamp: eventTimestamp,
          blockNumber: log.blockNumber ?? 0n,
        };
      }

      return null;
    };

    const fetchHistory = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch all lending events (filtered by user where possible)
        const userEvents = ['CollateralDeposited', 'CollateralWithdrawn', 'Borrowed', 'Repaid'] as const;
        const userLogs = await Promise.all(
          userEvents.map((eventName) =>
            publicClient.getContractEvents({
              address: lendingPoolAddress,
              abi: lendingPoolAbi,
              eventName,
              fromBlock: 0n,
              ...(address ? { args: { user: address } as any } : {}),
            }).catch(() => [])
          )
        );

        // Fetch liquidated events separately (they don't support user filter in the same way)
        const liquidatedLogs = await publicClient.getContractEvents({
          address: lendingPoolAddress,
          abi: lendingPoolAbi,
          eventName: 'Liquidated',
          fromBlock: 0n,
        }).catch(() => []);

        // Filter liquidated logs to only those where user is the liquidated user
        const userLiquidatedLogs = liquidatedLogs.filter(
          (log: any) => log.args?.user?.toLowerCase() === address?.toLowerCase()
        );

        // Parse all logs
        const parsedUserEntries = await Promise.all(
          userLogs.flat().map(parseLog)
        );
        const parsedLiquidatedEntries = await Promise.all(
          userLiquidatedLogs.map(parseLog)
        );

        // Combine all entries and remove nulls
        const allEntries = [
          ...parsedUserEntries.filter((e): e is LendingHistoryEntry => e !== null),
          ...parsedLiquidatedEntries.filter((e): e is LendingHistoryEntry => e !== null),
        ];
        
        // Remove duplicates based on txHash and logIndex
        const uniqueEntries = Array.from(
          new Map(
            allEntries.map(entry => [`${entry.txHash}-${entry.logIndex}`, entry])
          ).values()
        );

        if (!isMounted) return;
        
        // Sort by block number (most recent first)
        const sorted = uniqueEntries.sort((a, b) => Number(b.blockNumber - a.blockNumber));
        setHistory(sorted);
      } catch (err: any) {
        if (!isMounted) return;
        setError(err?.shortMessage || err?.message || 'Failed to load lending history');
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchHistory();

    // Watch for new events
    if (publicClient && lendingPoolAddress) {
      unwatch = publicClient.watchContractEvent({
        address: lendingPoolAddress,
        abi: lendingPoolAbi,
        eventName: 'CollateralDeposited',
        args: address ? { user: address } : undefined,
        onLogs: () => {
          fetchHistory();
        },
      });
    }

    return () => {
      isMounted = false;
      if (unwatch) {
        unwatch();
      }
    };
  }, [address, publicClient, lendingPoolAddress, usdtAddress, platformTokenAddress]);

  return { history, isLoading, error };
}

