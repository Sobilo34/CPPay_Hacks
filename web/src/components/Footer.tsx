import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";
import logo from "./assets/logo.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Download App", href: "#installation" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Contact", href: "#contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/cp-pay" },
    { name: "GitHub", icon: Github, href: "https://github.com/CP-Pay" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/cppay",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-gradient-to-br from-cppay-navy-600 to-cppay-navy-900 text-white relative z-20 w-full overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-cppay-sky-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
          >
            {/* Logo and Description */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center mb-6"
              >
                <img
                  src={logo}
                  alt="CPPay Logo"
                  className="w-12 h-12 object-contain hover:opacity-80 transition-opacity duration-300"
                />
                <span className="ml-3 text-2xl font-caro-pro font-bold bg-gradient-to-r text-white bg-clip-text text-transparent">
                  CPPay
                </span>
              </motion.div>
              <p className="text-cppay-sky-200/70 mb-6 max-w-md font-caro-pro leading-relaxed">
                Revolutionizing Nigerian payments with seamless crypto and fiat
                transactions. Experience the future of financial freedom with
                CPPay.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: index * 0.05 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-cppay-sky-500/30 to-cppay-sky-600/30 hover:from-cppay-sky-500 hover:to-cppay-sky-600 rounded-lg flex items-center justify-center transition-all duration-300 group shadow-lg shadow-cppay-sky-500/0 hover:shadow-lg hover:shadow-cppay-sky-500/30 border border-cppay-sky-500/20"
                  >
                    <social.icon className="w-5 h-5 text-cppay-sky-300 group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { title: "Product", links: footerLinks.product },
                  { title: "Company", links: footerLinks.company },
                  { title: "Legal", links: footerLinks.legal },
                ].map((section, sectionIdx) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: sectionIdx * 0.1 }}
                  >
                    <h3 className="text-lg font-caro-pro font-semibold mb-4 text-cppay-sky-300">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIdx) => (
                        <motion.li
                          key={link.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: sectionIdx * 0.1 + linkIdx * 0.05,
                          }}
                        >
                          <motion.a
                            href={link.href}
                            whileHover={{ x: 4, color: "#e0f2fe" }}
                            transition={{ duration: 0.2 }}
                            className="text-cppay-sky-200/60 hover:text-cppay-sky-100 transition-all duration-200 text-sm font-caro-pro"
                          >
                            {link.name}
                          </motion.a>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-cppay-sky-500/20 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 text-cppay-sky-200/60 text-sm mb-4 md:mb-0 font-caro-pro"
            >
              <span>© {currentYear} CPPay. All rights reserved.</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-cppay-sky-400/60 text-sm font-caro-pro"
              >
                CPPay v0.0.1 
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
export default Footer;
