import { useEffect, useState, useMemo } from 'react';
import { usePublicClient } from 'wagmi';
import { formatUnits } from 'viem';
import addresses from '@lib/contracts/addresses.json';
import { activityLoggerAbi } from '@lib/contracts/abi/activityLogger';
import { playerStorageAbi } from '@lib/contracts/abi/playerStorage';

const USDT_DECIMALS = 6;
const MAX_PLAYERS_TO_FETCH = 100; // Limit to prevent excessive queries

export interface PlayerRanking {
  address: `0x${string}`;
  lifetimeWinnings: string;
  totalRoundsPlayed: number;
  totalWins: number;
  totalLosses: number;
  winRate: number;
}

export function usePlayerRankings() {
  const publicClient = usePublicClient();
  const [uniquePlayers, setUniquePlayers] = useState<Set<`0x${string}`>>(new Set());
  const [rankings, setRankings] = useState<PlayerRanking[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Step 1: Fetch all unique player addresses from ActivityLogged events
  useEffect(() => {
    if (!publicClient) return;

    let isMounted = true;

    const fetchPlayerAddresses = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const loggerAddress = addresses.contracts.GameActivityLogger as `0x${string}`;
        if (!loggerAddress || loggerAddress === '0x0000000000000000000000000000000000000000') {
          return;
        }

        // Fetch all ActivityLogged events (without filtering by player)
        const logs = await publicClient.getContractEvents({
          address: loggerAddress,
          abi: activityLoggerAbi,
          eventName: 'ActivityLogged',
          fromBlock: 0n,
        });

        if (!isMounted) return;

        // Extract unique player addresses
        const players = new Set<`0x${string}`>();
        for (const log of logs) {
          if (log.args?.player) {
            players.add(log.args.player as `0x${string}`);
          }
        }

        setUniquePlayers(players);
      } catch (err: any) {
        if (!isMounted) return;
        console.error('Failed to fetch player addresses', err);
        setError(err?.shortMessage || err?.message || 'Failed to load player addresses');
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchPlayerAddresses();

    return () => {
      isMounted = false;
    };
  }, [publicClient]);

  // Step 2: Fetch player stats for each unique address
  const playerAddressesArray = useMemo(() => Array.from(uniquePlayers).slice(0, MAX_PLAYERS_TO_FETCH), [uniquePlayers]);

  // Process player stats and create rankings
  useEffect(() => {
    if (playerAddressesArray.length === 0 || !publicClient) {
      setRankings([]);
      return;
    }

    let isMounted = true;

    const processRankings = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const playerStorageAddress = addresses.contracts.PlayerStorage as `0x${string}`;
        if (!playerStorageAddress || playerStorageAddress === '0x0000000000000000000000000000000000000000') {
          return;
        }

        // Fetch all player stats in parallel (with batching to avoid overwhelming the RPC)
        const batchSize = 10;
        const allRankings: PlayerRanking[] = [];

        for (let i = 0; i < playerAddressesArray.length; i += batchSize) {
          if (!isMounted) return;

          const batch = playerAddressesArray.slice(i, i + batchSize);
          const statsPromises = batch.map(async (address) => {
            try {
              const [playerState, found] = await publicClient.readContract({
                address: playerStorageAddress,
                abi: playerStorageAbi,
                functionName: 'getPlayer',
                args: [address],
              });

              if (!found) return null;

              const lifetimeWinnings = formatUnits(BigInt(playerState.lifetimeWinnings || 0n), USDT_DECIMALS);
              const totalRoundsPlayed = Number(playerState.totalRoundsPlayed || 0n);
              const totalWins = Number(playerState.totalWins || 0n);
              const totalLosses = Number(playerState.totalLosses || 0n);
              const winRate = totalRoundsPlayed > 0 ? (totalWins / totalRoundsPlayed) * 100 : 0;

              // Only include players with actual activity
              if (Number(lifetimeWinnings) === 0 && totalRoundsPlayed === 0) {
                return null;
              }

              return {
                address,
                lifetimeWinnings,
                totalRoundsPlayed,
                totalWins,
                totalLosses,
                winRate,
              } as PlayerRanking;
            } catch (err) {
              console.error(`Failed to fetch stats for ${address}`, err);
              return null;
            }
          });

          const batchResults = await Promise.all(statsPromises);
          const validResults = batchResults.filter((r): r is PlayerRanking => r !== null);
          allRankings.push(...validResults);
        }

        if (!isMounted) return;

        // Sort by lifetime winnings (descending)
        allRankings.sort((a, b) => Number(b.lifetimeWinnings) - Number(a.lifetimeWinnings));

        setRankings(allRankings);
      } catch (err: any) {
        if (!isMounted) return;
        console.error('Failed to process rankings', err);
        setError(err?.shortMessage || err?.message || 'Failed to process rankings');
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    processRankings();

    return () => {
      isMounted = false;
    };
  }, [playerAddressesArray, publicClient]);

  return {
    rankings,
    isLoading,
    error,
    totalPlayers: uniquePlayers.size,
  };
}

