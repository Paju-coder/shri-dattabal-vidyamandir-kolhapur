import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Phone, ArrowRight } from 'lucide-react';

export default function FacultySection({ setActivePage }) {

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#04439c] px-3.5 py-1 bg-blue-100/70 rounded-full border border-blue-200">
            FACULTY & TEACHING EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            Dedicated Educators Inspiring Young Minds
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Led by Head Teacher <strong>SAWANT JAYSHREE TANAJI</strong>, our team of 65 dedicated teaching staff and 15 non-teaching support staff bring decades of pedagogical experience, character building, and state board excellence to English and Semi-English mediums.
          </p>
        </div>

        {/* Real Staff Room Photo & Academic Standards Banner */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Real Staff Room Image */}
            <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[360px] bg-slate-100">
              <img
                src="/images/teacher-staff-room.jpg"
                alt="Faculty Collaborating in the Teacher Staff Room at Shri Dattabal Vidyamandir"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block px-3 py-1 rounded-md bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider mb-2">
                  Staff Room & Academic Planning
                </span>
                <p className="text-sm sm:text-base font-semibold text-white drop-shadow">
                  Our teachers actively planning lesson modules and student assessments
                </p>
                <p className="text-xs text-slate-200/80 mt-0.5">
                  Fostering regular peer collaboration and student-focused academic strategies
                </p>
              </div>
            </div>

            {/* Teaching Standards & Key Highlights */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full w-fit border border-emerald-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Govt. Recognized & Certified Teachers
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mt-3">
                  A High-Trust, Caring Academic Culture
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  At Shri Dattabal Vidyamandir, education goes beyond rote learning. Our 65 teaching staff and 15 non-teaching staff mentor children through personalized guidance, interactive learning, and science practicals.
                </p>
              </div>

              {/* 4 Key Pillars Stats */}
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-100">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-2xl font-extrabold text-[#04439c]">65</div>
                  <div className="text-xs font-semibold text-slate-700 mt-0.5">Teaching Staff</div>
                  <div className="text-[11px] text-slate-500">Qualified Educators</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-2xl font-extrabold text-amber-600">15</div>
                  <div className="text-xs font-semibold text-slate-700 mt-0.5">Non-Teaching Staff</div>
                  <div className="text-[11px] text-slate-500">Admin & Campus Support</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-2xl font-extrabold text-emerald-600">100%</div>
                  <div className="text-xs font-semibold text-slate-700 mt-0.5">State Certified</div>
                  <div className="text-[11px] text-slate-500">D.Ed, B.Ed, M.A. Qualified</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-2xl font-extrabold text-purple-600">35+</div>
                  <div className="text-xs font-semibold text-slate-700 mt-0.5">Years Legacy</div>
                  <div className="text-[11px] text-slate-500">Under Mission Divine</div>
                </div>
              </div>

              {/* Action Link to Admissions / Contact */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('principal-desk');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else if (setActivePage) setActivePage('about');
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#04439c] hover:text-[#be185d] transition-colors cursor-pointer"
                >
                  <span>Read Principal's Message</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (setActivePage) setActivePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer ml-auto"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>Contact Staff Office</span>
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

