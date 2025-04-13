import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../CustomHooks/useOnlineStatus";

const Home = () => {
  const online= useOnlineStatus();
  const isOnline = online ? "Online" : "Offline";
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#151515] to-[#1e1e1e] text-white px-4 sm:px-8 py-16 sm:py-24 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-indigo-900/10 blur-3xl animate-float-delay"></div>
      </div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -40, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-xs sm:max-w-sm rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-purple-500/30 group"
      >
        <img
          src="hero1.png"
          alt="Sunil Kunwar Hero"
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
        />
        {/* Image shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </motion.div>

      {/* Text Content Section */}
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl bg-white/5 border border-white/10 backdrop-blur-lg rounded-[2rem] shadow-2xl p-6 sm:p-8 hover:shadow-purple-500/20 transition-all duration-500 z-10"
      >
        {/* Content shine effect */}
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent leading-tight"
        >
          Hey, I'm <span className="text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">Sunil Kunwar</span> 
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-lg sm:text-xl text-gray-300/90 leading-relaxed max-w-[90%]"
        >
          A passionate developer, building <span className="text-purple-300">MERN magic</span>,  and
          <span className="text-pink-300"> soulful UIs</span> — one line of code at a time.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
          className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          <Link
            to="/contact"
            className="relative px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-medium shadow-lg hover:shadow-purple-500/40 flex items-center gap-2 overflow-hidden group"
          >
            <span className="relative z-10">Contact me</span>
            <span className="relative z-10 text-lg">🚀</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          
          
          
          <a
            href="/resume.pdf"  
            download
            className="relative px-6 py-3 rounded-xl border border-purple-400/50 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 font-medium flex items-center gap-2 overflow-hidden group"
          >
            <span className="relative z-10">Download CV</span>
            <span className="relative z-10 text-lg">📄</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
        </motion.div>
      </motion.div>
      You are currently {isOnline}
    </section>
  );
};

export default Home;