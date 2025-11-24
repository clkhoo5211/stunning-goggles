import { useReadContract } from 'wagmi';
import { formatUnits } from 'viem';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Users, 
  TrendingUp, 
  Coins,
  Loader2,
  BarChart3,
  Award,
  Zap,
  Target,
  Medal,
  Crown
} from 'lucide-react';
import addresses from '@lib/contracts/addresses.json';
import { prizePoolAbi } from '@lib/contracts/abi/prizePool';
import { usePlayerRankings } from '@hooks/usePlayerRankings';

const USDT_DECIMALS = 6;

// Simple ABI for PlayerRegistry.getTotals()
const playerRegistryAbi = [
  {
    inputs: [],
    name: 'getTotals',
    outputs: [
      { internalType: 'uint256', name: 'totalPlayerCount_', type: 'uint256' },
      { internalType: 'uint256', name: 'totalGamesPlayed_', type: 'uint256' },
      { internalType: 'uint256', name: 'totalWinningsDistributed_', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export default function Leaderboard() {
  // Read platform totals from PlayerRegistry
  const { data: platformTotals, isLoading: isLoadingTotals } = useReadContract({
    address: addresses.contracts.PlayerRegistry as `0x${string}`,
    abi: playerRegistryAbi,
    functionName: 'getTotals',
    query: {
      refetchInterval: 30000, // Refetch every 30 seconds
    },
  });

  // Read prize pool balance
  const { data: poolBalance, isLoading: isLoadingPool } = useReadContract({
    address: addresses.contracts.PrizePool as `0x${string}`,
    abi: prizePoolAbi,
    functionName: 'getPoolBalance',
    query: {
      refetchInterval: 10000, // Refetch every 10 seconds
    },
  });

  // Read current multiplier
  const { data: currentMultiplier, isLoading: isLoadingMultiplier } = useReadContract({
    address: addresses.contracts.PrizePool as `0x${string}`,
    abi: prizePoolAbi,
    functionName: 'getCurrentMultiplier',
    query: {
      refetchInterval: 10000,
    },
  });

  // Fetch player rankings
  const { rankings, isLoading: isLoadingRankings, error: rankingsError } = usePlayerRankings();

  const isLoading = isLoadingTotals || isLoadingPool || isLoadingMultiplier;

  const [totalPlayers, totalGames, totalWinnings] = platformTotals || [0n, 0n, 0n];
  const poolBalanceFormatted = poolBalance ? formatUnits(poolBalance, USDT_DECIMALS) : '0';
  // Multiplier is stored as: 1000 = 1.0×, 4000 = 4.0× (see PrizePool.sol MIN_MULTIPLIER/MAX_MULTIPLIER)
  const multiplierFormatted = currentMultiplier 
    ? (Number(currentMultiplier) / 1000).toFixed(2) 
    : '1.00';

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 sm:mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Leaderboard</h1>
        </div>
        <p className="text-sm sm:text-base text-slate-400">
          See top players, biggest wins, and platform statistics
        </p>
      </motion.div>

      {isLoading ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 sm:p-12 text-center"
        >
          <Loader2 className="w-10 h-10 mx-auto mb-4 animate-spin text-blue-400" />
          <p className="text-slate-400">Loading platform statistics...</p>
        </motion.div>
      ) : (
        <>
          {/* Platform Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Total Players */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                <span className="text-xs sm:text-sm text-slate-400">Total Players</span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white">
                {Number(totalPlayers).toLocaleString()}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Registered players</p>
            </motion.div>

            {/* Total Games */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                <span className="text-xs sm:text-sm text-slate-400">Total Games</span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white">
                {Number(totalGames).toLocaleString()}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Rounds played</p>
            </motion.div>

            {/* Total Winnings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                <span className="text-xs sm:text-sm text-slate-400">Total Winnings</span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white">
                {Number(formatUnits(totalWinnings, USDT_DECIMALS)).toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">USDT distributed</p>
            </motion.div>

            {/* Prize Pool */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <Coins className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                <span className="text-xs sm:text-sm text-slate-400">Prize Pool</span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white">
                {Number(poolBalanceFormatted).toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">USDT available</p>
            </motion.div>
          </div>

          {/* Detailed Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Platform Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6"
            >
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-400" />
                Platform Overview
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-slate-400">Total Players</span>
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {Number(totalPlayers).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-slate-400">Total Games Played</span>
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {Number(totalGames).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-slate-400">Total Winnings Distributed</span>
                  <span className="text-sm sm:text-base font-semibold text-green-400">
                    {Number(formatUnits(totalWinnings, USDT_DECIMALS)).toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })}{' '}
                    USDT
                  </span>
                </div>
                <div className="border-t border-slate-700 pt-3 sm:pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-slate-400">Average per Game</span>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {Number(totalGames) > 0
                        ? Number(formatUnits(totalWinnings, USDT_DECIMALS) / Number(totalGames)).toLocaleString(
                            undefined,
                            { maximumFractionDigits: 2 }
                          )
                        : '0.00'}{' '}
                      USDT
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Prize Pool Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6"
            >
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Prize Pool Status
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-slate-400">Current Balance</span>
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {Number(poolBalanceFormatted).toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })}{' '}
                    USDT
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-slate-400">Current Multiplier</span>
                  <span className="text-sm sm:text-base font-semibold text-yellow-400">
                    {multiplierFormatted}x
                  </span>
                </div>
                <div className="border-t border-slate-700 pt-3 sm:pt-4">
                  <div className="p-3 sm:p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-blue-400" />
                      <span className="text-xs sm:text-sm font-semibold text-blue-300">
                        Pool Health
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400">
                      The prize pool grows with each deposit and game fee. Higher pool balance means
                      better payouts for players!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Top Players Leaderboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
              <h3 className="text-lg sm:text-xl font-bold text-white">Top Players by Lifetime Winnings</h3>
            </div>

            {isLoadingRankings ? (
              <div className="text-center py-8">
                <Loader2 className="w-8 h-8 mx-auto mb-4 animate-spin text-blue-400" />
                <p className="text-sm text-slate-400">Loading player rankings...</p>
              </div>
            ) : rankingsError ? (
              <div className="text-center py-8">
                <p className="text-sm text-red-400 mb-2">Failed to load rankings</p>
                <p className="text-xs text-slate-500">{rankingsError}</p>
              </div>
            ) : rankings.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-sm text-slate-400">No players found yet. Be the first to play!</p>
              </div>
            ) : (
              <div className="space-y-2 sm:space-y-3">
                {rankings.slice(0, 20).map((player, index) => {
                  const rank = index + 1;
                  const getRankIcon = () => {
                    if (rank === 1) return <Crown className="w-5 h-5 text-yellow-400" />;
                    if (rank === 2) return <Medal className="w-5 h-5 text-slate-300" />;
                    if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />;
                    return <span className="text-slate-400 font-bold w-5 h-5 flex items-center justify-center">#{rank}</span>;
                  };

                  return (
                    <motion.div
                      key={player.address}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className={`flex items-center justify-between p-3 sm:p-4 rounded-lg border ${
                        rank <= 3
                          ? 'bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 border-yellow-500/30'
                          : 'bg-slate-800/30 border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        <div className="flex-shrink-0">{getRankIcon()}</div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm font-mono text-slate-300 truncate">
                            {player.address.slice(0, 6)}...{player.address.slice(-4)}
                          </p>
                          <div className="flex items-center gap-2 sm:gap-4 mt-1 text-xs text-slate-400">
                            <span>{player.totalRoundsPlayed} rounds</span>
                            <span>•</span>
                            <span className="text-green-400">{player.totalWins}W</span>
                            <span className="text-red-400">{player.totalLosses}L</span>
                            <span>•</span>
                            <span>{player.winRate.toFixed(1)}% win rate</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 text-right ml-4">
                        <p className="text-sm sm:text-base font-bold text-green-400">
                          {Number(player.lifetimeWinnings).toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                          })}{' '}
                          USDT
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {rankings.length > 20 && (
              <div className="mt-4 pt-4 border-t border-slate-700 text-center">
                <p className="text-xs sm:text-sm text-slate-400">
                  Showing top 20 of {rankings.length} players
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </div>
  );
}
