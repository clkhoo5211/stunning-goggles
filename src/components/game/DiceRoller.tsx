import { useEffect, useMemo, useState } from 'react';

import { DiceRollerView } from '@components/ui/dice-roller/DiceRollerView';

interface DiceRollerProps {
  isRolling: boolean;
  diceValues?: number[];
  onRoll?: () => void;
  disabled?: boolean;
  hasRolledOnce?: boolean;
}

export function DiceRoller({
  isRolling,
  diceValues,
  onRoll,
  disabled = false,
  hasRolledOnce = false,
}: DiceRollerProps) {
  const defaultFaces = useMemo(() => {
    let seed = Math.floor(Math.random() * 0xffffffff) || 1;

    const nextRandom = () => {
      seed = (1664525 * seed + 1013904223) % 0x100000000;
      return seed / 0x100000000;
    };

    return Array.from({ length: 5 }, () => Math.floor(nextRandom() * 6) + 1);
  }, []);

  const [showStats, setShowStats] = useState(false);

  const normalizeDiceValue = (rawValue: unknown, fallback: number): number => {
    if (typeof rawValue !== 'number' || Number.isNaN(rawValue)) {
      return fallback;
    }
    if (!Number.isFinite(rawValue)) {
      return fallback;
    }
    return Math.min(6, Math.max(1, Math.floor(rawValue)));
  };

  const baseValues = useMemo(() => {
    if (!diceValues || diceValues.length === 0) {
      return defaultFaces;
    }
    const fallbackFromInputs = diceValues[diceValues.length - 1];
    return Array.from({ length: 5 }, (_, idx) => {
      const value = diceValues[idx];
      if (typeof value === 'number') {
        return value;
      }
      if (typeof fallbackFromInputs === 'number') {
        return fallbackFromInputs;
      }
      return defaultFaces[idx];
    });
  }, [diceValues, defaultFaces]);

  const fallbackValue = useMemo(
    () => normalizeDiceValue(baseValues[0] ?? defaultFaces[0], defaultFaces[0]),
    [baseValues, defaultFaces]
  );

  const diceSlots = useMemo(
    () => baseValues.map((value) => normalizeDiceValue(value, fallbackValue)),
    [baseValues, fallbackValue]
  );

  const diceSignature = useMemo(() => diceSlots.join('-'), [diceSlots]);

  useEffect(() => {
    if (isRolling || !hasRolledOnce) {
      setShowStats(false);
      return;
    }

    if (!diceSignature) {
      return;
    }

    setShowStats(true);
    const timeoutId = window.setTimeout(() => setShowStats(false), 90_000);
    return () => window.clearTimeout(timeoutId);
  }, [diceSignature, isRolling, hasRolledOnce]);

  const diceSum = diceSlots.reduce((sum, val) => sum + val, 0);
  const isBaozi = diceSlots.every((val) => val === diceSlots[0]);

  return (
    <DiceRollerView
      diceSlots={diceSlots}
      diceSum={diceSum}
      isBaozi={isBaozi}
      isRolling={isRolling}
      disabled={disabled}
      onRoll={onRoll}
      showStats={showStats}
    />
  );
}


