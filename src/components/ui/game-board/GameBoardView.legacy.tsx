import type { ReactNode } from 'react';

import {
  MovementDirectionSelector,
  type MovementDirectionControlProps,
} from '@components/ui/movement-direction/MovementDirectionSelector';
import { GameBoardCell } from './GameBoardCell';
import './GameBoardView.css';

export interface GameBoardViewProps {
  payouts: readonly number[];
  currentPosition: number;
  isPlaying: boolean;
  directionProps: MovementDirectionControlProps;
  totalPoolDisplay?: ReactNode;
  boardLayout: (number | null)[][];
}

export function GameBoardView({
  payouts,
  currentPosition,
  isPlaying,
  directionProps,
  totalPoolDisplay,
  boardLayout,
}: GameBoardViewProps) {
  const payoutMap = new Map<number, number>();
  payouts.forEach((value, index) => {
    payoutMap.set(index + 1, value);
  });

  const getAppearanceClass = (payout: number | undefined) => {
    if (payout === undefined) return 'border-slate-700/30';
    if (payout < 0) return 'border-emerald-400 bg-emerald-500/10';
    if (payout >= 6000)
      return 'border-yellow-500 bg-gradient-to-br from-yellow-500/20 to-orange-500/20';
    if (payout >= 1400)
      return 'border-blue-400 bg-gradient-to-br from-blue-500/20 to-cyan-500/20';
    if (payout >= 1000)
      return 'border-cyan-500 bg-gradient-to-br from-cyan-500/20 to-blue-500/15';
    if (payout >= 300)
      return 'border-slate-500 bg-gradient-to-br from-slate-500/20 to-slate-600/20';
    return 'border-slate-600 bg-slate-800/40';
  };

  return (
    <div className="game-board">
      <div className="game-board__grid">
        {boardLayout.flatMap((row, rowIndex) =>
          row.map((cellNumber, columnIndex) => {
            if (cellNumber === null) {
              return (
                <div
                  key={`empty-${rowIndex}-${columnIndex}`}
                  className="game-board__placeholder"
                />
              );
            }

            const payout = payoutMap.get(cellNumber);
            const isActive = cellNumber === currentPosition;
            const isPenalty = (payout ?? 0) < 0;

            return (
              <div key={`cell-${cellNumber}`} className="game-board__wrapper">
                <GameBoardCell
                  cellNumber={cellNumber}
                  payout={payout}
                  isActive={isActive}
                  isPenalty={isPenalty}
                  isPlaying={isPlaying}
                  appearanceClass={getAppearanceClass(payout)}
                  animationDelay={(rowIndex * row.length + columnIndex) * 0.015}
                />
              </div>
            );
          }),
        )}
      </div>

      <div className="game-board__overlay">
        <div className="game-board__center">
          <div className="game-board__pool-wrapper">
            <div className="game-board__pool">{totalPoolDisplay}</div>
          </div>
          <MovementDirectionSelector
            {...directionProps}
            variant="counterclockwise"
            arrowConfig={{
              colorTheme: 'blue',
              headPoints: '123,95 98,115 98,75',
            }}
            style={{
              top: '60%',
              left: '19%',
              transform: 'translate(-45%, 5%)',
            }}
          />
          <MovementDirectionSelector
            {...directionProps}
            variant="clockwise"
            arrowConfig={{
              colorTheme: 'purple',
            }}
            style={{
              top: '28%',
              right: '18%',
              transform: 'translate(50%, -45%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}


