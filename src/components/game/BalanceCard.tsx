import { useEffect, useMemo, useState } from 'react';
import { Wallet } from 'lucide-react';
import { toast } from 'sonner';
import { useGameContract } from '@hooks/useGameContract';
import { useSoundEffects } from '@hooks/useSoundEffects';
import { useAccount } from 'wagmi';
import { BalanceCardView } from '@components/ui/balance-card/BalanceCardView';
import { DepositModal } from '@components/ui/balance-card/DepositModal';
import { WithdrawModal } from '@components/ui/balance-card/WithdrawModal';

interface BalanceCardProps {
  /** When false, render only the modals/listeners (no visible balance card) */
  showCard?: boolean;
}

export function BalanceCard({ showCard = true }: BalanceCardProps) {
  const { address, isConnected } = useAccount();
  const {
    playerState,
    refetchPlayerState,
    deposit,
    approveDepositToken,
    depositTokenAllowance,
    depositTokenBalance,
    depositTokenSymbol,
    depositTokenEnabled,
    refetchAllowance,
    withdrawNet,
    depositFeeBps,
    withdrawFeeBps,
    roundsPerPackage,
    costPerRound,
    minDepositAmount,
    minWithdrawNet,
  } = useGameContract();

  const { playSound } = useSoundEffects();

  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [depositAmount, setDepositAmount] = useState('1000');
  const [withdrawAmount, setWithdrawAmount] = useState('0');
  const [approvalCountdown, setApprovalCountdown] = useState(0);

  const handleDepositAmountChange = (value: string) => {
    const sanitized = value.replace(/[^0-9.]/g, '');
    if (sanitized === '') {
      setDepositAmount('');
      return;
    }

    const segments = sanitized.split('.');
    let whole = segments[0]?.replace(/^0+(?=\d)/, '') || '0';
    let decimals = segments[1] ?? '';

    if (segments.length > 2) {
      decimals += segments.slice(2).join('');
    }

    if (decimals.length > 2) {
      decimals = decimals.slice(0, 2);
    }

    const normalized = decimals.length > 0 ? `${whole}.${decimals}` : whole;
    setDepositAmount(normalized);
  };

  const handleWithdrawAmountChange = (value: string) => {
    const sanitized = value.replace(/[^0-9.]/g, '');
    if (sanitized === '') {
      setWithdrawAmount('');
      return;
    }

    const segments = sanitized.split('.');
    let whole = segments[0]?.replace(/^0+(?=\d)/, '') || '0';
    let decimals = segments[1] ?? '';

    if (segments.length > 2) {
      decimals += segments.slice(2).join('');
    }
    if (decimals.length > 2) {
      decimals = decimals.slice(0, 2);
    }

    const normalized = decimals.length > 0 ? `${whole}.${decimals}` : whole;
    const numeric = Number.parseFloat(normalized);

    if (Number.isNaN(numeric)) {
      setWithdrawAmount('');
      return;
    }

    if (numeric > maxWithdrawDisplay) {
      setWithdrawAmount(maxWithdrawDisplay.toFixed(2));
      return;
    }

    setWithdrawAmount(normalized);
  };

  useEffect(() => {
    if (approvalCountdown <= 0) return;
    const timer = setInterval(() => {
      setApprovalCountdown((value) => (value <= 1 ? 0 : value - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [approvalCountdown]);

  // Allow other components (e.g. floating action bar) to open deposit/withdraw modals
  useEffect(() => {
    const openDeposit = () => setIsDepositOpen(true);
    const openWithdraw = () => setIsWithdrawOpen(true);

    window.addEventListener('luckchain:openDeposit', openDeposit);
    window.addEventListener('luckchain:openWithdraw', openWithdraw);

    return () => {
      window.removeEventListener('luckchain:openDeposit', openDeposit);
      window.removeEventListener('luckchain:openWithdraw', openWithdraw);
    };
  }, []);

  const isReady = isConnected && !!address;

  const depositBalance = playerState?.depositedBalance || '0';
  const withdrawableBalance = playerState?.winningsBalance || '0';
  const lifetimeDeposited = playerState?.totalDeposited || '0';
  const lifetimeWinnings = playerState?.lifetimeWinnings || '0';
  const depositBalanceNumeric = useMemo(() => parseFloat(depositBalance || '0'), [depositBalance]);
  const withdrawableNumeric = useMemo(
    () => parseFloat(withdrawableBalance || '0'),
    [withdrawableBalance]
  );
  const withdrawFeeRate = (withdrawFeeBps ?? 0) / 10000;
  const safeFeeRate = withdrawFeeRate >= 1 ? 0 : withdrawFeeRate;
  const winningsNetAvailable = Math.max(withdrawableNumeric * (1 - safeFeeRate), 0);
  const depositNetAvailable = Math.max(depositBalanceNumeric * (1 - safeFeeRate), 0);
  const totalNetAvailable = winningsNetAvailable + depositNetAvailable;
  const minWithdraw = Math.max(parseFloat(minWithdrawNet || '0'), 0);
  const maxNetWithdraw = totalNetAvailable;
  const maxWithdrawDisplay = useMemo(
    () => Math.max(Math.floor(maxNetWithdraw * 100) / 100, 0),
    [maxNetWithdraw]
  );
  const maxGrossWithdraw = safeFeeRate < 1 ? maxNetWithdraw / (1 - safeFeeRate) : 0;
  const withdrawDisabled =
    totalNetAvailable < minWithdraw || minWithdraw === 0 || maxGrossWithdraw < minWithdraw;
  const numericDepositAmount = Number(depositAmount || '0');
  const tokenSymbol = depositTokenSymbol || 'USDT';
  const needsApproval = parseFloat(depositTokenAllowance) + 1e-6 < numericDepositAmount;
  const waitingForApprovalFinalization = approvalCountdown > 0;
  const sessionRounds = roundsPerPackage ?? 10;
  const roundCost = costPerRound ? parseFloat(costPerRound) : 100;
  const sessionCost = sessionRounds * roundCost;
  const minDeposit = Math.max(parseFloat(minDepositAmount || '0'), 0);
  const walletTokenBalance = useMemo(
    () => parseFloat(depositTokenBalance || '0'),
    [depositTokenBalance]
  );

  const handleApprove = async () => {
    if (!depositTokenEnabled) {
      toast.error(`${tokenSymbol} deposits are currently disabled.`);
      return;
    }

    if (waitingForApprovalFinalization) return;

    const numericAmount = Number(depositAmount);
    if (Number.isNaN(numericAmount) || numericAmount <= 0) {
      toast.error('Please enter a valid amount.');
      return;
    }

    try {
      setIsProcessing(true);
      const approveToast = toast.loading(`Approving ${tokenSymbol}...`);
      await approveDepositToken(depositAmount);
      toast.success(`${tokenSymbol} approved! Waiting for confirmation…`, { id: approveToast });
      await refetchAllowance?.();
      setApprovalCountdown(5);
    } catch (error: any) {
      console.error('Approve error:', error);
      toast.error(error?.shortMessage || error?.message || 'Approval failed');
      setApprovalCountdown(0);
    } finally {
      toast.dismiss();
      setIsProcessing(false);
    }
  };

  const handleDeposit = async () => {
    const numericAmount = Number(depositAmount);
    if (Number.isNaN(numericAmount) || numericAmount <= 0) {
      toast.error('Please enter a valid amount.');
      return;
    }

    if (needsApproval || waitingForApprovalFinalization) {
      toast.error(`Please approve ${tokenSymbol} before depositing.`);
      return;
    }

    if (numericAmount < minDeposit) {
      toast.error(`Minimum deposit is ${minDeposit.toFixed(0)} ${tokenSymbol}.`);
      return;
    }

    if (numericAmount > walletTokenBalance) {
      toast.error(
        `Insufficient ${tokenSymbol} balance. Available: ${walletTokenBalance.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })} ${tokenSymbol}.`
      );
      return;
    }

    if (!depositTokenEnabled) {
      toast.error(`${tokenSymbol} deposits are currently disabled.`);
      return;
    }

    try {
      setIsProcessing(true);

      const depositToast = toast.loading(`Depositing ${numericAmount} ${tokenSymbol}...`);
      await deposit(depositAmount);
      playSound('deposit');
      toast.success('Deposit successful!', { id: depositToast });
      setIsDepositOpen(false);
      setDepositAmount('1000');
      await Promise.all([
        refetchPlayerState?.(),
        refetchAllowance?.(),
      ]);
    } catch (error: any) {
      console.error('Deposit error:', error);
      toast.error(error?.shortMessage || error?.message || 'Deposit failed');
    } finally {
      toast.dismiss();
      setIsProcessing(false);
    }
  };

  const handleWithdraw = async () => {
    const numericAmount = Number(withdrawAmount);
    if (Number.isNaN(numericAmount) || numericAmount <= 0) {
      toast.error('Please enter a valid amount.');
      return;
    }

    if (numericAmount < minWithdraw) {
      toast.error(`Minimum withdrawal is ${minWithdraw.toFixed(0)} ${tokenSymbol}.`);
      return;
    }

    const allowedAmount = Math.min(maxWithdrawDisplay, maxNetWithdraw);
    if (numericAmount - allowedAmount > 0.0001) {
      toast.error('Amount exceeds available withdrawable balance.');
      return;
    }

    try {
      setIsProcessing(true);
      const withdrawToast = toast.loading(`Withdrawing ${numericAmount} ${tokenSymbol}...`);
      await withdrawNet(withdrawAmount);
      playSound('withdraw');
      toast.success('Withdrawal successful!', { id: withdrawToast });
      setIsWithdrawOpen(false);
      await refetchPlayerState?.();
    } catch (error: any) {
      console.error('Withdraw error:', error);
      toast.error(error?.shortMessage || error?.message || 'Withdrawal failed');
    } finally {
      toast.dismiss();
      setIsProcessing(false);
    }
  };

  return (
    <>
      {showCard && (
        <>
          {!isReady && (
            <div className="card p-6 text-center">
              <Wallet className="w-12 h-12 mx-auto mb-4 text-slate-500" />
              <p className="text-slate-400">Connect wallet to view balance</p>
            </div>
          )}

          {isReady && (
            <BalanceCardView
              depositBalance={parseFloat(depositBalance || '0').toFixed(2)}
              withdrawableBalance={parseFloat(withdrawableBalance || '0').toFixed(2)}
              lifetimeDeposited={parseFloat(lifetimeDeposited || '0').toFixed(2)}
              lifetimeWinnings={parseFloat(lifetimeWinnings || '0').toFixed(2)}
              tokenSymbol={tokenSymbol}
              stats={
                playerState
                  ? {
                    roundsRemaining: playerState.roundsRemaining,
                    totalRoundsPlayed: playerState.totalRoundsPlayed,
                    totalWins: playerState.totalWins,
                  }
                  : null
              }
              onDepositClick={() => {
                setDepositAmount(String(Math.max(minDeposit, 1000)));
                setIsDepositOpen(true);
              }}
              onWithdrawClick={() => {
                let defaultValue = minWithdraw > 0 ? minWithdraw : 0;
                if (maxWithdrawDisplay < minWithdraw || minWithdraw === 0) {
                  defaultValue = maxWithdrawDisplay;
                }
                setWithdrawAmount(Math.max(defaultValue, 0).toFixed(2));
                setIsWithdrawOpen(true);
              }}
              isWithdrawDisabled={withdrawDisabled}
            />
          )}
        </>
      )}

      {/* Modals always render so global events from GameActionBar work */}
      <DepositModal
        isOpen={isDepositOpen && isReady}
        amount={depositAmount}
        allowance={parseFloat(depositTokenAllowance || '0')}
        sessionCost={sessionCost}
        sessionRounds={sessionRounds}
        roundCost={roundCost}
        isProcessing={isProcessing}
        needsApproval={needsApproval}
        waitingForApproval={waitingForApprovalFinalization}
        approvalCountdown={approvalCountdown}
        onAmountChange={handleDepositAmountChange}
        minDeposit={minDeposit}
        depositFeePercent={(depositFeeBps ?? 0) / 100}
        walletBalance={walletTokenBalance}
        onClose={() => {
          if (isProcessing) return;
          setIsDepositOpen(false);
        }}
        onApprove={handleApprove}
        onConfirm={handleDeposit}
        tokenSymbol={tokenSymbol}
      />

      <WithdrawModal
        isOpen={isWithdrawOpen && isReady}
        amount={withdrawAmount}
        minWithdraw={minWithdraw}
        isProcessing={isProcessing}
        onAmountChange={handleWithdrawAmountChange}
        onClose={() => {
          if (isProcessing) return;
          setIsWithdrawOpen(false);
        }}
        feeBps={withdrawFeeBps ?? 0}
        onConfirm={handleWithdraw}
        tokenSymbol={tokenSymbol}
      />
    </>
  );
}

