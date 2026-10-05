import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX, Sparkles, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

// ─── All videos from public/videos ─────────────────────────────────────────
const VIDEO_PLAYLIST = [
  {
    src: '/videos/VID_20260915_071622_881_bsl.mp4',
    label: 'Campus Life · September 2026',
    sub: 'Shri Dattabal School, Kolhapur',
  },
  // Add more videos here as they become available in public/videos:
  // { src: '/videos/VID_20260910_073358_262_bsl.mp4', label: 'School Events · 2026', sub: 'Annual Gathering' },
];

export default function HeroVideoPlayer({ onOpenGallery }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentIdx, setCurrentIdx] = useState(0);

  const currentVideo = VIDEO_PLAYLIST[currentIdx];

  // Switch video
  const switchTo = useCallback((idx) => {
    const next = (idx + VIDEO_PLAYLIST.length) % VIDEO_PLAYLIST.length;
    setCurrentIdx(next);
    setProgress(0);
    setPlaying(true);
  }, []);

  // When currentIdx changes, reload & play the new video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.muted = muted;
    video.play().catch(() => {});
  }, [currentIdx]);

  // Auto-advance to next video when current one ends
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onEnded = () => switchTo(currentIdx + 1);
    video.addEventListener('ended', onEnded);
    return () => video.removeEventListener('ended', onEnded);
  }, [currentIdx, switchTo]);

  // Progress bar tracking
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTimeUpdate = () => {
      setProgress(video.duration ? (video.currentTime / video.duration) * 100 : 0);
    };
    video.addEventListener('timeupdate', onTimeUpdate);
    return () => video.removeEventListener('timeupdate', onTimeUpdate);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) videoRef.current.muted = !muted;
    setMuted((m) => !m);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); }
    else { videoRef.current.play(); }
    setPlaying((p) => !p);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative w-full max-w-[320px] xs:max-w-[350px] sm:max-w-[370px] rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400/50 bg-slate-950 flex flex-col group mx-auto"
    >
      {/* ── TOP STATUS BAR ── */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[11px] font-bold shadow-lg">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span>Campus Reel</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-slate-300 text-[9px] sm:text-[10px] font-bold">
          {currentIdx + 1} / {VIDEO_PLAYLIST.length}
        </div>
      </div>

      {/* ── VIDEO VIEWPORT ── */}
      <div className="relative w-full aspect-[9/16] max-h-[500px] sm:max-h-[560px] bg-black overflow-hidden">
        <video
          ref={videoRef}
          src={currentVideo.src}
          autoPlay
          loop={VIDEO_PLAYLIST.length === 1}
          muted={muted}
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Cinematic vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-transparent to-slate-950/20 pointer-events-none" />

        {/* ── Progress bar ── */}
        <div className="absolute top-12 sm:top-14 left-3 sm:left-4 right-3 sm:right-4 z-20 h-1 bg-white/25 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-400 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* ── Tap to play/pause ── */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 w-full h-full z-10 flex items-center justify-center group/play cursor-pointer"
          aria-label={playing ? 'Pause' : 'Play'}
        >
          <div className={`w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-300 ${playing ? 'opacity-0 group-hover/play:opacity-100 scale-90 group-hover/play:scale-100' : 'opacity-100 scale-100'}`}>
            {playing
              ? <Pause className="w-6 h-6 text-white" />
              : <Play className="w-6 h-6 text-white ml-1" />
            }
          </div>
        </button>

        {/* ── Prev / Next arrows (only if multiple videos) ── */}
        {VIDEO_PLAYLIST.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); switchTo(currentIdx - 1); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-amber-500/80 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); switchTo(currentIdx + 1); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-amber-500/80 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* ── Bottom caption ── */}
        <div className="absolute bottom-4 left-4 right-4 z-20 space-y-0.5 pointer-events-none">
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1 drop-shadow">
            <Sparkles className="w-3 h-3 text-amber-400" />
            {currentVideo.sub}
          </span>
          <h4 className="font-serif font-bold text-xs sm:text-sm text-white leading-snug drop-shadow-md">
            {currentVideo.label}
          </h4>
        </div>
      </div>

      {/* ── BOTTOM CONTROLS BAR ── */}
      <div className="p-3 sm:p-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between relative z-10">
        <button
          onClick={toggleMute}
          className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors text-[10px] sm:text-[11px] font-semibold cursor-pointer"
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted
            ? <VolumeX className="w-4 h-4" />
            : <Volume2 className="w-4 h-4 text-amber-400" />
          }
          <span>{muted ? 'Tap to Unmute' : 'Sound On'}</span>
        </button>

        <button
          onClick={onOpenGallery}
          className="text-amber-400 hover:text-amber-300 font-bold text-xs flex items-center gap-1 cursor-pointer transition-colors"
        >
          <span>All Videos</span>
          <span className="text-sm font-black">→</span>
        </button>
      </div>
    </motion.div>
  );
}
