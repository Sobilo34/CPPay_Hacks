# Verification Instructions for SwapRouter

## Contract Details
- **Address**: 0xe47af9cc9586C7812081743dBA0CdBbec7A2e3F9
- **Network**: Hedera Testnet (Chain ID: 296)
- **Compiler Version**: 0.8.28
- **Optimization**: Enabled (200 runs)
- **EVM Version**: paris
- **Constructor Arguments**: ["0xB9bFaA29763C0b3c688361735c226C6fA54EF9cC"]

## Files in this directory:
- `SwapRouter.sol` - Main source code
- `metadata.json` - Compilation metadata
- `build-info.json` - Full build information
- `verification-instructions.md` - This file

## Manual Verification Steps:

### Option 1: HashScan Web Interface
1. Visit: https://verify.hashscan.io/
2. Enter contract address: `0xe47af9cc9586C7812081743dBA0CdBbec7A2e3F9`
3. Select "Solidity (Single file)"
4. Upload `SwapRouter.sol`
5. Set compiler version: `0.8.28`
6. Enable optimization with 200 runs
7. Set EVM version: `paris`
8. Enter constructor arguments: `["0xB9bFaA29763C0b3c688361735c226C6fA54EF9cC"]`
9. Submit for verification

### Option 2: Sourcify API
Use the metadata.json and source files to verify via Sourcify API.

### Option 3: Hardhat Verification
```bash
npx hardhat verify --network hederaTestnet 0xe47af9cc9586C7812081743dBA0CdBbec7A2e3F9 "0xB9bFaA29763C0b3c688361735c226C6fA54EF9cC"
```

## Links:
- HashScan: https://hashscan.io/testnet/contract/0xe47af9cc9586C7812081743dBA0CdBbec7A2e3F9
- Verification Tool: https://verify.hashscan.io/
- Hedera Docs: https://docs.hedera.com/hedera/core-concepts/smart-contracts/verifying-smart-contracts-beta