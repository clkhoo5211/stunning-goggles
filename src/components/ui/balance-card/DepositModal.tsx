import { Loader2 } from 'lucide-react';
import { Modal } from '@components/ui/Modal';
import './DepositModal.css';

export interface DepositModalProps {
  isOpen: boolean;
  amount: string;
  allowance: number;
  walletBalance: number;
  sessionCost: number;
  sessionRounds: number;
  roundCost: number;
  minDeposit: number;
  depositFeePercent: number;
  isProcessing: boolean;
  needsApproval: boolean;
  waitingForApproval: boolean;
  approvalCountdown: number;
  onAmountChange: (value: string) => void;
  onClose: () => void;
  onApprove: () => void;
  onConfirm: () => void;
  tokenSymbol: string;
}

export function DepositModal({
  isOpen,
  amount,
  allowance,
  walletBalance,
  sessionCost,
  sessionRounds,
  roundCost,
  minDeposit,
  depositFeePercent,
  isProcessing,
  needsApproval,
  waitingForApproval,
  approvalCountdown,
  onAmountChange,
  onClose,
  onApprove,
  onConfirm,
  tokenSymbol,
}: DepositModalProps) {
  const handleAction = () => {
    if (needsApproval) {
      onApprove();
    } else {
      onConfirm();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Deposit ${tokenSymbol}`}>
      <div className="deposit-modal">
        <p className="deposit-modal__description">
          Enter the amount of {tokenSymbol} you would like to deposit into the game contract. Each session consumes
          <span className="deposit-modal__highlight">
            {' '}
            {sessionCost.toLocaleString()} {tokenSymbol}{' '}
          </span>
          ({sessionRounds} rounds × {roundCost} {tokenSymbol}).
        </p>
        <div className="deposit-modal__meta">
          <span className="deposit-modal__meta-label">
            Minimum deposit: {minDeposit} {tokenSymbol}
          </span>
          <span className="deposit-modal__meta-label">
            Pool contribution: {depositFeePercent.toFixed(1)}%
          </span>
        </div>

        <div className="deposit-modal__field">
          <label className="deposit-modal__label">Amount ({tokenSymbol})</label>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="theme-input deposit-modal__input"
            style={{ backgroundColor: '#0b1532' }}
            value={amount}
            onChange={(event) => onAmountChange(event.target.value)}
            disabled={isProcessing}
          />
        </div>

        <div className="deposit-modal__allowance">
          <div>Wallet balance: {walletBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {tokenSymbol}</div>
          <div>Current allowance: {allowance.toFixed(2)} {tokenSymbol}</div>
        </div>

        <div className="deposit-modal__actions">
          <button
            className="theme-button theme-button--ghost"
            onClick={onClose}
            disabled={isProcessing}
          >
            Cancel
          </button>
          <button
            className="theme-button theme-button--primary"
            onClick={handleAction}
            disabled={isProcessing || waitingForApproval}
          >
            {isProcessing ? (
              <span className="deposit-modal__loading">
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing...
              </span>
            ) : waitingForApproval ? (
              `Finalizing (${approvalCountdown}s)`
            ) : needsApproval ? (
              `Approve ${tokenSymbol}`
            ) : (
              'Confirm Deposit'
            )}
          </button>
        </div>
      </div>
    </Modal>
  );
}
