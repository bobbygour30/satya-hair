'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, UserCheck } from 'lucide-react';
import assets from '../assets/assets';

export default function DermatologistSection() {
  return (
    <section className="relative bg-[#FFF8EF] py-12 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(252,235,222,0.6),transparent_70%)] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.img
            src={assets.doctor}
            alt="Dr. Shail Gupta & Dr. Ruchi Agarwal - Expert Dermatologists"
            className="w-90vw  rounded-3xl shadow-[0_8px_30px_rgba(158,74,71,0.25)] object-cover"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute -z-10 w-64 h-64 bg-[#FCEBDE]/70 blur-3xl rounded-full top-1/2 -translate-y-1/2" />
        </motion.div>

        {/* Right: Compact Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-4 text-sm md:text-base"
        >
          <p className="text-[#9E4A47] font-medium uppercase tracking-wider">Dermatologist at Satya</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2B333C] leading-tight">
            Meet the Experts in Hair Restoration
          </h2>

          {/* Leadership */}
          <div className="space-y-1">
            <p>
              <strong className="text-[#9E4A47]">Dr. Shail Gupta — MBBS, MD</strong> — Founder
            </p>
            <p>
              <strong className="text-[#9E4A47]">Dr. Ruchi Agarwal — MBBS, MD</strong> — Co-Founder
            </p>
            <p className="text-[#2B333C] font-medium text-sm">Satya Skin & Hair Solutions</p>
          </div>

          {/* Education + Stats */}
          <div className="flex flex-wrap gap-3 text-xs md:text-sm">
            <span className="bg-white/80 px-3 py-1 rounded-full font-medium text-[#9E4A47]">
              MBBS, MD (Dermatology)
            </span>
            <span className="bg-white/80 px-3 py-1 rounded-full font-medium">
              Maulana Azad Medical College, Delhi
            </span>
            <span className="bg-[#FCEBDE] px-3 py-1 rounded-full font-bold text-[#9E4A47]">
              46+ Years Combined
            </span>
            <span className="bg-[#FCEBDE] px-3 py-1 rounded-full font-bold">
              50,000+ Procedures
            </span>
          </div>

          {/* Expertise Tags */}
          <div className="flex flex-wrap gap-2 text-xs">
            {['Hair Transplant (FUT, FUE)', 'Facial Aesthetics', 'Allergan & Galderma Trained'].map((item) => (
              <span key={item} className="bg-white/70 px-2.5 py-1 rounded-lg text-[#2B333C]">
                {item}
              </span>
            ))}
          </div>

          {/* Dr. Shail */}
          <p className="text-[#828D9C]">
            <strong className="text-[#9E4A47]">Dr. Shail:</strong> ISHRS, AIMA (Italy) • Trained in Dubai, Italy, Thailand, Korea
          </p>

          {/* Dr. Ruchi */}
          <p className="text-[#828D9C]">
            <strong className="text-[#9E4A47]">Dr. Ruchi:</strong> AIMA, AAAM, IADVL, ACSI • Facial Aesthetics by Allergan & Galderma
          </p>

          {/* Philosophy – Compact & Italic */}
          <p className="text-sm italic text-[#828D9C] border-l-4 border-[#9E4A47] pl-3 py-1">
            20+ years each. Protocols balance <strong className="text-[#B87C72]">safety, ethics, artistry</strong> — always{' '}
            <strong className="text-[#9E4A47]">Ethical Patient-Centric</strong>.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FCEBDE] via-[#FFF8EF] to-white border text-[#9E4A47] font-medium text-sm shadow-sm"
            >
              <PlayCircle size={18} />
              Watch HIFU
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#9E4A47] text-white font-medium text-sm shadow-md hover:bg-[#B87C72]"
            >
              <UserCheck size={18} />
              Get Assessment
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}