'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Play } from 'lucide-react';

// Helper: Extract YouTube video ID from any valid YouTube URL
const getYouTubeId = (url) => {
  try {
    const urlObj = new URL(url);
    let id = '';

    // Standard video: youtube.com/watch?v=ID
    if (urlObj.hostname.includes('youtube.com') && urlObj.searchParams.has('v')) {
      id = urlObj.searchParams.get('v');
    }
    // Shorts: youtube.com/shorts/ID
    else if (urlObj.hostname.includes('youtube.com') && urlObj.pathname.includes('/shorts/')) {
      id = urlObj.pathname.split('/shorts/')[1].split('?')[0];
    }
    // youtu.be/ID
    else if (urlObj.hostname.includes('youtu.be')) {
      id = urlObj.pathname.slice(1).split('?')[0];
    }

    return id || null;
  } catch {
    return null;
  }
};

// Helper: Generate embed URL
const getEmbedUrl = (url) => {
  const id = getYouTubeId(url);
  return id ? `https://www.youtube.com/embed/${id}` : null;
};

export default function HifuMediaShowcase() {
  // Use FULL YouTube URLs — no need to extract IDs!


  const shorts = [
    {
      url: 'https://www.youtube.com/shorts/ClBYxTLC23w', // Replace with real Shorts
      title: 'Jawline Lift Before & After',
      description: 'See dramatic contouring results in 60 seconds.',
    },
    {
      url: 'https://www.youtube.com/shorts/bo7RgLyn820',
      title: 'Neck Tightening Tips',
      description: 'Post-HIFU care for lasting glow.',
    },
    {
      url: 'https://www.youtube.com/shorts/7x7GhR8S_v0',
      title: 'Patient Reaction Live',
      description: 'Real emotions during HIFU session.',
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
          href="https://www.youtube.com/watch?v=MWObPqvRRgk&list=TLGGo33LTfPNCkEwNDExMjAyNQ&t=2s"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#DFDFDD] bg-[#FFF8EF] hover:bg-[#FCEBDE] transition-all shadow-sm"
        >
          <Youtube className="text-[#9E4A47]" size={20} />
          <span className="font-medium text-[#2B333C]">YouTube</span>
        </a>
      </motion.div>

    
      

      {/* YouTube Shorts Row */}
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
            const embedUrl = getEmbedUrl(short.url);
            return (
              <motion.a
                key={idx}
                href={short.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group block bg-white rounded-2xl overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                <div className="relative aspect-[9/16] bg-black overflow-hidden">
                  {embedUrl ? (
                    <iframe
                      src={embedUrl}
                      title={short.title}
                      className="w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <Youtube className="text-gray-400" size={40} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    
                  </div>
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                    SHORT
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* CTA */}
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