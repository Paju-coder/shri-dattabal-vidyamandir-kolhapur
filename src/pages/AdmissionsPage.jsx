import React from 'react';
import AdmissionsTimeline from '../sections/AdmissionsTimeline';
import ContactSection from '../sections/ContactSection';
import QuickInfoStrip from '../components/QuickInfoStrip';

export default function AdmissionsPage({ setActivePage }) {
  return (
    <div className="w-full pt-6">
      <div className="bg-gradient-to-r from-[#022459] via-[#043b8c] to-[#011940] text-white py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-oak-pattern opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
            ADMISSIONS OPEN FOR 2026–2027
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold">
            Admissions & Enrollment
          </h1>
          <p className="text-blue-100 max-w-2xl text-sm sm:text-base">
            Applications now open across our <strong>English Medium</strong> (Nursery – 10th) and <strong>Semi-English Medium</strong> (Nursery – 10th) streams for the upcoming academic session starting in April.
          </p>
        </div>
      </div>

      <QuickInfoStrip setActivePage={setActivePage} />
      <AdmissionsTimeline setActivePage={setActivePage} />
      <ContactSection />
    </div>
  );
}
