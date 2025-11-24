import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { formatUnits } from 'viem';
import { useNFTRegistry } from '@hooks/useNFTRegistry';
import { useNFTMarketplace, ListingType } from '@hooks/useNFTMarketplace';
import { useNFTListings } from '@hooks/useNFTListings';
import { useAuctionHouse } from '@hooks/useAuctionHouse';
import { useOfferSystem } from '@hooks/useOfferSystem';
import { CreateListingModal, BidModal, OfferModal } from '@components/marketplace';
import { ListingCard } from '@components/marketplace';
import addresses from '@lib/contracts/addresses.json';

export default function NFTDetail() {
  const { tokenId } = useParams<{ tokenId: string }>();
  const { address } = useAccount();
  const { getNFT } = useNFTRegistry();
  const { buyNFT, createListing, isLoading: marketplaceLoading, getTokenListings } = useNFTMarketplace();
  const { getActiveListings } = useNFTListings();
  const { getAuction, getBidHistory, getMinBidIncrement } = useAuctionHouse();
  const { getTokenOffers, acceptOffer, cancelOffer, getOffererOffers } = useOfferSystem();
  
  const [nft, setNft] = useState<any>(null);
  const [listings, setListings] = useState<any[]>([]);
  const [offers, setOffers] = useState<any[]>([]); // Offers received (for owners)
  const [myOffers, setMyOffers] = useState<any[]>([]); // Offers made by current user
  const [auction, setAuction] = useState<any>(null);
  const [bidHistory, setBidHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateListing, setShowCreateListing] = useState(false);
  const [showBidModal, setShowBidModal] = useState(false);
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [selectedListing, setSelectedListing] = useState<any>(null);

  useEffect(() => {
    if (tokenId) {
      loadData();
    }
  }, [tokenId, address]);

  const loadData = async () => {
    if (!tokenId) return;
    setLoading(true);
    try {
      const tokenIdBigInt = BigInt(tokenId);
      
      // Load NFT
      const nftData = await getNFT(tokenIdBigInt);
      setNft(nftData);

      // Load active listings (excluding settled auctions) using centralized hook
      const activeListings = await getActiveListings(tokenIdBigInt);
      setListings(activeListings);
      
      // Also get all listings (including settled) for bid history
      const listingsData = await getTokenListings(tokenIdBigInt);

      // Load offers received (for NFT owners to see)
      const offersData = await getTokenOffers(tokenIdBigInt);
      setOffers(offersData);
      
      // Load offers made by current user (if connected)
      if (address) {
        const myOffersData = await getOffererOffers(address);
        // Filter to only show offers for this specific NFT
        const myOffersForThisNFT = myOffersData.filter((o) => o.tokenId === tokenIdBigInt);
        setMyOffers(myOffersForThisNFT);
      } else {
        setMyOffers([]);
      }

          // Load auction data for bid history (even if settled)
          // This allows showing bid history even after auction ends
          if (listingsData.length > 0) {
            const auctionListing = listingsData.find((l) => l.listingType === ListingType.AUCTION);
            if (auctionListing) {
              const auctionData = await getAuction(auctionListing.listingId);
              // Set auction data (even if settled) to show bid history
              setAuction(auctionData);
              if (auctionData) {
                const bids = await getBidHistory(auctionListing.listingId);
                setBidHistory(bids);
              }
            } else {
              setAuction(null);
            }
          } else {
            setAuction(null);
          }
    } catch (error) {
      console.error('Error loading NFT data:', error);
    } finally {
      setLoading(false);
    }
  };

  const isOwner = address?.toLowerCase() === nft?.owner.toLowerCase();
  const hasActiveListings = listings.length > 0;

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="text-slate-400">Loading NFT details...</div>
      </div>
    );
  }

  if (!nft) {
    return (
      <div className="text-center py-12">
        <div className="text-slate-400 text-lg mb-2">NFT not found</div>
        <Link to="/marketplace" className="text-cyan-400 hover:text-cyan-300">
          Back to Marketplace
        </Link>
      </div>
    );
  }

  const buffValue = Number(nft.buffConfig.buffValue) / 100;

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Back Button */}
      <Link
        to="/marketplace"
        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 text-sm sm:text-base"
      >
        ← Back to Marketplace
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* NFT Image */}
        <div className="w-full">
          <div className="w-full aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
            <div className="text-8xl sm:text-9xl">🎲</div>
          </div>
        </div>

        {/* NFT Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              {nft.skinName || `NFT #${nft.tokenId.toString()}`}
            </h1>
            <div className="text-slate-400 text-sm sm:text-base">
              Token ID: #{nft.tokenId.toString()}
            </div>
          </div>

          {/* Buff Info */}
          {nft.buffConfig.isActive && (
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">Buff Configuration</h3>
              <div className="space-y-2 text-sm sm:text-base">
                <div className="flex justify-between">
                  <span className="text-slate-400">Buff Type:</span>
                  <span className="text-white font-medium">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Buff Value:</span>
                  <span className="text-white font-medium">+{buffValue.toFixed(2)}%</span>
                </div>
              </div>
            </div>
          )}

          {/* Owner Actions */}
          {isOwner && (
            <div className="space-y-3">
              <button
                onClick={() => !hasActiveListings && setShowCreateListing(true)}
                disabled={hasActiveListings}
                className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
                  hasActiveListings
                    ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                    : 'bg-cyan-600 hover:bg-cyan-700 text-white'
                }`}
              >
                {hasActiveListings ? 'Listed' : 'List for Sale'}
              </button>
            </div>
          )}

          {/* Buyer Actions */}
          {!isOwner && address && (
            <div className="space-y-3">
              <button
                onClick={() => setShowOfferModal(true)}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Make Offer
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Auction Info Section (for owners to see their listing status) */}
      {listings.length > 0 && isOwner && (
        <div className="mt-8 sm:mt-12">
          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">Your Listing Status</h3>
            {listings.map((listing) => (
              <div key={listing.listingId.toString()} className="text-sm sm:text-base text-slate-300">
                {listing.listingType === ListingType.AUCTION ? (
                  <div>
                    <span className="text-slate-400">Auction Listing:</span>{' '}
                    <span className="text-white font-medium">
                      Reserve Price: {formatUnits(listing.price, listing.paymentToken.toLowerCase() === addresses.contracts.MockUSDT.toLowerCase() ? 6 : 18)}{' '}
                      {listing.paymentToken.toLowerCase() === addresses.contracts.MockUSDT.toLowerCase() ? 'USDT' : 'PLATFORM'}
                    </span>
                  </div>
                ) : (
                  <div>
                    <span className="text-slate-400">Fixed Price Listing:</span>{' '}
                    <span className="text-white font-medium">
                      {formatUnits(listing.price, listing.paymentToken.toLowerCase() === addresses.contracts.MockUSDT.toLowerCase() ? 6 : 18)}{' '}
                      {listing.paymentToken.toLowerCase() === addresses.contracts.MockUSDT.toLowerCase() ? 'USDT' : 'PLATFORM'}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Auction Actions for Non-Owners (and not the seller, and not the current owner) */}
      {listings.length > 0 && address && !isOwner && (
        <div className="mt-8 sm:mt-12">
          {listings.map((listing) => {
            // Don't show bid/buy buttons if:
            // 1. User is the original seller
            // 2. User is the current NFT owner (after settlement, winner becomes owner)
            // 3. Auction is settled
            const isSeller = address.toLowerCase() === listing.seller.toLowerCase();
            if (isSeller) return null;
            
            // Check if auction is settled
            if (listing.listingType === ListingType.AUCTION && auction?.isSettled) {
              return null;
            }

            if (listing.listingType === ListingType.AUCTION) {
              return (
                <div key={listing.listingId.toString()} className="space-y-3">
                  <button
                    onClick={async () => {
                      const auctionData = await getAuction(listing.listingId);
                      const minBidIncrement = await getMinBidIncrement();
                      setSelectedListing(listing);
                      setAuction(auctionData || {
                        listingId: listing.listingId,
                        tokenId: listing.tokenId,
                        seller: listing.seller,
                        reservePrice: listing.price,
                        currentBid: 0n,
                        currentBidder: '0x0000000000000000000000000000000000000000' as `0x${string}`,
                        startTime: listing.startTime,
                        endTime: listing.endTime,
                        isActive: true,
                        isSettled: false,
                      });
                      setShowBidModal(true);
                    }}
                    className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Place Bid
                  </button>
                </div>
              );
            } else {
              return (
                <div key={listing.listingId.toString()} className="space-y-3">
                  <button
                    onClick={async () => {
                      await buyNFT(listing.listingId);
                      loadData();
                    }}
                    className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                  >
                    Buy Now
                  </button>
                </div>
              );
            }
          })}
        </div>
      )}

      {/* Bid History Section (for auctions - show even if settled) */}
      {auction && bidHistory.length > 0 && (
        <div className="mt-8 sm:mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Bid History</h2>
          
          {/* User's Last Bid */}
          {address && (() => {
            const userBids = bidHistory.filter(
              (bid) => bid.bidder.toLowerCase() === address.toLowerCase()
            );
            const lastUserBid = userBids.length > 0 ? userBids[userBids.length - 1] : null;
            
            if (lastUserBid) {
              const auctionListing = listings.find((l) => l.listingType === ListingType.AUCTION);
              if (auctionListing) {
                const usdtAddress = addresses.contracts.MockUSDT as `0x${string}`;
                const platformTokenAddress = addresses.contracts.MockPlatformToken as `0x${string}`;
                const isUSDT = auctionListing.paymentToken.toLowerCase() === usdtAddress.toLowerCase();
                const decimals = isUSDT ? 6 : 18;
                const symbol = isUSDT ? 'USDT' : 'PLATFORM';
                
                return (
                  <div className="mb-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                    <div className="text-sm text-cyan-400 mb-1">Your Last Bid</div>
                    <div className="text-xl font-bold text-white">
                      {formatUnits(lastUserBid.amount, decimals)} {symbol}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">
                      {new Date(Number(lastUserBid.timestamp) * 1000).toLocaleString()}
                    </div>
                  </div>
                );
              }
            }
            return null;
          })()}
          
          {/* Last 5 Bids from Other Users */}
          {(() => {
            if (!auction) return null;
            
            // Get payment token from listings or use default (PLATFORM)
            const auctionListing = listings.find((l) => l.listingType === ListingType.AUCTION);
            const usdtAddress = addresses.contracts.MockUSDT as `0x${string}`;
            const platformTokenAddress = addresses.contracts.MockPlatformToken as `0x${string}`;
            // For settled auctions, listings might be empty, so we need to get payment token another way
            // We'll use PLATFORM as default since that's what the test uses
            const paymentToken = auctionListing?.paymentToken || platformTokenAddress;
            const isUSDT = paymentToken.toLowerCase() === usdtAddress.toLowerCase();
            const decimals = isUSDT ? 6 : 18;
            const symbol = isUSDT ? 'USDT' : 'PLATFORM';
            
            // Filter out user's own bids and get last 5
            const otherBids = bidHistory
              .filter((bid) => !address || bid.bidder.toLowerCase() !== address.toLowerCase())
              .slice(-5)
              .reverse(); // Show most recent first
            
            if (otherBids.length === 0) {
              return (
                <div className="text-center py-8 text-slate-400">
                  No bids from other users yet
                </div>
              );
            }
            
            return (
              <div className="space-y-3">
                {otherBids.map((bid, index) => (
                  <div
                    key={`${bid.bidder}-${bid.timestamp}-${index}`}
                    className="bg-slate-800/50 rounded-lg p-4 border border-slate-700"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="text-lg sm:text-xl font-bold text-white">
                            {formatUnits(bid.amount, decimals)} {symbol}
                          </div>
                          {bid.bidder.toLowerCase() === auction?.currentBidder?.toLowerCase() && (
                            <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-medium">
                              Winning
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-slate-400">
                          Bidder: {bid.bidder.slice(0, 6)}...{bid.bidder.slice(-4)}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          {new Date(Number(bid.timestamp) * 1000).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      )}

      {/* Offers Received Section (for NFT owners) */}
      {offers.length > 0 && isOwner && (
        <div className="mt-8 sm:mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Offers Received</h2>
          <div className="space-y-4">
            {offers.map((offer) => (
              <div
                key={offer.offerId.toString()}
                className="bg-slate-800/50 rounded-lg p-4 sm:p-6 border border-slate-700"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="text-lg sm:text-xl font-bold text-white mb-1">
                      {(() => {
                        const usdtAddress = (addresses.contracts as any).MockUSDT?.toLowerCase();
                        const platformTokenAddress = (addresses.contracts as any).MockPlatformToken?.toLowerCase();
                        const paymentTokenLower = offer.paymentToken.toLowerCase();
                        const isUSDT = usdtAddress && paymentTokenLower === usdtAddress.toLowerCase();
                        const decimals = isUSDT ? 6 : 18;
                        const symbol = isUSDT ? 'USDT' : 'PLATFORM';
                        return `${formatUnits(offer.amount, decimals)} ${symbol}`;
                      })()}
                    </div>
                    <div className="text-sm text-slate-400">
                      From: {offer.offerer.slice(0, 6)}...{offer.offerer.slice(-4)}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Expires: {new Date(Number(offer.expirationTime) * 1000).toLocaleString()}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={async () => {
                        await acceptOffer(offer.offerId);
                        loadData();
                      }}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-colors"
                    >
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* My Offers Section (for users who made offers) */}
      {myOffers.length > 0 && (
        <div className="mt-8 sm:mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Your Offers</h2>
          <div className="space-y-4">
            {myOffers.map((offer) => (
              <div
                key={offer.offerId.toString()}
                className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 sm:p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="text-lg sm:text-xl font-bold text-white mb-1">
                      {(() => {
                        const usdtAddress = (addresses.contracts as any).MockUSDT?.toLowerCase();
                        const platformTokenAddress = (addresses.contracts as any).MockPlatformToken?.toLowerCase();
                        const paymentTokenLower = offer.paymentToken.toLowerCase();
                        const isUSDT = usdtAddress && paymentTokenLower === usdtAddress.toLowerCase();
                        const decimals = isUSDT ? 6 : 18;
                        const symbol = isUSDT ? 'USDT' : 'PLATFORM';
                        return `${formatUnits(offer.amount, decimals)} ${symbol}`;
                      })()}
                    </div>
                    <div className="text-sm text-slate-400">
                      Status: {offer.isAccepted ? 'Accepted' : offer.isActive ? 'Pending' : 'Cancelled'}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Expires: {new Date(Number(offer.expirationTime) * 1000).toLocaleString()}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {offer.isActive && !offer.isAccepted && (
                      <button
                        onClick={async () => {
                          await cancelOffer(offer.offerId);
                          loadData();
                        }}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium transition-colors"
                      >
                        Cancel Offer
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modals */}
      {nft && (
        <>
          <CreateListingModal
            isOpen={showCreateListing}
            onClose={() => setShowCreateListing(false)}
            tokenId={nft.tokenId}
            onSuccess={loadData}
          />
          <OfferModal
            isOpen={showOfferModal}
            onClose={() => setShowOfferModal(false)}
            tokenId={nft.tokenId}
            onSuccess={loadData}
          />
          {selectedListing && (
            <BidModal
              isOpen={showBidModal}
              onClose={() => {
                setShowBidModal(false);
                setSelectedListing(null);
              }}
              listing={selectedListing}
              auction={auction ? { 
                ...auction,
                minBidIncrementBps: 500 
              } : null}
              onSuccess={loadData}
            />
          )}
        </>
      )}
    </div>
  );
}

