import { useReadContract, useBlockNumber } from 'wagmi';
import { luckGovernorAbi } from '@lib/contracts/abi/luckGovernor';
import addresses from '@lib/contracts/addresses.json';
import { ProposalCard } from './ProposalCard';
import { FileText, Loader2, Clock, Hourglass, CheckCircle, ChevronDown } from 'lucide-react';
import { ProposalInfo } from '@hooks/useProposals';
import { useGovernanceContract } from '@hooks/useGovernanceContract';
import { useState, useEffect, useMemo } from 'react';

interface TimelockOperationsProps {
  proposals: ProposalInfo[];
  isLoading: boolean;
  governance: ReturnType<typeof useGovernanceContract>;
}

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

type TimelockFilterType = 'queued' | 'executed';

// Component to fetch state for a single proposal
function ProposalStateFetcher({
  proposalId,
  onStateChange
}: {
  proposalId: bigint;
  onStateChange: (state: ProposalState | undefined) => void;
}) {
  const governorAddress = addresses.contracts.LuckGovernor as `0x${string}`;

  const { data: proposalState } = useReadContract({
    address: governorAddress,
    abi: luckGovernorAbi,
    functionName: 'state',
    args: [proposalId],
    query: { enabled: !!governorAddress },
  });

  useEffect(() => {
    const state = proposalState !== undefined ? (proposalState as ProposalState) : undefined;
    onStateChange(state);
  }, [proposalState, onStateChange, proposalId]);

  return null;
}

// Component to fetch deadline for a single proposal
function ProposalDeadlineFetcher({
  proposalId,
  onDeadlineChange
}: {
  proposalId: bigint;
  onDeadlineChange: (deadline: bigint | undefined) => void;
}) {
  const governorAddress = addresses.contracts.LuckGovernor as `0x${string}`;

  const { data: proposalDeadline } = useReadContract({
    address: governorAddress,
    abi: luckGovernorAbi,
    functionName: 'proposalDeadline',
    args: [proposalId],
    query: { enabled: !!governorAddress },
  });

  useEffect(() => {
    onDeadlineChange(proposalDeadline as bigint | undefined);
  }, [proposalDeadline, onDeadlineChange]);

  return null;
}

export function TimelockOperations({ proposals, isLoading, governance }: TimelockOperationsProps) {
  const [proposalStates, setProposalStates] = useState<Map<string, ProposalState | undefined>>(new Map());
  const [proposalDeadlines, setProposalDeadlines] = useState<Map<string, bigint | undefined>>(new Map());
  const [timelockFilter, setTimelockFilter] = useState<TimelockFilterType>('queued');
  const [displayCount, setDisplayCount] = useState<number>(5);
  const { data: blockNumber } = useBlockNumber({ watch: true });

  // Reset display count when filter changes
  useEffect(() => {
    setDisplayCount(5);
  }, [timelockFilter]);

  // Update state for a specific proposal
  const handleStateChange = (proposalId: bigint, state: ProposalState | undefined) => {
    setProposalStates((prev) => {
      const next = new Map(prev);
      next.set(proposalId.toString(), state);
      return next;
    });
  };

  // Update deadline for a specific proposal
  const handleDeadlineChange = (proposalId: bigint, deadline: bigint | undefined) => {
    setProposalDeadlines((prev) => {
      const next = new Map(prev);
      next.set(proposalId.toString(), deadline);
      return next;
    });
  };

  // Filter proposals based on selected tab
  const filteredProposals = useMemo(() => {
    const filtered = proposals.filter((proposal) => {
      const state = proposalStates.get(proposal.proposalId.toString());
      if (state === undefined) return false;

      if (timelockFilter === 'queued') {
        return state === ProposalState.Queued;
      } else if (timelockFilter === 'executed') {
        // Show both Executed and Canceled proposals in executed tab
        return state === ProposalState.Executed || state === ProposalState.Canceled;
      }
      return false;
    });

    // Sort by deadline (most recent first) - only for executed tab
    if (timelockFilter === 'executed') {
      return filtered.sort((a, b) => {
        const deadlineA = proposalDeadlines.get(a.proposalId.toString());
        const deadlineB = proposalDeadlines.get(b.proposalId.toString());

        // If both have deadlines, sort by deadline (descending - most recent first)
        if (deadlineA && deadlineB) {
          return Number(deadlineB - deadlineA);
        }
        // If only one has deadline, prioritize it
        if (deadlineA && !deadlineB) return -1;
        if (!deadlineA && deadlineB) return 1;
        // If neither has deadline, maintain original order
        return 0;
      });
    }

    return filtered;
  }, [proposals, proposalStates, proposalDeadlines, timelockFilter]);

  const queuedCount = proposals.filter((proposal) => {
    const state = proposalStates.get(proposal.proposalId.toString());
    return state === ProposalState.Queued;
  }).length;

  const executedCount = proposals.filter((proposal) => {
    const state = proposalStates.get(proposal.proposalId.toString());
    // Count both Executed and Canceled
    return state === ProposalState.Executed || state === ProposalState.Canceled;
  }).length;

  // Check if we're still loading states
  const statesLoaded = proposals.length === 0 || proposals.every((p) =>
    proposalStates.has(p.proposalId.toString())
  );

  // Get displayed proposals (paginated)
  const displayedProposals = timelockFilter === 'executed'
    ? filteredProposals.slice(0, displayCount)
    : filteredProposals;

  const hasMore = timelockFilter === 'executed' && filteredProposals.length > displayCount;

  return (
    <div className="card p-6">
      {/* Fetch states and deadlines for all proposals (hidden) */}
      {proposals.map((proposal) => (
        <div key={proposal.proposalId.toString()} className="hidden">
          <ProposalStateFetcher
            proposalId={proposal.proposalId}
            onStateChange={(state) => handleStateChange(proposal.proposalId, state)}
          />
          {/* Always fetch deadlines for executed tab sorting */}
          <ProposalDeadlineFetcher
            proposalId={proposal.proposalId}
            onDeadlineChange={(deadline) => handleDeadlineChange(proposal.proposalId, deadline)}
          />
        </div>
      ))}

      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5 text-slate-400" />
        Timelock Operations
      </h2>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 border-b border-slate-700">
        <button
          onClick={() => setTimelockFilter('queued')}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${timelockFilter === 'queued'
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-slate-400 hover:text-slate-300'
            }`}
        >
          <div className="flex items-center gap-2">
            <Hourglass className="w-4 h-4" />
            Queued ({queuedCount})
          </div>
        </button>
        <button
          onClick={() => setTimelockFilter('executed')}
          className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${timelockFilter === 'executed'
              ? 'border-green-500 text-green-400'
              : 'border-transparent text-slate-400 hover:text-slate-300'
            }`}
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Executed ({executedCount})
          </div>
        </button>
      </div>

      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center py-12 text-slate-400">
            <Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin opacity-50" />
            <p>Loading proposals...</p>
          </div>
        ) : proposals.length === 0 ? (
          <div className="text-center py-12 text-slate-400">
            <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No proposals yet.</p>
          </div>
        ) : !statesLoaded ? (
          <div className="text-center py-12 text-slate-400">
            <Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin opacity-50" />
            <p>Loading proposal states...</p>
          </div>
        ) : filteredProposals.length === 0 ? (
          <div className="text-center py-12 text-slate-400">
            {timelockFilter === 'queued' ? (
              <>
                <Hourglass className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No queued proposals.</p>
                <p className="text-sm mt-2">Proposals that are queued and waiting for timelock delay will appear here.</p>
              </>
            ) : (
              <>
                <CheckCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No executed proposals.</p>
                <p className="text-sm mt-2">Proposals that have been executed through timelock will appear here.</p>
              </>
            )}
          </div>
        ) : (
          <>
            {displayedProposals.map((proposal) => (
              <ProposalCard
                key={proposal.proposalId.toString()}
                proposalId={proposal.proposalId}
                description={proposal.description}
                onVote={async (proposalId, support) => {
                  await governance.castVote(proposalId, support);
                }}
                onQueue={async () => {
                  const descriptionHash = governance.hashDescription(proposal.description);
                  await governance.queue(
                    proposal.targets,
                    proposal.values,
                    proposal.calldatas,
                    descriptionHash
                  );
                }}
                onExecute={async () => {
                  const descriptionHash = governance.hashDescription(proposal.description);
                  await governance.execute(
                    proposal.targets,
                    proposal.values,
                    proposal.calldatas,
                    descriptionHash
                  );
                }}
                onCancel={async () => {
                  const descriptionHash = governance.hashDescription(proposal.description);
                  await governance.cancel(
                    proposal.targets,
                    proposal.values,
                    proposal.calldatas,
                    descriptionHash
                  );
                }}
              />
            ))}
            {hasMore && (
              <div className="flex justify-center pt-4">
                <button
                  onClick={() => setDisplayCount((prev) => prev + 5)}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-medium text-slate-200 transition-colors"
                >
                  <ChevronDown className="w-5 h-5" />
                  Show More ({filteredProposals.length - displayCount} remaining)
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

