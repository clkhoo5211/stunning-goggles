# Buy Rounds Error Fix

## Problem
The `buyRounds` function was failing with "Internal JSON-RPC error" because the frontend was calling it with a hardcoded value (10) instead of the exact value required by the contract.

## Root Cause
1. **Contract Requirement**: The `DepositModule.buyRounds()` function requires `numRounds` to exactly equal `getRoundsPerPackage()` from `GameConfigModule`:
   ```solidity
   if (numRounds != params.gameConfigModule.getRoundsPerPackage()) revert InvalidAmount();
   ```

2. **Frontend Issue**: The frontend was:
   - Not properly fetching `roundsPerPackage` from the contract (query was disabled)
   - Using a fallback value of 10 when `roundsPerPackage` was undefined
   - Calling `buyRounds(10)` which might not match the contract's configured value

## Solution

### 1. Fixed Contract Query
**File**: `frontend/src/hooks/useGameContract.ts`

- Enabled the `getRoundsPerPackage` query with proper ABI
- Enabled the `getCostPerRound` query with proper ABI
- Both queries now properly fetch values from `GameConfigModule`

```typescript
const { data: rawRoundsPerPackage } = useReadContract({
  address: addresses.contracts.GameConfigModule as `0x${string}`,
  abi: gameconfigmoduleAbi,  // ✅ Now using correct ABI
  functionName: 'getRoundsPerPackage' as const,
  query: {
    enabled: !!addresses.contracts.GameConfigModule,  // ✅ Now enabled
  },
});
```

### 2. Added Validation
**File**: `frontend/src/pages/DiceGame.tsx`

- Added validation to ensure `roundsPerPackage` is loaded before allowing `buyRounds`
- Use exact value from contract instead of fallback
- Better error messages for debugging

```typescript
// Validate that roundsPerPackage is loaded from contract
if (!roundsPerPackage) {
  toast.error('Loading game configuration... Please wait and try again.');
  return;
}

// Use the exact value from contract, not the fallback
await buyRounds(roundsPerPackage);  // ✅ Uses contract value
```

### 3. Improved Error Handling
- Added specific error message for `InvalidAmount` errors
- Shows the required rounds per package in error message
- Better user feedback during loading states

## Testing
1. ✅ Contract query now fetches `roundsPerPackage` correctly
2. ✅ Frontend validates value is loaded before calling `buyRounds`
3. ✅ Uses exact contract value instead of fallback
4. ✅ Better error messages for debugging

## Notes
- The fallback value of 10 is still used for display purposes only
- The actual `buyRounds` call now always uses the contract value
- Users will see a loading message if config is not yet loaded

