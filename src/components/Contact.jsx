import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Get In <span className="text-navy-700">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-navy-700 mx-auto rounded-full mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          {/* Info Kontak */}
          <div className="space-y-6 bg-white dark:bg-navy-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-navy-700">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
              Hubungi Saya
            </h3>
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
              <FiMail className="text-navy-700 text-xl" />
              <span>email@domain.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
              <FiPhone className="text-navy-700 text-xl" />
              <span>+62 812 3456 7890</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
              <FiMapPin className="text-navy-700 text-xl" />
              <span>Jakarta, Indonesia</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 pt-4 border-t border-gray-200 dark:border-navy-700">
              Saya selalu terbuka untuk diskusi atau kolaborasi. Jangan ragu
              untuk menyapa!
            </p>
          </div>

          {/* Form sederhana (tanpa backend) */}
          <div className="bg-white dark:bg-navy-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-navy-700">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
              Kirim Pesan
            </h3>
            <form
              action="mailto:email@domain.com"
              method="POST"
              encType="text/plain"
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Nama Anda"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-navy-900 border border-gray-200 dark:border-navy-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-700 transition"
                required
              />
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-navy-900 border border-gray-200 dark:border-navy-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-700 transition"
                required
              />
              <textarea
                rows="4"
                placeholder="Pesan..."
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-navy-900 border border-gray-200 dark:border-navy-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-700 transition resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-navy-700 hover:bg-navy-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
              >
                <FiSend /> Kirim
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;