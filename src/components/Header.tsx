import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useHeaderShadow } from '../hooks/useHeaderShadow';
import { useLanguage } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/types';

export function Header() {
  const scrolled = useHeaderShadow();
  const { lang, setLang, content } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '#services', label: content.nav.services },
    { href: '#projects', label: content.nav.projects },
    { href: '#contact', label: content.nav.contact },
    { href: '#faq', label: content.nav.faq },
  ];

  return (
    <motion.header
      className={`header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container header-inner">
        <motion.a
          href="#"
          className="logo"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <img src="/images/logo.svg" alt="CodeFusion logo" />
        </motion.a>

        <PillNav links={links} />

        <div className="header-actions">
          <LangSwitch lang={lang} onChange={setLang} />
          <motion.a
            href="#contact"
            className="btn primary header-btn"
            whileHover={{ scale: 1.04, boxShadow: '0 16px 32px rgba(0,48,73,.35)' }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            {content.nav.discuss}
          </motion.a>

          <button
            className={`menu-toggle${menuOpen ? ' active' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <nav className="mobile-nav-links">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.25 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="btn primary mobile-nav-cta"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + links.length * 0.05, duration: 0.25 }}
              >
                {content.nav.discuss}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function PillNav({ links }: { links: { href: string; label: string }[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  function handleEnter(i: number) {
    const el = linkRefs.current[i];
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
    setHovered(i);
  }

  return (
    <nav className="nav-pill" onMouseLeave={() => setHovered(null)}>
      <motion.span
        className="nav-hover-bg"
        animate={{ x: pill.left, width: pill.width, opacity: hovered !== null ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 32, mass: 0.6 }}
      />
      {links.map((link, i) => (
        <a
          key={link.href}
          ref={(el) => (linkRefs.current[i] = el)}
          href={link.href}
          onMouseEnter={() => handleEnter(i)}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

function LangSwitch({ lang, onChange }: { lang: Lang; onChange: (lang: Lang) => void }) {
  return (
    <div className="lang-switch">
      {(['en', 'ru'] as Lang[]).map((l) => (
        <button
          key={l}
          className={lang === l ? 'active' : ''}
          onClick={() => onChange(l)}
          aria-pressed={lang === l}
        >
          {lang === l && (
            <motion.span
              layoutId="lang-active"
              className="lang-active-bg"
              transition={{ type: 'spring', stiffness: 500, damping: 32 }}
            />
          )}
          <span className="lang-label">{l.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}
