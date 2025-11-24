import { useState, useEffect } from 'react';
import { useAccount, useReadContract } from 'wagmi';
import { keccak256, toBytes } from 'viem';
import { useNFTRegistry, GameNFT } from '@hooks/useNFTRegistry';
import { useNFTListings } from '@hooks/useNFTListings';
import { NFTCard } from '@components/nft';
import { CreateListingModal } from '@components/marketplace';
import { diceGameAbi } from '@lib/contracts/abi/diceGame';
import addresses from '@lib/contracts/addresses.json';

export default function MyNFTs() {
  const { address } = useAccount();
  const { getPlayerNFTs, getNFT } = useNFTRegistry();
  const { hasUserListing } = useNFTListings();
  const [nfts, setNfts] = useState<GameNFT[]>([]);
  const [nftListings, setNftListings] = useState<Map<string, boolean>>(new Map());
  const [loading, setLoading] = useState(true);
  const [selectedTokenId, setSelectedTokenId] = useState<bigint | null>(null);
  const [showCreateListing, setShowCreateListing] = useState(false);

  // Get gameType from DiceGame contract or calculate it
  const diceGameAddress = (addresses.contracts as any).DiceGame as `0x${string}` | undefined;
  const { data: gameTypeFromContract } = useReadContract({
    address: diceGameAddress,
    abi: diceGameAbi,
    functionName: 'gameType',
    enabled: !!diceGameAddress,
  });

  // Calculate DICE gameType: keccak256("DICE")
  const diceGameType = gameTypeFromContract || (keccak256(toBytes('DICE')) as `0x${string}`);

  useEffect(() => {
    if (address && diceGameType) {
      loadNFTs();
    }
  }, [address, diceGameType]);

  const loadNFTs = async () => {
    if (!address || !diceGameType) return;
    setLoading(true);
    try {
      // Use the DICE gameType to fetch player NFTs
      const tokenIds = await getPlayerNFTs(address, diceGameType);
      
      console.log(`[MyNFTs] getPlayerNFTs returned ${tokenIds.length} tokenIds for ${address}:`, tokenIds);
      
      // Fetch NFT details for each token
      const nftPromises = tokenIds.map((tokenId) => getNFT(tokenId));
      const nftResults = await Promise.all(nftPromises);
      
      // DEBUG: Log all NFT owners
      console.log(`[MyNFTs] Checking ownership for ${nftResults.length} NFTs:`);
      nftResults.forEach((nft, idx) => {
        if (nft) {
          console.log(`  NFT #${nft.tokenId}: owner=${nft.owner}, connected=${address}, match=${nft.owner.toLowerCase() === address.toLowerCase()}`);
        } else {
          console.log(`  NFT at index ${idx}: null`);
        }
      });
      
      // STRICT FILTER: Only include NFTs that are actually owned by the connected address
      // The contract's playerNFTs mapping might be out of sync after transfers
      const validNFTs = nftResults.filter((nft) => {
        if (!nft) {
          console.log(`[MyNFTs] Filtered out null NFT`);
          return false;
        }
        const nftOwnerLower = nft.owner.toLowerCase();
        const connectedAddressLower = address.toLowerCase();
        const isOwner = nftOwnerLower === connectedAddressLower;
        if (!isOwner) {
          console.log(`[MyNFTs] ❌ Filtered out NFT #${nft.tokenId} - owner: ${nft.owner} (${nftOwnerLower}), connected: ${address} (${connectedAddressLower})`);
        } else {
          console.log(`[MyNFTs] ✅ NFT #${nft.tokenId} owned by ${address}`);
        }
        return isOwner;
      }) as GameNFT[];
      
      console.log(`[MyNFTs] After ownership filter: ${validNFTs.length} NFTs owned by ${address}`);
      setNfts(validNFTs);
      
      // Check which NFTs are already listed using centralized hook
      const listingsMap = new Map<string, boolean>();
      for (const nft of validNFTs) {
        try {
          const hasListing = await hasUserListing(nft.tokenId, address);
          listingsMap.set(nft.tokenId.toString(), hasListing);
        } catch (error) {
          console.error(`Error checking listings for NFT ${nft.tokenId}:`, error);
          listingsMap.set(nft.tokenId.toString(), false);
        }
      }
      setNftListings(listingsMap);
    } catch (error) {
      console.error('Error loading NFTs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleList = (tokenId: bigint) => {
    // Check if already listed
    if (nftListings.get(tokenId.toString())) {
      return; // Don't allow listing if already listed
    }
    setSelectedTokenId(tokenId);
    setShowCreateListing(true);
  };

  if (!address) {
    return (
      <div className="text-center py-12">
        <div className="text-slate-400 text-lg mb-2">Please connect your wallet</div>
        <div className="text-slate-500 text-sm">to view your NFT collection</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">My NFTs</h1>
        <p className="text-slate-400 text-sm sm:text-base">
          Manage your NFT collection
        </p>
      </div>

      {/* NFTs Grid */}
      {loading ? (
        <div className="text-center py-12">
          <div className="text-slate-400">Loading your NFTs...</div>
        </div>
      ) : nfts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🎲</div>
          <div className="text-slate-400 text-lg mb-2">No NFTs found</div>
          <div className="text-slate-500 text-sm">
            You don't own any NFTs yet. Play games to earn NFTs!
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {nfts.map((nft) => {
            const isListed = nftListings.get(nft.tokenId.toString());
            return (
              <div key={nft.tokenId.toString()} className="relative">
                {isListed && (
                  <div className="absolute top-2 right-2 z-10 px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-xs text-green-300 font-medium">
                    Listed
                  </div>
                )}
                <NFTCard
                  nft={nft}
                  showActions
                  onList={isListed ? undefined : handleList}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Create Listing Modal */}
      {selectedTokenId && (
        <CreateListingModal
          isOpen={showCreateListing}
          onClose={() => {
            setShowCreateListing(false);
            setSelectedTokenId(null);
          }}
          tokenId={selectedTokenId}
          onSuccess={() => {
            loadNFTs();
            setShowCreateListing(false);
            setSelectedTokenId(null);
          }}
        />
      )}
    </div>
  );
}

