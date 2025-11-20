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
import { gameControllerAbi } from '@lib/contracts/abi/gameController';

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

const { MockUSDT, GameController } = addresses.contracts as Record<string, `0x${string}`>;

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
  return publicClient.readContract({
    address: GameController,
    abi: gameControllerAbi,
    functionName: 'getPlayerState',
    args: [account.address],
  });
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
    await walletClient.writeContract({
      address: GameController,
      abi: gameControllerAbi,
      functionName: 'resetPlayerProgress',
      args: [account.address],
    });
  } catch {
    // ignore if caller lacks role on some deployments
  }
}

async function clearActiveSessionIfNeeded() {
  for (let attempt = 0; attempt < 12; attempt++) {
    const state = await getPlayerState();
    if (!state.hasActiveSession) {
      return;
    }
    await walletClient.writeContract({
      address: GameController,
      abi: gameControllerAbi,
      functionName: 'playRound',
      args: [true, BigInt(Math.floor(Math.random() * 1_000_000))],
    });
    const after = await getPlayerState();
    if (after.pendingRewardActive) {
      await walletClient.writeContract({
        address: GameController,
        abi: gameControllerAbi,
        functionName: 'forfeitPendingReward',
        args: [],
      });
    }
  }
}

async function resolvePendingReward(roundsRemaining: number) {
  const state = await getPlayerState();
  if (!state.pendingRewardActive) {
    return;
  }

  if (roundsRemaining > 1) {
    await walletClient.writeContract({
      address: GameController,
      abi: gameControllerAbi,
      functionName: 'forfeitPendingReward',
      args: [],
    });
  } else {
    await walletClient.writeContract({
      address: GameController,
      abi: gameControllerAbi,
      functionName: 'claimPendingReward',
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

      // Deposit into controller
      await walletClient.writeContract({
        address: GameController,
        abi: gameControllerAbi,
        functionName: 'deposit',
        args: [depositAmount],
      });

      const postDeposit = await getPlayerState();
      expect(postDeposit.depositedBalance).toBeGreaterThan(0n);

      // start 10-round session
      await walletClient.writeContract({
        address: GameController,
        abi: gameControllerAbi,
        functionName: 'buyRounds',
        args: [10n, 0],
      });

      // Play up to 10 rounds, forfeiting first rewards and claiming near the end.
      for (let round = 1; round <= 10; round++) {
        const preState = await getPlayerState();
        if (!preState.hasActiveSession || Number(preState.roundsRemaining) === 0) {
          break;
        }
        await walletClient.writeContract({
          address: GameController,
          abi: gameControllerAbi,
          functionName: 'playRound',
          args: [true, BigInt(Math.floor(Math.random() * 1_000_000))],
        });

        const state = await getPlayerState();
        if (state.pendingRewardActive) {
          await resolvePendingReward(Number(state.roundsRemaining));
          if (round === 10) {
            break;
          }
        }
      }

      const postSession = await getPlayerState();
      expect(postSession.pendingRewardActive).toBe(false);

      // Withdraw winnings only if above the configured minimum.
      const minWithdrawAmountValue = await publicClient.readContract({
        address: GameController,
        abi: gameControllerAbi,
        functionName: 'minWithdrawAmount',
      });
      const latestState = await getPlayerState();
      if (latestState.winningsBalance >= minWithdrawAmountValue) {
        await walletClient.writeContract({
          address: GameController,
          abi: gameControllerAbi,
          functionName: 'withdrawWinnings',
          args: [minWithdrawAmountValue],
        });
      }

      // Withdraw part of the deposit via withdrawNet (minimum configured in controller).
      const minWithdrawNetValue = await publicClient.readContract({
        address: GameController,
        abi: gameControllerAbi,
        functionName: 'minWithdrawNet',
      });
      const withdrawNetAmount = minWithdrawNetValue;
      await walletClient.writeContract({
        address: GameController,
        abi: gameControllerAbi,
        functionName: 'withdrawNet',
        args: [withdrawNetAmount],
      });

      const finalState = await getPlayerState();
      expect(finalState.depositedBalance).toBeLessThan(postDeposit.depositedBalance);
    },
  );
});

