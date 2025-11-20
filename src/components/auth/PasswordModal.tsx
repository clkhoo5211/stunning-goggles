import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, AlertCircle } from 'lucide-react';
import { generateToken } from '@/lib/auth';

interface PasswordModalProps {
  onSuccess: () => void;
}

export function PasswordModal({ onSuccess }: PasswordModalProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate a small delay for better UX
    setTimeout(() => {
      const token = generateToken(password);

      if (token) {
        onSuccess();
      } else {
        setError('Invalid password. Please try again.');
        setPassword('');
      }

      setIsLoading(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-md mx-4"
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-b border-slate-700 p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-500/20 rounded-xl">
                  <Lock className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Access Required</h2>
                  <p className="text-sm text-slate-400 mt-1">Enter password to continue</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="Enter password"
                  autoFocus
                  disabled={isLoading}
                />
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-sm text-red-300">{error}</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!password || isLoading}
                className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Verifying...
                  </span>
                ) : (
                  'Unlock Access'
                )}
              </button>

              {/* Info */}
              <p className="text-xs text-center text-slate-500">
                Session will expire after 24 hours
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
