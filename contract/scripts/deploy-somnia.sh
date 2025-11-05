#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 CPPay Smart Contract Deployment on Somnia Testnet${NC}"
echo -e "${BLUE}============================================${NC}"

# Check if .env file exists
if [ ! -f .env ]; then
    echo -e "${RED}❌ Error: .env file not found${NC}"
    exit 1
fi

# Load environment variables
source .env

# Check if Somnia testnet private key is set
if [ -z "$SOMNIA_TESTNET_PRIVATE_KEY" ]; then
    echo -e "${RED}❌ Error: SOMNIA_TESTNET_PRIVATE_KEY not set in .env file${NC}"
    exit 1
fi

echo -e "${YELLOW}📋 Pre-deployment checklist:${NC}"
echo -e "✅ Network: Somnia Testnet (Chain ID: 50312)"
echo -e "✅ RPC URL: $SOMNIA_TESTNET_RPC"
echo -e "✅ Deployer Address: 0xb9bfaa29763c0b3c688361735c226c6fa54ef9cc"
echo -e ""

# Get wallet balance
echo -e "${BLUE}💰 Checking wallet balance...${NC}"
BALANCE=$(cast balance 0xb9bfaa29763c0b3c688361735c226c6fa54ef9cc --rpc-url $SOMNIA_TESTNET_RPC 2>/dev/null || echo "0")
if [ "$BALANCE" = "0" ]; then
    echo -e "${YELLOW}⚠️  Warning: Could not fetch balance or balance is 0${NC}"
    echo -e "${YELLOW}    Please ensure you have STT tokens for gas fees${NC}"
    echo -e "${YELLOW}    Get testnet tokens from: https://devnet.somnia.network/${NC}"
else
    echo -e "${GREEN}✅ Wallet has balance: $BALANCE STT${NC}"
fi
echo -e ""

# Compile contracts
echo -e "${BLUE}🔨 Compiling contracts...${NC}"
npx hardhat compile
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Compilation failed${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Contracts compiled successfully${NC}"
echo -e ""

# Deploy contracts
echo -e "${BLUE}🚀 Deploying contracts to Somnia testnet...${NC}"
echo -e "${YELLOW}   This may take a few minutes...${NC}"
DEPLOY_OUTPUT=$(npx hardhat ignition deploy ignition/modules/SomniaDeployAll.ts --network somniaTestnet --deployment-id cppay-somnia-deployment 2>&1)
DEPLOY_STATUS=$?

echo "$DEPLOY_OUTPUT"

if [ $DEPLOY_STATUS -ne 0 ]; then
    echo -e "${RED}❌ Deployment failed${NC}"
    exit 1
fi

# Extract contract addresses from deployment output
SESSION_KEY_MODULE=$(echo "$DEPLOY_OUTPUT" | grep -o "SessionKeyModule#SessionKeyModule - 0x[a-fA-F0-9]*" | grep -o "0x[a-fA-F0-9]*")
PAYMASTER=$(echo "$DEPLOY_OUTPUT" | grep -o "CPPayPaymaster#CPPayPaymaster - 0x[a-fA-F0-9]*" | grep -o "0x[a-fA-F0-9]*")
SWAP_ROUTER=$(echo "$DEPLOY_OUTPUT" | grep -o "SwapRouter#SwapRouter - 0x[a-fA-F0-9]*" | grep -o "0x[a-fA-F0-9]*")
BILL_PAYMENT_ADAPTER=$(echo "$DEPLOY_OUTPUT" | grep -o "BillPaymentAdapter#BillPaymentAdapter - 0x[a-fA-F0-9]*" | grep -o "0x[a-fA-F0-9]*")

echo -e ""
echo -e "${GREEN}✅ Deployment successful!${NC}"
echo -e ""
echo -e "${BLUE}📋 Contract Addresses:${NC}"
echo -e "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}SessionKeyModule     : ${SESSION_KEY_MODULE:-'Not found'}${NC}"
echo -e "${GREEN}CPPayPaymaster       : ${PAYMASTER:-'Not found'}${NC}"
echo -e "${GREEN}SwapRouter           : ${SWAP_ROUTER:-'Not found'}${NC}"
echo -e "${GREEN}BillPaymentAdapter   : ${BILL_PAYMENT_ADAPTER:-'Not found'}${NC}"
echo -e "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e ""

# Start verification
echo -e "${BLUE}🔍 Starting contract verification...${NC}"

# Function to verify a contract
verify_contract() {
    local name=$1
    local address=$2
    local args="$3"
    
    if [ -z "$address" ]; then
        echo -e "${YELLOW}⚠️  Skipping $name verification - address not found${NC}"
        return
    fi
    
    echo -e "${BLUE}   Verifying $name at $address...${NC}"
    
    if [ -z "$args" ]; then
        npx hardhat verify --network somniaTestnet $address
    else
        npx hardhat verify --network somniaTestnet $address $args
    fi
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}   ✅ $name verified successfully${NC}"
    else
        echo -e "${RED}   ❌ $name verification failed${NC}"
    fi
}

# Verify contracts
verify_contract "SessionKeyModule" "$SESSION_KEY_MODULE"
verify_contract "CPPayPaymaster" "$PAYMASTER" "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"
verify_contract "SwapRouter" "$SWAP_ROUTER" "0xb9bfaa29763c0b3c688361735c226c6fa54ef9cc"
verify_contract "BillPaymentAdapter" "$BILL_PAYMENT_ADAPTER" "0xb9bfaa29763c0b3c688361735c226c6fa54ef9cc"

echo -e ""
echo -e "${GREEN}🎉 Somnia deployment and verification complete!${NC}"
echo -e ""
echo -e "${BLUE}🔍 Check your contracts on Somnia Explorer:${NC}"
if [ ! -z "$SESSION_KEY_MODULE" ]; then
    echo -e "   SessionKeyModule: https://shannon-explorer.somnia.network/address/$SESSION_KEY_MODULE"
fi
if [ ! -z "$PAYMASTER" ]; then
    echo -e "   CPPayPaymaster: https://shannon-explorer.somnia.network/address/$PAYMASTER"
fi
if [ ! -z "$SWAP_ROUTER" ]; then
    echo -e "   SwapRouter: https://shannon-explorer.somnia.network/address/$SWAP_ROUTER"
fi
if [ ! -z "$BILL_PAYMENT_ADAPTER" ]; then
    echo -e "   BillPaymentAdapter: https://shannon-explorer.somnia.network/address/$BILL_PAYMENT_ADAPTER"
fi
echo -e ""