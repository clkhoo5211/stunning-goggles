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
    refetchDepositTokenBalance,
    withdrawNet,
    depositFeeBps,
    withdrawFeeBps,
    roundsPerPackage,
    costPerRound,
    minDepositAmount,
    minWithdrawAmount,
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
  const winningsBalance = playerState?.winningsBalance || '0';
  // Withdrawable balance includes both winnings and deposits (for withdrawNet)
  // These are already formatted strings, so add them as numbers
  const withdrawableBalance = (parseFloat(winningsBalance || '0') + parseFloat(depositBalance || '0')).toString();
  const lifetimeDeposited = playerState?.totalDeposited || '0';
  const lifetimeWinnings = playerState?.lifetimeWinnings || '0';
  
  // Calculate max withdraw values (needed for handleWithdrawAmountChange and validation)
  const depositBalanceNumeric = useMemo(() => parseFloat(depositBalance || '0'), [depositBalance]);
  const winningsBalanceNumeric = useMemo(() => parseFloat(winningsBalance || '0'), [winningsBalance]);
  const withdrawableNumeric = useMemo(
    () => depositBalanceNumeric + winningsBalanceNumeric,
    [depositBalanceNumeric, winningsBalanceNumeric]
  );
  const withdrawFeeRate = (withdrawFeeBps ?? 0) / 10000;
  const safeFeeRate = withdrawFeeRate >= 1 ? 0 : withdrawFeeRate;
  // Total net available = (deposited + winnings) * (1 - feeRate)
  const totalNetAvailable = Math.max(withdrawableNumeric * (1 - safeFeeRate), 0);
  const maxWithdrawDisplay = useMemo(
    () => Math.max(Math.floor(totalNetAvailable * 100) / 100, 0),
    [totalNetAvailable]
  );
  // Minimum withdrawal from contract (net amount user receives)
  // This should be 1999 USDT, but we get it from the contract
  const minWithdraw = Math.max(parseFloat(minWithdrawNet || '0'), 0);
  const maxNetWithdraw = totalNetAvailable;
  const maxGrossWithdraw = safeFeeRate < 1 ? maxNetWithdraw / (1 - safeFeeRate) : 0;
  const withdrawDisabled =
    totalNetAvailable < minWithdraw || minWithdraw === 0 || maxGrossWithdraw < minWithdraw;

  // Handle withdraw amount change with auto-adjustment to maximum
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

    // Auto-adjust to maximum if user enters value higher than maximum
    if (numeric > maxWithdrawDisplay) {
      setWithdrawAmount(maxWithdrawDisplay.toFixed(2));
      return;
    }

    setWithdrawAmount(normalized);
  };

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
        refetchDepositTokenBalance?.(),
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

    // User inputs NET amount (what they want to receive)
    // Minimum input must match contract's minWithdrawNet
    if (numericAmount < minWithdraw) {
      toast.error(`Minimum withdrawal is ${minWithdraw.toFixed(0)} ${tokenSymbol}.`);
      return;
    }

    // Calculate gross required from net amount (including fee)
    // grossRequired = netAmount / (1 - feeRate)
    // For 1999 USDT net with 0.5% fee: grossRequired = 1999 / 0.995 = 2008.995 USDT
    const totalGrossBalance = withdrawableNumeric; // Already includes deposits + winnings
    const grossRequired = safeFeeRate < 1 ? numericAmount / (1 - safeFeeRate) : numericAmount;
    
    // Validation: User's total balance (deposited + winnings) must be >= gross required
    // Calculate minimum gross required based on contract's minWithdrawNet and fee
    const minWithdrawGross = safeFeeRate < 1 ? minWithdraw / (1 - safeFeeRate) : minWithdraw;
    if (grossRequired < minWithdrawGross) {
      toast.error(`Withdrawal amount (including fee) must be at least ${minWithdrawGross.toFixed(2)} ${tokenSymbol} to receive ${minWithdraw.toFixed(0)} ${tokenSymbol}.`);
      return;
    }
    
    if (totalGrossBalance < grossRequired) {
      const shortfall = grossRequired - totalGrossBalance;
      toast.error(`Insufficient balance. You need ${shortfall.toFixed(2)} more ${tokenSymbol} (including ${(grossRequired - numericAmount).toFixed(2)} ${tokenSymbol} fee).`);
      return;
    }

    try {
      setIsProcessing(true);
      const withdrawToast = toast.loading(`Withdrawing ${numericAmount} ${tokenSymbol}...`);
      await withdrawNet(withdrawAmount);
      playSound('withdraw');
      toast.success('Withdrawal successful!', { id: withdrawToast });
      setIsWithdrawOpen(false);
      // Reset withdraw amount to minimum or 0 after successful withdrawal
      setWithdrawAmount(minWithdraw > 0 ? minWithdraw.toFixed(2) : '0');
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
          // Reset withdraw amount when modal is closed
          setWithdrawAmount(minWithdraw > 0 ? minWithdraw.toFixed(2) : '0');
        }}
        feeBps={withdrawFeeBps ?? 0}
        onConfirm={handleWithdraw}
        tokenSymbol={tokenSymbol}
      />
    </>
  );
}

