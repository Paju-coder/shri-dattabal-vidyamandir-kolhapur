import React, { useState, useEffect } from 'react';
import { utilityNavLinks, mainNavLinks } from '../data/navLinks';
import { Search, Menu, X, Phone, Mail, ChevronRight, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar({ activePage, setActivePage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path) => {
    setActivePage(path);
    setMobileMenuOpen(false);
    setSearchOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#04439c]/98 backdrop-blur-md shadow-xl py-2.5 sm:py-3 border-b border-blue-900/50'
            : 'bg-[#04439c] py-2.5 sm:py-3.5 border-b border-blue-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3.5 group text-left cursor-pointer focus:outline-none min-w-0"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 rounded-full border-2 border-amber-400 overflow-hidden shadow-md flex items-center justify-center bg-white shrink-0 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/images/dattabal_logo.png"
                alt="Shri Dattabal Mission Divine Kolhapur Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <div className="text-white font-serif font-extrabold text-xs sm:text-sm md:text-base lg:text-lg tracking-wide leading-tight group-hover:text-amber-200 transition-colors truncate">
                SHRI DATTABAL HIGH SCHOOL
              </div>
              <div className="text-[#a8d4ff] font-sans font-semibold text-[9px] sm:text-[10px] md:text-xs tracking-wider uppercase truncate">
                English & Semi-English Medium • Kolhapur (Est. 1989)
              </div>
            </div>
          </button>

          {/* Center/Middle Desktop Nav Items */}
          <div className="hidden xl:flex items-center space-x-3 2xl:space-x-5 mx-auto">
            {mainNavLinks.map((link) => {
              const isActive = activePage === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-xs font-bold tracking-wider uppercase transition-colors relative py-1 cursor-pointer whitespace-nowrap ${
                    isActive ? 'text-white' : 'text-blue-100/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#be185d]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Far Right: Apply for Admission CTA Button & Mobile Toggle */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            <button
              onClick={() => handleNavClick('admissions')}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-4 md:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-bold text-[10px] sm:text-xs tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer whitespace-nowrap border border-pink-400/30"
            >
              <GraduationCap className="w-3.5 h-3.5 shrink-0" />
              <span>Apply for Admission</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden text-white p-1.5 sm:p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Search Input Bar (Collapsible) */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-[#021f4a] text-white px-4 py-3 border-b border-blue-900 overflow-hidden"
          >
            <div className="max-w-3xl mx-auto flex items-center gap-3">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 shrink-0" />
              <input
                type="text"
                placeholder="Search academics, admissions, events, or notices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white placeholder-blue-300/70 text-xs sm:text-sm focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-[11px] sm:text-xs text-blue-200 hover:text-white uppercase font-bold px-2 py-1 cursor-pointer shrink-0"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-[#00173b]/98 backdrop-blur-xl text-white border-b border-blue-800 shadow-2xl overflow-y-auto max-h-[calc(100vh-100px)]"
          >
            <div className="px-5 py-5 space-y-4">
              {/* Quick Mobile Action Links */}
              <div className="grid grid-cols-2 gap-2 pb-2">
                <button
                  onClick={() => handleNavClick('admissions')}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold text-xs shadow-md"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Apply for Admission</span>
                </button>
                <a
                  href="tel:+912312654890"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/15"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call Office</span>
                </a>
              </div>

              {/* Main Nav Items List */}
              <div className="flex flex-col divide-y divide-blue-900/60 border-y border-blue-900/60">
                {mainNavLinks.map((link) => {
                  const isActive = activePage === link.path;
                  return (
                    <button
                      key={link.path}
                      onClick={() => handleNavClick(link.path)}
                      className={`text-left text-sm font-bold tracking-wide py-3 flex items-center justify-between transition-colors ${
                        isActive ? 'text-amber-300 font-extrabold pl-2' : 'text-slate-200 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-amber-300 translate-x-1' : 'text-slate-500'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Contact Info Footer inside Mobile Menu */}
              <div className="pt-2 text-xs text-slate-400 space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>New Palace, Kasaba Bawada, Kolhapur</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>sdmdkop@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

