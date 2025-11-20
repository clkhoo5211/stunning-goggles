import { motion } from 'framer-motion';
import { useAccount } from 'wagmi';
import { Loader2, Trophy, Clock, Coins } from 'lucide-react';
import { useGameHistory } from '@hooks/useGameHistory';

function formatTimestamp(timestamp?: number) {
  if (!timestamp) return 'Pending';
  return new Date(timestamp * 1000).toLocaleString();
}

export default function GameHistory() {
  const { isConnected } = useAccount();
  const { history, isLoading, error } = useGameHistory();

  if (!isConnected) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="card text-center py-20"
      >
        <div className="text-6xl mb-6">🔌</div>
        <h1 className="text-3xl font-bold mb-4">Connect to View History</h1>
        <p className="text-slate-400">
          Your game history will appear here once you connect your wallet and play.
        </p>
      </motion.div>
    );
  }

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="card text-center py-20"
      >
        <Loader2 className="w-10 h-10 mx-auto mb-4 animate-spin text-blue-400" />
        <p className="text-slate-400">Loading your game history...</p>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="card text-center py-20"
      >
        <div className="text-6xl mb-6">⚠️</div>
        <h1 className="text-3xl font-bold mb-4">Unable to fetch history</h1>
        <p className="text-slate-400">{error}</p>
      </motion.div>
    );
  }

  if (!history.length) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="card text-center py-20"
      >
        <div className="text-6xl mb-6">📊</div>
        <h1 className="text-3xl font-bold mb-4">No Activity Yet</h1>
        <p className="text-slate-400 mb-2">
          Play, deposit, withdraw or buy rounds to see activity here.
        </p>
        <p className="text-sm text-slate-500">
          Every action is recorded directly from on-chain events.
        </p>
      </motion.div>
    );
  }

  const totalWins = history.filter(
    (entry) =>
      (entry.action === 'Play Round' && Number(entry.payout) > 0) ||
      entry.action === 'Leopard Bonus',
  ).length;

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
      <div className="card mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Game Activity</h1>
            <p className="text-sm text-slate-400">
              Pulled directly from the on-chain activity logger (most recent first)
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <div className="flex items-center gap-1">
              <Coins className="w-4 h-4" />
              {history.filter((entry) => entry.action === 'Deposit').length} Deposits
            </div>
            <div className="flex items-center gap-1">
              <Trophy className="w-4 h-4" />
              {totalWins} Wins
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/5">
          <table className="w-full text-sm">
            <thead className="bg-slate-900/70 text-slate-300 uppercase text-xs tracking-wide">
              <tr>
                <th className="px-4 py-3 text-left">Action</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Details</th>
                <th className="px-4 py-3 text-left">Payout / Amount</th>
                <th className="px-4 py-3 text-left">Round Info</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {history.map((entry) => (
                <tr key={`${entry.txHash}-${entry.logIndex ?? entry.blockNumber}`} className="hover:bg-slate-900/40">
                  <td className="px-4 py-3 font-semibold text-slate-200">{entry.action}</td>
                  <td className="px-4 py-3 text-slate-400">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {formatTimestamp(entry.timestamp)}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-300 space-y-1">
                    {entry.action === 'Play Round' ? (
                      <>
                        <div className="font-mono text-xs bg-white/5 rounded px-2 py-1">
                          Dice: {entry.diceValues.length ? entry.diceValues.join(' · ') : '—'} (Σ {entry.diceSum})
                        </div>
                        <div className="text-xs text-slate-400">
                          Direction: {entry.isClockwise ? 'Clockwise' : 'Counter'}
                        </div>
                        <div className="text-xs text-slate-400">
                          Position: {entry.startPosition} → {entry.endPosition}
                        </div>
                        {entry.isBaozi && <div className="text-xs font-semibold text-green-300">🎉 Baozi Bonus!</div>}
                      </>
                    ) : entry.action === 'Buy Session' ? (
                      <div className="text-xs text-slate-400">
                        Started session of {entry.rounds || 10} rounds for {Number(entry.amount).toFixed(2)} USDT
                      </div>
                    ) : entry.action === 'Pending Reward' ? (
                      <>
                        <div className="text-xs text-yellow-200">
                          Potential payout: {Number(entry.payout).toFixed(2)} USDT
                        </div>
                        <div className="text-xs text-slate-400">
                          Landing cell: {entry.endPosition} • Decision deadline:{' '}
                          {formatTimestamp(entry.deadline ?? entry.timestamp)}
                        </div>
                      </>
                    ) : entry.action === 'Reward Claimed' ? (
                      <div className="text-xs text-green-300">
                        Claimed {Number(entry.payout).toFixed(2)} USDT from cell {entry.endPosition}
                      </div>
                    ) : entry.action === 'Reward Forfeited' ? (
                      <div className="text-xs text-slate-400">
                        Forfeited {Number(entry.payout).toFixed(2)} USDT from cell {entry.endPosition}
                      </div>
                    ) : entry.action === 'Leopard Bonus' ? (
                      <>
                        <div className="font-mono text-xs bg-white/5 rounded px-2 py-1">
                          Dice: {entry.diceValues.length ? entry.diceValues.join(' · ') : '–'} (Σ {entry.diceSum})
                        </div>
                        <div className="text-xs text-green-300 font-semibold">
                          Leopard hit! {Number(entry.payout).toFixed(2)} USDT paid instantly
                        </div>
                      </>
                    ) : entry.action === 'Deposit' ? (
                      <div className="text-xs text-slate-400">Deposited {Number(entry.amount).toFixed(2)} USDT</div>
                    ) : entry.action === 'Withdraw' ? (
                      <div className="text-xs text-slate-400">Withdrawn {Number(entry.amount).toFixed(2)} USDT</div>
                    ) : entry.action === 'Claim Refund' ? (
                      <div className="text-xs text-slate-400">
                        Refunded {Number(entry.amount).toFixed(2)} USDT • {entry.rounds || 0} rounds returned
                      </div>
                    ) : entry.action === 'Penalty Refund' ? (
                      <div className="text-xs text-slate-400">
                        Penalty refund of {Number(entry.amount).toFixed(2)} USDT • {entry.rounds || 0} rounds restored
                      </div>
                    ) : (
                      <div className="text-xs text-slate-400">—</div>
                    )}
                  </td>
                  <td className="px-4 py-3 text-slate-200 font-semibold">
                    {['Play Round', 'Pending Reward', 'Reward Claimed', 'Reward Forfeited', 'Leopard Bonus'].includes(
                      entry.action,
                    )
                      ? `${Number(entry.payout).toFixed(2)} USDT`
                      : `${Number(entry.amount).toFixed(2)} USDT`}
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    {entry.action === 'Play Round'
                      ? `Game #${entry.gameId}`
                      : entry.action === 'Leopard Bonus'
                      ? `Game #${entry.gameId}`
                      : entry.action === 'Buy Session'
                      ? `${entry.rounds || 10} rounds`
                      : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}

