import React from "react";
import { motion } from "framer-motion";

export default function RibbonStrip() {
  const phrases = [
    "No Needles. No Downtime.",
    "Define Jawline • Lift Cheeks • Tighten Neck",
    "Results That Build for Months",
  ];

  const line = Array(6)
    .fill(phrases.join(" • "))
    .join("   ");

  const marquee = {
    animate: { x: ["0%", "-100%"] },
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 22,
        ease: "linear",
      },
    },
  };

  return (
    <div className="w-full overflow-hidden relative">
      {/* Background Ribbon with Theme Gradient */}
      <div className="absolute inset-0 -skew-y-1 transform-gpu">
        <div className="h-20 md:h-24 w-full bg-linear-to-r from-[#9E4A47] via-[#B87C72] to-[#9E4A47] shadow-[0_0_25px_rgba(158,74,71,0.4)] opacity-95" />
      </div>

      {/* Animated Text Layer */}
      <div className="relative -skew-y-1">
        <div className="max-w-full mx-auto">
          <div className="py-5 md:py-6">
            <div className="mx-4 md:mx-8 lg:mx-16 overflow-hidden rounded-md">
              <motion.div
                className="whitespace-nowrap font-semibold text-sm md:text-base lg:text-lg tracking-wide leading-tight flex items-center skew-y-1 text-[#FFF8EF]"
                {...marquee}
                aria-hidden
              >
                <span className="inline-block px-6 md:px-10 py-3">
                  {line}
                </span>
                <span className="inline-block px-6 md:px-10 py-3">
                  {line}
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Glow Animation */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-transparent via-[#FFF8EF]/15 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        style={{
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
