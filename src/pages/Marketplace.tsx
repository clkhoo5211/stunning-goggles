import { useState, useEffect, useCallback } from 'react';
import { useAccount, useReadContract, usePublicClient } from 'wagmi';
import { useNFTMarketplace, ListingType, NFTListing } from '@hooks/useNFTMarketplace';
import { ListingCard, BidModal } from '@components/marketplace';
import { useAuctionHouse } from '@hooks/useAuctionHouse';
import { nftMarketplaceAbi } from '@lib/contracts/abi/nftMarketplace';
import addresses from '@lib/contracts/addresses.json';

export default function Marketplace() {
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const { getListing, buyNFT, cancelListing, isLoading: marketplaceLoading } = useNFTMarketplace();
  const { getAuction, getMinBidIncrement } = useAuctionHouse();
  const [listings, setListings] = useState<NFTListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedListing, setSelectedListing] = useState<NFTListing | null>(null);
  const [selectedAuction, setSelectedAuction] = useState<any>(null);
  const [showBidModal, setShowBidModal] = useState(false);
  const [filter, setFilter] = useState<'all' | 'fixed' | 'auction'>('all');

  const marketplaceAddress = ((addresses.contracts as any).NFTMarketplace || 
    (addresses.contracts as any).nftMarketplace) as `0x${string}` | undefined;

  // Read nextListingId to know how many listings exist
  const { data: nextListingId } = useReadContract({
    address: marketplaceAddress,
    abi: nftMarketplaceAbi,
    functionName: 'nextListingId',
    enabled: !!marketplaceAddress,
  });

  useEffect(() => {
    if (nextListingId !== undefined && publicClient && marketplaceAddress) {
      loadListings();
    }
  }, [nextListingId, publicClient, marketplaceAddress]);

  const loadListings = useCallback(async () => {
    if (!publicClient || !marketplaceAddress || nextListingId === undefined) {
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      // Fetch all listings by iterating through listing IDs
      // Listing IDs start at 1 and go up to nextListingId - 1
      const allListings: NFTListing[] = [];
      
      // Fetch listings in batches to avoid too many RPC calls
      const batchSize = 10;
      const maxListingId = Number(nextListingId);
      
      for (let i = 1; i < maxListingId; i += batchSize) {
        const batchPromises = [];
        for (let j = i; j < Math.min(i + batchSize, maxListingId); j++) {
          batchPromises.push(
            publicClient.readContract({
              address: marketplaceAddress,
              abi: nftMarketplaceAbi,
              functionName: 'getListing',
              args: [BigInt(j)],
            }).catch(() => null) // Ignore errors for non-existent listings
          );
        }
        
        const batchResults = await Promise.all(batchPromises);
        const validListings = batchResults
          .filter((listing): listing is NFTListing => 
            listing !== null && 
            listing !== undefined && 
            (listing as any).tokenId !== undefined &&
            (listing as any).tokenId > 0n && // Listing exists if tokenId > 0
            (listing as any).isActive === true // Only show active listings
          ) as NFTListing[];
        
        allListings.push(...validListings);
      }
      
      // Filter out settled auctions using centralized logic
      // Check each auction listing to see if it's settled
      const filteredListings: NFTListing[] = [];
      for (const listing of allListings) {
        if (listing.listingType === ListingType.AUCTION) {
          const auction = await getAuction(listing.listingId);
          // Only include if auction is not settled
          if (!auction || !auction.isSettled) {
            filteredListings.push(listing);
          }
        } else {
          // Fixed price listings are already filtered by isActive
          filteredListings.push(listing);
        }
      }
      
      setListings(filteredListings);
    } catch (error) {
      console.error('Error loading listings:', error);
      setListings([]);
    } finally {
      setLoading(false);
    }
  }, [publicClient, marketplaceAddress, nextListingId]);

  // Refresh listings when address changes (user connects/disconnects)
  useEffect(() => {
    if (nextListingId !== undefined && publicClient && marketplaceAddress) {
      loadListings();
    }
  }, [address, loadListings, nextListingId, publicClient, marketplaceAddress]);

  const handleBuy = async (listingId: bigint) => {
    try {
      await buyNFT(listingId);
      loadListings();
    } catch (error) {
      // Error handled in hook
    }
  };

  const handleCancel = async (listingId: bigint) => {
    try {
      await cancelListing(listingId);
      loadListings();
    } catch (error) {
      // Error handled in hook
    }
  };

  const handleBid = async (listing: NFTListing) => {
    if (listing.listingType === ListingType.AUCTION) {
      const auction = await getAuction(listing.listingId);
      const minBidIncrement = await getMinBidIncrement();
      setSelectedListing(listing);
      // If auction is null or not initialized, create a default structure with currentBid = 0
      const auctionData = auction || {
        listingId: listing.listingId,
        tokenId: listing.tokenId,
        seller: listing.seller,
        reservePrice: listing.price,
        currentBid: 0n,
        currentBidder: '0x0000000000000000000000000000000000000000' as `0x${string}`,
        startTime: listing.startTime,
        endTime: listing.endTime,
        isActive: false,
        isSettled: false,
      };
      setSelectedAuction({ 
        currentBid: auctionData.currentBid, 
        minBidIncrementBps: minBidIncrement 
      });
      setShowBidModal(true);
    }
  };

  const filteredListings = listings.filter((listing) => {
    if (filter === 'all') return true;
    if (filter === 'fixed') return listing.listingType === ListingType.FIXED_PRICE;
    if (filter === 'auction') return listing.listingType === ListingType.AUCTION;
    return true;
  });

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">NFT Marketplace</h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Browse and trade game NFTs
          </p>
        </div>
        <button
          onClick={loadListings}
          disabled={loading}
          className="px-4 py-2 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:cursor-not-allowed text-white rounded-md font-medium transition-colors text-sm"
        >
          {loading ? 'Loading...' : 'Refresh'}
        </button>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            filter === 'all'
              ? 'bg-cyan-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('fixed')}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            filter === 'fixed'
              ? 'bg-green-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Fixed Price
        </button>
        <button
          onClick={() => setFilter('auction')}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            filter === 'auction'
              ? 'bg-purple-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Auctions
        </button>
      </div>

      {/* Listings Grid */}
      {loading ? (
        <div className="text-center py-12">
          <div className="text-slate-400">Loading listings...</div>
        </div>
      ) : filteredListings.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🎲</div>
          <div className="text-slate-400 text-lg mb-2">No listings found</div>
          <div className="text-slate-500 text-sm">
            Check back later for new NFT listings
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredListings.map((listing) => (
            <ListingCard
              key={listing.listingId.toString()}
              listing={listing}
              onBuy={handleBuy}
              onCancel={handleCancel}
              onBid={() => handleBid(listing)}
            />
          ))}
        </div>
      )}

      {/* Bid Modal */}
      {selectedListing && selectedAuction && (
        <BidModal
          isOpen={showBidModal}
          onClose={() => {
            setShowBidModal(false);
            setSelectedListing(null);
            setSelectedAuction(null);
          }}
          listing={selectedListing}
          auction={selectedAuction}
          onSuccess={() => {
            loadListings();
            setShowBidModal(false);
            setSelectedListing(null);
            setSelectedAuction(null);
          }}
        />
      )}
    </div>
  );
}

