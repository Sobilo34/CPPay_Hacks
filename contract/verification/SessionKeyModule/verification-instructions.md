# Verification Instructions for SessionKeyModule

## Contract Details
- **Address**: 0x5915f4BB40dD554bF0d756B224f5cadeDeC956B6
- **Network**: Hedera Testnet (Chain ID: 296)
- **Compiler Version**: 0.8.28
- **Optimization**: Enabled (200 runs)
- **EVM Version**: paris
- **Constructor Arguments**: None

## Files in this directory:
- `SessionKeyModule.sol` - Main source code
- `metadata.json` - Compilation metadata
- `build-info.json` - Full build information
- `verification-instructions.md` - This file

## Manual Verification Steps:

### Option 1: HashScan Web Interface
1. Visit: https://verify.hashscan.io/
2. Enter contract address: `0x5915f4BB40dD554bF0d756B224f5cadeDeC956B6`
3. Select "Solidity (Single file)"
4. Upload `SessionKeyModule.sol`
5. Set compiler version: `0.8.28`
6. Enable optimization with 200 runs
7. Set EVM version: `paris`
8. No constructor arguments needed
9. Submit for verification

### Option 2: Sourcify API
Use the metadata.json and source files to verify via Sourcify API.

### Option 3: Hardhat Verification
```bash
npx hardhat verify --network hederaTestnet 0x5915f4BB40dD554bF0d756B224f5cadeDeC956B6
```

## Links:
- HashScan: https://hashscan.io/testnet/contract/0x5915f4BB40dD554bF0d756B224f5cadeDeC956B6
- Verification Tool: https://verify.hashscan.io/
- Hedera Docs: https://docs.hedera.com/hedera/core-concepts/smart-contracts/verifying-smart-contracts-beta