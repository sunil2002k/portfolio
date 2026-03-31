import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/aboutus' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@400;500&display=swap');

        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          font-family: 'DM Mono', monospace;
          transition: background 0.3s ease, border-color 0.3s ease;
          background: ${scrolled ? 'rgba(244,241,234,0.96)' : 'rgba(244,241,234,0.6)'};
          backdrop-filter: blur(12px);
          border-bottom: 1.5px solid ${scrolled ? '#0f0f0f' : 'rgba(15,15,15,0.15)'};
        }

        .nav-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          color: #0f0f0f;
          text-decoration: none;
          letter-spacing: -0.03em;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nav-logo-dot {
          width: 8px; height: 8px;
          background: #b8ff57;
          border-radius: 50%;
          display: inline-block;
          border: 1.5px solid #0f0f0f;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0;
          list-style: none;
          margin: 0; padding: 0;
        }

        .nav-link {
          font-size: 0.72rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #0f0f0f;
          text-decoration: none;
          padding: 6px 18px;
          position: relative;
          transition: color 0.2s;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 18px; right: 18px;
          height: 1.5px;
          background: #b8ff57;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          transform: scaleX(1);
        }

        .nav-link.active {
          color: #0f0f0f;
        }

        .nav-link:hover {
          color: #0f0f0f;
        }

        .nav-cta {
          font-size: 0.72rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          text-decoration: none;
          padding: 8px 20px;
          background: #0f0f0f;
          color: #f4f1ea;
          border: 1.5px solid #0f0f0f;
          transition: background 0.2s, color 0.2s;
          margin-left: 16px;
        }

        .nav-cta:hover {
          background: #b8ff57;
          color: #0f0f0f;
        }

        .mobile-btn {
          display: none;
          background: none;
          border: 1.5px solid #0f0f0f;
          width: 36px; height: 36px;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 4px;
          cursor: pointer;
          padding: 0;
        }

        .mobile-btn span {
          display: block;
          width: 18px; height: 1.5px;
          background: #0f0f0f;
          transition: transform 0.25s, opacity 0.25s;
        }

        .mobile-btn.open span:nth-child(1) { transform: translateY(5.5px) rotate(45deg); }
        .mobile-btn.open span:nth-child(2) { opacity: 0; }
        .mobile-btn.open span:nth-child(3) { transform: translateY(-5.5px) rotate(-45deg); }

        .mobile-menu {
          border-top: 1.5px solid #0f0f0f;
          background: #f4f1ea;
          padding: 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .mobile-link {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #0f0f0f;
          text-decoration: none;
          letter-spacing: -0.03em;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(15,15,15,0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: color 0.15s;
        }

        .mobile-link:last-child { border-bottom: none; }

        .mobile-link:hover,
        .mobile-link.active { color: #4a3aff; }

        .mobile-link .arrow { font-size: 1.2rem; opacity: 0.4; }

        @media (max-width: 768px) {
          .nav-links, .nav-cta { display: none; }
          .mobile-btn { display: flex; }
        }
      `}</style>

      <nav className="nav-root">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <span className="nav-logo-dot" />
            Sunil Kunwar
          </Link>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink to="/contact" className="nav-cta" style={{ display: 'none' }}>
            Hire Me
          </NavLink>

          <button
            className={`mobile-btn${isOpen ? ' open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {isOpen && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `mobile-link${isActive ? ' active' : ''}`}
              >
                {link.name}
                <span className="arrow">↗</span>
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;