import React from 'react';
import FacilitiesSection from '../sections/FacilitiesSection';

export default function FacilitiesPage({ setActivePage }) {
  return (
    <div className="w-full pt-6">
      <div className="bg-gradient-to-r from-[#022459] via-[#043b8c] to-[#011940] text-white py-14 sm:py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-oak-pattern opacity-40 pointer-events-none" />
        
        {/* Subtle ambient amber aura behind logo */}
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              CAMPUS INFRASTRUCTURE
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold">
              Campus Facilities & Infrastructure
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              50+ instructional classrooms in prime condition, 65 teaching staff, 15 non-teaching staff, 2-computer digital learning unit, safe Pucca wall, and spacious sports ground in Kolhapur.
            </p>
          </div>

          {/* Logo in the blank space */}
          <div className="shrink-0 flex items-center justify-center">
            <div className="relative p-2 rounded-full bg-gradient-to-tr from-amber-400/40 via-white/20 to-amber-300/40 backdrop-blur-sm shadow-2xl ring-2 ring-amber-400/60 hover:scale-105 transition-transform duration-300">
              <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-white/95 p-1 shadow-inner flex items-center justify-center">
                <img
                  src="/images/dattabal_logo.png"
                  alt="Shri Dattabal Mission Divine Kolhapur Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FacilitiesSection setActivePage={setActivePage} />
    </div>
  );
}
