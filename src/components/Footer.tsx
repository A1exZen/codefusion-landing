import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <strong>CodeFusion</strong>
            <p>{content.footer.tagline}</p>
          </div>
          <div className="footer-links">
            <h4>{content.footer.navHeading}</h4>
            <a href="#services">{content.nav.services}</a>
            <a href="#projects">{content.nav.projects}</a>
            <a href="#contact">{content.nav.contact}</a>
            <a href="#faq">{content.nav.faq}</a>
          </div>
          <div className="footer-links">
            <h4>{content.footer.contactHeading}</h4>
            <a href="https://t.me/volvo_960exhh" target="_blank" rel="noopener">
              Telegram
            </a>
            <a href="mailto:codefusion.by@gmail.com">codefusion.by@gmail.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="copy">{content.footer.copy}</span>
        </div>
      </div>
    </footer>
  );
}
