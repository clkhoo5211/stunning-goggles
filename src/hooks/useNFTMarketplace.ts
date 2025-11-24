import { useState } from 'react';
import { useAccount, useWriteContract, usePublicClient } from 'wagmi';
import { parseUnits } from 'viem';
import { toast } from 'sonner';
import { nftMarketplaceAbi } from '@lib/contracts/abi/nftMarketplace';
import { erc20Abi } from '@lib/contracts/abi/erc20';
import addresses from '@lib/contracts/addresses.json';

export interface NFTListing {
  listingId: bigint;
  tokenId: bigint;
  seller: `0x${string}`;
  price: bigint;
  paymentToken: `0x${string}`;
  listingType: number; // 0 = FIXED_PRICE, 1 = AUCTION
  startTime: bigint;
  endTime: bigint;
  isActive: boolean;
}

export enum ListingType {
  FIXED_PRICE = 0,
  AUCTION = 1,
}

export function useNFTMarketplace() {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();
  const publicClient = usePublicClient();
  const [isLoading, setIsLoading] = useState(false);

  const marketplaceAddress = ((addresses.contracts as any).NFTMarketplace || 
    (addresses.contracts as any).nftMarketplace) as `0x${string}` | undefined;
  const usdtAddress = addresses.contracts.MockUSDT as `0x${string}`;
  const platformTokenAddress = addresses.contracts.MockPlatformToken as `0x${string}`;

  // Create listing
  const createListing = async (
    tokenId: bigint,
    price: string,
    paymentToken: `0x${string}`,
    listingType: ListingType,
    duration?: number // For auctions, in seconds
  ) => {
    if (!marketplaceAddress || !address) {
      toast.error('Please connect your wallet');
      return;
    }

    setIsLoading(true);
    try {
      const priceWei = parseUnits(price, paymentToken === usdtAddress ? 6 : 18);
      const durationSeconds = duration || 0;

      const hash = await writeContractAsync({
        address: marketplaceAddress,
        abi: nftMarketplaceAbi,
        functionName: 'createListing',
        args: [
          {
            tokenId,
            price: priceWei,
            paymentToken,
            listingType,
            duration: BigInt(durationSeconds),
          },
        ],
      });

      toast.success('Listing created! Transaction submitted.');
      return hash;
    } catch (error: any) {
      console.error('Error creating listing:', error);
      toast.error(error?.shortMessage || error?.message || 'Failed to create listing');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Buy NFT (fixed price)
  const buyNFT = async (listingId: bigint) => {
    if (!marketplaceAddress || !address) {
      toast.error('Please connect your wallet');
      return;
    }

    setIsLoading(true);
    try {
      // First, get listing to check price and payment token
      const listing = await publicClient?.readContract({
        address: marketplaceAddress,
        abi: nftMarketplaceAbi,
        functionName: 'getListing',
        args: [listingId],
      }) as NFTListing | undefined;

      if (!listing) {
        toast.error('Listing not found');
        return;
      }

      // Approve token if needed
      const balance = await publicClient?.readContract({
        address: listing.paymentToken,
        abi: erc20Abi,
        functionName: 'balanceOf',
        args: [address],
      });

      if (!balance || balance < listing.price) {
        toast.error('Insufficient balance');
        return;
      }

      const allowance = await publicClient?.readContract({
        address: listing.paymentToken,
        abi: erc20Abi,
        functionName: 'allowance',
        args: [address, marketplaceAddress],
      });

      if (!allowance || allowance < listing.price) {
        // Approve first
        await writeContractAsync({
          address: listing.paymentToken,
          abi: erc20Abi,
          functionName: 'approve',
          args: [marketplaceAddress, listing.price],
        });
        toast.info('Approval transaction submitted. Please wait...');
        // Wait a bit for approval
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }

      // Buy NFT
      const hash = await writeContractAsync({
        address: marketplaceAddress,
        abi: nftMarketplaceAbi,
        functionName: 'buyNFT',
        args: [listingId],
      });

      toast.success('Purchase submitted!');
      return hash;
    } catch (error: any) {
      console.error('Error buying NFT:', error);
      toast.error(error?.shortMessage || 'Failed to buy NFT');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Cancel listing
  const cancelListing = async (listingId: bigint) => {
    if (!marketplaceAddress || !address) {
      toast.error('Please connect your wallet');
      return;
    }

    setIsLoading(true);
    try {
      const hash = await writeContractAsync({
        address: marketplaceAddress,
        abi: nftMarketplaceAbi,
        functionName: 'cancelListing',
        args: [listingId],
      });

      toast.success('Listing cancelled!');
      return hash;
    } catch (error: any) {
      console.error('Error cancelling listing:', error);
      toast.error(error?.shortMessage || 'Failed to cancel listing');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Get listing
  const getListing = async (listingId: bigint): Promise<NFTListing | null> => {
    if (!marketplaceAddress || !publicClient) return null;
    try {
      const result = await publicClient.readContract({
        address: marketplaceAddress,
        abi: nftMarketplaceAbi,
        functionName: 'getListing',
        args: [listingId],
      });
      return result as NFTListing;
    } catch (error) {
      console.error('Error fetching listing:', error);
      return null;
    }
  };

  // Get token listings
  const getTokenListings = async (tokenId: bigint): Promise<NFTListing[]> => {
    if (!marketplaceAddress || !publicClient) return [];
    try {
      const result = await publicClient.readContract({
        address: marketplaceAddress,
        abi: nftMarketplaceAbi,
        functionName: 'getTokenListings',
        args: [tokenId],
      });
      return (result as NFTListing[]).filter((l) => l.isActive);
    } catch (error) {
      console.error('Error fetching token listings:', error);
      return [];
    }
  };

  // Get seller listings
  const getSellerListings = async (seller: `0x${string}`): Promise<NFTListing[]> => {
    if (!marketplaceAddress || !publicClient) return [];
    try {
      const result = await publicClient.readContract({
        address: marketplaceAddress,
        abi: nftMarketplaceAbi,
        functionName: 'getSellerListings',
        args: [seller],
      });
      return (result as NFTListing[]).filter((l) => l.isActive);
    } catch (error) {
      console.error('Error fetching seller listings:', error);
      return [];
    }
  };

  return {
    marketplaceAddress,
    usdtAddress,
    platformTokenAddress,
    isLoading,
    createListing,
    buyNFT,
    cancelListing,
    getListing,
    getTokenListings,
    getSellerListings,
  };
}

