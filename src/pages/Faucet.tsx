import { useAccount } from 'wagmi';
import { Wallet } from 'lucide-react';
import addresses from '@lib/contracts/addresses.json';
import { ClaimETH } from '@components/faucet/ClaimETH';
import { ClaimUSDT } from '@components/faucet/ClaimUSDT';
import { ClaimPlatformToken } from '@components/faucet/ClaimPlatformToken';

export default function Faucet() {
  const { isConnected } = useAccount();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
      {/* Header Section */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-white">
          Testnet Faucet
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          Claim free test tokens for development and testing on localhost
        </p>
      </div>

      {/* Wallet Connection Warning */}
      {!isConnected && (
        <div className="mb-4 sm:mb-6 p-3 sm:p-4 border border-yellow-500/50 bg-yellow-500/10 rounded-lg">
          <div className="flex items-center gap-2 sm:gap-3">
            <Wallet className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-yellow-200">
              Please connect your wallet to claim tokens
            </p>
          </div>
        </div>
      )}

      {/* Token Claim Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <ClaimETH compact={false} />
        <ClaimUSDT compact={false} />
        <ClaimPlatformToken compact={false} />
      </div>

      {/* Faucet Information Section */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6">
        <div className="mb-3 sm:mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-white">Faucet Information</h3>
        </div>
        <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-400">
          <p className="break-words">
            <strong className="text-slate-200">Network:</strong>{' '}
            {addresses.network} (Chain ID: {addresses.chainId})
          </p>
          <p className="break-words">
            <strong className="text-slate-200">Faucet Address:</strong>{' '}
            <code className="text-xs bg-slate-800 px-2 py-1 rounded break-all inline-block max-w-full">
              {addresses.contracts.TestnetFaucet}
            </code>
          </p>
          <p>
            <strong className="text-slate-200">Cooldown:</strong> 2 hours between claims per token type
          </p>
          <p>
            <strong className="text-slate-200">Note:</strong> This faucet is only available on localhost/testnet.
            ETH is automatically provided by the Hardhat node.
          </p>
        </div>
      </div>
    </div>
  );
}

