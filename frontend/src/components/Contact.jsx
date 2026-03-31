import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/contact`, formData);
      setSubmitStatus({ success: true, message: res.data.message });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error.response?.data?.message || 'Failed to send message',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        .contact-root {
          min-height: 100vh;
          background: var(--paper);
          color: var(--ink);
          font-family: 'DM Mono', monospace;
          padding-top: 64px;
          position: relative;
          overflow: hidden;
        }

        .contact-root::before {
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

        .contact-inner {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Page header */
        .page-header {
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

        .page-tag::before {
          content: '';
          width: 24px; height: 1px;
          background: var(--muted);
        }

        .page-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3rem, 8vw, 7rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 0.9;
          color: var(--ink);
        }

        .page-title em {
          font-style: normal;
          color: transparent;
          -webkit-text-stroke: 2px var(--ink);
        }

        .header-aside {
          text-align: right;
          font-size: 0.75rem;
          line-height: 1.7;
          color: var(--muted);
          max-width: 260px;
        }

        /* Main layout */
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          border-bottom: 1.5px solid var(--ink);
        }

        /* Left info column */
        .contact-info {
          border-right: 1.5px solid var(--ink);
          padding: 3rem 2.5rem 3rem 0;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .info-section-label {
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--muted);
          margin-bottom: 1.5rem;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .contact-link-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
          border-bottom: 1px solid var(--border);
          text-decoration: none;
          color: var(--ink);
          transition: background 0.15s;
          position: relative;
        }

        .contact-link-item:last-child { border-bottom: none; }

        .contact-link-item::before {
          content: '';
          position: absolute;
          left: -1.5rem; top: 0; bottom: 0;
          width: 3px;
          background: var(--acid);
          transform: scaleY(0);
          transition: transform 0.2s;
        }

        .contact-link-item:hover::before {
          transform: scaleY(1);
        }

        .link-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: -0.02em;
        }

        .link-handle {
          font-size: 0.65rem;
          color: var(--muted);
          letter-spacing: 0.05em;
        }

        .link-arrow {
          font-size: 0.9rem;
          color: var(--muted);
          transition: transform 0.2s, color 0.2s;
        }

        .contact-link-item:hover .link-arrow {
          transform: translate(3px, -3px);
          color: var(--ink);
        }

        .availability-block {
          background: var(--acid);
          border: 1.5px solid var(--ink);
          padding: 1.5rem;
        }

        .avail-heading {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
        }

        .avail-text {
          font-size: 0.7rem;
          line-height: 1.7;
          color: rgba(15,15,15,0.7);
        }

        /* Form column */
        .contact-form-col {
          padding: 3rem 0 3rem 2.5rem;
        }

        .form-heading {
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--muted);
          margin-bottom: 2.5rem;
        }

        .field-group {
          margin-bottom: 0;
          border-bottom: 1.5px solid var(--ink);
          position: relative;
          transition: background 0.15s;
        }

        .field-group:first-of-type { border-top: 1.5px solid var(--ink); }

        .field-group.focused {
          background: rgba(184,255,87,0.08);
        }

        .field-label {
          display: block;
          font-size: 0.6rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--muted);
          padding: 1rem 0 0;
          transition: color 0.15s;
        }

        .field-group.focused .field-label {
          color: var(--ink);
        }

        .field-input, .field-textarea {
          display: block;
          width: 100%;
          background: transparent;
          border: none;
          outline: none;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: 1.2rem;
          letter-spacing: -0.02em;
          color: var(--ink);
          padding: 0.5rem 0 1rem;
          resize: none;
        }

        .field-input::placeholder,
        .field-textarea::placeholder {
          color: rgba(15,15,15,0.2);
          font-weight: 400;
        }

        .field-bar {
          position: absolute;
          bottom: -1.5px; left: 0;
          height: 2px;
          background: var(--acid);
          width: 0;
          transition: width 0.3s ease;
          border: none;
        }

        .field-group.focused .field-bar {
          width: 100%;
        }

        .submit-row {
          margin-top: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .submit-note {
          font-size: 0.65rem;
          color: var(--muted);
          max-width: 220px;
          line-height: 1.6;
        }

        .btn-submit {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 16px 36px;
          background: var(--ink);
          color: var(--paper);
          border: 1.5px solid var(--ink);
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .btn-submit:hover:not(:disabled) {
          background: var(--acid);
          color: var(--ink);
        }

        .btn-submit:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .status-bar {
          margin-top: 1.5rem;
          padding: 1rem 1.25rem;
          border: 1.5px solid var(--ink);
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .status-bar.success { background: rgba(184,255,87,0.2); }
        .status-bar.error { background: rgba(255,80,80,0.08); }

        .status-icon { font-size: 1rem; }

        /* Responsive */
        @media (max-width: 900px) {
          .page-header { flex-direction: column; align-items: flex-start; }
          .header-aside { text-align: left; max-width: 100%; }
          .contact-layout { grid-template-columns: 1fr; }
          .contact-info { border-right: none; border-bottom: 1.5px solid var(--ink); padding: 2.5rem 0; }
          .contact-form-col { padding: 2.5rem 0; }
        }
      `}</style>

      <div className="contact-root">
        <div className="contact-inner">

          {/* Header */}
          <motion.div
            className="page-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="page-tag">Contact · Let's Work Together</p>
              <h1 className="page-title">
                Let's<br />
                <em>Connect</em>
              </h1>
            </div>
            <p className="header-aside">
              Have a project in mind or just want to say hello?
              Fill in the form or reach out directly —
              I usually respond within 24 hours.
            </p>
          </motion.div>

          {/* Main layout */}
          <div className="contact-layout">

            {/* Info column */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <p className="info-section-label">Direct Channels</p>
                <div className="contact-links">
                  <a href="mailto:kunwarsunil093@gmail.com" className="contact-link-item">
                    <div>
                      <div className="link-name">Email</div>
                      <div className="link-handle">kunwarsunil093@gmail.com</div>
                    </div>
                    <span className="link-arrow">↗</span>
                  </a>
                  <a href="https://www.linkedin.com/in/sunil-kunwar-710368303" target="_blank" rel="noreferrer" className="contact-link-item">
                    <div>
                      <div className="link-name">LinkedIn</div>
                      <div className="link-handle">sunil-kunwar-710368303</div>
                    </div>
                    <span className="link-arrow">↗</span>
                  </a>
                  <a href="https://github.com/sunil2002k" target="_blank" rel="noreferrer" className="contact-link-item">
                    <div>
                      <div className="link-name">GitHub</div>
                      <div className="link-handle">sunil2002k</div>
                    </div>
                    <span className="link-arrow">↗</span>
                  </a>
                </div>
              </div>

              <div className="availability-block">
                <div className="avail-heading">Currently Available</div>
                <div className="avail-text">
                  Open to freelance projects, full-time roles, and collaborations.
                  Based in Nepal · Open to remote work worldwide.
                </div>
              </div>
            </motion.div>

            {/* Form column */}
            <motion.div
              className="contact-form-col"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="form-heading">Send a Message</p>

              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className={`field-group${focused === 'name' ? ' focused' : ''}`}>
                  <label className="field-label" htmlFor="name">Your Name</label>
                  <input
                    id="name" name="name" type="text"
                    className="field-input"
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    required
                  />
                  <div className="field-bar" />
                </div>

                {/* Email */}
                <div className={`field-group${focused === 'email' ? ' focused' : ''}`}>
                  <label className="field-label" htmlFor="email">Email Address</label>
                  <input
                    id="email" name="email" type="email"
                    className="field-input"
                    placeholder="jane@studio.com"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    required
                  />
                  <div className="field-bar" />
                </div>

                {/* Message */}
                <div className={`field-group${focused === 'message' ? ' focused' : ''}`}>
                  <label className="field-label" htmlFor="message">Your Message</label>
                  <textarea
                    id="message" name="message"
                    className="field-textarea"
                    placeholder="Tell me about your project…"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                  />
                  <div className="field-bar" />
                </div>

                <div className="submit-row">
                  <p className="submit-note">
                    I'll get back to you within 24 hours. No spam, promise.
                  </p>
                  <button type="submit" className="btn-submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 0.8s linear infinite' }}>
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>Send Message →</>
                    )}
                  </button>
                </div>
              </form>

              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`status-bar ${submitStatus.success ? 'success' : 'error'}`}
                  >
                    <span className="status-icon">{submitStatus.success ? '✓' : '✕'}</span>
                    {submitStatus.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </>
  );
};

export default Contact;