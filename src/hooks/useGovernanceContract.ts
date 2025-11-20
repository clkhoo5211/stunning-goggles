import { useAccount, useReadContract, useWriteContract, useBlockNumber } from 'wagmi';
import { formatUnits, keccak256, stringToBytes } from 'viem';
import { toast } from 'sonner';
import addresses from '@lib/contracts/addresses.json';
import { luckGovernorAbi } from '@lib/contracts/abi/luckGovernor';
import { luckTimelockAbi } from '@lib/contracts/abi/luckTimelock';
import { governanceTokenAbi } from '@lib/contracts/abi/governanceToken';
import { prettyRpcError } from '@utils/prettyRpcError';

// Get contract addresses from addresses.json or use placeholder
const getContractAddress = (contractName: string): `0x${string}` | undefined => {
  const contractAddress = (addresses.contracts as Record<string, string>)[contractName];
  if (contractAddress) {
    return contractAddress as `0x${string}`;
  }
  return undefined;
};

export function useGovernanceContract() {
  const { address, isConnected } = useAccount();
  const { data: blockNumber } = useBlockNumber({ watch: true });
  const { writeContractAsync } = useWriteContract();

  const governorAddress = getContractAddress('LuckGovernor');
  const timelockAddress = getContractAddress('LuckTimelock');
  const governanceTokenAddress = getContractAddress('GovernanceToken');

  // Governor contract reads
  const { data: votingDelay } = useReadContract({
    address: governorAddress,
    abi: luckGovernorAbi,
    functionName: 'votingDelay',
    query: { enabled: !!governorAddress },
  });

  const { data: votingPeriod } = useReadContract({
    address: governorAddress,
    abi: luckGovernorAbi,
    functionName: 'votingPeriod',
    query: { enabled: !!governorAddress },
  });

  const { data: proposalThreshold } = useReadContract({
    address: governorAddress,
    abi: luckGovernorAbi,
    functionName: 'proposalThreshold',
    query: { enabled: !!governorAddress },
  });

  const { data: quorumNumerator } = useReadContract({
    address: governorAddress,
    abi: luckGovernorAbi,
    functionName: 'quorumNumerator',
    query: { enabled: !!governorAddress },
  });

  const { data: quorumDenominator } = useReadContract({
    address: governorAddress,
    abi: luckGovernorAbi,
    functionName: 'quorumDenominator',
    query: { enabled: !!governorAddress },
  });

  const { data: timelockAddressFromGovernor } = useReadContract({
    address: governorAddress,
    abi: luckGovernorAbi,
    functionName: 'timelock',
    query: { enabled: !!governorAddress },
  });

  const { data: tokenAddressFromGovernor } = useReadContract({
    address: governorAddress,
    abi: luckGovernorAbi,
    functionName: 'token',
    query: { enabled: !!governorAddress },
  });

  // Timelock contract reads
  const { data: minDelay } = useReadContract({
    address: timelockAddress || (timelockAddressFromGovernor as `0x${string}` | undefined),
    abi: luckTimelockAbi,
    functionName: 'getMinDelay',
    query: { enabled: !!(timelockAddress || timelockAddressFromGovernor) },
  });

  // Governance Token reads
  const { data: tokenName } = useReadContract({
    address: governanceTokenAddress || (tokenAddressFromGovernor as `0x${string}` | undefined),
    abi: governanceTokenAbi,
    functionName: 'name',
    query: { enabled: !!(governanceTokenAddress || tokenAddressFromGovernor) },
  });

  const { data: tokenSymbol } = useReadContract({
    address: governanceTokenAddress || (tokenAddressFromGovernor as `0x${string}` | undefined),
    abi: governanceTokenAbi,
    functionName: 'symbol',
    query: { enabled: !!(governanceTokenAddress || tokenAddressFromGovernor) },
  });

  const { data: tokenTotalSupply } = useReadContract({
    address: governanceTokenAddress || (tokenAddressFromGovernor as `0x${string}` | undefined),
    abi: governanceTokenAbi,
    functionName: 'totalSupply',
    query: { enabled: !!(governanceTokenAddress || tokenAddressFromGovernor) },
  });

  const { data: userTokenBalance } = useReadContract({
    address: governanceTokenAddress || (tokenAddressFromGovernor as `0x${string}` | undefined),
    abi: governanceTokenAbi,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: { enabled: !!(governanceTokenAddress || tokenAddressFromGovernor) && !!address && isConnected },
  });

  const { data: userVotingPower } = useReadContract({
    address: governanceTokenAddress || (tokenAddressFromGovernor as `0x${string}` | undefined),
    abi: governanceTokenAbi,
    functionName: 'getVotes',
    args: address ? [address] : undefined,
    query: { enabled: !!(governanceTokenAddress || tokenAddressFromGovernor) && !!address && isConnected },
  });

  // Calculate quorum percentage
  const quorumPercentage = quorumNumerator && quorumDenominator
    ? (Number(quorumNumerator) / Number(quorumDenominator)) * 100
    : undefined;

  // Calculate current quorum (votes needed)
  const currentQuorum = blockNumber && quorumNumerator && quorumDenominator && tokenTotalSupply
    ? (Number(tokenTotalSupply) * Number(quorumNumerator)) / Number(quorumDenominator)
    : undefined;

  return {
    // Contract addresses
    governorAddress,
    timelockAddress: timelockAddress || (timelockAddressFromGovernor as `0x${string}` | undefined),
    governanceTokenAddress: governanceTokenAddress || (tokenAddressFromGovernor as `0x${string}` | undefined),

    // Governor settings
    votingDelay: votingDelay ? Number(votingDelay) : undefined,
    votingPeriod: votingPeriod ? Number(votingPeriod) : undefined,
    proposalThreshold: proposalThreshold ? formatUnits(proposalThreshold, 18) : undefined,
    quorumNumerator: quorumNumerator ? Number(quorumNumerator) : undefined,
    quorumDenominator: quorumDenominator ? Number(quorumDenominator) : undefined,
    quorumPercentage,
    currentQuorum: currentQuorum ? formatUnits(BigInt(Math.floor(currentQuorum)), 18) : undefined,

    // Timelock settings
    minDelay: minDelay ? Number(minDelay) : undefined,
    minDelayDays: minDelay ? Number(minDelay) / (24 * 60 * 60) : undefined,

    // Token info
    tokenName: tokenName as string | undefined,
    tokenSymbol: tokenSymbol as string | undefined,
    tokenTotalSupply: tokenTotalSupply ? formatUnits(tokenTotalSupply, 18) : undefined,

    // User info
    userTokenBalance: userTokenBalance ? formatUnits(userTokenBalance, 18) : undefined,
    userVotingPower: userVotingPower ? formatUnits(userVotingPower, 18) : undefined,

    // Status
    isConnected,
    hasContracts: !!(governorAddress || timelockAddress || governanceTokenAddress),
    blockNumber: blockNumber ? Number(blockNumber) : undefined,

    // Write functions
    propose: async (
      targets: `0x${string}`[],
      values: bigint[],
      calldatas: `0x${string}`[],
      description: string
    ) => {
      if (!governorAddress) throw new Error('Governor contract not available');
      try {
        const hash = await writeContractAsync({
          address: governorAddress,
          abi: luckGovernorAbi,
          functionName: 'propose',
          args: [targets, values, calldatas, description],
        });
        toast.success('Proposal created successfully!');
        return hash;
      } catch (error: any) {
        toast.error(error?.message || 'Failed to create proposal');
        throw error;
      }
    },

    castVote: async (proposalId: bigint, support: 0 | 1 | 2) => {
      if (!governorAddress) throw new Error('Governor contract not available');
      try {
        const hash = await writeContractAsync({
          address: governorAddress,
          abi: luckGovernorAbi,
          functionName: 'castVote',
          args: [proposalId, support],
        });
        toast.success('Vote cast successfully!');
        return hash;
      } catch (error: any) {
        const errorMessage = prettyRpcError(error);
        toast.error(errorMessage || 'Failed to cast vote');
        throw error;
      }
    },

    castVoteWithReason: async (proposalId: bigint, support: 0 | 1 | 2, reason: string) => {
      if (!governorAddress) throw new Error('Governor contract not available');
      try {
        const hash = await writeContractAsync({
          address: governorAddress,
          abi: luckGovernorAbi,
          functionName: 'castVoteWithReason',
          args: [proposalId, support, reason],
        });
        toast.success('Vote cast successfully!');
        return hash;
      } catch (error: any) {
        toast.error(error?.message || 'Failed to cast vote');
        throw error;
      }
    },

    queue: async (
      targets: `0x${string}`[],
      values: bigint[],
      calldatas: `0x${string}`[],
      descriptionHash: `0x${string}`
    ) => {
      if (!governorAddress) throw new Error('Governor contract not available');
      try {
        const hash = await writeContractAsync({
          address: governorAddress,
          abi: luckGovernorAbi,
          functionName: 'queue',
          args: [targets, values, calldatas, descriptionHash],
        });
        toast.success('Proposal queued successfully!');
        return hash;
      } catch (error: any) {
        toast.error(error?.message || 'Failed to queue proposal');
        throw error;
      }
    },

    execute: async (
      targets: `0x${string}`[],
      values: bigint[],
      calldatas: `0x${string}`[],
      descriptionHash: `0x${string}`
    ) => {
      if (!governorAddress) throw new Error('Governor contract not available');
      try {
        const hash = await writeContractAsync({
          address: governorAddress,
          abi: luckGovernorAbi,
          functionName: 'execute',
          args: [targets, values, calldatas, descriptionHash],
        });
        toast.success('Proposal executed successfully!');
        return hash;
      } catch (error: any) {
        toast.error(error?.message || 'Failed to execute proposal');
        throw error;
      }
    },

    cancel: async (
      targets: `0x${string}`[],
      values: bigint[],
      calldatas: `0x${string}`[],
      descriptionHash: `0x${string}`
    ) => {
      if (!governorAddress) throw new Error('Governor contract not available');
      try {
        const hash = await writeContractAsync({
          address: governorAddress,
          abi: luckGovernorAbi,
          functionName: 'cancel',
          args: [targets, values, calldatas, descriptionHash],
        });
        toast.success('Proposal canceled successfully!');
        return hash;
      } catch (error: any) {
        const errorMessage = prettyRpcError(error);
        toast.error(errorMessage || 'Failed to cancel proposal');
        throw error;
      }
    },

    // Helper function to create description hash
    hashDescription: (description: string): `0x${string}` => {
      return keccak256(stringToBytes(description));
    },
  };
}

