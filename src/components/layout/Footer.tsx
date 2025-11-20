import { Link } from 'react-router-dom';
import { Github, Twitter, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-effect border-t border-white/10 mt-20">
      <div className="w-full px-3 sm:px-4 py-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">LuckChain</h3>
            <p className="text-sm text-slate-400 mb-4">
              Provably fair blockchain gaming platform. Play dice games, win real USDT, and enjoy transparent, 
              on-chain gameplay.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/luckchain"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/luckchain"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://discord.gg/luckchain"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/game" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Play Game
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link to="/governance" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Governance
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://docs.luckchain.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://docs.luckchain.io/contracts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Smart Contracts
                </a>
              </li>
              <li>
                <a
                  href="https://docs.luckchain.io/audit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Security Audit
                </a>
              </li>
              <li>
                <a
                  href="https://docs.luckchain.io/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/terms"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/responsible-gaming"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Responsible Gaming
                </a>
              </li>
              <li>
                <span className="text-sm text-slate-400">
                  18+ Only
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              © {currentYear} LuckChain. All rights reserved. Built on Ethereum, Polygon, and 5 more chains.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-xs text-slate-500">Powered by</span>
              <a
                href="https://reown.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                Reown
              </a>
              <span className="text-slate-600">•</span>
              <a
                href="https://chain.link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                Chainlink VRF
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

