import { describe, it, expect } from 'vitest';
import { encodeFunctionData, keccak256, toBytes } from 'viem';

import addresses from '@lib/contracts/addresses.json';
import { gameControllerAbi } from '@lib/contracts/abi/gameController';
import { calldataExecutorAbi } from '@lib/contracts/abi/calldataExecutor';

describe('Calldata preparation for contract calls', () => {
  const controllerAddress = addresses.contracts.GameController as `0x${string}`;

  it('encodes GameController.playRound correctly', () => {
    const isClockwise = true;
    const seed = 123456n;
    const encoded = encodeFunctionData({
      abi: gameControllerAbi,
      functionName: 'playRound',
      args: [isClockwise, seed],
    });

    const selector = keccak256(toBytes('playRound(bool,uint256)')).slice(0, 10);

    expect(encoded.slice(0, selector.length)).toBe(selector);
    // 68 bytes payload -> 4 selector + 2 * 32-byte args
    expect(encoded.length).toBe(2 + 8 + 64 * 2);
  });

  it('wraps playRound calldata for CalldataExecutor meta tx', () => {
    const encoded = encodeFunctionData({
      abi: gameControllerAbi,
      functionName: 'playRound',
      args: [false, 0n],
    });

    const metaTx = {
      target: controllerAddress,
      data: encoded,
      nonce: 0n,
      deadline: 0n,
    };

    // ensure ABI has executeMetaTransaction definition
    const hasMetaFn = calldataExecutorAbi.some(
      (item) => item.type === 'function' && item.name === 'executeMetaTransaction',
    );
    expect(hasMetaFn).toBe(true);
    expect(metaTx.target).toBe(controllerAddress);
    expect(metaTx.data).toBe(encoded);
  });
});

