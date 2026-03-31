import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Kathmandu",
          hour12: false,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/aboutus" },
    { name: "Contact", path: "/contact" },
  ];

  const socials = [
    { label: "GitHub", href: "https://github.com/sunil2002k", icon: <FaGithub /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sunil-kunwar-710368303", icon: <SiLinkedin /> },
    { label: "Email", href: "mailto:kunwarsunil093@gmail.com", icon: null },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        :root {
          --ink: #0f0f0f;
          --paper: #f4f1ea;
          --acid: #b8ff57;
          --muted: #888;
          --border: rgba(15,15,15,0.12);
        }

        .footer-root {
          background: var(--ink);
          color: var(--paper);
          font-family: 'DM Mono', monospace;
          position: relative;
          overflow: hidden;
        }

        /* Subtle grid on dark */
        .footer-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(244,241,234,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244,241,234,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .footer-inner {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* ── Top CTA band ── */
        .footer-cta-band {
          border-bottom: 1px solid rgba(244,241,234,0.1);
          padding: 4rem 0;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 2rem;
        }

        .cta-label {
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: rgba(244,241,234,0.4);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .cta-label::before {
          content: '';
          width: 24px; height: 1px;
          background: rgba(244,241,234,0.3);
        }

        .cta-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 0.95;
          color: var(--paper);
        }

        .cta-heading em {
          font-style: normal;
          color: transparent;
          -webkit-text-stroke: 2px var(--paper);
        }

        .cta-heading .acid-word {
          color: var(--acid);
          -webkit-text-stroke: 0;
        }

        .cta-btn {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          text-decoration: none;
          padding: 16px 32px;
          background: var(--acid);
          color: var(--ink);
          border: 1.5px solid var(--acid);
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }

        .cta-btn:hover {
          background: transparent;
          color: var(--acid);
        }

        /* ── Middle grid ── */
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 0;
          border-bottom: 1px solid rgba(244,241,234,0.1);
          padding: 3rem 0;
        }

        .footer-col {
          padding-right: 3rem;
        }

        .footer-col + .footer-col {
          padding-right: 3rem;
          border-left: 1px solid rgba(244,241,234,0.08);
          padding-left: 3rem;
        }

        .col-heading {
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: rgba(244,241,234,0.35);
          margin-bottom: 1.5rem;
        }

        /* Brand col */
        .footer-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.4rem;
          letter-spacing: -0.03em;
          color: var(--paper);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 1rem;
        }

        .footer-logo-dot {
          width: 8px; height: 8px;
          background: var(--acid);
          border-radius: 50%;
          border: 1.5px solid var(--paper);
        }

        .footer-tagline {
          font-size: 0.75rem;
          line-height: 1.8;
          color: rgba(244,241,234,0.45);
          max-width: 280px;
          margin-bottom: 1.5rem;
        }

        .footer-availability {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--acid);
          padding: 6px 12px;
          border: 1px solid rgba(184,255,87,0.3);
        }

        .avail-blink {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--acid);
          animation: blink 2s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }

        /* Nav col */
        .footer-nav {
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .footer-nav li a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.7rem 0;
          border-bottom: 1px solid rgba(244,241,234,0.06);
          text-decoration: none;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: -0.01em;
          color: rgba(244,241,234,0.6);
          transition: color 0.15s;
        }

        .footer-nav li:last-child a { border-bottom: none; }

        .footer-nav li a:hover { color: var(--paper); }

        .nav-arrow {
          font-size: 0.75rem;
          opacity: 0;
          transition: opacity 0.15s, transform 0.15s;
        }

        .footer-nav li a:hover .nav-arrow {
          opacity: 1;
          transform: translate(2px, -2px);
        }

        /* Socials col */
        .footer-socials {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .social-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.7rem 0;
          border-bottom: 1px solid rgba(244,241,234,0.06);
          text-decoration: none;
          color: rgba(244,241,234,0.6);
          font-size: 0.75rem;
          transition: color 0.15s;
        }

        .social-row:last-child { border-bottom: none; }

        .social-row:hover { color: var(--acid); }

        .social-icon { font-size: 0.9rem; }
        .social-ext { margin-left: auto; font-size: 0.65rem; opacity: 0.4; }

        /* ── Bottom bar ── */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 0;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .bottom-copy {
          font-size: 0.6rem;
          color: rgba(244,241,234,0.3);
          letter-spacing: 0.08em;
        }

        .bottom-copy span {
          color: var(--acid);
        }

        .bottom-time {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.6rem;
          color: rgba(244,241,234,0.3);
          letter-spacing: 0.08em;
        }

        .bottom-time .tz {
          color: rgba(244,241,234,0.2);
        }

        .time-val {
          font-variant-numeric: tabular-nums;
          color: rgba(244,241,234,0.5);
        }

        .bottom-built {
          font-size: 0.6rem;
          color: rgba(244,241,234,0.25);
          letter-spacing: 0.05em;
        }

        /* Big bg text */
        .footer-bg-text {
          position: absolute;
          bottom: -1rem;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Syne', sans-serif;
          font-size: clamp(6rem, 18vw, 16rem);
          font-weight: 800;
          letter-spacing: -0.05em;
          color: transparent;
          -webkit-text-stroke: 1px rgba(244,241,234,0.04);
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }

        @media (max-width: 900px) {
          .footer-cta-band { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr 1fr; row-gap: 2.5rem; }
          .footer-col:first-child { grid-column: 1 / -1; border-left: none; padding-left: 0; }
          .footer-col + .footer-col:nth-child(2) { border-left: none; padding-left: 0; }
          .footer-bg-text { display: none; }
        }

        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-col + .footer-col { border-left: none; padding-left: 0; }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-inner">

          {/* CTA band */}
          <div className="footer-cta-band">
            <div>
              <p className="cta-label">Open to opportunities</p>
              <h2 className="cta-heading">
                Let's build<br />
                something <span className="acid-word">great</span>
              </h2>
            </div>
            <Link to="/contact" className="cta-btn">
              Get in touch ↗
            </Link>
          </div>

          {/* Grid */}
          <div className="footer-grid">

            {/* Brand */}
            <div className="footer-col">
              <p className="col-heading">About</p>
              <Link to="/" className="footer-logo">
                <span className="footer-logo-dot" />
                Sunil Kunwar
              </Link>
              <p className="footer-tagline">
                Full-stack developer from Nepal. Building precise,
                thoughtful software across the entire stack — from
                schema to deployment.
              </p>
              <div className="footer-availability">
                <span className="avail-blink" />
                Available for work
              </div>
            </div>

            {/* Nav */}
            <div className="footer-col">
              <p className="col-heading">Navigation</p>
              <ul className="footer-nav">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path}>
                      {link.name}
                      <span className="nav-arrow">↗</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div className="footer-col">
              <p className="col-heading">Connect</p>
              <div className="footer-socials">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="social-row"
                  >
                    {s.icon && <span className="social-icon">{s.icon}</span>}
                    {s.label}
                    <span className="social-ext">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <span className="bottom-copy">
              © {new Date().getFullYear()} <span>Sunil Kunwar</span>. All rights reserved.
            </span>
            <div className="bottom-time">
              <span className="tz">NPT</span>
              <span className="time-val">{time}</span>
            </div>
            <span className="bottom-built">
              Built with React · Tailwind · Framer Motion
            </span>
          </div>

        </div>

        {/* Decorative bg text */}
        <span className="footer-bg-text" aria-hidden="true">SK</span>
      </footer>
    </>
  );
};

export default Footer;