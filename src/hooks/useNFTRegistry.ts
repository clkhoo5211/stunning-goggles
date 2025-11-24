import { usePublicClient } from 'wagmi';
import { nftRegistryAbi } from '@lib/contracts/abi/nftRegistry';
import addresses from '@lib/contracts/addresses.json';

export interface GameNFT {
  tokenId: bigint;
  gameType: `0x${string}`;
  gameId: `0x${string}`;
  skinName: string;
  buffConfig: {
    buffType: `0x${string}`;
    buffValue: bigint;
    targetGameType: `0x${string}`;
    isActive: boolean;
  };
  mintedAt: bigint;
  owner: `0x${string}`;
  minter: `0x${string}`;
}

export function useNFTRegistry() {
  const publicClient = usePublicClient();

  // Get contract address from addresses.json (will need to be added)
  const nftRegistryAddress = ((addresses.contracts as any).NFTRegistry || 
    (addresses.contracts as any).nftRegistry) as `0x${string}` | undefined;

  // Get NFT by tokenId
  const getNFT = async (tokenId: bigint): Promise<GameNFT | null> => {
    if (!nftRegistryAddress || !publicClient) return null;
    try {
      const result = await publicClient.readContract({
        address: nftRegistryAddress,
        abi: nftRegistryAbi,
        functionName: 'getNFT',
        args: [tokenId],
      });
      return result as GameNFT;
    } catch (error) {
      console.error('Error fetching NFT:', error);
      return null;
    }
  };

  // Get player NFTs by game type
  const getPlayerNFTs = async (playerAddress: `0x${string}`, gameType: `0x${string}`): Promise<bigint[]> => {
    if (!nftRegistryAddress || !publicClient) return [];
    try {
      const result = await publicClient.readContract({
        address: nftRegistryAddress,
        abi: nftRegistryAbi,
        functionName: 'getPlayerNFTs',
        args: [playerAddress, gameType],
      });
      return result as bigint[];
    } catch (error) {
      console.error('Error fetching player NFTs:', error);
      return [];
    }
  };

  // Check if NFT is registered
  const isNFTRegistered = async (tokenId: bigint): Promise<boolean> => {
    if (!nftRegistryAddress || !publicClient) return false;
    try {
      const result = await publicClient.readContract({
        address: nftRegistryAddress,
        abi: nftRegistryAbi,
        functionName: 'isNFTRegistered',
        args: [tokenId],
      });
      return result as boolean;
    } catch (error) {
      console.error('Error checking NFT registration:', error);
      return false;
    }
  };

  return {
    nftRegistryAddress,
    getNFT,
    getPlayerNFTs,
    isNFTRegistered,
  };
}

