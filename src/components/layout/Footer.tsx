// @ts-nocheck
import React from 'react';

export default function Footer() {
  return (
    <footer className="p-6 md:px-12 md:py-8 bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs">
      <div className="space-y-1">
        <span className="font-bold">© 2026 ADNAN PATEL // INFRASTRUCTURE ARCHITECT</span>
        <p className="text-[10px] text-neutral-400">All rights reserved. Code compilation stable.</p>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-[10px] text-neutral-500">
        <span>LOC: PIMPRI-CHINCHWAD, MH, INDIA</span>
        <span>•</span>
        <span>BUILT WITH REACT + TAILWIND</span>
        <span>•</span>
        <span>VERSION 2.6.4</span>
      </div>
    </footer>
  );
}
