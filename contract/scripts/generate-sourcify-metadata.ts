import fs from "fs";
import path from "path";

/**
 * Generate proper Sourcify metadata from Hardhat artifacts
 */

const CONTRACTS = ["SessionKeyModule", "CPPayPaymaster", "SwapRouter", "BillPaymentAdapter"];

function generateSourcifyMetadata(contractName: string) {
  console.log(`📦 Generating Sourcify metadata for ${contractName}...`);
  
  const artifactPath = path.join(__dirname, `../artifacts/contracts/${contractName}.sol/${contractName}.json`);
  const sourcePath = path.join(__dirname, `../contracts/${contractName}.sol`);
  const verificationDir = path.join(__dirname, `../verification/${contractName}`);
  
  if (!fs.existsSync(artifactPath)) {
    console.log(`❌ Artifact not found: ${artifactPath}`);
    return false;
  }
  
  if (!fs.existsSync(sourcePath)) {
    console.log(`❌ Source file not found: ${sourcePath}`);
    return false;
  }
  
  const artifact = JSON.parse(fs.readFileSync(artifactPath, 'utf8'));
  const sourceCode = fs.readFileSync(sourcePath, 'utf8');
  
  // Create Sourcify-compatible metadata
  const metadata = {
    compiler: {
      version: "0.8.28+commit.7893614a"
    },
    language: "Solidity",
    output: {
      abi: artifact.abi,
      devdoc: artifact.devdoc || {},
      userdoc: artifact.userdoc || {}
    },
    settings: {
      compilationTarget: {
        [`contracts/${contractName}.sol`]: contractName
      },
      evmVersion: "paris",
      libraries: {},
      metadata: {
        bytecodeHash: "ipfs",
        useLiteralContent: true
      },
      optimizer: {
        enabled: true,
        runs: 200
      },
      remappings: []
    },
    sources: {
      [`contracts/${contractName}.sol`]: {
        keccak256: "", // Will be filled by Sourcify
        license: "MIT",
        content: sourceCode
      }
    },
    version: 1
  };
  
  // Write Sourcify metadata
  const metadataPath = path.join(verificationDir, "metadata.json");
  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
  
  console.log(`✅ Sourcify metadata generated: ${metadataPath}`);
  return true;
}

async function main() {
  console.log("🚀 Generating Sourcify-compatible metadata for all contracts...");
  console.log("");
  
  for (const contractName of CONTRACTS) {
    generateSourcifyMetadata(contractName);
    console.log("");
  }
  
  console.log("🎉 All metadata files generated!");
  console.log("");
  console.log("📁 You can now run the verification script:");
  console.log("   ./scripts/verify-sourcify.sh");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Failed to generate metadata:", error);
    process.exit(1);
  });