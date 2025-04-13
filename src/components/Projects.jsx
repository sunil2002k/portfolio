// components/Projects.jsx

import React from 'react';
import { motion } from 'framer-motion';



const projects = [
  {
    title: 'Bazar ',
    description: 'A full-stack marketplace using MERN, allowing users to post, like, and chat about products.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js','Socket.io'],
    link: 'https://github.com/sunil2002k/bazar',
  },
  {
    title: 'Bazar Admin Dashboard',
    description: 'An admin interface for Bazar, with user and product management, analytics, and moderation tools.',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
    link: 'https://github.com/sunil2002k/Bazar_admin',
  },
  {
    title: 'Book_ride - Ride Booking App',
    description: 'A MERN-based Uber-like app with real-time booking and live location tracking using Leaflet maps.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Leaflet'],
    link: 'https://github.com/sunil2002k/Book_ride',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-24 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          🚀 Projects I've Crafted
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-2xl font-semibold text-purple-300">{project.title}</h3>
              <p className="mt-2 text-gray-200 text-sm">{project.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-white/20 text-gray-100 px-2 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-purple-400 hover:underline"
              >
                View on GitHub →  
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
