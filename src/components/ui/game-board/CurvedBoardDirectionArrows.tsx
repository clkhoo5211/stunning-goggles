import './GameBoardView.css';

interface CurvedBoardDirectionArrowsProps {
  direction: 'clockwise' | 'counterclockwise';
  onChange: (direction: 'clockwise' | 'counterclockwise') => void;
  disabled?: boolean;
  type?: 'left' | 'right' | 'both';
}

export function CurvedBoardDirectionArrows({
  direction,
  onChange,
  disabled,
  type = 'both',
}: CurvedBoardDirectionArrowsProps) {

  const showLeft = type === 'both' || type === 'left';
  const showRight = type === 'both' || type === 'right';

  return (
    <div className="curved-board__arrows">
      {showLeft && (
        <button
          type="button"
          className={`curved-board__arrow-button curved-board__arrow-button--ccw${direction === 'counterclockwise' ? ' curved-board__arrow-button--active' : ''
            }`}
          disabled={disabled}
          onClick={() => onChange('counterclockwise')}
        >
          <span className="curved-board__arrow-icon">⟲</span>
          <span className="curved-board__arrow-label">Counter</span>
        </button>
      )}

      {showRight && (
        <button
          type="button"
          className={`curved-board__arrow-button curved-board__arrow-button--cw${direction === 'clockwise' ? ' curved-board__arrow-button--active' : ''
            }`}
          disabled={disabled}
          onClick={() => onChange('clockwise')}
        >
          <span className="curved-board__arrow-icon">⟳</span>
          <span className="curved-board__arrow-label">Clockwise</span>
        </button>
      )}
    </div>
  );
}


