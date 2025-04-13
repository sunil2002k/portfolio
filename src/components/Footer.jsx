import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="mt-24 bg-gradient-to-br from-[#0a0a0a] via-[#151515] to-[#1e1e1e] backdrop-blur-lg border-t border-white/10 text-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Name & Message */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Sunil Kunwar
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-3 text-sm sm:text-base text-gray-300/90"
          >
            Crafting digital experiences with code and creativity ✨
          </motion.p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex gap-5 sm:gap-6 text-xl"
        >
          <motion.a
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/sunil2002k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-all duration-300 p-2 rounded-full hover:bg-white/5"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </motion.a>
          <motion.a
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-all duration-300 p-2 rounded-full hover:bg-white/5"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </motion.a>
          <motion.a
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            href="kunwarsunil093@email.com"
            className="text-white hover:text-purple-400 transition-all duration-300 p-2 rounded-full hover:bg-white/5"
            aria-label="Email"
          >
            <FaEnvelope className="text-2xl" />
          </motion.a>
          <motion.a
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-all duration-300 p-2 rounded-full hover:bg-white/5"
            aria-label="Twitter"
          >
            <FaTwitter className="text-2xl" />
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="border-t border-white/10 text-center text-xs sm:text-sm text-gray-400 py-5 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>
            © {new Date().getFullYear()} Sunil Kunwar. All rights reserved.
          </span>
          <span className="hidden sm:block">·</span>
          <span>Built with 💜 using React, Framer Motion & Tailwind CSS</span>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
