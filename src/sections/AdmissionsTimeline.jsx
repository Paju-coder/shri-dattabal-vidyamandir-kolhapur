import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, Clock, GraduationCap, Languages, Sparkles } from 'lucide-react';

export default function AdmissionsTimeline({
  setActivePage,
  activeMediumId: propActiveMediumId,
  setActiveMediumId: propSetActiveMediumId
}) {
  const [localActiveMediumId, setLocalActiveMediumId] = React.useState('english');
  const activeMediumId = propActiveMediumId !== undefined ? propActiveMediumId : localActiveMediumId;
  const setActiveMediumId = propSetActiveMediumId || setLocalActiveMediumId;

  const isEnglish = activeMediumId === 'english';

  const documents = [
    "Student's Official Birth Certificate Copy",
    "Student & Parent Aadhaar Card Copies",
    "Original School Leaving / Transfer Certificate (TC)",
    "3 Recent Passport-Size Photographs",
    "Previous Academic Report Card (if applicable)",
    "Address & Emergency Contact Verification"
  ];

  const steps = isEnglish
    ? [
        {
          step: "01",
          title: "Information & Admission Form",
          desc: "Visit the school office in Kolhapur to collect the official English Medium admission kit for Pre-Primary or Grades 1 to 10."
        },
        {
          step: "02",
          title: "Document Submission",
          desc: "Submit the filled form along with birth certificate, Aadhaar card copies, transfer certificate (if applicable), and passport photos."
        },
        {
          step: "03",
          title: "Parent & Student Interaction",
          desc: "A warm orientation meeting with Principal Anuradha Rajaram Ayarekar and senior teachers to understand your child's goals."
        },
        {
          step: "04",
          title: "Enrollment Confirmation",
          desc: "Receive the official admission confirmation slip and collect textbook, notebook, and uniform guidelines for the April session."
        }
      ]
    : [
        {
          step: "01",
          title: "Information & Admission Form",
          desc: "Visit the school office in Kolhapur to collect the official Semi-English Medium admission kit for Pre-Primary or Grades 1 to 10."
        },
        {
          step: "02",
          title: "Document Submission",
          desc: "Submit the completed application form with birth certificate, Aadhaar cards, transfer certificate, and 3 passport-size photos."
        },
        {
          step: "03",
          title: "Parent & Student Interaction",
          desc: "A friendly orientation meeting with Principal Mr. Sachin Baban Davang and educators to discuss bilingual learning readiness."
        },
        {
          step: "04",
          title: "Enrollment Confirmation",
          desc: "Receive the official admission confirmation slip and collect bilingual textbook guidelines and uniform details for April."
        }
      ];

  return (
    <section id="admissions-timeline" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest border shadow-xs transition-colors">
            {isEnglish ? (
              <span className="bg-blue-50 text-[#04439c] border border-blue-200 px-3 py-0.5 rounded-full inline-flex items-center gap-1.5">
                <Languages className="w-3.5 h-3.5 text-blue-600" />
                ADMISSIONS 2026–27 • 100% ENGLISH MEDIUM
              </span>
            ) : (
              <span className="bg-teal-50 text-teal-800 border border-teal-200 px-3 py-0.5 rounded-full inline-flex items-center gap-1.5">
                <Languages className="w-3.5 h-3.5 text-teal-600" />
                ADMISSIONS 2026–27 • SEMI-ENGLISH MEDIUM
              </span>
            )}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900">
            {isEnglish
              ? "Admissions Open: English Medium"
              : "Admissions Open: Semi-English Medium"}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {isEnglish
              ? "Enrolling for the academic year 2026–2027 in our 100% English immersion stream (Nursery to Grade 10) under the Maharashtra State Board."
              : "Enrolling for the academic year 2026–2027 in our bilingual STEM stream (Nursery to Grade 10) under Principal Mr. Sachin Baban Davang."}
          </p>

          {/* Stream Switcher Tabs */}
          <div className="pt-2 flex flex-wrap justify-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => setActiveMediumId('english')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer shadow-xs flex items-center gap-2 ${
                isEnglish
                  ? 'bg-[#04439c] text-white shadow-md ring-2 ring-blue-300'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isEnglish ? 'bg-amber-300' : 'bg-blue-600'}`} />
              <span>English Medium</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 font-mono">Nursery–10th</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMediumId('semi-english')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer shadow-xs flex items-center gap-2 ${
                !isEnglish
                  ? 'bg-[#0d9488] text-white shadow-md ring-2 ring-teal-300'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${!isEnglish ? 'bg-amber-300' : 'bg-teal-600'}`} />
              <span>Semi-English Medium</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 font-mono">Nursery–10th</span>
            </button>
          </div>
        </div>

        {/* Dynamic Single-Stream Pathway Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMediumId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="mb-14"
          >
            {isEnglish ? (
              /* English Medium Admission Pathway */
              <div className="bg-white p-6 sm:p-10 rounded-3xl border-2 border-blue-500/40 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
                
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#04439c] text-xs font-bold uppercase tracking-wider">
                      100% English Instruction
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>School Hours: 10:00 AM – 4:00 PM (Nursery: 10:00 AM – 1:30 PM)</span>
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    Nursery to Grade 10
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-3">
                  English Medium Admission Pathway
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl mb-6">
                  Direct entry from Pre-Primary (Nursery, LKG, UKG) through Grade 10. Complete immersion in English for Mathematics, General Science, Social Sciences, and Computer Studies adhering strictly to the Maharashtra State Board curriculum.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6">
                  <div className="text-xs font-semibold text-blue-900 bg-blue-50/70 p-3.5 rounded-xl border border-blue-100 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Age Criteria: 3+ years for Nursery as of cut-off date</span>
                  </div>
                  <div className="text-xs font-semibold text-blue-900 bg-blue-50/70 p-3.5 rounded-xl border border-blue-100 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Phonics, spoken English & creative writing from Nursery</span>
                  </div>
                  <div className="text-xs font-semibold text-blue-900 bg-blue-50/70 p-3.5 rounded-xl border border-blue-100 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>State & National talent search exam coaching</span>
                  </div>
                </div>

                {/* Direct quick switch helper */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-xs">
                  <span className="text-slate-500">
                    Prefer bilingual instruction (Math & Science in English, Marathi concept clarity)?
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveMediumId('semi-english')}
                    className="font-bold text-[#0d9488] hover:text-[#09665e] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Semi-English Medium Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              /* Semi-English Medium Admission Pathway */
              <div className="bg-white p-6 sm:p-10 rounded-3xl border-2 border-teal-500/40 shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-teal-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
                
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
                      Math & Science in English
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>School Hours: 11:00 AM – 5:00 PM (Nursery: 10:00 AM – 1:30 PM)</span>
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    Nursery to Grade 10
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-3">
                  Semi-English Medium Admission Pathway
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl mb-6">
                  Enrolling from Nursery to Grade 10 under Principal Mr. Sachin Baban Davang. Perfect for students seeking English fluency in Science & Math while maintaining effortless concept grasp in Marathi for Social Sciences.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6">
                  <div className="text-xs font-semibold text-teal-900 bg-teal-50/70 p-3.5 rounded-xl border border-teal-100 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Welcoming transfers from regional / vernacular medium schools</span>
                  </div>
                  <div className="text-xs font-semibold text-teal-900 bg-teal-50/70 p-3.5 rounded-xl border border-teal-100 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Zero linguistic strain with balanced Marathi cultural grounding</span>
                  </div>
                  <div className="text-xs font-semibold text-teal-900 bg-teal-50/70 p-3.5 rounded-xl border border-teal-100 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Consistently high pass % & merit track in Maharashtra SSC</span>
                  </div>
                </div>

                {/* Direct quick switch helper */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-xs">
                  <span className="text-slate-500">
                    Prefer complete 100% English immersion across all subjects?
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveMediumId('english')}
                    className="font-bold text-[#04439c] hover:text-[#022c6b] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>View English Medium Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* 4-Step Process Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={`${activeMediumId}-${step.step}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.35 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span
                  className={`text-2xl font-serif font-bold ${
                    isEnglish ? 'text-[#04439c]' : 'text-[#0d9488]'
                  }`}
                >
                  {step.step}
                </span>
                <h3 className="font-bold text-slate-900 text-sm leading-snug">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Required Documents & Application Card */}
        <div
          className={`rounded-3xl p-8 lg:p-12 text-white border shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
            isEnglish
              ? 'bg-[#021f4a] border-blue-900'
              : 'bg-[#01353b] border-teal-900'
          }`}
        >
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              REQUIRED DOCUMENTS CHECKLIST
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Application & Enrollment Checklist
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Please bring original and photocopies of the following documents to the school office in Kolhapur:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {documents.map((doc, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-4">
            <h4 className="font-bold text-white text-lg">Enquire for Admission</h4>
            <p className="text-xs text-slate-200">
              {isEnglish ? 'English Medium' : 'Semi-English Medium'} • Session commences in April. Office hours: 9:30 AM to 5:30 PM (Mon–Sat).
            </p>
            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-bold text-xs tracking-wider uppercase transition-colors shadow-lg cursor-pointer"
            >
              Contact School Office
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
