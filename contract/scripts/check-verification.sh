#!/bin/bash

# Check verification status of deployed contracts on HashScan

echo "🔍 Checking verification status of CPPay contracts on Hedera..."
echo ""

declare -A CONTRACTS
CONTRACTS[SessionKeyModule]="0x5915f4BB40dD554bF0d756B224f5cadeDeC956B6"
CONTRACTS[CPPayPaymaster]="0xdacC80e8606069caef02BD42b20D4067f896d101"
CONTRACTS[SwapRouter]="0xe47af9cc9586C7812081743dBA0CdBbec7A2e3F9"
CONTRACTS[BillPaymentAdapter]="0x20e59dcCBD167A1345EDe8A748dD4e14e10FEE87"

check_verification() {
    local contract_name=$1
    local address=$2
    
    echo "📋 $contract_name: $address"
    echo "   🔗 HashScan: https://hashscan.io/testnet/contract/$address"
    echo "   🔍 Verify: https://verify.hashscan.io/?address=$address&chainId=296"
    echo ""
}

echo "📋 Contract Verification Status:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

for contract_name in "${!CONTRACTS[@]}"; do
    address="${CONTRACTS[$contract_name]}"
    check_verification "$contract_name" "$address"
done

echo "💡 Manual Verification Instructions:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "1. Visit: https://verify.hashscan.io/"
echo "2. Enter contract address"
echo "3. Select 'Solidity (Single file)'"
echo "4. Upload source file from verification/{ContractName}/"
echo "5. Set compiler: 0.8.28 with optimization (200 runs)"
echo "6. Add constructor args where needed:"
echo "   - CPPayPaymaster: 0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"
echo "   - SwapRouter: 0xB9bFaA29763C0b3c688361735c226C6fA54EF9cC"
echo "   - BillPaymentAdapter: 0xB9bFaA29763C0b3c688361735c226C6fA54EF9cC"
echo "7. Submit for verification"
echo ""

echo "📁 Verification files available in:"
echo "   ./verification/SessionKeyModule/"
echo "   ./verification/CPPayPaymaster/"
echo "   ./verification/SwapRouter/"
echo "   ./verification/BillPaymentAdapter/"