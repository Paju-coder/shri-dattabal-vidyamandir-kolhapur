import React from 'react';
import FacultySection from '../sections/FacultySection';

export default function FacultyPage({ setActivePage }) {
  return (
    <div className="w-full pt-6">
      <div className="bg-gradient-to-r from-[#022459] via-[#043b8c] to-[#011940] text-white py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-oak-pattern opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
            HEAD TEACHER & FACULTY DIRECTORY
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold">
            Faculty & Staff Directory
          </h1>
          <p className="text-blue-100 max-w-2xl text-sm sm:text-base">
            Led by Principal <strong>ANURADHA RAJARAM AYAREKAR</strong>, with 14 dedicated educators (8 primary/upper-primary and 5 pre-primary teachers).
          </p>
        </div>
      </div>

      <FacultySection setActivePage={setActivePage} />
    </div>
  );
}
