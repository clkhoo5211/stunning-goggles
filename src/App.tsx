import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Home from '@pages/Home';
import DiceGame from '@pages/DiceGame';
import GameHistory from '@pages/GameHistory';
import Leaderboard from '@pages/Leaderboard';
import Governance from '@pages/Governance';
import Profile from '@pages/Profile';
import Faucet from '@pages/Faucet';
import Marketplace from '@pages/Marketplace';
import MyNFTs from '@pages/MyNFTs';
import NFTDetail from '@pages/NFTDetail';
import Lending from '@pages/Lending';
import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';
import { PWAInstallPrompt } from '@components/ui/PWAInstallPrompt';
import { AuthProvider } from '@components/auth/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="w-full max-w-5xl mx-auto px-3 sm:px-4 py-6 sm:py-8 min-h-[calc(100vh-200px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<DiceGame />} />
            <Route path="/history" element={<GameHistory />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/faucet" element={<Faucet />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/my-nfts" element={<MyNFTs />} />
            <Route path="/nft/:tokenId" element={<NFTDetail />} />
            <Route path="/lending" element={<Lending />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* PWA Install Prompt */}
        <PWAInstallPrompt />

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          theme="dark"
          richColors
          expand={false}
          duration={4000}
        />
      </div>
    </AuthProvider>
  );
}

export default App;

