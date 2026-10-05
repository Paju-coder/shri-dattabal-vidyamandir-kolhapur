import React from 'react';
import { BookOpen, Settings } from 'lucide-react';

const leaders = [
  {
    name: 'Anuradha Rajaram Ayarekar',
    title: 'Principal',
    subtitle: 'English Medium (Secondary: 8th–10th)',
    stream: 'English Medium',
    badgeBg: 'bg-[#04439c]',
    cardBg: 'bg-gradient-to-br from-[#021f4a] to-[#043b8c]',
    accentColor: 'text-amber-400',
    borderGlow: 'ring-2 ring-amber-400/60',
    image: '/images/principal.jpg',
    imagePosition: 'object-top',
    bio: 'Fostering complete English immersion, scientific curiosity, and holistic development for secondary school students.',
    icon: <BookOpen className="w-3.5 h-3.5" />,
  },
  {
    name: 'Parinita S Saruddkar',
    title: 'Principal',
    subtitle: 'English Medium (Primary: 1st–7th)',
    stream: 'English Medium',
    badgeBg: 'bg-[#0284c7]',
    cardBg: 'bg-gradient-to-br from-[#02214f] to-[#03448a]',
    accentColor: 'text-sky-300',
    borderGlow: 'ring-2 ring-sky-400/60',
    image: '/images/parinita-saruddkar.jpg',
    imagePosition: 'object-[center_12%]',
    bio: 'Dedicated to foundational literacy, active inquiry, and nurturing academic excellence for primary students from 1st to 7th standard.',
    icon: <BookOpen className="w-3.5 h-3.5" />,
    fallback: '/images/dattabal_logo.png',
  },
  {
    name: 'Mr. Sachin Baban Davang',
    title: 'Principal',
    subtitle: 'Semi-English Medium (8th to 10th)',
    stream: 'Semi-English Medium',
    badgeBg: 'bg-emerald-700',
    cardBg: 'bg-gradient-to-br from-[#01353b] to-[#0d5c58]',
    accentColor: 'text-emerald-300',
    borderGlow: 'ring-2 ring-emerald-400/60',
    image: '/images/sachin-davang.jpg',
    imagePosition: 'object-[center_12%]',
    bio: 'Empowering secondary students (Grades 8th to 10th) with a bilingual technical edge in Science & Mathematics while anchoring strong Marathi cultural roots.',
    icon: <BookOpen className="w-3.5 h-3.5" />,
    fallback: '/images/dattabal_logo.png',
  },
  {
    name: 'Miss. Rohini Kamlakant Shewale',
    title: 'Principal',
    subtitle: 'Semi-English Medium (1st to 7th)',
    stream: 'Semi-English Medium',
    badgeBg: 'bg-teal-700',
    cardBg: 'bg-gradient-to-br from-[#023136] to-[#0a4d52]',
    accentColor: 'text-teal-300',
    borderGlow: 'ring-2 ring-teal-400/60',
    image: '/images/rohini-shewale.jpg',
    imagePosition: 'object-top',
    bio: 'Dedicated to laying a strong bilingual educational foundation and nurturing young minds in Semi-English from 1st to 7th standard.',
    icon: <BookOpen className="w-3.5 h-3.5" />,
    fallback: '/images/dattabal_logo.png',
  },
  {
    name: 'Mr. Sandip Namdev Dongare',
    title: 'Administrative Officer',
    subtitle: 'School Administration',
    stream: 'Administration',
    badgeBg: 'bg-amber-700',
    cardBg: 'bg-gradient-to-br from-[#3b1f00] to-[#7a3f00]',
    accentColor: 'text-amber-300',
    borderGlow: 'ring-2 ring-amber-400/60',
    image: '/images/admin-officer.jpg',
    imagePosition: 'object-[center_15%]',
    bio: 'Ensuring seamless school operations, student services, and institutional coordination across Shri Dattabal School.',
    icon: <Settings className="w-3.5 h-3.5" />,
  },
];

export default function PrincipalSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#04439c] px-4 py-1.5 bg-blue-100/80 rounded-full border border-blue-200/60 inline-block">
            School Leadership & Principals' Desk
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
            Guiding with Vision,{' '}
            <span className="text-[#04439c]">Discipline & Values</span>
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Dedicated leadership steering academic excellence across our English Medium (Primary & Secondary)
            and Semi-English Medium (Primary & Secondary) streams since 1989.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className={`group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${leader.cardBg} ${leader.borderGlow} flex flex-col justify-between`}
            >
              <div>
                {/* ── PHOTO AREA ── */}
                <div className="relative w-full overflow-hidden" style={{ height: '300px' }}>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    onError={(e) => {
                      if (leader.fallback) {
                        e.target.onerror = null;
                        e.target.src = leader.fallback;
                      }
                    }}
                    className={`w-full h-full object-cover ${leader.imagePosition} transition-transform duration-700 group-hover:scale-105`}
                  />

                  {/* Very light bottom fade — just to blend into card color */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Stream badge — top left */}
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white ${leader.badgeBg} shadow-lg`}>
                      {leader.icon}
                      {leader.stream}
                    </span>
                  </div>

                  {/* Logo stamp — top right */}
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 border-2 border-white p-0.5 shadow-lg">
                    <img
                      src="/images/dattabal_logo.png"
                      alt="Shri Dattabal Mission Divine"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                </div>

                {/* ── INFO AREA ── */}
                <div className="p-5 space-y-2.5">
                  <h3 className="font-serif font-bold text-lg text-white leading-tight min-h-[3rem] flex items-center">
                    {leader.name}
                  </h3>
                  <p className={`text-sm font-semibold mt-0.5 ${leader.accentColor}`}>
                    {leader.title}
                  </p>
                  {leader.subtitle && (
                    <p className="text-[11px] text-white/60 font-medium mt-0.5">
                      {leader.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <div className="p-5 pt-0 space-y-2.5">
                <div className="h-px bg-white/15" />
                <p className="text-xs text-white/75 leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
