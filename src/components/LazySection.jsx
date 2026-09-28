import React, { useRef, useState, useEffect } from 'react';

/**
 * LazySection — renders children only after the placeholder scrolls
 * near the viewport (rootMargin = 300px below). This prevents all
 * heavy sections from mounting simultaneously on first paint.
 */
export default function LazySection({ children, fallbackHeight = '60vh', className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (visible) return <>{children}</>;

  return (
    <div
      ref={ref}
      className={className}
      style={{ minHeight: fallbackHeight }}
      aria-hidden="true"
    />
  );
}
