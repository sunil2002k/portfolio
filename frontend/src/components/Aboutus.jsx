import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaBrain, FaServer, FaPalette } from "react-icons/fa";

const Aboutus = () => {
  const [activeTab, setActiveTab] = React.useState('philosophy');


  const content = {
    philosophy: {
      title: "Development Philosophy",
      items: [
        {
          icon: <FaCode className="text-2xl text-purple-400" />,
          title: "Code Quality First",
          description: "Building maintainable systems with clean architecture and thorough documentation"
        },
        {
          icon: <FaLightbulb className="text-2xl text-yellow-400" />,
          title: "User-Centric Solutions",
          description: "Creating intuitive experiences that solve real problems through iterative design"
        },
        {
          icon: <FaBrain className="text-2xl text-blue-400" />,
          title: "Continuous Evolution",
          description: "Daily learning to stay ahead in cloud-native development and system design"
        }
      ]
    },
    focus: {
      title: "Current Focus Areas",
      items: [
        {
          icon: <FaServer className="text-2xl text-cyan-400" />,
          title: "Edge Network Architectures",
          description: "Implementing distributed systems with Cloudflare Workers and Deno"
        },
        {
          icon: <FaPalette className="text-2xl text-purple-400" />,
          title: "Generative Interfaces",
          description: "Exploring AI-driven UI patterns and real-time visualization"
        }
      ]
    }
  };

  const technicalPillars = [
    { name: "System Architecture", level: 90, color: "text-purple-400", bgColor: "bg-purple-400" },
    { name: "Cloud Infrastructure", level: 80, color: "text-cyan-400", bgColor: "bg-cyan-400" },
    { name: "DevOps Automation", level: 75, color: "text-green-400", bgColor: "bg-green-400" },
    { name: "API Design", level: 85, color: "text-yellow-400", bgColor: "bg-yellow-400" },
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-[#0d0d0d] to-[#1a1a2e] text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl py-2 font-bold mb-16  text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Engineering Approach
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Unified Content Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex gap-4 mb-8">
              <button 
                onClick={() => setActiveTab('philosophy')}
                className={`px-6 py-2 rounded-full ${activeTab === 'philosophy' ? 
                  'bg-purple-500/20 border border-purple-400/30' : 
                  'bg-white/5 hover:bg-white/10'} transition-all`}
              >
                Development Philosophy
              </button>
              <button 
                onClick={() => setActiveTab('focus')}
                className={`px-6 py-2 rounded-full ${activeTab === 'focus' ? 
                  'bg-cyan-500/20 border border-cyan-400/30' : 
                  'bg-white/5 hover:bg-white/10'} transition-all`}
              >
                Current Focus
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {content[activeTab].items.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technical Pillars Section */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white/5 p-8 rounded-2xl border border-white/10 h-fit "
      >
        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Technical Pillars
        </h3>
        
        <div className="space-y-6">
          {technicalPillars.map((pillar, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className={`font-medium ${pillar.color}`}>
                  {pillar.name}
                </span>
                <span className="text-gray-400">{pillar.level}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pillar.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className={`h-full rounded-full ${pillar.bgColor}`}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;