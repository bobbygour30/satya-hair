'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    assets.patient,
    assets.patient1,
  ];

  const settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    pauseOnHover: true,
    // dotsClass: 'slick-dots custom-dots',
  };

  return (
    <section className="relative bg-[#FFF8EF] py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-5 order-2 lg:order-1"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2B333C]">
            Your Hair Restoration{' '}
            <span className="bg-[#9E4A47] bg-clip-text text-transparent">
              Journey Begins Here
            </span>
          </h2>

          <p className="text-[#828D9C] text-lg sm:text-xl font-medium">
            Discover Our Full Range of Hair Solutions
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-8">
            {treatments.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.08 }}
                className="px-4 py-2 rounded-full text-sm sm:text-base shadow-md border border-[#f2d8cf] bg-gradient-to-r from-[#FCEBDE] via-[#FCEBDE]/70 to-[#fff]"
              >
                {item}
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowPopup(true)}
            className="mt-8 px-6 py-2.5 sm:px-8 sm:py-3 bg-[#9E4A47] text-white rounded-full shadow-md"
          >
            Book FREE Consultation
          </motion.button>
        </motion.div>

        {/* IMAGE SLIDER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 w-full"
        >
          <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(158,74,71,0.2)]">

            {/* 🔑 FIXED RESPONSIVE FRAME */}
            <div className="relative h-[230px] lg:h-[340px]">
              <Slider {...settings}>
                {images.map((src, idx) => (
                  <div key={idx} className="h-full">
                    <img
                      src={src}
                      alt={`Treatment ${idx + 1}`}
                      className="
                        w-full h-full
                        object-cover
                        object-center
                      "
                    />
                  </div>
                ))}
              </Slider>
            </div>

          </div>
        </motion.div>
      </div>

      <ConsultationPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />

      {/* DOTS */}
      {/* <style jsx global>{`
        .custom-dots {
          bottom: 12px !important;
          display: flex !important;
          justify-content: center;
          gap: 8px;
        }
        .custom-dots li button:before {
          color: #9E4A47;
          opacity: 0.4;
        }
        .custom-dots li.slick-active button:before {
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style> */}
    </section>
  );
}
