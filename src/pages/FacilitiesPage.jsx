import React from 'react';
import FacilitiesSection from '../sections/FacilitiesSection';

export default function FacilitiesPage({ setActivePage }) {
  return (
    <div className="w-full pt-6">
      <div className="bg-gradient-to-r from-[#022459] via-[#043b8c] to-[#011940] text-white py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-oak-pattern opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
            CAMPUS INFRASTRUCTURE
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold">
            Campus Facilities & Infrastructure
          </h1>
          <p className="text-blue-100 max-w-2xl text-sm sm:text-base">
            19 instructional classrooms in prime condition, 65 teaching staff, 15 non-teaching staff, 5-computer digital lab, 22 clean toilets, safe Pucca wall, and spacious sports ground in Kolhapur.
          </p>
        </div>
      </div>

      <FacilitiesSection setActivePage={setActivePage} />
    </div>
  );
}
