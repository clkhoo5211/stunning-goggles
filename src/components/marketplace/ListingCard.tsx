import { useState, useEffect } from 'react';
import { formatUnits } from 'viem';
import { NFTListing, ListingType } from '@hooks/useNFTMarketplace';
import { Link } from 'react-router-dom';
import { useAccount, usePublicClient } from 'wagmi';
import { useNFTRegistry } from '@hooks/useNFTRegistry';
import { useAuctionHouse } from '@hooks/useAuctionHouse';
import addresses from '@lib/contracts/addresses.json';

interface ListingCardProps {
  listing: NFTListing;
  onBuy?: (listingId: bigint) => void;
  onCancel?: (listingId: bigint) => void;
  onBid?: (listingId: bigint) => void;
}

export function ListingCard({ listing, onBuy, onCancel, onBid }: ListingCardProps) {
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const { getNFT } = useNFTRegistry();
  const { getAuction } = useAuctionHouse();
  const [isOwner, setIsOwner] = useState(false);
  const [isSettled, setIsSettled] = useState(false);
  const isAuction = listing.listingType === ListingType.AUCTION;
  const isExpired = isAuction && listing.endTime > 0n && BigInt(Math.floor(Date.now() / 1000)) > listing.endTime;

  // Check actual NFT owner and auction settlement status
  useEffect(() => {
    const checkOwnership = async () => {
      if (!address || !publicClient) return;
      
      try {
        // Get actual NFT owner
        const nft = await getNFT(listing.tokenId);
        if (nft) {
          const actualOwner = nft.owner.toLowerCase();
          const connectedAddress = address.toLowerCase();
          // Owner is either the original seller OR the current NFT owner (after transfer)
          setIsOwner(actualOwner === connectedAddress || listing.seller.toLowerCase() === connectedAddress);
        }
        
        // For auctions, check if settled
        if (isAuction) {
          const auction = await getAuction(listing.listingId);
          if (auction) {
            setIsSettled(auction.isSettled);
          }
        }
      } catch (error) {
        console.error('Error checking ownership:', error);
      }
    };
    
    checkOwnership();
  }, [address, listing, getNFT, getAuction, isAuction, publicClient]);

  // Get token addresses from config
  const usdtAddress = (addresses.contracts as any).MockUSDT?.toLowerCase() as string | undefined;
  const platformTokenAddress = (addresses.contracts as any).MockPlatformToken?.toLowerCase() as string | undefined;
  
  // Determine decimals and symbol based on payment token
  const paymentTokenLower = listing.paymentToken.toLowerCase();
  const isUSDT = usdtAddress && paymentTokenLower === usdtAddress.toLowerCase();
  const isPlatformToken = platformTokenAddress && paymentTokenLower === platformTokenAddress.toLowerCase();
  
  // USDT has 6 decimals, Platform Token has 18 decimals
  const decimals = isUSDT ? 6 : 18;
  const tokenSymbol = isUSDT ? 'USDT' : (isPlatformToken ? 'PLATFORM' : 'TOKEN');
  
  const price = formatUnits(listing.price, decimals);

  const formatTime = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) * 1000);
    return date.toLocaleString();
  };

  return (
    <div className="bg-slate-800/50 rounded-lg p-4 sm:p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
      {/* NFT Image Placeholder */}
      <div className="w-full aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
        <div className="text-4xl sm:text-6xl">🎲</div>
      </div>

      {/* Listing Info */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-bold text-white">
            NFT #{listing.tokenId.toString()}
          </h3>
          <span className={`px-2 py-1 rounded text-xs sm:text-sm font-medium ${
            isAuction 
              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
              : 'bg-green-500/20 text-green-300 border border-green-500/30'
          }`}>
            {isAuction ? 'Auction' : 'Fixed Price'}
          </span>
        </div>

        {/* Price */}
        <div className="bg-slate-900/50 rounded-md p-3">
          <div className="text-xs sm:text-sm text-slate-400 mb-1">Price</div>
          <div className="text-xl sm:text-2xl font-bold text-white">
            {price} {tokenSymbol}
          </div>
        </div>

        {/* Auction Info */}
        {isAuction && (
          <div className="space-y-2">
            {!isExpired ? (
              <div className="text-xs sm:text-sm text-slate-400">
                Ends: {formatTime(listing.endTime)}
              </div>
            ) : (
              <div className="text-xs sm:text-sm text-red-400 font-semibold">
                Auction Ended
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Link
            to={`/nft/${listing.tokenId.toString()}`}
            className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-md text-sm sm:text-base font-medium transition-colors text-center"
          >
            View Details
          </Link>
          {isOwner && !isSettled ? (
            onCancel && (
              <button
                onClick={() => onCancel(listing.listingId)}
                className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm sm:text-base font-medium transition-colors"
              >
                Cancel
              </button>
            )
          ) : !isOwner && !isSettled ? (
            <>
              {isAuction && onBid && !isExpired && (
                <button
                  onClick={() => onBid(listing.listingId)}
                  className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm sm:text-base font-medium transition-colors"
                >
                  Place Bid
                </button>
              )}
              {!isAuction && onBuy && (
                <button
                  onClick={() => onBuy(listing.listingId)}
                  className="flex-1 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md text-sm sm:text-base font-medium transition-colors"
                >
                  Buy Now
                </button>
              )}
            </>
          ) : isSettled ? (
            <div className="flex-1 px-4 py-2 bg-slate-600 text-slate-400 rounded-md text-sm sm:text-base font-medium text-center cursor-not-allowed">
              Auction Completed
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

