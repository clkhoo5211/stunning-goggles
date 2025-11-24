import { useState } from 'react';
import { parseUnits, encodeFunctionData } from 'viem';
import { Modal } from '@components/ui/Modal';
import { Plus, Loader2 } from 'lucide-react';
import { erc20Abi } from '@lib/contracts/abi/erc20';
import { gameControllerAbi } from '@lib/contracts/abi/gameController';
import addresses from '@lib/contracts/addresses.json';

interface CreateProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateProposal: (
    targets: `0x${string}`[],
    values: bigint[],
    calldatas: `0x${string}`[],
    description: string
  ) => Promise<void>;
}

type ActionType = 
  | 'setCostPerRound'
  | 'setRoundsPerPackage'
  | 'setMinDepositAmount'
  | 'setMinWithdrawThresholds'
  | 'setWithdrawFeeBps'
  | 'setPenaltyRefundPerRound'
  | 'setClaimRefundPerRound'
  | 'setSafetyConfig'
  | 'setPenaltyConfig'
  | 'setSwapExecutionEnabled'
  | 'transfer'
  | 'approve'
  | 'custom';

export function CreateProposalModal({ isOpen, onClose, onCreateProposal }: CreateProposalModalProps) {
  const [actionType, setActionType] = useState<ActionType>('setCostPerRound');
  const [description, setDescription] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  // DiceGame is the default target for most governance actions (fallback to GameController for backward compatibility)
  const gameControllerAddress = (addresses.contracts.DiceGame || addresses.contracts.GameController) as `0x${string}`;

  // Configuration action fields
  const [costPerRound, setCostPerRound] = useState('');
  const [roundsPerPackage, setRoundsPerPackage] = useState('');
  const [minDepositAmount, setMinDepositAmount] = useState('');
  const [minWithdrawAmount, setMinWithdrawAmount] = useState('');
  const [minWithdrawNet, setMinWithdrawNet] = useState('');
  const [withdrawFeeBps, setWithdrawFeeBps] = useState('');
  const [penaltyRefundPerRound, setPenaltyRefundPerRound] = useState('');
  const [claimRefundPerRound, setClaimRefundPerRound] = useState('');
  const [swapExecutionEnabled, setSwapExecutionEnabled] = useState('true');

  // Safety config fields
  const [reserveFloor, setReserveFloor] = useState('');
  const [targetSafety, setTargetSafety] = useState('');
  const [minScaleBps, setMinScaleBps] = useState('');
  const [utilizationOffsetBps, setUtilizationOffsetBps] = useState('');
  const [utilizationSlopeBps, setUtilizationSlopeBps] = useState('');

  // Penalty config fields
  const [baseBps, setBaseBps] = useState('');
  const [maxBps, setMaxBps] = useState('');
  const [roundsSlopeBps, setRoundsSlopeBps] = useState('');
  const [pendingRewardSlopeBps, setPendingRewardSlopeBps] = useState('');
  const [forfeitSlopeBps, setForfeitSlopeBps] = useState('');

  // Transfer action fields
  const [targetAddress, setTargetAddress] = useState<string>(gameControllerAddress);
  const [transferTo, setTransferTo] = useState('');
  const [transferAmount, setTransferAmount] = useState('');

  // Approve action fields
  const [approveSpender, setApproveSpender] = useState('');
  const [approveAmount, setApproveAmount] = useState('');

  // Custom action fields
  const [customFunction, setCustomFunction] = useState('');

  const handleCreate = async () => {
    if (!description.trim()) {
      alert('Please provide a proposal description');
      return;
    }

    setIsCreating(true);
    try {
      let targets: `0x${string}`[] = [];
      let values: bigint[] = [];
      let calldatas: `0x${string}`[] = [];

      const target = gameControllerAddress;

      switch (actionType) {
        case 'setCostPerRound': {
          if (!costPerRound) {
            alert('Please enter the new cost per round');
            return;
          }
          targets = [target];
          values = [0n];
          calldatas = [
            encodeFunctionData({
              abi: gameControllerAbi,
              functionName: 'setCostPerRound',
              args: [parseUnits(costPerRound, 6)], // USDT has 6 decimals
            }),
          ];
          break;
        }
        case 'setRoundsPerPackage': {
          if (!roundsPerPackage) {
            alert('Please enter the new rounds per package');
            return;
          }
          targets = [target];
          values = [0n];
          calldatas = [
            encodeFunctionData({
              abi: gameControllerAbi,
              functionName: 'setRoundsPerPackage',
              args: [parseInt(roundsPerPackage)],
            }),
          ];
          break;
        }
        case 'setMinDepositAmount': {
          if (!minDepositAmount) {
            alert('Please enter the new minimum deposit amount');
            return;
          }
          targets = [target];
          values = [0n];
          calldatas = [
            encodeFunctionData({
              abi: gameControllerAbi,
              functionName: 'setMinDepositAmount',
              args: [parseUnits(minDepositAmount, 6)],
            }),
          ];
          break;
        }
        case 'setMinWithdrawThresholds': {
          if (!minWithdrawAmount || !minWithdrawNet) {
            alert('Please enter both minimum withdraw amounts');
            return;
          }
          targets = [target];
          values = [0n];
          calldatas = [
            encodeFunctionData({
              abi: gameControllerAbi,
              functionName: 'setMinWithdrawThresholds',
              args: [parseUnits(minWithdrawAmount, 6), parseUnits(minWithdrawNet, 6)],
            }),
          ];
          break;
        }
        case 'setWithdrawFeeBps': {
          if (!withdrawFeeBps) {
            alert('Please enter the new withdraw fee in basis points');
            return;
          }
          targets = [target];
          values = [0n];
          calldatas = [
            encodeFunctionData({
              abi: gameControllerAbi,
              functionName: 'setWithdrawFeeBps',
              args: [BigInt(withdrawFeeBps)],
            }),
          ];
          break;
        }
        case 'setPenaltyRefundPerRound': {
          if (!penaltyRefundPerRound) {
            alert('Please enter the new penalty refund per round');
            return;
          }
          targets = [target];
          values = [0n];
          calldatas = [
            encodeFunctionData({
              abi: gameControllerAbi,
              functionName: 'setPenaltyRefundPerRound',
              args: [parseUnits(penaltyRefundPerRound, 6)],
            }),
          ];
          break;
        }
        case 'setClaimRefundPerRound': {
          if (!claimRefundPerRound) {
            alert('Please enter the new claim refund per round');
            return;
          }
          targets = [target];
          values = [0n];
          calldatas = [
            encodeFunctionData({
              abi: gameControllerAbi,
              functionName: 'setClaimRefundPerRound',
              args: [parseUnits(claimRefundPerRound, 6)],
            }),
          ];
          break;
        }
        case 'setSafetyConfig': {
          if (!reserveFloor || !targetSafety || !minScaleBps || !utilizationOffsetBps || !utilizationSlopeBps) {
            alert('Please fill in all safety config parameters');
            return;
          }
          targets = [target];
          values = [0n];
          calldatas = [
            encodeFunctionData({
              abi: gameControllerAbi,
              functionName: 'setSafetyConfig',
              args: [
                parseUnits(reserveFloor, 6),
                parseUnits(targetSafety, 6),
                BigInt(minScaleBps),
                BigInt(utilizationOffsetBps),
                BigInt(utilizationSlopeBps),
              ],
            }),
          ];
          break;
        }
        case 'setPenaltyConfig': {
          if (!baseBps || !maxBps || !roundsSlopeBps || !pendingRewardSlopeBps || !forfeitSlopeBps) {
            alert('Please fill in all penalty config parameters');
            return;
          }
          targets = [target];
          values = [0n];
          calldatas = [
            encodeFunctionData({
              abi: gameControllerAbi,
              functionName: 'setPenaltyConfig',
              args: [
                parseInt(baseBps),
                parseInt(maxBps),
                parseInt(roundsSlopeBps),
                parseInt(pendingRewardSlopeBps),
                parseInt(forfeitSlopeBps),
              ],
            }),
          ];
          break;
        }
        case 'setSwapExecutionEnabled': {
          targets = [target];
          values = [0n];
          calldatas = [
            encodeFunctionData({
              abi: gameControllerAbi,
              functionName: 'setSwapExecutionEnabled',
              args: [swapExecutionEnabled === 'true'],
            }),
          ];
          break;
        }
        case 'transfer': {
          if (!targetAddress || !transferTo || !transferAmount) {
            alert('Please fill in transfer details');
            return;
          }
          targets = [targetAddress as `0x${string}`];
          values = [0n];
          calldatas = [
            encodeFunctionData({
              abi: erc20Abi,
              functionName: 'transfer',
              args: [transferTo as `0x${string}`, parseUnits(transferAmount, 18)],
            }),
          ];
          break;
        }
        case 'approve': {
          if (!targetAddress || !approveSpender || !approveAmount) {
            alert('Please fill in approval details');
            return;
          }
          targets = [targetAddress as `0x${string}`];
          values = [0n];
          calldatas = [
            encodeFunctionData({
              abi: erc20Abi,
              functionName: 'approve',
              args: [approveSpender as `0x${string}`, parseUnits(approveAmount, 18)],
            }),
          ];
          break;
        }
        case 'custom': {
          if (!targetAddress || !customFunction) {
            alert('Please provide target address and encoded function call');
            return;
          }
          targets = [targetAddress as `0x${string}`];
          values = [0n];
          calldatas = [customFunction as `0x${string}`];
          break;
        }
      }

      await onCreateProposal(targets, values, calldatas, description);
      onClose();
      // Reset form
      setDescription('');
      setCostPerRound('');
      setRoundsPerPackage('');
      setMinDepositAmount('');
      setMinWithdrawAmount('');
      setMinWithdrawNet('');
      setWithdrawFeeBps('');
      setPenaltyRefundPerRound('');
      setClaimRefundPerRound('');
      setReserveFloor('');
      setTargetSafety('');
      setMinScaleBps('');
      setUtilizationOffsetBps('');
      setUtilizationSlopeBps('');
      setBaseBps('');
      setMaxBps('');
      setRoundsSlopeBps('');
      setPendingRewardSlopeBps('');
      setForfeitSlopeBps('');
      setTransferTo('');
      setTransferAmount('');
      setApproveSpender('');
      setApproveAmount('');
      setCustomFunction('');
    } catch (error) {
      console.error('Failed to create proposal:', error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Create Governance Proposal"
      onClose={onClose}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Action Type *
          </label>
          <select
            value={actionType}
            onChange={(e) => setActionType(e.target.value as ActionType)}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
          >
            <optgroup label="Game Configuration">
              <option value="setCostPerRound">Change Cost Per Round</option>
              <option value="setRoundsPerPackage">Change Rounds Per Package</option>
              <option value="setMinDepositAmount">Change Minimum Deposit</option>
              <option value="setMinWithdrawThresholds">Change Withdraw Thresholds</option>
              <option value="setWithdrawFeeBps">Change Withdraw Fee</option>
              <option value="setPenaltyRefundPerRound">Change Penalty Refund</option>
              <option value="setClaimRefundPerRound">Change Claim Refund</option>
              <option value="setSafetyConfig">Update Safety Configuration</option>
              <option value="setPenaltyConfig">Update Penalty Configuration</option>
              <option value="setSwapExecutionEnabled">Enable/Disable Swap Execution</option>
            </optgroup>
            <optgroup label="Token Operations">
              <option value="transfer">Transfer Tokens</option>
              <option value="approve">Approve Spending</option>
            </optgroup>
            <optgroup label="Advanced">
              <option value="custom">Custom Function Call</option>
            </optgroup>
          </select>
          <p className="text-xs text-slate-500 mt-1">
            Target: {gameControllerAddress}
          </p>
        </div>

        {/* Game Configuration Fields */}
        {actionType === 'setCostPerRound' && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              New Cost Per Round (USDT) *
            </label>
            <input
              type="text"
              value={costPerRound}
              onChange={(e) => setCostPerRound(e.target.value)}
              placeholder="100"
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
            />
            <p className="text-xs text-slate-500 mt-1">Current cost per round in USDT (6 decimals)</p>
          </div>
        )}

        {actionType === 'setRoundsPerPackage' && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              New Rounds Per Package *
            </label>
            <input
              type="number"
              value={roundsPerPackage}
              onChange={(e) => setRoundsPerPackage(e.target.value)}
              placeholder="10"
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
            />
          </div>
        )}

        {actionType === 'setMinDepositAmount' && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              New Minimum Deposit (USDT) *
            </label>
            <input
              type="text"
              value={minDepositAmount}
              onChange={(e) => setMinDepositAmount(e.target.value)}
              placeholder="1000"
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
            />
          </div>
        )}

        {actionType === 'setMinWithdrawThresholds' && (
          <>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Minimum Withdraw Amount (USDT) *
              </label>
              <input
                type="text"
                value={minWithdrawAmount}
                onChange={(e) => setMinWithdrawAmount(e.target.value)}
                placeholder="1000"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Minimum Withdraw Net (USDT) *
              </label>
              <input
                type="text"
                value={minWithdrawNet}
                onChange={(e) => setMinWithdrawNet(e.target.value)}
                placeholder="950"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
              />
              <p className="text-xs text-slate-500 mt-1">Net amount after fees</p>
            </div>
          </>
        )}

        {actionType === 'setWithdrawFeeBps' && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              New Withdraw Fee (Basis Points) *
            </label>
            <input
              type="number"
              value={withdrawFeeBps}
              onChange={(e) => setWithdrawFeeBps(e.target.value)}
              placeholder="50"
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
            />
            <p className="text-xs text-slate-500 mt-1">1 basis point = 0.01%. Max: 1000 (10%)</p>
          </div>
        )}

        {actionType === 'setPenaltyRefundPerRound' && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              New Penalty Refund Per Round (USDT) *
            </label>
            <input
              type="text"
              value={penaltyRefundPerRound}
              onChange={(e) => setPenaltyRefundPerRound(e.target.value)}
              placeholder="10"
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
            />
          </div>
        )}

        {actionType === 'setClaimRefundPerRound' && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              New Claim Refund Per Round (USDT) *
            </label>
            <input
              type="text"
              value={claimRefundPerRound}
              onChange={(e) => setClaimRefundPerRound(e.target.value)}
              placeholder="5"
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
            />
          </div>
        )}

        {actionType === 'setSafetyConfig' && (
          <>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Reserve Floor (USDT) *
              </label>
              <input
                type="text"
                value={reserveFloor}
                onChange={(e) => setReserveFloor(e.target.value)}
                placeholder="100000"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Target Safety (USDT) *
              </label>
              <input
                type="text"
                value={targetSafety}
                onChange={(e) => setTargetSafety(e.target.value)}
                placeholder="150000"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Min Scale (Basis Points) *
              </label>
              <input
                type="number"
                value={minScaleBps}
                onChange={(e) => setMinScaleBps(e.target.value)}
                placeholder="5000"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Utilization Offset (Basis Points) *
              </label>
              <input
                type="number"
                value={utilizationOffsetBps}
                onChange={(e) => setUtilizationOffsetBps(e.target.value)}
                placeholder="2000"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Utilization Slope (Basis Points) *
              </label>
              <input
                type="number"
                value={utilizationSlopeBps}
                onChange={(e) => setUtilizationSlopeBps(e.target.value)}
                placeholder="1000"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
              />
            </div>
          </>
        )}

        {actionType === 'setPenaltyConfig' && (
          <>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Base Penalty (Basis Points) *
              </label>
              <input
                type="number"
                value={baseBps}
                onChange={(e) => setBaseBps(e.target.value)}
                placeholder="100"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Max Penalty (Basis Points) *
              </label>
              <input
                type="number"
                value={maxBps}
                onChange={(e) => setMaxBps(e.target.value)}
                placeholder="500"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Rounds Slope (Basis Points) *
              </label>
              <input
                type="number"
                value={roundsSlopeBps}
                onChange={(e) => setRoundsSlopeBps(e.target.value)}
                placeholder="10"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Pending Reward Slope (Basis Points) *
              </label>
              <input
                type="number"
                value={pendingRewardSlopeBps}
                onChange={(e) => setPendingRewardSlopeBps(e.target.value)}
                placeholder="50"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Forfeit Slope (Basis Points) *
              </label>
              <input
                type="number"
                value={forfeitSlopeBps}
                onChange={(e) => setForfeitSlopeBps(e.target.value)}
                placeholder="200"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
              />
            </div>
          </>
        )}

        {actionType === 'setSwapExecutionEnabled' && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Enable Swap Execution *
            </label>
            <select
              value={swapExecutionEnabled}
              onChange={(e) => setSwapExecutionEnabled(e.target.value)}
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
            >
              <option value="true">Enabled</option>
              <option value="false">Disabled</option>
            </select>
          </div>
        )}

        {/* Token Operations */}
        {actionType === 'transfer' && (
          <>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Token Contract Address *
              </label>
              <input
                type="text"
                value={targetAddress}
                onChange={(e) => setTargetAddress(e.target.value)}
                placeholder="0x..."
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white font-mono text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Recipient Address *
              </label>
              <input
                type="text"
                value={transferTo}
                onChange={(e) => setTransferTo(e.target.value)}
                placeholder="0x..."
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white font-mono text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Amount *
              </label>
              <input
                type="text"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
                placeholder="0.0"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
              />
            </div>
          </>
        )}

        {actionType === 'approve' && (
          <>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Token Contract Address *
              </label>
              <input
                type="text"
                value={targetAddress}
                onChange={(e) => setTargetAddress(e.target.value)}
                placeholder="0x..."
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white font-mono text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Spender Address *
              </label>
              <input
                type="text"
                value={approveSpender}
                onChange={(e) => setApproveSpender(e.target.value)}
                placeholder="0x..."
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white font-mono text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Amount *
              </label>
              <input
                type="text"
                value={approveAmount}
                onChange={(e) => setApproveAmount(e.target.value)}
                placeholder="0.0"
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
              />
            </div>
          </>
        )}

        {actionType === 'custom' && (
          <>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Target Contract Address *
              </label>
              <input
                type="text"
                value={targetAddress}
                onChange={(e) => setTargetAddress(e.target.value)}
                placeholder="0x..."
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white font-mono text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Encoded Function Call (hex) *
              </label>
              <input
                type="text"
                value={customFunction}
                onChange={(e) => setCustomFunction(e.target.value)}
                placeholder="0x..."
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white font-mono text-sm"
              />
              <p className="text-xs text-slate-500 mt-1">Provide the full encoded function call including function selector and parameters</p>
            </div>
          </>
        )}

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Proposal Description *
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe what this proposal does and why it should be approved..."
            rows={4}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white resize-none"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            onClick={onClose}
            disabled={isCreating}
            className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            disabled={isCreating}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold disabled:opacity-50"
          >
            {isCreating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                Create Proposal
              </>
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
}

