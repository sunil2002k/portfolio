// components/Navbar.jsx

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/aboutus' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        <Link to="/" className="text-2xl font-bold tracking-wide">Sunil Kunwar</Link>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-400" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-400 lg:p-0`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md px-4 pb-4 text-white">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-purple-400" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-400 lg:p-0`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
