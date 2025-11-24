import { useMemo } from 'react';
import { useAccount } from 'wagmi';
import { useNFTMarketplace, ListingType, NFTListing } from '@hooks/useNFTMarketplace';
import { useAuctionHouse } from '@hooks/useAuctionHouse';

export interface ListingStatus {
  hasActiveListing: boolean;
  activeListings: NFTListing[];
  settledListings: NFTListing[];
  userListings: NFTListing[]; // Listings where user is the seller
  canList: boolean; // Whether user can create a new listing
}

/**
 * Centralized hook for checking NFT listing status
 * Handles all logic for active listings, settled auctions, and user ownership
 */
export function useNFTListings() {
  const { address } = useAccount();
  const { getTokenListings } = useNFTMarketplace();
  const { getAuction } = useAuctionHouse();

  /**
   * Check listing status for a specific NFT token
   * @param tokenId - The NFT token ID to check
   * @param options - Optional filters
   * @returns Promise with listing status
   */
  const checkListingStatus = async (
    tokenId: bigint,
    options?: {
      filterBySeller?: `0x${string}`; // Only return listings by this seller
      includeSettled?: boolean; // Include settled auctions in results
    }
  ): Promise<ListingStatus> => {
    try {
      const allListings = await getTokenListings(tokenId);
      
      // Separate active and settled listings
      const activeListings: NFTListing[] = [];
      const settledListings: NFTListing[] = [];
      
      for (const listing of allListings) {
        if (!listing.isActive) {
          continue; // Skip inactive listings
        }
        
        if (listing.listingType === ListingType.AUCTION) {
          // Check if auction is settled
          const auction = await getAuction(listing.listingId);
          if (auction && auction.isSettled) {
            if (options?.includeSettled) {
              settledListings.push(listing);
            }
            continue; // Skip settled auctions
          }
        }
        
        // Active, non-settled listing
        activeListings.push(listing);
      }
      
      // Filter by seller if specified
      let userListings: NFTListing[] = [];
      if (options?.filterBySeller) {
        const sellerLower = options.filterBySeller.toLowerCase();
        userListings = activeListings.filter(
          listing => listing.seller.toLowerCase() === sellerLower
        );
      } else if (address) {
        // Default to current user
        const addressLower = address.toLowerCase();
        userListings = activeListings.filter(
          listing => listing.seller.toLowerCase() === addressLower
        );
      }
      
      const hasActiveListing = activeListings.length > 0;
      const canList = !hasActiveListing; // Can list if no active listings exist
      
      return {
        hasActiveListing,
        activeListings,
        settledListings,
        userListings,
        canList,
      };
    } catch (error) {
      console.error(`Error checking listing status for NFT ${tokenId}:`, error);
      return {
        hasActiveListing: false,
        activeListings: [],
        settledListings: [],
        userListings: [],
        canList: true,
      };
    }
  };

  /**
   * Check if an NFT can be listed (no active, non-settled listings)
   * @param tokenId - The NFT token ID to check
   * @returns Promise<boolean>
   */
  const canListNFT = async (tokenId: bigint): Promise<boolean> => {
    const status = await checkListingStatus(tokenId);
    return status.canList;
  };

  /**
   * Get active listings for an NFT (excluding settled auctions)
   * @param tokenId - The NFT token ID
   * @returns Promise with active listings
   */
  const getActiveListings = async (tokenId: bigint): Promise<NFTListing[]> => {
    const status = await checkListingStatus(tokenId);
    return status.activeListings;
  };

  /**
   * Get user's active listings for an NFT
   * @param tokenId - The NFT token ID
   * @param userAddress - Optional user address (defaults to connected address)
   * @returns Promise with user's active listings
   */
  const getUserListings = async (
    tokenId: bigint,
    userAddress?: `0x${string}`
  ): Promise<NFTListing[]> => {
    const status = await checkListingStatus(tokenId, {
      filterBySeller: userAddress || address,
    });
    return status.userListings;
  };

  /**
   * Check if user has an active listing for an NFT
   * @param tokenId - The NFT token ID
   * @param userAddress - Optional user address (defaults to connected address)
   * @returns Promise<boolean>
   */
  const hasUserListing = async (
    tokenId: bigint,
    userAddress?: `0x${string}`
  ): Promise<boolean> => {
    const listings = await getUserListings(tokenId, userAddress);
    return listings.length > 0;
  };

  return {
    checkListingStatus,
    canListNFT,
    getActiveListings,
    getUserListings,
    hasUserListing,
  };
}

