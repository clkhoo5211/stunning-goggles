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
  useBlockNumber({ watch: true }); // Keep watching for updates but don't use the value

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
    <div className="space-y-8">
      {/* Filter Tabs */}
      <div className="flex justify-center">
        <div className="bg-slate-900/50 backdrop-blur-md p-1 rounded-xl border border-white/5 flex">
          <button
            onClick={() => setTimelockFilter('queued')}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${timelockFilter === 'queued'
                ? 'bg-yellow-500/10 text-yellow-400 shadow-sm border border-yellow-500/20'
                : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            <Hourglass className="w-4 h-4" />
            Queued
          </button>
          <button
            onClick={() => setTimelockFilter('executed')}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${timelockFilter === 'executed'
                ? 'bg-purple-500/10 text-purple-400 shadow-sm border border-purple-500/20'
                : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            <CheckCircle className="w-4 h-4" />
            Executed
          </button>
        </div>
      </div>

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

      {/* Queued Proposals Section */}
      {timelockFilter === 'queued' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Hourglass className="w-5 h-5 text-yellow-500" />
              Queued Proposals
              <span className="text-xs font-normal text-slate-500 ml-2 bg-slate-800 px-2 py-0.5 rounded-full">
                {queuedCount}
              </span>
            </h3>
            <p className="text-sm text-slate-400">
              Waiting for timelock delay to pass
            </p>
          </div>

          {isLoading || !statesLoaded ? (
            <div className="flex flex-col items-center justify-center py-12 text-slate-500">
              <Loader2 className="w-8 h-8 animate-spin mb-2" />
              <p>Loading queued proposals...</p>
            </div>
          ) : filteredProposals.length === 0 ? (
            <div className="rounded-2xl bg-slate-900/40 border border-white/5 p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-slate-800/50 flex items-center justify-center mx-auto mb-4">
                <Hourglass className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-300 mb-1">No Queued Proposals</h3>
              <p className="text-slate-500 max-w-xs mx-auto">
                There are currently no proposals in the timelock queue.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
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
                <button
                  onClick={() => setDisplayCount(prev => prev + 5)}
                  className="w-full py-3 rounded-xl border border-white/5 bg-slate-900/30 text-slate-400 hover:text-white hover:bg-slate-900/50 transition-all flex items-center justify-center gap-2 text-sm font-medium"
                >
                  Show More <ChevronDown className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Executed Proposals Section */}
      {timelockFilter === 'executed' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-purple-500" />
              Executed Proposals
              <span className="text-xs font-normal text-slate-500 ml-2 bg-slate-800 px-2 py-0.5 rounded-full">
                {executedCount}
              </span>
            </h3>
            <p className="text-sm text-slate-400">
              Successfully executed via Timelock
            </p>
          </div>

          {isLoading || !statesLoaded ? (
            <div className="flex flex-col items-center justify-center py-12 text-slate-500">
              <Loader2 className="w-8 h-8 animate-spin mb-2" />
              <p>Loading executed proposals...</p>
            </div>
          ) : filteredProposals.length === 0 ? (
            <div className="rounded-2xl bg-slate-900/40 border border-white/5 p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-slate-800/50 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-300 mb-1">No Executed Proposals</h3>
              <p className="text-slate-500 max-w-xs mx-auto">
                No proposals have been executed yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
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
                <button
                  onClick={() => setDisplayCount(prev => prev + 5)}
                  className="w-full py-3 rounded-xl border border-white/5 bg-slate-900/30 text-slate-400 hover:text-white hover:bg-slate-900/50 transition-all flex items-center justify-center gap-2 text-sm font-medium"
                >
                  Show More <ChevronDown className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

