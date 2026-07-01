import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
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
          About <span className="text-navy-700">Me</span>
        </h2>
        <div className="w-16 h-1 bg-navy-700 mx-auto rounded-full mb-8"></div>

        <div className="max-w-3xl mx-auto text-left space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            Halo! Saya seorang pengembang frontend yang berdomisili di
            Indonesia. Saya memiliki ketertarikan besar pada desain minimalis
            dan performa web.
          </p>
          <p>
            Saat ini saya mendalami React JS, Tailwind CSS, dan Framer Motion
            untuk menciptakan pengalaman pengguna yang interaktif namun tetap
            ringan. Saya percaya bahwa kode yang baik adalah kode yang mudah
            dipelihara dan menyenangkan untuk dilihat.
          </p>
          <p>
            Di luar coding, saya suka menikmati kopi, membaca buku, dan
            berkontribusi pada proyek open-source.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;