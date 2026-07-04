import { useHeaderShadow } from '../hooks/useHeaderShadow';
import { useLanguage } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/types';

export function Header() {
  const scrolled = useHeaderShadow();
  const { lang, setLang, content } = useLanguage();

  return (
    <header className="header" style={{ boxShadow: scrolled ? '0 8px 24px rgba(15,23,42,.08)' : 'none' }}>
      <div className="container header-inner">
        <a href="#" className="logo">
          <img src="/images/logo.svg" alt="CodeFusion logo" />
        </a>

        <nav className="nav">
          <a href="#services">{content.nav.services}</a>
          <a href="#projects">{content.nav.projects}</a>
          <a href="#contact">{content.nav.contact}</a>
          <a href="#faq">{content.nav.faq}</a>
        </nav>

        <div className="header-actions">
          <LangSwitch lang={lang} onChange={setLang} />
          <a href="#contact" className="btn primary header-btn">
            {content.nav.discuss}
          </a>
        </div>
      </div>
    </header>
  );
}

function LangSwitch({ lang, onChange }: { lang: Lang; onChange: (lang: Lang) => void }) {
  return (
    <div className="lang-switch">
      <button className={lang === 'en' ? 'active' : ''} onClick={() => onChange('en')} aria-pressed={lang === 'en'}>
        EN
      </button>
      <button className={lang === 'ru' ? 'active' : ''} onClick={() => onChange('ru')} aria-pressed={lang === 'ru'}>
        RU
      </button>
    </div>
  );
}
