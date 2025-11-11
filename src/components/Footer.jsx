'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Facebook, Linkedin, Phone, Mail, Globe } from 'lucide-react';
import assets from '../assets/assets';

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-[#FFF8EF] via-[#FCEBDE]/30 to-[#FCEBDE]/50 text-[#2B333C] border-t border-[#DFDFDD] pt-16 pb-8 overflow-hidden">
      {/* Soft top glow accent */}
      <div className="absolute inset-x-0 -top-6 h-12 bg-linear-to-b from-[#FCEBDE]/70 via-transparent to-transparent blur-lg pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex itms-center flex-col md:flex-row justify-between gap-12"
        >
          {/* Column 1: Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src={assets.logo}
              alt="Satya Logo"
              className="max-w-[180px] md:max-w-[220px] lg:max-w-[260px] h-auto object-contain mx-auto md:mx-0 transition-all duration-300"
            />
          </div>

          

          {/* Column 3: Follow */}
          <div>
            <h4 className="text-lg font-semibold text-[#9E4A47] mb-3 text-center">Follow</h4>
            <ul className="space-y-2 text-sm">
              {[
                { icon: <Instagram size={18} />, name: 'Instagram' },
                { icon: <Youtube size={18} />, name: 'YouTube' },
                { icon: <Facebook size={18} />, name: 'Facebook' },
                { icon: <Linkedin size={18} />, name: 'LinkedIn' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href="#"
                    className="flex justify-center md:justify-start items-center gap-2 hover:text-[#B87C72] transition text-[#2B333C]"
                  >
                    {item.icon} {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-semibold text-[#9E4A47] mb-3 text-center">Contact</h4>
            <ul className="space-y-3 text-sm text-[#2B333C] text-center">
              <li className="flex justify-center md:justify-start items-center gap-2">
                <Phone className="text-[#9E4A47]" size={16} />
                <a href="tel:+919910094945" className="hover:text-[#B87C72] transition">
                  +91 99100 94945
                </a>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <Mail className="text-[#9E4A47]" size={16} />
                <a
                  href="mailto:info@satyaskinhairsolutions.com"
                  className="hover:text-[#B87C72] transition"
                >
                  info@satyaskinhairsolutions.com
                </a>
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <Globe className="text-[#9E4A47]" size={16} />
                <a
                  href="https://www.satyaskinhairsolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B87C72] transition "
                >
                  www.satyaskinhairsolutions.com
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[#DFDFDD] my-6"></div>

        {/* Bottom copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-[#828D9C] text-center"
        >
          <p>© 2025 Satya Skin & Hair Solutions. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-xs text-[#B87C72]">
            Designed with precision & care — Satya Aesthetics
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
