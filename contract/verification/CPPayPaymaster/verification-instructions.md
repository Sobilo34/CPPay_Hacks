# Verification Instructions for CPPayPaymaster

## Contract Details
- **Address**: 0xdacC80e8606069caef02BD42b20D4067f896d101
- **Network**: Hedera Testnet (Chain ID: 296)
- **Compiler Version**: 0.8.28
- **Optimization**: Enabled (200 runs)
- **EVM Version**: paris
- **Constructor Arguments**: ["0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"]

## Files in this directory:
- `CPPayPaymaster.sol` - Main source code
- `metadata.json` - Compilation metadata
- `build-info.json` - Full build information
- `verification-instructions.md` - This file

## Manual Verification Steps:

### Option 1: HashScan Web Interface
1. Visit: https://verify.hashscan.io/
2. Enter contract address: `0xdacC80e8606069caef02BD42b20D4067f896d101`
3. Select "Solidity (Single file)"
4. Upload `CPPayPaymaster.sol`
5. Set compiler version: `0.8.28`
6. Enable optimization with 200 runs
7. Set EVM version: `paris`
8. Enter constructor arguments: `["0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"]`
9. Submit for verification

### Option 2: Sourcify API
Use the metadata.json and source files to verify via Sourcify API.

### Option 3: Hardhat Verification
```bash
npx hardhat verify --network hederaTestnet 0xdacC80e8606069caef02BD42b20D4067f896d101 "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"
```

## Links:
- HashScan: https://hashscan.io/testnet/contract/0xdacC80e8606069caef02BD42b20D4067f896d101
- Verification Tool: https://verify.hashscan.io/
- Hedera Docs: https://docs.hedera.com/hedera/core-concepts/smart-contracts/verifying-smart-contracts-beta