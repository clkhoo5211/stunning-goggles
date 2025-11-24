import { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAccount, useBalance, useChainId, useSwitchChain } from 'wagmi';
import { formatEther } from 'viem';
import { appKit, hardhatLocal } from '@lib/reown';
import { Wallet, Home, Gamepad2, History, Trophy, Shield, User, Droplet, Store, Image, Banknote } from 'lucide-react';

export function Header() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  
  // Automatically switch to Hardhat local network when connected
  useEffect(() => {
    if (isConnected && chainId !== hardhatLocal.id && switchChain) {
      console.log('[Header] Current chainId:', chainId, 'Target:', hardhatLocal.id);
      // Use setTimeout to avoid race conditions with wallet connection
      const timeoutId = setTimeout(async () => {
        try {
          console.log('[Header] Attempting to switch to Hardhat Local network...');
          await switchChain({ chainId: hardhatLocal.id });
          console.log('[Header] Successfully switched to Hardhat Local network');
        } catch (error: any) {
          console.error('[Header] Failed to switch network:', error);
          // Error code 4902 = Chain not configured in wallet
          if (error?.code === 4902) {
            console.warn('[Header] Hardhat Local network not found in wallet. Please add it manually in MetaMask:');
            console.warn('  Network Name: Hardhat Local');
            console.warn('  RPC URL: http://127.0.0.1:8545');
            console.warn('  Chain ID: 31337');
            console.warn('  Currency Symbol: ETH');
          } else if (error?.code === 4001) {
            console.warn('[Header] User rejected network switch');
          } else {
            console.warn('[Header] Network switch error:', error);
          }
        }
      }, 1000); // Increased delay to ensure wallet is ready
      
      return () => clearTimeout(timeoutId);
    } else if (isConnected && chainId === hardhatLocal.id) {
      console.log('[Header] Already on Hardhat Local network');
    }
  }, [isConnected, chainId, switchChain]);
  
  const { data: balance, isLoading: isBalanceLoading, error: balanceError } = useBalance({
    address: address,
    chainId: hardhatLocal.id, // Explicitly use Hardhat Local chain
    query: {
      enabled: !!address && isConnected && chainId === hardhatLocal.id, // Only fetch if on correct network
      refetchInterval: 5000, // Refetch every 5 seconds
    },
  });
  
  // Log balance fetching status for debugging
  useEffect(() => {
    if (isConnected && address) {
      console.log('[Header] Balance Debug:', {
        chainId,
        targetChainId: hardhatLocal.id,
        isOnCorrectNetwork: chainId === hardhatLocal.id,
        balance: balance ? formatEther(balance.value) : null,
        isLoading: isBalanceLoading,
        error: balanceError,
      });
    }
  }, [isConnected, address, chainId, balance, isBalanceLoading, balanceError]);
  const location = useLocation();
  const navContainerRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const navigation = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Play Game', path: '/game', icon: Gamepad2 },
    { name: 'Marketplace', path: '/marketplace', icon: Store },
    { name: 'My NFTs', path: '/my-nfts', icon: Image },
    { name: 'Lending', path: '/lending', icon: Banknote },
    { name: 'History', path: '/history', icon: History },
    { name: 'Leaderboard', path: '/leaderboard', icon: Trophy },
    { name: 'Governance', path: '/governance', icon: Shield },
    { name: 'Profile', path: '/profile', icon: User },
    { name: 'Faucet', path: '/faucet', icon: Droplet },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleConnect = () => {
    appKit.open();
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const scrollToCenter = (element: HTMLAnchorElement | null) => {
    if (!element || !navContainerRef.current) return;

    const container = navContainerRef.current;

    // Only scroll on smaller screens where navigation is scrollable
    // On desktop (lg+), navigation is centered and doesn't need scrolling
    if (window.innerWidth >= 1024) return; // lg breakpoint

    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    // Calculate the center position
    const containerCenter = containerRect.left + containerRect.width / 2;
    const elementCenter = elementRect.left + elementRect.width / 2;

    // Calculate scroll position to center the element
    const scrollLeft = container.scrollLeft + (elementCenter - containerCenter);

    // Smooth scroll to center
    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (path: string) => {
    const element = navItemRefs.current[path];
    if (element) {
      // Small delay to ensure the route change has started
      setTimeout(() => {
        scrollToCenter(element);
      }, 50);
    }
  };

  // Scroll active item to center when route changes
  useEffect(() => {
    const activePath = location.pathname;
    const activeElement = navItemRefs.current[activePath];

    if (activeElement) {
      // Delay to ensure DOM has updated
      setTimeout(() => {
        scrollToCenter(activeElement);
      }, 100);
    }
  }, [location.pathname]);

  return (
    <header className="glass-effect border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 shadow-lg shadow-blue-900/20">
      <div className="w-full px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-3 lg:gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-purple-500/30">
              <span className="text-xl sm:text-2xl md:text-3xl relative z-10">🎲</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base sm:text-lg md:text-xl font-bold gradient-text leading-tight">LuckChain</h1>
              <p className="text-[10px] md:text-xs text-slate-400 leading-tight">Provably Fair Gaming</p>
            </div>
          </Link>

          {/* Horizontal Scrollable Navigation */}
          <nav className="flex-1 min-w-0 mx-2 sm:mx-3 lg:mx-4 relative">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-slate-900/95 via-blue-900/50 to-transparent pointer-events-none z-10 lg:hidden"></div>
            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-slate-900/95 via-blue-900/50 to-transparent pointer-events-none z-10 lg:hidden"></div>
            <div
              ref={navContainerRef}
              className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth pb-1 -mx-1 px-1"
            >
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    ref={(el) => {
                      navItemRefs.current[item.path] = el;
                    }}
                    to={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 group ${isActive(item.path)
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 ${isActive(item.path) ? 'scale-110' : 'group-hover:scale-110'}`} />
                    <span>{item.name}</span>
                    {isActive(item.path) && (
                      <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Wallet Button */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {isConnected && address ? (
              <button
                onClick={handleConnect}
                className="flex items-center space-x-1.5 sm:space-x-2 glass-effect px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-white/10 transition-all text-xs sm:text-sm border border-green-500/30 hover:border-green-500/50 group"
              >
                <div className="relative">
                  <Wallet className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400 group-hover:scale-110 transition-transform" />
                  <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="hidden sm:inline font-mono text-green-300 leading-tight">{formatAddress(address)}</span>
                  <span className="sm:hidden font-mono text-green-300 text-xs leading-tight">{address.slice(0, 4)}...</span>
                  {chainId === hardhatLocal.id && balance && (
                    <span className="hidden sm:inline text-[10px] text-slate-400 leading-tight">
                      {parseFloat(formatEther(balance.value)).toFixed(4)} ETH
                    </span>
                  )}
                  {chainId === hardhatLocal.id && isBalanceLoading && (
                    <span className="hidden sm:inline text-[10px] text-slate-500 leading-tight">Loading...</span>
                  )}
                  {chainId !== hardhatLocal.id && (
                    <span className="hidden sm:inline text-[10px] text-yellow-400 leading-tight">
                      ⚠️ Wrong Network
                    </span>
                  )}
                </div>
              </button>
            ) : (
              <button
                onClick={handleConnect}
                className="inline-flex btn-primary items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
              >
                <Wallet className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Connect</span>
                <span className="sm:hidden">Connect</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

