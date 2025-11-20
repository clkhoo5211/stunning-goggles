import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { validateToken, clearToken, getTokenExpiryTime } from '@/lib/auth';
import { PasswordModal } from './PasswordModal';

interface AuthContextType {
  isAuthenticated: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  // Check authentication on mount
  useEffect(() => {
    const isValid = validateToken();
    setIsAuthenticated(isValid);
    setIsChecking(false);

    // Set up expiry check
    if (isValid) {
      const expiryTime = getTokenExpiryTime();
      if (expiryTime > 0) {
        const timeout = setTimeout(() => {
          setIsAuthenticated(false);
          clearToken();
        }, expiryTime);

        return () => clearTimeout(timeout);
      }
    }
  }, []);

  const handleSuccess = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    clearToken();
    setIsAuthenticated(false);
  };

  // Show nothing while checking initial auth state
  if (isChecking) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-slate-950">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-amber-500 border-t-transparent"></div>
          <p className="mt-4 text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, logout }}>
      {!isAuthenticated && <PasswordModal onSuccess={handleSuccess} />}
      {isAuthenticated && children}
    </AuthContext.Provider>
  );
}
