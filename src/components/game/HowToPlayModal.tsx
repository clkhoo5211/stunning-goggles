import { Modal } from '@components/ui/Modal';
import { AnimatedNumber } from '@components/ui/animated-number';

interface HowToPlayModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessionRounds: number;
  roundCost: number;
  sessionCost: number;
}

export function HowToPlayModal({
  isOpen,
  onClose,
  sessionRounds,
  roundCost,
  sessionCost,
}: HowToPlayModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      title="🎯 How to Play"
      onClose={onClose}
      widthClassName=""
    >
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Basic Rules</h4>
          <ol className="space-y-3 text-slate-300 list-decimal list-inside">
            <li>
              <span className="text-slate-400">
                Buy a session: {sessionRounds} rounds × {roundCost.toLocaleString()} USDT ={' '}
                <AnimatedNumber value={sessionCost} format={(val) => val.toLocaleString()} /> USDT upfront.
              </span>
            </li>
            <li>
              <span className="text-slate-400">
                Each round rolls 5 dice. Starting cell = dice sum (minimum 5).
              </span>
            </li>
            <li>
              <span className="text-slate-400">
                Choose clockwise or counterclockwise; move (dice sum - 1) steps.
              </span>
            </li>
            <li>
              <span className="text-slate-400">
                Landing cell shows the reward. Positive rewards enter a 60s decision timer.
              </span>
            </li>
            <li>
              <span className="text-slate-400">
                Claim to end the session immediately or forfeit to continue playing.
              </span>
            </li>
            <li>
              <span className="text-slate-400">
                Hitting 豹子 (all dice identical) pays 2,000元 base instantly and ends the session.
              </span>
            </li>
            <li>
              <span className="text-slate-400">
                Landing on cell 27 wipes the remaining session rounds if you still have plays left.
              </span>
            </li>
            <li>
              <span className="text-slate-400">
                If the session ends without claiming, any unused rounds are cleared.
              </span>
            </li>
          </ol>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Gameplay Strategy</h4>
          <ul className="space-y-3 text-slate-300 list-disc list-inside">
            <li>
              <span className="text-slate-400">
                Plan your moves carefully - each dice roll determines your starting position and movement distance.
              </span>
            </li>
            <li>
              <span className="text-slate-400">
                The direction you choose (clockwise or counterclockwise) can significantly impact which cells you land on.
              </span>
            </li>
            <li>
              <span className="text-slate-400">
                When you receive a positive reward, you have 60 seconds to decide: claim it and end your session, or forfeit it to continue playing for potentially bigger rewards.
              </span>
            </li>
            <li>
              <span className="text-slate-400">
                Be cautious of cell 27 - landing here will wipe all your remaining rounds, so plan your strategy accordingly.
              </span>
            </li>
            <li>
              <span className="text-slate-400">
                The special 豹子 (all dice identical) combination is rare but highly rewarding, instantly paying out 2,000元 and ending your session.
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Tips & Tricks</h4>
          <ul className="space-y-3 text-slate-300 list-disc list-inside">
            <li>
              <span className="text-slate-400">
                Higher dice sums give you more movement options, allowing you to reach cells further away from your starting position.
              </span>
            </li>
            <li>
              <span className="text-slate-400">
                Consider the payout values of cells when choosing your direction - some paths may lead to higher-value rewards.
              </span>
            </li>
            <li>
              <span className="text-slate-400">
                If you're close to cell 27 and have many rounds remaining, you might want to be more conservative with your moves.
              </span>
            </li>
            <li>
              <span className="text-slate-400">
                The 60-second decision timer gives you time to evaluate whether the current reward is worth claiming or if you should risk it for potentially better outcomes.
              </span>
            </li>
            <li>
              <span className="text-slate-400">
                Remember that unused rounds are cleared when a session ends, so make the most of all your available rounds.
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Important Notes</h4>
          <ul className="space-y-3 text-slate-300 list-disc list-inside">
            <li>
              <span className="text-slate-400">
                All transactions are processed on the blockchain, ensuring transparency and fairness.
              </span>
            </li>
            <li>
              <span className="text-slate-400">
                Make sure you have sufficient balance before starting a new session.
              </span>
            </li>
            <li>
              <span className="text-slate-400">
                Rewards are calculated based on the cell you land on and are displayed immediately upon landing.
              </span>
            </li>
            <li>
              <span className="text-slate-400">
                The game uses a curved board layout with cells arranged in a circular pattern, creating an engaging visual experience.
              </span>
            </li>
            <li>
              <span className="text-slate-400">
                Each session is independent - starting a new session requires purchasing a new set of rounds.
              </span>
            </li>
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-700">
          <p className="text-sm text-slate-500 italic">
            Good luck and may the dice be in your favor! 🎲
          </p>
        </div>
      </div>
    </Modal>
  );
}

