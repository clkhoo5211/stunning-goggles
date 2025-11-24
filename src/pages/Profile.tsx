import { useAccount, useReadContract } from 'wagmi';
import { formatUnits } from 'viem';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  TrendingUp, 
  Coins, 
  Clock, 
  Target,
  Loader2,
  Wallet,
  BarChart3,
  Award,
  Calendar
} from 'lucide-react';
import addresses from '@lib/contracts/addresses.json';
import { playerStorageAbi } from '@lib/contracts/abi/playerStorage';
import { useGameHistory } from '@hooks/useGameHistory';

const USDT_DECIMALS = 6;

function formatDate(timestamp?: bigint | number): string {
  if (!timestamp || Number(timestamp) === 0) return 'Never';
  return new Date(Number(timestamp) * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function formatDateTime(timestamp?: bigint | number): string {
  if (!timestamp || Number(timestamp) === 0) return 'Never';
  return new Date(Number(timestamp) * 1000).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function Profile() {
  const { address, isConnected } = useAccount();
  const { history } = useGameHistory();

  // Read player state from PlayerStorage
  const { data: playerData, isLoading: isLoadingPlayer } = useReadContract({
    address: addresses.contracts.PlayerStorage as `0x${string}`,
    abi: playerStorageAbi,
    functionName: 'getPlayer',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && isConnected,
      refetchInterval: 10000, // Refetch every 10 seconds
    },
  });

  const [playerState, playerFound] = playerData || [null, false];

  // Calculate stats from history
  const stats = {
    totalDeposits: history.filter((h) => h.action === 'Deposit').length,
    totalWithdrawals: history.filter((h) => h.action === 'Withdraw').length,
    totalRounds: history.filter((h) => h.action === 'Play Round').length,
    totalWins: history.filter((h) => h.action === 'Reward Claimed').length,
    totalLosses: history.filter((h) => h.action === 'Reward Forfeited').length,
    totalLeopards: history.filter((h) => h.action === 'Leopard Bonus').length,
  };

  if (!isConnected) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 sm:p-12 text-center"
        >
          <Wallet className="w-16 h-16 mx-auto mb-6 text-slate-400" />
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Connect Your Wallet</h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Connect your wallet to view your player profile and statistics
          </p>
        </motion.div>
      </div>
    );
  }

  if (isLoadingPlayer) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 sm:p-12 text-center"
        >
          <Loader2 className="w-10 h-10 mx-auto mb-4 animate-spin text-blue-400" />
          <p className="text-slate-400">Loading your profile...</p>
        </motion.div>
      </div>
    );
  }

  if (!playerFound || !playerState) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 sm:p-12 text-center"
        >
          <Target className="w-16 h-16 mx-auto mb-6 text-slate-400" />
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-white">New Player</h1>
          <p className="text-slate-400 text-sm sm:text-base mb-6">
            You haven't played any games yet. Start playing to build your profile!
          </p>
          <p className="text-xs sm:text-sm text-slate-500">
            Address: <code className="bg-slate-900 px-2 py-1 rounded text-slate-300">{address}</code>
          </p>
        </motion.div>
      </div>
    );
  }

  const depositedBalance = formatUnits(BigInt(playerState.depositedBalance || 0n), USDT_DECIMALS);
  const winningsBalance = formatUnits(BigInt(playerState.winningsBalance || 0n), USDT_DECIMALS);
  const totalDeposited = formatUnits(BigInt(playerState.totalDeposited || 0n), USDT_DECIMALS);
  const totalWithdrawn = formatUnits(BigInt(playerState.totalWithdrawn || 0n), USDT_DECIMALS);
  const lifetimeWinnings = formatUnits(BigInt(playerState.lifetimeWinnings || 0n), USDT_DECIMALS);
  const totalRoundsPlayed = Number(playerState.totalRoundsPlayed || 0n);
  const totalWins = Number(playerState.totalWins || 0n);
  const totalLosses = Number(playerState.totalLosses || 0n);
  const winRate = totalRoundsPlayed > 0 ? ((totalWins / totalRoundsPlayed) * 100).toFixed(1) : '0.0';

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 sm:mb-8"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-white">Player Profile</h1>
        <p className="text-sm sm:text-base text-slate-400">
          View your stats, achievements, and account information
        </p>
        <div className="mt-4 p-3 sm:p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
          <p className="text-xs sm:text-sm text-slate-400 mb-1">Wallet Address</p>
          <code className="text-xs sm:text-sm text-slate-300 break-all">{address}</code>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Total Rounds */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
            <span className="text-xs sm:text-sm text-slate-400">Rounds</span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-white">{totalRoundsPlayed}</p>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Total games played</p>
        </motion.div>

        {/* Win Rate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
            <span className="text-xs sm:text-sm text-slate-400">Win Rate</span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-white">{winRate}%</p>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {totalWins} wins / {totalLosses} losses
          </p>
        </motion.div>

        {/* Lifetime Winnings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
            <span className="text-xs sm:text-sm text-slate-400">Lifetime Winnings</span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-white">
            {Number(lifetimeWinnings).toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </p>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">USDT</p>
        </motion.div>

        {/* Current Balance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6"
        >
          <div className="flex items-center justify-between mb-2">
            <Coins className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
            <span className="text-xs sm:text-sm text-slate-400">Available</span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-white">
            {Number(depositedBalance).toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </p>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            + {Number(winningsBalance).toLocaleString(undefined, { maximumFractionDigits: 2 })} winnings
          </p>
        </motion.div>
      </div>

      {/* Detailed Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Financial Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6"
        >
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-white flex items-center gap-2">
            <Coins className="w-5 h-5 text-blue-400" />
            Financial Summary
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base text-slate-400">Deposited Balance</span>
              <span className="text-sm sm:text-base font-semibold text-white">
                {Number(depositedBalance).toLocaleString(undefined, { maximumFractionDigits: 2 })} USDT
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base text-slate-400">Winnings Balance</span>
              <span className="text-sm sm:text-base font-semibold text-green-400">
                {Number(winningsBalance).toLocaleString(undefined, { maximumFractionDigits: 2 })} USDT
              </span>
            </div>
            <div className="border-t border-slate-700 pt-3 sm:pt-4">
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base text-slate-400">Total Deposited</span>
                <span className="text-sm sm:text-base font-semibold text-white">
                  {Number(totalDeposited).toLocaleString(undefined, { maximumFractionDigits: 2 })} USDT
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base text-slate-400">Total Withdrawn</span>
              <span className="text-sm sm:text-base font-semibold text-slate-300">
                {Number(totalWithdrawn).toLocaleString(undefined, { maximumFractionDigits: 2 })} USDT
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base text-slate-400">Lifetime Winnings</span>
              <span className="text-sm sm:text-base font-semibold text-green-400">
                {Number(lifetimeWinnings).toLocaleString(undefined, { maximumFractionDigits: 2 })} USDT
              </span>
            </div>
          </div>
        </motion.div>

        {/* Game Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6"
        >
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-400" />
            Game Statistics
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base text-slate-400">Total Rounds</span>
              <span className="text-sm sm:text-base font-semibold text-white">{totalRoundsPlayed}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base text-slate-400">Wins</span>
              <span className="text-sm sm:text-base font-semibold text-green-400">{totalWins}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base text-slate-400">Losses</span>
              <span className="text-sm sm:text-base font-semibold text-red-400">{totalLosses}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm sm:text-base text-slate-400">Win Rate</span>
              <span className="text-sm sm:text-base font-semibold text-white">{winRate}%</span>
            </div>
            <div className="border-t border-slate-700 pt-3 sm:pt-4">
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base text-slate-400">Leopard Bonuses</span>
                <span className="text-sm sm:text-base font-semibold text-yellow-400">{stats.totalLeopards}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Activity Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6"
      >
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-white flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-400" />
          Activity Timeline
        </h2>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-slate-400">First Play</span>
            <span className="text-slate-300">
              {formatDateTime(playerState.firstPlayTimestamp)}
            </span>
          </div>
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-slate-400">Last Play</span>
            <span className="text-slate-300">
              {formatDateTime(playerState.lastPlayTimestamp)}
            </span>
          </div>
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <span className="text-slate-400">Last Deposit</span>
            <span className="text-slate-300">
              {formatDateTime(playerState.lastDepositTime)}
            </span>
          </div>
          {playerState.hasActiveSession && (
            <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300">Active session in progress</span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
