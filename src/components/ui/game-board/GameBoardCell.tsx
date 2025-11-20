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
  const isJackpot = payout === 6000;
  const isHighValue = (payout || 0) >= 1400 && !isJackpot;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: animationDelay }}
      className={clsx('game-board-cell', appearanceClass, {
        'game-board-cell--active': isActive,
        'animate-pulse-glow': isPlaying && isActive,
        'casino-cell--jackpot': isJackpot,
        'casino-cell--penalty': isPenalty,
      })}
    >
      {/* Decorative Corners for High Value & Jackpot */}
      {(isHighValue || isJackpot) && (
        <>
          <div className="cell-corner cell-corner-tl" />
          <div className="cell-corner cell-corner-tr" />
          <div className="cell-corner cell-corner-bl" />
          <div className="cell-corner cell-corner-br" />
        </>
      )}

      {/* Tassels for High Value Cells */}
      {isHighValue && (
        <>
          <div className="cell-tassel cell-tassel-left" />
          <div className="cell-tassel cell-tassel-right" />
        </>
      )}

      {/* Treasure Icon for Jackpot */}
      {isJackpot && <div className="cell-icon-treasure">💰</div>}

      <div className="game-board-cell__label">{cellNumber}</div>
      <div
        className={clsx('game-board-cell__payout', {
          'game-board-cell__payout--penalty': isPenalty,
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
  `${value < 0 ? '-' : ''}¥${Math.abs(value).toLocaleString()}`;

