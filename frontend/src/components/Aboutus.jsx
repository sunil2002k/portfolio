import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaBrain, FaServer, FaPython } from "react-icons/fa";

const Aboutus = () => {
  const [activeTab, setActiveTab] = React.useState('philosophy');

  const content = {
    philosophy: {
      label: "Dev Philosophy",
      items: [
        {
          num: "01",
          icon: <FaCode />,
          title: "Code Quality First",
          description: "Building maintainable systems with clean architecture and thorough documentation."
        },
        {
          num: "02",
          icon: <FaLightbulb />,
          title: "User-Centric Solutions",
          description: "Creating intuitive experiences that solve real problems through iterative design."
        },
        {
          num: "03",
          icon: <FaBrain />,
          title: "Continuous Evolution",
          description: "Daily learning to stay ahead in cloud-native development and system design."
        }
      ]
    },
    focus: {
      label: "Current Focus",
      items: [
        {
          num: "01",
          icon: <FaServer />,
          title: "Data Structures & Algorithms",
          description: "Sharpening problem-solving with competitive programming and system design patterns."
        },
        {
          num: "02",
          icon: <FaPython />,
          title: "Python & ML",
          description: "Exploring AI-driven UI patterns, real-time visualization, and model integration."
        }
      ]
    }
  };

  const technicalPillars = [
    { name: "Frontend", level: 90 },
    { name: "Backend", level: 80 },
    { name: "DevOps", level: 75 },
    { name: "MongoDB", level: 85 },
  ];

  const facts = [
    { label: "Based in", value: "Nepal" },
    { label: "Focus", value: "MERN Stack" },
    { label: "Status", value: "Available" },
    { label: "Experience", value: "3+ Years" },
  ];

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

        .about-root {
          min-height: 100vh;
          background: var(--paper);
          color: var(--ink);
          font-family: 'DM Mono', monospace;
          padding-top: 64px;
          position: relative;
        }

        .about-root::before {
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

        .about-inner {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Page header */
        .about-header {
          border-bottom: 1.5px solid var(--ink);
          padding: 3rem 0 2rem;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: flex-end;
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

        .facts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
          border: 1.5px solid var(--ink);
          height: fit-content;
        }

        .fact-cell {
          padding: 1rem 1.25rem;
          border-bottom: 1px solid var(--border);
          border-right: 1px solid var(--border);
        }

        .fact-cell:nth-child(even) { border-right: none; }
        .fact-cell:nth-last-child(-n+2) { border-bottom: none; }

        .fact-label {
          font-size: 0.55rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--muted);
          margin-bottom: 0.3rem;
        }

        .fact-value {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: -0.01em;
        }

        /* Main layout */
        .about-layout {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          border-bottom: 1.5px solid var(--ink);
          min-height: 60vh;
        }

        /* Left: content */
        .about-content {
          border-right: 1.5px solid var(--ink);
          padding: 3rem 2.5rem 3rem 0;
        }

        /* Tabs */
        .tabs {
          display: flex;
          gap: 0;
          margin-bottom: 3rem;
          border: 1.5px solid var(--ink);
          width: fit-content;
        }

        .tab-btn {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 10px 20px;
          background: transparent;
          color: var(--muted);
          border: none;
          border-right: 1.5px solid var(--ink);
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
        }

        .tab-btn:last-child { border-right: none; }

        .tab-btn.active {
          background: var(--ink);
          color: var(--paper);
        }

        .tab-btn:not(.active):hover {
          background: var(--acid);
          color: var(--ink);
        }

        /* Cards */
        .cards-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .about-card {
          display: grid;
          grid-template-columns: 3rem 1fr;
          gap: 1.5rem;
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--border);
          align-items: start;
          position: relative;
          transition: background 0.15s;
        }

        .about-card:last-child { border-bottom: none; }

        .about-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 0;
          background: var(--acid);
          transition: width 0.2s ease;
        }

        .about-card:hover::before { width: 3px; }

        .card-num {
          font-family: 'Syne', sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--muted);
          padding-top: 2px;
        }

        .card-icon {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: var(--ink);
          opacity: 0.6;
        }

        .card-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: -0.02em;
          margin-bottom: 0.4rem;
        }

        .card-desc {
          font-size: 0.75rem;
          line-height: 1.7;
          color: #555;
        }

        /* Right: skills */
        .about-skills {
          padding: 3rem 0 3rem 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .skills-heading {
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--muted);
          margin-bottom: 2rem;
        }

        .skill-row {
          margin-bottom: 0;
        }

        .skill-meta {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: -0.01em;
        }

        .skill-pct {
          font-size: 0.65rem;
          color: var(--muted);
        }

        .skill-track {
          height: 3px;
          background: rgba(15,15,15,0.1);
          position: relative;
          overflow: hidden;
        }

        .skill-fill {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          background: var(--ink);
          transition: width 1.2s cubic-bezier(0.16,1,0.3,1);
        }

        .skill-fill.animate { }

        /* Bio section */
        .bio-strip {
          border-bottom: 1.5px solid var(--ink);
          padding: 2.5rem 0;
          display: grid;
          grid-template-columns: 200px 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .bio-section-label {
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--muted);
          padding-top: 4px;
        }

        .bio-text {
          font-size: 0.85rem;
          line-height: 1.9;
          color: #444;
        }

        .big-quote {
          font-family: 'Syne', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.3;
          color: var(--ink);
          border-left: 3px solid var(--acid);
          padding-left: 1.25rem;
        }

        @media (max-width: 900px) {
          .about-header { grid-template-columns: 1fr; }
          .about-layout { grid-template-columns: 1fr; }
          .about-content { border-right: none; border-bottom: 1.5px solid var(--ink); padding: 2.5rem 0; }
          .about-skills { padding: 2.5rem 0; }
          .bio-strip { grid-template-columns: 1fr; gap: 1.5rem; }
        }
      `}</style>

      <section className="about-root">
        <div className="about-inner">

          {/* Header */}
          <motion.div className="about-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="page-tag">About · Sunil Kunwar</p>
              <h1 className="page-title">
                Engineering<br />
                <em>Approach</em>
              </h1>
            </div>
            <div className="facts-grid">
              {facts.map((f) => (
                <div key={f.label} className="fact-cell">
                  <div className="fact-label">{f.label}</div>
                  <div className="fact-value">{f.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Main layout */}
          <div className="about-layout">

            {/* Content */}
            <motion.div className="about-content"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="tabs">
                {Object.entries(content).map(([key, val]) => (
                  <button
                    key={key}
                    className={`tab-btn${activeTab === key ? ' active' : ''}`}
                    onClick={() => setActiveTab(key)}
                  >
                    {val.label}
                  </button>
                ))}
              </div>

              <div className="cards-list">
                {content[activeTab].items.map((item, i) => (
                  <motion.div
                    key={i}
                    className="about-card"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="card-num">{item.num}</span>
                    <div>
                      <div className="card-icon">{item.icon}</div>
                      <div className="card-title">{item.title}</div>
                      <div className="card-desc">{item.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div className="about-skills"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>
                <p className="skills-heading">Technical Pillars</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                  {technicalPillars.map((p, i) => (
                    <div key={p.name} className="skill-row">
                      <div className="skill-meta">
                        <span className="skill-name">{p.name}</span>
                        <span className="skill-pct">{p.level}%</span>
                      </div>
                      <div className="skill-track">
                        <motion.div
                          className="skill-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${p.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: 'var(--acid)', border: '1.5px solid var(--ink)', padding: '1.5rem', marginTop: '1rem' }}>
                <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.75rem', color: 'rgba(15,15,15,0.6)' }}>Philosophy in One Line</div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em', lineHeight: 1.4 }}>
                  "Minimal complexity.<br />Maximum clarity."
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bio strip */}
          <div className="bio-strip">
            <span className="bio-section-label">About Me</span>
            <p className="bio-text">
              I'm a full-stack developer from Nepal who builds across the entire stack — from schema design to deployment.
              I care deeply about code that reads cleanly and systems that scale without drama.
              When I'm not shipping features, I'm studying DSA or exploring Python and machine learning.
            </p>
            <div className="big-quote">
              "Build things that are useful, not just impressive."
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Aboutus;