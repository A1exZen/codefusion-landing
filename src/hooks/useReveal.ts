import { useEffect, useRef } from 'react';

/**
 * Reveals an element once it scrolls into view.
 *
 * `rootMargin` has a small negative bottom (-8%) on purpose: the element
 * triggers just after it peeks in from the bottom, so the entrance animation
 * plays on-screen — but without a long wait before it starts.
 */
export function useReveal<T extends HTMLElement>(
  threshold = 0,
  rootMargin = '0px 0px -8% 0px',
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-revealed');
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
