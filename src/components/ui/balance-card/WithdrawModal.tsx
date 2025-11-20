import { Loader2 } from 'lucide-react';
import { Modal } from '@components/ui/Modal';
import './WithdrawModal.css';

export interface WithdrawModalProps {
  isOpen: boolean;
  amount: string;
  minWithdraw: number;
  isProcessing: boolean;
  onAmountChange: (value: string) => void;
  onClose: () => void;
  onConfirm: () => void;
  feeBps: number;
  tokenSymbol: string;
}

export function WithdrawModal({
  isOpen,
  amount,
  minWithdraw,
  isProcessing,
  onAmountChange,
  onClose,
  onConfirm,
  feeBps,
  tokenSymbol,
}: WithdrawModalProps) {
  const feePercent = (feeBps / 100).toFixed(2).replace(/\.00$/, '');

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Withdraw Funds">
      <div className="withdraw-modal">
        <p className="withdraw-modal__description">
          Enter the net amount you would like to receive. Winnings are used first, then your deposit balance, and we automatically add the fee before submitting the withdrawal so you still receive the full amount you enter.
        </p>
        <div className="withdraw-modal__meta">
          <span className="withdraw-modal__meta-label">
            Minimum withdrawal: {minWithdraw} {tokenSymbol}
          </span>
          <span className="withdraw-modal__meta-label">Pool contribution: {feePercent}%</span>
        </div>

        <div className="withdraw-modal__field">
          <label className="withdraw-modal__label">Amount ({tokenSymbol})</label>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="theme-input withdraw-modal__input"
            style={{ backgroundColor: '#0b1532' }}
            value={amount}
            onChange={(event) => onAmountChange(event.target.value)}
            disabled={isProcessing}
          />
        </div>

        <div className="withdraw-modal__actions">
          <button
            className="theme-button theme-button--ghost"
            onClick={onClose}
            disabled={isProcessing}
          >
            Cancel
          </button>
          <button
            className="theme-button theme-button--primary"
            onClick={onConfirm}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <span className="withdraw-modal__loading">
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing...
              </span>
            ) : (
              'Confirm Withdraw'
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
}
