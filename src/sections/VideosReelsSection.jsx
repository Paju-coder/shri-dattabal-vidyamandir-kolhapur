import React, { useState, useEffect, useMemo } from 'react';
import { instagramReelsList } from '../data/schoolData';
import { motion, AnimatePresence } from 'motion/react';
import {
  Instagram,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* REEL CARD — matches the school's blue/amber/slate palette                  */
/* -------------------------------------------------------------------------- */
function InstagramReelCard({ reel }) {
  const videoRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const [videoActive, setVideoActive] = React.useState(false);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setProgress(0);
    setVideoActive(false);
  }, [reel.id]);

  const togglePlay = () => {
    if (!videoActive) {
      setVideoActive(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => {});
        }
      }, 50);
      return;
    }
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current || !videoRef.current.duration) return;
    setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
  };

  const handleSeek = (e) => {
    e.stopPropagation();
    if (!videoRef.current || !videoRef.current.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md overflow-hidden transition-shadow duration-300 flex flex-col h-[520px]">
      {/* Video viewport */}
      <div
        className="relative flex-grow w-full bg-slate-900 overflow-hidden cursor-pointer select-none"
        onClick={togglePlay}
      >
        {reel.videoSrc ? (
          videoActive ? (
            <video
              ref={videoRef}
              src={reel.videoSrc}
              poster={reel.thumbnail || undefined}
              playsInline
              loop
              muted={isMuted}
              preload="auto"
              autoPlay
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={reel.thumbnail || '/images/hero_campus.jpg'}
              alt={reel.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )
        ) : (
          <iframe
            src={reel.embedUrl}
            title={reel.title}
            className="w-full h-full border-0 pointer-events-auto"
            allowFullScreen
            scrolling="no"
            loading="lazy"
          />
        )}

        {/* Category badge + mute */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
          <span className="px-2.5 py-1 rounded-full bg-black/60 sm:backdrop-blur-sm text-[11px] font-bold text-amber-200 tracking-wide">
            {reel.category}
          </span>

          {reel.videoSrc && videoActive && (
            <button
              type="button"
              onClick={toggleMute}
              className="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 sm:backdrop-blur-sm text-white flex items-center justify-center pointer-events-auto cursor-pointer transition-colors"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-slate-300" />
              ) : (
                <Volume2 className="w-4 h-4 text-amber-300" />
              )}
            </button>
          )}
        </div>

        {/* Play overlay */}
        {reel.videoSrc && !isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10 pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-[#04439c]/90 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-white fill-white ml-0.5" />
            </div>
          </div>
        )}

        {/* Progress bar */}
        {reel.videoSrc && videoActive && (
          <div
            className="absolute bottom-0 left-0 right-0 h-1 hover:h-2 bg-white/20 transition-all cursor-pointer z-20"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-amber-400 transition-[width] duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>

      {/* Card footer */}
      <div className="p-4 bg-white space-y-2.5 shrink-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h4 className="text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-[#04439c] transition-colors">
              {reel.title}
            </h4>
            <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
              {reel.description}
            </p>
          </div>

          {reel.videoSrc && (
            <button
              type="button"
              onClick={togglePlay}
              className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-blue-50 border border-slate-200 text-slate-700 flex items-center justify-center shrink-0 cursor-pointer transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5" />
              ) : (
                <Play className="w-3.5 h-3.5 ml-0.5" />
              )}
            </button>
          )}
        </div>

        <a
          href={reel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between w-full px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-xs font-semibold text-[#04439c] transition-colors group/btn"
        >
          <span className="flex items-center gap-1.5">
            <Instagram className="w-3 h-3" />
            <span>Watch on Instagram</span>
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-[#04439c] transition-colors" />
        </a>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN VIDEOS & REELS SECTION                                                */
/* -------------------------------------------------------------------------- */
export default function VideosReelsSection({ setActivePage }) {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const [visibleCount, setVisibleCount] = useState(1);

  const reels = useMemo(() => {
    return instagramReelsList.filter((item) => !item.isLocal && (item.videoSrc || item.embedUrl));
  }, []);

  const total = reels.length;

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const handleNext = () => {
    setDirection('right');
    setStartIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setDirection('left');
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [total]);

  const visibleCards = useMemo(() => {
    if (total === 0) return [];
    const count = visibleCount;
    const cards = [];
    for (let i = 0; i < count; i++) {
      const idx = (startIndex + i) % total;
      cards.push({ reel: reels[idx], index: idx, colIdx: i });
    }
    return cards;
  }, [reels, startIndex, total, visibleCount]);

  return (
    <section
      className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200"
      id="video-gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#04439c] px-3.5 py-1 bg-blue-100/70 rounded-full inline-flex items-center gap-1.5">
              <Instagram className="w-3.5 h-3.5" />
              CAMPUS REELS & STORIES
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Watch Campus Life in Action
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Experience the vibrant spirit of <strong>Shri Dattabal School</strong> through our official Instagram video reels, cultural gatherings, and student achievements.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center cursor-pointer transition-colors shadow-xs"
              aria-label="Previous reel"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600">
              {String(startIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>

            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center cursor-pointer transition-colors shadow-xs"
              aria-label="Next reel"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleCards.map((item) => (
              <motion.div
                key={`${item.reel.id}-${item.colIdx}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="w-full"
              >
                <InstagramReelCard reel={item.reel} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom: dots + Instagram CTA */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {reels.map((_, dotIdx) => {
              const isActive = dotIdx === (startIndex % total);
              return (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => {
                    setDirection(dotIdx > startIndex ? 'right' : 'left');
                    setStartIndex(dotIdx);
                  }}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? 'w-7 h-2 bg-[#04439c] shadow-sm'
                      : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Jump to reel ${dotIdx + 1}`}
                />
              );
            })}
          </div>

          {/* Instagram CTA */}
          <a
            href="https://www.instagram.com/reel/DcEXBU1T8p8/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#04439c] hover:bg-[#022c6b] text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @shridattabalvidyamandir</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
