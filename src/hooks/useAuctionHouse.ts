import { useState } from 'react';
import { useAccount, useWriteContract, usePublicClient } from 'wagmi';
import { parseUnits } from 'viem';
import { toast } from 'sonner';
import { auctionHouseAbi } from '@lib/contracts/abi/auctionHouse';
import { erc20Abi } from '@lib/contracts/abi/erc20';
import addresses from '@lib/contracts/addresses.json';

export interface Auction {
  listingId: bigint;
  tokenId: bigint;
  seller: `0x${string}`;
  reservePrice: bigint;
  currentBid: bigint;
  currentBidder: `0x${string}`;
  startTime: bigint;
  endTime: bigint;
  isActive: boolean;
  isSettled: boolean;
}

export interface Bid {
  bidder: `0x${string}`;
  amount: bigint;
  timestamp: bigint;
}

export function useAuctionHouse() {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();
  const publicClient = usePublicClient();
  const [isLoading, setIsLoading] = useState(false);

  const auctionHouseAddress = ((addresses.contracts as any).AuctionHouse || 
    (addresses.contracts as any).auctionHouse) as `0x${string}` | undefined;

  // Place bid
  const placeBid = async (listingId: bigint, bidAmount: string, paymentToken: `0x${string}`) => {
    if (!auctionHouseAddress || !address) {
      toast.error('Please connect your wallet');
      return;
    }

    setIsLoading(true);
    try {
      const bidAmountWei = parseUnits(bidAmount, paymentToken === addresses.contracts.MockUSDT ? 6 : 18);

      // Check allowance
      const allowance = await publicClient?.readContract({
        address: paymentToken,
        abi: erc20Abi,
        functionName: 'allowance',
        args: [address, auctionHouseAddress],
      });

      if (!allowance || allowance < bidAmountWei) {
        // Approve first
        await writeContractAsync({
          address: paymentToken,
          abi: erc20Abi,
          functionName: 'approve',
          args: [auctionHouseAddress, bidAmountWei],
        });
        toast.info('Approval submitted. Please wait...');
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }

      const hash = await writeContractAsync({
        address: auctionHouseAddress,
        abi: auctionHouseAbi,
        functionName: 'placeBid',
        args: [listingId, bidAmountWei],
      });

      toast.success('Bid placed!');
      return hash;
    } catch (error: any) {
      console.error('Error placing bid:', error);
      toast.error(error?.shortMessage || 'Failed to place bid');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Settle auction
  const settleAuction = async (listingId: bigint) => {
    if (!auctionHouseAddress || !address) {
      toast.error('Please connect your wallet');
      return;
    }

    setIsLoading(true);
    try {
      const hash = await writeContractAsync({
        address: auctionHouseAddress,
        abi: auctionHouseAbi,
        functionName: 'settleAuction',
        args: [listingId],
      });

      toast.success('Auction settled!');
      return hash;
    } catch (error: any) {
      console.error('Error settling auction:', error);
      toast.error(error?.shortMessage || 'Failed to settle auction');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Get auction
  const getAuction = async (listingId: bigint): Promise<Auction | null> => {
    if (!auctionHouseAddress || !publicClient) return null;
    try {
      const result = await publicClient.readContract({
        address: auctionHouseAddress,
        abi: auctionHouseAbi,
        functionName: 'getAuction',
        args: [listingId],
      });
      return result as Auction;
    } catch (error) {
      console.error('Error fetching auction:', error);
      return null;
    }
  };

  // Get bid history
  const getBidHistory = async (listingId: bigint): Promise<Bid[]> => {
    if (!auctionHouseAddress || !publicClient) return [];
    try {
      const result = await publicClient.readContract({
        address: auctionHouseAddress,
        abi: auctionHouseAbi,
        functionName: 'getBidHistory',
        args: [listingId],
      });
      return result as Bid[];
    } catch (error) {
      console.error('Error fetching bid history:', error);
      return [];
    }
  };

  // Get minimum bid increment
  const getMinBidIncrement = async (): Promise<number> => {
    if (!auctionHouseAddress || !publicClient) return 500; // Default 5%
    try {
      const result = await publicClient.readContract({
        address: auctionHouseAddress,
        abi: auctionHouseAbi,
        functionName: 'minBidIncrementBps',
      });
      return Number(result);
    } catch (error) {
      console.error('Error fetching min bid increment:', error);
      return 500;
    }
  };

  return {
    auctionHouseAddress,
    isLoading,
    placeBid,
    settleAuction,
    getAuction,
    getBidHistory,
    getMinBidIncrement,
  };
}

