import { useEffect, useRef, useState, type ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  /** base speed in px per frame; magnitude only */
  speed?: number;
  /** 1 = scroll right, -1 = scroll left */
  direction?: 1 | -1;
  className?: string;
}

const HOVER_FACTOR = 0.14;
const EASE = 0.06;

export function Marquee({ children, speed = 0.5, direction = -1, className }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const targetSpeed = useRef(speed);
  const currentSpeed = useRef(speed);
  const offset = useRef(0);
  const [copies, setCopies] = useState(2);

  // Duplicating content creates the seamless-loop illusion, but a fixed
  // number of copies makes short lists visibly repeat right on screen.
  // Measure once and duplicate only as much as the viewport actually needs.
  useEffect(() => {
    const container = containerRef.current;
    const group = groupRef.current;
    if (!container || !group) return;

    const measure = () => {
      const groupWidth = group.offsetWidth;
      const containerWidth = container.offsetWidth;
      if (groupWidth === 0) return;
      const needed = Math.max(2, Math.ceil((containerWidth * 2) / groupWidth) + 1);
      setCopies((prev) => (prev === needed ? prev : needed));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    observer.observe(group);
    return () => observer.disconnect();
  }, [children]);

  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;
    if (!track || !group) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const step = () => {
      const groupWidth = group.offsetWidth;
      currentSpeed.current += (targetSpeed.current - currentSpeed.current) * EASE;

      let next = offset.current + currentSpeed.current * direction;
      if (groupWidth > 0) {
        next = next % groupWidth;
        if (next > 0) next -= groupWidth;
      }
      offset.current = next;
      track.style.transform = `translate3d(${next}px, 0, 0)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [direction]);

  const slow = () => (targetSpeed.current = speed * HOVER_FACTOR);
  const resume = () => (targetSpeed.current = speed);

  return (
    <div
      className={`marquee${className ? ` ${className}` : ''}`}
      ref={containerRef}
      onPointerEnter={slow}
      onPointerLeave={resume}
    >
      <div className="marquee-track" ref={trackRef}>
        {Array.from({ length: copies }).map((_, index) => (
          <div className="marquee-group" ref={index === 0 ? groupRef : undefined} aria-hidden={index > 0 || undefined} key={index}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
