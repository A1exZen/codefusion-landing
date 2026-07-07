import { useRef } from 'react';
import type { CSSProperties, PointerEvent } from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { useScrollParallax } from '../hooks/useScrollParallax';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { content } = useLanguage();
  const typedText = useTypingEffect(content.hero.typingWords);
  const sectionRef = useRef<HTMLElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);
  const visualRef = useScrollParallax<HTMLDivElement>(0.07, 90);

  const handleSectionMove = (event: PointerEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    // spotlight follows the cursor…
    el.style.setProperty('--mx', `${(px * 100).toFixed(2)}%`);
    el.style.setProperty('--my', `${(py * 100).toFixed(2)}%`);
    // …and a centred -0.5..0.5 signal drives the depth parallax
    el.style.setProperty('--px', (px - 0.5).toFixed(3));
    el.style.setProperty('--py', (py - 0.5).toFixed(3));

    if (event.pointerType === 'mouse') {
      const device = deviceRef.current;
      if (device) {
        device.style.setProperty('--rx', `${((0.5 - py) * 10).toFixed(2)}deg`);
        device.style.setProperty('--ry', `${((px - 0.5) * 10).toFixed(2)}deg`);
      }
    }
  };

  const handleSectionLeave = () => {
    const el = sectionRef.current;
    if (el) {
      el.style.setProperty('--px', '0');
      el.style.setProperty('--py', '0');
    }
    const device = deviceRef.current;
    if (device) {
      device.style.setProperty('--rx', '0deg');
      device.style.setProperty('--ry', '0deg');
    }
  };

  return (
    <section
      className="hero"
      ref={sectionRef}
      onPointerMove={handleSectionMove}
      onPointerLeave={handleSectionLeave}
    >
      <div className="hero-bg">
        <span className="hero-orb hero-orb--1" />
        <span className="hero-orb hero-orb--2" />
        <span className="hero-orb hero-orb--3" />
        <div className="hero-grid-lines" />
        <div className="hero-spotlight" />
      </div>

      <div className="container hero-grid">
        <div className="hero-content">
          <span className="available-badge hero-anim" style={{ '--d': '0.05s' } as CSSProperties}>
            <span className="available-dot" />
            {content.hero.availableBadge}
          </span>

          <h1 className="hero-title">
            <span className="hero-title-line hero-anim" style={{ '--d': '0.15s' } as CSSProperties}>
              {content.hero.titleLine}
            </span>
            <span className="hero-title-typed hero-anim" style={{ '--d': '0.28s' } as CSSProperties}>
              <span className="hero-typed-word">{typedText}</span>
              <span className="hero-caret" aria-hidden="true" />
            </span>
          </h1>

          <p className="hero-subtitle hero-anim" style={{ '--d': '0.42s' } as CSSProperties}>
            {content.hero.subtitle}
          </p>

          <div className="hero-actions hero-anim" style={{ '--d': '0.54s' } as CSSProperties}>
            <a href="#contact" className="btn primary">
              {content.hero.discuss}
            </a>
            <a href="#services" className="btn ghost">
              {content.hero.ourServices}
            </a>
          </div>

          <ul className="hero-points hero-anim" style={{ '--d': '0.66s' } as CSSProperties}>
            {content.hero.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="hero-visual hero-anim" ref={visualRef} style={{ '--d': '0.3s' } as CSSProperties}>
          <div className="hero-visual-inner">
            <div className="hero-device" ref={deviceRef}>
              <div className="hero-glow" />
            </div>

            <span className="hero-chip hero-chip--rating">
              ⭐ 4.9 <em>{content.hero.chipRating}</em>
            </span>
            <span className="hero-chip hero-chip--live">
              🚀 <em>{content.hero.chipLive}</em>
            </span>
          </div>
        </div>
      </div>

      <a href="#services" className="hero-scroll" aria-label="Scroll to services">
        <span className="hero-scroll-track">
          <span className="hero-scroll-thumb" />
        </span>
      </a>
    </section>
  );
}
