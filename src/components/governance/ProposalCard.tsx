import { useState, useEffect } from 'react';
import { useAccount, useReadContract, useBlockNumber, usePublicClient } from 'wagmi';
import { luckGovernorAbi } from '@lib/contracts/abi/luckGovernor';
import { formatUnits } from 'viem';
import { Vote, Clock, CheckCircle2, XCircle, Minus, Loader2, User } from 'lucide-react';
import { AnimatedNumber } from '@components/ui/animated-number';
import addresses from '@lib/contracts/addresses.json';
import { useUserVote } from '@hooks/useUserVote';

interface ProposalCardProps {
  proposalId: bigint;
  description?: string;
  onVote?: (proposalId: bigint, support: 0 | 1 | 2) => Promise<void>;
  onQueue?: (proposalId: bigint) => Promise<void>;
  onExecute?: (proposalId: bigint) => Promise<void>;
  onCancel?: (proposalId: bigint) => Promise<void>;
}

// Proposal states enum (from OpenZeppelin Governor)
enum ProposalState {
  Pending = 0,
  Active = 1,
  Canceled = 2,
  Defeated = 3,
  Succeeded = 4,
  Queued = 5,
  Expired = 6,
  Executed = 7,
}

const stateLabels: Record<ProposalState, string> = {
  [ProposalState.Pending]: 'Pending',
  [ProposalState.Active]: 'Active',
  [ProposalState.Canceled]: 'Canceled',
  [ProposalState.Defeated]: 'Defeated',
  [ProposalState.Succeeded]: 'Succeeded',
  [ProposalState.Queued]: 'Queued',
  [ProposalState.Expired]: 'Expired',
  [ProposalState.Executed]: 'Executed',
};

const stateColors: Record<ProposalState, string> = {
  [ProposalState.Pending]: 'text-slate-400',
  [ProposalState.Active]: 'text-blue-400',
  [ProposalState.Canceled]: 'text-red-400',
  [ProposalState.Defeated]: 'text-red-400',
  [ProposalState.Succeeded]: 'text-green-400',
  [ProposalState.Queued]: 'text-yellow-400',
  [ProposalState.Expired]: 'text-slate-500',
  [ProposalState.Executed]: 'text-green-500',
};

export function ProposalCard({ proposalId, description, onVote, onQueue, onExecute, onCancel }: ProposalCardProps) {
  const { address } = useAccount();
  const { data: blockNumber } = useBlockNumber({ watch: true });
  const publicClient = usePublicClient();
  const governorAddress = addresses.contracts.LuckGovernor as `0x${string}`;
  const [currentBlockTimestamp, setCurrentBlockTimestamp] = useState<number | undefined>(undefined);

  const [isVoting, setIsVoting] = useState(false);
  const [isQueueing, setIsQueueing] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [isCanceling, setIsCanceling] = useState(false);

  // Read proposal state
  const { data: proposalState } = useReadContract({
    address: governorAddress,
    abi: luckGovernorAbi,
    functionName: 'state',
    args: [proposalId],
    query: { enabled: !!governorAddress },
  });

  // Read proposal votes
  const { data: proposalVotes } = useReadContract({
    address: governorAddress,
    abi: luckGovernorAbi,
    functionName: 'proposalVotes',
    args: [proposalId],
    query: { enabled: !!governorAddress },
  });

  // Read proposal deadline
  const { data: proposalDeadline } = useReadContract({
    address: governorAddress,
    abi: luckGovernorAbi,
    functionName: 'proposalDeadline',
    args: [proposalId],
    query: { enabled: !!governorAddress },
  });

  // Read proposal snapshot
  const { data: proposalSnapshot } = useReadContract({
    address: governorAddress,
    abi: luckGovernorAbi,
    functionName: 'proposalSnapshot',
    args: [proposalId],
    query: { enabled: !!governorAddress },
  });

  const governanceTokenAddress = addresses.contracts.GovernanceToken as `0x${string}` | undefined;

  // Read if user has voted
  const { data: hasVoted } = useReadContract({
    address: governorAddress,
    abi: luckGovernorAbi,
    functionName: 'hasVoted',
    args: proposalId && address ? [proposalId, address] : undefined,
    query: { enabled: !!governorAddress && !!address && !!proposalId },
  });

  // Read user's voting power at proposal snapshot (this is what matters for voting)
  const { data: userVotingPowerAtSnapshot } = useReadContract({
    address: governanceTokenAddress,
    abi: [
      {
        inputs: [{ name: 'account', type: 'address' }, { name: 'blockNumber', type: 'uint256' }],
        name: 'getPastVotes',
        outputs: [{ name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
      },
    ],
    functionName: 'getPastVotes',
    args: address && proposalSnapshot ? [address, BigInt(proposalSnapshot)] : undefined,
    query: { enabled: !!governanceTokenAddress && !!address && !!proposalSnapshot },
  });

  // Get user's vote details (direction and weight)
  const { userVote } = useUserVote(proposalId);

  // Read proposal ETA (for queued proposals)
  const { data: proposalEta } = useReadContract({
    address: governorAddress,
    abi: luckGovernorAbi,
    functionName: 'proposalEta',
    args: [proposalId],
    query: { enabled: !!governorAddress },
  });

  // Read proposer address (to check if user can cancel)
  const { data: proposer } = useReadContract({
    address: governorAddress,
    abi: luckGovernorAbi,
    functionName: 'proposalProposer',
    args: [proposalId],
    query: { enabled: !!governorAddress },
  });

  const state = proposalState !== undefined ? (proposalState as ProposalState) : undefined;

  // proposalVotes returns a tuple [againstVotes, forVotes, abstainVotes]
  const votes = proposalVotes
    ? {
      againstVotes: (proposalVotes as [bigint, bigint, bigint])[0],
      forVotes: (proposalVotes as [bigint, bigint, bigint])[1],
      abstainVotes: (proposalVotes as [bigint, bigint, bigint])[2],
    }
    : undefined;

  // Debug logging
  useEffect(() => {
    if (proposalVotes) {
      console.log(`[ProposalCard] Proposal ${proposalId.toString()} raw votes:`, proposalVotes);
      console.log(`[ProposalCard] Proposal ${proposalId.toString()} parsed votes:`, votes);
    } else {
      console.log(`[ProposalCard] Proposal ${proposalId.toString()} votes: undefined`);
    }
  }, [proposalId, proposalVotes, votes]);

  const handleVote = async (support: 0 | 1 | 2) => {
    if (!onVote) return;
    setIsVoting(true);
    try {
      await onVote(proposalId, support);
    } finally {
      setIsVoting(false);
    }
  };

  const handleQueue = async () => {
    if (!onQueue) return;
    setIsQueueing(true);
    try {
      await onQueue(proposalId);
    } finally {
      setIsQueueing(false);
    }
  };

  const handleExecute = async () => {
    if (!onExecute) return;
    setIsExecuting(true);
    try {
      await onExecute(proposalId);
    } finally {
      setIsExecuting(false);
    }
  };

  const handleCancel = async () => {
    if (!onCancel) return;
    setIsCanceling(true);
    try {
      await onCancel(proposalId);
    } finally {
      setIsCanceling(false);
    }
  };

  const currentBlock = blockNumber ? Number(blockNumber) : undefined;
  const deadline = proposalDeadline ? Number(proposalDeadline) : undefined;
  const snapshot = proposalSnapshot ? Number(proposalSnapshot) : undefined;
  const eta = proposalEta ? Number(proposalEta) : undefined; // ETA is a Unix timestamp in seconds

  const isActive = state === ProposalState.Active;
  const hasVotingPower = userVotingPowerAtSnapshot ? userVotingPowerAtSnapshot > 0n : false;
  const canVote = isActive && !hasVoted && address && onVote && hasVotingPower;
  const canQueue = state === ProposalState.Succeeded && onQueue;
  // Fetch current block timestamp for accurate ETA comparison
  useEffect(() => {
    if (publicClient && blockNumber) {
      publicClient.getBlock({ blockNumber }).then((block) => {
        setCurrentBlockTimestamp(Number(block.timestamp));
      }).catch((err) => {
        console.error('Failed to get block timestamp:', err);
        // Fallback to Date.now() if block fetch fails
        setCurrentBlockTimestamp(Math.floor(Date.now() / 1000));
      });
    } else {
      // Fallback to Date.now() if no block number
      setCurrentBlockTimestamp(Math.floor(Date.now() / 1000));
    }
  }, [publicClient, blockNumber]);

  const isQueued = state === ProposalState.Queued;
  // ETA is a timestamp (seconds), compare with blockchain time (not real-world time)
  // Use currentBlockTimestamp if available, otherwise fallback to Date.now()
  const currentTime = currentBlockTimestamp ?? Math.floor(Date.now() / 1000);
  const canExecute = isQueued && eta && currentBlockTimestamp && eta <= currentBlockTimestamp && onExecute;

  // Debug logging for queued proposals
  useEffect(() => {
    if (isQueued && eta) {
      console.log(`[ProposalCard] Proposal ${proposalId.toString()} - Queued execution check:`, {
        eta,
        currentBlockTimestamp,
        currentTime,
        etaDate: new Date(eta * 1000).toLocaleString(),
        currentDate: new Date(currentTime * 1000).toLocaleString(),
        canExecute,
        hasOnExecute: !!onExecute,
        isQueued,
        blockNumber: blockNumber?.toString(),
      });
    }
  }, [isQueued, eta, currentBlockTimestamp, currentTime, canExecute, onExecute, proposalId, blockNumber]);
  // IMPORTANT: Queued proposals CANNOT be cancelled in OpenZeppelin Governor
  // Only Pending or Active proposals can be cancelled by the proposer
  // Once queued, proposals can only be executed or expire - they cannot be cancelled
  const canCancel = !isQueued && // Queued proposals cannot be cancelled
    (isActive || state === ProposalState.Pending) &&
    onCancel &&
    address &&
    proposer &&
    proposer.toLowerCase() === address.toLowerCase();

  // Debug logging for cancel button visibility
  useEffect(() => {
    if (isActive || state === ProposalState.Pending) {
      console.log(`[ProposalCard] Proposal ${proposalId.toString()} - Cancel button check:`, {
        isQueued,
        isActive,
        state,
        hasOnCancel: !!onCancel,
        address,
        proposer,
        isProposer: proposer && address && proposer.toLowerCase() === address.toLowerCase(),
        canCancel,
      });
    }
  }, [isQueued, isActive, state, onCancel, address, proposer, canCancel, proposalId]);

  // Determine which vote option is leading/won based on proposal state and vote counts
  // IMPORTANT: ABSTAIN votes don't determine success/failure - only FOR vs AGAINST matters
  // - Executed/Succeeded/Queued = FOR won (FOR > AGAINST)
  // - Defeated/Canceled = AGAINST won (AGAINST > FOR)
  // - ABSTAIN just counts toward quorum but doesn't affect outcome
  const leadingVote = votes && state !== undefined
    ? (state === ProposalState.Defeated || state === ProposalState.Canceled
      ? 'against' // Defeated means AGAINST won (AGAINST > FOR)
      : (state === ProposalState.Executed || state === ProposalState.Succeeded || state === ProposalState.Queued
        ? 'for' // Executed/Succeeded/Queued means FOR won (FOR > AGAINST)
        : (votes.abstainVotes > votes.forVotes && votes.abstainVotes > votes.againstVotes
          ? 'abstain' // Most votes were abstain (but doesn't determine outcome)
          : (votes.forVotes > votes.againstVotes ? 'for' : 'against')))) // Compare vote counts
    : null;

  // For active proposals, it's "leading", for final states it's "winner"


  // Determine why user can't vote (for display)
  const voteDisabledReason = !address
    ? 'Connect wallet to vote'
    : !isActive
      ? `Proposal is ${state !== undefined ? stateLabels[state].toLowerCase() : 'not active'}`
      : hasVoted
        ? 'You have already voted'
        : !hasVotingPower
          ? 'You have no voting power at proposal snapshot'
          : null;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-md transition-all hover:bg-slate-900/80 hover:border-white/10 hover:shadow-xl hover:shadow-blue-500/5">
      {/* Status Stripe */}
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${state === ProposalState.Active ? 'bg-blue-500' :
        state === ProposalState.Succeeded ? 'bg-green-500' :
          state === ProposalState.Executed ? 'bg-purple-500' :
            state === ProposalState.Queued ? 'bg-yellow-500' :
              state === ProposalState.Defeated ? 'bg-red-500' :
                'bg-slate-700'
        }`} />

      <div className="p-6 pl-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${state === ProposalState.Active ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                state === ProposalState.Succeeded ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                  state === ProposalState.Executed ? 'bg-purple-500/10 border-purple-500/20 text-purple-400' :
                    state === ProposalState.Queued ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' :
                      state === ProposalState.Defeated ? 'bg-red-500/10 border-red-500/20 text-red-400' :
                        'bg-slate-700/50 border-slate-600 text-slate-400'
                }`}>
                {state !== undefined ? stateLabels[state] : 'Loading...'}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                #{proposalId.toString().slice(0, 6)}...{proposalId.toString().slice(-4)}
              </span>
            </div>

            {description && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:line-clamp-none transition-all">
                  {description.split('\n')[0]}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2 group-hover:line-clamp-none transition-all">
                  {description.split('\n').slice(1).join('\n')}
                </p>
              </div>
            )}
          </div>

          {hasVoted && (
            <div className="flex flex-col items-center ml-4">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-[10px] text-green-400 font-medium mt-1">Voted</span>
            </div>
          )}
        </div>

        {/* User's Vote Display */}
        {hasVoted && userVote && address && (
          <div className="mb-6 p-3 bg-blue-500/5 border border-blue-500/10 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-slate-300">You voted:</span>
              <span className={`text-sm font-bold ${userVote.support === 1 ? 'text-green-400' :
                userVote.support === 0 ? 'text-red-400' :
                  'text-slate-400'
                }`}>
                {userVote.support === 1 ? 'FOR' :
                  userVote.support === 0 ? 'AGAINST' :
                    'ABSTAIN'}
              </span>
            </div>
            <span className="text-xs text-slate-500">
              Power: <span className="text-slate-300 font-mono">{Number(formatUnits(userVote.weight, 18)).toFixed(2)}</span>
            </span>
          </div>
        )}

        {/* Vote counts */}
        {votes && (
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: 'For', value: votes.forVotes, color: 'green', type: 'for' },
              { label: 'Against', value: votes.againstVotes, color: 'red', type: 'against' },
              { label: 'Abstain', value: votes.abstainVotes, color: 'slate', type: 'abstain' }
            ].map((item) => (
              <div key={item.label} className={`relative overflow-hidden rounded-xl p-3 border ${leadingVote === item.type
                ? `bg-${item.color}-500/10 border-${item.color}-500/30`
                : 'bg-slate-800/30 border-white/5'
                }`}>
                <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                <p className={`text-lg font-bold ${item.color === 'green' ? 'text-green-400' :
                  item.color === 'red' ? 'text-red-400' : 'text-slate-300'
                  }`}>
                  <AnimatedNumber
                    value={item.value ? Number(formatUnits(item.value as bigint, 18)) : 0}
                    precision={0}
                    format={(val) => val.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  />
                </p>
                {leadingVote === item.type && (
                  <div className={`absolute top-0 right-0 p-1 rounded-bl-lg bg-${item.color}-500/20`}>
                    <CheckCircle2 className={`w-3 h-3 text-${item.color}-400`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Timeline info */}
        <div className="flex flex-wrap gap-4 text-xs text-slate-500 border-t border-white/5 pt-4 mb-6">
          {snapshot && currentBlock && (
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Snapshot: {snapshot.toLocaleString()}</span>
            </div>
          )}
          {deadline && currentBlock && (
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Deadline: {deadline.toLocaleString()}</span>
            </div>
          )}
          {isQueued && eta && (
            <div className="flex items-center gap-1.5 text-yellow-500/80">
              <Clock className="w-3.5 h-3.5" />
              <span>Execute after: {new Date(eta * 1000).toLocaleDateString()}</span>
            </div>
          )}
        </div>

        {/* Vote disabled reason */}
        {!canVote && isActive && address && voteDisabledReason && (
          <div className="mb-4 text-xs text-center text-slate-500 italic">
            {voteDisabledReason}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2">
          {canVote && (
            <>
              <button
                onClick={() => handleVote(1)}
                disabled={isVoting}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-500 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-green-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isVoting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Vote className="w-4 h-4" />}
                Vote For
              </button>
              <button
                onClick={() => handleVote(0)}
                disabled={isVoting}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-red-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isVoting ? <Loader2 className="w-4 h-4 animate-spin" /> : <XCircle className="w-4 h-4" />}
                Against
              </button>
              <button
                onClick={() => handleVote(2)}
                disabled={isVoting}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isVoting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Minus className="w-4 h-4" />}
                Abstain
              </button>
            </>
          )}

          {canQueue && (
            <button
              onClick={handleQueue}
              disabled={isQueueing}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-yellow-600 hover:bg-yellow-500 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-yellow-900/20 disabled:opacity-50"
            >
              {isQueueing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Clock className="w-4 h-4" />}
              Queue Proposal
            </button>
          )}

          {canExecute && (
            <button
              onClick={handleExecute}
              disabled={isExecuting}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-green-900/20 disabled:opacity-50"
            >
              {isExecuting ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
              Execute Proposal
            </button>
          )}

          {canCancel && (
            <button
              onClick={handleCancel}
              disabled={isCanceling}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-red-900/20 disabled:opacity-50"
            >
              {isCanceling ? <Loader2 className="w-4 h-4 animate-spin" /> : <XCircle className="w-4 h-4" />}
              Cancel Proposal
            </button>
          )}

          {isQueued && !canExecute && (
            <div className="w-full py-3 text-center text-sm text-yellow-500 bg-yellow-500/5 border border-yellow-500/10 rounded-xl">
              ⏳ Waiting for timelock delay
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

