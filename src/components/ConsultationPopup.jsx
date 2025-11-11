"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

/* ---------- EMAILJS CONFIG ---------- */
const EMAILJS_SERVICE_ID = "service_s1wuxko";
const EMAILJS_TEMPLATE_ID = "template_k0i9dzv";
const EMAILJS_PUBLIC_KEY = "jvQvxfc2D2VG7cqSp";
/* ------------------------------------ */

/* ---------- TOAST COMPONENT ---------- */
const Toast = ({ type, message, onClose }) => {
  const isSuccess = type === "success";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl text-sm font-medium backdrop-blur-lg border ${
        isSuccess
          ? "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-800 border-emerald-200"
          : "bg-gradient-to-r from-red-50 to-rose-50 text-rose-800 border-rose-200"
      }`}
      onClick={onClose}
    >
      {isSuccess ? (
        <CheckCircle className="w-5 h-5 text-emerald-600" />
      ) : (
        <XCircle className="w-5 h-5 text-rose-600" />
      )}
      <span>{message}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="ml-2 text-current opacity-60 hover:opacity-100 transition"
      >
        <X size={16} />
      </button>
    </motion.div>
  );
};
/* ------------------------------------- */

const ConsultationPopup = ({ isOpen, onClose }) => {
  const formRef = useRef();
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          showToast("success", "Thank you! We’ll contact you within 24 hours.");
          formRef.current.reset();
          setTimeout(() => onClose(), 800); // Close popup after toast appears
        },
        (error) => {
          console.error(error);
          showToast("error", "Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Popup Card */}
            <motion.div
              className="relative bg-[#FFF8EF] text-[#2B333C] rounded-2xl shadow-2xl w-[90%] max-w-md p-6 sm:p-8"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-[#9E4A47] hover:scale-110 transition-transform"
              >
                <X size={22} />
              </button>

              {/* Heading */}
              <h2 className="text-2xl font-semibold mb-6 text-center bg-linear-to-r from-[#9E4A47] to-[#B87C72] bg-clip-text text-transparent">
                Book Your Consultation
              </h2>

              {/* Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium mb-1.5">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-[#b87c7240] bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#B87C72] transition"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full rounded-lg border border-[#b87c7240] bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#B87C72] transition"
                  />
                </div>

                {/* Hidden message field */}
                <input type="hidden" name="message" value="" />

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-linear-to-r from-[#9E4A47] via-[#B87C72] to-[#9E4A47] text-[#FFF8EF] py-3 rounded-full font-medium text-sm shadow-md transition-all"
                >
                  Submit & Book
                </motion.button>

                {/* Footer Note */}
                <p className="text-xs text-center text-gray-500 mt-3">
                  We’ll contact you within 24 hours to confirm your consultation.
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification Portal */}
      <AnimatePresence>
        {toast && (
          <Toast
            type={toast.type}
            message={toast.message}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ConsultationPopup;