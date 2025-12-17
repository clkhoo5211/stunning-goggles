import { vi } from 'vitest';

// Mock environment variables
process.env.VITE_LOCAL_RPC = 'http://127.0.0.1:8545';
process.env.VITE_REOWN_PROJECT_ID = '1478687c5ec68d46a47d17c941950005';

// Mock wagmi
vi.mock('wagmi', () => ({
  useAccount: () => ({ isConnected: true, address: '0x1234567890123456789012345678901234567890' }),
  useBalance: () => ({ data: { formatted: '1.0' } }),
  useDisconnect: () => vi.fn(),
  useSwitchChain: () => vi.fn(),
}));

// Mock reown
vi.mock('@lib/reown', () => ({
  appKit: {
    open: vi.fn(),
  },
}));