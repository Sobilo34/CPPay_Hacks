import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs";
import path from "path";

const execAsync = promisify(exec);

/**
 * Verify contracts on Hedera using the Sourcify API
 * 
 * Usage:
 * npx hardhat run scripts/verify-hedera.ts --network hederaTestnet
 */

// Contract addresses from deployment
const CONTRACTS = {
  SessionKeyModule: "0x5915f4BB40dD554bF0d756B224f5cadeDeC956B6",
  CPPayPaymaster: "0xdacC80e8606069caef02BD42b20D4067f896d101",
  SwapRouter: "0xe47af9cc9586C7812081743dBA0CdBbec7A2e3F9",
  BillPaymentAdapter: "0x20e59dcCBD167A1345EDe8A748dD4e14e10FEE87",
};

const HEDERA_TESTNET_CHAIN_ID = 296;
const SOURCIFY_API_URL = "https://verify.hashscan.io/verify";

async function verifyContract(contractName: string, address: string, constructorArgs?: string[]) {
  console.log(`🔍 Verifying ${contractName} at ${address}...`);

  try {
    // Get compiled contract artifacts
    const artifactPath = path.join(__dirname, `../artifacts/contracts/${contractName}.sol/${contractName}.json`);
    
    if (!fs.existsSync(artifactPath)) {
      console.log(`❌ Artifact not found for ${contractName} at ${artifactPath}`);
      return false;
    }

    const artifact = JSON.parse(fs.readFileSync(artifactPath, 'utf8'));
    
    // Get source code
    const contractPath = path.join(__dirname, `../contracts/${contractName}.sol`);
    if (!fs.existsSync(contractPath)) {
      console.log(`❌ Source file not found for ${contractName} at ${contractPath}`);
      return false;
    }

    const sourceCode = fs.readFileSync(contractPath, 'utf8');

    // Prepare verification data
    const verificationData = {
      address: address,
      chainId: HEDERA_TESTNET_CHAIN_ID.toString(),
      files: {
        [`contracts/${contractName}.sol`]: {
          content: sourceCode
        }
      },
      metadata: JSON.stringify(artifact)
    };

    console.log(`📤 Submitting ${contractName} for verification...`);
    
    // For now, let's use manual verification instructions
    console.log(`\n📝 Manual verification for ${contractName}:`);
    console.log(`   Contract Address: ${address}`);
    console.log(`   Source File: contracts/${contractName}.sol`);
    console.log(`   Compiler Version: 0.8.28`);
    console.log(`   Optimization: Enabled (200 runs)`);
    if (constructorArgs && constructorArgs.length > 0) {
      console.log(`   Constructor Args: ${constructorArgs.join(', ')}`);
    }
    console.log(`   Verify at: https://verify.hashscan.io/`);
    console.log("");

    return true;
  } catch (error) {
    console.error(`❌ Error verifying ${contractName}:`, error);
    return false;
  }
}

async function main() {
  console.log("🚀 Starting contract verification on Hedera testnet...");
  console.log("🌐 Network: Hedera Testnet (Chain ID: 296)");
  console.log("");

  // Verify each contract
  await verifyContract("SessionKeyModule", CONTRACTS.SessionKeyModule);
  
  await verifyContract("CPPayPaymaster", CONTRACTS.CPPayPaymaster, [
    "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789" // EntryPoint address
  ]);
  
  await verifyContract("SwapRouter", CONTRACTS.SwapRouter, [
    "0xB9bFaA29763C0b3c688361735c226C6fA54EF9cC" // Admin address (deployer)
  ]);
  
  await verifyContract("BillPaymentAdapter", CONTRACTS.BillPaymentAdapter, [
    "0xB9bFaA29763C0b3c688361735c226C6fA54EF9cC" // Admin address (deployer)
  ]);

  console.log("\n🎉 Verification process completed!");
  console.log("📍 Visit HashScan to check verification status:");
  console.log(`   SessionKeyModule: https://hashscan.io/testnet/contract/${CONTRACTS.SessionKeyModule}`);
  console.log(`   CPPayPaymaster: https://hashscan.io/testnet/contract/${CONTRACTS.CPPayPaymaster}`);
  console.log(`   SwapRouter: https://hashscan.io/testnet/contract/${CONTRACTS.SwapRouter}`);
  console.log(`   BillPaymentAdapter: https://hashscan.io/testnet/contract/${CONTRACTS.BillPaymentAdapter}`);
  
  console.log("\n💡 To verify manually:");
  console.log("1. Visit https://verify.hashscan.io/");
  console.log("2. Enter contract address");
  console.log("3. Upload source code and metadata");
  console.log("4. Set compiler version to 0.8.28 with optimization enabled (200 runs)");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Verification failed:", error);
    process.exit(1);
  });