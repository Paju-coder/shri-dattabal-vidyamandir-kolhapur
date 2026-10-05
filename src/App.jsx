import React, { useState, useEffect, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';

// Lazy-load subpages to keep initial bundle ultra-fast on mobile
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AcademicsPage = lazy(() => import('./pages/AcademicsPage'));
const AdmissionsPage = lazy(() => import('./pages/AdmissionsPage'));
const FacultyPage = lazy(() => import('./pages/FacultyPage'));
const FacilitiesPage = lazy(() => import('./pages/FacilitiesPage'));
const StudentLifePage = lazy(() => import('./pages/StudentLifePage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Global Lenis Smooth Scroll Setup — strictly desktop-only
  // Mobile browsers already have native 120Hz/60Hz GPU-accelerated touch momentum scrolling
  useEffect(() => {
    const isTouchOrMobile =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches ||
        window.innerWidth < 1024);

    if (isTouchOrMobile) {
      return; // Do NOT hijack scroll or run rAF loop on mobile devices
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage setActivePage={setActivePage} />;
      case 'about': return <Suspense fallback={<div className="min-h-[50vh]" />}><AboutPage setActivePage={setActivePage} /></Suspense>;
      case 'academics': return <Suspense fallback={<div className="min-h-[50vh]" />}><AcademicsPage setActivePage={setActivePage} /></Suspense>;
      case 'admissions': return <Suspense fallback={<div className="min-h-[50vh]" />}><AdmissionsPage setActivePage={setActivePage} /></Suspense>;
      case 'faculty': return <Suspense fallback={<div className="min-h-[50vh]" />}><FacultyPage setActivePage={setActivePage} /></Suspense>;
      case 'facilities': return <Suspense fallback={<div className="min-h-[50vh]" />}><FacilitiesPage setActivePage={setActivePage} /></Suspense>;
      case 'student-life': return <Suspense fallback={<div className="min-h-[50vh]" />}><StudentLifePage setActivePage={setActivePage} /></Suspense>;
      case 'events': return <Suspense fallback={<div className="min-h-[50vh]" />}><EventsPage setActivePage={setActivePage} /></Suspense>;
      case 'gallery': return <Suspense fallback={<div className="min-h-[50vh]" />}><GalleryPage setActivePage={setActivePage} /></Suspense>;
      case 'notices': return <Suspense fallback={<div className="min-h-[50vh]" />}><NoticesPage setActivePage={setActivePage} /></Suspense>;
      case 'contact': return <Suspense fallback={<div className="min-h-[50vh]" />}><ContactPage /></Suspense>;
      default: return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between selection:bg-[#be185d] selection:text-white">
      <ScrollToTop activePage={activePage} />
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-grow">{renderPage()}</div>
      <Footer setActivePage={setActivePage} />
      {/* Vercel Performance & Insights Components */}
      <Analytics />
      <SpeedInsights />
    </div>
  );
}


