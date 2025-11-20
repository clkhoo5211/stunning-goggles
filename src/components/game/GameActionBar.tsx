import { useEffect, useRef, useState } from 'react';
import { AnimatedNumber } from '@components/ui/animated-number';
import { Dices, Download, HelpCircle, RefreshCcw, ShoppingCart, Upload } from 'lucide-react';

interface GameActionBarProps {
  depositBalance: number;
  winningsBalance: number;
  lifetimeDeposited: number;
  lifetimeWinnings: number;
  tokenSymbol: string;
  roundsRemaining: number;
  totalRoundsPlayed: number;
  totalWins: number;
  hasPendingReward: boolean;
  pendingPayoutValue?: number;
  pendingCountdownSeconds?: number;
  landingCell?: number;
  direction: 'clockwise' | 'counterclockwise';
  directionDisabled?: boolean;
  onDirectionChange: (value: 'clockwise' | 'counterclockwise') => void;
  onRoll: () => void;
  onBuySession: () => void;
  onClaim: () => void;
  onForfeit: () => void;
  onShowHowToPlay?: () => void;
  canRoll: boolean;
  canBuySession: boolean;
  disabled?: boolean;
}

export function GameActionBar({
  depositBalance,
  winningsBalance,
  lifetimeDeposited,
  lifetimeWinnings,
  tokenSymbol,
  roundsRemaining,
  totalRoundsPlayed,
  totalWins,
  hasPendingReward,
  pendingPayoutValue,
  pendingCountdownSeconds,
  landingCell,
  direction,
  directionDisabled = false,
  onDirectionChange,
  onRoll,
  onBuySession,
  onClaim,
  onForfeit,
  onShowHowToPlay,
  canRoll,
  canBuySession,
  disabled = false,
}: GameActionBarProps) {
  const isDisabled = disabled;

  const [expanded, setExpanded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0); // 0–4 used on mobile, 0–1 used on desktop
  const [animatedPendingValue, setAnimatedPendingValue] = useState(0);
  const [animatedLandingCell, setAnimatedLandingCell] = useState<number | undefined>(undefined);
  const landingCellInitializedRef = useRef(false);

  const inSession = roundsRemaining > 0;

  // Auto-rotate slides every 5 seconds like a simple carousel
  useEffect(() => {
    if (expanded) return;
    const id = setInterval(() => {
      setActiveSlide((current) => (current + 1) % 5);
    }, 5000); // cycle through 5 slides on mobile
    return () => clearInterval(id);
  }, [expanded]);

  // Drive a smooth animation whenever pending reward appears or changes
  useEffect(() => {
    if (hasPendingReward && (pendingPayoutValue ?? 0) > 0) {
      setAnimatedPendingValue(pendingPayoutValue ?? 0);
    } else {
      setAnimatedPendingValue(0);
    }
  }, [hasPendingReward, pendingPayoutValue]);

  // Animate landing cell value when it changes
  useEffect(() => {
    if (landingCell !== undefined) {
      // If this is the first time we're setting a value, start from 0 to ensure animation
      if (!landingCellInitializedRef.current) {
        landingCellInitializedRef.current = true;
        // Set to 0 first, then animate to target in next frame
        setAnimatedLandingCell(0);
        requestAnimationFrame(() => {
          setAnimatedLandingCell(landingCell);
        });
      } else {
        // Value is changing, animate to new value
        setAnimatedLandingCell(landingCell);
      }
    } else {
      setAnimatedLandingCell(undefined);
      landingCellInitializedRef.current = false;
    }
  }, [landingCell]);

  const handleOpenDeposit = () => {
    window.dispatchEvent(new Event('luckchain:openDeposit'));
  };

  const handleOpenWithdraw = () => {
    window.dispatchEvent(new Event('luckchain:openWithdraw'));
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 pointer-events-none">
      <div className="container mx-auto px-3 pb-3 md:pb-6 pointer-events-auto">
        {/* Desktop / tablet layout */}
        <div className="hidden md:flex items-center justify-between gap-6 glass-effect border border-white/15 rounded-2xl bg-slate-950/98 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] px-6 py-3">
          {/*
            For desktop we use a 2-state slide:
            - State 0: Deposited / Winnings (current balances)
            - State 1: Acc. Deposited / Acc. Winnings (lifetime stats)
            Rounds / Played / Wins remain static.
          */}
          {(() => {
            const desktopSlide = activeSlide % 2;

            const depositedLabel = desktopSlide === 0 ? 'Deposited Balance' : 'Acc. Deposited';
            const depositedValue =
              desktopSlide === 0 ? depositBalance : lifetimeDeposited;

            const winningsLabel = desktopSlide === 0 ? 'Earnings Balance' : 'Acc. Winnings';
            const winningsValue =
              desktopSlide === 0 ? winningsBalance : lifetimeWinnings;

            return (
          <div className="flex items-center gap-6 xl:gap-8 flex-1 min-w-0">
                <div className="flex flex-col min-w-[160px]">
              <span className="text-xs uppercase tracking-wide text-slate-400">
                {depositedLabel}
              </span>
              <span className="text-lg font-semibold">
                <span
                  className={
                    desktopSlide === 0
                      ? 'text-green-400'
                      : 'bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'
                  }
                >
                  <AnimatedNumber
                    key={`desktop-deposit-${desktopSlide}`}
                    value={depositedValue}
                    precision={2}
                    format={(val) =>
                      val.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    }
                  />
                </span>{' '}
                <span className="text-xs text-slate-300">{tokenSymbol}</span>
              </span>
            </div>
            <div className="flex flex-col min-w-[160px]">
              <span className="text-xs uppercase tracking-wide text-slate-400">
                {winningsLabel}
              </span>
              <span className="text-lg font-semibold">
                <span
                  className={
                    desktopSlide === 0
                      ? 'bg-gradient-to-r from-green-400 to-yellow-300 bg-clip-text text-transparent'
                      : 'bg-gradient-to-r from-red-400 to-yellow-300 bg-clip-text text-transparent'
                  }
                >
                  <AnimatedNumber
                    key={`desktop-winnings-${desktopSlide}`}
                    value={winningsValue}
                    precision={2}
                    format={(val) =>
                      val.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    }
                  />
                </span>{' '}
                <span className="text-xs text-slate-300">{tokenSymbol}</span>
              </span>
            </div>
            <div className="flex flex-col min-w-[180px]">
              <span className="text-xs uppercase tracking-wide text-slate-400">
                Rounds / Played / Wins
              </span>
              <span className="text-lg font-semibold">
                <span className="inline-flex items-baseline gap-6">
                  <span className="w-8 text-left tabular-nums text-yellow-400">
                    <AnimatedNumber value={roundsRemaining} precision={0} />
                  </span>
                  <span className="w-8 text-left tabular-nums text-red-400">
                    <AnimatedNumber value={totalRoundsPlayed} precision={0} />
                  </span>
                  <span className="w-8 text-left tabular-nums text-green-400">
                    <AnimatedNumber value={totalWins} precision={0} />
                  </span>
                </span>
              </span>
            </div>
          </div>
            );
          })()}

          <div className="flex items-center justify-end gap-6">
            {/* Help/How to Play button */}
            {onShowHowToPlay && (
              <button
                type="button"
                onClick={onShowHowToPlay}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="How to Play"
                disabled={isDisabled}
              >
                <HelpCircle className="w-4 h-4" />
              </button>
            )}

            {/* Desktop pending reward summary beside Claim when active */}
            {inSession && hasPendingReward && (pendingPayoutValue ?? 0) > 0 && (
              <div className="flex flex-col gap-1 mr-4 min-w-[280px]">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wide text-yellow-300/80">
                    Pending Reward
                  </span>
                  {landingCell !== undefined && (
                    <span className="text-[11px] uppercase tracking-wide text-slate-400">
                      Landing Cell
                    </span>
                  )}
                  <span className="text-[11px] uppercase tracking-wide text-slate-400">
                    Time Left
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-semibold text-yellow-300">
                    <AnimatedNumber
                      value={animatedPendingValue}
                      precision={2}
                      format={(val) =>
                        val.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      }
                    />{' '}
                    <span className="text-[10px] text-slate-200">{tokenSymbol}</span>
                  </span>
                  {animatedLandingCell !== undefined && (
                    <span className="text-sm font-semibold text-slate-200">
                      <AnimatedNumber
                        value={animatedLandingCell}
                        precision={0}
                        format={(val) => Math.round(val).toLocaleString()}
                      />
                    </span>
                  )}
                  <span className="text-sm font-semibold text-slate-200">
                    {(pendingCountdownSeconds ?? 0) > 0
                      ? `${pendingCountdownSeconds}s left`
                      : '0s left'}
                  </span>
                </div>
              </div>
            )}

            <div className="flex items-center gap-3">
              {/* No active session: show funding + roll actions */}
              {!inSession && (
                <>
                  <button
                    type="button"
                    onClick={handleOpenDeposit}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold uppercase tracking-wide transition-colors"
                    disabled={isDisabled}
                  >
                    <Download className="w-4 h-4" />
                    Deposit
                  </button>
                  <button
                    type="button"
                    onClick={handleOpenWithdraw}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold uppercase tracking-wide transition-colors"
                    disabled={isDisabled}
                  >
                    <Upload className="w-4 h-4" />
                    Withdraw
                  </button>
                  <button
                    type="button"
                    onClick={onBuySession}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-xs font-semibold uppercase tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={isDisabled || !canBuySession}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Buy Session
                  </button>
                  <button
                    type="button"
                    onClick={onRoll}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-xs font-semibold uppercase tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={isDisabled || !canRoll}
                  >
                    <Dices className="w-4 h-4" />
                    Roll Dice
                  </button>
                </>
              )}

              {/* Active session, no pending reward: direction buttons + Roll */}
              {inSession && !hasPendingReward && (
                <>
                  <div className="flex items-center gap-2 mr-2">
                    <button
                      type="button"
                      onClick={() => onDirectionChange('counterclockwise')}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-semibold tracking-wide transition-colors ${
                        direction === 'counterclockwise'
                          ? 'border-cyan-400 text-cyan-100 bg-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.45)]'
                          : 'border-cyan-500/70 text-cyan-200 bg-slate-900/40'
                      }`}
                      disabled={isDisabled || directionDisabled || !canRoll}
                    >
                      <RefreshCcw className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Counter</span>
                      <span className="sm:hidden">CCW</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onDirectionChange('clockwise')}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-semibold tracking-wide transition-colors ${
                        direction === 'clockwise'
                          ? 'border-purple-400 text-purple-100 bg-purple-500/20 shadow-[0_0_20px_rgba(192,132,252,0.45)]'
                          : 'border-purple-500/70 text-purple-200 bg-slate-900/40'
                      }`}
                      disabled={isDisabled || directionDisabled || !canRoll}
                    >
                      <RefreshCcw className="w-3.5 h-3.5 scale-x-[-1]" />
                      <span className="hidden sm:inline">Clockwise</span>
                      <span className="sm:hidden">CW</span>
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={onRoll}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-xs font-semibold uppercase tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={isDisabled || !canRoll}
                  >
                    <Dices className="w-4 h-4" />
                    Roll Dice
                  </button>
                </>
              )}

              {/* Active session with pending reward: Claim / Continue */}
              {inSession && hasPendingReward && (
                <>
                  <button
                    type="button"
                    onClick={onClaim}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-semibold uppercase tracking-wide text-slate-900"
                  >
                    Claim &amp; End Session
                  </button>
                  <button
                    type="button"
                    onClick={onForfeit}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold uppercase tracking-wide transition-colors"
                  >
                    Continue
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex md:hidden flex-col gap-3">
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="glass-effect border border-white/10 rounded-2xl bg-slate-950/98 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.7)] px-4 py-3 flex items-center justify-between"
          >
            {!expanded && (
              <div className="flex w-full items-center justify-between">
                <span className="text-[10px] uppercase tracking-wide text-slate-400">
                  {activeSlide === 0 && 'Deposited Balance'}
                  {activeSlide === 1 && 'Earnings Balance'}
                  {activeSlide === 2 && 'Acc. Deposited'}
                  {activeSlide === 3 && 'Acc. Winnings'}
                  {activeSlide === 4 && 'Rounds / Played / Wins'}
                </span>
                <span className="text-sm font-semibold text-right">
                  {activeSlide === 0 && (
                    <>
                      <span className="text-green-400">
                        <AnimatedNumber
                          key={`mobile-collapsed-deposit-${activeSlide}`}
                          value={depositBalance}
                          precision={2}
                          format={(val) =>
                            val.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                          }
                        />
                      </span>{' '}
                      <span className="text-[10px] text-slate-300">{tokenSymbol}</span>
                    </>
                  )}
                  {activeSlide === 1 && (
                    <>
                      <span className="bg-gradient-to-r from-green-400 to-yellow-300 bg-clip-text text-transparent">
                        <AnimatedNumber
                          key={`mobile-collapsed-earnings-${activeSlide}`}
                          value={winningsBalance}
                          precision={2}
                          format={(val) =>
                            val.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                          }
                        />
                      </span>{' '}
                      <span className="text-[10px] text-slate-300">{tokenSymbol}</span>
                    </>
                  )}
                  {activeSlide === 2 && (
                    <>
                      <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        <AnimatedNumber
                          key={`mobile-collapsed-acc-deposit-${activeSlide}`}
                          value={lifetimeDeposited}
                          precision={2}
                          format={(val) =>
                            val.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                          }
                        />
                      </span>{' '}
                      <span className="text-[10px] text-slate-300">{tokenSymbol}</span>
                    </>
                  )}
                  {activeSlide === 3 && (
                    <>
                      <span className="bg-gradient-to-r from-red-400 to-yellow-300 bg-clip-text text-transparent">
                        <AnimatedNumber
                          key={`mobile-collapsed-acc-winnings-${activeSlide}`}
                          value={lifetimeWinnings}
                          precision={2}
                          format={(val) =>
                            val.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                          }
                        />
                      </span>{' '}
                      <span className="text-[10px] text-slate-300">{tokenSymbol}</span>
                    </>
                  )}
                  {activeSlide === 4 && (
                    <span>
                      <span className="text-yellow-400">
                        <AnimatedNumber
                          key={`mobile-collapsed-rounds-${activeSlide}`}
                          value={roundsRemaining}
                          precision={0}
                        />
                      </span>
                      <span className="mx-1 text-slate-500">/</span>
                      <span className="text-red-400">
                        <AnimatedNumber
                          key={`mobile-collapsed-played-${activeSlide}`}
                          value={totalRoundsPlayed}
                          precision={0}
                        />
                      </span>
                      <span className="mx-1 text-slate-500">/</span>
                      <span className="text-green-400">
                        <AnimatedNumber
                          key={`mobile-collapsed-wins-${activeSlide}`}
                          value={totalWins}
                          precision={0}
                        />
                      </span>
                    </span>
                  )}
                </span>
              </div>
            )}
            {expanded && (
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wide text-slate-400">
                    Deposited Balance
                  </span>
                  <span className="text-sm font-semibold">
                    <span className="text-green-400">
                      <AnimatedNumber
                        value={depositBalance}
                        precision={2}
                        format={(val) =>
                          val.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })
                        }
                      />
                    </span>{' '}
                    <span className="text-[10px] text-slate-300">{tokenSymbol}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wide text-slate-400">
                    Earnings Balance
                  </span>
                  <span className="text-sm font-semibold">
                    <span className="bg-gradient-to-r from-green-400 to-yellow-300 bg-clip-text text-transparent">
                      <AnimatedNumber
                        value={winningsBalance}
                        precision={2}
                        format={(val) =>
                          val.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })
                        }
                      />
                    </span>{' '}
                    <span className="text-[10px] text-slate-300">{tokenSymbol}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wide text-slate-400">
                    Acc. Deposited
                  </span>
                  <span className="text-sm font-semibold">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      <AnimatedNumber
                        value={lifetimeDeposited}
                        precision={2}
                        format={(val) =>
                          val.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })
                        }
                      />
                    </span>{' '}
                    <span className="text-[10px] text-slate-300">{tokenSymbol}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wide text-slate-400">
                    Acc. Winnings
                  </span>
                  <span className="text-sm font-semibold">
                    <span className="bg-gradient-to-r from-red-400 to-yellow-300 bg-clip-text text-transparent">
                      <AnimatedNumber
                        value={lifetimeWinnings}
                        precision={2}
                        format={(val) =>
                          val.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })
                        }
                      />
                    </span>{' '}
                    <span className="text-[10px] text-slate-300">{tokenSymbol}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wide text-slate-400">
                    Rounds / Played / Wins
                  </span>
                  <span className="text-sm font-semibold">
                    <span className="text-yellow-400">
                      <AnimatedNumber value={roundsRemaining} precision={0} />
                    </span>
                    <span className="mx-1 text-slate-500">·</span>
                    <span className="text-red-400">
                      <AnimatedNumber value={totalRoundsPlayed} precision={0} />
                    </span>
                    <span className="mx-1 text-slate-500">·</span>
                    <span className="text-green-400">
                      <AnimatedNumber value={totalWins} precision={0} />
                    </span>
                  </span>
                </div>
              </div>
            )}
          </button>

          {/* Mobile pending reward summary bar */}
          {hasPendingReward && (pendingPayoutValue ?? 0) > 0 && (
            <div className="glass-effect border border-yellow-400/20 rounded-2xl bg-slate-950/98 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.7)] px-4 py-2 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wide text-yellow-300/80">
                  Pending Reward
                </span>
                {landingCell !== undefined && (
                  <span className="text-[10px] uppercase tracking-wide text-slate-400">
                    Landing Cell
                  </span>
                )}
                <span className="text-[10px] uppercase tracking-wide text-slate-400">
                  Time Left
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-sm font-semibold text-yellow-300">
                  <AnimatedNumber
                    value={animatedPendingValue}
                    precision={2}
                    format={(val) =>
                      val.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })
                    }
                  />{' '}
                  <span className="text-[10px] text-slate-200">{tokenSymbol}</span>
                </span>
                {landingCell !== undefined && (
                  <span className="text-sm font-semibold text-slate-200">
                    <AnimatedNumber value={landingCell} precision={0} />
                  </span>
                )}
                <span className="text-sm font-semibold text-yellow-200">
                  {(pendingCountdownSeconds ?? 0) > 0
                    ? `${pendingCountdownSeconds}s left`
                    : '0s left'}
                </span>
              </div>
            </div>
          )}

          <div className="glass-effect border border-white/10 rounded-2xl bg-slate-950/98 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.7)] px-2 py-2 flex items-center justify-between gap-2">
            {/* Help/How to Play button (mobile) */}
            {onShowHowToPlay && (
              <button
                type="button"
                onClick={onShowHowToPlay}
                className="flex flex-col items-center justify-center w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="How to Play"
                disabled={isDisabled}
              >
                <HelpCircle className="w-4 h-4" />
              </button>
            )}

            {/* No active session: funding + roll buttons */}
            {!inSession && (
              <>
                <button
                  type="button"
                  onClick={handleOpenDeposit}
                  className="flex-1 flex flex-col items-center gap-1 text-[12px] py-2 rounded-xl hover:bg-white/5"
                  disabled={isDisabled}
                >
                  <Download className="w-4 h-4" />
                  <span>Deposit</span>
                </button>
                <button
                  type="button"
                  onClick={handleOpenWithdraw}
                  className="flex-1 flex flex-col items-center gap-1 text-[12px] py-2 rounded-xl hover:bg-white/5"
                  disabled={isDisabled}
                >
                  <Upload className="w-4 h-4" />
                  <span>Withdraw</span>
                </button>
                <button
                  type="button"
                  onClick={onBuySession}
                  className="flex-1 flex flex-col items-center gap-1 text-[12px] py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={isDisabled || !canBuySession}
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Buy</span>
                </button>
                <button
                  type="button"
                  onClick={onRoll}
                  className="flex-1 flex flex-col items-center gap-1 text-[12px] py-2 rounded-xl bg-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={isDisabled || !canRoll}
                >
                  <Dices className="w-4 h-4" />
                  <span>Roll</span>
                </button>
              </>
            )}

            {/* Active session, no pending reward: direction buttons + Roll button */}
            {inSession && !hasPendingReward && (
              <div className="flex w-full items-center gap-2">
                <button
                  type="button"
                  onClick={() => onDirectionChange('counterclockwise')}
                  className={`flex-1 flex flex-col items-center gap-1 text-[12px] py-2 rounded-xl border ${
                    direction === 'counterclockwise'
                      ? 'border-cyan-400 text-cyan-100 bg-cyan-500/20'
                      : 'border-cyan-500/70 text-cyan-200 bg-slate-900/40'
                  } disabled:opacity-60 disabled:cursor-not-allowed`}
                  disabled={isDisabled || directionDisabled || !canRoll}
                >
                  <RefreshCcw className="w-4 h-4" />
                  <span>CCW</span>
                </button>
                <button
                  type="button"
                  onClick={() => onDirectionChange('clockwise')}
                  className={`flex-1 flex flex-col items-center gap-1 text-[12px] py-2 rounded-xl border ${
                    direction === 'clockwise'
                      ? 'border-purple-400 text-purple-100 bg-purple-500/20'
                      : 'border-purple-500/70 text-purple-200 bg-slate-900/40'
                  } disabled:opacity-60 disabled:cursor-not-allowed`}
                  disabled={isDisabled || directionDisabled || !canRoll}
                >
                  <RefreshCcw className="w-4 h-4 scale-x-[-1]" />
                  <span>CW</span>
                </button>
                <button
                  type="button"
                  onClick={onRoll}
                  className="flex-[1.4] flex flex-col items-center gap-1 text-[12px] py-2 rounded-xl bg-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={isDisabled || !canRoll}
                >
                  <Dices className="w-4 h-4" />
                  <span>Roll</span>
                </button>
              </div>
            )}

            {/* Active session with pending reward: Claim / Continue */}
            {inSession && hasPendingReward && (
              <>
                <button
                  type="button"
                  onClick={onClaim}
                  className="flex-1 flex flex-col items-center gap-1 text-sm py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900"
                >
                  <span>Claim</span>
                </button>
                <button
                  type="button"
                  onClick={onForfeit}
                  className="flex-1 flex flex-col items-center gap-1 text-sm py-3 rounded-xl bg-slate-800 hover:bg-slate-700"
                >
                  <span>Continue</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


