'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

export default function HifuFAQSection() {
  const faqs = [
    {
      question: 'Is Synthetic Hair (BioFibre) Safe and Biocompatible?',
      answer:
        'Yes. We exclusively use BioFibre synthetic hair, which is made from a non-toxic, medical-grade material. It is tested and certified for biocompatibility and safety, ensuring the fibers are well-tolerated by the human scalp.',
    },
    {
      question: 'How soon will I see the hair restoration results?',
      answer:
        'The primary advantage of synthetic hair implants is the instantaneous result. You will see the full volume and desired density immediately after the procedure is completed. There is no waiting period for hair growth.',
    },
    {
      question: 'How long do the synthetic hair implants last?',
      answer:
        'The results are considered permanent restoration as the implanted hair fibers remain secured in the scalp. However, due to the natural turnover and exfoliation of the scalp, a small percentage of fibers may need periodic replanting or maintenance sessions (typically annually) to maintain optimal density',
    },
    {
      question: 'How many sessions are typically required?',
      answer:
        'This depends entirely on your goals. Significant density can often be achieved in 1 to 3 sessions spread over a period. Smaller areas may require a single session, while larger areas of balding may require multiple sessions to achieve the desired maximum volume.',
    },
    {
      question: 'Synthetic Implants vs. FUE/FUT Hair Transplants?',
      answer:
        '*Traditional FUE/FUT transplants move existing hair from a donor area, requiring sufficient donor hair and time for growth. Synthetic Implants use biocompatible fibers to provide instant, high density and are ideal for patients with limited or poor donor hair. *',
    },
    {
      question: 'Who is not suitable for Synthetic Hair Implants?',
      answer:
        'Individuals with severe inflammatory scalp conditions (like Psoriasis, Alopecia Areata, severe dermatitis), those unwilling to commit to required maintenance/hygiene, or those who fail the mandatory biocompatibility patch test should avoid the procedure.',
    },
    {
      question: 'What are the downtime and potential side effects?',
      answer:
        'Downtime is minimal. You may experience slight redness, swelling, or minor discomfort at the implant sites for the first 24 to 48 hours. Most patients can return to work and light activities the day after the procedure, though direct scalp touching and strenuous exercise should be avoided briefly.',
    },
    {
      question: 'What are the post-care and maintenance instructions?',
      answer:
        'For the first week, do not scratch or rub the scalp. Avoid strenuous exercise and swimming for at least two weeks. You must use the prescribed shampoos and lotions and follow the specialized scalp washing technique demonstrated by our team. Avoid pulling or combing the implanted fibers vigorously.',
    },
    {
      question: 'What is the cost and package structure?',
      answer:
        '*The cost is determined by the extent of balding and the number of synthetic hair fibers needed to achieve your desired density. Pricing is often structured per fiber count or by treatment area. Our expert will create a customized, transparent plan during your hair assessment. *',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id='faq' className="relative bg-[#FFF8EF] py-14 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(252,235,222,0.5),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-semibold bg-[#9E4A47] bg-clip-text text-transparent p-3">
          Everything You Should Know
        </h2>
      </motion.div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto divide-y divide-[#DFDFDD] border-y border-[#DFDFDD]/70 relative z-10">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="py-5"
          >
            <button
              className="flex justify-between items-center w-full text-left group"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="text-lg md:text-xl font-medium text-[#2B333C] group-hover:text-[#9E4A47] transition-colors">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-3 text-[#9E4A47]"
              >
                <ChevronDown size={22} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 text-[#828D9C] text-base leading-relaxed bg-[#FCEBDE]/50 rounded-lg p-4 border border-[#DFDFDD] shadow-sm">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* CTA Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-10 mt-20 max-w-2xl mx-auto bg-linear-to-r from-[#FCEBDE] to-[#FFF8EF] border border-[#DFDFDD] rounded-2xl shadow-[0_8px_24px_rgba(158,74,71,0.1)] p-8 text-center"
      >
        <h3 className="text-xl font-semibold text-[#2B333C] mb-2">
          Still have questions?
        </h3>
        <p className="text-[#828D9C] mb-6">
          Chat directly with our dermatologist for guidance tailored to your skin.
        </p>
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#9E4A47] text-white font-medium shadow-md hover:bg-[#B87C72] transition-all"
        >
          <MessageCircle size={20} />
          Chat with a Doctor
        </motion.a>
      </motion.div>
    </section>
  );
}
