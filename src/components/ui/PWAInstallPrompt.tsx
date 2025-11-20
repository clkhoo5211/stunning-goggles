import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Show prompt after 3 seconds delay
      setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('✅ PWA installed successfully');
    } else {
      console.log('❌ PWA installation dismissed');
    }

    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Don't show again for this session
    sessionStorage.setItem('pwa-prompt-dismissed', 'true');
  };

  // Don't show if already dismissed in this session
  useEffect(() => {
    const dismissed = sessionStorage.getItem('pwa-prompt-dismissed');
    if (dismissed) {
      setShowPrompt(false);
    }
  }, []);

  return (
    <AnimatePresence>
      {showPrompt && deferredPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50"
        >
          <div className="glass-effect rounded-xl p-4 shadow-2xl border border-white/20">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-1 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                <Download className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1 pr-6">
                <h3 className="font-semibold text-white mb-1">
                  Install LuckChain App
                </h3>
                <p className="text-sm text-slate-300 mb-3">
                  Install our app for quick access, offline play, and a native app experience!
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={handleInstall}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105"
                  >
                    Install Now
                  </button>
                  <button
                    onClick={handleDismiss}
                    className="px-4 py-2 glass-effect hover:bg-white/10 rounded-lg font-medium transition-colors"
                  >
                    Later
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

