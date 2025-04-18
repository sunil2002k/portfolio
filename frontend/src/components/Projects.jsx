import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiSocketdotio,
  SiRedux,
  SiLeaflet,
} from "react-icons/si";

const techIcons = {
  MongoDB: <SiMongodb className="text-green-500" />,
  Express: <SiExpress className="text-gray-100" />,
  React: <SiReact className="text-blue-400" />,
  "Node.js": <SiNodedotjs className="text-green-600" />,
  "Socket.io": <SiSocketdotio className="text-white" />,
  Redux: <SiRedux className="text-purple-500" />,
  Leaflet: <SiLeaflet className="text-green-400" />,
};

const projects = [
  {
    title: "Bazar",
    description:
      "A full-stack marketplace using MERN, allowing users to post, like, and chat about products.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    link: "https://github.com/sunil2002k/bazar",
    accentColor: "from-purple-600 to-indigo-600",
  },
  {
    title: "Bazar Admin Dashboard",
    description:
      "An admin interface for Bazar, with user and product management, analytics, and moderation tools.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    link: "https://github.com/sunil2002k/Bazar_admin",
    accentColor: "from-blue-600 to-cyan-600",
  },
  {
    title: "Book_ride",
    description:
      "A MERN-based Uber-like app with real-time booking and live location tracking using Leaflet maps.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Leaflet"],
    link: "https://github.com/sunil2002k/Book_ride",
    accentColor: "from-green-600 to-emerald-600",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-24 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-blue-900/10 blur-3xl animate-float-delay"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 p-1.5 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            My Creations
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Projects where I've poured my passion for clean code and innovative
            solutions.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.accentColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <FaGithub size={20} className="text-gray-400 hover:text-white transition-colors" />
                  </div>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">
                      TECH STACK
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-1.5 text-xs bg-white/10 text-gray-200 px-3 py-1.5 rounded-full border border-white/10"
                        >
                          {techIcons[tech] || null}
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <div className="inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
                    Explore on GitHub
                    <FaExternalLinkAlt className="ml-2" size={14} />
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;