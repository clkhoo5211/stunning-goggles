export const playerStorageAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "target",
        "type": "address"
      }
    ],
    "name": "AddressEmptyCode",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      }
    ],
    "name": "ERC1967InvalidImplementation",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ERC1967NonPayable",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "FailedCall",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidInitialization",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotInitializing",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "UUPSUnauthorizedCallContext",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "slot",
        "type": "bytes32"
      }
    ],
    "name": "UUPSUnsupportedProxiableUUID",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "version",
        "type": "uint64"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      }
    ],
    "name": "Upgraded",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "UPGRADE_INTERFACE_VERSION",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "player",
        "type": "address"
      }
    ],
    "name": "getPlayer",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint128",
            "name": "depositedBalance",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "winningsBalance",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "totalDeposited",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "totalWithdrawn",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "lifetimeWinnings",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "pendingPayout",
            "type": "uint128"
          },
          {
            "internalType": "uint256",
            "name": "pendingGameId",
            "type": "uint256"
          },
          {
            "internalType": "uint64",
            "name": "roundsRemaining",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "totalRoundsPlayed",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "lastDepositTime",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "lastPlayTimestamp",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "totalWins",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "totalLosses",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "firstPlayTimestamp",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "decisionDeadline",
            "type": "uint64"
          },
          {
            "internalType": "uint8",
            "name": "currentPosition",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "pendingStartCell",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "pendingEndCell",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "hasActiveSession",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "pendingRewardActive",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "lastDirectionClockwise",
            "type": "bool"
          },
          {
            "internalType": "uint8[5]",
            "name": "lastDiceValues",
            "type": "uint8[5]"
          }
        ],
        "internalType": "struct IPlayerStorage.PlayerState",
        "name": "state",
        "type": "tuple"
      },
      {
        "internalType": "bool",
        "name": "found",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "registryAddress",
        "type": "address"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "proxiableUUID",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "registry",
    "outputs": [
      {
        "internalType": "contract IPlayerRegistry",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "player",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint128",
            "name": "depositedBalance",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "winningsBalance",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "totalDeposited",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "totalWithdrawn",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "lifetimeWinnings",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "pendingPayout",
            "type": "uint128"
          },
          {
            "internalType": "uint256",
            "name": "pendingGameId",
            "type": "uint256"
          },
          {
            "internalType": "uint64",
            "name": "roundsRemaining",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "totalRoundsPlayed",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "lastDepositTime",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "lastPlayTimestamp",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "totalWins",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "totalLosses",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "firstPlayTimestamp",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "decisionDeadline",
            "type": "uint64"
          },
          {
            "internalType": "uint8",
            "name": "currentPosition",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "pendingStartCell",
            "type": "uint8"
          },
          {
            "internalType": "uint8",
            "name": "pendingEndCell",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "hasActiveSession",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "pendingRewardActive",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "lastDirectionClockwise",
            "type": "bool"
          },
          {
            "internalType": "uint8[5]",
            "name": "lastDiceValues",
            "type": "uint8[5]"
          }
        ],
        "internalType": "struct IPlayerStorage.PlayerState",
        "name": "state",
        "type": "tuple"
      }
    ],
    "name": "setPlayer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newImplementation",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "upgradeToAndCall",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
] as const;