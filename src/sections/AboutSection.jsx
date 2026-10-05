import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, User, ShieldCheck } from 'lucide-react';
import { trusteesList } from '../data/schoolData';

function TrusteeCard({ trustee }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group h-full"
      style={{ minHeight: '520px' }}
    >
      {/* Full-bleed background photo */}
      {!hasError && trustee.image ? (
        <img
          src={trustee.image}
          alt={trustee.name}
          loading="lazy"
          decoding="async"
          onError={() => setHasError(true)}
          className="absolute inset-0 w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
          <User className="w-24 h-24 text-slate-500" />
        </div>
      )}

      {/* Dark gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      {/* Logo stamp — top right */}
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 sm:backdrop-blur-sm border border-white/60 p-1 shadow-lg">
        <img
          src="/images/dattabal_logo.png"
          alt="Shri Dattabal Mission Divine"
          className="w-full h-full object-contain rounded-full"
        />
      </div>

      {/* Info overlay — bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#04439c]/80 sm:backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider mb-2">
          {trustee.role}
        </span>
        <h3 className="font-serif font-bold text-xl sm:text-2xl text-white leading-tight drop-shadow-md">
          {trustee.name}
        </h3>
        <p className="text-xs text-amber-300 font-semibold mt-1">
          {trustee.trust}
        </p>
        <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] text-white/70">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Trust Board Member
          </span>
          <span className="font-semibold text-white/80">Since 1989</span>
        </div>
      </div>
    </div>
  );
}

export default function AboutSection({ setActivePage }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto Photo / Card Swap Animation (Gentle 5s cycle)
  useEffect(() => {
    if (isPaused || trusteesList.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trusteesList.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="about-summary" className="py-14 sm:py-20 bg-[#f8fafc] text-slate-900 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#04439c] px-3.5 py-1 bg-blue-100/70 rounded-full border border-blue-200 inline-flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            GOVERNANCE & TRUST MANAGEMENT
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900">
            Board of Trustees
          </h2>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
            Guiding <strong>Shri Dattabal School</strong> under the divine patronage of <strong>Shri Dattabal Mission Divine, Kolhapur</strong>. Committed to providing character, scientific temperament, and affordable educational excellence since 1989.
          </p>
        </div>

        {/* Mobile Minimal Auto-Swap Carousel (< md screens) */}
        <div 
          className="md:hidden mb-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Progress Indicators */}
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-1.5">
              {trusteesList.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx 
                      ? 'w-7 bg-[#04439c]' 
                      : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Go to trustee ${idx + 1}`}
                />
              ))}
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              {currentIndex + 1} of {trusteesList.length} Trustees
            </span>
          </div>

          {/* Animated Auto-Swapping Card */}
          <div className="relative min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={trusteesList[currentIndex].id}
                initial={{ opacity: 0, x: 18, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -18, scale: 0.98 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <TrusteeCard trustee={trusteesList[currentIndex]} idx={0} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop 3-Column Grid (>= md screens) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {trusteesList.map((trustee, idx) => (
            <TrusteeCard key={trustee.id} trustee={trustee} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

