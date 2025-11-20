import { useMemo } from 'react';

import { useGameContract } from '@hooks/useGameContract';
import { GameBoardView } from '@components/ui/game-board/GameBoardView';
import { AnimatedNumber } from '@components/ui/animated-number';

interface GameBoardProps {
  currentPosition?: number;
  isPlaying?: boolean;
  direction: 'clockwise' | 'counterclockwise';
  onDirectionChange: (direction: 'clockwise' | 'counterclockwise') => void;
  directionDisabled?: boolean;
  animationKey?: number | string; // Key to force re-animation
  onSwipe?: () => void;
}

const DEFAULT_PAYOUTS: number[] = [
  0, 0, 0, 0, 2000, 1400, 100, 1200, 500, 1000,
  200, 1200, 600, 1000, 200, 1200, 400, 1000, 300, 1400,
  300, 1000, 200, 1400, 300, 1200, -580, 1600, 300, 6000,
];

const DEFAULT_BOARD_SEQUENCE = [
  11, 18, 9, 20, 7, 22, 5, 24, 29, 26, 27, 28, 25,
  30, 23, 6, 21, 8, 19, 10, 17, 12, 15, 14, 13, 16,
];

const BOARD_GRID_TEMPLATE: (number | null)[][] = [
  [11, 18, 9, 20, 7, 22, 5, 24, 29],
  [16, null, null, null, null, null, null, null, 26],
  [13, null, null, null, null, null, null, null, 27],
  [14, null, null, null, null, null, null, null, 28],
  [15, null, null, null, null, null, null, null, 25],
  [12, 17, 10, 19, 8, 21, 6, 23, 30],
];

const BOARD_INDEX_TEMPLATE: (number | null)[][] = BOARD_GRID_TEMPLATE.map((row) =>
  row.map((cell) => {
    if (cell === null) return null;
    const index = DEFAULT_BOARD_SEQUENCE.indexOf(cell);
    return index >= 0 ? index : null;
  })
);

export function GameBoard({
  currentPosition = 11,
  isPlaying = false,
  direction,
  onDirectionChange,
  directionDisabled = false,
  animationKey,
  onSwipe,
}: GameBoardProps) {
  const {
    cellPayouts,
    scaledCellPayouts,
    prizePoolBalance,
    prizePoolMultiplier,
    boardSequence,
  } = useGameContract();
  const payouts = scaledCellPayouts ?? cellPayouts ?? DEFAULT_PAYOUTS;

  const boardLayout = useMemo(() => {
    const sequence =
      boardSequence && boardSequence.length === DEFAULT_BOARD_SEQUENCE.length
        ? boardSequence
        : Array.from(DEFAULT_BOARD_SEQUENCE);

    return BOARD_INDEX_TEMPLATE.map((row) =>
      row.map((index) => {
        if (index === null) return null;
        return sequence[index] ?? DEFAULT_BOARD_SEQUENCE[index];
      })
    );
  }, [boardSequence]);

  const totalPoolDisplay = useMemo(() => {
    const balanceValue =
      prizePoolBalance !== undefined
        ? Number.parseFloat(prizePoolBalance)
        : 0;
    const multiplierValue =
      prizePoolMultiplier !== undefined ? Number(prizePoolMultiplier) : null;

    return (
      <div className="game-board__pool-content">
        <span className="game-board__pool-label">总奖励池</span>
        <span className="game-board__pool-amount">
          <AnimatedNumber
            value={balanceValue}
            precision={2}
            format={(val) =>
              val.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            }
          />{' '}
          USDT
        </span>
        {multiplierValue !== null && (
          <span className="game-board__pool-multiplier">
            倍率 <AnimatedNumber value={multiplierValue} precision={2} />×
          </span>
        )}
      </div>
    );
  }, [prizePoolBalance, prizePoolMultiplier]);

  return (
    <GameBoardView
      payouts={payouts}
      currentPosition={currentPosition}
      isPlaying={isPlaying}
      directionProps={{
        direction,
        onChange: onDirectionChange,
        disabled: directionDisabled,
      }}
      totalPoolDisplay={totalPoolDisplay}
      boardLayout={boardLayout}
      animationKey={animationKey}
      onSwipe={onSwipe}
    />
  );
}
