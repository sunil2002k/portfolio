// src/components/Layout.jsx
import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom'; // Import ScrollRestoration
import Navbar from './Navbar'; // Assuming these exist
import Footer from './Footer'; // Assuming these exist

// You can still keep SparkleCursor here if you want it to be part of the layout,
// but placing it at the root of index.js is still the most robust for fixed elements.
// Let's keep it separate for now for clarity on the ScrollRestoration fix.
import SparkleCursor from './SparkleCursor';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Outlet /> {/* This renders your Home, Aboutus, etc. components */}
      </main>
      <Footer />
      <ScrollRestoration /> {/* <-- Place ScrollRestoration HERE */}
      {/* <SparkleCursor /> Remove this line to avoid duplicate sparkles */}
    </>
  );
};

export default Layout;