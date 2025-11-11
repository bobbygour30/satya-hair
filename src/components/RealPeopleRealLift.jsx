'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function RealPeopleRealLift() {
  const cases = [
    {
      title: 'Jawline & Lower Face',
      subtitle: 'Jawline contour (illustrative)',
      label: 'Before ↔ After',
      link: 'Learn Full Case →',
      imgBefore:
        'https://exploreplasticsurgery.com/wp-content/uploads/2008/08/Lower-Facial-Reshaping-by-Facelift-Dr-Barry-Eppley-Indianapolis.jpg',
      imgAfter:
        'https://exploreplasticsurgery.com/wp-content/uploads/2008/08/Lower-Facial-Reshaping-by-Facelift-Dr-Barry-Eppley-Indianapolis.jpg',
    },
    {
      title: 'Neck & Submental',
      subtitle: 'Neck tightening (illustrative)',
      label: 'Before ↔ After',
      link: 'Learn Full Case →',
      imgBefore:
        'https://www.ccplastics.com/wp-content/uploads/2023/12/submental-liposuction-146-left-side-detail.jpg',
      imgAfter:
        'https://www.ccplastics.com/wp-content/uploads/2023/12/submental-liposuction-146-left-side-detail.jpg',
    },
    {
      title: 'Upper Face',
      subtitle: 'Brow lift (illustrative)',
      label: 'Before ↔ After',
      link: 'Learn Full Case →',
      imgBefore:
        'https://www.shutterstock.com/image-photo/teenage-girl-before-after-acne-600nw-1623905551.jpg',
      imgAfter:
        'https://www.shutterstock.com/image-photo/teenage-girl-before-after-acne-600nw-1623905551.jpg',
    },
  ];

  return (
    <section id='results' className="relative bg-[#FFF8EF] py-10 px-6 md:px-16 lg:px-24 text-[#2B333C] mt-10 overflow-hidden">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-semibold bg-[#9E4A47]  bg-clip-text text-transparent">
          Real People, Real Lift
        </h2>
        <p className="text-[#828D9C] mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
          Explore authentic HIFU outcomes at{' '}
          <span className="text-[#9E4A47] font-medium">Satya</span> — from subtle refresh to visible contouring.
        </p>

        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-linear-to-r from-[#FCEBDE] via-[#FFF8EF] to-[#FCEBDE] border border-[#DFDFDD] text-[#9E4A47] font-medium shadow-sm hover:shadow-md transition-all"
        >
          See More on Instagram
          <ArrowRight size={18} className="text-[#9E4A47]" />
        </motion.a>
      </motion.div>

      {/* Case Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {cases.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl shadow-[0_4px_24px_rgba(158,74,71,0.08)] border border-[#DFDFDD] hover:border-[#B87C72]/50 bg-white transition-all"
          >
            {/* Before / After Split Image */}
            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={item.imgBefore}
                alt={`${item.title} before`}
                className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-700 group-hover:opacity-0"
              />
              <img
                src={item.imgAfter}
                alt={`${item.title} after`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />
              <div className="absolute bottom-2 right-3 text-xs tracking-wide bg-[#FFF8EF]/90 px-3 py-1 rounded-full text-[#9E4A47] border border-[#FCEBDE]/70 backdrop-blur-sm">
                {item.label}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <p className="text-sm text-[#B87C72] mb-1">{item.subtitle}</p>
              <h3 className="text-xl font-semibold text-[#2B333C]">{item.title}</h3>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-1 mt-4 text-[#9E4A47] hover:text-[#B87C72] transition-all font-medium"
              >
                {item.link}
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
