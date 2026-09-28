import React from 'react';
import MediumsShowcase from '../sections/MediumsShowcase';
import AcademicsOverview from '../sections/AcademicsOverview';

export default function AcademicsPage({ setActivePage }) {
  return (
    <div className="w-full pt-6">
      <div className="bg-gradient-to-r from-[#022459] via-[#043b8c] to-[#011940] text-white py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-oak-pattern opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
            DUAL CURRICULUM PATHWAYS
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold">
            Academics: English & Semi-English Medium
          </h1>
          <p className="text-blue-100 max-w-2xl text-sm sm:text-base">
            Providing parents with the choice of 100% English Medium or bilingual Semi-English Medium (Science & Mathematics in English) under the Maharashtra State Board framework.
          </p>
        </div>
      </div>

      <MediumsShowcase setActivePage={setActivePage} />
      <AcademicsOverview setActivePage={setActivePage} />
    </div>
  );
}
