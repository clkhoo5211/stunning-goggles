import { useMemo, useRef } from 'react';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { parseUnits, formatUnits } from 'viem';
import addresses from '@lib/contracts/addresses.json';
import { gameControllerAbi } from '@lib/contracts/abi/gameController';
import { gameBoardAbi } from '@lib/contracts/abi/gameBoard';
import { erc20Abi } from '@lib/contracts/abi/erc20';
import { prizePoolAbi } from '@lib/contracts/abi/prizePool';

const USDT_DECIMALS = 6;
const ONE_PPM = 1_000_000;

type SafetyConfigView = {
  reserveFloor: number;
  targetSafety: number;
  minScaleBps: number;
  utilizationOffsetBps: number;
  utilizationSlopeBps: number;
};

const applyBoost = (amount: number, boostPpm: number) => {
  if (boostPpm <= 0) return amount;
  return amount + (amount * boostPpm) / ONE_PPM;
};

const computeScaleBps = (amount: number, safetyBalance: number, config: SafetyConfigView) => {
  if (safetyBalance <= 0) {
    return config.minScaleBps;
  }
  const utilizationBps = (amount * 10000) / safetyBalance;
  if (utilizationBps <= config.utilizationOffsetBps || config.utilizationSlopeBps === 0) {
    return 10000;
  }
  const excess = utilizationBps - config.utilizationOffsetBps;
  const denom = 10000 + (config.utilizationSlopeBps * excess) / 10000;
  if (denom === 0) return config.minScaleBps;
  let scale = (10000 * 10000) / denom;
  if (scale < config.minScaleBps) scale = config.minScaleBps;
  if (scale > 10000) scale = 10000;
  return scale;
};

const computeRecoveryBps = (poolBalance: number, config: SafetyConfigView) => {
  if (poolBalance <= config.reserveFloor) {
    return config.minScaleBps;
  }
  if (poolBalance >= config.targetSafety) {
    return 10000;
  }
  const numerator = (poolBalance - config.reserveFloor) * 10000;
  const denominator = config.targetSafety - config.reserveFloor;
  if (denominator <= 0) {
    return 10000;
  }
  let recovery = numerator / denominator;
  if (recovery < config.minScaleBps) recovery = config.minScaleBps;
  if (recovery > 10000) recovery = 10000;
  return recovery;
};

const applySafetyScaling = (
  amount: number,
  poolBalance: number,
  safetyBalance: number,
  config: SafetyConfigView
) => {
  const scaleBps = computeScaleBps(amount, safetyBalance, config);
  const recoveryBps = computeRecoveryBps(poolBalance, config);
  return (amount * scaleBps * recoveryBps) / (10000 * 10000);
};

export function useGameContract() {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();

  // In-flight guards to prevent accidental double-submits from rapid clicks
  const claimInFlightRef = useRef(false);
  const forfeitInFlightRef = useRef(false);
  const playRoundInFlightRef = useRef(false);

  const gameControllerAddress = addresses.contracts.GameController as `0x${string}`;
  const fallbackDepositTokenAddress = addresses.contracts.MockUSDT as `0x${string}`;
  const prizePoolAddress = addresses.contracts.PrizePool as `0x${string}`;

  // Read player state
  const { data: playerState, refetch: refetchPlayerState } = useReadContract({
    address: gameControllerAddress,
    abi: gameControllerAbi,
    functionName: 'getPlayerState',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
      refetchInterval: 5000, // Refetch every 5 seconds
    },
  });

  const { data: chainDecisionState } = useReadContract({
    address: gameControllerAddress,
    abi: gameControllerAbi,
    functionName: 'getDecisionState',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
      refetchInterval: 1000,
      refetchOnWindowFocus: true,
    },
  });

  // Read all cell payouts
  const { data: rawCellPayouts } = useReadContract({
    address: addresses.contracts.GameBoard as `0x${string}`,
    abi: gameBoardAbi,
    functionName: 'getAllPayouts',
  });

  const { data: rawPrizePoolBalance } = useReadContract({
    address: prizePoolAddress,
    abi: prizePoolAbi,
    functionName: 'getPoolBalance',
    query: {
      refetchInterval: 5000,
      refetchOnWindowFocus: true,
    },
  });

  const { data: rawPrizePoolMultiplier } = useReadContract({
    address: prizePoolAddress,
    abi: prizePoolAbi,
    functionName: 'getCurrentMultiplier',
    query: {
      refetchInterval: 5000,
      refetchOnWindowFocus: true,
    },
  });

  const { data: rawPayoutBoostPpm } = useReadContract({
    address: prizePoolAddress,
    abi: prizePoolAbi,
    functionName: 'getPayoutBoostPpm',
    query: {
      refetchInterval: 5000,
      refetchOnWindowFocus: true,
    },
  });

  const { data: depositFeeBpsRaw } = useReadContract({
    address: gameControllerAddress,
    abi: gameControllerAbi,
    functionName: 'DEPOSIT_FEE_BPS' as const,
  });

  const { data: withdrawFeeBpsRaw } = useReadContract({
    address: gameControllerAddress,
    abi: gameControllerAbi,
    functionName: 'withdrawFeeBps' as const,
  });

  const { data: rawCostPerRound } = useReadContract({
    address: gameControllerAddress,
    abi: gameControllerAbi,
    functionName: 'costPerRound' as const,
  });

  const { data: rawRoundsPerPackage } = useReadContract({
    address: gameControllerAddress,
    abi: gameControllerAbi,
    functionName: 'roundsPerPackage' as const,
  });

  const { data: rawMinDepositAmount } = useReadContract({
    address: gameControllerAddress,
    abi: gameControllerAbi,
    functionName: 'minDepositAmount' as const,
  });

  const { data: rawMinWithdrawNet } = useReadContract({
    address: gameControllerAddress,
    abi: gameControllerAbi,
    functionName: 'minWithdrawNet' as const,
  });

  const { data: rawBoardSequence } = useReadContract({
    address: addresses.contracts.GameBoard as `0x${string}`,
    abi: gameBoardAbi,
    functionName: 'getBoardSequence' as const,
  });

  const { data: rawPlatformStats } = useReadContract({
    address: gameControllerAddress,
    abi: gameControllerAbi,
    functionName: 'getPlatformStats',
    query: {
      refetchInterval: 10000,
      refetchOnWindowFocus: true,
    },
  });

  const { data: rawPoolSafety } = useReadContract({
    address: gameControllerAddress,
    abi: gameControllerAbi,
    functionName: 'getPoolSafety',
    query: {
      refetchInterval: 5000,
      refetchOnWindowFocus: true,
    },
  });

  const { data: rawSafetyConfig } = useReadContract({
    address: gameControllerAddress,
    abi: gameControllerAbi,
    functionName: 'safetyConfig',
  });

  const { data: defaultDepositTokenData } = useReadContract({
    address: gameControllerAddress,
    abi: gameControllerAbi,
    functionName: 'getDefaultDepositToken',
  });

  const defaultDepositToken = defaultDepositTokenData as
    | readonly [`0x${string}`, string, boolean]
    | undefined;

  const depositTokenAddress =
    (defaultDepositToken?.[0] as `0x${string}` | undefined) ?? fallbackDepositTokenAddress;
  const depositTokenSymbol = defaultDepositToken?.[1] ?? 'USDT';
  const depositTokenEnabled =
    defaultDepositToken?.[2] === undefined ? true : Boolean(defaultDepositToken[2]);

  const payoutBoostPpm = rawPayoutBoostPpm ? Number(rawPayoutBoostPpm) : 0;

  const poolSafety = useMemo(() => {
    if (!rawPoolSafety) return undefined;
    const [poolBalanceRaw, safetyBalanceRaw] = rawPoolSafety as readonly [bigint, bigint];
    return {
      poolBalance: Number(formatUnits(poolBalanceRaw, USDT_DECIMALS)),
      safetyBalance: Number(formatUnits(safetyBalanceRaw, USDT_DECIMALS)),
    };
  }, [rawPoolSafety]);

  const safetyConfig = useMemo(() => {
    if (!rawSafetyConfig) return undefined;
    type SafetyConfigTuple = readonly [bigint, bigint, bigint, bigint, bigint];
    type SafetyConfigStruct = {
      reserveFloor: bigint;
      targetSafety: bigint;
      minScaleBps: bigint;
      utilizationOffsetBps: bigint;
      utilizationSlopeBps: bigint;
    };

    const raw = rawSafetyConfig as SafetyConfigTuple | SafetyConfigStruct;
    const tuple: SafetyConfigTuple = Array.isArray(raw)
      ? (raw as SafetyConfigTuple)
      : [
        (raw as SafetyConfigStruct).reserveFloor,
        (raw as SafetyConfigStruct).targetSafety,
        (raw as SafetyConfigStruct).minScaleBps,
        (raw as SafetyConfigStruct).utilizationOffsetBps,
        (raw as SafetyConfigStruct).utilizationSlopeBps,
      ];

    return {
      reserveFloor: Number(formatUnits(tuple[0], USDT_DECIMALS)),
      targetSafety: Number(formatUnits(tuple[1], USDT_DECIMALS)),
      minScaleBps: Number(tuple[2]),
      utilizationOffsetBps: Number(tuple[3]),
      utilizationSlopeBps: Number(tuple[4]),
    };
  }, [rawSafetyConfig]);

  // Read deposit token allowance
  const { data: allowance, refetch: refetchAllowance } = useReadContract({
    address: depositTokenAddress,
    abi: erc20Abi,
    functionName: 'allowance',
    args: address ? [address, gameControllerAddress] : undefined,
    query: {
      enabled: !!address && depositTokenEnabled,
    },
  });

  const { data: depositTokenBalanceRaw } = useReadContract({
    address: depositTokenAddress,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  // Write functions
  const approveDepositToken = async (amount: string) => {
    const amountWei = parseUnits(amount, 6);
    return writeContractAsync({
      address: depositTokenAddress,
      abi: erc20Abi,
      functionName: 'approve',
      args: [gameControllerAddress, amountWei],
    });
  };

  const deposit = async (amount: string) => {
    const amountWei = parseUnits(amount, 6); // USDT has 6 decimals
    return writeContractAsync({
      address: gameControllerAddress,
      abi: gameControllerAbi,
      functionName: 'deposit',
      args: [amountWei],
    });
  };

  const buyRounds = async (numRounds: number, paymentMethod: 0 | 1 = 0) => {
    return writeContractAsync({
      address: gameControllerAddress,
      abi: gameControllerAbi,
      functionName: 'buyRounds',
      args: [BigInt(numRounds), paymentMethod],
    });
  };

  const playRound = async (isClockwise: boolean) => {
    if (playRoundInFlightRef.current) {
      console.warn('[playRound] Call already in flight, ignoring');
      return;
    }

    playRoundInFlightRef.current = true;
    try {
      // Refetch player state to ensure it's fresh and prevent stale state issues
      await refetchPlayerState();

      const seed = BigInt(Math.floor(Math.random() * 1000000));
      return await writeContractAsync({
        address: gameControllerAddress,
        abi: gameControllerAbi,
        functionName: 'playRound',
        args: [isClockwise, seed],
        gas: 1500000n, // Manual override to prevent gas estimation failures due to reroll loop
      });
    } catch (error) {
      console.error('[playRound] Transaction failed:', error);
      throw error;
    } finally {
      playRoundInFlightRef.current = false;
    }
  };

  const claimPendingReward = async () => {
    if (claimInFlightRef.current) {
      // Ignore extra calls while a claim tx is already pending
      return;
    }
    claimInFlightRef.current = true;
    try {
      return await writeContractAsync({
        address: gameControllerAddress,
        abi: gameControllerAbi,
        functionName: 'claimPendingReward',
        args: [],
      });
    } finally {
      claimInFlightRef.current = false;
    }
  };

  const forfeitPendingReward = async () => {
    if (forfeitInFlightRef.current) {
      // Ignore extra calls while a forfeit tx is already pending
      return;
    }
    forfeitInFlightRef.current = true;
    try {
      return await writeContractAsync({
        address: gameControllerAddress,
        abi: gameControllerAbi,
        functionName: 'forfeitPendingReward',
        args: [],
      });
    } finally {
      forfeitInFlightRef.current = false;
    }
  };

  const withdrawWinnings = async (amount?: string) => {
    const amountWei = amount ? parseUnits(amount, 6) : BigInt(0);
    return writeContractAsync({
      address: gameControllerAddress,
      abi: gameControllerAbi,
      functionName: 'withdrawWinnings',
      args: [amountWei],
    });
  };

  const withdrawNet = async (netAmount: string) => {
    const amountWei = parseUnits(netAmount, 6);
    return writeContractAsync({
      address: gameControllerAddress,
      abi: gameControllerAbi,
      functionName: 'withdrawNet',
      args: [amountWei],
    });
  };

  // Format player state for easier use
  const formattedPlayerState = playerState
    ? (() => {
      const lastDiceSource = Array.isArray(playerState.lastDiceValues)
        ? playerState.lastDiceValues
        : Array.from(playerState.lastDiceValues ?? []);

      const lastDiceValues = lastDiceSource.map((value: number | bigint) => Number(value));
      const lastDiceSum = lastDiceValues.reduce((total, face) => total + face, 0);
      const hasRecordedRoll = lastDiceValues.some((face) => face > 0);
      const lastDiceIsBaozi =
        hasRecordedRoll && lastDiceValues.every((face) => face === lastDiceValues[0]);

      return {
        depositedBalance: formatUnits(playerState.depositedBalance, 6),
        winningsBalance: formatUnits(playerState.winningsBalance, 6),
        totalDeposited: formatUnits(playerState.totalDeposited, 6),
        totalWithdrawn: formatUnits(playerState.totalWithdrawn, 6),
        lifetimeWinnings: formatUnits(playerState.lifetimeWinnings, 6),
        pendingPayout: formatUnits(playerState.pendingPayout, 6),
        pendingGameId: Number(playerState.pendingGameId),
        roundsRemaining: Number(playerState.roundsRemaining),
        totalRoundsPlayed: Number(playerState.totalRoundsPlayed),
        lastDepositTime: Number(playerState.lastDepositTime),
        lastPlayTimestamp: Number(playerState.lastPlayTimestamp),
        currentPosition: Number(playerState.currentPosition),
        hasActiveSession: playerState.hasActiveSession,
        totalWins: Number(playerState.totalWins),
        totalLosses: Number(playerState.totalLosses),
        decisionDeadline: Number(playerState.decisionDeadline),
        pendingStartCell: Number(playerState.pendingStartCell),
        pendingEndCell: Number(playerState.pendingEndCell),
        pendingRewardActive: playerState.pendingRewardActive,
        lastDirectionClockwise: playerState.lastDirectionClockwise,
        lastDiceValues,
        lastDiceSum,
        lastDiceIsBaozi,
        hasRecordedRoll,
      };
    })()
    : null;

  const baseCellPayouts = rawCellPayouts
    ? Array.from(rawCellPayouts as readonly (number | bigint)[]).map((value) =>
      typeof value === 'bigint' ? Number(value) : value
    )
    : undefined;

  const scaledCellPayouts = useMemo(() => {
    if (!baseCellPayouts || !poolSafety || !safetyConfig) {
      return undefined;
    }
    return baseCellPayouts.map((value) => {
      if (value === 0) return value;
      const isNegative = value < 0;
      const magnitude = Math.abs(value);
      const boosted = applyBoost(magnitude, payoutBoostPpm);
      const scaled = applySafetyScaling(
        boosted,
        poolSafety.poolBalance,
        poolSafety.safetyBalance,
        safetyConfig
      );
      const finalValue = Number.isFinite(scaled) ? Number(scaled.toFixed(2)) : magnitude;
      return isNegative ? -finalValue : finalValue;
    });
  }, [baseCellPayouts, payoutBoostPpm, poolSafety, safetyConfig]);

  const decisionState = chainDecisionState
    ? {
      pendingActive: chainDecisionState[0] as boolean,
      deadline: Number(chainDecisionState[1]),
      currentTimestamp: Number(chainDecisionState[2]),
    }
    : null;

  return {
    playerState: formattedPlayerState,
    decisionState,
    cellPayouts: baseCellPayouts,
    scaledCellPayouts,
    prizePoolBalance: rawPrizePoolBalance ? formatUnits(rawPrizePoolBalance, 6) : undefined,
    prizePoolMultiplier: rawPrizePoolMultiplier ? Number(rawPrizePoolMultiplier) / 1000 : undefined,
    payoutBoostPpm,
    platformStats: rawPlatformStats
      ? {
        totalPlayers: Number(rawPlatformStats[0]),
        totalGames: Number(rawPlatformStats[1]),
        totalWinnings: formatUnits(rawPlatformStats[2], 6),
        poolBalance: formatUnits(rawPlatformStats[3], 6),
      }
      : undefined,
    poolSafety,
    safetyConfig,
    depositFeeBps: depositFeeBpsRaw ? Number(depositFeeBpsRaw) : undefined,
    withdrawFeeBps: withdrawFeeBpsRaw ? Number(withdrawFeeBpsRaw) : undefined,
    costPerRound: rawCostPerRound ? formatUnits(rawCostPerRound, 6) : undefined,
    roundsPerPackage: rawRoundsPerPackage ? Number(rawRoundsPerPackage) : undefined,
    minDepositAmount: rawMinDepositAmount ? formatUnits(rawMinDepositAmount, 6) : undefined,
    minWithdrawNet: rawMinWithdrawNet ? formatUnits(rawMinWithdrawNet, 6) : undefined,
    boardSequence: rawBoardSequence
      ? Array.from(rawBoardSequence as unknown as readonly (number | bigint)[], (value) =>
        typeof value === 'bigint' ? Number(value) : Number(value)
      )
      : undefined,
    depositTokenSymbol,
    depositTokenAddress,
    depositTokenEnabled,
    deposit,
    approveDepositToken,
    depositTokenAllowance: allowance ? formatUnits(allowance, 6) : '0',
    depositTokenBalance: depositTokenBalanceRaw ? formatUnits(depositTokenBalanceRaw, 6) : '0',
    buyRounds,
    playRound,
    claimPendingReward,
    forfeitPendingReward,
    withdrawWinnings,
    withdrawNet,
    refetchPlayerState,
    refetchAllowance,
  };
}

