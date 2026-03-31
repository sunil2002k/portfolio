import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../CustomHooks/useOnlineStatus";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const Home = () => {
  const online = useOnlineStatus();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const techStack = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
  ];

  const stats = [
    { label: "Projects Shipped", value: "12+" },
    { label: "Years Building", value: "3+" },
    { label: "Stack", value: "MERN" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        :root {
          --ink: #0f0f0f;
          --paper: #f4f1ea;
          --acid: #b8ff57;
          --indigo: #4a3aff;
          --muted: #888;
          --border: rgba(15,15,15,0.15);
        }

        .home-root {
          min-height: 100vh;
          background: var(--paper);
          color: var(--ink);
          font-family: 'DM Mono', monospace;
          padding-top: 64px;
          position: relative;
          overflow: hidden;
        }

        /* Subtle grid texture */
        .home-root::before {
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

        .home-inner {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* ── Top ticker bar ── */
        .ticker-bar {
          border-bottom: 1.5px solid var(--ink);
          padding: 10px 0;
          display: flex;
          align-items: center;
          gap: 2rem;
          overflow: hidden;
        }

        .ticker-label {
          font-size: 0.65rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--muted);
          white-space: nowrap;
          border-right: 1px solid var(--border);
          padding-right: 2rem;
        }

        .ticker-items {
          display: flex;
          gap: 3rem;
          animation: ticker 20s linear infinite;
          white-space: nowrap;
        }

        .ticker-item {
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .ticker-item .dot {
          width: 5px; height: 5px;
          background: var(--acid);
          border-radius: 50%;
          border: 1px solid var(--ink);
        }

        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* ── Hero grid ── */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1.5px solid var(--ink);
          min-height: calc(100vh - 120px);
        }

        /* Left panel */
        .hero-left {
          border-right: 1.5px solid var(--ink);
          padding: 4rem 3rem 4rem 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hero-eyebrow {
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .hero-eyebrow::before {
          content: '';
          width: 24px; height: 1px;
          background: var(--muted);
        }

        .hero-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(3.5rem, 7vw, 6.5rem);
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: var(--ink);
          margin-bottom: 2.5rem;
        }

        .hero-name .highlight {
          display: block;
          color: transparent;
          -webkit-text-stroke: 2px var(--ink);
          position: relative;
        }

        .hero-name .highlight::after {
          content: 'Kunwar';
          position: absolute;
          left: 0;
          color: var(--acid);
          -webkit-text-stroke: 0;
          clip-path: inset(0 100% 0 0);
          animation: reveal-acid 1.2s 0.8s cubic-bezier(0.77,0,0.18,1) forwards;
        }

        @keyframes reveal-acid {
          to { clip-path: inset(0 0% 0 0); }
        }

        .hero-bio {
          font-size: 0.9rem;
          line-height: 1.8;
          color: #444;
          max-width: 420px;
          margin-bottom: 3rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          text-decoration: none;
          padding: 14px 28px;
          background: var(--ink);
          color: var(--paper);
          border: 1.5px solid var(--ink);
          transition: background 0.2s, color 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary:hover {
          background: var(--acid);
          color: var(--ink);
          border-color: var(--ink);
        }

        .btn-secondary {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          text-decoration: none;
          padding: 14px 28px;
          background: transparent;
          color: var(--ink);
          border: 1.5px solid var(--ink);
          transition: background 0.2s, color 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-secondary:hover {
          background: var(--ink);
          color: var(--paper);
        }

        .hero-bottom-left {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 14px;
          border: 1.5px solid var(--ink);
        }

        .status-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #0f0;
          border: 1px solid var(--ink);
          animation: pulse-dot 2s infinite;
        }

        .status-dot.offline { background: #f00; }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* Right panel */
        .hero-right {
          display: flex;
          flex-direction: column;
        }

        .hero-image-wrap {
          flex: 1;
          position: relative;
          overflow: hidden;
          border-bottom: 1.5px solid var(--ink);
        }

        .hero-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          filter: grayscale(20%) contrast(1.05);
          transition: filter 0.5s;
        }

        .hero-image-wrap:hover img {
          filter: grayscale(0%) contrast(1.1);
        }

        .hero-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 60%, rgba(244,241,234,0.3) 100%);
        }

        /* Index number */
        .hero-index {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-family: 'Syne', sans-serif;
          font-size: 5rem;
          font-weight: 800;
          color: rgba(255,255,255,0.15);
          line-height: 1;
          letter-spacing: -0.05em;
          pointer-events: none;
          text-shadow: 0 2px 20px rgba(0,0,0,0.2);
        }

        /* Stats row */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .stat-cell {
          padding: 1.5rem;
          border-right: 1.5px solid var(--ink);
        }

        .stat-cell:last-child { border-right: none; }

        .stat-value {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--ink);
          line-height: 1;
          margin-bottom: 0.3rem;
        }

        .stat-label {
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--muted);
        }

        /* ── Tech strip ── */
        .tech-strip {
          border-bottom: 1.5px solid var(--ink);
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .tech-strip-label {
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--muted);
          white-space: nowrap;
          padding: 1rem 1.5rem;
          border-right: 1.5px solid var(--ink);
          height: 100%;
          display: flex;
          align-items: center;
        }

        .tech-list {
          display: flex;
          gap: 0;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .tech-list::-webkit-scrollbar { display: none; }

        .tech-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 1rem 1.5rem;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          border-right: 1px solid var(--border);
          white-space: nowrap;
          transition: background 0.15s;
          color: var(--ink);
        }

        .tech-chip:hover {
          background: var(--acid);
        }

        .tech-chip svg { font-size: 1rem; }

        /* ── Bottom socials bar ── */
        .socials-bar {
          display: flex;
          align-items: center;
          padding: 1.2rem 0;
          gap: 2rem;
        }

        .social-link {
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--muted);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: color 0.15s;
        }

        .social-link:hover { color: var(--ink); }

        .social-link .ext { opacity: 0.4; }

        /* Responsive */
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .hero-left {
            border-right: none;
            border-bottom: 1.5px solid var(--ink);
            padding: 3rem 0 3rem 0;
          }
          .hero-right {
            min-height: 60vw;
          }
          .hero-image-wrap { min-height: 350px; }
        }
      `}</style>

      <main className="home-root">
        <div className="home-inner">

          {/* Ticker bar */}
          <div className="ticker-bar">
            <span className="ticker-label">Live Status</span>
            <div className="ticker-items">
              {[
                'Full-Stack Developer',
                'MERN Stack',
                'Available for Work',
                'Based in Nepal',
                'Open Source Contributor',
                'Full-Stack Developer',
                'MERN Stack',
                'Available for Work',
                'Based in Nepal',
                'Open Source Contributor',
              ].map((item, i) => (
                <span key={i} className="ticker-item">
                  <span className="dot" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Hero grid */}
          <div className="hero-grid">

            {/* LEFT */}
            <motion.div
              className="hero-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <p className="hero-eyebrow">Portfolio · Full-Stack Dev</p>

                <h1 className="hero-name">
                  Hey, I'm
                  <span>Sunil</span>
                  <span className="highlight">Kunwar</span>
                </h1>

                <p className="hero-bio">
                  Full-stack developer building precise, thoughtful software.
                  I work across the stack — from database to interface — with a
                  focus on clean systems and minimal complexity.
                </p>

                <div className="hero-actions">
                  <Link to="/contact" className="btn-primary">
                    Contact me <span>↗</span>
                  </Link>
                  <a href="/resume.pdf" download className="btn-secondary">
                    Download CV <span>↓</span>
                  </a>
                </div>
              </div>

              <div className="hero-bottom-left">
                <div className="status-pill">
                  <span className={`status-dot${online ? '' : ' offline'}`} />
                  You are {online ? 'Online' : 'Offline'}
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              className="hero-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <div className="hero-image-wrap">
                <img src="hero1.png" alt="Sunil Kunwar" />
                <div className="hero-image-overlay" />
                <span className="hero-index">01</span>
              </div>

              <div className="stats-row">
                {stats.map((s) => (
                  <div key={s.label} className="stat-cell">
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tech strip */}
          <div className="tech-strip">
            <span className="tech-strip-label">Stack</span>
            <div className="tech-list">
              {techStack.map((t) => (
                <div key={t.name} className="tech-chip">
                  {t.icon} {t.name}
                </div>
              ))}
            </div>
          </div>

          {/* Socials bar */}
          <div className="socials-bar">
            <a href="mailto:kunwarsunil093@gmail.com" className="social-link">
              Email <span className="ext">↗</span>
            </a>
            <a href="https://www.linkedin.com/in/sunil-kunwar-710368303" target="_blank" rel="noreferrer" className="social-link">
              LinkedIn <span className="ext">↗</span>
            </a>
            <a href="https://github.com/sunil2002k" target="_blank" rel="noreferrer" className="social-link">
              GitHub <span className="ext">↗</span>
            </a>
          </div>

        </div>
      </main>
    </>
  );
};

export default Home;