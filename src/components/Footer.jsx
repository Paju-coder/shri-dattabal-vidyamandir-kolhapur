import React from 'react';
import { schoolDetails } from '../data/schoolData';
import { Phone, Mail, MapPin, Clock, ArrowUp, Instagram } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#00173b] text-slate-300 pt-12 sm:pt-16 pb-8 sm:pb-10 border-t border-blue-950 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
        {/* Col 1: School Identity */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-amber-400 overflow-hidden bg-white shrink-0">
              <img
                src="/images/dattabal_logo.png"
                alt="Shri Dattabal Mission Divine Kolhapur"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="text-white font-serif font-extrabold text-sm sm:text-base leading-tight">
                SHRI DATTABAL SCHOOL
              </div>
              <div className="text-[#a8d4ff] text-[10px] sm:text-[11px] tracking-wider uppercase">
                <span className="font-extrabold text-white">English</span> & <span className="font-extrabold text-white">Semi-English</span> Medium • Estd. 1989
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Established in 1989 under the auspices of <strong>Shri Dattabal Mission Divine Kolhapur</strong>. A Private Aided Co-educational institution providing quality foundational education from Nursery to Grade 10.
          </p>
          <div className="flex space-x-3 pt-1">
            <a
              href="https://www.instagram.com/reel/DcEXBU1T8p8/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-amber-500 hover:text-slate-950 flex items-center justify-center transition-colors text-slate-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2.5">
            Quick Navigation
          </h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => handleNav('home')} className="hover:text-amber-300 transition-colors">Home Page</button></li>
            <li><button onClick={() => handleNav('about')} className="hover:text-amber-300 transition-colors">About Mission & Leadership</button></li>
            <li><button onClick={() => handleNav('academics')} className="hover:text-amber-300 transition-colors">English & Semi-English Medium</button></li>
            <li><button onClick={() => handleNav('facilities')} className="hover:text-amber-300 transition-colors">Campus & Infrastructure</button></li>
            <li><button onClick={() => handleNav('admissions')} className="hover:text-amber-300 transition-colors">Admissions 2026–27</button></li>
            <li><button onClick={() => handleNav('gallery')} className="hover:text-amber-300 transition-colors">Campus Photo Gallery</button></li>
            <li><button onClick={() => handleNav('contact')} className="hover:text-amber-300 transition-colors">Contact & Location</button></li>
          </ul>
        </div>

        {/* Col 3: Academic Highlights */}
        <div>
          <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2.5">
            Key Institutional Facts
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <span>UDISE Code: <strong>27341304505</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <span>Grades: Nursery to Grade 10 (SSC)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <span>Medium: 100% English & Semi-English</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
              <span>50+ Classrooms, 65 Teaching & 15 Non-Teaching Staff</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Timings */}
        <div className="space-y-3">
          <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2.5">
            Get in Touch
          </h4>
          <div className="flex items-start gap-2.5 text-xs text-slate-300">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>{schoolDetails.address}</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-300">
            <Phone className="w-4 h-4 text-amber-400 shrink-0" />
            <a href="tel:+912312654890" className="hover:text-white">{schoolDetails.phone}</a>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-300">
            <Mail className="w-4 h-4 text-amber-400 shrink-0" />
            <a href="mailto:sdmdkop@gmail.com" className="hover:text-white break-all">{schoolDetails.email}</a>
          </div>
          <div className="flex items-start gap-2.5 text-xs text-slate-300 pt-1">
            <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5 text-[11px]">
              <span className="block"><strong className="text-amber-300">Nursery:</strong> 10:00 AM – 1:30 PM</span>
              <span className="block"><strong className="text-white">English (1st–10th):</strong> 10:00 AM – 4:00 PM</span>
              <span className="block"><strong className="text-white">Semi-Eng (1st–10th):</strong> 11:00 AM – 5:00 PM</span>
              <span className="block text-slate-400 text-[10px]">Office: 9:30 AM – 5:30 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6 sm:pt-8 border-t border-blue-950/80 flex flex-col lg:flex-row items-center justify-between text-xs text-slate-400 gap-3 sm:gap-4 text-center lg:text-left">
        <p>© 2026 SHRI DATTABAL SCHOOL, KOLHAPUR (Shri Dattabal Mission Divine). All rights reserved.</p>

        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <span>Designed & Developed by</span>
          <a
            href="https://growframe.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 ml-0.5 group transition-transform duration-200 hover:scale-105 cursor-pointer"
          >
            <img
              src="/images/growframe-logo.png"
              alt="GrowFrame"
              className="h-4 sm:h-4.5 w-auto object-contain rounded-xs shadow-xs"
            />
            <span className="font-extrabold tracking-tight text-xs sm:text-sm">
              <span className="text-white">Grow</span>
              <span className="text-[#7fe82e]">Frame</span>
            </span>
          </a>
        </div>

        <div className="flex items-center space-x-5 sm:space-x-6">
          <button onClick={() => handleNav('contact')} className="hover:text-slate-300 transition-colors cursor-pointer">Privacy Policy</button>
          <button onClick={() => handleNav('contact')} className="hover:text-slate-300 transition-colors cursor-pointer">Terms</button>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-amber-400 hover:text-white transition-colors cursor-pointer font-semibold"
          >
            Top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

