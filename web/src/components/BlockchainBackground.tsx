import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const BlockchainBackground: React.FC = React.memo(() => {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 40 + 25,
      delay: Math.random() * 10,
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden z-0 will-change-transform pointer-events-none"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(248,250,252,0.9) 50%, rgba(255,255,255,0.85) 100%)",
      }}
    >
      {/* Premium Base gradient with navy and sky */}
      <div className="absolute inset-0 bg-gradient-to-br from-cppay-sky-500/12 via-transparent to-cppay-navy-500/8"></div>

      {/* Primary Sky Blue Orb - Premium Glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cppay-sky-500 rounded-full blur-3xl opacity-[0.35]"
        style={{
          filter: "drop-shadow(0 0 40px rgba(9, 115, 180, 0.3))",
        }}
      />

      {/* Secondary Navy Orb - Premium Glow */}
      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.15, 1],
          x: [0, -15, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cppay-navy-500 rounded-full blur-3xl opacity-[0.25]"
        style={{
          filter: "drop-shadow(0 0 30px rgba(11, 25, 50, 0.25))",
        }}
      />

      {/* Tertiary Sky Orb - Accent */}
      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.1, 1],
          x: [0, -25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
        className="absolute top-2/3 left-3/4 w-72 h-72 bg-cppay-sky-500 rounded-full blur-3xl opacity-[0.2]"
        style={{
          filter: "drop-shadow(0 0 25px rgba(9, 115, 180, 0.15))",
        }}
      />

      {/* Premium Animated Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background:
              particle.id % 3 === 0
                ? "#0973b4"
                : particle.id % 3 === 1
                ? "#0b1932"
                : "rgba(9, 115, 180, 0.6)",
            boxShadow:
              particle.id % 2 === 0
                ? "0 0 20px rgba(9, 115, 180, 0.5)"
                : "0 0 15px rgba(11, 25, 50, 0.3)",
          }}
          animate={{
            y: [-120, -400, -120],
            opacity: [0.2, 0.7, 0.2],
            scale: [0.5, 2.5, 0.5],
            x: [0, Math.sin(particle.id) * 60, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Premium SVG Network Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ mixBlendMode: "lighten", opacity: 0.4 }}
      >
        <defs>
          <linearGradient
            id="lineGradientPremium"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#0973b4" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#0b1932" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0973b4" stopOpacity="0.2" />
          </linearGradient>

          <filter id="glowFilter">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated Lines */}
        <motion.g
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <line
            x1="5%"
            y1="15%"
            x2="95%"
            y2="85%"
            stroke="url(#lineGradientPremium)"
            strokeWidth="2"
            filter="url(#glowFilter)"
          />
          <line
            x1="95%"
            y1="15%"
            x2="5%"
            y2="85%"
            stroke="url(#lineGradientPremium)"
            strokeWidth="2"
            filter="url(#glowFilter)"
          />
          <line
            x1="50%"
            y1="5%"
            x2="50%"
            y2="95%"
            stroke="url(#lineGradientPremium)"
            strokeWidth="2"
            filter="url(#glowFilter)"
          />
        </motion.g>

        {/* Animated Circles - Network Nodes */}
        <motion.g
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <circle
            cx="25%"
            cy="30%"
            r="140"
            fill="none"
            stroke="#0973b4"
            strokeWidth="1.5"
            opacity="0.6"
            filter="url(#glowFilter)"
          />
          <circle
            cx="75%"
            cy="70%"
            r="120"
            fill="none"
            stroke="#0b1932"
            strokeWidth="1.5"
            opacity="0.4"
            filter="url(#glowFilter)"
          />
          <circle
            cx="50%"
            cy="50%"
            r="100"
            fill="none"
            stroke="#0973b4"
            strokeWidth="1"
            opacity="0.3"
            filter="url(#glowFilter)"
          />
        </motion.g>

        {/* Static Node Points */}
        <circle
          cx="20%"
          cy="25%"
          r="4"
          fill="#0973b4"
          opacity="0.7"
          filter="url(#glowFilter)"
        />
        <circle
          cx="80%"
          cy="75%"
          r="4"
          fill="#0b1932"
          opacity="0.5"
          filter="url(#glowFilter)"
        />
        <circle
          cx="50%"
          cy="50%"
          r="3"
          fill="#0973b4"
          opacity="0.6"
          filter="url(#glowFilter)"
        />
      </svg>
    </div>
  );
});

BlockchainBackground.displayName = "BlockchainBackground";

export default BlockchainBackground;
