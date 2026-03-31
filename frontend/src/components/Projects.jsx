import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiReact, SiNodedotjs,
  SiSocketdotio, SiRedux, SiLeaflet,
} from "react-icons/si";

const techIcons = {
  MongoDB: <SiMongodb />,
  Express: <SiExpress />,
  React: <SiReact />,
  "Node.js": <SiNodedotjs />,
  "Socket.io": <SiSocketdotio />,
  Redux: <SiRedux />,
  Leaflet: <SiLeaflet />,
};

const projects = [
  {
    index: "01",
    title: "Bazar",
    year: "2024",
    category: "Marketplace",
    description:
      "A full-stack marketplace using MERN, allowing users to post, like, and chat about products in real-time.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    link: "https://github.com/sunil2002k/bazar",
  },
  {
    index: "02",
    title: "Bazar Admin",
    year: "2024",
    category: "Dashboard",
    description:
      "An admin interface for Bazar with user and product management, analytics, and moderation tools.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    link: "https://github.com/sunil2002k/Bazar_admin",
  },
  {
    index: "03",
    title: "Book_ride",
    year: "2024",
    category: "Maps / Booking",
    description:
      "A MERN-based Uber-like app with real-time booking and live location tracking using Leaflet maps.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Leaflet"],
    link: "https://github.com/sunil2002k/Book_ride",
  },
  {
    index: "04",
    title: "InnovateU",
    year: "2024",
    category: "AI / Crowdfunding",
    description:
      "A full-stack crowdfunding platform where users submit projects for funding and mentorship. Features AI-based summarization via Hugging Face BART and project success prediction.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Flask", "Machine Learning"],
    link: "https://github.com/sunil2002k/Sakha",
    featured: true,
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        :root {
          --ink: #0f0f0f;
          --paper: #f4f1ea;
          --acid: #b8ff57;
          --muted: #888;
          --border: rgba(15,15,15,0.12);
        }

        .projects-root {
          min-height: 100vh;
          background: var(--paper);
          color: var(--ink);
          font-family: 'DM Mono', monospace;
          padding-top: 64px;
          position: relative;
        }

        .projects-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(15,15,15,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,15,15,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          z-index: 0;
        }

        .projects-inner {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Header */
        .projects-header {
          border-bottom: 1.5px solid var(--ink);
          padding: 3rem 0 2rem;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
        }

        .page-tag {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--muted);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .page-tag::before { content: ''; width: 24px; height: 1px; background: var(--muted); }

        .page-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3rem, 8vw, 7rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 0.9;
        }

        .page-title em {
          font-style: normal;
          color: transparent;
          -webkit-text-stroke: 2px var(--ink);
        }

        .header-count {
          font-family: 'Syne', sans-serif;
          font-size: 5rem;
          font-weight: 800;
          letter-spacing: -0.05em;
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(15,15,15,0.2);
          line-height: 1;
        }

        /* Column headers */
        .table-head {
          display: grid;
          grid-template-columns: 3rem 1fr 120px 160px 120px;
          gap: 1.5rem;
          padding: 0.75rem 0;
          border-bottom: 1.5px solid var(--ink);
          align-items: center;
        }

        .col-label {
          font-size: 0.55rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--muted);
        }

        /* Project rows */
        .project-row {
          display: grid;
          grid-template-columns: 3rem 1fr 120px 160px 120px;
          gap: 1.5rem;
          padding: 1.75rem 0;
          border-bottom: 1.5px solid var(--border);
          align-items: start;
          cursor: pointer;
          position: relative;
          transition: background 0.15s;
          text-decoration: none;
          color: var(--ink);
        }

        .project-row::before {
          content: '';
          position: absolute;
          left: -2rem; top: 0; bottom: 0;
          width: 3px;
          background: var(--acid);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.25s ease;
        }

        .project-row:hover::before { transform: scaleY(1); }

        .project-row.hovered {
          background: rgba(184,255,87,0.05);
        }

        .project-row.featured-row {
          background: rgba(15,15,15,0.02);
        }

        .row-num {
          font-size: 0.7rem;
          color: var(--muted);
          padding-top: 3px;
        }

        .row-title-wrap { }

        .row-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .featured-badge {
          font-family: 'DM Mono', monospace;
          font-size: 0.55rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          padding: 3px 8px;
          background: var(--acid);
          border: 1px solid var(--ink);
          color: var(--ink);
          border-radius: 0;
        }

        .row-desc {
          font-size: 0.72rem;
          line-height: 1.7;
          color: #555;
          max-width: 480px;
        }

        .row-year {
          font-size: 0.75rem;
          color: var(--muted);
          padding-top: 3px;
        }

        .row-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding-top: 0;
        }

        .tech-pill {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.6rem;
          letter-spacing: 0.05em;
          padding: 4px 8px;
          border: 1px solid rgba(15,15,15,0.2);
          color: var(--ink);
          background: transparent;
          white-space: nowrap;
          transition: background 0.15s, border-color 0.15s;
        }

        .project-row.hovered .tech-pill {
          border-color: var(--ink);
        }

        .tech-pill svg { font-size: 0.75rem; }

        .row-github {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--muted);
          padding-top: 3px;
          transition: color 0.15s;
        }

        .project-row:hover .row-github { color: var(--ink); }

        .row-github svg { font-size: 1rem; }

        /* Bottom CTA */
        .projects-footer {
          padding: 3rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-note {
          font-size: 0.7rem;
          color: var(--muted);
        }

        .github-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 12px 24px;
          background: var(--ink);
          color: var(--paper);
          border: 1.5px solid var(--ink);
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }

        .github-cta:hover {
          background: var(--acid);
          color: var(--ink);
        }

        @media (max-width: 900px) {
          .table-head { display: none; }
          .project-row {
            grid-template-columns: 3rem 1fr;
            grid-template-rows: auto auto auto;
          }
          .row-year, .row-github { display: none; }
          .row-tech { grid-column: 2; }
          .projects-header { flex-direction: column; align-items: flex-start; }
          .header-count { font-size: 3rem; }
        }
      `}</style>

      <section className="projects-root">
        <div className="projects-inner">

          {/* Header */}
          <motion.div
            className="projects-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="page-tag">Projects · Selected Work</p>
              <h1 className="page-title">
                My<br /><em>Creations</em>
              </h1>
            </div>
            <span className="header-count">0{projects.length}</span>
          </motion.div>

          {/* Table header */}
          <div className="table-head">
            <span className="col-label">#</span>
            <span className="col-label">Project</span>
            <span className="col-label">Year</span>
            <span className="col-label">Stack</span>
            <span className="col-label">Link</span>
          </div>

          {/* Project rows */}
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-row${hovered === i ? ' hovered' : ''}${project.featured ? ' featured-row' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="row-num">{project.index}</span>

              <div className="row-title-wrap">
                <div className="row-title">
                  {project.title}
                  {project.featured && <span className="featured-badge">Featured</span>}
                </div>
                <p className="row-desc">{project.description}</p>
              </div>

              <span className="row-year">{project.year}</span>

              <div className="row-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-pill">
                    {techIcons[t] || null}
                    {t}
                  </span>
                ))}
              </div>

              <div className="row-github">
                <FaGithub />
                GitHub ↗
              </div>
            </motion.a>
          ))}

          {/* Footer */}
          <div className="projects-footer">
            <span className="footer-note">More projects on GitHub →</span>
            <a
              href="https://github.com/sunil2002k"
              target="_blank"
              rel="noreferrer"
              className="github-cta"
            >
              <FaGithub />
              View All on GitHub
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Projects;