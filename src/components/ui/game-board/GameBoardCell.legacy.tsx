import { motion } from 'framer-motion';
import clsx from 'clsx';
import { AnimatedNumber } from '@components/ui/animated-number';
import './GameBoardCell.css';

export interface GameBoardCellProps {
  cellNumber: number;
  payout?: number;
  isActive?: boolean;
  isPenalty?: boolean;
  isPlaying?: boolean;
  animationDelay?: number;
  appearanceClass?: string;
}

export function GameBoardCell({
  cellNumber,
  payout,
  isActive = false,
  isPenalty = false,
  isPlaying = false,
  animationDelay = 0,
  appearanceClass,
}: GameBoardCellProps) {
  const hasPayout = typeof payout === 'number';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: animationDelay }}
      className={clsx('game-board-cell', appearanceClass, {
        'game-board-cell--active': isActive,
        'animate-pulse-glow': isPlaying && isActive,
      })}
    >
      <div className="game-board-cell__label">{cellNumber}</div>
      <div
        className={clsx('game-board-cell__payout', {
          'text-emerald-400': isPenalty,
        })}
      >
        {hasPayout ? (
          <AnimatedNumber value={payout!} precision={0} format={formatPayout} />
        ) : (
          '—'
        )}
      </div>
    </motion.div>
  );
}

const formatPayout = (value: number) =>
  `${value < 0 ? '-' : ''}$${Math.abs(value).toLocaleString()}`;


