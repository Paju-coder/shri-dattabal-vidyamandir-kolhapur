import React from 'react';
import { X, Download, FileText, Calendar, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function NoticeModal({ notice, onClose }) {
  if (!notice) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#04439c] text-white p-6 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-blue-200 mb-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {notice.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" /> {notice.category}
              </span>
            </div>

            <h3 className="font-serif font-bold text-xl text-white leading-snug">
              {notice.title}
            </h3>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4 text-slate-700 text-sm leading-relaxed">
            <div className="p-3 bg-blue-50 border-l-4 border-[#04439c] text-slate-800 text-xs rounded">
              <strong className="font-semibold text-[#04439c]">Summary: </strong>
              {notice.summary}
            </div>

            <p>{notice.content}</p>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">Official Shri Dattabal High School Circular</span>

              <button
                onClick={() => alert(`Downloading official PDF circular: ${notice.title}.pdf`)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#04439c] hover:bg-[#022c6b] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" /> Download PDF
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
