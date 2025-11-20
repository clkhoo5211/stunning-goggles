import { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import clsx from 'clsx';

import { GameBoardCell } from './GameBoardCell';
import { CurvedBoardDirectionArrows } from './CurvedBoardDirectionArrows';
import './GameBoardView.css';

export interface GameBoardViewProps {
  payouts: readonly number[];
  currentPosition: number;
  isPlaying: boolean;
  directionProps: {
    direction: 'clockwise' | 'counterclockwise';
    onChange: (direction: 'clockwise' | 'counterclockwise') => void;
    disabled: boolean;
  };
  totalPoolDisplay: React.ReactNode;
  boardLayout: (number | null)[][];
  animationKey?: number | string; // Key to force re-animation
  onSwipe?: () => void;
}

export function GameBoardView({
  payouts,
  currentPosition,
  isPlaying,
  directionProps,
  totalPoolDisplay,
  boardLayout,
  animationKey,
  onSwipe,
}: GameBoardViewProps) {
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const [loopWidth, setLoopWidth] = useState(0);
  const [cellStride, setCellStride] = useState(0);
  const cellsRef = useRef<HTMLDivElement | null>(null);

  // Extract linear sequence from board layout
  const perimeterSequence = useMemo(() => extractPerimeterCells(boardLayout), [boardLayout]);
  const { direction } = directionProps;

  // Duplicate cells three times to create a seamless visual loop
  const LOOP_REPEATS = 3;
  const loopCells = useMemo(() => Array.from({ length: LOOP_REPEATS }, () => perimeterSequence).flat(), [perimeterSequence]);

  useEffect(() => {
    const node = cellsRef.current;
    if (!node) return;

    const updateMetrics = () => {
      const firstCell = node.querySelector('.game-board-cell-wrapper') as HTMLElement;
      if (firstCell) {
        const width = firstCell.offsetWidth;
        const style = window.getComputedStyle(node);
        const gap = parseFloat(style.gap) || 16;
        const stride = width + gap;

        setCellStride(stride);
        // Precise loop width based on stride
        setLoopWidth(stride * perimeterSequence.length);
      }
    };

    // Initial update
    updateMetrics();
    // Small delay to ensure layout is stable
    setTimeout(updateMetrics, 100);

    const resizeObserver = new ResizeObserver(updateMetrics);
    resizeObserver.observe(node);

    return () => {
      resizeObserver.disconnect();
    };
  }, [perimeterSequence.length]);

  const lastIndexRef = useRef<number | null>(null);
  const lastPositionRef = useRef<number | null>(null);
  const lastAnimationKeyRef = useRef<number | string | undefined>(undefined);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const isAnimatingRef = useRef<boolean>(false);
  const hasReachedTargetRef = useRef<boolean>(true); // Track if we successfully reached the target
  const animationControlsRef = useRef<{
    rolling: ReturnType<typeof animate> | null;
    center: ReturnType<typeof animate> | null;
    targetIdx: number | null;
  }>({ rolling: null, center: null, targetIdx: null });

  // Calculate x position to center a cell at targetIdx (centers in the middle of 5 visible cells)
  const calculateCenteredPosition = useCallback((targetIdx: number) => {
    if (!loopWidth || !cellStride || perimeterSequence.length === 0 || !viewportRef.current || !cellsRef.current) {
      return 0;
    }

    const viewport = viewportRef.current;
    const viewportWidth = viewport.offsetWidth;
    const viewportCenter = viewportWidth / 2;

    const cellsContainer = cellsRef.current;
    const firstCell = cellsContainer.querySelector('.game-board-cell-wrapper') as HTMLElement;
    const cellWidth = firstCell ? firstCell.offsetWidth : (cellStride - 16);

    // Calculate cell position in the middle loop (second loop, index 1)
    // The start of the middle loop is at loopWidth
    const cellLeftInLoop = targetIdx * cellStride;
    const cellCenterInLoop = cellLeftInLoop + cellWidth / 2;

    const cellCenterInMiddleLoop = loopWidth + cellCenterInLoop;

    // x = viewportCenter - cellCenterInMiddleLoop
    const xOffset = viewportCenter - cellCenterInMiddleLoop;

    return xOffset;
  }, [loopWidth, cellStride, perimeterSequence]);

  // Helper to animate to a specific target index
  const animateToTarget = useCallback((targetIdx: number, forceFullLoop: boolean = false) => {
    if (!loopWidth || !cellStride || !viewportRef.current || !cellsRef.current) return;

    // Stop existing animations
    if (animationControlsRef.current.rolling) animationControlsRef.current.rolling.stop();

    const startX = x.get();
    const viewportWidth = viewportRef.current.offsetWidth;
    const viewportCenter = viewportWidth / 2;
    const pathLength = perimeterSequence.length;

    const cellsContainer = cellsRef.current;
    const firstCell = cellsContainer.querySelector('.game-board-cell-wrapper') as HTMLElement;
    const cellWidth = firstCell ? firstCell.offsetWidth : (cellStride - 16);

    const currentVirtualIdx = (viewportCenter - startX - loopWidth - cellWidth / 2) / cellStride;

    // Calculate difference to target
    const currentMod = ((currentVirtualIdx % pathLength) + pathLength) % pathLength;
    let diff = targetIdx - currentMod;

    // Apply direction constraint
    if (direction === 'clockwise') {
      if (diff <= 0) diff += pathLength;
    } else {
      if (diff >= 0) diff -= pathLength;
    }

    // Force full loop if needed (e.g. new roll)
    if (forceFullLoop && Math.abs(diff) < 0.01) {
      diff += (direction === 'clockwise' ? pathLength : -pathLength);
    }

    // Calculate target virtual index
    const targetVirtualIdx = currentVirtualIdx + diff;

    // Calculate target X
    const cellLeftInLoop = targetVirtualIdx * cellStride;
    const cellCenterInLoop = cellLeftInLoop + cellWidth / 2;
    const cellCenterInMiddleLoop = loopWidth + cellCenterInLoop;
    const finalTargetX = viewportCenter - cellCenterInMiddleLoop;

    isAnimatingRef.current = true;

    // Animate
    animationControlsRef.current.rolling = animate(x, finalTargetX, {
      type: "spring",
      stiffness: 40,
      damping: 25,
      mass: 1.5,
      onComplete: () => {
        isAnimatingRef.current = false;
        hasReachedTargetRef.current = true; // Mark as successfully reached
        lastIndexRef.current = targetIdx;
        // Normalize position to the middle loop to prevent X from growing too large
        const normalized = calculateCenteredPosition(targetIdx);
        x.set(normalized);
      }
    });
  }, [loopWidth, cellStride, perimeterSequence, direction, calculateCenteredPosition, x]);


  // Animate reel to new active cell whenever the currentPosition changes
  useEffect(() => {
    if (!loopWidth || !cellStride || perimeterSequence.length === 0 || !viewportRef.current) return;

    const targetIdx = perimeterSequence.indexOf(currentPosition);
    if (targetIdx === -1) return;

    const lastIdx = lastIndexRef.current;

    // First render: center the cell immediately without animation
    if (lastIdx === null) {
      const centeredX = calculateCenteredPosition(targetIdx);
      x.set(centeredX);
      lastIndexRef.current = targetIdx;
      lastPositionRef.current = currentPosition;
      hasReachedTargetRef.current = true;
      return;
    }

    // Check if we need to animate
    const positionChanged = lastPositionRef.current !== currentPosition;
    const animationKeyChanged = animationKey !== undefined && animationKey !== lastAnimationKeyRef.current;

    // Check if layout metrics changed (e.g. initial load or resize)
    // If loopWidth changed, we need to re-center even if position didn't change
    // We can track lastLoopWidth to detect this.
    // But since loopWidth is in dependency array, this effect runs when it changes.
    // If position didn't change, we should just snap to the correct centered position
    // UNLESS we are currently animating?
    // Actually, if loopWidth changes, our current X is likely invalid/wrong (e.g. 0).
    // So we should always re-center if not animating.

    if (!positionChanged && !animationKeyChanged) {
      // If we are not animating, and not dragging, ensure we are centered correctly
      // This fixes the issue where initial render (loopWidth=0) sets X=0, 
      // and subsequent render (loopWidth>0) didn't update X because position didn't change.
      if (!isDragging && !isAnimatingRef.current) {
        const centeredX = calculateCenteredPosition(targetIdx);
        // Safety check: if current X is 0 (or close) but centeredX is far, force update
        // Or just always update.
        x.set(centeredX);
      }
      return;
    }

    // If dragging, defer animation until drag ends
    if (isDragging) {
      return;
    }

    // Update refs
    lastPositionRef.current = currentPosition;
    if (animationKey !== undefined) lastAnimationKeyRef.current = animationKey;

    // Mark as NOT reached target yet
    hasReachedTargetRef.current = false;

    // Trigger animation
    animateToTarget(targetIdx, animationKeyChanged);

  }, [currentPosition, animationKey, loopWidth, cellStride, perimeterSequence, calculateCenteredPosition, isDragging, animateToTarget]);

  const handleDragEnd = () => {
    setIsDragging(false);

    if (!loopWidth || !cellStride || !viewportRef.current) return;

    // Check if we have a pending target we haven't reached yet
    // This happens if a roll occurred while dragging, or if an animation was interrupted
    // We check hasReachedTargetRef.
    // Also check if currentPosition matches where we are?
    // Actually, if hasReachedTargetRef is false, it means we SHOULD go to currentPosition.

    // However, we also need to check if a NEW roll came in while dragging (which useEffect skipped).
    // If useEffect skipped, refs (lastPositionRef) are OLD.
    // So we should compare currentPosition with lastPositionRef.current.

    const positionChangedWhileDragging = lastPositionRef.current !== currentPosition;
    const animationKeyChangedWhileDragging = animationKey !== undefined && animationKey !== lastAnimationKeyRef.current;

    // If we have a pending roll (either skipped by useEffect OR interrupted animation)
    if (!hasReachedTargetRef.current || positionChangedWhileDragging || animationKeyChangedWhileDragging) {
      // We need to animate to the target
      const targetIdx = perimeterSequence.indexOf(currentPosition);
      if (targetIdx !== -1) {
        // Update refs if they were stale
        lastPositionRef.current = currentPosition;
        if (animationKey !== undefined) lastAnimationKeyRef.current = animationKey;

        hasReachedTargetRef.current = false;
        animateToTarget(targetIdx, animationKeyChangedWhileDragging); // Force loop if key changed
        return;
      }
    }

    // Otherwise, standard snap logic (Explore mode)
    const currentX = x.get();
    const viewportWidth = viewportRef.current.offsetWidth;
    const viewportCenter = viewportWidth / 2;

    const cellsContainer = cellsRef.current;
    const firstCell = cellsContainer?.querySelector('.game-board-cell-wrapper') as HTMLElement;
    const cellWidth = firstCell ? firstCell.offsetWidth : (cellStride - 16);

    const rawIndex = (viewportCenter - currentX - loopWidth - cellWidth / 2) / cellStride;
    const targetIndex = Math.round(rawIndex);

    // Calculate targetX for snap
    const cellLeftInLoop = targetIndex * cellStride;
    const cellCenterInLoop = cellLeftInLoop + cellWidth / 2;
    const cellCenterInMiddleLoop = loopWidth + cellCenterInLoop;
    const targetX = viewportCenter - cellCenterInMiddleLoop;

    animate(x, targetX, {
      type: "spring",
      stiffness: 200,
      damping: 30,
      onComplete: () => {
        const pathLength = perimeterSequence.length;
        const normalizedIndex = ((targetIndex % pathLength) + pathLength) % pathLength;
        const normalizedX = calculateCenteredPosition(normalizedIndex);
        x.set(normalizedX);
      }
    });
  };

  return (
    <div className="game-board-view relative w-full max-w-4xl mx-auto px-4 py-8 flex flex-col items-center">

      {/* Jackpot Banner Area */}
      <div className="w-full mb-8">
        <div className="transform transition-all hover:scale-105 duration-500">
          {totalPoolDisplay}
        </div>
      </div>

      {/* Main Board Area */}
      <div className="relative w-full perspective-1000">

        {/* Direction Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 -translate-x-2 md:-translate-x-8">
          <CurvedBoardDirectionArrows
            direction={directionProps.direction}
            onChange={directionProps.onChange}
            disabled={directionProps.disabled}
            type="left"
          />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20 translate-x-2 md:translate-x-8">
          <CurvedBoardDirectionArrows
            direction={directionProps.direction}
            onChange={directionProps.onChange}
            disabled={directionProps.disabled}
            type="right"
          />
        </div>

        {/* Reel Container */}
        <div
          ref={viewportRef}
          className="relative h-48 md:h-64 w-full overflow-hidden bg-slate-900/50 rounded-3xl border-4 border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.2)] backdrop-blur-sm"
        >
          {/* Background Gradient/Texture */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none z-10" />

          {/* Selection Highlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-36 md:w-36 md:h-48 bg-yellow-400/10 rounded-2xl border-2 border-yellow-400/50 shadow-[0_0_30px_rgba(250,204,21,0.3)] z-0 pointer-events-none" />

          {/* Cells Track */}
          <motion.div
            ref={cellsRef}
            className="absolute top-1/2 left-0 flex items-center gap-4 md:gap-8"
            style={{ x, y: '-50%' }}
            drag="x"
            dragConstraints={{ left: -loopWidth * 2, right: loopWidth }}
            onDragStart={() => {
              setIsDragging(true);
              onSwipe?.();
            }}
            onDragEnd={handleDragEnd}
          >
            {loopCells.map((cellNumber, index) => {
              // Map cellNumber to payout index (assuming 1-based cell numbers)
              const payoutValue = payouts[cellNumber - 1];
              const isActive = cellNumber === currentPosition;

              return (
                <div
                  key={`${cellNumber}-${index}`}
                  className="game-board-cell-wrapper relative flex-shrink-0 w-24 h-32 md:w-32 md:h-44 flex items-center justify-center"
                >
                  <motion.div
                    className={clsx(
                      "transition-all duration-300",
                      isActive ? "scale-100 opacity-100 z-10" : "scale-90 opacity-60 grayscale-[0.5]"
                    )}
                  // We can add 3D rotation based on x position relative to center if we want
                  // But for now let's keep it simple with scale/opacity
                  >
                    <GameBoardCell
                      cellNumber={cellNumber}
                      payout={payoutValue}
                      isActive={isActive}
                      isPenalty={cellNumber === 27}
                      isPlaying={isPlaying}
                      appearanceClass={isActive ? undefined : "casino-cell--default"}
                    />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Mobile Controls Hint */}
      <div className="mt-4 text-slate-400 text-xs uppercase tracking-widest opacity-60">
        Swipe to explore • Tap to select direction
      </div>
    </div>
  );
}

function extractPerimeterCells(boardLayout: (number | null)[][]): number[] {
  const rows = boardLayout.length;
  const cols = boardLayout[0]?.length ?? 0;
  const sequence: number[] = [];

  if (!rows || !cols) return sequence;

  for (let c = 0; c < cols; c += 1) {
    const cell = boardLayout[0][c];
    if (cell !== null) sequence.push(cell);
  }

  for (let r = 1; r < rows - 1; r += 1) {
    const cell = boardLayout[r][cols - 1];
    if (cell !== null) sequence.push(cell);
  }

  for (let c = cols - 1; c >= 0; c -= 1) {
    const cell = boardLayout[rows - 1][c];
    if (cell !== null) sequence.push(cell);
  }

  for (let r = rows - 2; r > 0; r -= 1) {
    const cell = boardLayout[r][0];
    if (cell !== null) sequence.push(cell);
  }

  return sequence;
}
