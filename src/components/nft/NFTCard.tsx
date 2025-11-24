import { GameNFT } from '@hooks/useNFTRegistry';
import { Link } from 'react-router-dom';

interface NFTCardProps {
  nft: GameNFT;
  showActions?: boolean;
  onList?: (tokenId: bigint) => void;
}

export function NFTCard({ nft, showActions = false, onList }: NFTCardProps) {
  const buffValue = Number(nft.buffConfig.buffValue) / 100; // Convert from basis points to percentage

  return (
    <div className="bg-slate-800/50 rounded-lg p-4 sm:p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
      {/* NFT Image Placeholder */}
      <div className="w-full aspect-square bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
        <div className="text-4xl sm:text-6xl">🎲</div>
      </div>

      {/* NFT Info */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-bold text-white truncate">
            {nft.skinName || `NFT #${nft.tokenId.toString()}`}
          </h3>
          <span className="text-xs sm:text-sm text-slate-400">#{nft.tokenId.toString()}</span>
        </div>

        {/* Buff Info */}
        {nft.buffConfig.isActive && (
          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-md p-2 sm:p-3">
            <div className="text-xs sm:text-sm text-cyan-400 font-semibold mb-1">
              {nft.buffConfig.buffType === '0x0000000000000000000000000000000000000000000000000000000000000000'
                ? 'Buff Active'
                : 'Special Buff'}
            </div>
            <div className="text-xs sm:text-sm text-white">
              +{buffValue.toFixed(2)}% {nft.buffConfig.targetGameType === '0x0000000000000000000000000000000000000000000000000000000000000000' ? 'All Games' : 'Specific Game'}
            </div>
          </div>
        )}

        {/* Game Type */}
        <div className="text-xs sm:text-sm text-slate-400">
          Game: {nft.gameType === '0x0000000000000000000000000000000000000000000000000000000000000000' ? 'All' : 'Specific'}
        </div>

        {/* Actions */}
        {showActions && (
          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Link
              to={`/nft/${nft.tokenId.toString()}`}
              className="flex-1 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md text-sm sm:text-base font-medium transition-colors text-center"
            >
              View Details
            </Link>
            {onList && (
              <button
                onClick={() => onList(nft.tokenId)}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm sm:text-base font-medium transition-colors"
              >
                List for Sale
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

