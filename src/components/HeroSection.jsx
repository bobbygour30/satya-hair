"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import ConsultationPopup from "./ConsultationPopup"; // ✅ import the popup
import assets from "../assets/assets";

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="relative flex flex-col sm:flex-row items-start sm:items-center justify-start w-full min-h-[90vh] sm:min-h-screen overflow-hidden sm:mt-[90px]">
      {/* === Backgrounds and Overlays === */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            `url('${assets.banner}')`,
        }}
      />
      
      <div className="absolute inset-0 bg-linear-to-b from-[#2B333C]/70 via-[#2B333C]/60 to-[#9E4A47]/40"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] bg-[radial-gradient(circle,rgba(245,231,209,0.25)_0%,transparent_70%)] blur-3xl pointer-events-none"></div>

      {/* === Content === */}
      <motion.div
        className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left w-full sm:max-w-[1600px] px-6 sm:px-16 md:px-24 pt-12 sm:pt-0 text-[#FFF8EF] mt-20 sm:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-xs sm:text-xl font-semibold bg-[#f1c8c6] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Tired of Hair Loss, Thinning Hair, or Scalp Coverage Issues?
        </motion.h1>

        <motion.h1
          className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 bg-linear-to-r from-[#FFF8EF] via-[#FCEBDE] to-[#DFDFDD] bg-clip-text text-transparent sm:py-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Instantly Restore Your Density and Confidence <br /> with BioFibre Synthetic Hair Implants
        </motion.h1>

        <motion.p
          className="text-xs sm:text-base md:text-lg text-[#DFDFDD]/90 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          Our expert-performed synthetic hair implants procedure delivers immediate, natural-looking volume and coverage with virtually no downtime.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.07,
            boxShadow: "0 0 20px rgba(184,124,114,0.45)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowPopup(true)}
          className="bg-linear-to-r from-[#9E4A47] via-[#B87C72] to-[#9E4A47] text-[#FFF8EF] py-3 px-8 rounded-full font-semibold shadow-[0_4px_15px_rgba(184,124,114,0.3)] transition-all"
        >
          Book FREE Consultation →
        </motion.button>
      </motion.div>

      {/* ✅ Popup rendered here */}
      <ConsultationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </section>
  );
};

export default HeroSection;
