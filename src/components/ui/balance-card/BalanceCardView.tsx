import { motion } from 'framer-motion';
import { DollarSign, TrendingUp } from 'lucide-react';
import { AnimatedNumber } from '@components/ui/animated-number';
import './BalanceCardView.css';

export interface BalanceCardViewProps {
  depositBalance: string;
  withdrawableBalance: string;
  lifetimeDeposited: string;
  lifetimeWinnings: string;
  tokenSymbol: string;
  onDepositClick: () => void;
  onWithdrawClick: () => void;
  isWithdrawDisabled?: boolean;
  stats?: {
    roundsRemaining: number;
    totalRoundsPlayed: number;
    totalWins: number;
  } | null;
}

const formatCurrency = (value: number) =>
  value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const getValueSizeModifier = (value: number) => {
  const sanitized = formatCurrency(Math.abs(value)).replace(/[^0-9]/g, '');
  const digitCount = sanitized.length;

  if (digitCount > 9) {
    return 'dense';
  }
  if (digitCount > 6) {
    return 'compact';
  }
  return 'normal';
};

export function BalanceCardView({
  depositBalance,
  withdrawableBalance,
  lifetimeDeposited,
  lifetimeWinnings,
  tokenSymbol,
  stats,
  onDepositClick,
  onWithdrawClick,
  isWithdrawDisabled = false,
}: BalanceCardViewProps) {
  const numericDepositBalance = Number.parseFloat(depositBalance) || 0;
  const numericWithdrawable = Number.parseFloat(withdrawableBalance) || 0;
  const numericLifetimeDeposited = Number.parseFloat(lifetimeDeposited) || 0;
  const numericLifetimeWinnings = Number.parseFloat(lifetimeWinnings) || 0;

  return (
    <div className="balance-card">
      <div className="balance-card__header">
        <h2 className="balance-card__title">Your Balance</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="balance-card__summary"
      >
        <div className="balance-card__summary-item">
          <span className="balance-card__summary-label">Deposited Balance</span>
          {(() => {
            const size = getValueSizeModifier(numericDepositBalance);
            const modifier =
              size === 'normal' ? '' : ` balance-card__summary-value--${size}`;
            return (
              <span className={`balance-card__summary-value${modifier}`}>
            <AnimatedNumber
              value={numericDepositBalance}
              precision={2}
              format={(val) => formatCurrency(val)}
            />
            <span className="balance-card__summary-unit">{tokenSymbol}</span>
          </span>
            );
          })()}
        </div>
        <div className="balance-card__summary-item">
          <span className="balance-card__summary-label">Earnings Balance</span>
          {(() => {
            const size = getValueSizeModifier(numericWithdrawable);
            const modifier =
              size === 'normal' ? '' : ` balance-card__summary-value--${size}`;
            return (
              <span className={`balance-card__summary-value${modifier}`}>
            <AnimatedNumber
              value={numericWithdrawable}
              precision={2}
              format={(val) => formatCurrency(val)}
            />
            <span className="balance-card__summary-unit">{tokenSymbol}</span>
          </span>
            );
          })()}
        </div>
      </motion.div>

      <div className="balance-card__breakdown">
        <div className="balance-card__breakdown-card">
          <div className="balance-card__breakdown-head">
            <DollarSign className="balance-card__breakdown-icon text-blue-400" size={16} />
            <span className="balance-card__breakdown-label">Acc. Deposited</span>
          </div>
          {(() => {
            const size = getValueSizeModifier(numericLifetimeDeposited);
            const modifier =
              size === 'normal' ? '' : ` balance-card__breakdown-value--${size}`;
            return (
              <span className={`balance-card__breakdown-value${modifier}`}>
            <AnimatedNumber
              value={numericLifetimeDeposited}
              precision={2}
              format={formatCurrency}
            />
                <span className="balance-card__breakdown-unit">{tokenSymbol}</span>
          </span>
            );
          })()}
        </div>
        <div className="balance-card__breakdown-card">
          <div className="balance-card__breakdown-head">
            <TrendingUp className="balance-card__breakdown-icon text-green-400" size={16} />
            <span className="balance-card__breakdown-label">Acc. Winnings</span>
          </div>
          {(() => {
            const size = getValueSizeModifier(numericLifetimeWinnings);
            const modifier =
              size === 'normal' ? '' : ` balance-card__breakdown-value--${size}`;
            return (
              <span className={`balance-card__breakdown-value text-green-400${modifier}`}>
            <AnimatedNumber
              value={numericLifetimeWinnings}
              precision={2}
              format={formatCurrency}
              className="text-green-400"
            />
                <span className="balance-card__breakdown-unit">{tokenSymbol}</span>
          </span>
            );
          })()}
        </div>
      </div>

      {stats && (
        <div className="balance-card__stats">
          <div>
            <span className="balance-card__stats-label">Rounds Remaining</span>
            <span className="balance-card__stats-value text-yellow-400">
              <AnimatedNumber value={stats.roundsRemaining} />
            </span>
          </div>
          <div>
            <span className="balance-card__stats-label">Acc. Played</span>
            <span className="balance-card__stats-value">
              <AnimatedNumber value={stats.totalRoundsPlayed} />
            </span>
          </div>
          <div>
            <span className="balance-card__stats-label">Acc.Wins</span>
            <span className="balance-card__stats-value text-green-400">
              <AnimatedNumber value={stats.totalWins} />
            </span>
          </div>
        </div>
      )}

      <div className="balance-card__actions">
        <button className="balance-card__action-secondary" onClick={onDepositClick}>
          💰 Deposit
        </button>
        <button
          className="balance-card__action-primary"
          onClick={onWithdrawClick}
          disabled={isWithdrawDisabled}
        >
          💸 Withdraw
        </button>
      </div>
    </div>
  );
}
