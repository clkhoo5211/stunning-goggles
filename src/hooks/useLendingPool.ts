import { useState } from 'react';
import { useAccount, useWriteContract, usePublicClient } from 'wagmi';
import { parseUnits, formatUnits } from 'viem';
import { toast } from 'sonner';
import { lendingPoolAbi } from '@lib/contracts/abi/lendingPool';
import { collateralManagerAbi } from '@lib/contracts/abi/collateralManager';
import { erc20Abi } from '@lib/contracts/abi/erc20';
import addresses from '@lib/contracts/addresses.json';

export interface UserLendingData {
  user: `0x${string}`;
  borrowedAmount: bigint;
  borrowedAt: bigint;
  interestAccrued: bigint;
  healthFactor: bigint;
  isActive: boolean;
}

export interface BorrowParams {
  amount: bigint;
  collateralToken: `0x${string}`;
}

export function useLendingPool() {
  const { address, isConnected } = useAccount();
  const { writeContractAsync } = useWriteContract();
  const publicClient = usePublicClient();
  const [isLoading, setIsLoading] = useState(false);

  const lendingPoolAddress = ((addresses.contracts as any).LendingPool || 
    (addresses.contracts as any).lendingPool) as `0x${string}` | undefined;
  const collateralManagerAddress = ((addresses.contracts as any).CollateralManager || 
    (addresses.contracts as any).collateralManager) as `0x${string}` | undefined;
  const usdtAddress = addresses.contracts.MockUSDT as `0x${string}`;
  const platformTokenAddress = addresses.contracts.MockPlatformToken as `0x${string}`;

  // Get user lending data (real-time from contract)
  // The contract's getUserLendingData calculates interest on-the-fly based on current block timestamp
  const getUserLendingData = async (userAddress?: `0x${string}`): Promise<UserLendingData | null> => {
    const user = userAddress || address;
    if (!lendingPoolAddress || !user || !publicClient) return null;
    
    try {
      // Use readContract directly to ensure real-time data (no caching)
      // The contract calculates interest based on current block.timestamp
      const result = await publicClient.readContract({
        address: lendingPoolAddress,
        abi: lendingPoolAbi,
        functionName: 'getUserLendingData',
        args: [user],
        // No blockTag specified - uses latest block for real-time calculation
      });
      
      return result as UserLendingData;
    } catch (error) {
      console.error('Error fetching user lending data:', error);
      return null;
    }
  };

  // Get health factor
  const getHealthFactor = async (userAddress?: `0x${string}`): Promise<bigint | null> => {
    const user = userAddress || address;
    if (!lendingPoolAddress || !user || !publicClient) return null;
    
    try {
      const result = await publicClient.readContract({
        address: lendingPoolAddress,
        abi: lendingPoolAbi,
        functionName: 'getHealthFactor',
        args: [user],
      });
      
      return result as bigint;
    } catch (error) {
      console.error('Error fetching health factor:', error);
      return null;
    }
  };

  // Get total borrowed and available
  const getPoolStats = async () => {
    if (!lendingPoolAddress || !publicClient) return null;
    
    try {
      const [totalBorrowed, totalAvailable] = await Promise.all([
        publicClient.readContract({
          address: lendingPoolAddress,
          abi: lendingPoolAbi,
          functionName: 'totalBorrowed',
        }),
        publicClient.readContract({
          address: lendingPoolAddress,
          abi: lendingPoolAbi,
          functionName: 'totalAvailable',
        }),
      ]);
      
      return {
        totalBorrowed: totalBorrowed as bigint,
        totalAvailable: totalAvailable as bigint,
      };
    } catch (error) {
      console.error('Error fetching pool stats:', error);
      return null;
    }
  };

  // Deposit collateral
  const depositCollateral = async (token: `0x${string}`, amount: string) => {
    if (!lendingPoolAddress) {
      toast.error('LendingPool contract not deployed. Please deploy contracts first.');
      console.error('LendingPool address not found in addresses.json');
      return;
    }
    if (!isConnected || !address) {
      toast.error('Please connect your wallet');
      return;
    }

    setIsLoading(true);
    try {
      // Determine decimals based on token
      const decimals = token.toLowerCase() === usdtAddress.toLowerCase() ? 6 : 18;
      const amountWei = parseUnits(amount, decimals);

      // Check user balance
      const balance = await publicClient?.readContract({
        address: token,
        abi: erc20Abi,
        functionName: 'balanceOf',
        args: [address],
      });
      
      if (!balance || balance < amountWei) {
        const tokenSymbol = token.toLowerCase() === usdtAddress.toLowerCase() ? 'USDT' : 'PLATFORM';
        toast.error(`Insufficient ${tokenSymbol} balance. You need ${amount} ${tokenSymbol}.`);
        return;
      }

      // Check if token is enabled as collateral
      if (collateralManagerAddress && publicClient) {
        try {
          const config = await publicClient.readContract({
            address: collateralManagerAddress,
            abi: collateralManagerAbi,
            functionName: 'getCollateralConfig',
            args: [token],
          }) as any;
          
          console.log('[depositCollateral] Collateral config:', {
            token,
            config,
            isEnabled: config?.isEnabled,
            collateralFactor: config?.collateralFactor?.toString(),
          });
          
          if (!config || !config.isEnabled) {
            const tokenSymbol = token.toLowerCase() === usdtAddress.toLowerCase() ? 'USDT' : 'PLATFORM';
            toast.error(`${tokenSymbol} is not enabled as collateral. Please redeploy contracts or select USDT.`);
            console.error(`[depositCollateral] Token ${tokenSymbol} (${token}) is not enabled as collateral`);
            return;
          }
          
          // Check if LendingPool has MANAGER_ROLE in CollateralManager
          if (lendingPoolAddress) {
            try {
              // Get MANAGER_ROLE hash from contract
              const managerRoleHash = await publicClient.readContract({
                address: collateralManagerAddress,
                abi: collateralManagerAbi,
                functionName: 'MANAGER_ROLE',
              }) as `0x${string}`;
              
              const hasRole = await publicClient.readContract({
                address: collateralManagerAddress,
                abi: collateralManagerAbi,
                functionName: 'hasRole',
                args: [managerRoleHash, lendingPoolAddress],
              }) as boolean;
              
              console.log('[depositCollateral] Role check:', {
                managerRoleHash,
                lendingPoolAddress,
                hasRole,
              });
              
              if (!hasRole) {
                toast.error('LendingPool does not have MANAGER_ROLE in CollateralManager. Please redeploy contracts.');
                console.error('[depositCollateral] LendingPool missing MANAGER_ROLE');
                return;
              }
            } catch (roleError) {
              console.error('[depositCollateral] Error checking MANAGER_ROLE:', roleError);
              // Continue anyway - let the transaction fail with a clearer error
            }
          }
        } catch (error) {
          console.error('[depositCollateral] Error checking collateral config:', error);
          const tokenSymbol = token.toLowerCase() === usdtAddress.toLowerCase() ? 'USDT' : 'PLATFORM';
          toast.error(`Failed to verify ${tokenSymbol} collateral status. Please check contract deployment.`);
          return;
        }
      }

      // Check allowance - IMPORTANT: User must approve CollateralManager, not LendingPool!
      // Because CollateralManager is the contract that actually transfers tokens from user
      if (!collateralManagerAddress) {
        toast.error('CollateralManager contract not deployed. Please deploy contracts first.');
        console.error('CollateralManager address not found in addresses.json');
        return;
      }
      
      const allowance = await publicClient?.readContract({
        address: token,
        abi: erc20Abi,
        functionName: 'allowance',
        args: [address, collateralManagerAddress], // Check CollateralManager allowance
      });
      
      console.log('[depositCollateral] Allowance check:', {
        required: amountWei.toString(),
        current: allowance?.toString(),
        sufficient: allowance && allowance >= amountWei,
        spender: collateralManagerAddress, // CollateralManager, not LendingPool!
      });

      if (!allowance || allowance < amountWei) {
        // Approve CollateralManager to spend tokens
        toast.info('Approving token...');
        const approveHash = await writeContractAsync({
          address: token,
          abi: erc20Abi,
          functionName: 'approve',
          args: [collateralManagerAddress, amountWei], // Approve CollateralManager!
          gas: 100000n, // ERC20 approve typically needs ~46k gas, 100k is safe
        });
        
        // Wait for approval transaction to be mined
        if (publicClient) {
          toast.info('Waiting for approval confirmation...');
          await publicClient.waitForTransactionReceipt({
            hash: approveHash,
            timeout: 60000, // 60 second timeout
          });
          
          // Verify approval actually went through
          const newAllowance = await publicClient.readContract({
            address: token,
            abi: erc20Abi,
            functionName: 'allowance',
            args: [address, collateralManagerAddress], // Check CollateralManager allowance
          });
          
          if (newAllowance < amountWei) {
            toast.error('Approval transaction confirmed but allowance is still insufficient. Please try again.');
            return;
          }
          
          toast.success('Approval confirmed!');
        } else {
          // Fallback: wait a bit if publicClient is not available
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }
      }

      // Simulate the transaction first to catch any revert reasons
      if (publicClient && address) {
        try {
          await publicClient.simulateContract({
            address: lendingPoolAddress,
            abi: lendingPoolAbi,
            functionName: 'depositCollateral',
            args: [token, amountWei],
            account: address,
          });
          console.log('[depositCollateral] Simulation succeeded - transaction should work');
        } catch (simError: any) {
          console.error('[depositCollateral] Simulation failed - transaction will revert:', simError);
          console.error('[depositCollateral] Simulation error details:', {
            message: simError?.message,
            cause: simError?.cause,
            shortMessage: simError?.shortMessage,
            data: simError?.data,
            errorSignature: simError?.data?.errorSignature,
          });
          
          // Extract better error message from simulation
          let simErrorMessage = 'Transaction will revert';
          
          // Check for specific error signatures
          const errorData = simError?.data;
          if (errorData) {
            // Error signature 0xfb8f41b2 - likely from CollateralManager or SafeERC20
            // This could be: token not enabled, insufficient allowance, or insufficient balance
            console.log('[depositCollateral] Error signature detected:', errorData);
            
            // Try to get more info by checking the actual state
            const tokenSymbol = token.toLowerCase() === usdtAddress.toLowerCase() ? 'USDT' : 'PLATFORM';
            
            // Double-check allowance (for CollateralManager, not LendingPool)
            const finalAllowance = await publicClient.readContract({
              address: token,
              abi: erc20Abi,
              functionName: 'allowance',
              args: [address, collateralManagerAddress], // Check CollateralManager allowance
            });
            
            console.log('[depositCollateral] Final allowance check:', {
              required: amountWei.toString(),
              current: finalAllowance.toString(),
              sufficient: finalAllowance >= amountWei,
            });
            
            if (finalAllowance < amountWei) {
              simErrorMessage = `Insufficient token allowance. Current: ${formatUnits(finalAllowance, decimals)} ${tokenSymbol}, Required: ${amount} ${tokenSymbol}. Please approve again.`;
            } else {
              // Check if token is enabled
              try {
                const config = await publicClient.readContract({
                  address: collateralManagerAddress!,
                  abi: collateralManagerAbi,
                  functionName: 'getCollateralConfig',
                  args: [token],
                }) as any;
                
                console.log('[depositCollateral] Collateral config from error handler:', config);
                
                if (!config || !config.isEnabled) {
                  simErrorMessage = `${tokenSymbol} is not enabled as collateral. Please redeploy contracts with Platform Token configuration, or use USDT instead.`;
                } else {
                  // Check balance one more time
                  const finalBalance = await publicClient.readContract({
                    address: token,
                    abi: erc20Abi,
                    functionName: 'balanceOf',
                    args: [address],
                  });
                  
                  if (finalBalance < amountWei) {
                    simErrorMessage = `Insufficient ${tokenSymbol} balance. You have ${formatUnits(finalBalance, decimals)} ${tokenSymbol}, but need ${amount} ${tokenSymbol}.`;
                  } else {
                    // Error signature 0xfb8f41b2 - likely from SafeERC20 or a nested revert
                    // Check if the issue is with the token transfer by verifying the user has the tokens
                    // and the LendingPool can actually call CollateralManager
                    simErrorMessage = `Transaction failed (error: 0xfb8f41b2). This usually means:\n1) Token transfer failed (check balance/allowance)\n2) LendingPool missing MANAGER_ROLE in CollateralManager\n3) Contract configuration issue\n\nPlease verify:\n- You have sufficient ${tokenSymbol} balance\n- Token is approved for LendingPool\n- Contracts were deployed correctly with MANAGER_ROLE granted`;
                  }
                }
              } catch (configError) {
                console.error('[depositCollateral] Error checking config in error handler:', configError);
                simErrorMessage = `${tokenSymbol} deposit failed. Error signature: 0xfb8f41b2. Please verify the token is enabled as collateral and try again.`;
              }
            }
          } else if (simError?.shortMessage) {
            simErrorMessage = simError.shortMessage;
            if (simErrorMessage.includes('token not enabled') || simErrorMessage.includes('CollateralManager: token not enabled')) {
              simErrorMessage = 'This token is not enabled as collateral. Please select USDT or Platform Token.';
            } else if (simErrorMessage.includes('insufficient') || simErrorMessage.includes('balance')) {
              simErrorMessage = 'Insufficient token balance or allowance. Please check your balance and approval.';
            }
          } else if (simError?.message) {
            simErrorMessage = simError.message;
          }
          
          toast.error(simErrorMessage);
          throw simError;
        }
      }

      const txHash = await writeContractAsync({
        address: lendingPoolAddress,
        abi: lendingPoolAbi,
        functionName: 'depositCollateral',
        args: [token, amountWei],
      });

      toast.success('Collateral deposit submitted!');
      return txHash;
    } catch (error: any) {
      console.error('Error depositing collateral:', error);
      
      // Try to extract more detailed error information
      let errorMessage = 'Failed to deposit collateral';
      
      if (error?.shortMessage) {
        errorMessage = error.shortMessage;
      } else if (error?.message) {
        errorMessage = error.message;
      } else if (error?.data?.message) {
        errorMessage = error.data.message;
      }
      
      // Check for common error patterns
      if (errorMessage.includes('token not enabled') || errorMessage.includes('CollateralManager: token not enabled')) {
        errorMessage = 'This token is not enabled as collateral. Please select USDT or Platform Token.';
      } else if (errorMessage.includes('insufficient') || errorMessage.includes('balance')) {
        errorMessage = 'Insufficient token balance. Please check your balance and try again.';
      } else if (errorMessage.includes('allowance') || errorMessage.includes('approval')) {
        errorMessage = 'Token approval failed. Please try again.';
      } else if (errorMessage.includes('Internal JSON-RPC error')) {
        errorMessage = 'Transaction failed. Please check: 1) Token is enabled as collateral, 2) You have sufficient balance, 3) Approval was confirmed.';
      }
      
      toast.error(errorMessage);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Withdraw collateral
  const withdrawCollateral = async (token: `0x${string}`, amount: string) => {
    if (!lendingPoolAddress) {
      toast.error('LendingPool contract not deployed. Please deploy contracts first.');
      console.error('LendingPool address not found in addresses.json');
      return;
    }
    if (!isConnected || !address) {
      toast.error('Please connect your wallet');
      return;
    }

    setIsLoading(true);
    try {
      // Determine decimals based on token
      const decimals = token.toLowerCase() === usdtAddress.toLowerCase() ? 6 : 18;
      const amountWei = parseUnits(amount, decimals);

      // Simulate transaction first to catch any revert reasons
      if (publicClient && address) {
        try {
          await publicClient.simulateContract({
            address: lendingPoolAddress,
            abi: lendingPoolAbi,
            functionName: 'withdrawCollateral',
            args: [token, amountWei],
            account: address,
          });
          console.log('[withdrawCollateral] Simulation succeeded - transaction should work');
        } catch (simError: any) {
          console.error('[withdrawCollateral] Simulation failed:', simError);
          let simErrorMessage = simError?.shortMessage || simError?.message || 'Transaction will revert';
          if (simErrorMessage.includes('health factor')) {
            simErrorMessage = 'Cannot withdraw: Health factor would drop too low. Please repay debt first.';
          }
          toast.error(simErrorMessage);
          throw simError;
        }
      }

      const txHash = await writeContractAsync({
        address: lendingPoolAddress,
        abi: lendingPoolAbi,
        functionName: 'withdrawCollateral',
        args: [token, amountWei],
      });

      toast.success('Collateral withdrawal submitted!');
      
      // Wait for transaction receipt
      if (publicClient) {
        toast.info('Waiting for confirmation...');
        await publicClient.waitForTransactionReceipt({
          hash: txHash,
          timeout: 60000, // 60 second timeout
        });
        toast.success('Collateral withdrawn successfully!');
      }
      
      return txHash;
    } catch (error: any) {
      console.error('Error withdrawing collateral:', error);
      let errorMessage = 'Failed to withdraw collateral';
      if (error?.shortMessage) {
        errorMessage = error.shortMessage;
      } else if (error?.message) {
        errorMessage = error.message;
      }
      toast.error(errorMessage);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Borrow platform tokens
  const borrow = async (amount: string, collateralToken: `0x${string}`) => {
    if (!lendingPoolAddress || !isConnected || !address) {
      const error = new Error('Please connect your wallet');
      toast.error(error.message);
      throw error;
    }

    if (!publicClient) {
      const error = new Error('Public client not available');
      toast.error(error.message);
      throw error;
    }

    if (!collateralManagerAddress) {
      const error = new Error('CollateralManager contract not deployed. Please deploy contracts first.');
      toast.error(error.message);
      throw error;
    }

    setIsLoading(true);
    try {
      const amountWei = parseUnits(amount, 18); // Platform token has 18 decimals

      // Check if user has collateral
      const collateralValue = await publicClient.readContract({
        address: collateralManagerAddress,
        abi: collateralManagerAbi,
        functionName: 'getTotalCollateralValue',
        args: [address],
      });

      if (!collateralValue || collateralValue[0] === 0n) {
        const error = new Error('No collateral deposited. Please deposit collateral first.');
        toast.error(error.message);
        throw error;
      }

      // Check max borrowable
      const maxBorrow = await publicClient.readContract({
        address: collateralManagerAddress,
        abi: collateralManagerAbi,
        functionName: 'calculateMaxBorrow',
        args: [address],
      });

      if (amountWei > maxBorrow) {
        const error = new Error(`Borrow amount exceeds maximum borrowable amount (${formatUnits(maxBorrow, 18)} PLATFORM)`);
        toast.error(error.message);
        throw error;
      }

      // Check pool liquidity
      const poolStats = await getPoolStats();
      if (poolStats && amountWei > poolStats.totalAvailable) {
        const error = new Error(`Insufficient liquidity in pool. Available: ${formatUnits(poolStats.totalAvailable, 18)} PLATFORM`);
        toast.error(error.message);
        throw error;
      }

      const params = {
        amount: amountWei,
        collateralToken,
      };

      // Simulate transaction first to get detailed error messages
      try {
        await publicClient.simulateContract({
          address: lendingPoolAddress,
          abi: lendingPoolAbi,
          functionName: 'borrow',
          args: [params] as [typeof params],
          account: address,
        });
        console.log('[borrow] Simulation successful - transaction should succeed');
      } catch (simulationError: any) {
        console.error('[borrow] Simulation failed - transaction will revert:', simulationError);
        
        // Extract error message
        let errorMessage = 'Transaction will revert';
        if (simulationError?.shortMessage) {
          errorMessage = simulationError.shortMessage;
        } else if (simulationError?.message) {
          errorMessage = simulationError.message;
        } else if (simulationError?.cause?.shortMessage) {
          errorMessage = simulationError.cause.shortMessage;
        } else if (simulationError?.cause?.message) {
          errorMessage = simulationError.cause.message;
        }

        // Try to decode common errors
        if (errorMessage.includes('exceeds max borrow') || errorMessage.includes('exceedsMaxBorrow')) {
          errorMessage = `Borrow amount exceeds maximum borrowable amount based on your collateral`;
        } else if (errorMessage.includes('insufficient liquidity') || errorMessage.includes('InsufficientLiquidity')) {
          errorMessage = `Insufficient liquidity in the lending pool`;
        } else if (errorMessage.includes('zero amount')) {
          errorMessage = `Borrow amount must be greater than zero`;
        } else if (errorMessage.includes('zero collateralToken')) {
          errorMessage = `Invalid collateral token address`;
        }

        toast.error(errorMessage);
        throw simulationError;
      }

      const txHash = await writeContractAsync({
        address: lendingPoolAddress,
        abi: lendingPoolAbi,
        functionName: 'borrow',
        args: [params] as [typeof params],
      });

      toast.success('Borrow transaction submitted! Waiting for confirmation...');

      // Wait for transaction receipt
      if (publicClient) {
        const receipt = await publicClient.waitForTransactionReceipt({
          hash: txHash,
          timeout: 120000, // 2 minute timeout
        });

        if (receipt.status === 'success') {
          toast.success('Borrow successful!');
        } else {
          toast.error('Borrow transaction failed');
        }
      }

      return txHash;
    } catch (error: any) {
      console.error('Error borrowing:', error);
      
      // Don't show error if it was already shown during simulation
      if (!error?.shortMessage?.includes('Transaction will revert')) {
        let errorMessage = 'Failed to borrow';
        if (error?.shortMessage) {
          errorMessage = error.shortMessage;
        } else if (error?.message) {
          errorMessage = error.message;
        }
        toast.error(errorMessage);
      }
      
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Repay borrowed amount
  const repay = async (amount: string) => {
    if (!lendingPoolAddress || !isConnected || !address) {
      toast.error('Please connect your wallet');
      return;
    }

    setIsLoading(true);
    try {
      const amountWei = parseUnits(amount, 18); // Platform token has 18 decimals

      // Check balance, allowance, and debt BEFORE doing anything
      const [currentBalance, currentAllowance, userData, calculatedInterest] = await Promise.all([
        publicClient?.readContract({
          address: platformTokenAddress,
          abi: erc20Abi,
          functionName: 'balanceOf',
          args: [address],
        }),
        publicClient?.readContract({
          address: platformTokenAddress,
          abi: erc20Abi,
          functionName: 'allowance',
          args: [address, lendingPoolAddress],
        }),
        getUserLendingData(address),
        calculateInterest(address), // Get calculated interest to account for accrual
      ]);

      const balance = currentBalance as bigint | undefined;
      const allowance = currentAllowance as bigint | undefined;

      // Calculate total debt including potential interest accrual
      // The contract accrues interest before checking, so we need to account for that
      const interestToAccrue = calculatedInterest || 0n;
      const totalDebtWithInterest = userData 
        ? userData.borrowedAmount + (userData.interestAccrued > interestToAccrue ? userData.interestAccrued : interestToAccrue)
        : 0n;

      console.log('[repay] Pre-flight checks:', {
        amountWei: amountWei.toString(),
        balance: balance?.toString(),
        allowance: allowance?.toString(),
        userData: userData ? {
          borrowedAmount: userData.borrowedAmount.toString(),
          interestAccrued: userData.interestAccrued.toString(),
          calculatedInterest: calculatedInterest?.toString(),
          totalDebtWithInterest: totalDebtWithInterest.toString(),
          isActive: userData.isActive
        } : null
      });

      if (!balance || balance < amountWei) {
        const error = new Error(`Insufficient balance. You have ${formatUnits(balance || 0n, 18)} PLATFORM, but need ${amount} PLATFORM.`);
        toast.error(error.message);
        throw error;
      }

      if (!userData || !userData.isActive) {
        const error = new Error('No active loan to repay.');
        toast.error(error.message);
        throw error;
      }

      if (amountWei > totalDebtWithInterest) {
        const error = new Error(`Repay amount (${amount} PLATFORM) exceeds total debt including interest (${formatUnits(totalDebtWithInterest, 18)} PLATFORM).`);
        toast.error(error.message);
        throw error;
      }

      // Handle allowance - approve if needed
      if (!allowance || allowance < amountWei) {
        console.log('[repay] Insufficient allowance, approving...');
        toast.info('Approving token...');
        const approveHash = await writeContractAsync({
          address: platformTokenAddress,
          abi: erc20Abi,
          functionName: 'approve',
          args: [lendingPoolAddress, amountWei],
          gas: 100000n, // ERC20 approve typically needs ~46k gas, 100k is safe
        });
        
        // Wait for approval transaction to be mined
        if (publicClient) {
          toast.info('Waiting for approval confirmation...');
          const approveReceipt = await publicClient.waitForTransactionReceipt({
            hash: approveHash,
            timeout: 60000, // 60 second timeout
          });
          
          if (approveReceipt.status === 'success') {
            toast.success('Approval confirmed!');
            
            // Verify allowance was actually set
            const newAllowance = await publicClient.readContract({
              address: platformTokenAddress,
              abi: erc20Abi,
              functionName: 'allowance',
              args: [address, lendingPoolAddress],
            });
            
            console.log('[repay] New allowance after approval:', newAllowance.toString());
            
            if (newAllowance < amountWei) {
              const error = new Error(`Approval failed. Allowance is ${formatUnits(newAllowance, 18)} PLATFORM, but need ${amount} PLATFORM. Please try again.`);
              toast.error(error.message);
              throw error;
            }
          } else {
            const error = new Error('Approval transaction failed.');
            toast.error(error.message);
            throw error;
          }
        } else {
          // Fallback: wait a bit if publicClient is not available
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }
      }

      // Simulate transaction first to catch any revert reasons
      if (publicClient && address) {
        try {
          await publicClient.simulateContract({
            address: lendingPoolAddress,
            abi: lendingPoolAbi,
            functionName: 'repay',
            args: [amountWei],
            account: address,
          });
          console.log('[repay] Simulation succeeded - transaction should work');
        } catch (simError: any) {
          console.error('[repay] Simulation failed:', simError);
          let simErrorMessage = simError?.shortMessage || simError?.message || 'Transaction will revert';
          
          // Check for common error patterns
          if (simErrorMessage.includes('insufficient') || simErrorMessage.includes('balance') || simErrorMessage.includes('0xe450d38c')) {
            simErrorMessage = `Insufficient platform token balance or allowance. Current balance: ${formatUnits(balance || 0n, 18)} PLATFORM, Allowance: ${formatUnits(allowance || 0n, 18)} PLATFORM, Required: ${amount} PLATFORM.`;
          } else if (simErrorMessage.includes('exceeds debt') || simErrorMessage.includes('repay exceeds')) {
            simErrorMessage = `Repay amount exceeds total debt. Total debt: ${formatUnits(totalDebtWithInterest, 18)} PLATFORM.`;
          } else if (simErrorMessage.includes('no active loan')) {
            simErrorMessage = 'No active loan to repay.';
          }
          
          toast.error(simErrorMessage);
          throw simError;
        }
      }

      const txHash = await writeContractAsync({
        address: lendingPoolAddress,
        abi: lendingPoolAbi,
        functionName: 'repay',
        args: [amountWei],
      });

      toast.success('Repayment submitted!');
      
      // Wait for transaction receipt to ensure it's confirmed
      if (publicClient) {
        toast.info('Waiting for confirmation...');
        const receipt = await publicClient.waitForTransactionReceipt({
          hash: txHash,
          timeout: 60000, // 60 second timeout
        });
        
        if (receipt.status === 'success') {
          toast.success('Repayment confirmed!');
        } else {
          toast.error('Repayment transaction failed');
        }
      }
      
      return txHash;
    } catch (error: any) {
      console.error('Error repaying:', error);
      toast.error(error?.shortMessage || error?.message || 'Failed to repay');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate interest
  const calculateInterest = async (userAddress?: `0x${string}`): Promise<bigint | null> => {
    const user = userAddress || address;
    if (!lendingPoolAddress || !user || !publicClient) return null;
    
    try {
      const result = await publicClient.readContract({
        address: lendingPoolAddress,
        abi: lendingPoolAbi,
        functionName: 'calculateInterest',
        args: [user],
      });
      
      return result as bigint;
    } catch (error) {
      console.error('Error calculating interest:', error);
      return null;
    }
  };

  return {
    lendingPoolAddress,
    usdtAddress,
    platformTokenAddress,
    getUserLendingData,
    getHealthFactor,
    getPoolStats,
    depositCollateral,
    withdrawCollateral,
    borrow,
    repay,
    calculateInterest,
    isLoading,
  };
}

