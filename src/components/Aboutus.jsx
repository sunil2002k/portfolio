// components/About.jsx

import React from 'react';
import { motion } from 'framer-motion';

const Aboutus = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen bg-gradient-to-b from-[#0d0d0d] to-[#1c1c1c] text-white px-6 py-24 flex items-center"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10 text-center text-white"
        >
          👋 About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-xl"
        >
          <p className="text-lg text-gray-200 leading-relaxed">
            Hey, I’m <span className="text-purple-300 font-semibold">Sunil Kunwar</span> — a computer engineering student with a heart that beats for clean UI, meaningful code, and building things that vibe with people.
            <br /><br />
            I specialize in crafting full-stack applications using the <span className="text-purple-300 font-medium">MERN stack</span>, diving deep into <span className="text-purple-300 font-medium">blockchain</span> tech, and constantly exploring the realms of <span className="text-purple-300 font-medium">AI and cloud computing</span>.
            <br /><br />
            Whether it’s a marketplace like <strong>Bazar</strong>, a decentralized app like <strong>BlockMed</strong>, or this very portfolio — I build with purpose, passion, and a dash of poetic code 🪄
            <br /><br />
            Let’s shape the future — one deploy at a time 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutus;
