import { motion } from 'framer-motion';
import { useAccount, useChainId, useConfig } from 'wagmi';
import { Loader2, Trophy, Clock, Coins, TrendingUp, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { useGameHistory, POOL_CONTRIBUTION_SOURCES } from '@hooks/useGameHistory';
import { useTransactionHistory } from '@hooks/useTransactionHistory';
import { useNFTHistory } from '@hooks/useNFTHistory';
import { useLendingHistory } from '@hooks/useLendingHistory';
import addresses from '@lib/contracts/addresses.json';
import {
  isMarketplaceEnabled,
  isMyNftsEnabled,
  isLendingEnabled,
} from '../config/features';

function formatTimestamp(timestamp?: number) {
  if (!timestamp) return 'Pending';
  return new Date(timestamp * 1000).toLocaleString();
}

export default function GameHistory() {
  const { isConnected } = useAccount();
  const chainId = useChainId();
  const config = useConfig();
  const { history: gameHistory, isLoading: isLoadingGame, error: gameError } = useGameHistory();
  const { history: transactionHistory, isLoading: isLoadingTransaction, error: transactionError } = useTransactionHistory();
  const { history: nftHistory, isLoading: isLoadingNFT, error: nftError } = useNFTHistory();
  const { history: lendingHistory, isLoading: isLoadingLending, error: lendingError } = useLendingHistory();

  // Only fetch and include histories for enabled features
  const shouldShowNFTHistory = isMarketplaceEnabled() || isMyNftsEnabled();
  const shouldShowLendingHistory = isLendingEnabled();
  const nftHistoryToShow = shouldShowNFTHistory ? nftHistory : [];
  const lendingHistoryToShow = shouldShowLendingHistory ? lendingHistory : [];
  
  // Get block explorer URL for current chain
  const getExplorerUrl = (txHash: string): string => {
    try {
      const currentChain = config.chains.find((chain) => chain.id === chainId);
      if (currentChain?.blockExplorers?.default?.url) {
        return `${currentChain.blockExplorers.default.url}/tx/${txHash}`;
      }
      // Fallback: Use Sepolia Etherscan if chainId is Sepolia
      if (chainId === 11155111) {
        return `https://sepolia.etherscan.io/tx/${txHash}`;
      }
      // Fallback: Use Hardhat Local if chainId is 31337
      if (chainId === 31337) {
        return `http://127.0.0.1:8545/tx/${txHash}`;
      }
      // Default fallback
      return `https://etherscan.io/tx/${txHash}`;
    } catch {
      // Fallback based on chainId
      if (chainId === 11155111) {
        return `https://sepolia.etherscan.io/tx/${txHash}`;
      }
      if (chainId === 31337) {
        return `http://127.0.0.1:8545/tx/${txHash}`;
      }
      return `https://etherscan.io/tx/${txHash}`;
    }
  };
  
  // Merge and sort all histories by block number, only including enabled features
  const allHistory = [
    ...gameHistory, 
    ...transactionHistory as any[], 
    ...nftHistoryToShow as any[], 
    ...lendingHistoryToShow as any[]
  ].sort((a, b) => {
    const blockA = typeof a.blockNumber === 'bigint' ? Number(a.blockNumber) : 0;
    const blockB = typeof b.blockNumber === 'bigint' ? Number(b.blockNumber) : 0;
    return blockB - blockA; // Most recent first
  });
  
  // Only consider loading states for enabled features
  const isLoading = isLoadingGame || 
    isLoadingTransaction || 
    (shouldShowNFTHistory && isLoadingNFT) || 
    (shouldShowLendingHistory && isLoadingLending);
  const error = gameError || 
    transactionError || 
    (shouldShowNFTHistory && nftError) || 
    (shouldShowLendingHistory && lendingError);
  const history = allHistory;

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
          <div className="flex items-center gap-3 text-sm text-slate-400 flex-wrap">
            <div className="flex items-center gap-1">
              <Coins className="w-4 h-4" />
              {history.filter((entry) => entry.action === 'Deposit').length} Deposits
            </div>
            <div className="flex items-center gap-1">
              <Trophy className="w-4 h-4" />
              {totalWins} Wins
            </div>
            {shouldShowNFTHistory && (
              <div className="flex items-center gap-1">
                <ImageIcon className="w-4 h-4" />
                {nftHistory.length} NFT Activities
              </div>
            )}
            {shouldShowLendingHistory && (
              <div className="flex items-center gap-1">
                <Coins className="w-4 h-4" />
                {lendingHistory.length} Lending Activities
              </div>
            )}
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
                  <td className="px-4 py-3 font-semibold text-slate-200">
                    {entry.action === 'Deposit' ? (
                      <span className="text-cyan-400">Deposit</span>
                    ) : entry.action === 'Withdraw' ? (
                      <span className="text-yellow-400">Withdraw</span>
                    ) : entry.action === 'Buy Rounds' ? (
                      <span className="text-blue-400">Buy Rounds</span>
                    ) : entry.action === 'Claim Reward' ? (
                      <span className="text-green-400">Claim Reward</span>
                    ) : entry.action === 'Forfeit Reward' ? (
                      <span className="text-orange-400">Forfeit Reward</span>
                    ) : entry.action === 'Claim Refund' ? (
                      <span className="text-purple-400">Claim Refund</span>
                    ) : entry.action === 'Deposit Collateral' ? (
                      <span className="text-cyan-400">Deposit Collateral</span>
                    ) : entry.action === 'Withdraw Collateral' ? (
                      <span className="text-yellow-400">Withdraw Collateral</span>
                    ) : entry.action === 'Borrow' ? (
                      <span className="text-purple-400">Borrow</span>
                    ) : entry.action === 'Repay' ? (
                      <span className="text-green-400">Repay</span>
                    ) : entry.action === 'Liquidated' ? (
                      <span className="text-red-400">Liquidated</span>
                    ) : (
                      entry.action
                    )}
                  </td>
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
                      <div className="text-xs text-slate-400">
                        Deposited {Number(entry.amount || 0).toFixed(2)} USDT
                        {entry.fee && Number(entry.fee) > 0 && (
                          <span className="text-slate-500"> • Fee: {Number(entry.fee).toFixed(2)} USDT</span>
                        )}
                      </div>
                    ) : entry.action === 'Withdraw' ? (
                      <div className="text-xs text-slate-400">
                        Withdrawn {Number(entry.amount || 0).toFixed(2)} USDT
                        {entry.fee && Number(entry.fee) > 0 && (
                          <span className="text-slate-500"> • Fee: {Number(entry.fee).toFixed(2)} USDT</span>
                        )}
                      </div>
                    ) : entry.action === 'Buy Rounds' ? (
                      <div className="text-xs text-slate-400">
                        Purchased {entry.rounds || 0} rounds for {Number(entry.cost || 0).toFixed(2)} USDT
                      </div>
                    ) : entry.action === 'Claim Reward' ? (
                      <div className="text-xs text-green-300">
                        Claimed {Number(entry.amount || 0).toFixed(2)} USDT from cell {entry.endPosition || 0}
                        {entry.gameId && <span> • Game #{entry.gameId}</span>}
                      </div>
                    ) : entry.action === 'Forfeit Reward' ? (
                      <div className="text-xs text-slate-400">
                        Forfeited {Number(entry.amount || 0).toFixed(2)} USDT from cell {entry.endPosition || 0}
                        {entry.gameId && <span> • Game #{entry.gameId}</span>}
                      </div>
                    ) : entry.action === 'Claim Refund' ? (
                      <div className="text-xs text-slate-400">
                        Refunded {Number(entry.refundAmount || 0).toFixed(2)} USDT
                        {entry.poolContribution && Number(entry.poolContribution) > 0 && (
                          <span className="text-blue-300"> • Pool contribution: {Number(entry.poolContribution).toFixed(2)} USDT</span>
                        )}
                        {entry.roundsRemainingBefore !== undefined && (
                          <span> • Rounds before: {entry.roundsRemainingBefore}</span>
                        )}
                        {entry.gameId && <span> • Game #{entry.gameId}</span>}
                      </div>
                    ) : entry.action === 'Penalty Refund' ? (
                      <div className="text-xs text-slate-400">
                        Penalty refund of {Number(entry.amount).toFixed(2)} USDT • {entry.rounds || 0} rounds restored
                      </div>
                    ) : entry.action === 'Pool Contribution' ? (
                      <div className="text-xs text-blue-300 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {POOL_CONTRIBUTION_SOURCES[entry.endPosition] || 'Unknown'} contribution to prize pool
                      </div>
                    ) : shouldShowNFTHistory && entry.action === 'NFT Listed' ? (
                      <div className="text-xs text-slate-400">
                        NFT #{entry.tokenId?.toString()} • {entry.listingType} • {entry.price} {entry.paymentToken?.toLowerCase() === addresses.contracts.MockUSDT?.toLowerCase() ? 'USDT' : 'PLATFORM'}
                      </div>
                    ) : entry.action === 'NFT Purchased' ? (
                      <div className="text-xs text-green-300">
                        Purchased NFT #{entry.tokenId?.toString()} for {entry.price} {entry.paymentToken?.toLowerCase() === addresses.contracts.MockUSDT?.toLowerCase() ? 'USDT' : 'PLATFORM'}
                      </div>
                    ) : entry.action === 'Listing Cancelled' ? (
                      <div className="text-xs text-slate-400">
                        Cancelled listing for NFT #{entry.tokenId?.toString()}
                      </div>
                    ) : entry.action === 'Auction Bid' ? (
                      <div className="text-xs text-purple-300">
                        Bid {entry.amount} {entry.paymentToken?.toLowerCase() === addresses.contracts.MockUSDT?.toLowerCase() ? 'USDT' : 'PLATFORM'} on NFT #{entry.tokenId?.toString()}
                      </div>
                    ) : entry.action === 'Bid Refunded' ? (
                      <div className="text-xs text-blue-300">
                        Refunded {entry.amount} {entry.paymentToken?.toLowerCase() === addresses.contracts.MockUSDT?.toLowerCase() ? 'USDT' : 'PLATFORM'} for NFT #{entry.tokenId?.toString()}
                      </div>
                    ) : entry.action === 'Auction Settled' ? (
                      <div className="text-xs text-green-300">
                        Auction completed • NFT #{entry.tokenId?.toString()} sold for {entry.amount} {entry.paymentToken?.toLowerCase() === addresses.contracts.MockUSDT?.toLowerCase() ? 'USDT' : 'PLATFORM'}
                      </div>
                    ) : entry.action === 'Offer Created' ? (
                      <div className="text-xs text-blue-300">
                        Offered {entry.amount} {entry.paymentToken?.toLowerCase() === addresses.contracts.MockUSDT?.toLowerCase() ? 'USDT' : 'PLATFORM'} on NFT #{entry.tokenId?.toString()}
                      </div>
                    ) : entry.action === 'Offer Accepted' ? (
                      <div className="text-xs text-green-300">
                        Accepted offer • NFT #{entry.tokenId?.toString()} sold for {entry.amount} {entry.paymentToken?.toLowerCase() === addresses.contracts.MockUSDT?.toLowerCase() ? 'USDT' : 'PLATFORM'}
                      </div>
                    ) : entry.action === 'Offer Cancelled' || entry.action === 'Offer Expired' ? (
                      <div className="text-xs text-slate-400">
                        {entry.action === 'Offer Cancelled' ? 'Cancelled' : 'Expired'} offer on NFT #{entry.tokenId?.toString()} • Refunded {entry.amount} {entry.paymentToken?.toLowerCase() === addresses.contracts.MockUSDT?.toLowerCase() ? 'USDT' : 'PLATFORM'}
                      </div>
                    ) : shouldShowLendingHistory && entry.action === 'Deposit Collateral' ? (
                      <div className="text-xs text-slate-400">
                        Deposited {parseFloat(entry.amount).toLocaleString()} {entry.tokenSymbol}
                      </div>
                    ) : shouldShowLendingHistory && entry.action === 'Withdraw Collateral' ? (
                      <div className="text-xs text-slate-400">
                        Withdrew {parseFloat(entry.amount).toLocaleString()} {entry.tokenSymbol}
                      </div>
                    ) : shouldShowLendingHistory && entry.action === 'Borrow' ? (
                      <>
                        <div className="text-xs text-slate-400">
                          Borrowed {parseFloat(entry.amount).toLocaleString()} {entry.tokenSymbol}
                        </div>
                        {entry.healthFactor && (
                          <div className="text-xs text-slate-500">
                            Health Factor: {parseFloat(entry.healthFactor).toFixed(2)}
                          </div>
                        )}
                      </>
                    ) : shouldShowLendingHistory && entry.action === 'Repay' ? (
                      <>
                        <div className="text-xs text-slate-400">
                          Repaid {parseFloat(entry.amount).toLocaleString()} {entry.tokenSymbol}
                        </div>
                        {entry.remainingDebt && parseFloat(entry.remainingDebt) > 0 && (
                          <div className="text-xs text-slate-500">
                            Remaining Debt: {parseFloat(entry.remainingDebt).toLocaleString()} PLATFORM
                          </div>
                        )}
                        {entry.remainingDebt && parseFloat(entry.remainingDebt) === 0 && (
                          <div className="text-xs text-green-400">✓ Fully Repaid</div>
                        )}
                      </>
                    ) : shouldShowLendingHistory && entry.action === 'Liquidated' ? (
                      <>
                        <div className="text-xs text-red-300">
                          Position liquidated by {entry.liquidator?.slice(0, 6)}...{entry.liquidator?.slice(-4)}
                        </div>
                        {entry.debtAmount && (
                          <div className="text-xs text-slate-500">
                            Debt: {parseFloat(entry.debtAmount).toLocaleString()} PLATFORM
                          </div>
                        )}
                        {entry.collateralAmount && (
                          <div className="text-xs text-slate-500">
                            Collateral: {parseFloat(entry.collateralAmount).toLocaleString()} {entry.tokenSymbol}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-xs text-slate-400">—</div>
                    )}
                  </td>
                  <td className="px-4 py-3 text-slate-200 font-semibold">
                    {entry.action === 'Pool Contribution' ? (
                      <span className="text-blue-300">{Number(entry.amount || 0).toFixed(2)} USDT</span>
                    ) : entry.action === 'Buy Rounds' ? (
                      <span className="text-blue-300">{Number(entry.cost || 0).toFixed(2)} USDT</span>
                    ) : entry.action === 'Claim Refund' ? (
                      <span className="text-purple-300">{Number(entry.refundAmount || 0).toFixed(2)} USDT</span>
                    ) : ['Play Round', 'Pending Reward', 'Reward Claimed', 'Reward Forfeited', 'Leopard Bonus', 'Claim Reward', 'Forfeit Reward'].includes(
                      entry.action,
                    )
                      ? `${Number(entry.payout || entry.amount || 0).toFixed(2)} USDT`
                      : shouldShowNFTHistory && ['NFT Listed', 'NFT Purchased', 'Auction Bid', 'Auction Settled', 'Offer Created', 'Offer Accepted', 'Bid Refunded', 'Offer Cancelled', 'Offer Expired'].includes(entry.action)
                      ? entry.amount && entry.paymentToken
                        ? `${Number(entry.amount).toFixed(entry.paymentToken.toLowerCase() === addresses.contracts.MockUSDT?.toLowerCase() ? 2 : 6)} ${entry.paymentToken.toLowerCase() === addresses.contracts.MockUSDT?.toLowerCase() ? 'USDT' : 'PLATFORM'}`
                        : entry.amount
                        ? `${Number(entry.amount).toFixed(2)}`
                        : '—'
                      : shouldShowLendingHistory && ['Deposit Collateral', 'Withdraw Collateral', 'Borrow', 'Repay', 'Liquidated'].includes(entry.action)
                      ? entry.amount && entry.tokenSymbol
                        ? `${parseFloat(entry.amount).toLocaleString()} ${entry.tokenSymbol}`
                        : entry.amount
                        ? `${parseFloat(entry.amount).toLocaleString()}`
                        : '—'
                      : entry.amount
                      ? `${Number(entry.amount).toFixed(2)} USDT`
                      : '—'}
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    {entry.action === 'Play Round'
                      ? `Game #${entry.gameId}`
                      : entry.action === 'Leopard Bonus'
                      ? `Game #${entry.gameId}`
                      : entry.action === 'Buy Session'
                      ? `${entry.rounds || 10} rounds`
                      : entry.action === 'Pool Contribution'
                      ? POOL_CONTRIBUTION_SOURCES[entry.endPosition] || 'Unknown'
                      : shouldShowNFTHistory && ['NFT Listed', 'NFT Purchased', 'Listing Cancelled', 'Auction Bid', 'Auction Settled', 'Offer Created', 'Offer Accepted', 'Offer Cancelled', 'Offer Expired', 'Bid Refunded'].includes(entry.action)
                      ? entry.tokenId
                        ? `NFT #${entry.tokenId.toString()}`
                        : entry.listingId
                        ? `Listing #${entry.listingId.toString()}`
                        : entry.offerId
                        ? `Offer #${entry.offerId.toString()}`
                        : '—'
                      : shouldShowLendingHistory && ['Deposit Collateral', 'Withdraw Collateral', 'Borrow', 'Repay', 'Liquidated'].includes(entry.action)
                      ? entry.txHash
                        ? (
                            <a
                              href={getExplorerUrl(entry.txHash)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-xs"
                            >
                              View
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )
                        : '—'
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

