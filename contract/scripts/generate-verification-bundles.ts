#!/usr/bin/env node

import fs from "fs";
import path from "path";

/**
 * Generate verification files for manual submission to HashScan
 */

const CONTRACTS = {
  SessionKeyModule: "0x5915f4BB40dD554bF0d756B224f5cadeDeC956B6",
  CPPayPaymaster: "0xdacC80e8606069caef02BD42b20D4067f896d101",
  SwapRouter: "0xe47af9cc9586C7812081743dBA0CdBbec7A2e3F9", 
  BillPaymentAdapter: "0x20e59dcCBD167A1345EDe8A748dD4e14e10FEE87",
};

const CONSTRUCTOR_ARGS = {
  SessionKeyModule: [],
  CPPayPaymaster: ["0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"],
  SwapRouter: ["0xB9bFaA29763C0b3c688361735c226C6fA54EF9cC"],
  BillPaymentAdapter: ["0xB9bFaA29763C0b3c688361735c226C6fA54EF9cC"],
};

function generateVerificationBundle(contractName: string, address: string) {
  console.log(`📦 Generating verification bundle for ${contractName}...`);
  
  const outputDir = path.join(__dirname, "../verification", contractName);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 1. Copy source code
  const sourcePath = path.join(__dirname, `../contracts/${contractName}.sol`);
  if (fs.existsSync(sourcePath)) {
    const destPath = path.join(outputDir, `${contractName}.sol`);
    fs.copyFileSync(sourcePath, destPath);
  }

  // 2. Copy metadata
  const metadataPath = path.join(__dirname, `../artifacts/contracts/${contractName}.sol/${contractName}.json`);
  if (fs.existsSync(metadataPath)) {
    const destPath = path.join(outputDir, "metadata.json");
    fs.copyFileSync(metadataPath, destPath);
  }

  // 3. Copy build info
  const buildInfoPath = path.join(__dirname, `../artifacts/build-info`);
  if (fs.existsSync(buildInfoPath)) {
    const buildFiles = fs.readdirSync(buildInfoPath);
    if (buildFiles.length > 0) {
      const latestBuild = buildFiles.sort().pop();
      if (latestBuild) {
        const srcBuildPath = path.join(buildInfoPath, latestBuild);
        const destBuildPath = path.join(outputDir, "build-info.json");
        fs.copyFileSync(srcBuildPath, destBuildPath);
      }
    }
  }

  // 4. Generate verification instructions
  const instructions = `
# Verification Instructions for ${contractName}

## Contract Details
- **Address**: ${address}
- **Network**: Hedera Testnet (Chain ID: 296)
- **Compiler Version**: 0.8.28
- **Optimization**: Enabled (200 runs)
- **EVM Version**: paris
${CONSTRUCTOR_ARGS[contractName as keyof typeof CONSTRUCTOR_ARGS].length > 0 ? 
  `- **Constructor Arguments**: ${JSON.stringify(CONSTRUCTOR_ARGS[contractName as keyof typeof CONSTRUCTOR_ARGS])}` : 
  '- **Constructor Arguments**: None'}

## Files in this directory:
- \`${contractName}.sol\` - Main source code
- \`metadata.json\` - Compilation metadata
- \`build-info.json\` - Full build information
- \`verification-instructions.md\` - This file

## Manual Verification Steps:

### Option 1: HashScan Web Interface
1. Visit: https://verify.hashscan.io/
2. Enter contract address: \`${address}\`
3. Select "Solidity (Single file)"
4. Upload \`${contractName}.sol\`
5. Set compiler version: \`0.8.28\`
6. Enable optimization with 200 runs
7. Set EVM version: \`paris\`
${CONSTRUCTOR_ARGS[contractName as keyof typeof CONSTRUCTOR_ARGS].length > 0 ? 
  `8. Enter constructor arguments: \`${JSON.stringify(CONSTRUCTOR_ARGS[contractName as keyof typeof CONSTRUCTOR_ARGS])}\`` : 
  '8. No constructor arguments needed'}
9. Submit for verification

### Option 2: Sourcify API
Use the metadata.json and source files to verify via Sourcify API.

### Option 3: Hardhat Verification
\`\`\`bash
npx hardhat verify --network hederaTestnet ${address}${CONSTRUCTOR_ARGS[contractName as keyof typeof CONSTRUCTOR_ARGS].length > 0 ? 
  ` ${CONSTRUCTOR_ARGS[contractName as keyof typeof CONSTRUCTOR_ARGS].map(arg => `"${arg}"`).join(' ')}` : 
  ''}
\`\`\`

## Links:
- HashScan: https://hashscan.io/testnet/contract/${address}
- Verification Tool: https://verify.hashscan.io/
- Hedera Docs: https://docs.hedera.com/hedera/core-concepts/smart-contracts/verifying-smart-contracts-beta
`;

  fs.writeFileSync(path.join(outputDir, "verification-instructions.md"), instructions.trim());
  
  console.log(`✅ Bundle created: ${outputDir}`);
  return outputDir;
}

async function main() {
  console.log("🚀 Generating verification bundles for all contracts...");
  console.log("");

  const bundles: string[] = [];

  for (const [contractName, address] of Object.entries(CONTRACTS)) {
    const bundlePath = generateVerificationBundle(contractName, address);
    bundles.push(bundlePath);
    console.log("");
  }

  console.log("🎉 All verification bundles generated!");
  console.log("");
  console.log("📂 Verification bundles created in:");
  bundles.forEach(bundle => console.log(`   ${bundle}`));
  
  console.log("");
  console.log("🔗 Quick verification links:");
  for (const [contractName, address] of Object.entries(CONTRACTS)) {
    console.log(`   ${contractName}: https://verify.hashscan.io/?address=${address}&chainId=296`);
  }

  console.log("");
  console.log("📋 Contract Addresses Summary:");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  for (const [contractName, address] of Object.entries(CONTRACTS)) {
    console.log(`${contractName.padEnd(20)} : ${address}`);
  }
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Failed to generate verification bundles:", error);
    process.exit(1);
  });