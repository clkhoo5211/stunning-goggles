import { decodeErrorResult } from 'viem';
import { gameControllerAbi } from '@lib/contracts/abi/gameController';
import { luckGovernorAbi } from '@lib/contracts/abi/luckGovernor';

const CUSTOM_MESSAGES: Record<string, string> = {
  DepositTokenDisabled: 'Deposits are temporarily disabled by admin.',
  TokenNotEnabledForGame: 'That token is not enabled for this game.',
  TokenTemporarilyUSDTOnly: 'Only USDT deposits are allowed right now.',
  IncorrectRoundPackage: 'Please buy the exact session size offered.',
  ActiveSessionInProgress: 'Finish your current session before buying another.',
  PendingRewardDecision: 'Resolve your pending reward before playing again.',
  NoRoundsRemaining: 'No rounds remaining—purchase a new session.',
  NoActiveSession: 'Start a session before rolling the dice.',
  DecisionWindowExpired: 'Decision window expired—refresh your session.',
  SwapExecutionDisabled: 'Liquidity swaps are disabled by governance.',
  InvalidSwapIndex: 'Invalid swap reference.',
  SwapAlreadyFulfilled: 'This swap request was already fulfilled.',
  // Governance errors
  GovernorUnexpectedProposalState: 'Proposal is not in the correct state for this action.',
  GovernorOnlyExecutor: 'Only the executor can perform this action.',
  GovernorOnlyProposer: 'Only the proposer can perform this action.',
  GovernorInvalidVoteType: 'Invalid vote type. Use 0 (Against), 1 (For), or 2 (Abstain).',
  GovernorVotingPeriodExpired: 'The voting period for this proposal has ended.',
  GovernorVotingPeriodNotStarted: 'The voting period for this proposal has not started yet.',
  GovernorAlreadyCastVote: 'You have already voted on this proposal.',
  GovernorInsufficientVotingPower: 'You do not have enough voting power to vote on this proposal.',
  GovernorUnableToCancel: 'This proposal cannot be cancelled. Only Pending or Active proposals can be cancelled. Queued proposals cannot be cancelled.',
  GovernorUnexpectedProposalState: 'Proposal is not in the correct state for this action.',
};

const extractHexData = (error: unknown): (`0x${string}`)[] => {
  if (typeof error !== 'object' || !error) return [];
  const candidates = new Set<`0x${string}`>();
  const pushIfHex = (value: unknown) => {
    if (typeof value === 'string' && value.startsWith('0x')) {
      candidates.add(value as `0x${string}`);
    }
  };

  const err = error as any;
  pushIfHex(err?.data);
  pushIfHex(err?.error?.data);
  pushIfHex(err?.error?.data?.data);
  pushIfHex(err?.data?.data);
  pushIfHex(err?.cause?.data);
  pushIfHex(err?.cause?.data?.data);
  pushIfHex(err?.cause?.cause?.data);

  return Array.from(candidates);
};

const decodeCustomError = (error: unknown): string | null => {
  for (const hex of extractHexData(error)) {
    // Try gameController ABI first
    try {
      const decoded = decodeErrorResult({
        abi: gameControllerAbi,
        data: hex,
      });
      if (decoded?.errorName) {
        return CUSTOM_MESSAGES[decoded.errorName] ?? decoded.errorName;
      }
    } catch {
      // Ignore decode failures and continue trying other candidates
    }
    
    // Try governance ABI
    try {
      const decoded = decodeErrorResult({
        abi: luckGovernorAbi,
        data: hex,
      });
      if (decoded?.errorName) {
        return CUSTOM_MESSAGES[decoded.errorName] ?? decoded.errorName;
      }
    } catch {
      // Ignore decode failures and continue trying other candidates
    }
  }
  return null;
};

export function prettyRpcError(error: unknown): string {
  const decoded = decodeCustomError(error);
  if (decoded) {
    return decoded;
  }

  if (typeof error === 'object' && error && 'shortMessage' in error && typeof (error as any).shortMessage === 'string') {
    return (error as any).shortMessage;
  }

  if (typeof error === 'object' && error && 'data' in error) {
    const data = (error as any).data;
    if (typeof data === 'string') {
      return data;
    }
    if (typeof data === 'object' && data && 'data' in data && typeof data.data === 'string') {
      return data.data;
    }
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  try {
    return JSON.stringify(error);
  } catch {
    return String(error);
  }
}

