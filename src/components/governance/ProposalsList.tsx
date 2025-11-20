import { useReadContract } from 'wagmi';
import { luckGovernorAbi } from '@lib/contracts/abi/luckGovernor';
import addresses from '@lib/contracts/addresses.json';
import { ProposalCard } from './ProposalCard';
import { FileText, Loader2, ChevronDown } from 'lucide-react';
import { ProposalInfo } from '@hooks/useProposals';
import { useGovernanceContract } from '@hooks/useGovernanceContract';
import { useState, useEffect, useMemo } from 'react';

type ProposalFilterType = 'active' | 'history';

interface ProposalsListProps {
  proposals: ProposalInfo[];
  isLoading: boolean;
  filter: ProposalFilterType;
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
    if (state !== undefined) {
      console.log(`[ProposalStateFetcher] Proposal ${proposalId.toString()} state:`, state);
    }
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

export function ProposalsList({ proposals, isLoading, filter, governance }: ProposalsListProps) {
  const [proposalStates, setProposalStates] = useState<Map<string, ProposalState | undefined>>(new Map());
  const [proposalDeadlines, setProposalDeadlines] = useState<Map<string, bigint | undefined>>(new Map());
  const [displayCount, setDisplayCount] = useState<number>(5);

  // Debug logging
  useEffect(() => {
    console.log('[ProposalsList] Proposals:', proposals.length, proposals);
    console.log('[ProposalsList] Filter:', filter);
    console.log('[ProposalsList] States:', Array.from(proposalStates.entries()));
  }, [proposals, filter, proposalStates]);

  // Reset display count when filter changes
  useEffect(() => {
    setDisplayCount(5);
  }, [filter]);

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

  // Filter proposals based on their states
  const filteredProposals = useMemo(() => {
    const filtered = proposals.filter((proposal) => {
      const state = proposalStates.get(proposal.proposalId.toString());
      
      // Don't show proposals with undefined state in filtered views (wait for state to load)
      if (state === undefined) {
        console.log(`[ProposalsList] Proposal ${proposal.proposalId.toString()} state is undefined, filtering out`);
        return false;
      }
      
      if (filter === 'active') {
        const isActive = state === ProposalState.Active || state === ProposalState.Pending;
        console.log(`[ProposalsList] Proposal ${proposal.proposalId.toString()} state: ${state}, isActive: ${isActive}`);
        return isActive;
      }
      
      if (filter === 'history') {
        // Show all non-active proposals in history (including Canceled, Defeated, Succeeded, Queued, Executed)
        const isHistory = state !== ProposalState.Active && state !== ProposalState.Pending;
        console.log(`[ProposalsList] Proposal ${proposal.proposalId.toString()} state: ${state}, isHistory: ${isHistory}`);
        return isHistory;
      }
      
      return false;
    });

    // Sort by deadline (most recent first) - only for history tab
    if (filter === 'history') {
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
  }, [proposals, proposalStates, proposalDeadlines, filter]);

  const activeCount = proposals.filter((proposal) => {
    const state = proposalStates.get(proposal.proposalId.toString());
    return state === ProposalState.Active || state === ProposalState.Pending;
  }).length;

  const historyCount = proposals.filter((proposal) => {
    const state = proposalStates.get(proposal.proposalId.toString());
    return state !== undefined && state !== ProposalState.Active && state !== ProposalState.Pending;
  }).length;

  // Check if we're still loading states
  const statesLoaded = proposals.length === 0 || proposals.every((p) => 
    proposalStates.has(p.proposalId.toString())
  );

  // Get displayed proposals (paginated)
  const displayedProposals = filter === 'history' 
    ? filteredProposals.slice(0, displayCount)
    : filteredProposals;

  const hasMore = filter === 'history' && filteredProposals.length > displayCount;

  return (
    <div className="card p-6">
      {/* Fetch states and deadlines for all proposals (hidden) */}
      {proposals.map((proposal) => (
        <div key={proposal.proposalId.toString()} className="hidden">
          <ProposalStateFetcher
            proposalId={proposal.proposalId}
            onStateChange={(state) => handleStateChange(proposal.proposalId, state)}
          />
          {filter === 'history' && (
            <ProposalDeadlineFetcher
              proposalId={proposal.proposalId}
              onDeadlineChange={(deadline) => handleDeadlineChange(proposal.proposalId, deadline)}
            />
          )}
        </div>
      ))}

      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <FileText className="w-5 h-5 text-slate-400" />
        {filter === 'active' && `Active Proposals (${activeCount} / ${proposals.length} total)`}
        {filter === 'history' && `History (${historyCount} / ${proposals.length} total)`}
      </h2>
      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center py-12 text-slate-400">
            <Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin opacity-50" />
            <p>Loading proposals...</p>
          </div>
        ) : proposals.length === 0 ? (
          <div className="text-center py-12 text-slate-400">
            <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No proposals yet. Create the first proposal to get started!</p>
          </div>
        ) : !statesLoaded ? (
          <div className="text-center py-12 text-slate-400">
            <Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin opacity-50" />
            <p>Loading proposal states...</p>
          </div>
        ) : filteredProposals.length === 0 ? (
          <div className="text-center py-12 text-slate-400">
            <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>
              {filter === 'active' && 'No active proposals at the moment.'}
              {filter === 'history' && 'No historical proposals yet.'}
            </p>
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
                onQueue={async (_proposalId) => {
                  const descriptionHash = governance.hashDescription(proposal.description);
                  await governance.queue(
                    proposal.targets,
                    proposal.values,
                    proposal.calldatas,
                    descriptionHash
                  );
                }}
                // Don't show execute button in History/Active tabs - only in Timelock tab
                onExecute={undefined}
                onCancel={async (_proposalId) => {
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
