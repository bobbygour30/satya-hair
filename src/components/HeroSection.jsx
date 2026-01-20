"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import ConsultationPopup from "./ConsultationPopup";
import assets from "../assets/assets";

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section
      className="
        relative w-full overflow-hidden
        mt-[70px] sm:mt-[90px]
      "
    >
      {/* ================= MOBILE IMAGE (FULL IMAGE, NO SPACE) ================= */}
      <div className="relative sm:hidden w-full">
        <img
          src={assets.banner}
          alt="Hero Banner"
          className="w-full h-auto block"
        />

        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-[#2B333C]/70 via-[#2B333C]/60 to-[#9E4A47]/40" />

        {/* Mobile content */}
        <motion.div
          className="
            absolute inset-0 z-10
            flex flex-col items-center justify-center
            text-center
            px-6
            text-[#FFF8EF]
          "
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-semibold bg-[#f1c8c6] bg-clip-text text-transparent mb-2">
            Tired of Hair Loss, Thinning Hair, or Scalp Coverage Issues?
          </p>

          <h1 className="text-lg font-semibold mb-2">
            Instantly Restore Your Density and Confidence
            <br />
            with BioFibre Synthetic Hair Implants
          </h1>

          <p className="text-xs text-[#DFDFDD]/90 mb-4 max-w-sm">
            Our expert-performed synthetic hair implants procedure delivers
            immediate, natural-looking volume and coverage with virtually no downtime.
          </p>

          <button
            onClick={() => setShowPopup(true)}
            className="
              bg-linear-to-r from-[#9E4A47] via-[#B87C72] to-[#9E4A47]
              text-sm
              py-2.5 px-6
              rounded-full
              font-semibold
              shadow-[0_4px_15px_rgba(184,124,114,0.3)]
            "
          >
            Book FREE Consultation →
          </button>
        </motion.div>
      </div>

      {/* ================= DESKTOP HERO (UNCHANGED) ================= */}
      <div
        className="
          hidden sm:flex
          relative min-h-screen
          items-center
        "
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${assets.banner}')` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-[#2B333C]/70 via-[#2B333C]/60 to-[#9E4A47]/40" />

        {/* Desktop content */}
        <motion.div
          className="
            relative z-10
            max-w-[1600px]
            px-16 md:px-24
            text-left
            text-[#FFF8EF]
          "
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl font-semibold bg-[#f1c8c6] bg-clip-text text-transparent mb-2">
            Tired of Hair Loss, Thinning Hair, or Scalp Coverage Issues?
          </p>

          <h1 className="text-5xl font-semibold mb-3">
            Instantly Restore Your Density and Confidence <br />
            with BioFibre Synthetic Hair Implants
          </h1>

          <p className="text-lg text-[#DFDFDD]/90 mb-6 max-w-xl">
            Our expert-performed synthetic hair implants procedure delivers
            immediate, natural-looking volume and coverage with virtually no downtime.
          </p>

          <button
            onClick={() => setShowPopup(true)}
            className="
              bg-linear-to-r from-[#9E4A47] via-[#B87C72] to-[#9E4A47]
              py-3 px-8
              rounded-full
              font-semibold
              shadow-[0_4px_15px_rgba(184,124,114,0.3)]
            "
          >
            Book FREE Consultation →
          </button>
        </motion.div>
      </div>

      {/* Popup */}
      <ConsultationPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </section>
  );
};

export default HeroSection;
