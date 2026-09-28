import React from 'react';
import HeroSection from '../sections/HeroSection';
import QuickInfoStrip from '../components/QuickInfoStrip';
import AboutSection from '../sections/AboutSection';
import LazySection from '../components/LazySection';

// Lazy-imported below-the-fold sections
const PrincipalSection = React.lazy(() => import('../sections/PrincipalSection'));
const AcademicsOverview = React.lazy(() => import('../sections/AcademicsOverview'));
const MediumsShowcase = React.lazy(() => import('../sections/MediumsShowcase'));
const VideosReelsSection = React.lazy(() => import('../sections/VideosReelsSection'));
const GallerySection = React.lazy(() => import('../sections/GallerySection'));
const AdmissionsTimeline = React.lazy(() => import('../sections/AdmissionsTimeline'));
const ContactSection = React.lazy(() => import('../sections/ContactSection'));

export default function HomePage({ setActivePage }) {
  const [activeMediumId, setActiveMediumId] = React.useState('english');

  return (
    <main className="w-full">
      {/* Above-the-fold — render immediately */}
      <HeroSection setActivePage={setActivePage} />
      <QuickInfoStrip setActivePage={setActivePage} />
      <AboutSection setActivePage={setActivePage} />

      {/* Below-the-fold — deferred mount via IntersectionObserver */}
      <LazySection fallbackHeight="40vh">
        <React.Suspense fallback={null}>
          <PrincipalSection />
        </React.Suspense>
      </LazySection>

      <LazySection fallbackHeight="50vh">
        <React.Suspense fallback={null}>
          <MediumsShowcase
            setActivePage={setActivePage}
            activeMediumId={activeMediumId}
            setActiveMediumId={setActiveMediumId}
          />
        </React.Suspense>
      </LazySection>

      <LazySection fallbackHeight="50vh">
        <React.Suspense fallback={null}>
          <AcademicsOverview
            setActivePage={setActivePage}
            activeMediumId={activeMediumId}
            setActiveMediumId={setActiveMediumId}
          />
        </React.Suspense>
      </LazySection>

      <LazySection fallbackHeight="40vh">
        <React.Suspense fallback={null}>
          <GallerySection setActivePage={setActivePage} />
        </React.Suspense>
      </LazySection>

      <LazySection fallbackHeight="40vh">
        <React.Suspense fallback={null}>
          <AdmissionsTimeline
            setActivePage={setActivePage}
            activeMediumId={activeMediumId}
            setActiveMediumId={setActiveMediumId}
          />
        </React.Suspense>
      </LazySection>

      <LazySection fallbackHeight="40vh">
        <React.Suspense fallback={null}>
          <VideosReelsSection setActivePage={setActivePage} />
        </React.Suspense>
      </LazySection>

      <LazySection fallbackHeight="30vh">
        <React.Suspense fallback={null}>
          <ContactSection />
        </React.Suspense>
      </LazySection>
    </main>
  );
}

