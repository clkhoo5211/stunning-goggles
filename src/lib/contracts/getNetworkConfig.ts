import addresses from './addresses.json';

/**
 * Get the target chain ID from addresses.json
 * This allows the frontend to automatically adapt to different networks
 */
export function getTargetChainId(): number {
  return addresses.chainId;
}

/**
 * Get the network name from addresses.json
 */
export function getNetworkName(): string {
  return addresses.network;
}

/**
 * Check if the current network is Sepolia
 */
export function isSepolia(): boolean {
  return addresses.chainId === 11155111;
}

/**
 * Check if the current network is Hardhat Local
 */
export function isHardhatLocal(): boolean {
  return addresses.chainId === 31337;
}

