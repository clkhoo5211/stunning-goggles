import { useMemo, useRef } from 'react';
import { useAccount, useReadContract, useWriteContract, usePublicClient } from 'wagmi';
import { parseUnits, formatUnits, encodeAbiParameters } from 'viem';
import addresses from '@lib/contracts/addresses.json';
import { diceGameAbi } from '@lib/contracts/abi/diceGame';
import { playerStorageAbi } from '@lib/contracts/abi/playerStorage';
import { gameBoardAbi } from '@lib/contracts/abi/gameBoard';
import { erc20Abi } from '@lib/contracts/abi/erc20';
import { prizePoolAbi } from '@lib/contracts/abi/prizePool';
import { gameconfigmoduleAbi } from '@lib/contracts/abi/gameconfigmodule';

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

/**
 * Helper function to estimate gas with a safety buffer
 * Adds 30% buffer to the estimate to account for network fluctuations
 */
async function estimateGasWithBuffer(
  publicClient: any,
  address: `0x${string}` | undefined,
  contractConfig: {
    address: `0x${string}`;
    abi: any;
    functionName: string;
    args: readonly any[] | any[];
  },
  fallbackGas: bigint
): Promise<bigint> {
  if (!publicClient || !address) {
    return fallbackGas;
  }

  try {
    const estimatedGas = await publicClient.estimateGas({
      account: address,
      address: contractConfig.address,
      abi: contractConfig.abi,
      functionName: contractConfig.functionName,
      args: contractConfig.args as any[],
    });
    
    // Add 30% buffer for safety
    const bufferedGas = (estimatedGas * 130n) / 100n;
    
    // Use the higher of bufferedGas or fallback (fallback is minimum, not maximum)
    // This ensures we always have enough gas even if estimation is low
    return bufferedGas > fallbackGas ? bufferedGas : fallbackGas;
  } catch (error) {
    // If estimation fails, use fallback
    console.warn('Gas estimation failed, using fallback:', error);
    return fallbackGas;
  }
}

export function useGameContract() {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();
  const publicClient = usePublicClient();

  // In-flight guards to prevent accidental double-submits from rapid clicks
  const claimInFlightRef = useRef(false);
  const forfeitInFlightRef = useRef(false);
  const playRoundInFlightRef = useRef(false);

  // Use DiceGame contract address
  const diceGameAddress = addresses.contracts.DiceGame as `0x${string}`;
  const playerStorageAddress = addresses.contracts.PlayerStorage as `0x${string}`;
  const fallbackDepositTokenAddress = addresses.contracts.MockUSDT as `0x${string}`;
  const prizePoolAddress = addresses.contracts.PrizePool as `0x${string}`;

  // Read player state from PlayerStorage (new architecture)
  const { data: playerStateRaw, refetch: refetchPlayerState } = useReadContract({
    address: playerStorageAddress,
    abi: playerStorageAbi,
    functionName: 'getPlayer',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && !!playerStorageAddress,
      refetchInterval: 5000, // Refetch every 5 seconds
    },
  });

  // Extract player state from tuple (PlayerState, bool)
  const playerState = useMemo(() => {
    if (!playerStateRaw) return undefined;
    const [state, found] = playerStateRaw as [any, boolean];
    return found ? state : undefined;
  }, [playerStateRaw]);

  // Read decision state from DiceGame's public mappings
  const { data: pendingRewardActive } = useReadContract({
    address: diceGameAddress,
    abi: diceGameAbi,
    functionName: 'pendingRewardActive',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && !!diceGameAddress,
      refetchInterval: 1000,
      refetchOnWindowFocus: true,
    },
  });

  const { data: decisionDeadline } = useReadContract({
    address: diceGameAddress,
    abi: diceGameAbi,
    functionName: 'decisionDeadlines',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && !!diceGameAddress,
      refetchInterval: 1000,
      refetchOnWindowFocus: true,
    },
  });

  const { data: pendingPayout } = useReadContract({
    address: diceGameAddress,
    abi: diceGameAbi,
    functionName: 'pendingPayouts',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address && !!diceGameAddress,
      refetchInterval: 1000,
      refetchOnWindowFocus: true,
    },
  });

  // Construct decision state from mappings
  // Decision state from DiceGame contract
  const decisionState = useMemo(() => {
    if (!address) return null;
    const currentTimestamp = Math.floor(Date.now() / 1000);
    return {
      pendingActive: pendingRewardActive || false,
      deadline: decisionDeadline ? Number(decisionDeadline) : 0,
      currentTimestamp,
    };
  }, [address, pendingRewardActive, decisionDeadline]);

  // Read base cell payouts from GameBoard (for reference)
  const { data: rawCellPayouts } = useReadContract({
    address: addresses.contracts.GameBoard as `0x${string}`,
    abi: gameBoardAbi,
    functionName: 'getAllPayouts',
  });

  // Note: getAllAdjustedPayouts doesn't exist in DiceGame contract
  // Adjusted payouts are calculated locally using base payouts + boost + safety scaling
  const rawAdjustedPayouts = undefined;

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
    address: diceGameAddress,
    abi: diceGameAbi,
    functionName: 'DEPOSIT_FEE_BPS' as const,
    query: {
      enabled: !!diceGameAddress,
    },
  });

  // Read costPerRound and roundsPerPackage from GameConfigModule
  const { data: rawCostPerRound } = useReadContract({
    address: addresses.contracts.GameConfigModule as `0x${string}`,
    abi: gameconfigmoduleAbi,
    functionName: 'getCostPerRound' as const,
    query: {
      enabled: !!addresses.contracts.GameConfigModule,
    },
  });

  const { data: rawRoundsPerPackage, error: roundsPerPackageError } = useReadContract({
    address: addresses.contracts.GameConfigModule as `0x${string}`,
    abi: gameconfigmoduleAbi,
    functionName: 'getRoundsPerPackage' as const,
    query: {
      enabled: !!addresses.contracts.GameConfigModule,
    },
  });

  // Debug logging
  if (rawRoundsPerPackage !== undefined) {
    console.log('[useGameContract] rawRoundsPerPackage:', rawRoundsPerPackage, 'as number:', Number(rawRoundsPerPackage));
  }
  if (roundsPerPackageError) {
    console.error('[useGameContract] Error fetching roundsPerPackage:', roundsPerPackageError);
  }

  // Read from GameConfigModule
  const { data: rawWithdrawFeeBps } = useReadContract({
    address: addresses.contracts.GameConfigModule as `0x${string}`,
    abi: gameconfigmoduleAbi,
    functionName: 'getWithdrawFeeBps' as const,
  });

  const { data: rawMinDepositAmountData } = useReadContract({
    address: addresses.contracts.GameConfigModule as `0x${string}`,
    abi: gameconfigmoduleAbi,
    functionName: 'getMinDepositAmount' as const,
  });

  const { data: rawMinWithdrawNetData } = useReadContract({
    address: addresses.contracts.GameConfigModule as `0x${string}`,
    abi: gameconfigmoduleAbi,
    functionName: 'getMinWithdrawNet' as const,
  });

  const { data: rawMinWithdrawAmountData } = useReadContract({
    address: addresses.contracts.GameConfigModule as `0x${string}`,
    abi: gameconfigmoduleAbi,
    functionName: 'getMinWithdrawAmount' as const,
  });

  // Use defaults if not loaded yet
  const withdrawFeeBpsRaw = rawWithdrawFeeBps ?? 50n; // Default 50 BPS (0.5%)
  const rawMinDepositAmount = rawMinDepositAmountData ?? parseUnits('10', 6); // Default 10 USDT
  const rawMinWithdrawNet = rawMinWithdrawNetData ?? parseUnits('1', 6); // Default 1 USDT
  const rawMinWithdrawAmount = rawMinWithdrawAmountData ?? parseUnits('1999', 6); // Default 1999 USDT

  const { data: rawBoardSequence } = useReadContract({
    address: addresses.contracts.GameBoard as `0x${string}`,
    abi: gameBoardAbi,
    functionName: 'getBoardSequence' as const,
  });

  // Platform stats and pool safety may need to be read from PrizePool or other contracts
  // For now, we'll read prize pool balance directly
  const rawPlatformStats = undefined; // Can be added later if needed

  // Read safety config from GameConfigModule
  const { data: rawSafetyConfig } = useReadContract({
    address: addresses.contracts.GameConfigModule as `0x${string}`,
    abi: gameconfigmoduleAbi,
    functionName: 'getSafetyConfig' as const,
    query: {
      refetchInterval: 10000, // Refetch every 10 seconds
      refetchOnWindowFocus: true,
    },
  });

  // Calculate poolSafety from prize pool balance and safety config
  const poolSafety = useMemo(() => {
    if (!rawPrizePoolBalance || !rawSafetyConfig) return undefined;
    const poolBalance = Number(formatUnits(rawPrizePoolBalance, USDT_DECIMALS));
    const reserveFloor = Number(formatUnits((rawSafetyConfig as any).reserveFloor, USDT_DECIMALS));
    const safetyBalance = poolBalance > reserveFloor ? poolBalance - reserveFloor : 0;
    return {
      poolBalance,
      safetyBalance,
    };
  }, [rawPrizePoolBalance, rawSafetyConfig]);

  // Default deposit token - read from TokenRegistry or use MockUSDT
  const defaultDepositTokenData = undefined;

  const defaultDepositToken = defaultDepositTokenData as
    | readonly [`0x${string}`, string, boolean]
    | undefined;

  const depositTokenAddress =
    (defaultDepositToken?.[0] as `0x${string}` | undefined) ?? fallbackDepositTokenAddress;
  const depositTokenSymbol = defaultDepositToken?.[1] ?? 'USDT';
  const depositTokenEnabled =
    defaultDepositToken?.[2] === undefined ? true : Boolean(defaultDepositToken[2]);

  const payoutBoostPpm = rawPayoutBoostPpm ? Number(rawPayoutBoostPpm) : 0;

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

  // Read deposit token allowance (approve DiceGame to spend USDT)
  const { data: allowance, refetch: refetchAllowance } = useReadContract({
    address: depositTokenAddress,
    abi: erc20Abi,
    functionName: 'allowance',
    args: address ? [address, diceGameAddress] : undefined,
    query: {
      enabled: !!address && depositTokenEnabled && !!diceGameAddress,
    },
  });

  const { data: depositTokenBalanceRaw, refetch: refetchDepositTokenBalance } = useReadContract({
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
    const contractConfig = {
      address: depositTokenAddress,
      abi: erc20Abi,
      functionName: 'approve' as const,
      args: [diceGameAddress, amountWei] as const,
    };
    
    // For approve, we can use a smaller buffer since it's a simple operation
    const gasLimit = await estimateGasWithBuffer(
      publicClient,
      address,
      contractConfig,
      100000n // Fallback: ERC20 approve typically needs ~46k gas
    );
    
    const hash = await writeContractAsync({
      address: depositTokenAddress,
      abi: erc20Abi,
      functionName: 'approve',
      args: [diceGameAddress, amountWei],
      gas: gasLimit,
    });
    
    // Wait for transaction confirmation
    if (publicClient && hash) {
      await publicClient.waitForTransactionReceipt({ hash, timeout: 60000 });
    }
    
    return hash;
  };

  const deposit = async (amount: string) => {
    const amountWei = parseUnits(amount, 6); // USDT has 6 decimals
    const contractConfig = {
      address: diceGameAddress,
      abi: diceGameAbi,
      functionName: 'deposit' as const,
      args: [amountWei] as const,
    };
    
    const gasLimit = await estimateGasWithBuffer(
      publicClient,
      address,
      contractConfig,
      600000n // Fallback: Deposit typically needs ~290-500k gas
    );
    
    const hash = await writeContractAsync({
      address: diceGameAddress,
      abi: diceGameAbi,
      functionName: 'deposit',
      args: [amountWei],
      gas: gasLimit,
    });
    
    // Wait for transaction confirmation
    if (publicClient && hash) {
      await publicClient.waitForTransactionReceipt({ hash, timeout: 60000 });
    }
    
    return hash;
  };

  const buyRounds = async (numRounds: number) => {
    console.log('[buyRounds] Calling with numRounds:', numRounds);
    try {
      const contractConfig = {
        address: diceGameAddress,
        abi: diceGameAbi,
        functionName: 'buyRounds' as const,
        args: [BigInt(numRounds)] as const,
      };
      
      const gasLimit = await estimateGasWithBuffer(
        publicClient,
        address,
        contractConfig,
        500000n // Fallback: BuyRounds typically needs ~250-400k gas
      );
      
      const hash = await writeContractAsync({
        address: diceGameAddress,
        abi: diceGameAbi,
        functionName: 'buyRounds',
        args: [BigInt(numRounds)],
        gas: gasLimit,
      });
      console.log('[buyRounds] Transaction hash:', hash);
      
      // Wait for transaction confirmation
      if (publicClient && hash) {
        await publicClient.waitForTransactionReceipt({ hash, timeout: 60000 });
      }
      
      return hash;
    } catch (error: any) {
      console.error('[buyRounds] Error details:', {
        error,
        message: error?.message,
        shortMessage: error?.shortMessage,
        data: error?.data,
        cause: error?.cause,
        numRounds,
      });
      throw error;
    }
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

      // Encode gameParams as bytes (DiceGame expects: (bool isClockwise, uint256))
      // Encode both parameters as a tuple
      const gameParams = encodeAbiParameters(
        [
          { type: 'bool', name: 'isClockwise' },
          { type: 'uint256', name: 'unused' }
        ],
        [isClockwise, 0n]
      );

      const seed = BigInt(Math.floor(Math.random() * 1000000));
      
      console.log('[playRound] Calling contract with:', {
        address: diceGameAddress,
        functionName: 'play',
        gameParams,
        seed: seed.toString(),
        gas: '1500000',
      });

      // Try static call first to see if it would revert
      if (publicClient && address) {
        try {
          await publicClient.simulateContract({
            address: diceGameAddress,
            abi: diceGameAbi,
            functionName: 'play',
            args: [gameParams, seed],
            account: address,
          });
          console.log('[playRound] Static call succeeded - transaction should work');
        } catch (staticError: any) {
          console.error('[playRound] Static call failed - transaction will revert:', staticError);
          console.error('[playRound] Static error details:', {
            message: staticError?.message,
            cause: staticError?.cause,
            shortMessage: staticError?.shortMessage,
          });
          throw staticError;
        }
      }

      const contractConfig = {
        address: diceGameAddress,
        abi: diceGameAbi,
        functionName: 'play' as const,
        args: [gameParams, seed] as const,
      };
      
      // For play(), we use a higher fallback due to potential reroll loops
      const gasLimit = await estimateGasWithBuffer(
        publicClient,
        address,
        contractConfig,
        1500000n // Fallback: Play can vary significantly due to reroll logic
      );
      
      const hash = await writeContractAsync({
        address: diceGameAddress,
        abi: diceGameAbi,
        functionName: 'play',
        args: [gameParams, seed],
        gas: gasLimit,
      });
      
      // Wait for transaction confirmation
      if (publicClient && hash) {
        await publicClient.waitForTransactionReceipt({ hash, timeout: 60000 });
      }
      
      return hash;
    } catch (error: any) {
      console.error('[playRound] Transaction failed:', error);
      console.error('[playRound] Error details:', {
        name: error?.constructor?.name,
        message: error?.message,
        cause: error?.cause,
        shortMessage: error?.shortMessage,
        data: error?.data,
      });
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
      // Validate state before attempting claim
      if (publicClient && address && playerStorageAddress) {
        try {
          const [currentState] = await publicClient.readContract({
            address: playerStorageAddress,
            abi: playerStorageAbi,
            functionName: 'getPlayer',
            args: [address],
          });
          
          if (!currentState.pendingRewardActive) {
            throw new Error('No pending reward to claim. The reward may have already been claimed or expired.');
          }
          
          // Check if deadline has expired - claimReward requires deadline to be valid
          if (currentState.decisionDeadline > 0n) {
            const currentBlock = await publicClient.getBlockNumber();
            const currentBlockTime = (await publicClient.getBlock({ blockNumber: currentBlock })).timestamp;
            
            if (currentBlockTime > currentState.decisionDeadline) {
              throw new Error('The decision deadline has expired. Please forfeit the reward instead.');
            }
          }
        } catch (readError: any) {
          // If it's a validation error, throw it
          if (readError.message && (readError.message.includes('No pending reward') || readError.message.includes('deadline has expired'))) {
            throw readError;
          }
          // If we can't read the state, proceed anyway (might be a network issue)
          // The contract will revert with a clear error message
          console.warn('Could not validate claim state:', readError);
        }
      }
      
      // Let the wallet/provider estimate gas automatically - don't force a gas limit
      const hash = await writeContractAsync({
        address: diceGameAddress,
        abi: diceGameAbi,
        functionName: 'claimReward',
        args: [],
      });
      
      // Wait for transaction confirmation
      if (publicClient && hash) {
        await publicClient.waitForTransactionReceipt({ hash, timeout: 60000 });
      }
      
      return hash;
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
      // Validate that there's actually a pending reward before calling the contract
      // This prevents unnecessary failed transactions due to stale state
      if (publicClient && address && playerStorageAddress) {
        try {
          const [currentState] = await publicClient.readContract({
            address: playerStorageAddress,
            abi: playerStorageAbi,
            functionName: 'getPlayer',
            args: [address],
          });
          
          if (!currentState.pendingRewardActive) {
            throw new Error('No pending reward to forfeit. The reward may have already been claimed or expired.');
          }
        } catch (readError: any) {
          // If we can't read the state, proceed anyway (might be a network issue)
          // The contract will revert with a clear error message
          console.warn('Could not validate pending reward state:', readError);
        }
      }
      
      // Let the wallet/provider estimate gas automatically - don't force a gas limit
      const hash = await writeContractAsync({
        address: diceGameAddress,
        abi: diceGameAbi,
        functionName: 'forfeitReward',
        args: [],
      });
      
      // Wait for transaction confirmation
      if (publicClient && hash) {
        await publicClient.waitForTransactionReceipt({ hash, timeout: 60000 });
      }
      
      return hash;
    } finally {
      forfeitInFlightRef.current = false;
    }
  };

  const withdraw = async (netAmount: string) => {
    // Primary withdrawal function - withdraws from both deposits and winnings
    // Uses winnings first, then deposits, and applies 0.5% fee
    const amountWei = parseUnits(netAmount, 6);
    const contractConfig = {
      address: diceGameAddress,
      abi: diceGameAbi,
      functionName: 'withdraw' as const,
      args: [amountWei] as const,
    };
    
    const gasLimit = await estimateGasWithBuffer(
      publicClient,
      address,
      contractConfig,
      600000n // Fallback: Withdraw typically needs ~300-500k gas
    );
    
    const hash = await writeContractAsync({
      address: diceGameAddress,
      abi: diceGameAbi,
      functionName: 'withdraw',
      args: [amountWei],
      gas: gasLimit,
    });
    
    // Wait for transaction confirmation
    if (publicClient && hash) {
      await publicClient.waitForTransactionReceipt({ hash, timeout: 60000 });
    }
    
    return hash;
  };

  // Format player state for easier use
  // Use pendingPayout from DiceGame mapping if available, otherwise from playerState
  const effectivePendingPayout = pendingPayout ? pendingPayout : (playerState?.pendingPayout || 0n);
  const effectiveDecisionDeadline = decisionDeadline ? decisionDeadline : (playerState?.decisionDeadline || 0n);
  const effectivePendingRewardActive = pendingRewardActive !== undefined ? pendingRewardActive : (playerState?.pendingRewardActive || false);

  const formattedPlayerState = playerState
    ? (() => {
      const lastDiceSource = Array.isArray(playerState.lastDiceValues)
        ? playerState.lastDiceValues
        : Array.from(playerState.lastDiceValues ?? []);

      const lastDiceValues = lastDiceSource.map((value: number | bigint) => Number(value));
      const lastDiceSum = lastDiceValues.reduce((total: number, face: number) => total + face, 0);
      const hasRecordedRoll = lastDiceValues.some((face: number) => face > 0);
      const lastDiceIsBaozi =
        hasRecordedRoll && lastDiceValues.every((face: number) => face === lastDiceValues[0]);

      return {
        depositedBalance: formatUnits(playerState.depositedBalance || 0n, 6),
        winningsBalance: formatUnits(playerState.winningsBalance || 0n, 6),
        totalDeposited: formatUnits(playerState.totalDeposited || 0n, 6),
        totalWithdrawn: formatUnits(playerState.totalWithdrawn || 0n, 6),
        lifetimeWinnings: formatUnits(playerState.lifetimeWinnings || 0n, 6),
        pendingPayout: formatUnits(effectivePendingPayout, 6),
        pendingGameId: Number(playerState.pendingGameId || 0n),
        roundsRemaining: Number(playerState.roundsRemaining || 0n),
        totalRoundsPlayed: Number(playerState.totalRoundsPlayed || 0n),
        lastDepositTime: Number(playerState.lastDepositTime || 0n),
        lastPlayTimestamp: Number(playerState.lastPlayTimestamp || 0n),
        currentPosition: Number(playerState.currentPosition || 0),
        hasActiveSession: playerState.hasActiveSession || false,
        totalWins: Number(playerState.totalWins || 0n),
        totalLosses: Number(playerState.totalLosses || 0n),
        decisionDeadline: Number(effectiveDecisionDeadline),
        pendingStartCell: Number(playerState.pendingStartCell || 0),
        pendingEndCell: Number(playerState.pendingEndCell || 0),
        pendingRewardActive: effectivePendingRewardActive,
        lastDirectionClockwise: playerState.lastDirectionClockwise || false,
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

  // Use adjusted payouts from contract (includes boost + safety scaling)
  // Convert from USDT (6 decimals) to Yuan for display
  const scaledCellPayouts = useMemo(() => {
    if (!rawAdjustedPayouts || !baseCellPayouts) {
      // Fallback to local calculation if contract call fails
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
    }
    
    // Convert adjusted payouts from USDT (6 decimals) back to Yuan for display
    // The contract returns payouts in USDT with 6 decimals, but we display in Yuan
    return Array.from(rawAdjustedPayouts as readonly bigint[]).map((adjustedPayout, index) => {
      const basePayout = baseCellPayouts[index];
      if (basePayout === 0) return 0;
      const isNegative = basePayout < 0;
      
      // Convert from USDT (6 decimals) to Yuan
      const adjustedYuan = Number(formatUnits(adjustedPayout, 6));
      return isNegative ? -adjustedYuan : adjustedYuan;
    });
  }, [rawAdjustedPayouts, baseCellPayouts, poolSafety, safetyConfig, payoutBoostPpm]);

  // decisionState is already constructed from mappings above
  // No need to reconstruct it

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
    minWithdrawAmount: rawMinWithdrawAmount ? formatUnits(rawMinWithdrawAmount, 6) : undefined,
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
    refetchDepositTokenBalance,
    buyRounds,
    playRound,
    claimPendingReward,
    forfeitPendingReward,
    withdraw,
    refetchPlayerState,
    refetchAllowance,
  };
}

