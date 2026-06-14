// @ts-nocheck
import React, { useState } from 'react';

// Layout
import StatusBar from './components/layout/StatusBar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Sidebar
import Sidebar from './components/sidebar/Sidebar';

// Sections
import Hero from './components/sections/Hero';
import MetricsDashboard from './components/sections/MetricsDashboard';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

// Data / constants
import { ACCENT_THEMES } from './data/themes';

export default function App() {
  const [accent] = useState('green'); // green | amber | blue
  const activeColor = ACCENT_THEMES[accent];

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#111111] selection:bg-[#111111] selection:text-[#F7F6F2] font-mono leading-relaxed p-0 m-0 border-4 border-[#111111]">
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap');

        /* Default body/monospace technical font (Geist Mono) */
        *, body, p, span, button, a, input, select, textarea, code, pre {
          font-family: 'Geist Mono', monospace;
        }

        /* Brutalist heading font (Satoshi) */
        h1, h2, h3, h4, h5, h6, .font-heading {
          font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Top diagnostic status bar */}
      <StatusBar />

      {/* Sticky navigation header */}
      <Header activeColor={activeColor} />

      {/* Main 2-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] min-h-[calc(100vh-60px)]">

        {/* Left sidebar — terminal + metrics */}
        <Sidebar activeColor={activeColor} />

        {/* Right main content — all page sections */}
        <main className="flex flex-col">
          <Hero activeColor={activeColor} />
          <MetricsDashboard activeColor={activeColor} />
          <Projects activeColor={activeColor} />
          <Experience />
          <Skills />
          <Certifications />
          <Contact activeColor={activeColor} />
          <Footer />
        </main>
      </div>
    </div>
  );
}