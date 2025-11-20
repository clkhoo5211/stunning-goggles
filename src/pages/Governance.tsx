import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAccount, useBlockNumber } from 'wagmi';
import { useGovernanceContract } from '@hooks/useGovernanceContract';
import { useProposals } from '@hooks/useProposals';
import { AnimatedNumber } from '@components/ui/animated-number';
import { CreateProposalModal } from '@components/governance/CreateProposalModal';
import { ProposalsList } from '@components/governance/ProposalsList';
import { TimelockOperations } from '@components/governance/TimelockOperations';
import {
  Shield,
  Clock,
  Vote,
  Users,
  Settings,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Plus,
  FileText,
  History,
  Zap
} from 'lucide-react';

type TabType = 'governance' | 'timelock';
type ProposalFilterType = 'active' | 'history';

const Governance = () => {
  const { isConnected, address } = useAccount();
  const [activeTab, setActiveTab] = useState<TabType>('governance');
  const [proposalFilter, setProposalFilter] = useState<ProposalFilterType>('active');
  const [isCreateProposalOpen, setIsCreateProposalOpen] = useState(false);
  const governance = useGovernanceContract();
  const { data: blockNumber } = useBlockNumber({ watch: true });
  const { proposals, isLoading: isLoadingProposals } = useProposals();

  const formatDays = (seconds?: number) => {
    if (!seconds) return 'N/A';
    const days = seconds / (24 * 60 * 60);
    return days.toFixed(1);
  };

  const formatBlocks = (blocks?: number) => {
    if (!blocks) return 'N/A';
    // Assuming ~12 seconds per block (Ethereum mainnet)
    const days = (blocks * 12) / (24 * 60 * 60);
    if (days >= 1) {
      return `${days.toFixed(1)} days (${blocks.toLocaleString()} blocks)`;
    }
    const hours = (blocks * 12) / 3600;
    return `${hours.toFixed(1)} hours (${blocks.toLocaleString()} blocks)`;
  };

  if (!isConnected) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="card text-center py-20"
      >
        <AlertCircle className="w-16 h-16 mx-auto mb-4 text-slate-400" />
        <h1 className="text-3xl font-bold mb-4">Governance & Timelock</h1>
        <p className="text-slate-400 mb-6">
          Please connect your wallet to view governance information
        </p>
      </motion.div>
    );
  }

  if (!governance.hasContracts) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="card text-center py-20"
      >
        <Loader2 className="w-16 h-16 mx-auto mb-4 text-slate-400 animate-spin" />
        <h1 className="text-3xl font-bold mb-4">Governance & Timelock</h1>
        <p className="text-slate-400 mb-6">
          Loading governance contracts...
        </p>
        <p className="text-sm text-slate-500">
          If contracts are not deployed, they will appear here once available
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="card p-6">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Shield className="w-8 h-8 text-blue-400" />
          Governance & Timelock
        </h1>
        <p className="text-slate-400">
          View and interact with the decentralized governance system
        </p>
      </div>

      {/* Tabs */}
      <div className="card p-2">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('governance')}
            className={`flex - 1 flex items - center justify - center gap - 2 px - 4 py - 3 rounded - lg font - semibold transition - all ${activeTab === 'governance'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
              } `}
          >
            <Vote className="w-5 h-5" />
            Governance
          </button>
          <button
            onClick={() => setActiveTab('timelock')}
            className={`flex - 1 flex items - center justify - center gap - 2 px - 4 py - 3 rounded - lg font - semibold transition - all ${activeTab === 'timelock'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
              } `}
          >
            <Clock className="w-5 h-5" />
            Timelock
          </button>
        </div>
      </div>

      {/* Governance Tab */}
      {activeTab === 'governance' && (
        <div className="space-y-6">
          {/* Create Proposal Button */}
          <div className="card p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold mb-1">Proposals</h2>
                <p className="text-sm text-slate-400">
                  Create and vote on governance proposals
                </p>
              </div>
              <button
                onClick={() => setIsCreateProposalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold"
              >
                <Plus className="w-4 h-4" />
                Create Proposal
              </button>
            </div>
          </div>

          {/* Proposal Filter Tabs */}
          <div className="card p-2">
            <div className="flex gap-2">
              <button
                onClick={() => setProposalFilter('active')}
                className={`flex - 1 flex items - center justify - center gap - 2 px - 4 py - 2 rounded - lg font - semibold transition - all ${proposalFilter === 'active'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  } `}
              >
                <Zap className="w-4 h-4" />
                Active
              </button>
              <button
                onClick={() => setProposalFilter('history')}
                className={`flex - 1 flex items - center justify - center gap - 2 px - 4 py - 2 rounded - lg font - semibold transition - all ${proposalFilter === 'history'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  } `}
              >
                <History className="w-4 h-4" />
                History
              </button>
            </div>
          </div>

          {/* Proposals Section */}
          <ProposalsList
            proposals={proposals}
            isLoading={isLoadingProposals}
            filter={proposalFilter}
            governance={governance}
          />

          {/* User Voting Power */}
          {address && (
            <div className="card p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  Your Voting Power
                </h2>
                {governance.userVotingPower !== undefined && Number(governance.userVotingPower) > 0 && (
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Token Balance</p>
                  <p className="text-2xl font-bold">
                    {governance.userTokenBalance !== undefined ? (
                      <AnimatedNumber
                        value={Number(governance.userTokenBalance)}
                        precision={2}
                        format={(val) => val.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                      />
                    ) : (
                      '0'
                    )}{' '}
                    <span className="text-lg text-slate-400">{governance.tokenSymbol || 'LGT'}</span>
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Voting Power</p>
                  <p className="text-2xl font-bold">
                    {governance.userVotingPower !== undefined ? (
                      <AnimatedNumber
                        value={Number(governance.userVotingPower)}
                        precision={2}
                        format={(val) => val.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                      />
                    ) : (
                      '0'
                    )}{' '}
                    <span className="text-lg text-slate-400">{governance.tokenSymbol || 'LGT'}</span>
                  </p>
                  {governance.userVotingPower !== undefined && Number(governance.userVotingPower) === 0 && (
                    <p className="text-sm text-slate-500 mt-2">
                      You need voting power to create proposals and vote. Get LGT tokens and delegate them to participate.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Governance Settings */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-slate-400" />
              Governance Settings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Voting Delay</p>
                  <p className="text-lg font-semibold">
                    {formatBlocks(governance.votingDelay)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Voting Period</p>
                  <p className="text-lg font-semibold">
                    {formatBlocks(governance.votingPeriod)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Proposal Threshold</p>
                  <p className="text-lg font-semibold">
                    {governance.proposalThreshold ? (
                      <AnimatedNumber
                        value={Number(governance.proposalThreshold)}
                        precision={2}
                        format={(val) => val.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                      />
                    ) : (
                      'N/A'
                    )}{' '}
                    <span className="text-sm text-slate-400">{governance.tokenSymbol || 'LGT'}</span>
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Quorum</p>
                  <p className="text-lg font-semibold">
                    {governance.quorumPercentage !== undefined
                      ? `${governance.quorumPercentage.toFixed(2)}% `
                      : 'N/A'}
                  </p>
                  {governance.currentQuorum && (
                    <p className="text-sm text-slate-500 mt-1">
                      ({governance.currentQuorum} {governance.tokenSymbol || 'LGT'} needed)
                    </p>
                  )}
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Governance Token</p>
                  <p className="text-lg font-semibold">
                    {governance.tokenName || 'N/A'} ({governance.tokenSymbol || 'N/A'})
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Total Supply</p>
                  <p className="text-lg font-semibold">
                    {governance.tokenTotalSupply ? (
                      <AnimatedNumber
                        value={Number(governance.tokenTotalSupply)}
                        precision={0}
                        format={(val) => val.toLocaleString()}
                      />
                    ) : (
                      'N/A'
                    )}{' '}
                    <span className="text-sm text-slate-400">{governance.tokenSymbol || 'LGT'}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contract Addresses */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-slate-400" />
              Contract Addresses
            </h2>
            <div className="space-y-3">
              {governance.governorAddress && (
                <div>
                  <p className="text-sm text-slate-400 mb-1">Governor</p>
                  <p className="text-sm font-mono text-slate-300 break-all">
                    {governance.governorAddress}
                  </p>
                </div>
              )}
              {governance.timelockAddress && (
                <div>
                  <p className="text-sm text-slate-400 mb-1">Timelock</p>
                  <p className="text-sm font-mono text-slate-300 break-all">
                    {governance.timelockAddress}
                  </p>
                </div>
              )}
              {governance.governanceTokenAddress && (
                <div>
                  <p className="text-sm text-slate-400 mb-1">Governance Token</p>
                  <p className="text-sm font-mono text-slate-300 break-all">
                    {governance.governanceTokenAddress}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Timelock Tab */}
      {activeTab === 'timelock' && (
        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-slate-400" />
              Timelock Settings
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-400 mb-1">Minimum Delay</p>
                <p className="text-2xl font-bold">
                  {governance.minDelayDays !== undefined
                    ? `${governance.minDelayDays.toFixed(1)} days`
                    : 'N/A'}
                </p>
                {governance.minDelay && (
                  <p className="text-sm text-slate-500 mt-1">
                    ({governance.minDelay.toLocaleString()} seconds)
                  </p>
                )}
              </div>
              <div className="pt-4 border-t border-slate-700">
                <p className="text-sm text-slate-400 mb-2">
                  The timelock delay is the minimum waiting period <strong>after</strong> a proposal is queued, before it can be executed.
                </p>
                <div className="mt-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <p className="text-xs text-slate-300 font-semibold mb-2">Proposal Lifecycle:</p>
                  <ol className="text-xs text-slate-400 space-y-1 list-decimal list-inside">
                    <li>Proposal created → <span className="text-slate-300">Pending</span></li>
                    <li>Voting delay passes → <span className="text-slate-300">Active</span> (voting starts)</li>
                    <li>Voting period ({governance.votingPeriodDays ? `${governance.votingPeriodDays.toFixed(1)} days` : '7 days'}) → <span className="text-slate-300">people vote</span></li>
                    <li>Voting period ends → <span className="text-slate-300">Succeeded</span> (if FOR &gt; AGAINST)</li>
                    <li>Proposal queued → <span className="text-slate-300">Queued</span> (timelock delay starts)</li>
                    <li>Timelock delay ({governance.minDelayDays ? `${governance.minDelayDays.toFixed(1)} days` : '2 days'}) passes → <span className="text-slate-300">can be executed</span></li>
                    <li>Proposal executed → <span className="text-slate-300">Executed</span></li>
                  </ol>
                  <p className="text-xs text-slate-500 mt-2">
                    Note: The "Executable after" date is calculated as: <strong>Queued time + Timelock delay</strong> (does not include voting period).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timelock Operations - Queued and Executed Proposals */}
          <TimelockOperations
            proposals={proposals}
            isLoading={isLoadingProposals}
            governance={governance}
          />

          {governance.timelockAddress && (
            <div className="card p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-slate-400" />
                Timelock Contract
              </h2>
              <div>
                <p className="text-sm text-slate-400 mb-1">Address</p>
                <p className="text-sm font-mono text-slate-300 break-all">
                  {governance.timelockAddress}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Create Proposal Modal */}
      <CreateProposalModal
        isOpen={isCreateProposalOpen}
        onClose={() => setIsCreateProposalOpen(false)}
        onCreateProposal={async (targets, values, calldatas, description) => {
          await governance.propose(targets, values, calldatas, description);
          // Refresh proposal count or list after creation
        }}
      />
    </motion.div>
  );
};

export default Governance;

