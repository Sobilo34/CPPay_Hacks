import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Smartphone, CheckCircle } from "lucide-react";
import QRCodeModal from "./QRCodeModal";

const InstallationGuide: React.FC = () => {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-transparent relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/90 rounded-3xl py-8 md:py-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-caro-pro font-bold text-cppay-navy-500 mb-6">
            Get Started in{" "}
            <span className="bg-gradient-to-r from-cppay-sky-500 to-cppay-sky-600 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-lg font-caro-pro text-cppay-text-secondary max-w-3xl mx-auto">
            Download the CPPay app and start your journey towards seamless,
            gasless crypto payments today.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {[
            {
              step: "1",
              icon: Download,
              title: "Download",
              description:
                "Get CPPay on your Android device. Quick, easy, and hassle-free.",
            },
            {
              step: "2",
              icon: Smartphone,
              title: "Create Wallet",
              description:
                "Set up your secure Smart Wallet without complex seed phrases.",
            },
            {
              step: "3",
              icon: CheckCircle,
              title: "Start Transacting",
              description:
                "Buy airtime, pay bills, and swap crypto to fiat instantly.",
            },
            {
              step: "4",
              icon: CheckCircle,
              title: "Seamless Experience",
              description:
                "Enjoy real-time transactions and gasless crypto payments.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="text-center p-6 rounded-2xl bg-white hover:bg-cppay-sky-50/50 border border-cppay-border/50 hover:border-cppay-sky-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cppay-sky-500/10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-16 h-16 bg-gradient-to-br from-cppay-sky-500 to-cppay-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg shadow-cppay-sky-500/30"
                >
                  {item.step}
                </motion.div>
                <motion.div whileHover={{ rotate: 10 }} className="mb-4">
                  <item.icon className="w-10 h-10 text-cppay-sky-500 mx-auto" />
                </motion.div>
                <h4 className="text-lg font-caro-pro font-semibold text-cppay-text mb-3 group-hover:text-cppay-sky-500 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-sm text-cppay-text-secondary leading-relaxed font-caro-pro">
                  {item.description}
                </p>
              </div>
              {index < 3 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  className="hidden md:block absolute top-8 left-full w-full h-1 bg-gradient-to-r from-cppay-sky-500 via-cppay-sky-400 to-transparent transform -translate-x-8"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* QR Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cppay-sky-50 to-cppay-navy-50/30 rounded-3xl p-8 md:p-12 text-center mb-16 border border-cppay-sky-200/50 hover:border-cppay-sky-500/30 hover:shadow-lg hover:shadow-cppay-sky-500/10 transition-all duration-300"
        >
          <h3 className="text-2xl md:text-3xl font-caro-pro font-bold text-cppay-navy-500 mb-4">
            Click the button below to download
          </h3>
          <p className="text-cppay-text-secondary font-caro-pro mb-8 max-w-2xl mx-auto">
            Get CPPay on your Android device today and start your journey
            towards seamless, gasless payments.
          </p>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsQRModalOpen(true)}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cppay-sky-500 to-cppay-sky-600 hover:from-cppay-sky-600 hover:to-cppay-sky-700 text-white font-caro-pro font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-cppay-sky-500/20 hover:shadow-xl hover:shadow-cppay-sky-500/30 focus:outline-none focus:ring-2 focus:ring-cppay-sky-500 focus:ring-opacity-50"
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Download className="w-5 h-5" />
              </motion.div>
              Download App
            </motion.button>
          </div>
        </motion.div>

        {/* System Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg shadow-cppay-navy-500/5 border border-cppay-border/50"
        >
          <h3 className="text-2xl md:text-3xl font-caro-pro font-bold text-cppay-navy-500 mb-8 text-center">
            System Requirements
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ x: 8 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-cppay-sky-50 to-white hover:shadow-md hover:shadow-cppay-sky-500/10 border border-cppay-sky-200/30 transition-all duration-300"
            >
              <h4 className="text-lg font-caro-pro font-semibold text-cppay-navy-500 mb-4">
                Minimum Requirements
              </h4>
              <ul className="space-y-3">
                {[
                  "Android 8.0 or higher",
                  "Minimum 100MB free storage",
                  "Stable internet connection",
                  "Valid phone number",
                ].map((req, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="flex items-center text-cppay-text-secondary font-caro-pro"
                  >
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <CheckCircle className="w-5 h-5 text-cppay-success mr-3 flex-shrink-0" />
                    </motion.div>
                    {req}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ x: -8 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-cppay-navy-50 to-white hover:shadow-md hover:shadow-cppay-navy-500/10 border border-cppay-navy-200/30 transition-all duration-300"
            >
              <h4 className="text-lg font-caro-pro font-semibold text-cppay-sky-600 mb-4">
                Recommended Specs
              </h4>
              <ul className="space-y-3">
                {[
                  "Android 11 or higher",
                  "500MB+ available storage",
                  "4G/LTE connection",
                  "Recent smartphone model",
                ].map((spec, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="flex items-center text-cppay-text-secondary font-caro-pro"
                  >
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <CheckCircle className="w-5 h-5 text-cppay-sky-500 mr-3 flex-shrink-0" />
                    </motion.div>
                    {spec}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
      />
    </section>
  );
};

export default InstallationGuide;
