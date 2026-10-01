import React from 'react';
import { whyChoosePoints } from '../data/schoolData';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#00173b] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sticky Left Title Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
              <span>WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-tight">
              Shaping Bright Futures in Kolhapur.
            </h2>
            <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
              For over 35 years since 1989, <strong>Shri Dattabal High School</strong> has stood as a beacon of values, cultural pride, strong educational fundamentals, and student development under Shri Dattabal Mission Divine Kolhapur.
            </p>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block">
                Private Aided Institution • Kolhapur
              </span>
              <p className="text-xs text-slate-300">
                19 Instructional Classrooms • 65 Teaching & 15 Non-Teaching Staff • 5 Computers • 22 Modern Toilets • Full Electricity & Purified Tap Water.
              </p>
            </div>
          </div>

          {/* Right Column: Numbered List Cards */}
          <div className="lg:col-span-7 space-y-5">
            {whyChoosePoints.map((item, idx) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-400/40 transition-all flex gap-5 items-start group shadow-sm"
              >
                <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 shrink-0">
                  {item.number}
                </span>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
