import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../CustomHooks/useOnlineStatus";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import { BsRocketFill, BsFileEarmarkArrowDownFill } from "react-icons/bs";

const Home = () => {
  const online = useOnlineStatus();
  const isOnline = online ? "Online" : "Offline";
  const [hoveredButton, setHoveredButton] = React.useState(null);

  const floatingShapes = [
    { id: 1, top: "15%", left: "10%", color: "bg-purple-900/10", size: "w-64 h-64", animation: "animate-float" },
    { id: 2, top: "60%", left: "75%", color: "bg-indigo-900/10", size: "w-80 h-80", animation: "animate-float-delay" },
    { id: 3, top: "30%", left: "80%", color: "bg-cyan-900/10", size: "w-48 h-48", animation: "animate-float-reverse" },
    { id: 4, top: "70%", left: "15%", color: "bg-pink-900/10", size: "w-56 h-56", animation: "animate-float-slow" },
  ];

  const techStack = [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Express", icon: <SiExpress className="text-gray-100" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-300" /> },
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#151515] to-[#1e1e1e] text-white px-4 sm:px-8 py-16 sm:py-24 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingShapes.map((shape) => (
          <div
            key={shape.id}
            className={`absolute rounded-full ${shape.color} ${shape.size} ${shape.animation} blur-3xl`}
            style={{ top: shape.top, left: shape.left }}
          />
        ))}
      </div>

      {/* Image Section with enhanced effects */}
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
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        {/* Floating tech badges */}
        <div className="absolute -bottom-4 ml-14 flex flex-wrap  gap-2">
          {techStack.slice(0, 3).map((tech, index) => (
            <motion.span
              key={tech.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: -20, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs border border-white/10 flex items-center gap-1"
            >
              {tech.icon} {tech.name}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Text Content Section with enhanced UI */}
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl bg-white/5 border border-white/10 backdrop-blur-lg rounded-[2rem] shadow-2xl p-6 sm:p-8 hover:shadow-purple-500/20 transition-all duration-500 z-10"
      >
        {/* Interactive background gradient */}
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        {/* Animated title with character effects */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent leading-tight"
        >
          {"Hey, I'm".split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              {char}
            </motion.span>
          ))}{' '}
          <motion.span 
            className="text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
          >
            Sunil Kunwar
          </motion.span>
        </motion.h1>
        
        {/* Animated description text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-lg sm:text-xl text-gray-300/90 leading-relaxed max-w-[90%]"
        >
          A developer, building <span className="text-purple-300 font-medium">MERN magic</span>, and
          <span className="text-pink-300 font-medium"> soulful UIs</span> — one line of code at a time.
        </motion.p>
        
        {/* Tech stack floating bubbles */}
        <motion.div 
          className="mt-6 flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ y: -3, scale: 1.05 }}
              className="px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-sm flex items-center gap-1.5"
            >
              <span>{tech.icon}</span>
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Enhanced Online Status Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className={`mt-6 inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium ${
            online 
              ? "bg-green-900/30 text-green-400 border border-green-500/30" 
              : "bg-rose-900/30 text-rose-400 border border-rose-500/30"
          } relative overflow-hidden group`}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className={`relative flex h-2.5 w-2.5 mr-2 ${
            online ? "text-green-400" : "text-rose-400"
          }`}>
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
              online ? "bg-green-400" : "bg-rose-400"
            } opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
              online ? "bg-green-400" : "bg-rose-400"
            }`}></span>
          </span>
          <span>You are currently {isOnline}</span>
          
        </motion.div>
        
        {/* Interactive Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
          className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          <Link
  to="/contact"
  className="relative px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-medium shadow-lg hover:shadow-purple-500/40 flex items-center gap-2 overflow-hidden group active:scale-[0.98]" // Added active:scale
  onMouseEnter={() => setHoveredButton("contact")}
  onMouseLeave={() => setHoveredButton(null)}
>
  <AnimatePresence>
    {hoveredButton === "contact" && (
      <motion.span
        initial={{ scale: 0, opacity: 0 }} // Added opacity
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }} // Faster transition for immediate feedback
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/30 via-transparent to-transparent" // Slightly stronger gradient
      />
    )}
  </AnimatePresence>
  <span className="relative z-10">Contact me</span>
            <motion.span 
              className="relative z-10 text-lg"
              animate={{ 
                x: hoveredButton === "contact" ? [0, 2, -2, 0] : 0 
              }}
              transition={{ 
                duration: 0.6,
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: hoveredButton === "contact" ? Infinity : 0
              }}
            >
              <BsRocketFill />
            </motion.span>
          </Link>
          
          <a
            href="/resume.pdf"  
            download
            className="relative px-6 py-3.5 rounded-xl border border-purple-400/50 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 font-medium flex items-center gap-2 overflow-hidden group"
            onMouseEnter={() => setHoveredButton("resume")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <AnimatePresence>
              {hoveredButton === "resume" && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"
                />
              )}
            </AnimatePresence>
            <span className="relative z-10">Download CV</span>
            <motion.span 
              className="relative z-10 text-lg"
              animate={{ 
                rotate: hoveredButton === "resume" ? [0, 10, -10, 0] : 0 
              }}
              transition={{ 
                duration: 0.6,
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: hoveredButton === "resume" ? Infinity : 0
              }}
            >
              <BsFileEarmarkArrowDownFill />
            </motion.span>
          </a>
        </motion.div>

        {/* Social proof/scrolling testimonials could be added here */}
      </motion.div>

      {/* Decorative corner elements */}
      <div className="absolute bottom-8 left-8 opacity-20">
        <div className="w-16 h-16 border-t-2 border-l-2 border-purple-400 rounded-tl-xl"></div>
      </div>
      <div className="absolute top-8 right-8 opacity-20">
        <div className="w-16 h-16 border-b-2 border-r-2 border-cyan-400 rounded-br-xl"></div>
      </div>
    </section>
  );
};

export default Home;