import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { motion } from 'framer-motion';
import { Dices, Trophy, Shield, Zap, TrendingUp, Users } from 'lucide-react';
import { appKit } from '@lib/reown';
import { useGameContract } from '@hooks/useGameContract';
import { AnimatedNumber } from '@components/ui/animated-number';

const Home = () => {
  const { isConnected } = useAccount();
  const { platformStats } = useGameContract();

  const numberFormatter = useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: 1,
      }),
    []
  );

  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: 1,
        style: 'currency',
        currency: 'USD',
      }),
    []
  );

  const formatCount = (value?: number) => {
    if (value === undefined) return '—';
    return numberFormatter.format(value);
  };

  const formatCurrency = (value?: number | string) => {
    if (value === undefined) return '—';
    const numeric =
      typeof value === 'number' ? value : Number.isFinite(Number.parseFloat(value)) ? Number.parseFloat(value) : NaN;
    if (!Number.isFinite(numeric)) return '—';
    return currencyFormatter.format(numeric);
  };

  const features = [
    {
      icon: <Dices className="w-8 h-8" />,
      title: 'Provably Fair',
      description: 'Verifiable on-chain randomness using Chainlink VRF. Every roll is transparent.',
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Big Payouts',
      description: 'Win up to 6000元 (~$857 USD) per round. Dynamic multipliers up to 4.0×.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Audited',
      description: 'Smart contracts audited by top security firms. Your funds are safe.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Payouts',
      description: 'Winnings paid immediately to your wallet. Withdraw anytime.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Dynamic Prize Pool',
      description: 'Pool grows with every game. Pattern-based multipliers activate automatically.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Multi-Chain',
      description: 'Play on Ethereum, Polygon, Arbitrum, Base, Optimism, BSC, and Avalanche.',
    },
  ];

  const stats = [
    {
      label: 'Total Players',
      numericValue: platformStats?.totalPlayers ?? 0,
      formatter: (val: number) => formatCount(val),
    },
    {
      label: 'Games Played',
      numericValue: platformStats?.totalGames ?? 0,
      formatter: (val: number) => formatCount(val),
    },
    {
      label: 'Total Winnings',
      numericValue: platformStats?.totalWinnings
        ? Number.parseFloat(platformStats.totalWinnings)
        : 0,
      formatter: (val: number) => formatCurrency(val),
    },
    {
      label: 'Current Pool',
      numericValue: platformStats?.poolBalance ? Number.parseFloat(platformStats.poolBalance) : 0,
      formatter: (val: number) => formatCurrency(val),
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Provably Fair</span>
            <br />
            <span className="text-white">Blockchain Gaming</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Roll the dice, land on cells, win real USDT. 
            Transparent, fair, and fun.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {isConnected ? (
            <Link to="/game" className="btn-primary text-lg px-8 py-4">
              🎲 Start Playing Now
            </Link>
          ) : (
            <button
              onClick={() => appKit.open()}
              className="btn-primary text-lg px-8 py-4"
            >
              🔗 Connect Wallet to Play
            </button>
          )}
          <Link to="/rules" className="btn-secondary text-lg px-8 py-4">
            📖 Learn How to Play
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="card">
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                <AnimatedNumber
                  value={stat.numericValue}
                  precision={0}
                  format={(val) => stat.formatter(Math.round(val))}
                />
              </p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose LuckChain?</h2>
          <p className="text-xl text-slate-400">
            The most transparent and fair blockchain gaming platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-slate-400">
            Simple gameplay, big rewards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Connect Wallet', description: 'Connect your wallet and buy USDT rounds' },
            { step: '2', title: 'Choose Direction', description: 'Select clockwise or counterclockwise movement' },
            { step: '3', title: 'Roll Dice', description: 'Roll 5 dice and watch them land' },
            { step: '4', title: 'Win USDT', description: 'Get paid based on your landing cell' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="card text-center py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <h2 className="text-4xl font-bold mb-4">Ready to Win Big?</h2>
        <p className="text-xl text-slate-300 mb-8">
          Join thousands of players winning real USDT every day
        </p>
        {isConnected ? (
          <Link to="/game" className="btn-primary text-lg px-8 py-4 inline-block">
            🎲 Start Playing Now
          </Link>
        ) : (
          <button
            onClick={() => appKit.open()}
            className="btn-primary text-lg px-8 py-4"
          >
            🔗 Connect Wallet to Play
          </button>
        )}
      </section>
    </div>
  );
};

export default Home;

