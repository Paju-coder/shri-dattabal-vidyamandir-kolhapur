import React, { useRef } from 'react';
import { ArrowDown, ArrowRight, Video } from 'lucide-react';

export default function HeroSection({ setActivePage }) {
  const containerRef = useRef(null);
  const bgVideoRef = useRef(null);

  // Background campus video with instant poster image
  const heroVideo = {
    title: "Shri Dattabal School - Campus Life",
    url: "/videos/hero-compressed.mp4",
    poster: "/images/hero_campus.jpg"
  };

  const scrollToContent = () => {
    const el = document.getElementById('about-summary');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenGallery = () => {
    const el = document.getElementById('video-gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (setActivePage) {
      setActivePage('gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100svh] sm:min-h-[100dvh] bg-slate-950 text-white overflow-hidden flex flex-col justify-start sm:justify-center pt-24 pb-12 sm:py-0 select-none"
    >
      {/* ------------------------------------------------------------------ */}
      {/* 1. CINEMATIC BACKGROUND VIDEO / POSTER                              */}
      {/* ------------------------------------------------------------------ */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={(el) => {
            bgVideoRef.current = el;
            if (el) {
              el.muted = true;
              el.defaultMuted = true;
              el.setAttribute('playsinline', '');
              el.setAttribute('webkit-playsinline', 'true');
              const p = el.play();
              if (p !== undefined) {
                p.catch(() => {});
              }
            }
          }}
          src={heroVideo.url}
          poster={heroVideo.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />

        {/* Natural cinematic overlays — reduced bluish tint so campus video is clearly visible */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 2. MAIN HERO FOREGROUND CONTENT                                    */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-4 sm:py-16 sm:my-auto w-full">
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          
          {/* School Main Heading */}
          <div className="space-y-1 sm:space-y-2 origin-left">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
              Nurturing Wisdom &
            </h1>
            <div className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic text-amber-300 sm:text-gold-shimmer font-medium sm:font-light leading-tight drop-shadow-md">
              Values for Life
            </div>
          </div>

          {/* School Tagline / Description */}
          <p className="text-slate-100 text-xs sm:text-base md:text-lg max-w-2xl leading-relaxed font-normal drop-shadow-sm">
            Premier <strong>English Medium & Semi-English Medium</strong> education under <strong>Shri Dattabal Mission Divine Kolhapur</strong>. Fostering character, scientific curiosity, and state board excellence from <strong>Nursery to Grade 10</strong>.
          </p>

          {/* Dual Medium Academic Streams */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('mediums-showcase');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else if (setActivePage) setActivePage('academics');
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 hover:bg-slate-900 border border-white/20 text-slate-100 hover:text-white text-xs font-medium tracking-wide sm:backdrop-blur-md transition-all cursor-pointer shadow-md"
            >
              <span>English Medium (Nursery – 10th)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('mediums-showcase');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else if (setActivePage) setActivePage('academics');
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950/70 hover:bg-slate-900 border border-white/20 text-slate-100 hover:text-white text-xs font-medium tracking-wide sm:backdrop-blur-md transition-all cursor-pointer shadow-md"
            >
              <span>Semi-English Medium (Nursery – 10th)</span>
            </button>
          </div>

          {/* Institutional Actions & Fast Links */}
          <div className="pt-2 sm:pt-3 space-y-4">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary Admissions CTA */}
              <button
                type="button"
                onClick={() => {
                  if (setActivePage) setActivePage('admissions');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
              >
                <span>Admissions 2026–27</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              {/* Secondary Campus Tour / Explore CTA */}
              <button
                type="button"
                onClick={scrollToContent}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-950/60 hover:bg-slate-900/80 active:scale-[0.98] border border-white/25 text-white font-semibold text-xs sm:text-sm tracking-wide sm:backdrop-blur-md transition-all cursor-pointer shadow-md"
              >
                <span>Explore School</span>
                <ArrowDown className="w-3.5 h-3.5 text-white/70" />
              </button>

              {/* Watch Video Link */}
              <button
                type="button"
                onClick={handleOpenGallery}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-950/50 hover:bg-slate-900/70 active:scale-[0.98] border border-white/15 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-all cursor-pointer sm:backdrop-blur-sm"
              >
                <Video className="w-4 h-4 text-amber-400" />
                <span>Watch Campus Reel</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* 3. BOTTOM SCROLL INDICATOR                                         */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative z-20 pb-4 text-center mt-auto sm:mt-0">
        <button
          onClick={scrollToContent}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-xs font-semibold text-slate-200 hover:text-amber-300 transition-all cursor-pointer sm:backdrop-blur-md"
        >
          <span>Scroll Down to Discover Campus</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-amber-400" />
        </button>
      </div>
    </section>
  );
}
