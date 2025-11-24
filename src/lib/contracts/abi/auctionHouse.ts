export const auctionHouseAbi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'listingId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'bidder', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'BidPlaced',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'listingId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'bidder', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'BidRefunded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'listingId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'winner', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'finalPrice', type: 'uint256' },
    ],
    name: 'AuctionSettled',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'listingId', type: 'uint256' },
      { internalType: 'uint256', name: 'bidAmount', type: 'uint256' },
    ],
    name: 'placeBid',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'listingId', type: 'uint256' }],
    name: 'settleAuction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'listingId', type: 'uint256' }],
    name: 'getAuction',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'listingId', type: 'uint256' },
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
          { internalType: 'address', name: 'seller', type: 'address' },
          { internalType: 'uint256', name: 'reservePrice', type: 'uint256' },
          { internalType: 'uint256', name: 'currentBid', type: 'uint256' },
          { internalType: 'address', name: 'currentBidder', type: 'address' },
          { internalType: 'uint256', name: 'startTime', type: 'uint256' },
          { internalType: 'uint256', name: 'endTime', type: 'uint256' },
          { internalType: 'bool', name: 'isActive', type: 'bool' },
          { internalType: 'bool', name: 'isSettled', type: 'bool' },
        ],
        internalType: 'struct IAuctionHouse.Auction',
        name: 'auction',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'listingId', type: 'uint256' }],
    name: 'getBidHistory',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'bidder', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'uint256', name: 'timestamp', type: 'uint256' },
        ],
        internalType: 'struct IAuctionHouse.Bid[]',
        name: 'bids',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minBidIncrementBps',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

