'use client';

import React, { useState, useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

export default function LogoSlider() {
  const [isPaused, setIsPaused] = useState(false);
  const xRef = useRef(0);
  const containerRef = useRef(null);

  const certificates = [
    { name: 'ISHRS', logo: 'https://31stannual.org/wp-content/uploads/2023/01/ishrs-logo-min.png' },
    { name: 'AAAM', logo: 'https://www.bostrom.com/wp-content/uploads/2021/04/AAAM_Logo_RGB_2016-380x285-1.jpg' },
    { name: 'AIMI', logo: 'https://mma.prnewswire.com/media/1172541/AiMi_Logo_dark__1_Logo.jpg?p=facebook' },
    { name: 'IADVL', logo: 'https://www.vhv.rs/dpng/d/46-461064_indian-association-of-dermatologists-venereologists-hd-png-download.png' },
    { name: 'CDSI', logo: 'https://www.cdsi-simi.com/wp-content/uploads/2022/04/blue-logo.png' },
    { name: 'ACD', logo: 'https://www.creativefabrica.com/wp-content/uploads/2019/07/Monogram-ACD-Logo-Design-by-Greenlines-Studios.jpg' },
  ];

  const duplicatedCertificates = [...certificates, ...certificates];

  // Smooth infinite motion using animation frame
  useAnimationFrame((t, delta) => {
    if (!isPaused && containerRef.current) {
      xRef.current -= delta / 50; // Speed control
      const totalWidth = containerRef.current.scrollWidth / 2;
      if (Math.abs(xRef.current) >= totalWidth) xRef.current = 0;
      containerRef.current.style.transform = `translateX(${xRef.current}px)`;
    }
  });

  return (
    <div className="bg-linear-to-br from-[#FFF8EF] via-[#FCEBDE]/40 to-[#FFF8EF] py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Soft Rose Glow */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(158,74,71,0.12),transparent_70%)] blur-3xl"></div>

          <div className="bg-[#FFF8EF]/80 backdrop-blur-xl rounded-3xl shadow-[0_0_40px_rgba(158,74,71,0.12)] p-10 border border-[#DFDFDD]">
            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-10 relative">
              <span className="bg-[#9E4A47] bg-clip-text text-transparent">
                Certified Excellence
              </span>
              <span className="absolute left-1/2 -bottom-2 w-16 h-0.5 bg-[#9E4A47] -translate-x-1/2 rounded-full"></span>
            </h3>

            {/* Smooth Infinite Slider */}
            <div className="overflow-hidden rounded-2xl">
              <div ref={containerRef} className="flex">
                {duplicatedCertificates.map((cert, index) => (
                  <div
                    key={`${cert.name}-${index}`}
                    className="shrink-0 mx-3 sm:mx-4 flex items-center justify-center"
                    style={{ minWidth: '140px' }}
                  >
                    <div className="group relative">
                      <div className="bg-[#FFF8EF] rounded-2xl p-4 transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-[0_0_25px_rgba(158,74,71,0.25)] border border-[#DFDFDD]">
                        <div className="bg-[#FCEBDE] rounded-xl w-24 h-20 sm:w-28 sm:h-24 flex items-center justify-center overflow-hidden">
                          <img
                            src={cert.logo}
                            alt={cert.name}
                            className="w-full h-full object-contain p-2 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                        <p className="text-center text-xs font-semibold text-[#2B333C] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {cert.name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicator */}
            <div className="flex justify-center mt-6 space-x-1">
              <div className="w-2 h-2 bg-[#9E4A47] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#B87C72] rounded-full animate-pulse delay-75"></div>
              <div className="w-2 h-2 bg-[#9E4A47] rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
