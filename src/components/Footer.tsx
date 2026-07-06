import type { CSSProperties } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../i18n/LanguageContext';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function Footer() {
  const { content } = useLanguage();
  const brandRef = useReveal<HTMLDivElement>();
  const linksRef1 = useReveal<HTMLDivElement>();
  const linksRef2 = useReveal<HTMLDivElement>();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand reveal-rise" ref={brandRef}>
            <strong>CodeFusion</strong>
            <p>{content.footer.tagline}</p>
          </div>
          <div className="footer-links reveal-rise" ref={linksRef1} style={{ '--i': 1 } as CSSProperties}>
            <h4>{content.footer.navHeading}</h4>
            <a href="#services">{content.nav.services}</a>
            <a href="#projects">{content.nav.projects}</a>
            <a href="#contact">{content.nav.contact}</a>
            <a href="#faq">{content.nav.faq}</a>
          </div>
          <div className="footer-links reveal-rise" ref={linksRef2} style={{ '--i': 2 } as CSSProperties}>
            <h4>{content.footer.contactHeading}</h4>
            <a href="https://t.me/volvo_960exhh" target="_blank" rel="noopener">
              Telegram
            </a>
            <a href="mailto:codefusion.by@gmail.com">codefusion.by@gmail.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="copy">{content.footer.copy}</span>
          <button className="footer-top" onClick={scrollToTop} aria-label="Scroll to top">
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
