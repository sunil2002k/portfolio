import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const res = await axios.post('http://localhost:3001/contact', formData);
      setSubmitStatus({ success: true, message: res.data.message });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({ 
        success: false, 
        message: error.response?.data?.message || 'Failed to send message' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldVariants = {
    inactive: { scale: 1, borderColor: "rgba(255,255,255,0.2)" },
    active: { scale: 1.02, borderColor: "rgba(168, 85, 247, 0.6)" }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#151515] to-[#1e1e1e] text-white px-4 py-15 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-900/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-indigo-900/10 blur-3xl animate-float-delay"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 max-w-lg mx-auto"
          >
            Have a project in mind or want to chat? Drop me a message and I'll get back to you soon.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] shadow-2xl p-8 md:p-10 hover:shadow-purple-500/20 transition-all duration-500"
        >
          {/* Form with animated fields */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            <div className="space-y-8">
              <motion.div
                variants={fieldVariants}
                animate={activeField === 'name' ? 'active' : 'inactive'}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 ml-1">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setActiveField('name')}
                  onBlur={() => setActiveField(null)}
                  type="text"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                variants={fieldVariants}
                animate={activeField === 'email' ? 'active' : 'inactive'}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 ml-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setActiveField('email')}
                  onBlur={() => setActiveField(null)}
                  type="email"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                variants={fieldVariants}
                animate={activeField === 'message' ? 'active' : 'inactive'}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 ml-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setActiveField('message')}
                  onBlur={() => setActiveField(null)}
                  rows="5"
                  className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white transition-all duration-300"
                  required
                />
              </motion.div>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                isSubmitting 
                  ? 'bg-purple-800 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-purple-500/30'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  Send Message <span className="ml-2 text-xl">🚀</span>
                </span>
              )}
            </motion.button>
          </motion.form>

          {/* Submission status message */}
          <AnimatePresence>
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`mt-6 p-4 rounded-xl border ${
                  submitStatus.success 
                    ? 'bg-green-900/30 border-green-500/30 text-green-300' 
                    : 'bg-rose-900/30 border-rose-500/30 text-rose-300'
                }`}
              >
                <div className="flex items-center">
                  {submitStatus.success ? (
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  )}
                  {submitStatus.message}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Social/contact alternatives */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Or connect with me through</p>
          <div className="flex justify-center space-x-6">
            <motion.a 
              whileHover={{ y: -3 }}
              href="mailto:hello@example.com" 
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              ✉️ Email
            </motion.a>
            <motion.a 
              whileHover={{ y: -3 }}
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              💼 LinkedIn
            </motion.a>
            <motion.a 
              whileHover={{ y: -3 }}
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              💻 GitHub
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact; 