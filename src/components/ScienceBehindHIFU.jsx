"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ScienceBehindHIFU() {
  const container = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="satya" className="relative bg-linear-to-b from-[#FFF8EF] via-[#FCEBDE]/60 to-[#FFF8EF] text-[#2B333C] py-16 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Soft floating background glow */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 right-0 w-72 h-72 bg-[#FCEBDE]/60 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 left-0 w-96 h-96 bg-[#9E4A47]/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT SIDE — SCIENCE SECTION */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="space-y-7"
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl font-extrabold tracking-tight"
          >
            The Technology Behind{" "}
            <span className="text-transparent bg-clip-text bg-[#9E4A47]">
              BioFibre Implants
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#2B333C]/80 leading-relaxed max-w-xl"
          >
           The procedure involves implanting biocompatible synthetic hair fibers directly into the scalp using micro-surgical techniques. These fibers are secured with a special knot, offering instant, dense coverage and resistance to weathering and breakage.
          </motion.p>

          {/* Key Points */}
          <motion.ul
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6"
          >
            {[
              "Instant, Noticable Density",
              "No Donor Area Required",
              "Performed Under Local Anesthesia",
              "Simple, Quick, & Safe Procedure",
            ].map((point, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="flex items-start gap-3 bg-white rounded-2xl shadow-md hover:shadow-lg p-4 border border-[#DFDFDD]"
              >
                <div className="w-5 h-5 mt-1 text-[#9E4A47]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-full h-full"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[#2B333C] text-sm">{point}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Highlight Box */}
          <motion.div
            variants={fadeUp}
            className="mt-8 bg-white/90 rounded-2xl p-6 shadow-xl border border-[#DFDFDD]"
          >
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-linear-to-br from-[#FCEBDE] to-[#FFF8EF] shadow-inner">
                <svg
                  className="w-6 h-6 text-[#9E4A47]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M12 8v4l3 2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-[#2B333C]">
                  Results Timeline
                </div>
                <div className="text-sm text-[#828D9C]">
                 Maximum volume and aesthetic results are visible immediately after the session.
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — CONSULTATION FORM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex justify-center"
        >
          <motion.div
            className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-[#DFDFDD] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Gradient header bar */}
            <div className="h-2 bg-linear-to-r from-[#9E4A47] via-[#B87C72] to-[#FCEBDE]" />

            <div className="p-8 text-center">
             
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                className="text-lg font-bold text-[#9E4A47] mb-8"
              >
                Find Out If Synthetic Hair Is Right for You
              </motion.h2>

              <motion.form
                initial="hidden"
                whileInView="show"
                variants={{
                  show: {
                    transition: { staggerChildren: 0.1 },
                  },
                }}
                className="space-y-5"
              >
                <motion.div variants={fadeUp}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg border border-[#DFDFDD] bg-[#FFF8EF]/60 text-[#2B333C] placeholder-[#828D9C] focus:outline-none focus:ring-2 focus:ring-[#9E4A47] focus:bg-white transition"
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-[#DFDFDD] bg-[#FFF8EF]/60 text-[#2B333C] placeholder-[#828D9C] focus:outline-none focus:ring-2 focus:ring-[#9E4A47] focus:bg-white transition"
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <textarea
                    rows="3"
                    placeholder="Your Message (Optional)"
                    className="w-full px-4 py-3 rounded-lg border border-[#DFDFDD] bg-[#FFF8EF]/60 text-[#2B333C] placeholder-[#828D9C] focus:outline-none focus:ring-2 focus:ring-[#9E4A47] focus:bg-white transition resize-none"
                  />
                </motion.div>

                <motion.button
                  variants={fadeUp}
                  whileHover={{
                    scale: 1.04,
                    background:
                      "linear-gradient(90deg, #9E4A47, #B87C72, #FCEBDE)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  type="submit"
                  className="w-full py-3 font-semibold rounded-lg text-white bg-linear-to-r from-[#9E4A47] via-[#B87C72] to-[#F87552] shadow-lg hover:shadow-xl transition"
                >
                  Request a Callback
                </motion.button>
              </motion.form>
            </div>

            {/* Decorative wave */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-[#9E4A47]/10 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
