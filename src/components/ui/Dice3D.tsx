import { memo, useMemo } from 'react';
import type { CSSProperties } from 'react';

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;
export type DiceTheme = 'default' | 'wood' | 'metal';

const baseDotPositions: Record<DiceValue, Array<[number, number]>> = {
  1: [[1, 1]],
  2: [[0, 0], [2, 2]],
  3: [[0, 0], [1, 1], [2, 2]],
  4: [[0, 0], [0, 2], [2, 0], [2, 2]],
  5: [[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]],
  6: [[0, 0], [0, 1], [0, 2], [2, 0], [2, 1], [2, 2]],
};

export interface Dice3DProps {
  value: number;
  theme?: DiceTheme;
  size?: number;
}

const clampDiceValue = (value: number): DiceValue => {
  const normalized = Math.min(6, Math.max(1, Math.floor(Number.isFinite(value) ? value : 1)));
  return (normalized || 1) as DiceValue;
};

// Rotations to show each face
const faceRotations: Record<DiceValue, string> = {
  1: 'rotateX(0deg) rotateY(0deg)',
  2: 'rotateX(-90deg) rotateY(0deg)',
  3: 'rotateY(-90deg) rotateX(0deg)',
  4: 'rotateY(90deg) rotateX(0deg)',
  5: 'rotateX(90deg) rotateY(0deg)',
  6: 'rotateX(180deg) rotateY(0deg)',
};

const Dice3DComponent = ({ value, theme = 'default', size }: Dice3DProps) => {
  const diceValue = clampDiceValue(value);

  const wrapperStyle = useMemo(() => {
    const base = {
      transform: faceRotations[diceValue],
    } as CSSProperties;

    if (size) {
      return {
        ...base,
        width: size,
        height: size,
        '--dice-size': `${size}px`,
      } as CSSProperties & { '--dice-size': string };
    }
    return base;
  }, [diceValue, size]);

  // Faces: 1=Front, 2=Top, 3=Right, 4=Left, 5=Bottom, 6=Back
  // Standard dice layout: Opposite sides sum to 7
  const faces: DiceValue[] = [1, 6, 3, 4, 2, 5];
  const faceNames = ['front', 'back', 'right', 'left', 'top', 'bottom'];

  return (
    <div className={`dice3d-container dice3d-theme-${theme}`} style={{ width: size, height: size }}>
      <div className="dice3d" style={wrapperStyle}>
        {faces.map((faceValue, index) => (
          <div key={faceNames[index]} className={`dice3d__face dice3d__face--${faceNames[index]}`}>
            {baseDotPositions[faceValue].map(([row, col], dotIndex) => (
              <span
                key={`${faceValue}-${dotIndex}`}
                className="dice3d__dot"
                style={{ gridRow: row + 1, gridColumn: col + 1 }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Dice3D = memo(Dice3DComponent);
Dice3D.displayName = 'Dice3D';

export default Dice3D;