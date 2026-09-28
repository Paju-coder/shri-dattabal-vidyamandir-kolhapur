import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check,
  ArrowRight,
  BookOpen,
  Sparkles,
  Clock,
  Languages,
  Maximize2,
  GraduationCap
} from 'lucide-react';
import LightboxModal from '../components/LightboxModal';

/* -------------------------------------------------------------------------- */
/* COMBINED ACADEMIC DIVISIONS: ENGLISH MEDIUM & SEMI-ENGLISH MEDIUM          */
/* -------------------------------------------------------------------------- */
const academicLevels = [
  {
    id: "pre-primary",
    name: "Pre-Primary (Nursery, LKG, UKG)",
    title: "Pre-Primary Section (Nursery, LKG & UKG)",
    grades: "वय ३ ते ५ वर्षे (Nursery to UKG)",
    timing: "10:00 AM – 1:30 PM (दोन्ही माध्यमे)",
    description:
      "A warm, joyful, and nurturing environment introducing young children to school life through interactive play, motor skills, sensory activities, rhymes, and foundational language development.",
    
    // English Medium Stream
    english: {
      badge: "100% English Immersion",
      hours: "10:00 AM – 1:30 PM",
      subjects: [
        "English Alphabet & Phonics",
        "Early Numbers, Counting & Shapes",
        "English Nursery Rhymes & Stories",
        "Coloring, Paper Craft & Drawing",
        "Interactive Social Group Games"
      ],
      approach: "Nurturing English immersion promoting spoken confidence, curiosity, and early vocabulary."
    },

    // Semi-English Medium Stream
    semiEnglish: {
      badge: "द्विभाषिक शिक्षण (Bilingual)",
      hours: "10:00 AM – 1:30 PM",
      subjects: [
        "द्विभाषिक फोनेक्स (English & Marathi)",
        "अंक ओळख, मोजणी व प्राथमिक गणित",
        "मराठी बालगीते आणि संस्कार कथा",
        "चित्रकला, मातीकाम व हस्तकला",
        "मैदानी खेळ व हालचालींचे सराव"
      ],
      approach: "मातृभाषेच्या आधाराने इंग्रजीची गोडी निर्माण करून मुलांचा आत्मविश्वास वाढवणारी शिक्षण पद्धती."
    },

    image: "/images/events/sweet-corn-party.jpg",
    imageBadge: "🎨 Joyful Play-Way Activity",
    imageTitle: "Pre-Primary Sweet Corn Activity & Sensory Play",
    imageCategory: "Pre-Primary (Nursery, LKG, UKG)",
    imageDescription:
      "Toddlers celebrating Sweet Corn Party in chef hats, exploring real ingredients and experiencing joyful hands-on play-way learning.",
    methodology:
      "Warm, supportive bilingual play-based learning easing children into classroom routines without linguistic pressure."
  },
  {
    id: "primary",
    name: "Primary (Grades 1 to 4)",
    title: "Primary School (Grades 1 to 4)",
    grades: "इयत्ता १ ली ते ४ थी",
    timing: "English: 10:00 AM – 4:00 PM | Semi-English: 11:00 AM – 5:00 PM",
    description:
      "Primary classes build foundational literacy and numeracy under the Maharashtra State Curriculum framework, instilling discipline, reading habits, and conceptual clarity.",

    english: {
      badge: "100% English Instruction",
      hours: "10:00 AM – 4:00 PM",
      subjects: [
        "Mathematics & Mental Arithmetic (English)",
        "General Science & Nature Studies (English)",
        "Social Sciences & EVS (English)",
        "English Language & Literature",
        "Marathi (Second Language)",
        "Hindi (Third Language)",
        "Work Experience, Art & Physical Education"
      ],
      approach: "Interactive learning with daily library reading, mental arithmetic drills, and spoken English communication."
    },

    semiEnglish: {
      badge: "विज्ञान व गणित इंग्रजीतून",
      hours: "11:00 AM – 5:00 PM",
      subjects: [
        "गणित (Mathematics in English)",
        "सामान्य विज्ञान (Science in English)",
        "परिसर अभ्यास / EVS (मराठीतून)",
        "प्रथम भाषा मराठी (Marathi Literature)",
        "संभाषण इंग्रजी (Functional English)",
        "तृतीय भाषा हिंदी",
        "कार्यानुभव, लेझीम व शारीरिक शिक्षण"
      ],
      approach: "विज्ञान आणि गणिताचा पाया इंग्रजीतून पक्का करताना इतर विषय मराठीतून सहजतेने समजावून देणे."
    },

    image: "/images/events/butterfly-craft.jpg",
    imageBadge: "✂️ Creative Arts & Motor Skills",
    imageTitle: "Primary School Butterfly Craft & Origami",
    imageCategory: "Primary School (Grades 1 to 4)",
    imageDescription:
      "Primary students displaying paper origami and butterfly craft models, building fine motor skills and creative expression.",
    methodology:
      "Activity-based interactive pedagogy, personalized teacher attention, and regular reading hours in our 1,373-book library."
  },
  {
    id: "upper-primary",
    name: "Upper Primary (Grades 5 to 7)",
    title: "Upper Primary School (Grades 5 to 7)",
    grades: "इयत्ता ५ वी ते ७ वी",
    timing: "English: 10:00 AM – 4:00 PM | Semi-English: 11:00 AM – 5:00 PM",
    description:
      "Upper primary students dive into science laboratory experiments, advanced algebra & geometry, public speaking, state scholarship examinations, and digital computer literacy.",

    english: {
      badge: "100% English Instruction",
      hours: "10:00 AM – 4:00 PM",
      subjects: [
        "Mathematics & Geometry (English)",
        "General Science with Experiments (English)",
        "History & Civics (English)",
        "Geography (English)",
        "English Higher Level",
        "Marathi & Hindi Languages",
        "Computer Studies & Digital ICT"
      ],
      approach: "Inquiry-driven teaching, science demonstrations, group debates, and state scholarship exam mentoring."
    },

    semiEnglish: {
      badge: "विज्ञान व गणित इंग्रजीतून",
      hours: "11:00 AM – 5:00 PM",
      subjects: [
        "गणित व भूमिती (Mathematics in English)",
        "सामान्य विज्ञान व प्रात्यक्षिके (Science in English)",
        "इतिहास व नागरिकशास्त्र (मराठीतून)",
        "भूगोल (मराठीतून)",
        "प्रथम भाषा मराठी",
        "द्वितीय भाषा इंग्रजी",
        "संगणक साक्षरता व शिष्यवृत्ती परीक्षा तयारी"
      ],
      approach: "इंग्रजीतून विज्ञान-गणिताचा सराव आणि मराठीतून सामाजिक शास्त्रांचे सखोल आकलन."
    },

    image: "/images/events/solar-system-activity.jpg",
    imageBadge: "🔬 Hands-on Science Exploration",
    imageTitle: "Upper Primary Solar System Science Project",
    imageCategory: "Upper Primary (Grades 5 to 7)",
    imageDescription:
      "Hands-on astronomical models and interactive planetary demonstrations encouraging curious inquiry and scientific thinking.",
    methodology:
      "Practical experimentation in campus laboratories alongside sports drills on our campus ground and moral character building."
  },
  {
    id: "secondary",
    name: "Secondary (Grades 8 to 10 - SSC)",
    title: "Secondary School (Grades 8 to 10 - SSC)",
    grades: "इयत्ता ८ वी ते १० वी (SSC Board)",
    timing: "English: 10:00 AM – 4:00 PM | Semi-English: 11:00 AM – 5:00 PM",
    description:
      "Rigorous preparation for Maharashtra State Board (SSC) examinations, featuring regular chapter tests, science laboratory practicals, mathematics problem-solving, and career guidance.",

    english: {
      badge: "100% English SSC Board",
      hours: "10:00 AM – 4:00 PM",
      subjects: [
        "Mathematics (Algebra & Geometry in English)",
        "Science & Technology I & II (in English)",
        "Social Sciences (History, Geography & Civics in English)",
        "English First Language",
        "Marathi & Hindi Languages",
        "Computer Science & ICT"
      ],
      approach: "Comprehensive SSC board preparation, regular test series, practical lab sessions, and individualized academic mentoring."
    },

    semiEnglish: {
      badge: "द्विभाषिक SSC Board",
      hours: "11:00 AM – 5:00 PM",
      subjects: [
        "गणित (बीजगणित व भूमिती इंग्रजीतून)",
        "विज्ञान आणि तंत्रज्ञान भाग १ व २ (इंग्रजीतून)",
        "इतिहास व राज्यशास्त्र (मराठीतून)",
        "भूगोल (मराठीतून)",
        "प्रथम भाषा मराठी",
        "द्वितीय भाषा इंग्रजी व हिंदी",
        "संगणक प्रात्यक्षिके व बोर्ड परीक्षा सराव"
      ],
      approach: "बोर्ड परीक्षेसाठी विशेष प्रश्नपत्रिका सराव, शंका निरसन आणि १००% निकालाची गौरवशाली परंपरा."
    },

    image: "/images/events/eclipse-practical.jpg",
    imageBadge: "📐 Practical Labs & SSC Guidance",
    imageTitle: "Secondary Astronomy & Physics Practical",
    imageCategory: "Secondary School (Grades 8 to 10 - SSC)",
    imageDescription:
      "Practical demonstrations of eclipse and optical phenomena preparing secondary students for State Board practical and theory exams.",
    methodology:
      "Systematic board exam paper solving, doubt resolution, and complete guidance from experienced faculty."
  }
];

export default function AcademicsOverview({ setActivePage }) {
  const [selectedTab, setSelectedTab] = useState(academicLevels[0].id);
  const [mediumFilter, setMediumFilter] = useState('both'); // 'both' | 'english' | 'semi-english'
  const [selectedImage, setSelectedImage] = useState(null);

  const activeLevel =
    academicLevels.find((tab) => tab.id === selectedTab) || academicLevels[0];

  // Gallery items for lightbox navigation
  const lightboxItems = academicLevels.map((lvl) => ({
    id: lvl.id,
    image: lvl.image,
    title: lvl.imageTitle,
    category: lvl.imageCategory,
    description: lvl.imageDescription
  }));

  const openImageModal = () => {
    setSelectedImage({
      id: activeLevel.id,
      image: activeLevel.image,
      title: activeLevel.imageTitle,
      category: activeLevel.imageCategory,
      description: activeLevel.imageDescription
    });
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header combining both English & Semi-English */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest border shadow-xs bg-blue-50 text-[#04439c] border-blue-200">
            <Languages className="w-3.5 h-3.5 text-blue-600" />
            <span>ENGLISH & SEMI-ENGLISH MEDIUM • NURSERY TO GRADE 10</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-bold text-slate-900">
            Foundations of Academic Excellence
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Following the Maharashtra State Curriculum framework across both 100% English Medium and bilingual Semi-English Medium divisions from Nursery to Grade 10.
          </p>
        </div>

        {/* Level Tabs: Pre-Primary, Primary, Upper Primary, Secondary */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl sm:rounded-full border border-slate-200 flex-wrap justify-center gap-1.5 shadow-inner">
            {academicLevels.map((level) => {
              const isSelected = selectedTab === level.id;
              return (
                <button
                  key={level.id}
                  onClick={() => setSelectedTab(level.id)}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#04439c] text-white shadow-md scale-102'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                  }`}
                >
                  {level.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLevel.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm"
          >
            {/* Top Bar inside Level Card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4 mb-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-blue-100 text-[#04439c]">
                    {activeLevel.grades}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{activeLevel.timing}</span>
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                  {activeLevel.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl">
                  {activeLevel.description}
                </p>
              </div>

              {/* Quick Medium Filter Pill */}
              <div className="shrink-0 flex items-center p-1 bg-white rounded-xl border border-slate-200 shadow-xs gap-1 text-xs">
                <button
                  onClick={() => setMediumFilter('both')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                    mediumFilter === 'both'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Both Mediums
                </button>
                <button
                  onClick={() => setMediumFilter('english')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                    mediumFilter === 'english'
                      ? 'bg-[#04439c] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setMediumFilter('semi-english')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                    mediumFilter === 'semi-english'
                      ? 'bg-[#0d9488] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Semi-English
                </button>
              </div>
            </div>

            {/* Main Content Grid: Both Medium Streams & Teaching Methodology Image Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left / Middle: Combined Medium Columns */}
              <div
                className={`${
                  mediumFilter === 'both' ? 'lg:col-span-8' : 'lg:col-span-7'
                } space-y-6`}
              >
                <div
                  className={`grid grid-cols-1 ${
                    mediumFilter === 'both' ? 'md:grid-cols-2' : 'grid-cols-1'
                  } gap-5`}
                >
                  {/* English Medium Card */}
                  {(mediumFilter === 'both' || mediumFilter === 'english') && (
                    <div className="bg-white p-5 sm:p-6 rounded-2xl border border-blue-100 shadow-sm space-y-4 hover:border-blue-200 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-[#04439c] border border-blue-200">
                          {activeLevel.english.badge}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-blue-600" />
                          {activeLevel.english.hours}
                        </span>
                      </div>

                      <h4 className="font-serif font-bold text-slate-900 text-lg flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#04439c]" />
                        English Medium Curriculum
                      </h4>

                      <div className="space-y-2">
                        {activeLevel.english.subjects.map((sub, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs text-slate-700 bg-blue-50/40 p-2 rounded-lg border border-blue-50"
                          >
                            <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
                        <strong className="text-slate-800">Learning Focus: </strong>
                        {activeLevel.english.approach}
                      </div>
                    </div>
                  )}

                  {/* Semi-English Medium Card */}
                  {(mediumFilter === 'both' || mediumFilter === 'semi-english') && (
                    <div className="bg-white p-5 sm:p-6 rounded-2xl border border-teal-100 shadow-sm space-y-4 hover:border-teal-200 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                          {activeLevel.semiEnglish.badge}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-teal-600" />
                          {activeLevel.semiEnglish.hours}
                        </span>
                      </div>

                      <h4 className="font-serif font-bold text-slate-900 text-lg flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#0d9488]" />
                        सेमी-इंग्लिश अभ्यासक्रम
                      </h4>

                      <div className="space-y-2">
                        {activeLevel.semiEnglish.subjects.map((sub, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs text-slate-700 bg-teal-50/40 p-2 rounded-lg border border-teal-50"
                          >
                            <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
                        <strong className="text-slate-800">अध्यापन पद्धती: </strong>
                        {activeLevel.semiEnglish.approach}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Action Link */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <GraduationCap className="w-4 h-4 text-[#04439c]" />
                    <span>Under Maharashtra State Board guidelines (SSC Pattern)</span>
                  </div>

                  <button
                    onClick={() => {
                      setActivePage('academics');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#04439c] hover:bg-[#022c6b] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-sm cursor-pointer hover:shadow-md"
                  >
                    View Academic Syllabus <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Side: Clickable Image & Teaching Methodology Card */}
              <div
                className={`${
                  mediumFilter === 'both' ? 'lg:col-span-4' : 'lg:col-span-5'
                }`}
              >
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md space-y-4">
                  {/* Clickable Image Container */}
                  <div
                    onClick={openImageModal}
                    className="group relative w-full h-52 rounded-xl overflow-hidden cursor-pointer shadow-inner bg-slate-900"
                    title="Click to view full photo"
                  >
                    <img
                      src={activeLevel.image}
                      alt={activeLevel.imageTitle}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-black/20 group-hover:from-slate-950/85 transition-colors" />

                    {/* Expand icon pill on hover */}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-white/20 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:bg-[#04439c] transition-all">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Click to view</span>
                    </div>

                    {/* Bottom activity pill */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold bg-slate-950/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20 shadow">
                      <span>{activeLevel.imageBadge}</span>
                    </div>
                  </div>

                  {/* Teaching Methodology Text */}
                  <div className="space-y-2">
                    <h5 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      Teaching Methodology
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {activeLevel.methodology}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Lightbox Modal when image is clicked */}
        {selectedImage && (
          <LightboxModal
            item={selectedImage}
            items={lightboxItems}
            onClose={() => setSelectedImage(null)}
          />
        )}

      </div>
    </section>
  );
}
