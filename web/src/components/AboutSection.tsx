import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Users, TrendingUp } from "lucide-react";

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Execute crypto and fiat transactions in seconds, not hours.",
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description:
        "Military-grade encryption and smart contract audited for your peace of mind.",
    },
    {
      icon: Users,
      title: "User Friendly",
      description:
        "Intuitive interface designed for everyone, no crypto expertise needed.",
    },
    {
      icon: TrendingUp,
      title: "Growing Fast",
      description:
        "Join thousands of Nigerians revolutionizing their payment experience.",
    },
  ];

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-caro-pro font-bold bg-gradient-to-r from-cppay-sky-500 to-cppay-sky-600 bg-clip-text text-transparent mb-6">
            About CPPay
          </h2>
          <p className="text-lg font-caro-pro text-cppay-text-secondary max-w-3xl mx-auto">
            CPPay is revolutionizing payments in Nigeria by combining the
            security of blockchain technology with the simplicity of everyday
            banking. We're making crypto and fiat transactions accessible to
            everyone.
          </p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ x: 8 }}
              className="p-6 rounded-xl bg-cppay-sky-50/50 hover:bg-cppay-sky-100/50 border border-cppay-sky-200/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-caro-pro font-bold text-cppay-navy-500 mb-4">
                Why CPPay?
              </h3>
              <p className="text-cppay-text-secondary font-caro-pro leading-relaxed">
                In Nigeria, traditional payment systems are slow, expensive, and
                often unreliable. Crypto offers solutions but has a steep
                learning curve. CPPay bridges this gap by providing a seamless,
                secure platform where Nigerians can transact freely using both
                crypto and fiat currencies.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ x: 8 }}
              className="p-6 rounded-xl bg-gradient-to-br from-cppay-navy-50 to-cppay-sky-50/30 hover:from-cppay-navy-100/50 hover:to-cppay-sky-50/50 border border-cppay-navy-200/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-caro-pro font-bold text-cppay-sky-600 mb-4">
                Our Mission
              </h3>
              <p className="text-cppay-text-secondary font-caro-pro leading-relaxed">
                To empower Nigerians with fast, secure, and affordable payment
                solutions that transcend traditional banking limitations and
                unlock financial opportunities through blockchain technology.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-gradient-to-br from-cppay-sky-100 to-cppay-sky-50 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-cppay-sky-500/20 border border-cppay-sky-200/50 transition-all duration-300"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-caro-pro font-bold text-cppay-sky-600 mb-2"
              >
                10K+
              </motion.div>
              <p className="text-cppay-text-secondary font-caro-pro">
                Active Users
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-gradient-to-br from-cppay-navy-100 to-cppay-navy-50 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-cppay-navy-500/20 border border-cppay-navy-200/50 transition-all duration-300"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-caro-pro font-bold text-cppay-navy-600 mb-2"
              >
                ₦2.5B+
              </motion.div>
              <p className="text-cppay-text-secondary font-caro-pro">
                Transactions
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-gradient-to-br from-cppay-success-100 to-cppay-success-50 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-cppay-success-500/20 border border-cppay-success-200/50 transition-all duration-300"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-caro-pro font-bold text-cppay-success-600 mb-2"
              >
                50+
              </motion.div>
              <p className="text-cppay-text-secondary font-caro-pro">
                Countries
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-gradient-to-br from-cppay-warning-100 to-cppay-warning-50 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-cppay-warning-500/20 border border-cppay-warning-200/50 transition-all duration-300"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-caro-pro font-bold text-cppay-warning-600 mb-2"
              >
                24/7
              </motion.div>
              <p className="text-cppay-text-secondary font-caro-pro">Support</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-caro-pro font-bold text-center bg-gradient-to-r from-cppay-navy-500 to-cppay-sky-500 bg-clip-text text-transparent mb-12">
            Why Choose CPPay?
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-xl p-6 border border-cppay-border hover:border-cppay-sky-500/50 hover:shadow-lg hover:shadow-cppay-sky-500/10 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="mb-4"
                >
                  <feature.icon className="w-12 h-12 text-cppay-sky-500" />
                </motion.div>
                <h4 className="text-lg font-caro-pro font-semibold text-cppay-text mb-3">
                  {feature.title}
                </h4>
                <p className="text-cppay-text-secondary text-sm font-caro-pro leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cppay-navy-50 to-cppay-sky-50 rounded-2xl p-8 md:p-12 text-center border border-cppay-navy-100/50 hover:border-cppay-sky-500/30 hover:shadow-lg hover:shadow-cppay-sky-500/10 transition-all duration-300"
        >
          <h3 className="text-2xl md:text-3xl font-caro-pro font-bold bg-gradient-to-r from-cppay-navy-500 to-cppay-sky-500 bg-clip-text text-transparent mb-4">
            Join the Revolution
          </h3>
          <p className="text-cppay-text-secondary font-caro-pro mb-6 max-w-2xl mx-auto">
            Be part of the future of Nigerian payments. Download CPPay today and
            start experiencing seamless, secure transactions.
          </p>
          <motion.a
            href="#installation"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-cppay-sky-500 to-cppay-sky-600 hover:from-cppay-sky-600 hover:to-cppay-sky-700 text-white font-caro-pro font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-cppay-sky-500/20 hover:shadow-xl hover:shadow-cppay-sky-500/30 focus:outline-none focus:ring-2 focus:ring-cppay-sky-500 focus:ring-opacity-50"
          >
            Get Started Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
