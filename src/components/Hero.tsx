import { useTypingEffect } from '../hooks/useTypingEffect';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { content } = useLanguage();
  const typedText = useTypingEffect(content.hero.typingWords);
  const contentRef = useReveal<HTMLDivElement>();
  const visualRef = useReveal<HTMLDivElement>();

  return (
    <section className="hero">
      <div className="hero-bg">
        <span />
        <span />
        <span />
      </div>

      <div className="container hero-grid">
        <div className="hero-content" ref={contentRef}>
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

        <div className="hero-visual" ref={visualRef}>
          <div className="hero-device">
            <div className="hero-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}
