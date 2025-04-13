// components/Contact.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully ✨');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4">
      <motion.div initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} className="w-full max-w-xl p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <motion.form initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} onSubmit={handleSubmit} className="space-y-5">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-white/20 border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-xl bg-white/20 border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-xl bg-white/20 border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-white font-semibold"
          >
            Send ✉️
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
