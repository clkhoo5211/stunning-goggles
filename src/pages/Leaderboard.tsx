import { motion } from 'framer-motion';

const Leaderboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="card text-center py-20"
    >
      <div className="text-6xl mb-6">🏆</div>
      <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>
      <p className="text-slate-400 mb-6">
        See top players, biggest wins, and platform statistics
      </p>
      <p className="text-sm text-slate-500">
        Coming Soon - This feature will be available after MVP testing
      </p>
    </motion.div>
  );
};

export default Leaderboard;

