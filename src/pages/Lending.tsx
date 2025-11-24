import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { formatUnits } from 'viem';
import { useLendingPool, UserLendingData } from '@hooks/useLendingPool';
import { useCollateralManager, UserCollateral } from '@hooks/useCollateralManager';
import {
  DepositCollateralModal,
  WithdrawCollateralModal,
  BorrowModal,
  RepayModal,
} from '@components/lending';

export default function Lending() {
  const { address } = useAccount();
  const {
    getUserLendingData,
    getHealthFactor,
    getPoolStats,
    usdtAddress,
  } = useLendingPool();
  const { getTotalCollateralValue, calculateMaxBorrow } = useCollateralManager();

  const [lendingData, setLendingData] = useState<UserLendingData | null>(null);
  const [healthFactor, setHealthFactor] = useState<bigint | null>(null);
  const [collaterals, setCollaterals] = useState<UserCollateral[]>([]);
  const [totalCollateralValue, setTotalCollateralValue] = useState<bigint>(0n);
  const [maxBorrow, setMaxBorrow] = useState<bigint>(0n);
  const [totalDebt, setTotalDebt] = useState<bigint>(0n);
  const [interest, setInterest] = useState<bigint>(0n);
  const [poolStats, setPoolStats] = useState<{ totalBorrowed: bigint; totalAvailable: bigint } | null>(null);
  const [loading, setLoading] = useState(true);

  // Modal states
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showBorrowModal, setShowBorrowModal] = useState(false);
  const [showRepayModal, setShowRepayModal] = useState(false);
  const [selectedCollateralToken, setSelectedCollateralToken] = useState<`0x${string}`>(usdtAddress);

  useEffect(() => {
    if (!address) return;
    
    // Load data immediately
    loadData();
    
    // Poll for real-time interest updates every 5 seconds
    // Interest accrues continuously based on block.timestamp, so we need to refetch periodically
    // The contract's getUserLendingData calculates interest on-the-fly using current block timestamp
    const interval = setInterval(() => {
      loadData();
    }, 5000); // Refetch every 5 seconds
    
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]); // Only depend on address, loadData is stable

  const loadData = async () => {
    if (!address) return;
    setLoading(true);
    try {
      // Load all data in parallel
      // NOTE: We don't call calculateInterest separately - use interestAccrued from getUserLendingData
      const [
        userData,
        hf,
        collateralData,
        maxBorrowAmount,
        stats,
      ] = await Promise.all([
        getUserLendingData(address),
        getHealthFactor(address),
        getTotalCollateralValue(address),
        calculateMaxBorrow(address),
        getPoolStats(),
      ]);

      if (userData) {
        setLendingData(userData);
        // Use contract's total debt directly: borrowedAmount + interestAccrued (from contract)
        const debt = userData.borrowedAmount + userData.interestAccrued;
        setTotalDebt(debt);
        // Set interest from contract data (not from separate calculateInterest call)
        setInterest(userData.interestAccrued);
      }
      setHealthFactor(hf);
      if (collateralData) {
        setCollaterals(collateralData.collaterals);
        // Contract returns totalValue - assuming it's in 18 decimals (Platform Token decimals)
        // NOTE: Contract bug - getTotalCollateralValue sums values in different decimals (6 for USDT, 18 for Platform)
        // This should be fixed in the contract to normalize to 18 decimals
        setTotalCollateralValue(collateralData.totalValue);
      }
      if (maxBorrowAmount !== null) {
        setMaxBorrow(maxBorrowAmount);
      }
      setPoolStats(stats);
    } catch (error) {
      console.error('Error loading lending data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDepositSuccess = () => {
    loadData();
    setShowDepositModal(false);
  };

  const handleWithdrawSuccess = () => {
    loadData();
    setShowWithdrawModal(false);
  };

  const handleBorrowSuccess = () => {
    loadData();
    setShowBorrowModal(false);
  };

  const handleRepaySuccess = () => {
    loadData();
    setShowRepayModal(false);
  };

  // Check if user has no active loan (no debt = health factor is max uint256)
  // type(uint256).max / 1e18 is approximately 1.157920892373162e+59
  const MAX_HEALTH_FACTOR_THRESHOLD = 1e50; // Threshold to detect "no debt" case
  const hasActiveLoan = totalDebt > 0n && lendingData?.isActive;
  const hasCollateral = totalCollateralValue > 0n;
  
  const healthFactorNumber = healthFactor ? Number(healthFactor) / 1e18 : 0;
  // Show N/A only if there's NO collateral AND no debt
  // If there's collateral but no debt, show the health factor (it will be very high = safe)
  const isNoDebt = healthFactorNumber > MAX_HEALTH_FACTOR_THRESHOLD;
  const showNA = !hasCollateral && !hasActiveLoan; // Only show N/A when no collateral and no loan
  
  const healthFactorColor = showNA
    ? 'text-slate-400'
    : isNoDebt
    ? 'text-green-400' // Very high health factor = safe (green)
    : healthFactorNumber < 1.0
    ? 'text-red-400'
    : healthFactorNumber < 1.5
    ? 'text-yellow-400'
    : 'text-green-400';

  const healthFactorBg = showNA
    ? 'bg-slate-800/50 border-slate-700'
    : isNoDebt
    ? 'bg-green-500/20 border-green-500/30' // Very high = safe
    : healthFactorNumber < 1.0
    ? 'bg-red-500/20 border-red-500/30'
    : healthFactorNumber < 1.5
    ? 'bg-yellow-500/20 border-yellow-500/30'
    : 'bg-green-500/20 border-green-500/30';

  if (!address) {
    return (
      <div className="text-center py-12">
        <div className="text-slate-400 text-lg mb-2">Please connect your wallet</div>
        <div className="text-slate-500 text-sm">to access the lending platform</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Lending Platform</h1>
        <p className="text-slate-400 text-sm sm:text-base">
          Deposit collateral and borrow platform tokens
        </p>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="text-slate-400">Loading lending data...</div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Health Factor Card */}
          <div className={`${healthFactorBg} border rounded-lg p-4 sm:p-6`}>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Health Factor</h2>
                {showNA ? (
                  <>
                    <p className={`text-3xl sm:text-4xl font-bold ${healthFactorColor}`}>
                      N/A
                    </p>
                    <p className="text-sm text-slate-400 mt-2">
                      No active loan. Deposit collateral and borrow to see your health factor.
                    </p>
                  </>
                ) : isNoDebt ? (
                  <>
                    <p className={`text-3xl sm:text-4xl font-bold ${healthFactorColor}`}>
                      Safe
                    </p>
                    <p className="text-sm text-green-300 mt-2">
                      ✓ You have collateral but no debt. Your position is completely safe.
                    </p>
                  </>
                ) : (
                  <>
                    <p className={`text-3xl sm:text-4xl font-bold ${healthFactorColor}`}>
                      {healthFactorNumber.toFixed(2)}
                    </p>
                    {healthFactorNumber < 1.0 && (
                      <p className="text-sm text-red-300 mt-2">
                        ⚠️ Your position is at risk of liquidation!
                      </p>
                    )}
                    {healthFactorNumber >= 1.0 && healthFactorNumber < 1.5 && (
                      <p className="text-sm text-yellow-300 mt-2">
                        ⚠️ Your position is getting risky. Consider repaying debt.
                      </p>
                    )}
                    {healthFactorNumber >= 1.5 && (
                      <p className="text-sm text-green-300 mt-2">
                        ✓ Your position is healthy
                      </p>
                    )}
                  </>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => setShowRepayModal(true)}
                  disabled={!lendingData?.isActive || totalDebt === 0n}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-md font-medium transition-colors"
                >
                  Repay
                </button>
                <button
                  onClick={() => setShowDepositModal(true)}
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md font-medium transition-colors"
                >
                  Deposit Collateral
                </button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total Collateral */}
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <div className="text-sm text-slate-400 mb-1">Total Collateral</div>
              <div className="text-2xl font-bold text-white">
                {/* Contract returns totalValue - assuming 18 decimals for Platform Token */}
                {/* NOTE: Contract bug - values are in mixed decimals (6 for USDT, 18 for Platform) */}
                ${parseFloat(formatUnits(totalCollateralValue, 18)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>

            {/* Total Debt */}
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <div className="text-sm text-slate-400 mb-1">Total Debt</div>
              <div className="text-2xl font-bold text-white">
                {/* Use contract's total debt directly: borrowedAmount + interestAccrued */}
                {parseFloat(formatUnits(totalDebt, 18)).toLocaleString(undefined, { maximumFractionDigits: 0 })} PLATFORM
              </div>
              {interest > 0n && (
                <div className="text-xs text-slate-500 mt-1">
                  Interest: {parseFloat(formatUnits(interest, 18)).toLocaleString(undefined, { maximumFractionDigits: 6 })} PLATFORM
                </div>
              )}
            </div>

            {/* Max Borrow */}
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <div className="text-sm text-slate-400 mb-1">Max Borrowable</div>
              <div className="text-2xl font-bold text-white">
                {/* Contract returns maxBorrow - NOTE: Contract bug - may be in wrong decimals */}
                {parseFloat(formatUnits(maxBorrow, 18)).toLocaleString(undefined, { maximumFractionDigits: 6 })} PLATFORM
              </div>
            </div>

            {/* Pool Stats */}
            {poolStats && (
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="text-sm text-slate-400 mb-1">Pool Available</div>
                <div className="text-2xl font-bold text-white">
                  {/* Contract returns totalAvailable in 18 decimals (Platform Token decimals) */}
                  {parseFloat(formatUnits(poolStats.totalAvailable, 18)).toLocaleString(undefined, { maximumFractionDigits: 0 })} PLATFORM
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Total Borrowed: {parseFloat(formatUnits(poolStats.totalBorrowed, 18)).toLocaleString(undefined, { maximumFractionDigits: 0 })} PLATFORM
                </div>
              </div>
            )}
          </div>

          {/* Collateral List */}
          <div className="bg-slate-800/50 rounded-lg p-4 sm:p-6 border border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Your Collateral</h2>
              <button
                onClick={() => setShowDepositModal(true)}
                className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md text-sm font-medium transition-colors"
              >
                + Deposit
              </button>
            </div>
            {collaterals.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-slate-400 mb-2">No collateral deposited</div>
                <button
                  onClick={() => setShowDepositModal(true)}
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md text-sm font-medium transition-colors"
                >
                  Deposit Collateral
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {collaterals.map((collateral, idx) => {
                  const tokenSymbol =
                    collateral.token.toLowerCase() === usdtAddress.toLowerCase() ? 'USDT' : 'PLATFORM';
                  const decimals =
                    collateral.token.toLowerCase() === usdtAddress.toLowerCase() ? 6 : 18;
                  return (
                    <div
                      key={idx}
                      className="bg-slate-900/50 rounded-lg p-4 border border-slate-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                    >
                      <div>
                        <div className="text-lg font-bold text-white">
                          {formatUnits(collateral.amount, decimals)} {tokenSymbol}
                        </div>
                        <div className="text-sm text-slate-400">
                          Value: ${(Number(collateral.value) / 1e18).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setSelectedCollateralToken(collateral.token);
                            setShowWithdrawModal(true);
                          }}
                          className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-md text-sm font-medium transition-colors"
                        >
                          Withdraw
                        </button>
                        {/* Borrow button available for all collateral types */}
                        <button
                          onClick={() => {
                            setSelectedCollateralToken(collateral.token);
                            setShowBorrowModal(true);
                          }}
                          disabled={maxBorrow === 0n}
                          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-md text-sm font-medium transition-colors"
                        >
                          Borrow
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Active Loan Info */}
          {lendingData?.isActive && totalDebt > 0n && (
            <div className="bg-slate-800/50 rounded-lg p-4 sm:p-6 border border-slate-700">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">Active Loan</h2>
                <button
                  onClick={() => setShowRepayModal(true)}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium transition-colors"
                >
                  Repay
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-slate-400 mb-1">Borrowed Amount</div>
                  <div className="text-lg font-bold text-white">
                    {formatUnits(lendingData.borrowedAmount, 18)} PLATFORM
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Accrued Interest</div>
                  <div className="text-lg font-bold text-white">
                    {formatUnits(interest, 18)} PLATFORM
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Borrowed At</div>
                  <div className="text-lg font-bold text-white">
                    {new Date(Number(lendingData.borrowedAt) * 1000).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      )}

      {/* Modals */}
      <DepositCollateralModal
        isOpen={showDepositModal}
        onClose={() => setShowDepositModal(false)}
        onSuccess={handleDepositSuccess}
      />
      <WithdrawCollateralModal
        isOpen={showWithdrawModal}
        onClose={() => setShowWithdrawModal(false)}
        collateralToken={selectedCollateralToken}
        onSuccess={handleWithdrawSuccess}
      />
      <BorrowModal
        isOpen={showBorrowModal}
        onClose={() => setShowBorrowModal(false)}
        collateralToken={selectedCollateralToken}
        onSuccess={handleBorrowSuccess}
      />
      <RepayModal
        isOpen={showRepayModal}
        onClose={() => setShowRepayModal(false)}
        onSuccess={handleRepaySuccess}
      />
    </div>
  );
}

