/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cppay: {
          // Navy brand colors
          navy: {
            50: "#f0f6ff",
            100: "#e0ecff",
            500: "#0b1932",
            600: "#060d1a",
            700: "#040812",
            900: "#020409",
          },
          // Sky blue brand colors
          sky: {
            50: "#ecf6ff",
            100: "#d9f0ff",
            500: "#0973b4",
            600: "#0582c0",
            700: "#06a1d8",
            900: "#034b7a",
          },
          // Semantic colors
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
          // Neutral palette
          text: "#1e293b",
          "text-secondary": "#64748b",
          border: "#e2e8f0",
          background: "#f8fafc",
        },
      },
      fontFamily: {
        sans: ["'Cara Pro'", "'Inter'", "system-ui", "sans-serif"],
        "caro-pro": ["'Cara Pro'", "'Inter'", "system-ui", "sans-serif"],
      },
      animation: {
        // Existing animations
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        gradient: "gradient 3s ease infinite",
        // Premium animations
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.6s ease-out forwards",
        "fade-in-right": "fadeInRight 0.6s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "slide-down": "slideDown 0.5s ease-out forwards",
        "slide-left": "slideLeft 0.5s ease-out forwards",
        "slide-right": "slideRight 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "bounce-in": "bounceIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "float-slow": "floatSlow 4s ease-in-out infinite",
        "rotate-slow": "rotateSlow 20s linear infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        // Existing keyframes
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        // Premium keyframes
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          from: { opacity: "0", transform: "translateY(-30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUp: {
          from: { transform: "translateY(40px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          from: { transform: "translateY(-40px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          from: { transform: "translateX(-40px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          from: { transform: "translateX(40px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        scaleIn: {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": {
            "box-shadow":
              "0 0 20px rgba(9, 115, 180, 0.4), 0 0 40px rgba(9, 115, 180, 0.2)",
          },
          "50%": {
            "box-shadow":
              "0 0 30px rgba(9, 115, 180, 0.6), 0 0 60px rgba(9, 115, 180, 0.3)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "25%": { transform: "translateY(-15px) translateX(10px)" },
          "50%": { transform: "translateY(-30px) translateX(0px)" },
          "75%": { transform: "translateY(-15px) translateX(-10px)" },
        },
        rotateSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
      backdropFilter: {
        none: "none",
        blur: "blur(10px)",
      },
      transitionDuration: {
        250: "250ms",
        350: "350ms",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
