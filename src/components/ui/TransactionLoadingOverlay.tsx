import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface TransactionLoadingOverlayProps {
  isVisible: boolean;
  message?: string;
}

/**
 * Global transaction loading overlay that blocks all user interaction
 * until transaction completes (success or failure)
 */
export function TransactionLoadingOverlay({ 
  isVisible, 
  message = 'Processing transaction...' 
}: TransactionLoadingOverlayProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-slate-900/95 border border-slate-700/50 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Loader2 className="w-12 h-12 text-amber-500 animate-spin" />
            <div className="text-center">
              <p className="text-lg font-semibold text-white mb-2">{message}</p>
              <p className="text-sm text-slate-400">Please wait for confirmation...</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

