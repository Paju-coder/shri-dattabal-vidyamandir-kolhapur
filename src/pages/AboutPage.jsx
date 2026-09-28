import React from 'react';
import AboutSection from '../sections/AboutSection';
import PrincipalSection from '../sections/PrincipalSection';

export default function AboutPage({ setActivePage }) {
  return (
    <div className="w-full pt-6">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#022459] via-[#043b8c] to-[#011940] text-white py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-oak-pattern opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
            SHRI DATTABAL MISSION DIVINE • ESTABLISHED 1989
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold">
            About Shri Dattabal Vidyamandir
          </h1>
          <p className="text-blue-100 max-w-2xl text-sm sm:text-base">
            Managed by Private Aided Trust, providing rich educational foundation, 19 modern classrooms, 65 teaching staff, 15 non-teaching staff, sports playground, and values in Kolhapur, Maharashtra.
          </p>
        </div>
      </div>

      <AboutSection setActivePage={setActivePage} />
      <PrincipalSection />
    </div>
  );
}
