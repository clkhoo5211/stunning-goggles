import { useState, useEffect } from 'react';
import { useAccount, useReadContract, useBlockNumber, usePublicClient } from 'wagmi';
import { luckGovernorAbi } from '@lib/contracts/abi/luckGovernor';
import { formatUnits } from 'viem';
import { Vote, Clock, CheckCircle2, XCircle, Minus, Loader2, AlertCircle, User } from 'lucide-react';
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
  // Note: Even if ABSTAIN has most votes, if proposal is Executed, FOR is the winner
  const isFinalState = state === ProposalState.Executed || 
                       state === ProposalState.Defeated || 
                       state === ProposalState.Canceled ||
                       state === ProposalState.Queued;
  
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
    <div className="card p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold">
              Proposal #{proposalId.toString().slice(0, 8)}...{proposalId.toString().slice(-6)}
            </h3>
            {state !== undefined && (
              <span className={`text-sm font-medium px-2 py-1 rounded ${stateColors[state]}`}>
                {stateLabels[state]}
              </span>
            )}
          </div>
          {description && (
            <div className="mt-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <p className="text-xs text-slate-400 mb-1 font-semibold">Description:</p>
              <p className="text-sm text-slate-300 whitespace-pre-wrap break-words">{description}</p>
            </div>
          )}
        </div>
        {hasVoted && (
          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 ml-4" />
        )}
      </div>

      {/* User's Vote Display */}
      {hasVoted && userVote && address && (
        <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <User className="w-4 h-4 text-blue-400" />
            <p className="text-sm font-semibold text-blue-400">Your Vote</p>
          </div>
          <div className="flex items-center gap-4">
            <span className={`text-sm font-medium ${
              userVote.support === 1 ? 'text-green-400' :
              userVote.support === 0 ? 'text-red-400' :
              'text-slate-400'
            }`}>
              {userVote.support === 1 ? '✓ FOR' :
               userVote.support === 0 ? '✗ AGAINST' :
               '○ ABSTAIN'}
            </span>
            <span className="text-sm text-slate-300">
              with{' '}
              <span className="font-bold">
                <AnimatedNumber
                  value={Number(formatUnits(userVote.weight, 18))}
                  precision={2}
                  format={(val) => val.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                />
              </span>
              {' '}voting power
            </span>
          </div>
        </div>
      )}

      {/* Vote counts */}
      {votes && (
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className={`text-center p-3 rounded-lg border transition-all ${
            leadingVote === 'for'
              ? 'bg-green-500/20 border-green-500/50 shadow-lg shadow-green-500/20 ring-2 ring-green-500/30'
              : 'bg-green-500/10 border-green-500/20'
          }`}>
            <p className="text-xs text-slate-400 mb-1">For</p>
            <p className="text-lg font-bold text-green-400">
              <AnimatedNumber
                value={votes.forVotes ? Number(formatUnits(votes.forVotes, 18)) : 0}
                precision={2}
                format={(val) => val.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              />
            </p>
            <p className="text-xs text-slate-500 mt-1">voting power</p>
            {leadingVote === 'for' && (
              <p className="text-xs text-green-400 font-semibold mt-1">
                {isFinalState ? '✓ Winner' : '↑ Leading'}
              </p>
            )}
          </div>
          <div className={`text-center p-3 rounded-lg border transition-all ${
            leadingVote === 'against'
              ? 'bg-red-500/20 border-red-500/50 shadow-lg shadow-red-500/20 ring-2 ring-red-500/30'
              : 'bg-red-500/10 border-red-500/20'
          }`}>
            <p className="text-xs text-slate-400 mb-1">Against</p>
            <p className="text-lg font-bold text-red-400">
              <AnimatedNumber
                value={votes.againstVotes ? Number(formatUnits(votes.againstVotes, 18)) : 0}
                precision={2}
                format={(val) => val.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              />
            </p>
            <p className="text-xs text-slate-500 mt-1">voting power</p>
            {leadingVote === 'against' && (
              <p className="text-xs text-red-400 font-semibold mt-1">
                {isFinalState ? '✓ Winner' : '↑ Leading'}
              </p>
            )}
          </div>
          <div className={`text-center p-3 rounded-lg border transition-all ${
            leadingVote === 'abstain'
              ? 'bg-blue-500/20 border-blue-500/50 shadow-lg shadow-blue-500/20 ring-2 ring-blue-500/30'
              : 'bg-blue-500/10 border-blue-500/20'
          }`}>
            <p className="text-xs text-slate-400 mb-1">Abstain</p>
            <p className={`text-lg font-bold ${
              leadingVote === 'abstain' ? 'text-blue-400' : 'text-blue-300'
            }`}>
              <AnimatedNumber
                value={votes.abstainVotes ? Number(formatUnits(votes.abstainVotes, 18)) : 0}
                precision={2}
                format={(val) => val.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              />
            </p>
            <p className="text-xs text-slate-500 mt-1">voting power</p>
            {leadingVote === 'abstain' && (
              <p className="text-xs text-blue-400 font-semibold mt-1">
                {isFinalState ? 'Most Votes' : '↑ Leading'}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Timeline info */}
      <div className="space-y-2 mb-4 text-sm text-slate-400">
        {snapshot && currentBlock && (
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>
              Snapshot: Block {snapshot.toLocaleString()}
              {currentBlock >= snapshot ? ' (passed)' : ` (in ${(snapshot - currentBlock).toLocaleString()} blocks)`}
            </span>
          </div>
        )}
        {deadline && currentBlock && (
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>
              Voting Deadline: Block {deadline.toLocaleString()}
              {currentBlock >= deadline ? ' (passed)' : ` (in ${(deadline - currentBlock).toLocaleString()} blocks)`}
            </span>
          </div>
        )}
        {isQueued && eta && (
          <>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>
                Queued: Timelock delay started
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>
                Executable after: {new Date(eta * 1000).toLocaleString()}
                {eta <= currentTime ? ' (ready to execute)' : ' (waiting for timelock delay)'}
              </span>
            </div>
            {currentBlock && eta && (
              <div className="ml-6 text-xs text-slate-500">
                {(() => {
                  const now = Date.now() / 1000; // Current time in seconds
                  const etaSeconds = Number(eta);
                  if (etaSeconds > now) {
                    const remainingSeconds = etaSeconds - now;
                    const remainingDays = remainingSeconds / 86400;
                    return `Timelock delay remaining: ${remainingDays.toFixed(1)} days (${Math.ceil(remainingDays)} days)`;
                  }
                  return null;
                })()}
              </div>
            )}
          </>
        )}
        {state === ProposalState.Executed && eta && (
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>
              Executed: {new Date(eta * 1000).toLocaleString()}
            </span>
          </div>
        )}
      </div>

      {/* Vote disabled reason */}
      {!canVote && isActive && address && voteDisabledReason && (
        <div className="mb-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex items-center gap-2 text-sm text-yellow-400">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{voteDisabledReason}</span>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2">
        {canVote && (
          <>
            <button
              onClick={() => handleVote(1)}
              disabled={isVoting}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all ${
                leadingVote === 'for' && isActive
                  ? 'bg-green-600 hover:bg-green-700 shadow-lg shadow-green-500/30 ring-2 ring-green-400/50'
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {isVoting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Vote className="w-4 h-4" />
              )}
              Vote For
            </button>
            <button
              onClick={() => handleVote(0)}
              disabled={isVoting}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all ${
                leadingVote === 'against' && isActive
                  ? 'bg-red-600 hover:bg-red-700 shadow-lg shadow-red-500/30 ring-2 ring-red-400/50'
                  : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              {isVoting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <XCircle className="w-4 h-4" />
              )}
              Vote Against
            </button>
            <button
              onClick={() => handleVote(2)}
              disabled={isVoting}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all ${
                leadingVote === 'abstain' && isActive
                  ? 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 ring-2 ring-blue-400/50'
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              {isVoting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Minus className="w-4 h-4" />
              )}
              Abstain
            </button>
          </>
        )}
        {canQueue && (
          <button
            onClick={handleQueue}
            disabled={isQueueing}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isQueueing ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Clock className="w-4 h-4" />
            )}
            Queue Proposal
          </button>
        )}
        {isQueued && address && proposer && proposer.toLowerCase() === address.toLowerCase() && (
          <div className="w-full p-3 bg-slate-500/10 border border-slate-500/20 rounded-lg text-sm text-slate-400">
            ℹ️ Queued proposals cannot be cancelled. Once a proposal is queued, it can only be executed or expire.
          </div>
        )}
        {!isQueued && !canCancel && address && proposer && proposer.toLowerCase() !== address.toLowerCase() && (
          <div className="w-full p-3 bg-slate-500/10 border border-slate-500/20 rounded-lg text-sm text-slate-400">
            ℹ️ Only the proposer can cancel this proposal
          </div>
        )}
        {canCancel && (
          <button
            onClick={handleCancel}
            disabled={isCanceling}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCanceling ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <XCircle className="w-4 h-4" />
            )}
            Cancel Proposal
          </button>
        )}
        {canExecute && (
          <button
            onClick={handleExecute}
            disabled={isExecuting}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isExecuting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <CheckCircle2 className="w-4 h-4" />
            )}
            Execute Proposal
          </button>
        )}
        {isQueued && !canExecute && (
          <div className="w-full p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-sm text-yellow-400">
            ⏰ Waiting for timelock delay to pass before execution
          </div>
        )}
      </div>
    </div>
  );
}

