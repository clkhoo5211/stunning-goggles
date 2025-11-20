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
  useBlockNumber({ watch: true }); // Keep watching for updates
  const { proposals, isLoading: isLoadingProposals } = useProposals();

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
      className="space-y-8 max-w-6xl mx-auto"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-white/10 shadow-2xl p-8 md:p-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-md shadow-inner">
              <Shield className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
              Governance
            </h1>
          </div>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Participate in the decentralized decision-making process. Vote on proposals,
            queue changes, and shape the future of the protocol.
          </p>
        </div>
      </div>

      {/* Main Navigation Tabs */}
      <div className="flex justify-center">
        <div className="bg-slate-900/50 backdrop-blur-md p-1.5 rounded-2xl border border-white/5 inline-flex relative">
          {(['governance', 'timelock'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 z-10 flex items-center gap-2 ${activeTab === tab ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg shadow-blue-500/25"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {tab === 'governance' ? <Vote className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Governance Tab */}
      {activeTab === 'governance' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          {/* Voting Power Card */}
          {address && (
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-white/10 backdrop-blur-md p-8 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 pointer-events-none" />

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                <div>
                  <h2 className="text-xl font-semibold flex items-center gap-2 text-white mb-2">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    Your Voting Power
                  </h2>
                  <p className="text-slate-400 text-sm">
                    Your influence in the governance system based on your token holdings.
                  </p>
                </div>

                <div className="flex gap-8">
                  <div className="text-right">
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Token Balance</p>
                    <p className="text-2xl font-bold text-white">
                      {governance.userTokenBalance !== undefined ? (
                        <AnimatedNumber
                          value={Number(governance.userTokenBalance)}
                          precision={2}
                          format={(val) => val.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        />
                      ) : '0'}
                      <span className="text-sm text-slate-500 ml-1">{governance.tokenSymbol || 'LGT'}</span>
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Voting Power</p>
                    <p className="text-2xl font-bold text-blue-400">
                      {governance.userVotingPower !== undefined ? (
                        <AnimatedNumber
                          value={Number(governance.userVotingPower)}
                          precision={2}
                          format={(val) => val.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        />
                      ) : '0'}
                      <span className="text-sm text-slate-500 ml-1">{governance.tokenSymbol || 'LGT'}</span>
                    </p>
                  </div>
                </div>
              </div>

              {governance.userVotingPower !== undefined && Number(governance.userVotingPower) === 0 && (
                <div className="mt-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-200">
                    You need voting power to create proposals and vote. Get LGT tokens and delegate them to yourself or another address to participate.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Proposals Section */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="bg-slate-900/50 backdrop-blur-md p-1 rounded-xl border border-white/5 flex">
                {(['active', 'history'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setProposalFilter(filter)}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${proposalFilter === filter
                        ? 'bg-white/10 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                      }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsCreateProposalOpen(true)}
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <Plus className="w-4 h-4" />
                Create Proposal
              </button>
            </div>

            <div className="min-h-[400px]">
              <ProposalsList
                proposals={proposals}
                isLoading={isLoadingProposals}
                filter={proposalFilter}
                governance={governance}
              />
            </div>
          </div>

          {/* Governance Settings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-slate-900/60 border border-white/5 backdrop-blur-md p-8 hover:bg-slate-900/80 transition-colors">
              <h2 className="text-lg font-semibold mb-6 flex items-center gap-2 text-white">
                <Settings className="w-5 h-5 text-slate-400" />
                Parameters
              </h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-slate-400 text-sm">Voting Delay</span>
                  <span className="text-white font-medium">{formatBlocks(governance.votingDelay)}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-slate-400 text-sm">Voting Period</span>
                  <span className="text-white font-medium">{formatBlocks(governance.votingPeriod)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Proposal Threshold</span>
                  <span className="text-white font-medium">
                    {governance.proposalThreshold ? (
                      <AnimatedNumber
                        value={Number(governance.proposalThreshold)}
                        precision={2}
                        format={(val) => val.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                      />
                    ) : 'N/A'}
                    <span className="text-slate-500 text-sm ml-1">{governance.tokenSymbol || 'LGT'}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900/60 border border-white/5 backdrop-blur-md p-8 hover:bg-slate-900/80 transition-colors">
              <h2 className="text-lg font-semibold mb-6 flex items-center gap-2 text-white">
                <Users className="w-5 h-5 text-slate-400" />
                Token Stats
              </h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-slate-400 text-sm">Quorum Required</span>
                  <div className="text-right">
                    <span className="text-white font-medium block">
                      {governance.quorumPercentage !== undefined
                        ? `${governance.quorumPercentage.toFixed(2)}%`
                        : 'N/A'}
                    </span>
                    {governance.currentQuorum && (
                      <span className="text-xs text-slate-500">
                        {governance.currentQuorum} {governance.tokenSymbol}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-slate-400 text-sm">Token Name</span>
                  <span className="text-white font-medium">
                    {governance.tokenName || 'N/A'} <span className="text-slate-500">({governance.tokenSymbol || 'N/A'})</span>
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Total Supply</span>
                  <span className="text-white font-medium">
                    {governance.tokenTotalSupply ? (
                      <AnimatedNumber
                        value={Number(governance.tokenTotalSupply)}
                        precision={0}
                        format={(val) => val.toLocaleString()}
                      />
                    ) : 'N/A'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contract Addresses */}
          <div className="rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-md p-6">
            <h2 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">Contract Addresses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'Governor', value: governance.governorAddress },
                { label: 'Timelock', value: governance.timelockAddress },
                { label: 'Token', value: governance.governanceTokenAddress },
              ].map((item) => item.value && (
                <div key={item.label} className="bg-black/20 rounded-xl p-3 border border-white/5">
                  <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                  <p className="text-xs font-mono text-slate-300 truncate" title={item.value}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Timelock Tab */}
      {activeTab === 'timelock' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          <div className="rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-white/10 backdrop-blur-md p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                <Clock className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Timelock Controller</h2>
                <p className="text-slate-400 text-sm">Enforces a mandatory delay before proposal execution</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-2">
                <p className="text-sm text-slate-400">Minimum Delay</p>
                <p className="text-4xl font-bold text-white">
                  {governance.minDelayDays !== undefined
                    ? `${governance.minDelayDays.toFixed(1)}`
                    : 'N/A'}
                  <span className="text-lg text-slate-500 font-normal ml-2">days</span>
                </p>
                {governance.minDelay && (
                  <p className="text-xs text-slate-500">
                    {governance.minDelay.toLocaleString()} seconds
                  </p>
                )}
              </div>

              <div className="lg:col-span-2 bg-slate-800/30 rounded-2xl p-6 border border-white/5">
                <p className="text-xs font-semibold text-slate-300 mb-4 uppercase tracking-wider">Proposal Lifecycle</p>
                <div className="flex items-center justify-between relative">
                  <div className="absolute left-0 top-1/2 w-full h-0.5 bg-slate-700 -z-10" />

                  {[
                    { label: 'Created', color: 'bg-slate-500' },
                    { label: 'Active', color: 'bg-blue-500' },
                    { label: 'Succeeded', color: 'bg-green-500' },
                    { label: 'Queued', color: 'bg-yellow-500' },
                    { label: 'Executed', color: 'bg-purple-500' },
                  ].map((step, i) => (
                    <div key={step.label} className="flex flex-col items-center gap-2 bg-slate-900 px-2">
                      <div className={`w-3 h-3 rounded-full ${step.color} ring-4 ring-slate-900`} />
                      <span className="text-[10px] text-slate-400 font-medium uppercase">{step.label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-6 text-center">
                  The timelock delay starts after a proposal is <strong>Queued</strong>. It can only be <strong>Executed</strong> after the delay passes.
                </p>
              </div>
            </div>
          </div>

          <TimelockOperations
            proposals={proposals}
            isLoading={isLoadingProposals}
            governance={governance}
          />
        </motion.div>
      )}

      <CreateProposalModal
        isOpen={isCreateProposalOpen}
        onClose={() => setIsCreateProposalOpen(false)}
        onCreateProposal={async (targets, values, calldatas, description) => {
          await governance.propose(targets, values, calldatas, description);
        }}
      />
    </motion.div>
  );
};

export default Governance;

