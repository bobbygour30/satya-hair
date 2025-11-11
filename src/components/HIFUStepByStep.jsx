import React from "react";
import { motion } from "framer-motion";

const COLORS = {
  primary: "#9E4A47",
  lightBg: "#FFF8EF",
  softBg: "#FCEBDE",
  mid: "#B87C72",
  dark: "#2B333C",
  gray: "#828D9C",
  neutral: "#DFDFDD",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HIFUStepByStep() {
  const steps = [
    {
      id: "01",
      title: "Consult & Assessment",
      desc: "Detailed scalp and hair You are analysis, density mapping, and desired outcome planning. Patch test (Allergy Test).",
    },
    {
      id: "02",
      title: "Scalp Preparation & Local Anesthesia",
      desc: "Thorough scalp sterilization & administration of local anesthesia for a comfortable, pain-free procedure.",
    },
    {
      id: "03",
      title: "BioFibre Implantation",
      desc: "Using a specialized implanter, biocompatible fibers are meticulously secured, one by one into the scalp at the correct depth and angle to achieve maximum density.",
    },
    {
      id: "04",
      title: "Aftercare & Follow-up",
      desc: "Immediate visual result instruction on specialised shampoos & maintenance; first cleaning & review at 1-2 weeks.",
    },
  ];

  return (
    <section
      id="procedure"
      className="relative py-20 px-6 sm:px-10 lg:px-20 overflow-hidden"
      style={{ backgroundColor: COLORS.lightBg }}
    >
      <div className="relative">
        {/* HEADER */}
        <header className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold"
            style={{ color: COLORS.dark }}
          >
            The Synthetic Hair Implantation Process —{" "}
            <span className="text-transparent bg-clip-text bg-[#9E4A47]">
              Step by Step
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-3 text-base"
            style={{ color: COLORS.gray }}
          >
            A meticulous and precise protocol - each step is planned for optimal density and natural aesthetics.
          </motion.p>
        </header>

        {/* THREAD TEXTS (DESKTOP) */}
        <div className="relative mb-10 w-full hidden lg:block">
          <div
            className="absolute top-28 -left-7 z-0 flex items-center gap-2 text-lg italic font-semibold -rotate-2"
            style={{ color: COLORS.mid }}
          >
            You are here
          </div>

          <div
            className="absolute top-28 right-6 z-0 flex items-center gap-2 text-lg italic font-semibold -mr-6  rotate-3"
            style={{ color: COLORS.mid }}
          >
            Result
          </div>

          {/* ⚡ Thread Line */}
          <motion.svg
            className="absolute top-32 left-0 w-full h-28 -translate-y-1/2 z-0 -ml-3"
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <defs>
              <linearGradient id="threadGradient" x1="0%" x2="100%">
                <stop offset="0%" stopColor="#9E4A47" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#B87C72" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#DFDFDD" stopOpacity="0.7" />
              </linearGradient>

              <linearGradient id="animatedGradient" x1="0" x2="100%">
                <stop offset="0%" stopColor="#FFF8EF">
                  <animate
                    attributeName="offset"
                    values="-1; 1"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="50%" stopColor="#FCEBDE" />
                <stop offset="100%" stopColor="#9E4A47" />
              </linearGradient>
            </defs>

            <path
              d="M80 100 C300 50, 600 150, 920 90 C1080 50, 1160 100, 1160 100"
              fill="none"
              stroke="url(#threadGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.5"
            />

            <motion.path
              d="M80 100 C300 50, 600 150, 920 90 C1080 50, 1160 100, 1160 100"
              fill="none"
              stroke="url(#animatedGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="15 20"
              animate={{ strokeDashoffset: [0, -100] }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{
                filter: "drop-shadow(0 0 6px rgba(158,74,71,0.5))",
              }}
            />
          </motion.svg>
        </div>

        {/* ✅ MOBILE THREAD BEHIND CARDS */}
        {/* <div className="absolute inset-0 flex flex-col items-center lg:hidden z-0">

          <div
            className="absolute top-36 text-base italic font-semibold"
            style={{ color: COLORS.mid }}
          >
            You are here
          </div>


          <motion.svg
            className="absolute w-20 h-[calc(200%)] -translate-y-1/2 mt-[553px]"
            viewBox="0 0 100 1000"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <defs>
              <linearGradient
                id="threadGradientMobile"
                x1="0"
                x2="0"
                y1="0"
                y2="100%"
              >
                <stop offset="0%" stopColor="#9E4A47" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#B87C72" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#DFDFDD" stopOpacity="0.7" />
              </linearGradient>

              <linearGradient
                id="animatedGradientMobile"
                x1="0"
                x2="0"
                y1="0"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FFF8EF">
                  <animate
                    attributeName="offset"
                    values="-1; 1"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="50%" stopColor="#FCEBDE" />
                <stop offset="100%" stopColor="#9E4A47" />
              </linearGradient>
            </defs>

            <path
              d="M50 10 C70 250, 30 500, 50 1000"
              stroke="url(#threadGradientMobile)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.5"
            />
            <motion.path
              d="M50 10 C70 250, 30 500, 50 1000"
              stroke="url(#animatedGradientMobile)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="15 20"
              animate={{ strokeDashoffset: [0, -100] }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{
                filter: "drop-shadow(0 0 6px rgba(158,74,71,0.5))",
              }}
            />
          </motion.svg>


          <div
            className="absolute  text-base italic font-semibold mt-[951px]"
            style={{ color: COLORS.mid }}
          >
            Result
          </div>
        </div> */}

        {/* STEP CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid lg:grid-cols-4 gap-6 z-10 max-w-6xl mx-auto"
        >
          {steps.map((s) => (
            <motion.article
              key={s.id}
              variants={cardVariant}
              className="relative rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] shadow-md"
              style={{
                background: `linear-gradient(135deg, ${COLORS.softBg}, ${COLORS.lightBg})`,
                border: `1px solid ${COLORS.neutral}`,
              }}
              whileHover={{
                boxShadow: `0 18px 50px rgba(158,74,71,0.15)`,
              }}
            >
              <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
                <span
                  className="text-[96px] font-extrabold select-none"
                  style={{ color: COLORS.mid, opacity: 0.08 }}
                >
                  {s.id}
                </span>
              </div>

              <div className="p-8 relative flex flex-col justify-center h-full">
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shadow"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <div
                      className="w-10 h-10 rounded-md flex items-center justify-center font-semibold"
                      style={{
                        background: `linear-gradient(135deg, ${COLORS.neutral}, ${COLORS.softBg})`,
                        border: `1px solid ${COLORS.gray}40`,
                        color: COLORS.primary,
                      }}
                    >
                      {s.id}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-lg font-semibold leading-snug"
                      style={{ color: COLORS.dark }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-relaxed"
                      style={{ color: COLORS.gray }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
