import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useAccount } from 'wagmi';
import { motion } from 'framer-motion';
import { Loader2, Volume2, VolumeX } from 'lucide-react';
import { toast } from 'sonner';
import { prettyRpcError } from '@utils/prettyRpcError';
import { GameBoard } from '@components/game/GameBoard';
import { DiceRoller } from '@components/game/DiceRoller';
import { useGameContract } from '@hooks/useGameContract';
import { useSoundEffects } from '@hooks/useSoundEffects';
import { appKit } from '@lib/reown';
import { Modal } from '@components/ui/Modal';
import { HowToPlayModal } from '@components/game/HowToPlayModal';
import { AnimatedNumber } from '@components/ui/animated-number';
import { GameActionBar } from '@components/game/GameActionBar';
import { BalanceCard } from '@components/game/BalanceCard';
import { TransactionLoadingOverlay } from '@components/ui/TransactionLoadingOverlay';
// const MIN_DISPLAY_PRECISION = 2; // Temporarily commented out with pending reward section

const generateRandomDiceFaces = () =>
  Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);

// Extract a useful error message from viem / MetaMask errors so we don't just show "Internal JSON-RPC error"
const getReadableErrorMessage = (error: any): string => {
  if (!error) return 'Transaction failed';

  // viem often exposes a shortMessage that already includes decoded revert info
  if (typeof error.shortMessage === 'string' && error.shortMessage.trim().length > 0) {
    return error.shortMessage;
  }

  // viem metaMessages is an array of human-readable hints
  if (Array.isArray(error.metaMessages) && error.metaMessages.length > 0) {
    return error.metaMessages.join('\n');
  }

  if (typeof error.message === 'string' && error.message.trim().length > 0) {
    return error.message;
  }

  return 'Transaction failed';
};

const DiceGame: React.FC = () => {
  const { isConnected } = useAccount();
  const {
    playerState,
    decisionState,
    playRound,
    buyRounds,
    claimPendingReward,
    forfeitPendingReward,
    refetchPlayerState,
    roundsPerPackage,
    costPerRound,
    depositTokenSymbol,
  } = useGameContract();

  const { playSound, stopSound, isMuted, toggleMute } = useSoundEffects();

  const [isRolling, setIsRolling] = useState(false);
  const [direction, setDirection] = useState<'clockwise' | 'counterclockwise'>('clockwise');
  const [lastDiceValues, setLastDiceValues] = useState<number[]>(() => generateRandomDiceFaces());
  const [hasRolledOnce, setHasRolledOnce] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [isHowToPlayModalOpen, setIsHowToPlayModalOpen] = useState(false);
  const [isBuying, setIsBuying] = useState(false);
  const [isTransactionPending, setIsTransactionPending] = useState(false);
  const [transactionMessage, setTransactionMessage] = useState<string>('');
  const [decisionCountdown, setDecisionCountdown] = useState<number>(0);
  const [decisionDeadline, setDecisionDeadline] = useState<number | null>(null);
  const [userOverrideDirection, setUserOverrideDirection] = useState(false);
  const [pendingExpiredLocally, setPendingExpiredLocally] = useState(false);
  const [resolvingPending] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const pendingSnapshotRef = useRef<{ gameId: number | null; deadline: number | null } | null>(null);

  const hasPendingReward =
    ((decisionState?.pendingActive ?? false) || (playerState?.pendingRewardActive ?? false)) &&
    !pendingExpiredLocally;
  const roundsRemaining = playerState?.roundsRemaining ?? 0;
  // Use roundsPerPackage from contract, but show loading state if not available
  const sessionRounds = roundsPerPackage ?? 10; // Fallback for display only
  const roundCost = costPerRound ? parseFloat(costPerRound) : 100;
  const sessionCost = roundsPerPackage && costPerRound ? roundsPerPackage * parseFloat(costPerRound) : sessionRounds * roundCost;

  // Debug logging
  console.log('[DiceGame] roundsPerPackage:', roundsPerPackage, 'sessionRounds:', sessionRounds);

  const pendingPayoutValue = useMemo(() => {
    if (!playerState?.pendingPayout) return 0;
    return parseFloat(playerState.pendingPayout);
  }, [playerState?.pendingPayout]);

  // Play ambiance on mount if not muted
  useEffect(() => {
    if (!isMuted) {
      playSound('ambiance');
    }
    return () => stopSound('ambiance');
  }, [isMuted, playSound, stopSound]);

  // Play win/jackpot sounds when pending reward becomes active
  useEffect(() => {
    if (hasPendingReward) {
      const isJackpot = playerState?.lastDiceValues?.every((v: number) => v === playerState.lastDiceValues[0]);
      if (isJackpot) {
        playSound('jackpot');
      } else {
        playSound('win');
      }
    }
  }, [hasPendingReward, playerState?.lastDiceValues, playSound]);

  useEffect(() => {
    if (decisionState?.pendingActive) {
      setDecisionDeadline(Number(decisionState.deadline));
    }
  }, [decisionState?.pendingActive, decisionState?.deadline]);

  useEffect(() => {
    if (!playerState?.lastDiceValues) {
      return;
    }

    const hasRecordedRoll = playerState.hasRecordedRoll && playerState.lastDiceValues.some((face: number) => face > 0);
    if (!hasRecordedRoll) {
      return;
    }

    const nextDiceValues = playerState.lastDiceValues;
    const diceChanged =
      nextDiceValues.length !== lastDiceValues.length ||
      nextDiceValues.some((value: number, index: number) => value !== lastDiceValues[index]);

    if (diceChanged) {
      setLastDiceValues(nextDiceValues);
      setHasRolledOnce(true);
    }

    if (!userOverrideDirection) {
      const nextDirection = playerState.lastDirectionClockwise ? 'clockwise' : 'counterclockwise';
      if (nextDirection !== direction) {
        setDirection(nextDirection);
      }
    }
  }, [
    playerState?.lastDiceValues,
    playerState?.lastDirectionClockwise,
    playerState?.hasRecordedRoll,
    userOverrideDirection,
    lastDiceValues,
    direction,
  ]);

  useEffect(() => {
    if (!decisionState?.pendingActive) {
      pendingSnapshotRef.current = null;
      setDecisionDeadline(null);
      setDecisionCountdown(0);
      setPendingExpiredLocally(false);
      return;
    }

    const pendingGameId = playerState?.pendingGameId ? Number(playerState.pendingGameId) : null;
    const nextDeadline = Number(decisionState.deadline);
    const snapshot = pendingSnapshotRef.current;

    if (!snapshot || snapshot.gameId !== pendingGameId || snapshot.deadline !== nextDeadline) {
      pendingSnapshotRef.current = { gameId: pendingGameId, deadline: nextDeadline };
      setDecisionDeadline(nextDeadline);
      setPendingExpiredLocally(false);
    }
  }, [decisionState?.pendingActive, decisionState?.deadline, playerState?.pendingGameId, pendingExpiredLocally]);

  useEffect(() => {
    if (!decisionDeadline) {
      setDecisionCountdown(0);
      return;
    }

    const updateCountdown = () => {
      const remaining = Math.max(0, decisionDeadline - Number(decisionState?.currentTimestamp ?? 0));
      setDecisionCountdown(remaining);
      if (remaining === 0 && !pendingExpiredLocally) {
        setPendingExpiredLocally(true);
        refetchPlayerState?.();
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [decisionDeadline, pendingExpiredLocally, refetchPlayerState, decisionState?.currentTimestamp]);

  const depositBalance = Number.parseFloat(playerState?.depositedBalance ?? '0');
  const winningsBalance = Number.parseFloat(playerState?.winningsBalance ?? '0');
  const lifetimeDeposited = Number.parseFloat(playerState?.totalDeposited ?? '0');
  const lifetimeWinnings = Number.parseFloat(playerState?.lifetimeWinnings ?? '0');
  const canAffordSession = depositBalance >= sessionCost;

  const handleBuyRounds = async () => {
    if (!isConnected) {
      appKit.open();
      return;
    }

    // Validate that roundsPerPackage is loaded from contract
    if (!roundsPerPackage) {
      console.error('roundsPerPackage is not loaded:', { roundsPerPackage, sessionRounds });
      toast.error('Loading game configuration... Please wait and try again.');
      return;
    }

    console.log('Buy rounds called with:', { roundsPerPackage, sessionRounds, playerState });

    if (hasPendingReward) {
      toast.error('Resolve your pending reward before buying a new session.');
      return;
    }

    if (playerState?.hasActiveSession && roundsRemaining > 0) {
      toast.error(`Finish your current ${sessionRounds}-round session before purchasing another.`);
      return;
    }

    if (!canAffordSession) {
      toast.error(`Deposit at least ${sessionCost.toLocaleString()} USDT to start a session.`);
      return;
    }

    // Double-check roundsPerPackage is defined (defensive programming)
    const roundsToBuy = roundsPerPackage;
    if (!roundsToBuy || roundsToBuy <= 0) {
      console.error('roundsPerPackage is invalid:', { roundsPerPackage, roundsToBuy });
      toast.error('Game configuration not loaded. Please refresh the page and try again.');
      return;
    }

    try {
      setIsBuying(true);
      setIsTransactionPending(true);
      setTransactionMessage(`Purchasing new ${roundsToBuy}-round session (${sessionCost.toLocaleString()} USDT)...`);
      playSound('buy_session');
      const toastId = toast.loading(
        `Purchasing new ${roundsToBuy}-round session (${sessionCost.toLocaleString()} USDT)...`
      );
      // Use the exact value from contract, not the fallback
      console.log('[handleBuyRounds] Calling buyRounds with roundsToBuy:', roundsToBuy, 'roundsPerPackage:', roundsPerPackage);
      await buyRounds(roundsToBuy);
      toast.success('Session purchased! Good luck 🍀', { id: toastId });
      setIsBuyModalOpen(false);
      await refetchPlayerState?.();
    } catch (error: any) {
      console.error('Buy rounds error:', error);
      console.error('Error details:', { 
        roundsPerPackage, 
        roundsToBuy,
        sessionRounds,
        playerState,
        errorMessage: error?.shortMessage || error?.message,
        errorData: error?.data,
        errorCause: error?.cause,
        fullError: JSON.stringify(error, Object.getOwnPropertyNames(error))
      });
      
      // Provide more helpful error message based on error type
      const errorMessage = error?.shortMessage || error?.message || 'Failed to buy rounds';
      
      // Check for specific revert reasons
      if (errorMessage.includes('InvalidAmount') || errorMessage.includes('Internal JSON-RPC')) {
        // Check player state to provide more specific error
        if (playerState?.pendingRewardActive) {
          toast.error('You have a pending reward. Please claim or forfeit it first.');
        } else if (playerState?.hasActiveSession && playerState?.roundsRemaining > 0) {
          toast.error(`You have an active session with ${playerState.roundsRemaining} rounds remaining. Finish it first.`);
        } else if (playerState && Number.parseFloat(playerState.depositedBalance) < sessionCost) {
          toast.error(`Insufficient balance. You need ${sessionCost.toLocaleString()} USDT but have ${Number.parseFloat(playerState.depositedBalance).toLocaleString()} USDT.`);
        } else {
          toast.error(`Invalid round count. The contract requires exactly ${roundsToBuy} rounds per package. Please refresh and try again.`);
        }
      } else if (errorMessage.includes('PendingReward')) {
        toast.error('You have a pending reward. Please claim or forfeit it first.');
      } else if (errorMessage.includes('ActiveSession')) {
        toast.error(`You have an active session. Finish it first.`);
      } else if (errorMessage.includes('InsufficientBalance')) {
        toast.error(`Insufficient balance. Deposit more USDT to buy rounds.`);
      } else {
        toast.error(errorMessage);
      }
    } finally {
      setIsBuying(false);
      setIsTransactionPending(false);
      setTransactionMessage('');
    }
  };

  const handlePlayRound = async () => {
    // Debug snapshot so we can see exactly why the contract might revert
    console.log('[DiceGame] pre-playRound state', {
      isConnected,
      hasPendingReward,
      roundsRemaining,
      hasActiveSession: playerState?.hasActiveSession,
      pendingRewardActive: playerState?.pendingRewardActive,
      currentPosition: playerState?.currentPosition,
      pendingEndCell: playerState?.pendingEndCell,
      depositedBalance: playerState?.depositedBalance,
    });

    if (!isConnected) {
      appKit.open();
      return;
    }

    if (hasPendingReward) {
      toast.error('Decide on your pending reward before rolling again.');
      return;
    }

    if (!playerState) {
      toast.error('Player state is still loading. Please wait a moment.');
      return;
    }

    if (!playerState.hasActiveSession) {
      console.warn('[DiceGame] playRound blocked: no active session', {
        roundsRemaining,
        playerState,
      });
      toast.error('Start a session before rolling the dice.');
      return;
    }

    if (roundsRemaining <= 0) {
      console.warn('[DiceGame] playRound blocked: no rounds remaining');
      toast.error('No rounds remaining! Purchase a new session to keep playing.');
      return;
    }

    let rollInterval: NodeJS.Timeout | null = null;

    try {
      setIsRolling(true);
      setIsTransactionPending(true);
      setTransactionMessage('Rolling dice...');
      playSound('roll');
      const toastId = toast.loading('Rolling dice...');

      console.log('[DiceGame] playRound requested', {
        direction,
        isClockwise: direction === 'clockwise',
        roundsRemaining,
      });

      rollInterval = setInterval(() => {
        setLastDiceValues([
          Math.floor(Math.random() * 6) + 1,
          Math.floor(Math.random() * 6) + 1,
          Math.floor(Math.random() * 6) + 1,
          Math.floor(Math.random() * 6) + 1,
          Math.floor(Math.random() * 6) + 1,
        ]);
      }, 100);

      await playRound(direction === 'clockwise');
      setHasRolledOnce(true);

      toast.success('Dice rolled! Check your results.', { id: toastId });
      await refetchPlayerState?.();

      // Animation will be triggered by useEffect when effectiveCurrentPosition updates
    } catch (error: any) {
      console.error('[DiceGame] playRound error:', error);
      toast.error(getReadableErrorMessage(error));
    } finally {
      if (rollInterval) {
        clearInterval(rollInterval);
      }
      setIsRolling(false);
      setIsTransactionPending(false);
      setTransactionMessage('');
    }
  };

  const handleClaimReward = async () => {
    if (!isConnected) {
      appKit.open();
      return;
    }

    // Validate claim conditions before attempting transaction
    if (!playerState) {
      toast.error('Player state is still loading. Please wait a moment.');
      return;
    }

    if (!playerState.pendingRewardActive) {
      toast.error('No pending reward to claim. The reward may have already been claimed or expired.');
      return;
    }

    // Check if deadline has expired
    if (playerState.decisionDeadline && decisionState?.currentTimestamp) {
      const deadline = Number(playerState.decisionDeadline);
      const currentTime = Number(decisionState.currentTimestamp);
      if (currentTime > deadline) {
        toast.error('The decision deadline has expired. Please forfeit the reward instead.');
        return;
      }
    }

    try {
      setIsTransactionPending(true);
      setTransactionMessage('Claiming reward and ending session...');
      playSound('claim');
      const toastId = toast.loading('Claiming reward and ending session...');
      
      // Wait for transaction to complete (this includes waiting for confirmation)
      await claimPendingReward();
      
      toast.success('Reward claimed! Session cleared.', { id: toastId });
      await refetchPlayerState?.();
    } catch (error: any) {
      console.error('Claim reward error:', error);
      toast.error(prettyRpcError(error));
    } finally {
      setPendingExpiredLocally(false);
      setIsTransactionPending(false);
      setTransactionMessage('');
    }
  };

  const handleForfeitReward = async () => {
    if (!isConnected) {
      appKit.open();
      return;
    }

    try {
      setIsTransactionPending(true);
      setTransactionMessage('Forfeiting reward and continuing session...');
      playSound('continue');
      const toastId = toast.loading('Forfeiting reward and continuing session...');
      
      // Wait for transaction to complete (this includes waiting for confirmation)
      await forfeitPendingReward();
      
      toast.success('Reward forfeited. Continue playing!', { id: toastId });
      await refetchPlayerState?.();
    } catch (error: any) {
      console.error('Forfeit reward error:', error);
      toast.error(prettyRpcError(error));
    } finally {
      setPendingExpiredLocally(false);
      setIsTransactionPending(false);
      setTransactionMessage('');
    }
  };

  const FORCE_PREVIEW = true;

  if (!isConnected && !FORCE_PREVIEW) {
    return (
      <div className="text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="card max-w-md mx-auto p-8"
        >
          <div className="text-6xl mb-6">🎲</div>
          <h2 className="text-3xl font-bold mb-4">Connect to Play</h2>
          <p className="text-slate-400 mb-6">
            Connect your wallet to start playing LuckChain dice game
          </p>
          <button
            onClick={() => appKit.open()}
            className="btn-primary w-full"
          >
            🔗 Connect Wallet
          </button>
        </motion.div>
      </div>
    );
  }

  const handleDirectionChange = (value: 'clockwise' | 'counterclockwise') => {
    setUserOverrideDirection(true);
    setDirection(value);
    playSound(value === 'clockwise' ? 'click_cw' : 'click_ccw');
  };

  // For reel animation, use the landing cell when there is a pending reward,
  // otherwise use the current position from player state.
  // Convert BigInt to Number if needed
  const effectiveCurrentPosition = useMemo(() => {
    if (hasPendingReward && playerState?.pendingEndCell !== undefined) {
      // Convert BigInt to Number if it's a BigInt
      const endCell = playerState.pendingEndCell;
      return typeof endCell === 'bigint' ? Number(endCell) : Number(endCell);
    }
    const current = playerState?.currentPosition;
    return current !== undefined
      ? (typeof current === 'bigint' ? Number(current) : Number(current))
      : 11;
  }, [hasPendingReward, playerState?.pendingEndCell, playerState?.currentPosition]);

  // Track previous position to trigger animation only on actual changes
  const prevPositionRef = useRef<number | null>(null);

  // Trigger animation when position changes after a roll
  useEffect(() => {
    if (effectiveCurrentPosition !== undefined && effectiveCurrentPosition !== null) {
      const prevPosition = prevPositionRef.current;

      // Only trigger animation if position actually changed
      if (prevPosition !== null && prevPosition !== effectiveCurrentPosition) {
        // Update animation key immediately to trigger animation
        setAnimationKey(prev => {
          const newKey = prev + 1;
          console.log('[DiceGame] Position changed, updating animation key:', {
            from: prevPosition,
            to: effectiveCurrentPosition,
            oldKey: prev,
            newKey,
          });
          return newKey;
        });
        prevPositionRef.current = effectiveCurrentPosition;
      } else if (prevPosition === null) {
        // First render - just record the position
        prevPositionRef.current = effectiveCurrentPosition;
      }
    }
  }, [effectiveCurrentPosition]);

  // Play loss sound when landing on penalty cell (27)
  useEffect(() => {
    if (
      !isRolling &&
      !hasPendingReward &&
      playerState?.currentPosition !== undefined &&
      Number(playerState.currentPosition) === 27 &&
      hasRolledOnce
    ) {
      playSound('loss');
    }
  }, [isRolling, hasPendingReward, playerState?.currentPosition, hasRolledOnce, playSound]);

  // Start background music on first user interaction
  useEffect(() => {
    const startBGM = () => {
      if (!isMuted) {
        playSound('ambiance');
      }
      // Remove listeners after first interaction
      document.removeEventListener('click', startBGM);
      document.removeEventListener('keydown', startBGM);
    };

    document.addEventListener('click', startBGM);
    document.addEventListener('keydown', startBGM);

    return () => {
      document.removeEventListener('click', startBGM);
      document.removeEventListener('keydown', startBGM);
    };
  }, [isMuted, playSound]);

  return (
    <div className="space-y-6 pb-32 md:pb-40 relative">
      <div className="absolute top-0 right-0 z-10">
        <button
          onClick={toggleMute}
          className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white/70 hover:text-white transition-colors"
          title={isMuted ? "Unmute sounds" : "Mute sounds"}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">🎲 Dice Game</h1>
        <p className="text-slate-400">
          Roll the dice, choose your direction, win USDT!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <GameBoard
          currentPosition={effectiveCurrentPosition}
          isPlaying={isRolling}
          direction={direction}
          onDirectionChange={handleDirectionChange}
          directionDisabled={isRolling || hasPendingReward}
          animationKey={animationKey}
          onSwipe={() => playSound('swipe')}
        />
      </div>

      {/* Temporarily commented out - Pending Reward section */}
      {/* {hasPendingReward && (
        <div className="card p-6 border border-yellow-500/30 bg-yellow-500/5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-bold text-yellow-200">Pending Reward</h3>
              <p className="text-sm text-slate-300 mt-1">
                Decide within <span className="font-mono text-yellow-300">{decisionCountdown}s</span> or
                the reward is automatically forfeited.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <Timer className="w-4 h-4 text-yellow-300" />
                <span className="text-2xl font-bold text-yellow-300">
                  <AnimatedNumber
                    value={pendingPayoutValue}
                    precision={MIN_DISPLAY_PRECISION}
                    format={(val) =>
                      val.toLocaleString(undefined, {
                        minimumFractionDigits: MIN_DISPLAY_PRECISION,
                        maximumFractionDigits: MIN_DISPLAY_PRECISION,
                      })
                    }
                  />{' '}
                  USDT
                </span>
              </div>
              <p className="text-sm text-slate-400 mt-1">
                Landing cell:{' '}
                <AnimatedNumber value={playerState?.pendingEndCell ?? 0} /> • Rounds remaining:{' '}
                <AnimatedNumber value={roundsRemaining} />
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 min-w-[220px]">
              <button
                className="btn-primary bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold"
                onClick={handleClaimReward}
              >
                Claim & End Session
              </button>
              <button
                className="btn-secondary border-yellow-500/40 text-yellow-200 hover:bg-yellow-500/10"
                onClick={handleForfeitReward}
              >
                Continue (Forfeit Reward)
              </button>
            </div>
          </div>
        </div>
      )} */}

      <DiceRoller
        isRolling={isRolling}
        diceValues={lastDiceValues}
        onRoll={handlePlayRound}
        disabled={!roundsRemaining || hasPendingReward}
        hasRolledOnce={hasRolledOnce}
      />

      <Modal
        isOpen={isBuyModalOpen}
        title={`Start ${sessionRounds}-Round Session`}
        onClose={() => {
          if (isBuying) return;
          setIsBuyModalOpen(false);
        }}
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-400">
            You are purchasing{' '}
            <span className="text-blue-300 font-semibold">{sessionRounds} fixed rounds</span> for{' '}
            <span className="text-blue-300 font-semibold">{sessionCost.toLocaleString()} USDT</span>. Rounds must be played within this session—unclaimed rewards or unused rounds are cleared when the session ends.
          </p>
          <p className="text-xs text-slate-500">
            Current deposit balance: {depositBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USDT
          </p>
          <div className="rounded-lg bg-purple-500/10 border border-purple-500/20 p-3 text-sm text-purple-200">
            Total cost:{' '}
            <AnimatedNumber value={sessionCost} format={(val) => val.toLocaleString()} /> USDT •
            Rounds per session: {sessionRounds}
          </div>
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              className="btn-secondary"
              onClick={() => setIsBuyModalOpen(false)}
              disabled={isBuying}
            >
              Cancel
            </button>
            <button
              className="btn-primary disabled:opacity-60"
              onClick={handleBuyRounds}
              disabled={isBuying}
            >
              {isBuying ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </span>
              ) : (
                'Confirm Session Purchase'
              )}
            </button>
          </div>
        </div>
      </Modal>

      <HowToPlayModal
        isOpen={isHowToPlayModalOpen}
        onClose={() => setIsHowToPlayModalOpen(false)}
        sessionRounds={sessionRounds}
        roundCost={roundCost}
        sessionCost={sessionCost}
      />

      {/* Invisible balance host for deposit/withdraw modals triggered by GameActionBar */}
      <BalanceCard showCard={false} />
      <GameActionBar
        depositBalance={depositBalance}
        winningsBalance={winningsBalance}
        lifetimeDeposited={lifetimeDeposited}
        lifetimeWinnings={lifetimeWinnings}
        tokenSymbol={playerState ? depositTokenSymbol : 'USDT'}
        roundsRemaining={roundsRemaining}
        totalRoundsPlayed={playerState?.totalRoundsPlayed ?? 0}
        totalWins={playerState?.totalWins ?? 0}
        hasPendingReward={hasPendingReward}
        pendingPayoutValue={pendingPayoutValue}
        pendingCountdownSeconds={decisionCountdown}
        landingCell={hasPendingReward && playerState?.pendingEndCell !== undefined
          ? (typeof playerState.pendingEndCell === 'bigint'
            ? Number(playerState.pendingEndCell)
            : Number(playerState.pendingEndCell))
          : undefined}
        direction={direction}
        directionDisabled={isRolling || hasPendingReward}
        onDirectionChange={handleDirectionChange}
        onRoll={handlePlayRound}
        onBuySession={() => setIsBuyModalOpen(true)}
        onShowHowToPlay={() => setIsHowToPlayModalOpen(true)}
        onClaim={handleClaimReward}
        onForfeit={handleForfeitReward}
        canRoll={Boolean(roundsRemaining) && !resolvingPending && !hasPendingReward}
        canBuySession={canAffordSession && !hasPendingReward && !(playerState?.hasActiveSession && roundsRemaining > 0)}
        disabled={isRolling}
      />
      
      {/* Global transaction loading overlay */}
      <TransactionLoadingOverlay 
        isVisible={isTransactionPending} 
        message={transactionMessage}
      />
    </div>
  );
};

export default DiceGame;