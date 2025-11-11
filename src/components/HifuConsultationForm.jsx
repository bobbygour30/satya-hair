'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Send } from 'lucide-react';

export default function HifuConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '',
    concern: '',
    message: '',
    file: null,
    virtualConsult: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted! Our team will contact you shortly.');
  };

  return (
    <section id='contact' className="relative bg-[#FFF8EF] py-10 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(158,74,71,0.1),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-semibold bg-[#9E4A47] bg-clip-text text-transparent p-3">
          Find Out If HIFU Is Right for You
        </h2>
        <p className="text-[#828D9C] mt-4 text-lg max-w-2xl mx-auto">
          Upload your pictures and describe your concern — our experts will review and respond within 24 hours.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl mx-auto bg-[#FFF8EF]/80 backdrop-blur-md rounded-2xl border border-[#DFDFDD] shadow-[0_8px_24px_rgba(0,0,0,0.05)] p-8 md:p-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-[#2B333C] mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 border border-[#DFDFDD] rounded-lg focus:ring-2 focus:ring-[#B87C72] outline-none text-[#2B333C]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2B333C] mb-1">
              Email / WhatsApp
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="email or +91…"
              className="w-full px-4 py-3 border border-[#DFDFDD] rounded-lg focus:ring-2 focus:ring-[#B87C72] outline-none text-[#2B333C]"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-[#2B333C] mb-1">
            Select Concern
          </label>
          <select
            name="concern"
            value={formData.concern}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#DFDFDD] rounded-lg focus:ring-2 focus:ring-[#B87C72] outline-none text-[#2B333C]"
          >
            <option value="">Choose an option</option>
            <option value="jawline">Jawline & Lower Face</option>
            <option value="neck">Neck & Submental</option>
            <option value="brow">Brow / Upper Face</option>
            <option value="fullface">Full Face & Neck</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-[#2B333C] mb-1">
            Upload Photos
          </label>
          <div className="flex items-center gap-4">
            <label
              htmlFor="file-upload"
              className="flex items-center gap-2 px-4 py-3 border border-[#B87C72] rounded-lg cursor-pointer hover:bg-[#FCEBDE] transition-all text-[#9E4A47] font-medium"
            >
              <Upload size={18} /> Choose File
            </label>
            <input
              id="file-upload"
              type="file"
              name="file"
              onChange={handleChange}
              className="hidden"
            />
            <span className="text-sm text-[#828D9C]">
              {formData.file ? formData.file.name : 'No file chosen'}
            </span>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-[#2B333C] mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your skin goals"
            rows="4"
            className="w-full px-4 py-3 border border-[#DFDFDD] rounded-lg focus:ring-2 focus:ring-[#B87C72] outline-none text-[#2B333C]"
          />
        </div>

        <div className="flex items-center gap-3 mb-8">
          <input
            type="checkbox"
            name="virtualConsult"
            checked={formData.virtualConsult}
            onChange={handleChange}
            id="virtualConsult"
            className="w-5 h-5 text-[#9E4A47] border-[#DFDFDD] rounded focus:ring-[#B87C72]"
          />
          <label
            htmlFor="virtualConsult"
            className="text-[#2B333C] text-sm md:text-base"
          >
            I want a virtual consultation
          </label>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-[#9E4A47] text-[#FFF8EF] py-3.5 rounded-full font-medium shadow-md hover:bg-[#B87C72] transition-all"
        >
          <Send size={18} /> Submit My Details
        </motion.button>

        <p className="text-xs text-[#828D9C] text-center mt-5">
          By submitting, you agree to be contacted by our counselor within 24 hours.
        </p>
      </motion.form>
    </section>
  );
}
