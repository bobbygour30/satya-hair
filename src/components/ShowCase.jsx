"use client";
import { motion } from "framer-motion";
import {
  Award,
  Activity,
  ShieldCheck,
  Users,
  Globe2,
} from "lucide-react"; // using Lucide icons for consistency

const stats = [
  { label: "46 Years of Combined Experience", icon: Award }, // Represents achievement & recognition
  { label: "15,000+ Hair Transplants", icon: Activity }, // Symbolizes performance, precision, and activity
  { label: "Member - ISHRS", icon: ShieldCheck }, // Represents verified membership and trust
  { label: "2,65,000+ Patients Worldwide", icon: Globe2 }, // Represents a global patient base
];

export default function ShowCase() {
  return (
    <section className="relative py-10 px-6 md:px-20 overflow-hidden">
      {/* === Background gradients (unchanged glow) === */}
      <div className="absolute inset-0 bg-linear-to-br from-[#FFF8EF] via-[#FCEBDE] to-[#FFF8EF]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(184,124,114,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,rgba(184,124,114,0.08),transparent_70%)]" />

      {/* === Stats Grid === */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 z-10 max-w-7xl mx-auto">
        {stats.map(({ label, icon: Icon }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.15,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              y: -6,
              scale: 1.03,
              transition: { type: "spring", stiffness: 180 },
            }}
            className="group relative p-5 sm:p-6 rounded-2xl bg-[#FFF8EF]/60 backdrop-blur-xl border border-[#DFDFDD]/60 shadow-[0_6px_25px_rgba(184,124,114,0.12)] hover:shadow-[0_10px_35px_rgba(184,124,114,0.25)] transition-all duration-500 flex items-center gap-4"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-linear-to-br from-[#FCEBDE]/40 to-[#FFF8EF] rounded-2xl" />

            {/* Icon */}
            <motion.div
              animate={{
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
              className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-[#9E4A47] via-[#B87C72] to-[#9E4A47] shadow-[0_0_15px_rgba(184,124,114,0.35)] text-[#FFF8EF] shrink-0"
            >
              <Icon size={22} />
            </motion.div>

            {/* Label */}
            <p className="relative z-10 text-[#2B333C] font-medium text-sm sm:text-base leading-snug tracking-wide">
              {label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
