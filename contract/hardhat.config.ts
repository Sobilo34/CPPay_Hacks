import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const LISK_URL_RPC = process.env.LISK_URL_RPC;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const LISK_EXPLORER_KEY = process.env.LISK_EXPLORER_KEY || (() => { throw new Error("LISK_EXPLORER_KEY is not defined"); })();

// Hedera configuration
const HEDERA_TESTNET_RPC = process.env.HEDERA_TESTNET_RPC;
const HEDERA_MAINNET_RPC = process.env.HEDERA_MAINNET_RPC;
const HEDERA_TESTNET_PRIVATE_KEY = process.env.HEDERA_TESTNET_PRIVATE_KEY;
const HEDERA_MAINNET_PRIVATE_KEY = process.env.HEDERA_MAINNET_PRIVATE_KEY;

// Somnia configuration
const SOMNIA_TESTNET_RPC = process.env.SOMNIA_TESTNET_RPC;
const SOMNIA_TESTNET_PRIVATE_KEY = process.env.SOMNIA_TESTNET_PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    lisk: {
      url: LISK_URL_RPC,
      accounts: [PRIVATE_KEY ? (PRIVATE_KEY.startsWith("0x") ? PRIVATE_KEY : `0x${PRIVATE_KEY}`) : (() => { throw new Error("PRIVATE_KEY is not defined"); })()]
    },
    hederaTestnet: {
      url: HEDERA_TESTNET_RPC,
      accounts: [HEDERA_TESTNET_PRIVATE_KEY ? (HEDERA_TESTNET_PRIVATE_KEY.startsWith("0x") ? HEDERA_TESTNET_PRIVATE_KEY : `0x${HEDERA_TESTNET_PRIVATE_KEY}`) : (() => { throw new Error("HEDERA_TESTNET_PRIVATE_KEY is not defined"); })()],
      chainId: 296
    },
    hederaMainnet: {
      url: HEDERA_MAINNET_RPC,
      accounts: [HEDERA_MAINNET_PRIVATE_KEY ? (HEDERA_MAINNET_PRIVATE_KEY.startsWith("0x") ? HEDERA_MAINNET_PRIVATE_KEY : `0x${HEDERA_MAINNET_PRIVATE_KEY}`) : (() => { throw new Error("HEDERA_MAINNET_PRIVATE_KEY is not defined"); })()],
      chainId: 295
    },
    somniaTestnet: {
      url: SOMNIA_TESTNET_RPC,
      accounts: [SOMNIA_TESTNET_PRIVATE_KEY ? (SOMNIA_TESTNET_PRIVATE_KEY.startsWith("0x") ? SOMNIA_TESTNET_PRIVATE_KEY : `0x${SOMNIA_TESTNET_PRIVATE_KEY}`) : (() => { throw new Error("SOMNIA_TESTNET_PRIVATE_KEY is not defined"); })()],
      chainId: 50312
    },
  },
  etherscan: {
    apiKey: {
      lisk: LISK_EXPLORER_KEY,
      hederaTestnet: "NONE", // Hedera uses a different verification approach
      hederaMainnet: "NONE",
      somniaTestnet: "empty" // Somnia testnet doesn't require API key
    },
    customChains: [
      {
        network: "lisk",
        chainId: 4202,
        urls: {
          apiURL: "https://sepolia-blockscout.lisk.com/api",
          browserURL: "https://sepolia-blockscout.lisk.com"
        }
      },
      {
        network: "hederaTestnet",
        chainId: 296,
        urls: {
          apiURL: "https://testnet.mirrornode.hedera.com/api/v1/",
          browserURL: "https://hashscan.io/testnet/"
        }
      },
      {
        network: "hederaMainnet", 
        chainId: 295,
        urls: {
          apiURL: "https://mainnet-public.mirrornode.hedera.com/api/v1/",
          browserURL: "https://hashscan.io/mainnet/"
        }
      },
      {
        network: "somniaTestnet",
        chainId: 50312,
        urls: {
          apiURL: "https://shannon-explorer.somnia.network/api",
          browserURL: "https://shannon-explorer.somnia.network"
        }
      }
    ]
  },
  sourcify: {
    enabled: false,
  },
};

export default config;