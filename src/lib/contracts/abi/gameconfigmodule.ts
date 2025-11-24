export const gameconfigmoduleAbi = [
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
    "inputs": [],
    "name": "getClaimRefundPerRound",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCostPerRound",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMinDepositAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMinWithdrawAmount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMinWithdrawNet",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPenaltyConfig",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint16",
            "name": "baseBps",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "maxBps",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "roundsSlopeBps",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "pendingRewardSlopeBps",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "forfeitSlopeBps",
            "type": "uint16"
          }
        ],
        "internalType": "struct IGameConfigModule.PenaltyConfig",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPenaltyRefundPerRound",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRoundsPerPackage",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getSafetyConfig",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "reserveFloor",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "targetSafety",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minScaleBps",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "utilizationOffsetBps",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "utilizationSlopeBps",
            "type": "uint256"
          }
        ],
        "internalType": "struct IGameConfigModule.SafetyConfig",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getWithdrawFeeBps",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "costPerRound_",
        "type": "uint256"
      },
      {
        "internalType": "uint8",
        "name": "roundsPerPackage_",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "minDepositAmount_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minWithdrawAmount_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minWithdrawNet_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "withdrawFeeBps_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "penaltyRefundPerRound_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "claimRefundPerRound_",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "reserveFloor",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "targetSafety",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minScaleBps",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "utilizationOffsetBps",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "utilizationSlopeBps",
            "type": "uint256"
          }
        ],
        "internalType": "struct IGameConfigModule.SafetyConfig",
        "name": "safetyConfig_",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint16",
            "name": "baseBps",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "maxBps",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "roundsSlopeBps",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "pendingRewardSlopeBps",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "forfeitSlopeBps",
            "type": "uint16"
          }
        ],
        "internalType": "struct IGameConfigModule.PenaltyConfig",
        "name": "penaltyConfig_",
        "type": "tuple"
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
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newAmount",
        "type": "uint256"
      }
    ],
    "name": "setClaimRefundPerRound",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newCost",
        "type": "uint256"
      }
    ],
    "name": "setCostPerRound",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newMinDeposit",
        "type": "uint256"
      }
    ],
    "name": "setMinDepositAmount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newMinWithdrawAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "newMinWithdrawNet",
        "type": "uint256"
      }
    ],
    "name": "setMinWithdrawThresholds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint16",
            "name": "baseBps",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "maxBps",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "roundsSlopeBps",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "pendingRewardSlopeBps",
            "type": "uint16"
          },
          {
            "internalType": "uint16",
            "name": "forfeitSlopeBps",
            "type": "uint16"
          }
        ],
        "internalType": "struct IGameConfigModule.PenaltyConfig",
        "name": "cfg",
        "type": "tuple"
      }
    ],
    "name": "setPenaltyConfig",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newAmount",
        "type": "uint256"
      }
    ],
    "name": "setPenaltyRefundPerRound",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "newRounds",
        "type": "uint8"
      }
    ],
    "name": "setRoundsPerPackage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "reserveFloor",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "targetSafety",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minScaleBps",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "utilizationOffsetBps",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "utilizationSlopeBps",
            "type": "uint256"
          }
        ],
        "internalType": "struct IGameConfigModule.SafetyConfig",
        "name": "cfg",
        "type": "tuple"
      }
    ],
    "name": "setSafetyConfig",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "newFeeBps",
        "type": "uint256"
      }
    ],
    "name": "setWithdrawFeeBps",
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