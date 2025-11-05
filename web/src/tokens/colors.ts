/**
 * CPPay Color Token System
 * Centralized color definitions for consistent brand implementation
 */

export const colorTokens = {
  // Brand colors
  brand: {
    navy: "#0b1932",
    navyHover: "#060d1a",
    navyActive: "#040812",
    sky: "#0973b4",
    skyHover: "#0582c0",
    skyLight: "#06a1d8",
  },

  // Semantic colors
  semantic: {
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
  },

  // Neutral colors
  neutral: {
    text: "#1e293b",
    textSecondary: "#64748b",
    border: "#e2e8f0",
    background: "#f8fafc",
    white: "#ffffff",
  },
};

// Button component tokens
export const buttonTokens = {
  primary: {
    bg: "bg-cppay-sky-500",
    hover: "hover:bg-cppay-sky-600",
    active: "active:bg-cppay-sky-700",
    text: "text-white",
    ring: "focus:ring-cppay-sky-500",
    shadow: "shadow-lg shadow-cppay-sky-500/20",
    transition: "transition-all duration-300 ease-out",
  },
  secondary: {
    bg: "bg-cppay-navy-500",
    hover: "hover:bg-cppay-navy-600",
    active: "active:bg-cppay-navy-700",
    text: "text-white",
    ring: "focus:ring-cppay-navy-500",
    shadow: "shadow-lg shadow-cppay-navy-500/20",
    transition: "transition-all duration-300 ease-out",
  },
  outline: {
    border: "border-2 border-cppay-sky-500",
    text: "text-cppay-sky-500",
    hover: "hover:bg-cppay-sky-50",
    ring: "focus:ring-cppay-sky-500",
    transition: "transition-all duration-300 ease-out",
  },
  ghost: {
    text: "text-cppay-text",
    hover: "hover:text-cppay-sky-500",
    bg: "hover:bg-cppay-sky-50",
    transition: "transition-all duration-300 ease-out",
  },
};

// Input component tokens
export const inputTokens = {
  border: "border-cppay-border",
  borderHover: "hover:border-cppay-sky-500",
  borderFocus: "focus:border-cppay-sky-500 focus:ring-cppay-sky-500",
  placeholder: "placeholder-cppay-text-secondary",
  transition: "transition-all duration-300 ease-out",
};

// Card component tokens
export const cardTokens = {
  bg: "bg-white",
  border: "border border-cppay-border",
  hover: "hover:border-cppay-sky-500",
  shadow: "shadow-sm hover:shadow-lg",
  transition: "transition-all duration-300 ease-out",
};

// Animation timing
export const animationTiming = {
  fast: "250ms",
  normal: "300ms",
  slow: "500ms",
  slower: "700ms",
  slowest: "1000ms",
};

// Easing functions
export const easing = {
  linear: "linear",
  in: "ease-in",
  out: "ease-out",
  inOut: "ease-in-out",
  sharp: "cubic-bezier(0.4, 0, 0.2, 1)",
  smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
};

export default colorTokens;
