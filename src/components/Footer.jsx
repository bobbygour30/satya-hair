'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Instagram,
  Youtube,
  Facebook,
  Linkedin,
  Phone,
  Mail,
  Globe,
  MapPin,
} from 'lucide-react';
import assets from '../assets/assets';

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-[#FFF8EF] via-[#FCEBDE]/30 to-[#FCEBDE]/50 text-[#2B333C] border-t border-[#DFDFDD] pt-16 pb-8 overflow-hidden">
      {/* Soft glow */}
      <div className="absolute inset-x-0 -top-6 h-12 bg-linear-to-b from-[#FCEBDE]/70 via-transparent to-transparent blur-lg pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* ================= TOP GRID ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            grid grid-cols-1
            md:grid-cols-3
            gap-12
            items-start
          "
        >
          {/* ===== Column 1: Logo + About ===== */}
          <div className="space-y-4 text-center md:text-left">
            <img
              src={assets.logo}
              alt="Satya Skin and Hair Solutions"
              className="max-w-[200px] mx-auto md:mx-0"
            />
            <p className="text-sm text-[#828D9C] leading-relaxed">
              We at{' '}
              <span className="text-[#9E4A47] font-medium">
                Satya Skin and Hair Solutions
              </span>{' '}
              have highly skilled doctors, including expert hair transplant
              surgeons and skin specialists. We are committed to delivering the
              best results in hair transplantation and advanced skin treatments
              with care, precision, and trust.
            </p>
          </div>

          {/* ===== Column 2: Social ===== */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold text-[#9E4A47]">
              Follow Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.facebook.com/satyaskinhairsolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-3 hover:text-[#B87C72] transition"
                >
                  <Facebook size={18} /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/satyaskinhairsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-3 hover:text-[#B87C72] transition"
                >
                  <Instagram size={18} /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@satyaskinhairsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-3 hover:text-[#B87C72] transition"
                >
                  <Youtube size={18} /> YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://in.linkedin.com/company/satyaskinhairsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-3 hover:text-[#B87C72] transition"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* ===== Column 3: Contact ===== */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold text-[#9E4A47]">
              Contact
            </h4>

            <ul className="space-y-3 text-sm text-[#2B333C]">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={16} className="text-[#9E4A47]" />
                <span>
                  <a href="tel:+919999570494" className="hover:text-[#B87C72]">
                    +91 99995 70494
                  </a>{' '}
                  /{' '}
                  <a href="tel:+919910094945" className="hover:text-[#B87C72]">
                    +91 99100 94945
                  </a>
                </span>
              </li>

              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail size={16} className="text-[#9E4A47]" />
                <a
                  href="mailto:info@satyaskinhairsolutions.com"
                  className="hover:text-[#B87C72]"
                >
                  info@satyaskinhairsolutions.com
                </a>
              </li>

              <li className="flex items-start justify-center md:justify-start gap-3">
                <MapPin size={16} className="text-[#9E4A47] mt-0.5" />
                <span>
                  <strong>Gurugram:</strong> 4301, DLF Phase 4, Near Galleria,
                  Gurugram – 122002
                </span>
              </li>

              <li className="flex items-start justify-center md:justify-start gap-3">
                <MapPin size={16} className="text-[#9E4A47] mt-0.5" />
                <span>
                  <strong>Delhi:</strong> ED 38/A, Pitampura Metro Station,
                  Madhuban Chowk, Delhi – 110034
                </span>
              </li>

             
            </ul>
          </div>
        </motion.div>

        {/* ================= DIVIDER ================= */}
        <div className="border-t border-[#DFDFDD] my-8" />

        {/* ================= BOTTOM ================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center text-sm text-[#828D9C] text-center gap-2"
        >
          <p>© 2025 Satya Skin & Hair Solutions. All rights reserved.</p>
        
        </motion.div>
      </div>
    </footer>
  );
}
