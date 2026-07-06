import { useEffect, useRef, useState } from 'react';

function formatAt(value: string, match: RegExpMatchArray, current: number) {
  const decimals = (match[0].split('.')[1] || '').length;
  const prefix = value.slice(0, match.index);
  const suffix = value.slice((match.index ?? 0) + match[0].length);
  return `${prefix}${current.toFixed(decimals)}${suffix}`;
}

export function useCountUp<T extends HTMLElement>(value: string, duration = 1600) {
  const ref = useRef<T>(null);
  const match = value.match(/\d+(\.\d+)?/);
  const [display, setDisplay] = useState(() => (match ? formatAt(value, match, 0) : value));

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;

    const target = parseFloat(match[0]);
    let frame: number;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(formatAt(value, match, target * eased));
          if (progress < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return [ref, display] as const;
}
