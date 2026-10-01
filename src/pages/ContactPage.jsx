import React from 'react';
import ContactSection from '../sections/ContactSection';

export default function ContactPage() {
  return (
    <div className="w-full pt-6">
      <div className="bg-gradient-to-r from-[#022459] via-[#043b8c] to-[#011940] text-white py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-oak-pattern opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
            CONNECT WITH OUR OFFICE
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold">Contact & Visit Campus</h1>
          <p className="text-blue-100 max-w-2xl text-sm sm:text-base">
            Located at Opposite D.S.P. Office, Kasaba Bawada, Kolhapur - 416003. Approachable by all-weather roads. Connect with our administrative team for admissions and enquiries.
          </p>
        </div>
      </div>

      <ContactSection />
    </div>
  );
}
