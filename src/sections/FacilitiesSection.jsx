import React from 'react';
import { facilitiesList } from '../data/schoolData';
import { motion } from 'motion/react';
import { ArrowUpRight, Building2, BookOpen, Monitor, Award, ShieldCheck, Shield, Users } from 'lucide-react';

const facilityIcons = {
  classrooms: Building2,
  staff: Users,
  library: BookOpen,
  computers: Monitor,
  playground: Award,
  hygiene: ShieldCheck,
  'campus-security': Shield,
};

const cardGradients = [
  'from-blue-900 via-indigo-950 to-slate-900',
  'from-amber-950 via-slate-900 to-blue-950',
  'from-cyan-950 via-slate-900 to-indigo-950',
  'from-emerald-950 via-slate-900 to-teal-950',
  'from-sky-950 via-slate-900 to-blue-950',
  'from-purple-950 via-slate-900 to-slate-950',
];

export default function FacilitiesSection({ setActivePage }) {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#04439c] px-3.5 py-1 bg-blue-100/70 rounded-full">
              CAMPUS & INFRASTRUCTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-2">
              Well-Equipped Modern Infrastructure
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Private school premises with 19 instructional classrooms, 65 teaching staff, 15 non-teaching staff, 5-computer unit, and 22 clean toilets.
            </p>
          </div>

          {setActivePage && (
            <button
              onClick={() => {
                setActivePage('facilities');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#04439c] hover:text-[#be185d] transition-colors cursor-pointer"
            >
              Explore All Facilities <ArrowUpRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilitiesList.map((item, idx) => {
            const IconComponent = facilityIcons[item.id] || Building2;
            const bgGradient = cardGradients[idx % cardGradients.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className={`group relative rounded-2xl overflow-hidden shadow-md border border-slate-700/60 bg-gradient-to-br ${bgGradient} p-7 flex flex-col justify-between min-h-[260px] hover:shadow-xl hover:border-amber-400/40 transition-all duration-300`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-amber-300 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-blue-200 border border-white/15">
                      {item.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed opacity-90">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-blue-200 font-semibold">
                  <span>Verified Campus Facility</span>
                  <span className="text-amber-300">Shri Dattabal</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
