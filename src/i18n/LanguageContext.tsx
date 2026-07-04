import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { en } from './en';
import { ru } from './ru';
import type { Lang, SiteContent } from './types';

const STORAGE_KEY = 'codefusion-lang';
const CONTENT: Record<Lang, SiteContent> = { en, ru };

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  content: SiteContent;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectInitialLang(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'ru') return stored;
  return navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  function setLang(next: Lang) {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  const content = CONTENT[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = content.meta.title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', content.meta.description);
  }, [lang, content]);

  const value = useMemo(() => ({ lang, setLang, content }), [lang, content]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
