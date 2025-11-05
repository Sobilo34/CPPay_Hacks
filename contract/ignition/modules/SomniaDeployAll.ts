import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

/**
 * Deployment module for all CPPay contracts on Somnia testnet
 * 
 * To deploy all contracts:
 * npx hardhat ignition deploy ignition/modules/SomniaDeployAll.ts --network somniaTestnet --deployment-id cppay-somnia-deployment
 * 
 * To verify individual contracts:
 * npx hardhat verify --network somniaTestnet <CONTRACT_ADDRESS> [constructor-args]
 */
const SomniaDeployAllModule = buildModule("SomniaDeployAllModule", (m) => {
  // EntryPoint address for Account Abstraction
  // Common EntryPoint v0.6: 0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789
  const entryPointAddress = m.getParameter(
    "entryPoint",
    "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"
  );

  const adminAccount = m.getParameter("admin", m.getAccount(0));

  // Deploy SessionKeyModule
  const sessionKeyModule = m.contract("SessionKeyModule");

  // Deploy CPPayPaymaster
  const paymaster = m.contract("CPPayPaymaster", [entryPointAddress]);

  // Deploy SwapRouter
  const swapRouter = m.contract("SwapRouter", [adminAccount]);

  // Deploy BillPaymentAdapter
  const billPaymentAdapter = m.contract("BillPaymentAdapter", [adminAccount]);

  return { 
    sessionKeyModule,
    paymaster,
    swapRouter,
    billPaymentAdapter,
  };
});

export default SomniaDeployAllModule;