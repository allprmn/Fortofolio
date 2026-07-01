import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-gray-200 dark:border-navy-800 bg-white dark:bg-navy-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Your Name. Built with{" "}
        <span className="text-red-500">❤</span> and React.
      </div>
    </footer>
  );
};

export default Footer;