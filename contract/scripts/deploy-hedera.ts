import { ethers, ignition } from "hardhat";
import DeployAllModule from "../ignition/modules/DeployAll";

/**
 * Deploy all CPPay contracts to Hedera network
 * 
 * Usage:
 * npx hardhat run scripts/deploy-hedera.ts --network hederaTestnet
 */
async function main() {
  console.log("🚀 Starting deployment to Hedera...");
  
  const [deployer] = await ethers.getSigners();
  console.log("📝 Deploying with account:", deployer.address);
  
  // Check balance
  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("💰 Account balance:", ethers.formatEther(balance), "ETH");
  
  if (balance === 0n) {
    throw new Error("❌ Insufficient balance for deployment. Please fund your account.");
  }

  // Get network info
  const network = await ethers.provider.getNetwork();
  console.log("🌐 Network:", network.name, "| Chain ID:", network.chainId.toString());

  // Deploy all contracts using Hardhat Ignition
  console.log("🏗️  Deploying contracts...");
  const deployment = await ignition.deploy(DeployAllModule, {
    deploymentId: "cppay-hedera-deployment",
    parameters: {
      DeployAllModule: {
        entryPoint: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789", // EntryPoint v0.6
        admin: deployer.address,
      },
    },
  });

  // Get deployed contract addresses
  const sessionKeyModuleAddress = await deployment.sessionKeyModule.getAddress();
  const paymasterAddress = await deployment.paymaster.getAddress();
  const swapRouterAddress = await deployment.swapRouter.getAddress();
  const billPaymentAdapterAddress = await deployment.billPaymentAdapter.getAddress();

  console.log("\n✅ Deployment completed successfully!");
  console.log("📋 Contract Addresses:");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("SessionKeyModule:     ", sessionKeyModuleAddress);
  console.log("CPPayPaymaster:       ", paymasterAddress);
  console.log("SwapRouter:           ", swapRouterAddress);
  console.log("BillPaymentAdapter:   ", billPaymentAdapterAddress);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  // Save deployment info to file
  const deploymentInfo = {
    network: network.name,
    chainId: network.chainId.toString(),
    deployer: deployer.address,
    timestamp: new Date().toISOString(),
    contracts: {
      SessionKeyModule: sessionKeyModuleAddress,
      CPPayPaymaster: paymasterAddress,
      SwapRouter: swapRouterAddress,
      BillPaymentAdapter: billPaymentAdapterAddress,
    },
  };

  const fs = require('fs');
  const path = require('path');
  const deploymentDir = path.join(__dirname, "../deployments");
  if (!fs.existsSync(deploymentDir)) {
    fs.mkdirSync(deploymentDir, { recursive: true });
  }
  
  const deploymentFile = path.join(deploymentDir, `hedera-deployment-${Date.now()}.json`);
  fs.writeFileSync(deploymentFile, JSON.stringify(deploymentInfo, null, 2));
  console.log("💾 Deployment info saved to:", deploymentFile);

  console.log("\n🔍 Next steps:");
  console.log("1. Verify contracts on HashScan");
  console.log("2. Fund the Paymaster with ETH for gas sponsorship");
  console.log("3. Configure the SwapRouter with approved aggregators");
  console.log("4. Set up the BillPaymentAdapter with payment processors");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  });