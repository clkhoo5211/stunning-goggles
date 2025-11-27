import { useState } from 'react';
import { useAccount, useWriteContract, usePublicClient } from 'wagmi';
import { parseUnits } from 'viem';
import { toast } from 'sonner';
import { offerSystemAbi } from '@lib/contracts/abi/offerSystem';
import { erc20Abi } from '@lib/contracts/abi/erc20';
import addresses from '@lib/contracts/addresses.json';

export interface Offer {
  offerId: bigint;
  tokenId: bigint;
  offerer: `0x${string}`;
  amount: bigint;
  paymentToken: `0x${string}`;
  expirationTime: bigint;
  isActive: boolean;
  isAccepted: boolean;
}

export function useOfferSystem() {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();
  const publicClient = usePublicClient();
  const [isLoading, setIsLoading] = useState(false);

  const offerSystemAddress = ((addresses.contracts as any).OfferSystem || 
    (addresses.contracts as any).offerSystem) as `0x${string}` | undefined;

  // Create offer
  const createOffer = async (
    tokenId: bigint,
    amount: string,
    paymentToken: `0x${string}`,
    expirationDays?: number
  ) => {
    if (!offerSystemAddress || !address) {
      toast.error('Please connect your wallet');
      return;
    }

    setIsLoading(true);
    try {
      const amountWei = parseUnits(amount, paymentToken === addresses.contracts.MockUSDT ? 6 : 18);
      
      // Get current block timestamp from blockchain to ensure expiration is in the future
      let currentBlockTime: bigint;
      if (publicClient) {
        try {
          const block = await publicClient.getBlock();
          currentBlockTime = BigInt(block.timestamp);
        } catch (error) {
          // Fallback to system time if blockchain time unavailable
          currentBlockTime = BigInt(Math.floor(Date.now() / 1000));
        }
      } else {
        currentBlockTime = BigInt(Math.floor(Date.now() / 1000));
      }
      
      // Calculate expiration: use expirationDays, or default 7 days
      const days = expirationDays || 7;
      const expiration = currentBlockTime + BigInt(days * 24 * 60 * 60);
      
      // Validate expiration is in the future
      if (expiration <= currentBlockTime) {
        toast.error('Expiration time must be in the future');
        throw new Error('Expiration time must be in the future');
      }

      // Check allowance
      const allowance = await publicClient?.readContract({
        address: paymentToken,
        abi: erc20Abi,
        functionName: 'allowance',
        args: [address, offerSystemAddress],
      });

      if (!allowance || allowance < amountWei) {
        // Approve first
        await writeContractAsync({
          address: paymentToken,
          abi: erc20Abi,
          functionName: 'approve',
          args: [offerSystemAddress, amountWei],
          gas: 100000n, // ERC20 approve typically needs ~46k gas, 100k is safe
        });
        toast.info('Approval submitted. Please wait...');
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }

      const hash = await writeContractAsync({
        address: offerSystemAddress,
        abi: offerSystemAbi,
        functionName: 'createOffer',
        args: [tokenId, amountWei, paymentToken, expiration],
      });

      toast.success('Offer created successfully!');
      return hash;
    } catch (error: any) {
      console.error('Error creating offer:', error);
      toast.error(error?.shortMessage || 'Failed to create offer');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Accept offer
  const acceptOffer = async (offerId: bigint) => {
    if (!offerSystemAddress || !address) {
      toast.error('Please connect your wallet');
      return;
    }

    setIsLoading(true);
    try {
      const hash = await writeContractAsync({
        address: offerSystemAddress,
        abi: offerSystemAbi,
        functionName: 'acceptOffer',
        args: [offerId],
      });

      toast.success('Offer accepted!');
      return hash;
    } catch (error: any) {
      console.error('Error accepting offer:', error);
      toast.error(error?.shortMessage || 'Failed to accept offer');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Cancel offer
  const cancelOffer = async (offerId: bigint) => {
    if (!offerSystemAddress || !address) {
      toast.error('Please connect your wallet');
      return;
    }

    setIsLoading(true);
    try {
      const hash = await writeContractAsync({
        address: offerSystemAddress,
        abi: offerSystemAbi,
        functionName: 'cancelOffer',
        args: [offerId],
      });

      toast.success('Offer cancelled!');
      return hash;
    } catch (error: any) {
      console.error('Error cancelling offer:', error);
      toast.error(error?.shortMessage || 'Failed to cancel offer');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Get offer
  const getOffer = async (offerId: bigint): Promise<Offer | null> => {
    if (!offerSystemAddress || !publicClient) return null;
    try {
      const result = await publicClient.readContract({
        address: offerSystemAddress,
        abi: offerSystemAbi,
        functionName: 'getOffer',
        args: [offerId],
      });
      return result as Offer;
    } catch (error) {
      console.error('Error fetching offer:', error);
      return null;
    }
  };

  // Get token offers
  const getTokenOffers = async (tokenId: bigint): Promise<Offer[]> => {
    if (!offerSystemAddress || !publicClient) return [];
    try {
      const result = await publicClient.readContract({
        address: offerSystemAddress,
        abi: offerSystemAbi,
        functionName: 'getTokenOffers',
        args: [tokenId],
      });
      
      // Get current block timestamp to filter expired offers
      const block = await publicClient.getBlock();
      const currentTime = BigInt(block.timestamp);
      
      return (result as Offer[]).filter((o) => 
        o.isActive && 
        !o.isAccepted && 
        o.expirationTime > currentTime // Only show non-expired offers
      );
    } catch (error) {
      console.error('Error fetching token offers:', error);
      return [];
    }
  };

  // Get offerer offers
  const getOffererOffers = async (offerer: `0x${string}`): Promise<Offer[]> => {
    if (!offerSystemAddress || !publicClient) return [];
    try {
      const result = await publicClient.readContract({
        address: offerSystemAddress,
        abi: offerSystemAbi,
        functionName: 'getOffererOffers',
        args: [offerer],
      });
      
      // Get current block timestamp to filter expired offers
      const block = await publicClient.getBlock();
      const currentTime = BigInt(block.timestamp);
      
      // Return all offers (active, accepted, expired) so users can see their offer history
      // But mark expired ones as inactive
      return (result as Offer[]).map((o) => ({
        ...o,
        isActive: o.isActive && !o.isAccepted && o.expirationTime > currentTime,
      }));
    } catch (error) {
      console.error('Error fetching offerer offers:', error);
      return [];
    }
  };

  return {
    offerSystemAddress,
    isLoading,
    createOffer,
    acceptOffer,
    cancelOffer,
    getOffer,
    getTokenOffers,
    getOffererOffers,
  };
}

