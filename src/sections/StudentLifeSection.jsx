import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Music, Compass, Users, Sparkles, Video } from 'lucide-react';

export default function StudentLifeSection({ setActivePage }) {
  const categories = [
    { title: "Athletics, Drills & Sports", icon: <Trophy className="w-5 h-5 text-amber-500" />, desc: "Kho-Kho, Kabaddi, running, mass drills, and traditional Lezim performances on our open playground." },
    { title: "Annual Cultural Gathering", icon: <Music className="w-5 h-5 text-[#be185d]" />, desc: "Annual day celebrations featuring folk dance, musical drama, singing, and poetry recitations." },
    { title: "Values & Heritage", icon: <Compass className="w-5 h-5 text-emerald-600" />, desc: "Daily morning assemblies, moral values, National festivals, and Shri Dattabal Mission traditions." },
    { title: "Arts & Elocution", icon: <Users className="w-5 h-5 text-[#04439c]" />, desc: "Elocution competitions, science exhibitions, drawing contests, and library reading clubs." }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Content & Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#04439c] px-3.5 py-1 bg-blue-50 rounded-full border border-blue-100">
              STUDENT LIFE & ACTIVITIES
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              Joyful Growth Beyond the Classroom
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At <strong>SHRI DATTABAL HIGH SCHOOL</strong>, student life blends cultural heritage with physical vitality and artistic freedom. Guided by 65 teaching staff and 15 non-teaching support staff, every child blossoms with confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {categories.map((cat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5 shadow-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    {cat.icon}
                    <span>{cat.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  setActivePage('student-life');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#04439c] hover:bg-[#022c6b] text-white font-bold text-xs tracking-wider uppercase shadow-md transition-all cursor-pointer"
              >
                Explore Student Activities
              </button>

              <button
                onClick={() => {
                  setActivePage('gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 font-bold text-xs tracking-wider uppercase transition-all cursor-pointer border border-pink-200"
              >
                <Video className="w-4 h-4" /> Watch Reels & Videos
              </button>
            </div>
          </div>

          {/* Right Column: Photography Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative group overflow-hidden rounded-2xl shadow-md border border-slate-200">
                <img
                  src="/images/events/sports-tournament.jpg"
                  alt="Annual Sports Day & Athletics Meet"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                  🏆 Annual Sports Day
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl shadow-md border border-slate-200">
                <img
                  src="/images/events/science-exhibition.jpg"
                  alt="School Science Exhibition & Working Models"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                  🔬 Science Exhibition
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-6">
              <div className="relative group overflow-hidden rounded-2xl shadow-md border border-slate-200">
                <img
                  src="/images/events/prize-distribution.jpg"
                  alt="Student Merit Awards & Trophy Felicitation"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                  🎖️ Merit Prize Distribution
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl shadow-md border border-slate-200">
                <img
                  src="/images/events/annual-gathering.jpg"
                  alt="Cultural Dance & Annual Gathering"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                  🎭 Cultural Dance Gathering
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
