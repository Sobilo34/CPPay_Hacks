import fs from "fs";
import path from "path";

/**
 * Extract proper metadata from Hardhat build-info files
 */

const CONTRACTS = ["SessionKeyModule", "CPPayPaymaster", "SwapRouter", "BillPaymentAdapter"];

function extractMetadataFromBuildInfo(contractName: string) {
  console.log(`📦 Extracting metadata for ${contractName}...`);
  
  const buildInfoDir = path.join(__dirname, "../artifacts/build-info");
  const verificationDir = path.join(__dirname, `../verification/${contractName}`);
  
  if (!fs.existsSync(buildInfoDir)) {
    console.log(`❌ Build info directory not found: ${buildInfoDir}`);
    return false;
  }
  
  // Get the latest build-info file
  const buildInfoFiles = fs.readdirSync(buildInfoDir);
  if (buildInfoFiles.length === 0) {
    console.log(`❌ No build-info files found in ${buildInfoDir}`);
    return false;
  }
  
  // Use the latest build-info file
  const latestBuildInfo = buildInfoFiles.sort().pop()!;
  const buildInfoPath = path.join(buildInfoDir, latestBuildInfo);
  
  try {
    const buildInfo = JSON.parse(fs.readFileSync(buildInfoPath, 'utf8'));
    
    // Find the contract in the build output
    const contractKey = `contracts/${contractName}.sol`;
    const contract = buildInfo.output?.contracts?.[contractKey]?.[contractName];
    
    if (!contract) {
      console.log(`❌ Contract ${contractName} not found in build info`);
      return false;
    }
    
    // Extract the metadata
    const metadataString = contract.metadata;
    if (!metadataString) {
      console.log(`❌ No metadata found for ${contractName}`);
      return false;
    }
    
    // Parse the metadata JSON
    const metadata = JSON.parse(metadataString);
    
    // Save the metadata to the verification directory
    const metadataPath = path.join(verificationDir, "metadata.json");
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
    
    console.log(`✅ Metadata extracted and saved: ${metadataPath}`);
    return true;
    
  } catch (error) {
    console.error(`❌ Error extracting metadata for ${contractName}:`, error);
    return false;
  }
}

async function main() {
  console.log("🚀 Extracting proper metadata from Hardhat build-info files...");
  console.log("");
  
  let successCount = 0;
  
  for (const contractName of CONTRACTS) {
    if (extractMetadataFromBuildInfo(contractName)) {
      successCount++;
    }
    console.log("");
  }
  
  console.log(`🎉 Metadata extraction completed! ${successCount}/${CONTRACTS.length} successful`);
  console.log("");
  console.log("📁 Now you can run the verification script:");
  console.log("   ./scripts/verify-sourcify.sh");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Failed to extract metadata:", error);
    process.exit(1);
  });