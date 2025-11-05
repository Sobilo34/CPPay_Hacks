import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Smartphone,
  Shield,
  Clock,
  Building2,
  TrendingUp,
  Phone,
  Eye,
  Send,
  Download as DownloadIcon,
  Plus,
} from "lucide-react";
import QRCodeModal from "./QRCodeModal";

const HeroSection: React.FC = () => {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  const handleGetStarted = () => {
    const installationSection = document.getElementById("installation");
    if (installationSection) {
      installationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScanToDownload = () => {
    setIsQRModalOpen(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-transparent z-20">
      <div className="absolute inset-0 bg-white/90 rounded-3xl mx-4 md:mx-8 lg:mx-12 my-8"></div>

      {/* Subtle Background Animation - FIXED Z-INDEX */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-1/4 w-96 h-96 bg-[#0b1932] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0b1932] rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left z-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-caro-pro font-bold bg-gradient-to-r from-cppay-navy-500 to-cppay-navy-600 bg-clip-text text-transparent mb-6 leading-tight hover:from-cppay-navy-600 hover:to-cppay-navy-700 transition-all duration-300"
            >
              Crypto Payments for{" "}
              <span className="bg-gradient-to-r from-cppay-sky-500 to-cppay-sky-600 bg-clip-text text-transparent">
                Everyone in Nigeria.
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl font-caro-pro font-bold text-cppay-navy-500 mb-4 animate-fade-in-up"
            >
              Instant, Easy, and Gasless.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl font-caro-pro text-cppay-text-secondary mb-8 max-w-2xl leading-relaxed"
            >
              Spend fiat without token swaps, manage multiple crypto assets, and
              enjoy gasless transactions powered by Smart Wallets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                onClick={handleGetStarted}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary bg-gradient-to-r from-cppay-sky-500 to-cppay-sky-600 hover:from-cppay-sky-600 hover:to-cppay-sky-700 text-white font-caro-pro font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform shadow-lg shadow-cppay-sky-500/20 hover:shadow-xl hover:shadow-cppay-sky-500/30 focus:outline-none focus:ring-2 focus:ring-cppay-sky-500 focus:ring-opacity-50 flex items-center justify-center text-lg group"
              >
                Download Mobile App
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Download className="w-5 h-5 ml-2 group-hover:text-cppay-sky-100" />
                </motion.div>
              </motion.button>

              <motion.button
                onClick={handleScanToDownload}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  backgroundColor: "rgba(9, 115, 180, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cppay-sky-500 text-cppay-sky-500 hover:bg-cppay-sky-500/5 font-caro-pro font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center text-lg shadow-md shadow-cppay-sky-500/10 hover:shadow-lg hover:shadow-cppay-sky-500/20 focus:outline-none focus:ring-2 focus:ring-cppay-sky-500 focus:ring-opacity-50"
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                </motion.div>
                Scan QR Code
              </motion.button>
            </motion.div>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center lg:justify-start space-x-2 text-cppay-text-secondary p-3 rounded-lg hover:bg-cppay-sky-500/5 transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Shield className="w-5 h-5 text-cppay-success" />
                </motion.div>
                <span className="text-sm font-caro-pro font-medium">
                  Secure
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center lg:justify-start space-x-2 text-cppay-text-secondary p-3 rounded-lg hover:bg-cppay-sky-500/5 transition-all duration-300"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Clock className="w-5 h-5 text-cppay-navy-500" />
                </motion.div>
                <span className="text-sm font-caro-pro font-medium">
                  Instant
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center lg:justify-start space-x-2 text-cppay-text-secondary p-3 rounded-lg hover:bg-cppay-sky-500/5 transition-all duration-300"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Smartphone className="w-5 h-5 text-cppay-navy-500" />
                </motion.div>
                <span className="text-sm font-caro-pro font-medium">
                  Mobile-first
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Phone with App Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end z-10"
            style={{ perspective: "1200px" }}
          >
            <motion.div
              animate={{
                rotateY: [-8, 8, -8],
                rotateX: [5, -5, 5],
                z: [0, 20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="relative"
            >
              {/* Phone frame with shadow */}
              <div
                className="relative w-82 bg-black rounded-3xl overflow-hidden border-8 border-gray-800 shadow-2xl"
                style={{
                  filter: "drop-shadow(-20px 30px 60px rgba(0, 0, 0, 0.4))",
                }}
              >
                {/* Status Bar */}
                <div className="bg-gradient-to-r from-[#0b1932] to-[#0f172a] px-6 py-3 flex justify-between items-center text-white text-xs font-semibold">
                  <span>3:26</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Phone Screen */}
                <div className="bg-gradient-to-b from-slate-900 to-slate-950 min-h-96 px-4 py-4 overflow-y-auto">
                  {/* Balance Card */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-r from-[#0973b4] to-[#03598f] rounded-3xl p-6 mb-6 shadow-lg"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-gray-300 text-xs font-caro-pro mb-1">
                          Available Balance
                        </p>
                        <p className="text-white text-3xl font-caro-pro font-bold">
                          100,017.30
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-300 text-xs font-caro-pro">
                          Transaction History
                        </p>
                        <p className="text-white text-lg">›</p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-900 text-[#087ec7] px-6 py-2 rounded-full text-xs font-caro-pro font-semibold float-right"
                    >
                      + Add Money
                    </motion.button>
                    <div className="clear-both flex justify-end mt-2">
                      <div className="w-6 h-6 bg-[#0b1932] rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Recent Transactions */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-white font-caro-pro font-bold text-sm mb-3">
                      Recent Transactions
                    </p>

                    {/* Transaction 1 */}
                    <div className="bg-slate-800/50 rounded-xl p-3 mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                          🎁
                        </div>
                        <div>
                          <p className="text-white text-xs font-caro-pro font-semibold">
                            Bonus from Airtime Purchase
                          </p>
                          <p className="text-gray-400 text-xs font-caro-pro">
                            Oct 10th, 09:53:09
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 text-xs font-caro-pro font-bold">
                          +₦5.00
                        </p>
                        <p className="text-green-400 text-xs font-caro-pro">
                          Successful
                        </p>
                      </div>
                    </div>

                    {/* Transaction 2 */}
                    <div className="bg-slate-800/50 rounded-xl p-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                          ☎️
                        </div>
                        <div>
                          <p className="text-white text-xs font-caro-pro font-semibold">
                            Airtime
                          </p>
                          <p className="text-gray-400 text-xs font-caro-pro">
                            Oct 10th, 09:53:00
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-red-400 text-xs font-caro-pro font-bold line-through">
                          ₦500.00
                        </p>
                        <p className="text-green-400 text-xs font-caro-pro">
                          Successful
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Action Grid */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-3 gap-3 mt-6 mb-4"
                  >
                    {/* Row 1 */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-slate-800 hover:bg-slate-700 rounded-xl p-4 flex flex-col items-center justify-center transition-all"
                    >
                      <Building2 className="w-6 h-6 text-[#0973b4] mb-2" />
                      <span className="text-gray-300 text-xs font-caro-pro text-center">
                        To CPPay
                      </span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-slate-800 hover:bg-slate-700 rounded-xl p-4 flex flex-col items-center justify-center transition-all relative"
                    >
                      <Building2 className="w-6 h-6 text-[#0973b4] mb-2" />
                      <span className="text-gray-300 text-xs font-caro-pro text-center">
                        To Bank
                      </span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-slate-800 hover:bg-slate-700 rounded-xl p-4 flex flex-col items-center justify-center transition-all"
                    >
                      <Eye className="w-6 h-6 text-[#0973b4] mb-2" />
                      <span className="text-gray-300 text-xs font-caro-pro text-center">
                        Withdraw
                      </span>
                    </motion.button>

                    {/* Row 2 */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-slate-800 hover:bg-slate-700 rounded-xl p-4 flex flex-col items-center justify-center transition-all"
                    >
                      <Phone className="w-6 h-6 text-[#0973b4] mb-2" />
                      <span className="text-gray-300 text-xs font-caro-pro text-center">
                        Airtime
                      </span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-slate-800 hover:bg-slate-700 rounded-xl p-4 flex flex-col items-center justify-center transition-all relative"
                    >
                      <TrendingUp className="w-6 h-6 text-[#0973b4] mb-2" />
                      <span className="text-gray-300 text-xs font-caro-pro text-center">
                        Data
                      </span>
                      <div className="absolute top-2 right-2 bg-amber-500 text-gray-900 text-xs font-bold px-2 py-0.5 rounded-full">
                        UP to 6%
                      </div>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-slate-800 hover:bg-slate-700 rounded-xl p-4 flex flex-col items-center justify-center transition-all"
                    >
                      <Plus className="w-6 h-6 text-[#0973b4] mb-2" />
                      <span className="text-gray-300 text-xs font-caro-pro text-center">
                        More
                      </span>
                    </motion.button>

                    {/* Row 3 */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-slate-800 hover:bg-slate-700 rounded-xl p-4 flex flex-col items-center justify-center transition-all"
                    >
                      <Send className="w-6 h-6 text-[#0973b4] mb-2" />
                      <span className="text-gray-300 text-xs font-caro-pro text-center">
                        Send
                      </span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-slate-800 hover:bg-slate-700 rounded-xl p-4 flex flex-col items-center justify-center transition-all"
                    >
                      <DownloadIcon className="w-6 h-6 text-[#0973b4] mb-2" />
                      <span className="text-gray-300 text-xs font-caro-pro text-center">
                        Download
                      </span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-slate-800 hover:bg-slate-700 rounded-xl p-4 flex flex-col items-center justify-center transition-all"
                    >
                      <span className="text-[#0973b4] text-lg mb-2">⇄</span>
                      <span className="text-gray-300 text-xs font-caro-pro text-center">
                        Transfer
                      </span>
                    </motion.button>
                  </motion.div>

                  {/* Bottom Navigation */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="flex justify-around items-center pt-4 border-t border-slate-700 mt-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center gap-1"
                    >
                      <span className="text-[#0b1932] text-xl">🏠</span>
                      <span className="text-gray-500 text-xs font-caro-pro">
                        Home
                      </span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center gap-1"
                    >
                      <span className="text-gray-500 text-xl">📊</span>
                      <span className="text-gray-500 text-xs font-caro-pro">
                        Trade
                      </span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="flex flex-col items-center gap-1"
                    >
                      <span className="text-gray-500 text-xl">👤</span>
                      <span className="text-gray-500 text-xs font-caro-pro">
                        Profile
                      </span>
                    </motion.button>
                  </motion.div>
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-10"></div>
              </div>

              {/* Subtle glow effect behind phone */}
              <div className="absolute -inset-8 bg-gradient-to-r from-[#0b1932]/10 to-[#1f2937]/10 rounded-3xl blur-3xl -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* QR Code Modal */}
      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />
    </section>
  );
};

export default HeroSection;
