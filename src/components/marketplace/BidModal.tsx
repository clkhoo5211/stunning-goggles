import { useState, useEffect } from 'react';
import { formatUnits } from 'viem';
import { useAuctionHouse } from '@hooks/useAuctionHouse';
import { NFTListing } from '@hooks/useNFTMarketplace';
import { Modal } from '@components/ui/Modal';
import addresses from '@lib/contracts/addresses.json';

interface BidModalProps {
  isOpen: boolean;
  onClose: () => void;
  listing: NFTListing;
  auction: { currentBid: bigint; minBidIncrementBps: number } | null;
  onSuccess?: () => void;
}

export function BidModal({ isOpen, onClose, listing, auction, onSuccess }: BidModalProps) {
  const { placeBid, isLoading, getMinBidIncrement } = useAuctionHouse();
  const [bidAmount, setBidAmount] = useState('');
  const [minBid, setMinBid] = useState<bigint>(listing.price);

  useEffect(() => {
    const calculateMinBid = async () => {
      if (auction && auction.currentBid > 0n) {
        // If there's an existing bid, calculate minimum as: currentBid + (currentBid * increment%)
        const incrementBps = await getMinBidIncrement();
        const increment = (auction.currentBid * BigInt(incrementBps)) / 10000n;
        setMinBid(auction.currentBid + increment);
      } else {
        // If no bids yet, minimum bid is the reserve price (listing.price)
        setMinBid(listing.price);
      }
    };
    if (isOpen) {
      calculateMinBid();
    }
  }, [isOpen, auction, listing.price, getMinBidIncrement]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bidAmount || parseFloat(bidAmount) <= 0) {
      return;
    }

    try {
      await placeBid(listing.listingId, bidAmount, listing.paymentToken);
      onSuccess?.();
      onClose();
      setBidAmount('');
    } catch (error) {
      // Error handled in hook
    }
  };

  // Get token addresses from config
  const usdtAddress = addresses.contracts.MockUSDT as `0x${string}`;
  const platformTokenAddress = addresses.contracts.MockPlatformToken as `0x${string}`;
  
  const tokenDecimals = listing.paymentToken === usdtAddress ? 6 : 18;
  const tokenSymbol = listing.paymentToken === usdtAddress ? 'USDT' : 'PLATFORM';
  const minBidFormatted = formatUnits(minBid, tokenDecimals);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Place Bid">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Current Bid Info */}
        {auction && auction.currentBid > 0n && (
          <div className="bg-slate-900/50 rounded-md p-3">
            <div className="text-sm text-slate-400 mb-1">Current Bid</div>
            <div className="text-lg font-bold text-white">
              {formatUnits(auction.currentBid, tokenDecimals)} {tokenSymbol}
            </div>
          </div>
        )}

        {/* Minimum Bid */}
        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-md p-3">
          <div className="text-sm text-cyan-400 mb-1">Minimum Bid</div>
          <div className="text-lg font-bold text-white">
            {minBidFormatted} {tokenSymbol}
          </div>
        </div>

        {/* Bid Amount */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Your Bid
          </label>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={bidAmount}
            onChange={(e) => {
              const value = e.target.value;
              // Allow only numbers and one decimal point
              if (value === '' || /^\d*\.?\d*$/.test(value)) {
                setBidAmount(value);
              }
            }}
            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder={minBidFormatted}
            required
          />
          <div className="text-xs text-slate-400 mt-1">
            Minimum: {minBidFormatted} {tokenSymbol}
          </div>
        </div>

        {/* Submit */}
        <div className="flex gap-2 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-md font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading || !bidAmount || parseFloat(bidAmount) < parseFloat(minBidFormatted)}
            className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-md font-medium transition-colors"
          >
            {isLoading ? 'Placing Bid...' : 'Place Bid'}
          </button>
        </div>
      </form>
    </Modal>
  );
}

