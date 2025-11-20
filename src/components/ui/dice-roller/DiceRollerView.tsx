import { motion } from 'framer-motion';
import { Dice3D } from '@components/ui/Dice3D';
import { AnimatedNumber } from '@components/ui/animated-number';
import { ParticleEffects } from '@components/ui/ParticleEffects';
import './DiceRollerView.css';

export interface DiceRollerViewProps {
  diceSlots: number[];
  diceSum: number;
  isBaozi: boolean;
  isRolling: boolean;
  showStats?: boolean;
  disabled?: boolean;
  onRoll?: () => void;
}

export function DiceRollerView({
  diceSlots,
  diceSum,
  isBaozi,
  isRolling,
  showStats = true,
  disabled = false,
  onRoll,
}: DiceRollerViewProps) {
  return (
    <motion.div
      className="relative w-full max-w-2xl mx-auto mt-8 p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-md overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-purple-500/10 blur-3xl pointer-events-none" />

      {/* Particle Effects for Baozi */}
      {isBaozi && !isRolling && (
        <>
          <ParticleEffects type="confetti" trigger={true} />
          <ParticleEffects type="goldCoins" trigger={true} />
        </>
      )}

      <div className="relative z-10 flex flex-col items-center">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 uppercase tracking-widest drop-shadow-sm">
            Dice Roller
          </h2>
          <div className="h-1 w-24 mx-auto mt-2 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
        </div>

        <div className="flex justify-center gap-3 md:gap-6 mb-8 perspective-1000">
          {diceSlots.map((value, index) => (
            <motion.div
              key={`${index}-${isRolling ? 'rolling' : 'stopped'}`} // Force re-mount/re-animate on state change
              className="relative perspective-1000 transform-style-3d"
              initial={isRolling ? { rotateX: 0, rotateY: 0, rotateZ: 0 } : { scale: 0.8, opacity: 0 }}
              animate={
                isRolling
                  ? {
                    rotateX: [0, 360, 720, 1080],
                    rotateY: [0, 360, 720, 1080],
                    rotateZ: [0, 180, 360, 540],
                  }
                  : { scale: 1, opacity: 1, rotateX: 0, rotateY: 0, rotateZ: 0 }
              }
              transition={
                isRolling
                  ? {
                    duration: 2,
                    ease: "linear",
                    repeat: Infinity,
                  }
                  : {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: index * 0.1,
                  }
              }
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="transform transition-transform hover:scale-110 duration-300" style={{ transformStyle: 'preserve-3d' }}>
                <Dice3D value={value} />
              </div>
              {/* Glow under dice */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-4 bg-purple-500/30 blur-md rounded-full" />
            </motion.div>
          ))}
        </div>

        {!isRolling && showStats && (
          <div className="grid grid-cols-2 gap-8 w-full max-w-md mb-6 px-4 py-3 bg-black/20 rounded-xl border border-white/5">
            <div className="text-center border-r border-white/10">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Total Sum</p>
              <p className="text-3xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                <AnimatedNumber value={diceSum} />
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Movement</p>
              <p className="text-lg text-yellow-300 font-bold">
                <AnimatedNumber value={Math.max(diceSum - 1, 0)} /> <span className="text-sm font-normal text-slate-400">steps</span>
              </p>
            </div>
          </div>
        )}

        {isBaozi && !isRolling && (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/70 backdrop-blur-sm rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="text-center p-8 bg-gradient-to-br from-red-900 via-red-950 to-black border-4 border-yellow-500 rounded-2xl shadow-[0_0_60px_rgba(234,179,8,0.8)] relative overflow-hidden"
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-red-500/20 to-yellow-500/20"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{ backgroundSize: '200% 200%' }}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="text-7xl mb-3 flex gap-2 justify-center"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  🎉 🎊 💰 ✨
                </motion.div>
                <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 uppercase tracking-widest mb-3 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
                  豹子！
                </h3>
                <h4 className="text-3xl font-black text-yellow-400 uppercase tracking-widest mb-2">
                  Leopard Jackpot!
                </h4>
                <p className="text-white font-bold text-xl mb-2">All {diceSlots[0]}s Match!</p>
                <motion.p
                  className="text-yellow-200 text-lg font-semibold"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🏮 Instant Bonus Payout! 🏮
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {onRoll && (
          <button
            onClick={onRoll}
            disabled={isRolling || disabled}
            className={`
              relative group w-full max-w-xs py-4 px-8 rounded-full font-bold text-lg tracking-wider uppercase transition-all duration-300
              ${isRolling || disabled
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] hover:scale-105 active:scale-95'
              }
            `}
          >
            <div className="absolute inset-0 rounded-full border border-white/20" />
            {isRolling ? (
              <span className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Rolling...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <span>🎲</span> Roll Dice
              </span>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
}
