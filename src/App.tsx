import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { WhyUs } from './components/WhyUs';
import { TechStack } from './components/TechStack';
import { Faq } from './components/Faq';
import { ContactCta } from './components/ContactCta';
import { Footer } from './components/Footer';
import { NoiseOverlay } from './components/NoiseOverlay';
import { DetailModal } from './components/DetailModal';
import { LanguageProvider } from './i18n/LanguageContext';
import type { ModalData } from './utils/modalData';

function useSmoothAnchorScroll() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}

export default function App() {
  const [activeDetail, setActiveDetail] = useState<ModalData | null>(null);
  useSmoothAnchorScroll();

  return (
    <LanguageProvider>
      <Header />
      <Hero />
      <SocialProof />
      <Services onOpenDetail={setActiveDetail} />
      <Projects onOpenDetail={setActiveDetail} />
      <Process />
      <WhyUs />
      <TechStack />
      <Faq />
      <ContactCta />
      <Footer />

      <NoiseOverlay />
      <DetailModal data={activeDetail} onClose={() => setActiveDetail(null)} />
    </LanguageProvider>
  );
}
