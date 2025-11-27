# Buy Rounds Debugging Guide

## Issue
The `buyRounds` function is failing with "Internal JSON-RPC error" even though the correct number of rounds (10) is being passed.

## Root Cause Analysis

### Contract Requirements
The `DepositModule.buyRounds()` function has several validation checks:
1. ✅ `numRounds == getRoundsPerPackage()` - This should pass (10 == 10)
2. ❓ `!state.pendingRewardActive` - Check if player has pending reward
3. ❓ `!(state.hasActiveSession && state.roundsRemaining > 0)` - Check if active session exists
4. ❓ `state.depositedBalance >= totalCost` - Check if player has enough balance

### Possible Causes
1. **Pending Reward Active**: Player might have a pending reward that needs to be resolved first
2. **Active Session**: Player might already have an active session with remaining rounds
3. **Insufficient Balance**: Player's deposited balance might be less than the total cost
4. **Contract Paused**: The contract might be paused
5. **Network/RPC Issue**: The RPC endpoint might be having issues

## Debugging Steps

### 1. Check Console Logs
The frontend now logs:
- `roundsPerPackage` value
- `roundsToBuy` value
- Player state before calling `buyRounds`
- Error details

### 2. Check Player State
Before calling `buyRounds`, verify:
- `playerState.pendingRewardActive === false`
- `playerState.hasActiveSession === false` OR `playerState.roundsRemaining === 0`
- `playerState.depositedBalance >= totalCost`

### 3. Check Contract State
Verify:
- Contract is not paused: `await diceGame.paused()` should return `false`
- `getRoundsPerPackage()` returns the expected value (10)

### 4. Test Directly
Use the test script to verify:
```bash
cd contracts
npx hardhat run scripts/test-full-flow.ts --network localhost
```

## Solution

The frontend now:
1. ✅ Validates `roundsPerPackage` is loaded before allowing `buyRounds`
2. ✅ Uses exact contract value instead of fallback
3. ✅ Provides better error messages
4. ✅ Logs debug information

## Next Steps

If the error persists:
1. Check browser console for detailed error logs
2. Verify player state in the contract
3. Check if contract is paused
4. Verify network connection and RPC endpoint

