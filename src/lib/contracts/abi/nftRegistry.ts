export const nftRegistryAbi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { indexed: true, internalType: 'bytes32', name: 'gameType', type: 'bytes32' },
      { indexed: true, internalType: 'bytes32', name: 'gameId', type: 'bytes32' },
      { indexed: false, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: false, internalType: 'string', name: 'skinName', type: 'string' },
    ],
    name: 'NFTRegistered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
    ],
    name: 'NFTTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      {
        components: [
          { internalType: 'bytes32', name: 'buffType', type: 'bytes32' },
          { internalType: 'uint256', name: 'buffValue', type: 'uint256' },
          { internalType: 'bytes32', name: 'targetGameType', type: 'bytes32' },
          { internalType: 'bool', name: 'isActive', type: 'bool' },
        ],
        indexed: false,
        internalType: 'struct INFTRegistry.NFTBuffConfig',
        name: 'buffConfig',
        type: 'tuple',
      },
    ],
    name: 'BuffConfigUpdated',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'bytes32', name: 'gameType', type: 'bytes32' },
      { internalType: 'bytes32', name: 'gameId', type: 'bytes32' },
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'string', name: 'skinName', type: 'string' },
      {
        components: [
          { internalType: 'bytes32', name: 'buffType', type: 'bytes32' },
          { internalType: 'uint256', name: 'buffValue', type: 'uint256' },
          { internalType: 'bytes32', name: 'targetGameType', type: 'bytes32' },
          { internalType: 'bool', name: 'isActive', type: 'bool' },
        ],
        internalType: 'struct INFTRegistry.NFTBuffConfig',
        name: 'buffConfig',
        type: 'tuple',
      },
    ],
    name: 'registerNFT',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'getNFT',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
          { internalType: 'bytes32', name: 'gameType', type: 'bytes32' },
          { internalType: 'bytes32', name: 'gameId', type: 'bytes32' },
          { internalType: 'string', name: 'skinName', type: 'string' },
          {
            components: [
              { internalType: 'bytes32', name: 'buffType', type: 'bytes32' },
              { internalType: 'uint256', name: 'buffValue', type: 'uint256' },
              { internalType: 'bytes32', name: 'targetGameType', type: 'bytes32' },
              { internalType: 'bool', name: 'isActive', type: 'bool' },
            ],
            internalType: 'struct INFTRegistry.NFTBuffConfig',
            name: 'buffConfig',
            type: 'tuple',
          },
          { internalType: 'uint256', name: 'mintedAt', type: 'uint256' },
          { internalType: 'address', name: 'owner', type: 'address' },
          { internalType: 'address', name: 'minter', type: 'address' },
        ],
        internalType: 'struct INFTRegistry.GameNFT',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'player', type: 'address' },
      { internalType: 'bytes32', name: 'gameType', type: 'bytes32' },
    ],
    name: 'getPlayerNFTs',
    outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
    ],
    name: 'transferNFT',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      {
        components: [
          { internalType: 'bytes32', name: 'buffType', type: 'bytes32' },
          { internalType: 'uint256', name: 'buffValue', type: 'uint256' },
          { internalType: 'bytes32', name: 'targetGameType', type: 'bytes32' },
          { internalType: 'bool', name: 'isActive', type: 'bool' },
        ],
        internalType: 'struct INFTRegistry.NFTBuffConfig',
        name: 'buffConfig',
        type: 'tuple',
      },
    ],
    name: 'updateBuffConfig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'isNFTRegistered',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

