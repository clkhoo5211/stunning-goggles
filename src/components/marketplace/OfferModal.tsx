import { useState } from 'react';
import { useOfferSystem } from '@hooks/useOfferSystem';
import { Modal } from '@components/ui/Modal';
import addresses from '@lib/contracts/addresses.json';

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  tokenId: bigint;
  onSuccess?: () => void;
}

export function OfferModal({ isOpen, onClose, tokenId, onSuccess }: OfferModalProps) {
  const { createOffer, isLoading, offerSystemAddress } = useOfferSystem();
  const [amount, setAmount] = useState('');
  const [paymentToken, setPaymentToken] = useState<`0x${string}`>(addresses.contracts.MockUSDT as `0x${string}`);
  const [expirationDays, setExpirationDays] = useState('7');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) {
      return;
    }

    try {
      // Pass expirationDays to createOffer, let it calculate from blockchain time
      // This ensures expiration is always relative to blockchain time, not system time
      const days = parseInt(expirationDays) || 7;
      await createOffer(tokenId, amount, paymentToken, days);
      onSuccess?.();
      onClose();
      setAmount('');
      setExpirationDays('7');
    } catch (error) {
      // Error handled in hook
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Make Offer">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Offer Amount */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Offer Amount
          </label>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={amount}
            onChange={(e) => {
              const value = e.target.value;
              // Allow only numbers and one decimal point
              if (value === '' || /^\d*\.?\d*$/.test(value)) {
                setAmount(value);
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
            <option value={addresses.contracts.MockUSDT as string}>USDT</option>
            <option value={addresses.contracts.MockPlatformToken as string}>Platform Token</option>
          </select>
        </div>

        {/* Expiration */}
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Expiration (days)
          </label>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={expirationDays}
            onChange={(e) => {
              const value = e.target.value;
              // Allow only integers (no decimals for days)
              if (value === '' || /^\d+$/.test(value)) {
                const num = parseInt(value);
                if (value === '' || (num >= 1 && num <= 30)) {
                  setExpirationDays(value);
                }
              }
            }}
            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>

        {/* Info */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-md p-3">
          <div className="text-xs text-blue-400">
            Your offer will be locked until accepted or expired. You can cancel it anytime before expiration.
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
            disabled={isLoading || !amount}
            className="flex-1 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-md font-medium transition-colors"
          >
            {isLoading ? 'Creating Offer...' : 'Create Offer'}
          </button>
        </div>
      </form>
    </Modal>
  );
}

