'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import assets from '../assets/assets';

export default function RealPeopleRealLift() {
  const cases = [
    {
      title: 'Srijini Paul',
      subtitle: 'Synthetic Hair Transplant',
      img: assets.srijni,
    },
    {
      title: 'Emran Taj',
      subtitle: 'Synthetic Hair Transplant',
      img: assets.emran,
    },
    {
      title: 'Arun Kumar',
      subtitle: 'Synthetic Hair Transplant',
      img: assets.arun,
    },
  ];

  return (
    <section
      id="results"
      className="relative bg-[#FFF8EF] py-10 px-6 md:px-16 lg:px-24 text-[#2B333C] mt-10"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-semibold bg-[#9E4A47] bg-clip-text text-transparent">
          Real People, Real Lift
        </h2>
        <p className="text-[#828D9C] mt-4 max-w-2xl mx-auto text-lg">
          Explore authentic HIFU outcomes at{' '}
          <span className="text-[#9E4A47] font-medium">Satya</span>.
        </p>

        <motion.a
          href="https://www.instagram.com/satyaskinhairsolutions"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-linear-to-r from-[#FCEBDE] via-[#FFF8EF] to-[#FCEBDE] border border-[#DFDFDD] text-[#9E4A47] font-medium shadow-sm"
        >
          See More on Instagram
          <ArrowRight size={18} />
        </motion.a>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cases.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#DFDFDD] bg-white shadow-[0_4px_24px_rgba(158,74,71,0.08)] overflow-hidden"
          >
            {/* Image */}
            <div className="bg-[#FCEBDE]">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <p className="text-sm text-[#B87C72] mb-1">{item.subtitle}</p>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
