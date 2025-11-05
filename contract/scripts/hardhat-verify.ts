import { run } from "hardhat";

/**
 * Verify contracts using Hardhat verify plugin
 */

const CONTRACTS = {
  SessionKeyModule: {
    address: "0x5915f4BB40dD554bF0d756B224f5cadeDeC956B6",
    constructorArguments: [],
  },
  CPPayPaymaster: {
    address: "0xdacC80e8606069caef02BD42b20D4067f896d101",
    constructorArguments: ["0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"],
  },
  SwapRouter: {
    address: "0xe47af9cc9586C7812081743dBA0CdBbec7A2e3F9",
    constructorArguments: ["0xB9bFaA29763C0b3c688361735c226C6fA54EF9cC"],
  },
  BillPaymentAdapter: {
    address: "0x20e59dcCBD167A1345EDe8A748dD4e14e10FEE87",
    constructorArguments: ["0xB9bFaA29763C0b3c688361735c226C6fA54EF9cC"],
  },
};

async function verifyContract(name: string, config: { address: string; constructorArguments: any[] }) {
  console.log(`🔍 Verifying ${name} at ${config.address}...`);
  
  try {
    await run("verify:verify", {
      address: config.address,
      constructorArguments: config.constructorArguments,
      contract: `contracts/${name}.sol:${name}`,
    });
    
    console.log(`✅ ${name} verified successfully!`);
    return true;
  } catch (error: any) {
    console.log(`❌ Failed to verify ${name}:`, error.message);
    
    // Check if it's already verified
    if (error.message.includes("already verified") || error.message.includes("Already Verified")) {
      console.log(`ℹ️  ${name} is already verified`);
      return true;
    }
    
    return false;
  }
}

async function main() {
  console.log("🚀 Starting contract verification using Hardhat...");
  console.log("🌐 Network: Hedera Testnet");
  console.log("");

  const results: { [key: string]: boolean } = {};

  for (const [contractName, config] of Object.entries(CONTRACTS)) {
    const success = await verifyContract(contractName, config);
    results[contractName] = success;
    
    // Wait between verifications
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("");
  }

  console.log("📊 Verification Summary:");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  
  for (const [contractName, success] of Object.entries(results)) {
    const status = success ? "✅ VERIFIED" : "❌ FAILED";
    const address = CONTRACTS[contractName as keyof typeof CONTRACTS].address;
    console.log(`${status.padEnd(12)} ${contractName.padEnd(20)} ${address}`);
  }
  
  console.log("");
  console.log("🔍 View verified contracts on HashScan:");
  for (const [contractName, config] of Object.entries(CONTRACTS)) {
    console.log(`   ${contractName}: https://hashscan.io/testnet/contract/${config.address}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Verification process failed:", error);
    process.exit(1);
  });