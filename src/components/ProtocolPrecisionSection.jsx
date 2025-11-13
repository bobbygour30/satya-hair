import React from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

export default function ProtocolPrecisionSection({
  imageSrc = assets.banner9,
}) {
  const container = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="bg-linear-to-br from-[#FFF8EF] via-[#FCEBDE]/60 to-[#FFF8EF] text-[#2B333C] py-10 px-6 sm:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT SECTION */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="space-y-8"
        >
          {/* Title */}
          <motion.div variants={fadeUp} className="relative inline-block">
            <div className="absolute -inset-1 bg-linear-to-r from-[#B87C72]/40 to-[#9E4A47]/30 rounded-lg blur-md"></div>
            <h2 className="relative text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2B333C]">
              Where{' '}
              <span className="bg-linear-to-r from-[#9E4A47] to-[#B87C72] bg-clip-text text-transparent">
                Protocols
              </span>{' '}
              Meet Precision
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-[#828D9C] leading-relaxed max-w-xl"
          >
            Device-grade ultrasound with calibrated energy mapping, facial vector planning, and nerve-safe zones. We personalize shot count and depth by age, laxity, and facial anatomy.
          </motion.p>

          {/* Feature Grid */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
          >
            {[
              { title: '3-Layer Mapping', subtitle: '1.5 / 3.0 / 4.5 mm' },
              { title: 'Pain-Managed Comfort', subtitle: 'Protocols for safe experience' },
              { title: 'Ethical Indications', subtitle: 'No over-treat approach' },
              { title: 'Doctor-Performed', subtitle: 'Nurse-assisted precision' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.04 }}
                className="bg-[#FFF8EF] rounded-xl p-4 border border-[#DFDFDD] shadow-[0_4px_20px_rgba(158,74,71,0.1)] hover:shadow-[0_6px_25px_rgba(158,74,71,0.2)] transition-all duration-300"
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 18,
                  delay: index * 0.05,
                }}
              >
                <div className="font-semibold text-[#2B333C]">{item.title}</div>
                <div className="text-sm text-[#828D9C]">{item.subtitle}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-linear-to-br from-[#FFF8EF] to-[#FCEBDE]/60 border border-[#DFDFDD]">
            <motion.img
              src={imageSrc}
              alt="Ultrasound device in clinical setting"
              className="w-full h-80 md:h-112 object-fill"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 160 }}
            />

            {/* Floating Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="absolute left-6 top-6 bg-[#FFF8EF]/90 backdrop-blur-md rounded-xl px-4 py-2 shadow-md border border-[#DFDFDD]"
            >
              <div className="text-xs font-semibold text-[#2B333C]">Clinical-Grade Ultrasound</div>
              <div className="text-[11px] text-[#828D9C]">Safe, precise, medical protocols</div>
            </motion.div>

            {/* Animated Accent Ring */}
            <motion.div
              className="absolute right-6 bottom-6 w-20 h-20 rounded-full border-[2.5px] border-[#B87C72] shadow-[0_0_25px_rgba(158,74,71,0.3)]"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --- MetricBadge --- */
function MetricBadge({ value, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center bg-[#FFF8EF] rounded-xl px-5 py-3 border border-[#DFDFDD] shadow-[0_4px_20px_rgba(158,74,71,0.1)] transition-all duration-300"
    >
      <div className="text-2xl font-extrabold bg-linear-to-r from-[#9E4A47] to-[#B87C72] bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-xs text-[#828D9C] font-medium">{label}</div>
    </motion.div>
  );
}
