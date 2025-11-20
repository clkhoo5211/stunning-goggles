export const gameBoardAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "MAX_DICE_SUM",
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
    "name": "MIN_DICE_SUM",
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
    "name": "TOTAL_CELLS",
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
    "inputs": [
      {
        "internalType": "uint8",
        "name": "startCell",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "diceSum",
        "type": "uint8"
      },
      {
        "internalType": "bool",
        "name": "isClockwise",
        "type": "bool"
      }
    ],
    "name": "calculateDestination",
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
    "name": "getAllPayouts",
    "outputs": [
      {
        "internalType": "int16[30]",
        "name": "",
        "type": "int16[30]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBoardSequence",
    "outputs": [
      {
        "internalType": "uint8[26]",
        "name": "",
        "type": "uint8[26]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "cellNumber",
        "type": "uint8"
      }
    ],
    "name": "getCellOrderIndex",
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
    "inputs": [
      {
        "internalType": "uint8",
        "name": "cellNumber",
        "type": "uint8"
      }
    ],
    "name": "getCellPayout",
    "outputs": [
      {
        "internalType": "int16",
        "name": "",
        "type": "int16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTotalCells",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "cellNumber",
        "type": "uint8"
      }
    ],
    "name": "isValidCell",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;
