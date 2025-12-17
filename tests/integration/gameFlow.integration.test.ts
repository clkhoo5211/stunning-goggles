import { beforeAll, describe, expect, it } from 'vitest';
import {
  createPublicClient,
  createWalletClient,
  http,
  parseUnits,
} from 'viem';
import { hardhat } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';

import addresses from '@lib/contracts/addresses.json';
import { erc20Abi } from '@lib/contracts/abi/erc20';
import { diceGameAbi } from '@lib/contracts/abi/diceGame';
import { playerStorageAbi } from '@lib/contracts/abi/playerStorage';
import { encodeAbiParameters } from 'viem';

const TEST_PRIVATE_KEY =
  '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80' as const;
const RPC_URL = process.env.VITE_LOCAL_RPC ?? 'http://127.0.0.1:8545';

const account = privateKeyToAccount(TEST_PRIVATE_KEY);

const walletClient = createWalletClient({
  account,
  chain: hardhat,
  transport: http(RPC_URL),
});

const publicClient = createPublicClient({
  chain: hardhat,
  transport: http(RPC_URL),
});

const { MockUSDT, DiceGame, PlayerStorage, GameController: OldGameController } = addresses.contracts as Record<string, `0x${string}`>;
const GameController = (DiceGame || OldGameController) as `0x${string}`;
const PlayerStorageAddress = PlayerStorage || OldGameController; // Fallback to GameController if PlayerStorage not available

const mockUsdtAbi = [
  ...erc20Abi,
  {
    name: 'mint',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'to', type: 'address', internalType: 'address' },
      { name: 'amount', type: 'uint256', internalType: 'uint256' },
    ],
    outputs: [],
  },
] as const;

async function getPlayerState() {
  // Try DiceGame (new architecture)
  if (GameController && GameController !== '0x0000000000000000000000000000000000000000') {
    try {
      // DiceGame doesn't have getPlayerState, try PlayerStorage
      if (PlayerStorageAddress && PlayerStorageAddress !== '0x0000000000000000000000000000000000000000') {
        const result = await publicClient.readContract({
          address: PlayerStorageAddress,
          abi: playerStorageAbi,
          functionName: 'getPlayer',
          args: [account.address],
        });
        const [state, found] = result as [any, boolean];
        return found ? state : null;
      }
    } catch (error) {
      console.warn('Failed to get player state:', error);
      return null;
    }
  }

  return null;
}

async function ensureLiquidity(amount: bigint) {
  const balance = await publicClient.readContract({
    address: MockUSDT,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [account.address],
  });

  if (balance < amount) {
    await walletClient.writeContract({
      address: MockUSDT,
      abi: mockUsdtAbi,
      functionName: 'mint',
      args: [account.address, amount],
    });
  }

  await walletClient.writeContract({
    address: MockUSDT,
    abi: erc20Abi,
    functionName: 'approve',
    args: [GameController, amount],
  });
}

async function resetSessionProgress() {
  try {
    // Note: resetPlayerProgress may not exist in DiceGame
    // This is an admin function that may need to be called differently
    // For now, we'll skip it if it fails
    await walletClient.writeContract({
      address: GameController,
      abi: diceGameAbi,
      functionName: 'resetPlayerProgress' as any,
      args: [account.address],
    });
  } catch {
    // ignore if caller lacks role on some deployments or function doesn't exist
  }
}

async function clearActiveSessionIfNeeded() {
  for (let attempt = 0; attempt < 12; attempt++) {
    const state = await getPlayerState();
    if (!state || !state.hasActiveSession) {
      return;
    }
    // Encode gameParams for DiceGame.play()
    const gameParams = encodeAbiParameters(
      [{ type: 'bool', name: 'isClockwise' }],
      [true]
    );
    await walletClient.writeContract({
      address: GameController,
      abi: diceGameAbi,
      functionName: 'play',
      args: [gameParams, BigInt(Math.floor(Math.random() * 1_000_000))],
    });
    const after = await getPlayerState();
    if (after && after.pendingRewardActive) {
      await walletClient.writeContract({
        address: GameController,
        abi: diceGameAbi,
        functionName: 'forfeitReward',
        args: [],
      });
    }
  }
}

async function resolvePendingReward(roundsRemaining: number) {
  const state = await getPlayerState();
  if (!state || !state.pendingRewardActive) {
    return;
  }

  if (roundsRemaining > 1) {
    await walletClient.writeContract({
      address: GameController,
      abi: diceGameAbi,
      functionName: 'forfeitReward',
      args: [],
    });
  } else {
    await walletClient.writeContract({
      address: GameController,
      abi: diceGameAbi,
      functionName: 'claimReward',
      args: [],
    });
  }
}

describe('LuckChain frontend contract flow (integration)', () => {
  beforeAll(async () => {
    // simple liveness check
    await publicClient.getBlockNumber();
  });

  it(
    'runs deposit -> session -> forfeit/claim -> withdraw flow',
    { timeout: 120_000 },
    async () => {
      const depositAmount = parseUnits('20000', 6);
      await resetSessionProgress();
      await clearActiveSessionIfNeeded();
      await ensureLiquidity(depositAmount);

      // Deposit into DiceGame
      await walletClient.writeContract({
        address: GameController,
        abi: diceGameAbi,
        functionName: 'deposit',
        args: [depositAmount],
      });

      const postDeposit = await getPlayerState();
      expect(postDeposit).toBeTruthy();
      expect(postDeposit!.depositedBalance).toBeGreaterThan(0n);

      // start 10-round session
      await walletClient.writeContract({
        address: GameController,
        abi: diceGameAbi,
        functionName: 'buyRounds',
        args: [10n],
      });

      // Play up to 10 rounds, forfeiting first rewards and claiming near the end.
      for (let round = 1; round <= 10; round++) {
        const preState = await getPlayerState();
        if (!preState || !preState.hasActiveSession || Number(preState.roundsRemaining) === 0) {
          break;
        }
        // Encode gameParams for DiceGame.play() - contract expects (bool, uint256)
        const gameParams = encodeAbiParameters(
          [
            { type: 'bool', name: 'isClockwise' },
            { type: 'uint256', name: 'unused' }
          ],
          [true, 0n]
        );
        await walletClient.writeContract({
          address: GameController,
          abi: diceGameAbi,
          functionName: 'play',
          args: [gameParams, BigInt(Math.floor(Math.random() * 1_000_000))],
        });

        const state = await getPlayerState();
        if (state && state.pendingRewardActive) {
          await resolvePendingReward(Number(state.roundsRemaining));
          if (round === 10) {
            break;
          }
        }
      }

      const postSession = await getPlayerState();
      expect(postSession).toBeTruthy();
      expect(postSession!.pendingRewardActive).toBe(false);

      // Withdraw from both deposits and winnings via withdraw()
      // withdraw() uses winnings first, then deposits, with 0.5% fee
      const latestState = await getPlayerState();
      const totalBalance = (latestState?.depositedBalance || 0n) + (latestState?.winningsBalance || 0n);
      if (latestState && totalBalance > parseUnits('1', 6)) {
        // Use a small amount for withdrawal test (net amount after 0.5% fee)
        const withdrawNetAmount = parseUnits('1', 6);
        await walletClient.writeContract({
          address: GameController,
          abi: diceGameAbi,
          functionName: 'withdraw',
          args: [withdrawNetAmount],
        });
      }

      const finalState = await getPlayerState();
      expect(finalState).toBeTruthy();
      expect(finalState!.depositedBalance).toBeLessThan(postDeposit!.depositedBalance);
    },
  );
});

