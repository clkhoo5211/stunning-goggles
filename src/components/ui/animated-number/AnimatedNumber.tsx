import { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import './AnimatedNumber.css';

export interface AnimatedNumberProps {
  /** Final numeric value to display */
  value: number;
  /** Duration of the animation in milliseconds */
  duration?: number;
  /** Optional precision for rounding before formatting */
  precision?: number;
  /** Optional formatter, defaults to locale string */
  format?: (value: number) => string;
  /** Additional class names passed to the rendered span */
  className?: string;
}

const DEFAULT_DURATION = 1913;

export function AnimatedNumber({
  value,
  duration = DEFAULT_DURATION,
  precision,
  format,
  className,
}: AnimatedNumberProps) {
  const previousValueRef = useRef(value);
  const frameRef = useRef<number>();
  const [displayValue, setDisplayValue] = useState(value);
  const [trend, setTrend] = useState<'up' | 'down' | null>(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (previousValueRef.current === value) return;

    const startValue = previousValueRef.current;
    const delta = value - startValue;

    if (delta === 0) {
      setTrend(null);
      setDisplayValue(value);
      previousValueRef.current = value;
      return;
    }

    setTrend(delta > 0 ? 'up' : 'down');
    setAnimating(true);

    const startTime = performance.now();

    const step = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic for a smooth finish
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + delta * eased;
      setDisplayValue(progress === 1 ? value : currentValue);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        previousValueRef.current = value;
        frameRef.current = undefined;
        // Allow CSS animation to finish before clearing
        window.setTimeout(() => setAnimating(false), duration * 0.6);
      }
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current !== undefined) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = undefined;
      }
    };
  }, [value, duration]);

  const roundedValue = useMemo(() => {
    if (typeof precision === 'number') {
      return Number(displayValue.toFixed(precision));
    }
    return displayValue;
  }, [displayValue, precision]);

  const formattedValue = useMemo(() => {
    if (format) {
      return format(roundedValue);
    }

    const fractionDigits = typeof precision === 'number' ? precision : 0;
    return roundedValue.toLocaleString(undefined, {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    });
  }, [roundedValue, format, precision]);

  return (
    <span
      className={clsx(
        'animated-number',
        className,
        animating && trend === 'up' && 'animated-number--up',
        animating && trend === 'down' && 'animated-number--down'
      )}
    >
      {formattedValue}
    </span>
  );
}
