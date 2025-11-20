import { motion } from 'framer-motion';
import { AnimatedNumber } from '@components/ui/animated-number';

interface JackpotBannerProps {
  balance: number;
  multiplier: number | null;
}

export function JackpotBanner({ balance, multiplier }: JackpotBannerProps) {
  return (
    <div className="relative w-full max-w-3xl mx-auto mb-6 p-1">
      {/* Ornate Border Container */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 rounded-lg p-[2px] shadow-[0_0_20px_rgba(234,179,8,0.5)]">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-lg" />
      </div>

      {/* Main Content */}
      <div className="relative bg-gradient-to-b from-red-900 via-red-950 to-black rounded-lg p-4 flex flex-col items-center justify-center overflow-hidden border border-yellow-500/30">

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmQ3MDAiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

        {/* Decorative Top Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-gradient-to-b from-yellow-500 to-transparent opacity-20 blur-xl" />

        {/* Title */}
        <div className="relative z-10 flex items-center gap-4 mb-2">
          <span className="text-2xl">🏮</span>
          <h2 className="text-yellow-400 font-bold tracking-[0.2em] text-sm md:text-base uppercase drop-shadow-md">
            Grand Prize Pool
          </h2>
          <span className="text-2xl">🏮</span>
        </div>

        {/* Amount Display */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-tight font-['Outfit']">
            <span className="text-2xl md:text-4xl align-top mr-1 text-yellow-500">$</span>
            <AnimatedNumber
              value={balance}
              precision={2}
              format={(val) =>
                val.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              }
            />
          </div>

          {/* Multiplier Badge */}
          {multiplier && multiplier > 1 && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mt-2 bg-gradient-to-r from-yellow-600 to-red-600 text-white px-4 py-1 rounded-full font-bold text-sm border border-yellow-400 shadow-[0_0_10px_rgba(234,179,8,0.5)] flex items-center gap-2"
            >
              <span>MULTIPLIER ACTIVE</span>
              <span className="text-yellow-200 text-lg">{multiplier}x</span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
