import React, { useState, useEffect, useCallback } from 'react';
import { X, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function LightboxModal({ item, items = [], onClose }) {
  const [current, setCurrent] = useState(() =>
    items.length > 0 ? items.findIndex((i) => i.id === item.id) : 0
  );
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const activeItem = items.length > 0 ? items[current] : item;
  const hasNav = items.length > 1;

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % items.length);
  }, [items.length]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNav) goNext();
      if (e.key === 'ArrowLeft' && hasNav) goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, goNext, goPrev, hasNav]);

  if (!activeItem) return null;

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.96 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.96 }),
  };

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-pointer"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 cursor-default"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer"
            aria-label="Close preview"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev Arrow */}
          {hasNav && (
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-all cursor-pointer hover:scale-110 active:scale-95"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Arrow */}
          {hasNav && (
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-all cursor-pointer hover:scale-110 active:scale-95"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Swapping Card */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeItem.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="relative aspect-video max-h-[65vh] w-full bg-black flex items-center justify-center">
                {activeItem.image ? (
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="object-contain w-full h-full max-h-[65vh]"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-slate-500">
                    <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center text-3xl">🏫</div>
                    <span className="text-sm font-medium">Shri Dattabal High School</span>
                  </div>
                )}
              </div>

              <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-900/60 text-blue-300 mb-1">
                    <Tag className="w-3 h-3" /> {activeItem.category}
                  </span>
                  <h3 className="font-serif font-bold text-lg">{activeItem.title}</h3>
                </div>
                {hasNav && (
                  <span className="text-xs text-slate-500 shrink-0 ml-4">
                    {current + 1} / {items.length}
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dot indicators or pagination bar */}
          {hasNav && items.length <= 25 && (
            <div className="flex justify-center gap-1.5 pb-4 bg-slate-900 px-4 flex-wrap">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${i === current ? 'bg-amber-400 w-4' : 'bg-slate-600 hover:bg-slate-400'}`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
