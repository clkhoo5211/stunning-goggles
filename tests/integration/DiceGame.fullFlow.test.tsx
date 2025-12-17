// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DiceGame from '../../src/pages/DiceGame';

// --- Mocks for wagmi + appKit so the component thinks wallet is connected ---
vi.mock('wagmi', () => ({
  useAccount: () => ({ isConnected: true }),
}));

vi.mock('@lib/reown', () => ({
  appKit: {
    open: vi.fn(),
  },
}));

// --- Shared mutable mock state to simulate on-chain player state ---
const mockPlayRound = vi.fn();
const mockBuyRounds = vi.fn();
const mockClaimPendingReward = vi.fn();
const mockForfeitPendingReward = vi.fn();
const mockRefetchPlayerState = vi.fn();

let mockPlayerState: any;
let mockDecisionState: any;

vi.mock('@hooks/useGameContract', () => ({
  useGameContract: () => ({
    playerState: mockPlayerState,
    decisionState: mockDecisionState,
    playRound: mockPlayRound,
    buyRounds: mockBuyRounds,
    claimPendingReward: mockClaimPendingReward,
    forfeitPendingReward: mockForfeitPendingReward,
    refetchPlayerState: mockRefetchPlayerState,
    roundsPerPackage: 10,
    costPerRound: '100000000', // 0.1 USDT in smallest units for display
  }),
}));

describe('DiceGame full-flow wiring (frontend)', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    // Start with no active session, enough deposit, and no pending reward
    mockPlayerState = {
      hasActiveSession: false,
      roundsRemaining: 0n,
      pendingRewardActive: false,
      pendingPayout: '0',
      pendingEndCell: 0n,
      currentPosition: 11n,
      depositedBalance: '100000000000', // big enough to afford session
      lastDiceValues: [1, 2, 3, 4, 5],
      hasRecordedRoll: false,
      lastDirectionClockwise: true,
    };

    mockDecisionState = {
      pendingActive: false,
      deadline: '0',
      currentTimestamp: '0',
    };

    mockPlayRound.mockResolvedValue(undefined);
    mockBuyRounds.mockResolvedValue(undefined);
    mockClaimPendingReward.mockResolvedValue(undefined);
    mockForfeitPendingReward.mockResolvedValue(undefined);
    mockRefetchPlayerState.mockResolvedValue(undefined);
  });

  it('runs a pseudo full-flow: buy session, play rounds, handle pending reward buttons', async () => {
    render(<DiceGame />);

    // 1) Open "Buy Session" modal and confirm purchase -> triggers buyRounds
    const startSessionButton = await screen.findByRole('button', {
      name: /start 10-round session/i,
    });

    fireEvent.click(startSessionButton);

    const confirmPurchaseButton = await screen.findByRole('button', {
      name: /confirm session purchase/i,
    });

    fireEvent.click(confirmPurchaseButton);

    await waitFor(() => {
      expect(mockBuyRounds).toHaveBeenCalledTimes(1);
    });

    // Simulate that session is now active with 10 rounds after buyRounds
    mockPlayerState.hasActiveSession = true;
    mockPlayerState.roundsRemaining = 10n;

    // 2) Click Roll button a few times -> triggers playRound
    const rollButton = await screen.findByRole('button', {
      name: /roll dice/i,
    });

    // Play 3 synthetic rounds to prove wiring
    for (let i = 0; i < 3; i++) {
      fireEvent.click(rollButton);
    }

    await waitFor(() => {
      expect(mockPlayRound).toHaveBeenCalledTimes(3);
    });

    // Simulate a positive pending reward appearing from the "contract"
    mockPlayerState.pendingRewardActive = true;
    mockPlayerState.pendingPayout = '80000000';
    mockPlayerState.pendingEndCell = 23n;
    mockDecisionState.pendingActive = true;
    mockDecisionState.deadline = String(Number(mockDecisionState.currentTimestamp) + 60);

    // Re-render to show the pending reward panel
    render(<DiceGame />);

    // 3) Click "Continue (Forfeit Reward)" -> triggers forfeitPendingReward
    const forfeitButton = await screen.findByRole('button', {
      name: /continue \(forfeit reward\)/i,
    });
    fireEvent.click(forfeitButton);

    await waitFor(() => {
      expect(mockForfeitPendingReward).toHaveBeenCalledTimes(1);
    });

    // Simulate another pending reward and test Claim path
    mockPlayerState.pendingRewardActive = true;
    mockPlayerState.pendingPayout = '120000000';
    mockPlayerState.pendingEndCell = 19n;
    mockDecisionState.pendingActive = true;

    render(<DiceGame />);

    // 4) Click "Claim & End Session" -> triggers claimPendingReward
    const claimButton = await screen.findByRole('button', {
      name: /claim & end session/i,
    });
    fireEvent.click(claimButton);

    await waitFor(() => {
      expect(mockClaimPendingReward).toHaveBeenCalledTimes(1);
    });
  });
});

