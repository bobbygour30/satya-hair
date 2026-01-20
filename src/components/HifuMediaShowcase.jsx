'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Play } from 'lucide-react';
import assets from '../assets/assets'; // adjust path if needed

// Helper: Extract YouTube ID
const getYouTubeId = (url) => {
  try {
    const urlObj = new URL(url);

    if (urlObj.hostname.includes('youtube.com') && urlObj.pathname.includes('/shorts/')) {
      return urlObj.pathname.split('/shorts/')[1].split('?')[0];
    }
    if (urlObj.hostname.includes('youtube.com') && urlObj.searchParams.has('v')) {
      return urlObj.searchParams.get('v');
    }
    if (urlObj.hostname.includes('youtu.be')) {
      return urlObj.pathname.slice(1);
    }
  } catch {}
  return null;
};

export default function HifuMediaShowcase() {
  const [activeIndex, setActiveIndex] = useState(null);

  const shorts = [
    {
      url: 'https://www.youtube.com/shorts/gNDIxX_tVMU',
      thumbnail: assets.thumbnail3,
    },
    {
      url: 'https://www.youtube.com/shorts/0SC4xifYpzc',
      thumbnail: assets.thumbnail2,
    },
    {
      url: 'https://www.youtube.com/shorts/Qcb6yreD2MM',
      thumbnail: assets.thumbnail1,
    },
  ];

  return (
    <section className="relative bg-[#FFF8EF] py-10 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Soft rose glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(158,74,71,0.1),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-semibold bg-[#9E4A47] bg-clip-text text-transparent p-3">
          See Real Procedures & Journeys
        </h2>
        <p className="text-[#828D9C] mt-4 text-lg max-w-2xl mx-auto">
          Watch on our YouTube & Instagram channels.
        </p>
      </motion.div>

      {/* Social Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="relative z-10 flex justify-center gap-6 mb-14"
      >
        <a
          href="https://instagram.com/yStamped"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#DFDFDD] bg-[#FFF8EF] hover:bg-[#FCEBDE] transition-all shadow-sm"
        >
          <Instagram className="text-[#9E4A47]" size={20} />
          <span className="font-medium text-[#2B333C]">Instagram</span>
        </a>

        <a
          href="https://www.youtube.com/@satyaskinandhair"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#DFDFDD] bg-[#FFF8EF] hover:bg-[#FCEBDE] transition-all shadow-sm"
        >
          <Youtube className="text-[#9E4A47]" size={20} />
          <span className="font-medium text-[#2B333C]">YouTube</span>
        </a>
      </motion.div>

      {/* YouTube Shorts */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-[#2B333C] mb-6 flex items-center gap-2"
        >
          <Youtube className="text-red-600" size={28} />
          Quick Shorts
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {shorts.map((short, idx) => {
            const videoId = getYouTubeId(short.url);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
              >
                <div className="relative aspect-[9/16] bg-black overflow-hidden">
                  {activeIndex === idx && videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&playsinline=1`}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={short.thumbnail}
                        alt="YouTube Short Thumbnail"
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-black/40" />

                      <button
                        onClick={() => setActiveIndex(idx)}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition">
                          <Play className="text-[#9E4A47] ml-1" size={28} />
                        </div>
                      </button>

                      <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                        SHORT
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA — RESTORED ✅ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-16 relative z-10"
      >
        <a
          href="https://www.youtube.com/@satyaskinandhair"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#9E4A47] text-white font-medium rounded-full hover:bg-[#8a3d3a] transition-colors shadow-lg"
        >
          <Youtube size={20} />
          Subscribe for More HIFU Transformations
        </a>
      </motion.div>
    </section>
  );
}
