'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ConsultationPopup from './ConsultationPopup';
import assets from '../assets/assets';

export default function AftercareSection() {
  const [showPopup, setShowPopup] = useState(false);

  const treatments = [
    'Corrective Hair Transplants',
    'DSFT',
    'Body Hair Transplant (Eyebrow/Beard)',
    'Non Surgical Treatments',
    'PRP',
    'SMP (Scalp Micropigmentation)',
  ];

  const images = [
    assets.vindu,
  ];

  // Responsive slider settings
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    pauseOnHover: true,
    fade: true,
    dotsClass: 'slick-dots custom-dots',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          dots: true,
          autoplaySpeed: 3000,
        }
      }
    ]
  };

  return (
    <section className="relative bg-[#FFF8EF] py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-left space-y-4 sm:space-y-5 order-2 lg:order-1"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2B333C] leading-tight">
            Your Hair Restoration <span className="bg-[#9E4A47] bg-clip-text text-transparent">Journey Begins Here</span>
          </h2>
          <p className="text-[#828D9C] text-lg sm:text-xl font-medium">
            Discover Our Full Range of Hair Solutions
          </p>

          {/* Floating Treatment Tags */}
          <div className="relative flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10 justify-start">
            {treatments.map((item, idx) => {
              const randomX = Math.random() * 20 - 10;
              const randomY = Math.random() * 20 - 10;
              const randomDuration = 8 + Math.random() * 4;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={{
                    x: [0, randomX, 0],
                    y: [0, randomY, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: idx * 0.08 },
                    x: { duration: randomDuration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
                    y: { duration: randomDuration + 1.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 20px rgba(158,74,71,0.4)",
                  }}
                  className="relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-full cursor-pointer text-[#2B333C] font-medium text-sm sm:text-base shadow-md border border-[#f2d8cf] bg-gradient-to-r from-[#FCEBDE] via-[#FCEBDE]/70 to-[#fff] backdrop-blur-md transition-all duration-300 overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></span>
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:blur-lg transition duration-500 bg-[#9E4A47]/20"></span>
                  <span className="relative z-10 text-xs sm:text-sm md:text-base">{item}</span>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowPopup(true)}
            className="mt-8 sm:mt-10 px-6 py-2.5 sm:px-8 sm:py-3 bg-[#9E4A47] text-white rounded-full shadow-md hover:shadow-lg transition-all font-medium text-sm sm:text-base"
          >
            Book FREE Consultation
          </motion.button>
        </motion.div>

        {/* Image Slider Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative w-full flex justify-center order-1 lg:order-2"
        >
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full mx-auto">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(158,74,71,0.2)] aspect-w-4 aspect-h-3 sm:aspect-h-4 lg:aspect-h-3">
              <Slider {...settings}>
                {images.map((src, idx) => (
                  <div key={idx} className="relative">
                    <img
                      src={src}
                      alt={`Treatment slide ${idx + 1}`}
                      className="w-full h-full object-cover"
                      style={{ minHeight: '280px', maxHeight: '500px' }}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Popup */}
      <ConsultationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      {/* Responsive Custom Dots Styling */}
      <style jsx global>{`
        .custom-dots {
          bottom: 12px !important;
          padding: 0;
          display: flex !important;
          justify-content: center;
          gap: 8px;
        }
        .custom-dots li {
          margin: 0 !important;
          width: 10px;
          height: 10px;
        }
        .custom-dots li button {
          width: 10px;
          height: 10px;
          padding: 0;
        }
        .custom-dots li button:before {
          color: #9E4A47;
          opacity: 0.4;
          font-size: 10px;
          width: 10px;
          height: 10px;
          line-height: 10px;
        }
        .custom-dots li.slick-active button:before {
          opacity: 1;
          color: #9E4A47;
          transform: scale(1.2);
        }

        /* Mobile adjustments */
        @media (max-width: 640px) {
          .custom-dots {
            bottom: 8px !important;
          }
          .custom-dots li button:before {
            font-size: 8px;
          }
        }
      `}</style>
    </section>
  );
}