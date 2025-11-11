'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import assets from '../assets/assets';

const images = [assets.build, assets.build1, assets.build2, assets.build3, assets.build4, assets.build5, assets.build6, assets.build7, assets.build8]; // Add more images as needed

export default function SatyaFacilitySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // Autoplay logic
  useEffect(() => {
    if (isHovered) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative bg-[#FFF8EF] py-10 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Soft accent background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(252,235,222,0.4),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-7xl mx-auto">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-semibold bg-[#9E4A47] bg-clip-text text-transparent leading-tight">
            Experience Satya’s World-Class Facility
          </h2>

          <p className="text-[#828D9C] text-lg max-w-md">
            Located in DLF Phase 4, Gurgaon — clinical precision with serene design for patient comfort.
          </p>

          <div className="space-y-4 text-[#2B333C]">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#9E4A47] mt-1" size={20} />
              <p>
                4301, Galleria Boulevard, opposite DLF Club,<br />
                Sector 28, DLF Phase IV, Gurugram, Haryana 122002
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-[#9E4A47]" size={20} />
              <a href="tel:+919910094945" className="hover:text-[#B87C72] transition">
                +91 99100 94945
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-[#9E4A47]" size={20} />
              <a
                href="mailto:info@satyaskinhairsolutions.com"
                className="hover:text-[#B87C72] transition"
              >
                info@satyaskinhairsolutions.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="text-[#9E4A47]" size={20} />
              <a
                href="https://www.satyaskinhairsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B87C72] transition"
              >
                www.satyaskinhairsolutions.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Image Slider */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="rounded-3xl overflow-hidden border border-[#DFDFDD] shadow-[0_8px_30px_rgba(0,0,0,0.08)] group">
            <div className="relative w-full h-[420px] overflow-hidden">
              {/* Slides Container */}
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((img, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      src={img}
                      alt={`Satya facility interior ${index + 1}`}
                      className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>

              {/* Soft rose overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FCEBDE]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-[#9E4A47]'
                    : 'w-2 h-2 bg-[#DFDFDD] hover:bg-[#B87C72]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}