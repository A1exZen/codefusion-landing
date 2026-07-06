import { useRef } from 'react';
import type { CSSProperties, PointerEvent } from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { content } = useLanguage();
  const typedText = useTypingEffect(content.hero.typingWords);
  const contentRef = useReveal<HTMLDivElement>();
  const visualRef = useReveal<HTMLDivElement>();
  const deviceRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const handleSectionMove = (event: PointerEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mx', `${x.toFixed(2)}%`);
    el.style.setProperty('--my', `${y.toFixed(2)}%`);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return;
    const el = deviceRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    el.style.setProperty('--rx', `${(-y * 12).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${(x * 12).toFixed(2)}deg`);
  };

  const handlePointerLeave = () => {
    const el = deviceRef.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <section className="hero" ref={sectionRef} onPointerMove={handleSectionMove}>
      <div className="hero-bg">
        <span />
        <span />
        <span />
        <div className="hero-grid-lines" />
        <div className="hero-spotlight" />
      </div>

      <div className="container hero-grid">
        <div className="hero-content reveal-rise" ref={contentRef}>
          <span className="available-badge">
            <span className="available-dot" />
            {content.hero.availableBadge}
          </span>

          <h1>
            {content.hero.titleLine}
            <br /> <span className="typing">{typedText}</span>
          </h1>

          <p className="hero-subtitle">{content.hero.subtitle}</p>

          <div className="hero-actions">
            <a href="#contact" className="btn primary">
              {content.hero.discuss}
            </a>
            <a href="#services" className="btn ghost">
              {content.hero.ourServices}
            </a>
          </div>

          <ul className="hero-points">
            {content.hero.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div
          className="hero-visual reveal-pop"
          ref={visualRef}
          style={{ '--i': 1 } as CSSProperties}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
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
    </section>
  );
}
