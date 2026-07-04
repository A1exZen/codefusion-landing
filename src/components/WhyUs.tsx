import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../i18n/LanguageContext';
import type { WhyCardContent } from '../i18n/types';

function WhyCard({ card }: { card: WhyCardContent }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div className={card.className} ref={ref}>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
    </div>
  );
}

export function WhyUs() {
  const { content } = useLanguage();

  return (
    <section className="why">
      <div className="container">
        <h2 className="section-title">{content.whySection.title}</h2>

        <div className="why-grid">
          {content.whySection.cards.map((card) => (
            <WhyCard card={card} key={card.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
