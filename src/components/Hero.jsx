import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-12">
        {/* Kiri: Teks */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <p className="text-navy-600 dark:text-navy-400 font-medium mb-2">
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
            Your Name
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Frontend Developer &amp; UI/UX Enthusiast
          </p>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 mb-8">
            Saya suka membangun antarmuka yang minimalis, cepat, dan nyaman
            dipakai. Fokus pada pengalaman pengguna yang seamless.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="p-3 rounded-full bg-gray-100 dark:bg-navy-800 text-gray-700 dark:text-white hover:bg-navy-700 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-gray-100 dark:bg-navy-800 text-gray-700 dark:text-white hover:bg-navy-700 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-gray-100 dark:bg-navy-800 text-gray-700 dark:text-white hover:bg-navy-700 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FiMail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Kanan: Foto Profil */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-navy-700 dark:border-navy-600 shadow-2xl">
            {/* Ganti src dengan foto profil Anda, taruh di public/images/profile.jpg */}
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://ui-avatars.com/api/?name=Your+Name&background=1e3a8a&color=fff&size=200";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;