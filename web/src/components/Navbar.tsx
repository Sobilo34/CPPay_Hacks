import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/logo.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setShowScrollUp(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center group hover:opacity-80 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt="CPPay Logo"
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <span className="ml-3 text-2xl font-caro-pro font-bold text-cppay-navy-500 tracking-tight group-hover:text-cppay-sky-500 transition-colors duration-300">
                  CPPay
                </span>
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["Home", "Features", "About", "Get Started"].map((item, i) => (
                  <motion.button
                    key={item}
                    custom={i}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={() =>
                      scrollToSection(
                        item
                          .toLowerCase()
                          .replace(" ", "-")
                          .replace(" started", "installation")
                      )
                    }
                    className="text-cppay-text-secondary hover:text-cppay-sky-500 px-3 py-2 text-sm font-caro-pro font-medium transition-all duration-300 ease-out relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cppay-sky-500 group-hover:w-full transition-all duration-300 ease-out"></span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-cppay-text-secondary hover:text-cppay-sky-500 hover:bg-cppay-sky-500/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cppay-sky-500 transition-all duration-300"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <X className="block h-6 w-6" />
                  ) : (
                    <Menu className="block h-6 w-6" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-lg border-t border-cppay-border">
                {["home", "features", "about", "installation"].map(
                  (item, i) => (
                    <motion.button
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.2 }}
                      onClick={() => scrollToSection(item)}
                      className="text-cppay-text hover:text-cppay-sky-500 hover:bg-cppay-sky-500/5 block px-3 py-2 text-base font-caro-pro font-medium w-full text-left rounded-lg transition-all duration-300"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </motion.button>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollUp && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 z-30 bg-cppay-navy-500 hover:bg-cppay-navy-600 text-white p-3 rounded-full shadow-lg shadow-cppay-navy-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cppay-navy-500 focus:ring-opacity-50"
            aria-label="Scroll to top"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowUp className="w-6 h-6" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
