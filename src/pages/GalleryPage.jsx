import React from 'react';
import GallerySection from '../sections/GallerySection';
import VideosReelsSection from '../sections/VideosReelsSection';

export default function GalleryPage({ setActivePage }) {
  return (
    <div className="w-full pt-6">
      <div className="bg-gradient-to-r from-[#022459] via-[#043b8c] to-[#011940] text-white py-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-oak-pattern opacity-40 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
            OFFICIAL VIDEOS, REELS & PHOTO ARCHIVES
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold">
            Shri Dattabal High School Media Gallery
          </h1>
          <p className="text-blue-100 max-w-2xl text-sm sm:text-base">
            Watch our student performances, Lezim drills, annual gatherings, morning assemblies, and campus photography.
          </p>
        </div>
      </div>

      <VideosReelsSection setActivePage={setActivePage} />
      <GallerySection setActivePage={setActivePage} isFullPage={true} />
    </div>
  );
}
