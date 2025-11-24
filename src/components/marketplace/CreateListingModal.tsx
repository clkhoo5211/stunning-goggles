import { useState, useEffect } from 'react';
import { useNFTMarketplace, ListingType } from '@hooks/useNFTMarketplace';
import { useNFTListings } from '@hooks/useNFTListings';
import { Modal } from '@components/ui/Modal';
import { toast } from 'sonner';

interface CreateListingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tokenId: bigint;
  onSuccess?: () => void;
}

export function CreateListingModal({ isOpen, onClose, tokenId, onSuccess }: CreateListingModalProps) {
  const { createListing, isLoading, usdtAddress, platformTokenAddress } = useNFTMarketplace();
  const { canListNFT } = useNFTListings();
  const [price, setPrice] = useState('');
  const [paymentToken, setPaymentToken] = useState<`0x${string}`>(usdtAddress);
  const [listingType, setListingType] = useState<ListingType>(ListingType.FIXED_PRICE);
  const [duration, setDuration] = useState('7'); // Days for auction
  const [checkingExisting, setCheckingExisting] = useState(false);
  const [hasExistingListing, setHasExistingListing] = useState(false);

  // Check for existing listings when modal opens
  useEffect(() => {
    if (isOpen && tokenId) {
      checkExistingListings();
    }
  }, [isOpen, tokenId]);

  const checkExistingListings = async () => {
    setCheckingExisting(true);
    try {
      const canList = await canListNFT(tokenId);
      setHasExistingListing(!canList);
      if (!canList) {
        toast.error('This NFT is already listed for sale. Please cancel the existing listing first.');
      }
    } catch (error) {
      console.error('Error checking existing listings:', error);
    } finally {
      setCheckingExisting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!price || parseFloat(price) <= 0) {
      return;
    }

    // Double-check for existing listings before submitting
    if (hasExistingListing) {
      toast.error('This NFT is already listed. Please cancel the existing listing first.');
      return;
    }

    try {
      const durationSeconds = listingType === ListingType.AUCTION 
        ? parseInt(duration) * 24 * 60 * 60 
        : undefined;

      await createListing(tokenId, price, paymentToken, listingType, durationSeconds);
      onSuccess?.();
      onClose();
      // Reset form
      setPrice('');
      setListingType(ListingType.FIXED_PRICE);
      setDuration('7');
      setHasExistingListing(false);
    } catch (error) {
      // Error handled in hook
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create Listing">
      {hasExistingListing && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-md">
          <p className="text-sm text-red-300">
            ⚠️ This NFT is already listed for sale. Please cancel the existing listing before creating a new one.
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Listing Type */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Listing Type
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setListingType(ListingType.FIXED_PRICE)}
              className={`flex-1 px-4 py-2 rounded-md font-medium transition-colors ${
                listingType === ListingType.FIXED_PRICE
                  ? 'bg-green-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Fixed Price
            </button>
            <button
              type="button"
              onClick={() => setListingType(ListingType.AUCTION)}
              className={`flex-1 px-4 py-2 rounded-md font-medium transition-colors ${
                listingType === ListingType.AUCTION
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              Auction
            </button>
          </div>
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Price
          </label>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={price}
            onChange={(e) => {
              const value = e.target.value;
              // Allow only numbers and one decimal point
              if (value === '' || /^\d*\.?\d*$/.test(value)) {
                setPrice(value);
              }
            }}
            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="0.00"
            required
          />
        </div>

        {/* Payment Token */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Payment Token
          </label>
          <select
            value={paymentToken}
            onChange={(e) => setPaymentToken(e.target.value as `0x${string}`)}
            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value={usdtAddress}>USDT</option>
            <option value={platformTokenAddress}>Platform Token</option>
          </select>
        </div>

        {/* Duration (for auctions) */}
        {listingType === ListingType.AUCTION && (
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Duration (days)
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={duration}
              onChange={(e) => {
                const value = e.target.value;
                // Allow only integers (no decimals for days)
                if (value === '' || /^\d+$/.test(value)) {
                  const num = parseInt(value);
                  if (value === '' || (num >= 1 && num <= 30)) {
                    setDuration(value);
                  }
                }
              }}
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
        )}

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
            disabled={isLoading || !price || hasExistingListing || checkingExisting}
            className="flex-1 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-md font-medium transition-colors"
          >
            {checkingExisting ? 'Checking...' : isLoading ? 'Creating...' : hasExistingListing ? 'Already Listed' : 'Create Listing'}
          </button>
        </div>
      </form>
    </Modal>
  );
}

