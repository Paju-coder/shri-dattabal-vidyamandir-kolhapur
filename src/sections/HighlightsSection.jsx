import React from 'react';
import { schoolHighlights } from '../data/schoolData';
import SpotlightCard from '../react-bits/SpotlightCard';
import { BookOpen, Award, Sparkles, ShieldCheck, Building2, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

export default function HighlightsSection() {
  const getIcon = (id) => {
    switch (id) {
      case 'academics': return <BookOpen className="w-6 h-6 text-[#04439c]" />;
      case 'faculty': return <Award className="w-6 h-6 text-[#be185d]" />;
      case 'infrastructure': return <Building2 className="w-6 h-6 text-indigo-600" />;
      case 'library': return <Sparkles className="w-6 h-6 text-amber-600" />;
      case 'hygiene': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      case 'digital': return <HeartHandshake className="w-6 h-6 text-[#04439c]" />;
      default: return <BookOpen className="w-6 h-6 text-[#04439c]" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#04439c] px-3.5 py-1 bg-blue-100/70 rounded-full">
            CORE HIGHLIGHTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Shri Dattabal High School at a Glance
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Providing holistic education, strong values, robust infrastructure, and digital learning for young minds in Kolhapur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schoolHighlights.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <SpotlightCard className="h-full border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  {getIcon(item.id)}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
