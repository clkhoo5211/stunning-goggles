import type { CSSProperties } from 'react';

import clsx from 'clsx';
import './MovementDirectionSelector.css';

type Direction = 'clockwise' | 'counterclockwise';

export interface ArrowConfig {
  /** 箭头颜色主题 */
  colorTheme?: 'blue' | 'purple' | 'green' | 'red' | 'yellow';
  /** 是否激活状态 */
  isActive?: boolean;
  /** 旋转角度 (0-360度) */
  rotation?: number;
  /** 自定义颜色配置 */
  customColors?: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: { x1: string; y1: string; x2: string; y2: string };
  };
  /** 自定义箭头头部坐标 */
  headPoints?: string;
}

export interface MovementDirectionControlProps {
  direction: Direction;
  onChange: (direction: Direction) => void;
  disabled?: boolean;
}

export interface MovementDirectionSelectorProps extends MovementDirectionControlProps {
  /** 当前箭头的方向 */
  variant: Direction;
  className?: string;
  /** 箭头样式配置 */
  arrowConfig?: ArrowConfig;
  /** 绝对定位等外部样式 */
  style?: CSSProperties;
}

const ARROW_VIEWBOX = '0 0 120 120';
const ARROW_CENTER = { x: 60, y: 60 };
const BASE_ARROW_GEOMETRY = {
  // L形路径: 从右下→左下→左上，尾部与箭头头部保持统一间距
  tailPath: 'M95 95 L35 95 L35 45',
  headPoints: '35,20 55,45 15,45',
};

// 颜色主题配置
const COLOR_THEMES = {
  blue: {
    primary: 'rgba(56, 189, 248, 0.18)',
    secondary: 'rgba(94, 234, 212, 0.5)',
    accent: 'rgba(59, 130, 246, 0.9)',
    gradient: { x1: '0%', y1: '100%', x2: '100%', y2: '0%' },
  },
  purple: {
    primary: 'rgba(129, 140, 248, 0.18)',
    secondary: 'rgba(168, 85, 247, 0.55)',
    accent: 'rgba(236, 72, 153, 0.9)',
    gradient: { x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
  },
  green: {
    primary: 'rgba(34, 197, 94, 0.18)',
    secondary: 'rgba(74, 222, 128, 0.5)',
    accent: 'rgba(22, 163, 74, 0.9)',
    gradient: { x1: '0%', y1: '100%', x2: '100%', y2: '0%' },
  },
  red: {
    primary: 'rgba(239, 68, 68, 0.18)',
    secondary: 'rgba(248, 113, 113, 0.5)',
    accent: 'rgba(220, 38, 38, 0.9)',
    gradient: { x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
  },
  yellow: {
    primary: 'rgba(234, 179, 8, 0.18)',
    secondary: 'rgba(250, 204, 21, 0.5)',
    accent: 'rgba(202, 138, 4, 0.9)',
    gradient: { x1: '100%', y1: '0%', x2: '0%', y2: '100%' },
  },
};

// 计算箭头旋转
function getArrowTransform(direction: Direction, rotation: number = 0) {
  const baseRotation = direction === 'clockwise' ? 180 : 0;
  const totalRotation = baseRotation + rotation;
  return totalRotation !== 0 ? `rotate(${totalRotation}deg)` : undefined;
}

export function MovementDirectionSelector({
  direction,
  onChange,
  disabled = false,
  className,
  variant,
  arrowConfig,
  style,
}: MovementDirectionSelectorProps) {
  const handleSelect = (value: Direction) => {
    if (disabled) return;
    onChange(value);
  };

  const effectiveVariant: Direction = variant ?? 'clockwise';
  const {
    colorTheme = 'blue',
    rotation = 0,
    customColors,
    isActive: forcedIsActive,
    headPoints,
  } = arrowConfig ?? {};
  const colors = customColors || COLOR_THEMES[colorTheme];
  const isActive = forcedIsActive ?? direction === effectiveVariant;
  const transform = getArrowTransform(effectiveVariant, rotation);
  const gradientId = `arrow-gradient-${effectiveVariant}-${colorTheme}-${isActive ? 'active' : 'inactive'}`;
  const svgStyle =
    transform !== undefined
      ? { transform, transformOrigin: `${ARROW_CENTER.x}px ${ARROW_CENTER.y}px` }
      : undefined;
  const positionClass =
    effectiveVariant === 'counterclockwise'
      ? 'movement-selector__button--ccw'
      : 'movement-selector__button--cw';

  return (
    <div className={clsx('movement-selector', className)}>
      <button
        type="button"
        aria-label={
          effectiveVariant === 'counterclockwise' ? 'Move counterclockwise' : 'Move clockwise'
        }
        onClick={() => handleSelect(effectiveVariant)}
        className={clsx('movement-selector__button', positionClass, {
          'movement-selector__button--active': isActive,
          'movement-selector__button--disabled': disabled,
        })}
        disabled={disabled}
        style={style}
      >
        <svg viewBox={ARROW_VIEWBOX} role="presentation" style={svgStyle}>
          <defs>
            <linearGradient
              id={gradientId}
              x1={colors.gradient.x1}
              y1={colors.gradient.y1}
              x2={colors.gradient.x2}
              y2={colors.gradient.y2}
            >
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="42%" stopColor={colors.secondary} />
              <stop offset="100%" stopColor={colors.accent} />
            </linearGradient>
          </defs>
          <path
            className="movement-selector__path"
            d={BASE_ARROW_GEOMETRY.tailPath}
            stroke={`url(#${gradientId})`}
          />
          <polygon
            className="movement-selector__head"
            points={headPoints ?? BASE_ARROW_GEOMETRY.headPoints}
            fill={`url(#${gradientId})`}
          />
        </svg>
      </button>
    </div>
  );
}


