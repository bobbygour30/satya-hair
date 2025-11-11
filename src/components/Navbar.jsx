"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import assets from "../assets/assets";
import ConsultationPopup from "./ConsultationPopup";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500 ${
          scrolled
            ? "bg-[#FFF8EF]/95 shadow-[0_4px_20px_rgba(184,124,114,0.2)]"
            : "bg-linear-to-r from-[#FFF8EF] via-[#FCEBDE]/60 to-[#FFF8EF]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          {/* Flex container: Logo + CTA (mobile: side-by-side, desktop: CTA on right) */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <img src={assets.logo} alt="Logo" className="w-32 sm:w-48" />
            </motion.a>

            {/* CTA Button - Always visible */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 16px rgba(184,124,114,0.4)",
              }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setShowPopup(true)}
              className={`
                flex items-center gap-1.5 bg-linear-to-r from-[#9E4A47] via-[#B87C72] to-[#9E4A47] 
                text-[#FFF8EF] font-semibold rounded-full shadow-md transition-all
                // Mobile: smaller, beside logo
                px-3 py-1.5 text-xs
                // Desktop: normal size, on the right
                sm:px-5 sm:py-2.5 sm:text-sm
              `}
            >
              Book FREE Consultation
              <FiArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Popup */}
      <ConsultationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default Navbar;