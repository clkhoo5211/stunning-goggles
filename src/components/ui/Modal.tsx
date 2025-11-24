import { ReactNode, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
  widthClassName?: string;
}

export function Modal({ isOpen, title, onClose, children, footer }: ModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save the current scroll position
      const scrollY = window.scrollY;
      // Apply styles to prevent scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      return () => {
        // Restore scroll position when modal closes
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl max-h-[90vh] flex flex-col"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <div className="card shadow-xl border border-white/5 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 flex flex-col max-h-full overflow-hidden">
              <div className="flex items-start justify-between mb-4 px-6 pt-6 flex-shrink-0 border-b border-slate-700/50 pb-4">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-slate-200 transition-colors text-2xl leading-none"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <div className="text-slate-300 px-6 py-4 overflow-y-auto flex-1 min-h-0">
                {children}
              </div>

              {footer && (
                <div className="mt-6 px-6 pb-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end flex-shrink-0">
                  {footer}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
