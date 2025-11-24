import { createAppKit } from '@reown/appkit/react';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import {
  defineChain,
  type AppKitNetwork,
  mainnet,
  sepolia,
  polygon,
  arbitrum,
  base,
  optimism,
  bsc,
  avalanche,
} from '@reown/appkit/networks';
import { getTargetChainId } from './contracts/getNetworkConfig';

// Reown (WalletConnect) Project ID
export const projectId = import.meta.env.VITE_REOWN_PROJECT_ID || '1478687c5ec68d46a47d17c941950005';

export const hardhatLocal = defineChain({
  id: 31337,
  caipNetworkId: 'eip155:31337',
  chainNamespace: 'eip155',
  name: 'Hardhat Local',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['http://127.0.0.1:8545'] },
    public: { http: ['http://127.0.0.1:8545'] },
  },
  blockExplorers: {
    default: { name: 'Hardhat Local', url: 'http://127.0.0.1:8545' },
  },
});

// Export sepolia for use in components
export { sepolia };

// Dynamically determine the default network based on addresses.json
const targetChainId = getTargetChainId();
const defaultNetwork = targetChainId === 11155111 ? sepolia : hardhatLocal;

// Put the default network first so Wagmi uses it as default
export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [
  defaultNetwork,
  ...(targetChainId === 11155111 ? [hardhatLocal] : [sepolia]),
  mainnet,
  polygon,
  arbitrum,
  base,
  optimism,
  bsc,
  avalanche,
];

export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks,
  ssr: false,
});

export const wagmiConfig = wagmiAdapter.wagmiConfig;

const themeVariables: Record<string, string> = {
  '--w3m-accent': '#38bdf8',
  '--w3m-accent-fill-color': '#0f172a',
  '--w3m-background-color': '#020617',
  '--w3m-color-mix': '#22d3ee',
  '--w3m-color-mix-strength': '20',
  '--w3m-border-radius-master': '18',
  '--w3m-font-family': '"Inter", "Space Grotesk", sans-serif',
  '--w3m-text-big-bold-size': '18px',
  '--w3m-button-border-radius': '14px',
  '--w3m-success-color': '#34d399',
};

export const appKit = createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  // Note: The RPC URL for Hardhat Local is already configured in the hardhatLocal chain definition
  // The nativeCurrency balance should be fetched correctly when the wallet is on the Hardhat Local network
  metadata: {
    name: 'LuckChain',
    description: 'Provably Fair Blockchain Gaming Platform',
    url: 'https://luckchain.io',
    icons: ['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='],
  },
  features: {
    analytics: false,
    connectMethodsOrder: ['social', 'email', 'wallet'],
    legalCheckbox: true,
  },
  themeMode: 'dark',
  themeVariables,
  allowUnsupportedChain: true,
  enableMobileFullScreen: true,
  termsConditionsUrl: 'https://www.mytermsandconditions.com',
  privacyPolicyUrl: 'https://www.myprivacypolicy.com',
  allWallets: 'ONLY_MOBILE',
  enableCoinbase: false,
});

