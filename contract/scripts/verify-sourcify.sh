#!/bin/bash

# Hedera Sourcify Verification Script
# This script submits contracts to Hedera's Sourcify instance for verification

SOURCIFY_URL="https://server-verify.hashscan.io/verify"
CHAIN_ID="296"

# Contract addresses
declare -A CONTRACTS
CONTRACTS[SessionKeyModule]="0x5915f4BB40dD554bF0d756B224f5cadeDeC956B6"
CONTRACTS[CPPayPaymaster]="0xdacC80e8606069caef02BD42b20D4067f896d101"
CONTRACTS[SwapRouter]="0xe47af9cc9586C7812081743dBA0CdBbec7A2e3F9"
CONTRACTS[BillPaymentAdapter]="0x20e59dcCBD167A1345EDe8A748dD4e14e10FEE87"

echo "🚀 Starting contract verification with Hedera Sourcify..."
echo "🌐 Chain ID: $CHAIN_ID"
echo "📡 Sourcify URL: $SOURCIFY_URL"
echo ""

# Function to verify a single contract
verify_contract() {
    local contract_name=$1
    local address=$2
    
    echo "🔍 Verifying $contract_name at $address..."
    
    local verification_dir="./verification/$contract_name"
    
    if [ ! -d "$verification_dir" ]; then
        echo "❌ Verification directory not found: $verification_dir"
        return 1
    fi
    
    # Prepare files for submission
    local source_file="$verification_dir/$contract_name.sol"
    local metadata_file="$verification_dir/metadata.json"
    
    if [ ! -f "$source_file" ]; then
        echo "❌ Source file not found: $source_file"
        return 1
    fi
    
    if [ ! -f "$metadata_file" ]; then
        echo "❌ Metadata file not found: $metadata_file"
        return 1
    fi
    
    # Submit to Sourcify
    local response=$(curl -s -X POST \
        -F "address=$address" \
        -F "chain=$CHAIN_ID" \
        -F "files=@$source_file" \
        -F "files=@$metadata_file" \
        "$SOURCIFY_URL")
    
    echo "📤 Response: $response"
    
    # Check if verification was successful
    if echo "$response" | grep -q "Perfect match"; then
        echo "✅ $contract_name verified successfully (Perfect match)!"
        return 0
    elif echo "$response" | grep -q "Partial match"; then
        echo "⚠️  $contract_name verified with partial match"
        return 0
    elif echo "$response" | grep -q "already verified"; then
        echo "ℹ️  $contract_name is already verified"
        return 0
    else
        echo "❌ $contract_name verification failed"
        return 1
    fi
}

# Verify all contracts
verified_count=0
total_count=${#CONTRACTS[@]}

for contract_name in "${!CONTRACTS[@]}"; do
    address="${CONTRACTS[$contract_name]}"
    
    if verify_contract "$contract_name" "$address"; then
        ((verified_count++))
    fi
    
    echo ""
    sleep 2  # Wait between requests
done

echo "📊 Verification Summary:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Verified: $verified_count / $total_count contracts"

echo ""
echo "🔍 Check verification status on HashScan:"
for contract_name in "${!CONTRACTS[@]}"; do
    address="${CONTRACTS[$contract_name]}"
    echo "   $contract_name: https://hashscan.io/testnet/contract/$address"
done

echo ""
echo "📋 Contract Addresses:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
for contract_name in "${!CONTRACTS[@]}"; do
    address="${CONTRACTS[$contract_name]}"
    printf "%-20s : %s\n" "$contract_name" "$address"
done
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"