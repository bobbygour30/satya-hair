'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, PlayCircle } from 'lucide-react';
import assets from '../assets/assets';

// Helper (kept exactly as original)
const getYouTubeId = (url) => {
  try {
    const urlObj = new URL(url);
    let id = '';

    if (urlObj.hostname.includes('youtube.com') && urlObj.searchParams.has('v')) {
      id = urlObj.searchParams.get('v');
    }
    else if (urlObj.hostname.includes('youtube.com') && urlObj.pathname.includes('/shorts/')) {
      id = urlObj.pathname.split('/shorts/')[1].split('?')[0];
    }
    else if (urlObj.hostname.includes('youtu.be')) {
      id = urlObj.pathname.slice(1).split('?')[0];
    }

    return id || null;
  } catch {
    return null;
  }
};

export default function HifuMediaShowcase() {
  const shorts = [
    {
      url: 'https://www.youtube.com/shorts/Qcb6yreD2MM',
      // Replace these 3 images with your actual horizontal testimonial images
      customThumbnail: assets.thumbnail1, 
      title: 'Jawline Lift Before & After',
      description: 'See dramatic contouring results in 60 seconds.',
    },
    {
      url: 'https://www.youtube.com/shorts/gNDIxX_tVMU',
      customThumbnail: assets.thumbnail2,
      title: 'Neck Tightening Tips',
      description: 'Post-HIFU care for lasting glow.',
    },
    {
      url: 'https://www.youtube.com/shorts/0SC4xifYpzc',
      customThumbnail: assets.thumbnail3,
      title: 'Patient Reaction Live',
      description: 'Real emotions during HIFU session.',
    },
  ];

  return (
    <section className="relative bg-[#FFF8EF] py-10 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Soft rose glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(158,74,71,0.1),transparent_70%)] pointer-events-none" />

      {/* Header - unchanged */}
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

      {/* Social Buttons - unchanged */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="relative z-10 flex justify-center gap-6 mb-14"
      >
        <a
          href="https://www.instagram.com/satyaskinhairsolutions/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#DFDFDD] bg-[#FFF8EF] hover:bg-[#FCEBDE] transition-all shadow-sm"
        >
          <Instagram className="text-[#9E4A47]" size={20} />
          <span className="font-medium text-[#2B333C]">Instagram</span>
        </a>
        <a
          href="https://www.youtube.com/watch?v=MWObPqvRRgk&list=TLGGo33LTfPNCkEwNDExMjAyNQ&t=2s"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#DFDFDD] bg-[#FFF8EF] hover:bg-[#FCEBDE] transition-all shadow-sm"
        >
          <Youtube className="text-[#9E4A47]" size={20} />
          <span className="font-medium text-[#2B333C]">YouTube</span>
        </a>
      </motion.div>

      {/* YouTube Shorts Row - only visual part replaced with your exact design */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-[#2B333C] mb-8 flex items-center gap-2"
        >
          <Youtube className="text-red-600" size={28} />
          Quick Shorts
        </motion.h3>

        {/* Horizontal scroll on mobile → grid on desktop */}
        <div className="flex overflow-x-auto scrollbar-hide gap-8 pb-8 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:snap-none">
          {shorts.map((short, idx) => (
            <motion.a
              key={idx}
              href={short.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group relative flex-shrink-0 w-[85vw] sm:w-96 md:w-full snap-center"
              whileHover={{ y: -10 }}
            >
              {/* Your exact testimonial thumbnail design */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={short.customThumbnail}
                  alt={short.title}
                  className="w-full  md:h-60"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* CTA - unchanged */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-16"
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