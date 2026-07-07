import { useEffect, useRef } from 'react';

/**
 * Drives a subtle vertical parallax as the page scrolls.
 *
 * The element's distance from the viewport centre is multiplied by `speed`
 * and written to the `--parallax-y` custom property. Consume it in CSS with
 * the standalone `translate` property (e.g. `translate: 0 var(--parallax-y)`)
 * so it composes cleanly with any existing `transform` (tilts, floats, etc.).
 *
 * speed ~0.06–0.14 reads as gentle depth; higher feels theme-park.
 */
export function useScrollParallax<T extends HTMLElement>(speed = 0.1, maxShift = 120) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const raw = (elementCenter - viewportCenter) * speed;
      const clamped = Math.max(-maxShift, Math.min(maxShift, raw));
      el.style.setProperty('--parallax-y', `${(-clamped).toFixed(1)}px`);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed, maxShift]);

  return ref;
}
