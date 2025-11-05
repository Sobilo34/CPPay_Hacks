import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import path from "path";

/**
 * Automated verification using Hedera's Sourcify instance
 */

const CONTRACTS = {
  SessionKeyModule: "0x5915f4BB40dD554bF0d756B224f5cadeDeC956B6",
  CPPayPaymaster: "0xdacC80e8606069caef02BD42b20D4067f896d101", 
  SwapRouter: "0xe47af9cc9586C7812081743dBA0CdBbec7A2e3F9",
  BillPaymentAdapter: "0x20e59dcCBD167A1345EDe8A748dD4e14e10FEE87",
};

const HEDERA_TESTNET_CHAIN_ID = "296";
const SOURCIFY_SERVER = "https://server-verify.hashscan.io";

interface VerificationResult {
  success: boolean;
  message: string;
  contractAddress: string;
}

async function getAllSourceFiles(): Promise<{ [key: string]: string }> {
  const sourceFiles: { [key: string]: string } = {};
  const contractsDir = path.join(__dirname, "../contracts");
  
  // Read all .sol files recursively
  function readDirRecursive(dir: string, basePath: string = ""): void {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const relativePath = path.join(basePath, file);
      
      if (fs.statSync(fullPath).isDirectory()) {
        readDirRecursive(fullPath, relativePath);
      } else if (file.endsWith('.sol')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        sourceFiles[relativePath] = content;
      }
    }
  }
  
  readDirRecursive(contractsDir);
  return sourceFiles;
}

async function verifyWithSourcify(contractAddress: string, contractName: string): Promise<VerificationResult> {
  try {
    console.log(`🔍 Verifying ${contractName} at ${contractAddress}...`);
    
    // Get metadata from artifacts
    const metadataPath = path.join(__dirname, `../artifacts/contracts/${contractName}.sol/${contractName}.json`);
    
    if (!fs.existsSync(metadataPath)) {
      return {
        success: false,
        message: `Metadata file not found: ${metadataPath}`,
        contractAddress
      };
    }

    const artifact = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    const metadata = JSON.stringify({
      compiler: {
        version: "0.8.28"
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
          bytecodeHash: "ipfs"
        },
        optimizer: {
          enabled: true,
          runs: 200
        },
        remappings: []
      },
      sources: {},
      version: 1
    }, null, 2);

    // Get all source files
    const sourceFiles = await getAllSourceFiles();
    
    // Create form data
    const formData = new FormData();
    formData.append('address', contractAddress);
    formData.append('chain', HEDERA_TESTNET_CHAIN_ID);
    
    // Add metadata
    formData.append('files', metadata, {
      filename: 'metadata.json',
      contentType: 'application/json'
    });
    
    // Add source files
    for (const [fileName, content] of Object.entries(sourceFiles)) {
      formData.append('files', content, {
        filename: fileName,
        contentType: 'text/plain'
      });
    }

    // Make verification request
    const response = await axios.post(SOURCIFY_SERVER, formData, {
      headers: {
        ...formData.getHeaders(),
        'Content-Type': 'multipart/form-data'
      },
      timeout: 30000
    });

    console.log(`✅ ${contractName} verification response:`, response.data);
    
    return {
      success: true,
      message: `Successfully submitted for verification`,
      contractAddress
    };

  } catch (error: any) {
    console.error(`❌ Error verifying ${contractName}:`, error.message);
    return {
      success: false,
      message: error.message,
      contractAddress
    };
  }
}

async function main() {
  console.log("🚀 Starting automated contract verification on Hedera testnet...");
  console.log("🌐 Using Hedera Sourcify instance");
  console.log("");

  const results: VerificationResult[] = [];

  // Verify each contract
  for (const [contractName, address] of Object.entries(CONTRACTS)) {
    const result = await verifyWithSourcify(address, contractName);
    results.push(result);
    
    // Wait between requests
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log("\n📊 Verification Summary:");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  
  for (const result of results) {
    const status = result.success ? "✅" : "❌";
    console.log(`${status} ${result.contractAddress}: ${result.message}`);
  }

  console.log("\n🔍 Check verification status on HashScan:");
  for (const [contractName, address] of Object.entries(CONTRACTS)) {
    console.log(`   ${contractName}: https://hashscan.io/testnet/contract/${address}`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Verification failed:", error);
    process.exit(1);
  });