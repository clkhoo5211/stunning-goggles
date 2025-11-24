import { describe, it, expect } from 'vitest';
import { encodeFunctionData, encodeAbiParameters, keccak256, toBytes } from 'viem';

import addresses from '@lib/contracts/addresses.json';
import { diceGameAbi } from '@lib/contracts/abi/diceGame';
import { gameControllerAbi } from '@lib/contracts/abi/gameController';
import { calldataExecutorAbi } from '@lib/contracts/abi/calldataExecutor';

describe('Calldata preparation for contract calls', () => {
  const controllerAddress = (addresses.contracts.DiceGame || addresses.contracts.GameController) as `0x${string}`;

  it('encodes DiceGame.play correctly (new architecture)', () => {
    const isClockwise = true;
    const seed = 123456n;
    // Encode gameParams as bytes - contract expects (bool, uint256)
    const gameParams = encodeAbiParameters(
      [
        { type: 'bool', name: 'isClockwise' },
        { type: 'uint256', name: 'unused' }
      ],
      [isClockwise, 0n]
    );
    const encoded = encodeFunctionData({
      abi: diceGameAbi,
      functionName: 'play',
      args: [gameParams, seed],
    });

    const selector = keccak256(toBytes('play(bytes,uint256)')).slice(0, 10);

    expect(encoded.slice(0, selector.length)).toBe(selector);
    // Should have selector + gameParams (bytes) + seed (uint256)
    expect(encoded.length).toBeGreaterThan(2 + 8 + 64 * 2); // At least selector + offset + length + data + seed
  });

  it('encodes GameController.playRound correctly (backward compatibility)', () => {
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

  it('wraps DiceGame.play calldata for CalldataExecutor meta tx (new architecture)', () => {
    const gameParams = encodeAbiParameters(
      [
        { type: 'bool', name: 'isClockwise' },
        { type: 'uint256', name: 'unused' }
      ],
      [false, 0n]
    );
    const encoded = encodeFunctionData({
      abi: diceGameAbi,
      functionName: 'play',
      args: [gameParams, 0n],
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

  it('wraps GameController.playRound calldata for CalldataExecutor meta tx (backward compatibility)', () => {
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

