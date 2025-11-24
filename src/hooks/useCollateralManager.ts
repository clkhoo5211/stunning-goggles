import { useMemo } from 'react';
import { useAccount, usePublicClient } from 'wagmi';
import { formatUnits } from 'viem';
import { collateralManagerAbi } from '@lib/contracts/abi/collateralManager';
import addresses from '@lib/contracts/addresses.json';

export interface CollateralConfig {
  token: `0x${string}`;
  collateralFactor: bigint; // e.g., 8000 = 80%
  liquidationThreshold: bigint; // e.g., 8500 = 85%
  liquidationBonus: bigint; // e.g., 500 = 5%
  isEnabled: boolean;
}

export interface UserCollateral {
  token: `0x${string}`;
  amount: bigint;
  value: bigint; // Value in USD (scaled)
}

export function useCollateralManager() {
  const { address } = useAccount();
  const publicClient = usePublicClient();

  const collateralManagerAddress = ((addresses.contracts as any).CollateralManager || 
    (addresses.contracts as any).collateralManager) as `0x${string}` | undefined;

  // Get collateral configuration for a token
  const getCollateralConfig = async (token: `0x${string}`): Promise<CollateralConfig | null> => {
    if (!collateralManagerAddress || !publicClient) return null;
    
    try {
      const result = await publicClient.readContract({
        address: collateralManagerAddress,
        abi: collateralManagerAbi,
        functionName: 'getCollateralConfig',
        args: [token],
      });
      
      return result as CollateralConfig;
    } catch (error) {
      console.error('Error fetching collateral config:', error);
      return null;
    }
  };

  // Get user's collateral balance for a specific token
  const getCollateralBalance = async (
    userAddress: `0x${string}`,
    token: `0x${string}`
  ): Promise<bigint | null> => {
    if (!collateralManagerAddress || !publicClient) return null;
    
    try {
      const result = await publicClient.readContract({
        address: collateralManagerAddress,
        abi: collateralManagerAbi,
        functionName: 'getCollateralBalance',
        args: [userAddress, token],
      });
      
      return result as bigint;
    } catch (error) {
      console.error('Error fetching collateral balance:', error);
      return null;
    }
  };

  // Get total collateral value for a user
  const getTotalCollateralValue = async (
    userAddress?: `0x${string}`
  ): Promise<{ totalValue: bigint; collaterals: UserCollateral[] } | null> => {
    const user = userAddress || address;
    if (!collateralManagerAddress || !user || !publicClient) return null;
    
    try {
      const result = await publicClient.readContract({
        address: collateralManagerAddress,
        abi: collateralManagerAbi,
        functionName: 'getTotalCollateralValue',
        args: [user],
      });
      
      return {
        totalValue: result[0] as bigint,
        collaterals: result[1] as UserCollateral[],
      };
    } catch (error) {
      console.error('Error fetching total collateral value:', error);
      return null;
    }
  };

  // Calculate maximum borrowable amount for a user
  const calculateMaxBorrow = async (userAddress?: `0x${string}`): Promise<bigint | null> => {
    const user = userAddress || address;
    if (!collateralManagerAddress || !user || !publicClient) return null;
    
    try {
      // Get collateral value first for debugging
      const collateralData = await getTotalCollateralValue(user);
      console.log('[calculateMaxBorrow] Collateral data:', {
        totalValue: collateralData?.totalValue.toString(),
        collaterals: collateralData?.collaterals.map(c => ({
          token: c.token,
          amount: c.amount.toString(),
          value: c.value.toString()
        }))
      });
      
      const result = await publicClient.readContract({
        address: collateralManagerAddress,
        abi: collateralManagerAbi,
        functionName: 'calculateMaxBorrow',
        args: [user],
      });
      
      console.log('[calculateMaxBorrow] Raw maxBorrow from contract:', result.toString());
      console.log('[calculateMaxBorrow] MaxBorrow in PLATFORM (18 decimals):', formatUnits(result as bigint, 18));
      
      // NOTE: There's a contract bug - calculateMaxBorrow returns value in collateral token decimals (6 for USDT)
      // but should return in platform token decimals (18). This needs to be fixed in the contract.
      // For now, if the value seems too small, it's likely in 6 decimals and needs normalization
      const resultBigInt = result as bigint;
      if (resultBigInt > 0n && resultBigInt < 1000000n) {
        console.warn('[calculateMaxBorrow] WARNING: Max borrow value seems too small. Contract may be returning value in wrong decimals.');
        console.warn('[calculateMaxBorrow] This is a known contract bug - values should be normalized to 18 decimals.');
      }
      
      return resultBigInt;
    } catch (error) {
      console.error('Error calculating max borrow:', error);
      return null;
    }
  };

  // Check if user can be liquidated
  const canLiquidate = async (
    userAddress?: `0x${string}`
  ): Promise<{ canLiquidate: boolean; healthFactor: bigint } | null> => {
    const user = userAddress || address;
    if (!collateralManagerAddress || !user || !publicClient) return null;
    
    try {
      const result = await publicClient.readContract({
        address: collateralManagerAddress,
        abi: collateralManagerAbi,
        functionName: 'canLiquidate',
        args: [user],
      });
      
      return {
        canLiquidate: result[0] as boolean,
        healthFactor: result[1] as bigint,
      };
    } catch (error) {
      console.error('Error checking liquidation status:', error);
      return null;
    }
  };

  // Calculate health factor with borrowed amount
  const calculateHealthFactor = async (
    userAddress: `0x${string}`,
    borrowedAmount: bigint
  ): Promise<bigint | null> => {
    if (!collateralManagerAddress || !publicClient) return null;
    
    try {
      const result = await publicClient.readContract({
        address: collateralManagerAddress,
        abi: collateralManagerAbi,
        functionName: 'calculateHealthFactor',
        args: [userAddress, borrowedAmount],
      });
      
      return result as bigint;
    } catch (error) {
      console.error('Error calculating health factor:', error);
      return null;
    }
  };

  return {
    collateralManagerAddress,
    getCollateralConfig,
    getCollateralBalance,
    getTotalCollateralValue,
    calculateMaxBorrow,
    canLiquidate,
    calculateHealthFactor,
  };
}

