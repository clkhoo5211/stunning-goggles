import { useEffect, useMemo, useState } from 'react';
import { useAccount, usePublicClient } from 'wagmi';
import { formatUnits } from 'viem';
import addresses from '@lib/contracts/addresses.json';
import { nftMarketplaceAbi } from '@lib/contracts/abi/nftMarketplace';
import { auctionHouseAbi } from '@lib/contracts/abi/auctionHouse';
import { offerSystemAbi } from '@lib/contracts/abi/offerSystem';

export interface NFTHistoryEntry {
  txHash: `0x${string}`;
  logIndex?: number;
  action: string;
  tokenId?: bigint;
  listingId?: bigint;
  offerId?: bigint;
  amount: string;
  price?: string;
  paymentToken?: `0x${string}`;
  seller?: `0x${string}`;
  buyer?: `0x${string}`;
  offerer?: `0x${string}`;
  listingType?: 'Fixed Price' | 'Auction';
  timestamp?: number;
  blockNumber: bigint;
  // Game history compatible fields (optional for NFT entries)
  gameId?: number;
  rounds?: number;
  diceValues?: number[];
  diceSum?: number;
  isBaozi?: boolean;
  isClockwise?: boolean;
  startPosition?: number;
  endPosition?: number;
  payout?: string;
  deadline?: number;
}

export function useNFTHistory() {
  const { address } = useAccount();
  const publicClient = usePublicClient();
  const [history, setHistory] = useState<NFTHistoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const marketplaceAddress = useMemo(
    () => addresses.contracts.NFTMarketplace as `0x${string}`,
    [],
  );
  const auctionHouseAddress = useMemo(
    () => addresses.contracts.AuctionHouse as `0x${string}`,
    [],
  );
  const offerSystemAddress = useMemo(
    () => addresses.contracts.OfferSystem as `0x${string}`,
    [],
  );

  useEffect(() => {
    if (!address || !publicClient || 
        !marketplaceAddress || marketplaceAddress === '0x0000000000000000000000000000000000000000' ||
        !auctionHouseAddress || auctionHouseAddress === '0x0000000000000000000000000000000000000000' ||
        !offerSystemAddress || offerSystemAddress === '0x0000000000000000000000000000000000000000') {
      setHistory([]);
      return;
    }

    let isMounted = true;

    const parseMarketplaceLog = async (log: any): Promise<NFTHistoryEntry | null> => {
      if (!log.args) return null;
      const block = log.blockHash ? await publicClient.getBlock({ blockHash: log.blockHash }) : undefined;
      const eventTimestamp = block ? Number(block.timestamp) : undefined;

      if (log.eventName === 'ListingCreated') {
        const decimals = log.args.paymentToken?.toLowerCase() === addresses.contracts.MockUSDT?.toLowerCase() ? 6 : 18;
        return {
          txHash: log.transactionHash!,
          logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
          action: 'NFT Listed',
          tokenId: log.args.tokenId,
          listingId: log.args.listingId,
          price: formatUnits(log.args.price ?? 0n, decimals),
          paymentToken: log.args.paymentToken,
          seller: log.args.seller,
          listingType: Number(log.args.listingType) === 0 ? 'Fixed Price' : 'Auction',
          timestamp: eventTimestamp,
          blockNumber: log.blockNumber ?? 0n,
          amount: formatUnits(log.args.price ?? 0n, decimals),
        };
      } else if (log.eventName === 'NFTPurchased') {
        const decimals = log.args.paymentToken?.toLowerCase() === addresses.contracts.MockUSDT?.toLowerCase() ? 6 : 18;
        return {
          txHash: log.transactionHash!,
          logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
          action: 'NFT Purchased',
          tokenId: log.args.tokenId,
          listingId: log.args.listingId,
          price: formatUnits(log.args.price ?? 0n, decimals),
          paymentToken: log.args.paymentToken,
          seller: log.args.seller,
          buyer: log.args.buyer,
          timestamp: eventTimestamp,
          blockNumber: log.blockNumber ?? 0n,
          amount: formatUnits(log.args.price ?? 0n, decimals),
        };
      } else if (log.eventName === 'ListingCancelled') {
        return {
          txHash: log.transactionHash!,
          logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
          action: 'Listing Cancelled',
          tokenId: log.args.tokenId,
          listingId: log.args.listingId,
          timestamp: eventTimestamp,
          blockNumber: log.blockNumber ?? 0n,
          amount: '0',
        };
      }
      return null;
    };

    const parseAuctionLog = async (log: any): Promise<NFTHistoryEntry | null> => {
      if (!log.args) return null;
      const block = log.blockHash ? await publicClient.getBlock({ blockHash: log.blockHash }) : undefined;
      const eventTimestamp = block ? Number(block.timestamp) : undefined;

      if (log.eventName === 'BidPlaced') {
        // BidPlaced event: (uint256 indexed listingId, address indexed bidder, uint256 amount)
        // We need to fetch listing to get tokenId and paymentToken
        try {
          const listing = await publicClient.readContract({
            address: marketplaceAddress,
            abi: nftMarketplaceAbi,
            functionName: 'getListing',
            args: [log.args.listingId],
          });
          const decimals = listing.paymentToken?.toLowerCase() === addresses.contracts.MockUSDT?.toLowerCase() ? 6 : 18;
          return {
            txHash: log.transactionHash!,
            logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
            action: 'Auction Bid',
            tokenId: listing.tokenId,
            listingId: log.args.listingId,
            amount: formatUnits(log.args.amount ?? 0n, decimals),
            paymentToken: listing.paymentToken,
            buyer: log.args.bidder,
            timestamp: eventTimestamp,
            blockNumber: log.blockNumber ?? 0n,
          };
        } catch (error) {
          console.error('Error fetching listing for BidPlaced event:', error);
          return null;
        }
      } else if (log.eventName === 'BidRefunded') {
        // BidRefunded event: (uint256 indexed listingId, address indexed bidder, uint256 amount)
        try {
          const listing = await publicClient.readContract({
            address: marketplaceAddress,
            abi: nftMarketplaceAbi,
            functionName: 'getListing',
            args: [log.args.listingId],
          });
          const decimals = listing.paymentToken?.toLowerCase() === addresses.contracts.MockUSDT?.toLowerCase() ? 6 : 18;
          return {
            txHash: log.transactionHash!,
            logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
            action: 'Bid Refunded',
            tokenId: listing.tokenId,
            listingId: log.args.listingId,
            amount: formatUnits(log.args.amount ?? 0n, decimals),
            paymentToken: listing.paymentToken,
            buyer: log.args.bidder,
            timestamp: eventTimestamp,
            blockNumber: log.blockNumber ?? 0n,
          };
        } catch (error) {
          console.error('Error fetching listing for BidRefunded event:', error);
          return null;
        }
      } else if (log.eventName === 'AuctionSettled') {
        // AuctionSettled event: (uint256 indexed listingId, address indexed winner, uint256 finalPrice)
        try {
          const listing = await publicClient.readContract({
            address: marketplaceAddress,
            abi: nftMarketplaceAbi,
            functionName: 'getListing',
            args: [log.args.listingId],
          });
          const decimals = listing.paymentToken?.toLowerCase() === addresses.contracts.MockUSDT?.toLowerCase() ? 6 : 18;
          return {
            txHash: log.transactionHash!,
            logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
            action: 'Auction Settled',
            tokenId: listing.tokenId,
            listingId: log.args.listingId,
            amount: formatUnits(log.args.finalPrice ?? 0n, decimals),
            paymentToken: listing.paymentToken,
            seller: listing.seller,
            buyer: log.args.winner,
            timestamp: eventTimestamp,
            blockNumber: log.blockNumber ?? 0n,
          };
        } catch (error) {
          console.error('Error fetching listing for AuctionSettled event:', error);
          return null;
        }
      }
      return null;
    };

    const parseOfferLog = async (log: any): Promise<NFTHistoryEntry | null> => {
      if (!log.args) return null;
      const block = log.blockHash ? await publicClient.getBlock({ blockHash: log.blockHash }) : undefined;
      const eventTimestamp = block ? Number(block.timestamp) : undefined;
      const decimals = log.args.paymentToken?.toLowerCase() === addresses.contracts.MockUSDT?.toLowerCase() ? 6 : 18;

      if (log.eventName === 'OfferCreated') {
        return {
          txHash: log.transactionHash!,
          logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
          action: 'Offer Created',
          tokenId: log.args.tokenId,
          offerId: log.args.offerId,
          amount: formatUnits(log.args.amount ?? 0n, decimals),
          paymentToken: log.args.paymentToken,
          offerer: log.args.offerer,
          timestamp: eventTimestamp,
          blockNumber: log.blockNumber ?? 0n,
        };
      } else if (log.eventName === 'OfferAccepted') {
        return {
          txHash: log.transactionHash!,
          logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
          action: 'Offer Accepted',
          tokenId: log.args.tokenId,
          offerId: log.args.offerId,
          amount: formatUnits(log.args.amount ?? 0n, decimals),
          paymentToken: log.args.paymentToken,
          offerer: log.args.offerer,
          seller: log.args.nftOwner,
          timestamp: eventTimestamp,
          blockNumber: log.blockNumber ?? 0n,
        };
      } else if (log.eventName === 'OfferCancelled') {
        return {
          txHash: log.transactionHash!,
          logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
          action: 'Offer Cancelled',
          tokenId: log.args.tokenId,
          offerId: log.args.offerId,
          amount: formatUnits(log.args.refundAmount ?? 0n, decimals),
          paymentToken: log.args.paymentToken,
          offerer: log.args.offerer,
          timestamp: eventTimestamp,
          blockNumber: log.blockNumber ?? 0n,
        };
      } else if (log.eventName === 'OfferExpired') {
        return {
          txHash: log.transactionHash!,
          logIndex: typeof log.logIndex === 'number' ? log.logIndex : Number(log.logIndex ?? 0),
          action: 'Offer Expired',
          tokenId: log.args.tokenId,
          offerId: log.args.offerId,
          amount: formatUnits(log.args.refundAmount ?? 0n, decimals),
          paymentToken: log.args.paymentToken,
          offerer: log.args.offerer,
          timestamp: eventTimestamp,
          blockNumber: log.blockNumber ?? 0n,
        };
      }
      return null;
    };

    const fetchHistory = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Get current block and calculate a safe starting block (max 50,000 blocks back)
        const currentBlock = await publicClient.getBlockNumber();
        const maxBlockRange = 50000n;
        const fromBlock = currentBlock > maxBlockRange ? currentBlock - maxBlockRange : 0n;

        // Fetch marketplace events
        const marketplaceEvents = ['ListingCreated', 'NFTPurchased', 'ListingCancelled'] as const;
        const marketplaceLogs = await Promise.all(
          marketplaceEvents.map((eventName) =>
            publicClient.getContractEvents({
              address: marketplaceAddress,
              abi: nftMarketplaceAbi,
              eventName,
              fromBlock,
            }).catch(() => [])
          )
        );

        // Fetch auction events (BidPlaced, BidRefunded, AuctionSettled)
        const auctionEvents = ['BidPlaced', 'BidRefunded', 'AuctionSettled'] as const;
        const auctionLogs = await Promise.all(
          auctionEvents.map((eventName) =>
            publicClient.getContractEvents({
              address: auctionHouseAddress,
              abi: auctionHouseAbi,
              eventName,
              fromBlock,
            }).catch(() => [])
          )
        );

        // Fetch offer events
        const offerEvents = ['OfferCreated', 'OfferAccepted', 'OfferCancelled', 'OfferExpired'] as const;
        const offerLogs = await Promise.all(
          offerEvents.map((eventName) =>
            publicClient.getContractEvents({
              address: offerSystemAddress,
              abi: offerSystemAbi,
              eventName,
              fromBlock,
            }).catch(() => [])
          )
        );

        // Parse all logs
        const allParsed = await Promise.all([
          ...marketplaceLogs.flat().map(parseMarketplaceLog),
          ...auctionLogs.flat().map(parseAuctionLog),
          ...offerLogs.flat().map(parseOfferLog),
        ]);

        // Filter to only entries where user is involved (seller, buyer, offerer)
        const userEntries = allParsed.filter((entry): entry is NFTHistoryEntry => {
          if (!entry) return false;
          if (!address) return true; // Show all if no address
          const userLower = address.toLowerCase();
          return (
            entry.seller?.toLowerCase() === userLower ||
            entry.buyer?.toLowerCase() === userLower ||
            entry.offerer?.toLowerCase() === userLower
          );
        });

        if (!isMounted) return;
        const sorted = userEntries.sort((a, b) => Number(b.blockNumber - a.blockNumber));
        setHistory(sorted);
      } catch (err: any) {
        if (!isMounted) return;
        console.error('Failed to fetch NFT history', err);
        setError(err?.shortMessage || err?.message || 'Failed to load NFT history');
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchHistory();

    return () => {
      isMounted = false;
    };
  }, [address, publicClient, marketplaceAddress, auctionHouseAddress, offerSystemAddress]);

  return {
    history,
    isLoading,
    error,
  };
}

