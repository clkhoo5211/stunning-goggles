/**
 * Feature Toggle Configuration
 * Read from environment variables to enable/disable features
 */

export const featureConfig = {
  marketplace: import.meta.env.VITE_ENABLE_MARKETPLACE !== 'false',
  myNfts: import.meta.env.VITE_ENABLE_MY_NFTS !== 'false',
  lending: import.meta.env.VITE_ENABLE_LENDING !== 'false',
  governance: import.meta.env.VITE_ENABLE_GOVERNANCE !== 'false',
  faucet: import.meta.env.VITE_ENABLE_FAUCET !== 'false',
};

// Helper functions to check if features are enabled
export const isMarketplaceEnabled = () => featureConfig.marketplace;
export const isMyNftsEnabled = () => featureConfig.myNfts;
export const isLendingEnabled = () => featureConfig.lending;
export const isGovernanceEnabled = () => featureConfig.governance;
export const isFaucetEnabled = () => featureConfig.faucet;