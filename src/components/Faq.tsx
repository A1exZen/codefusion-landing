import type { CSSProperties } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../i18n/LanguageContext';

function FaqEntry({ question, answer, index }: { question: string; answer: string; index: number }) {
  const ref = useReveal<HTMLDetailsElement>();

  return (
    <details className="faq-item reveal-rise" ref={ref} style={{ '--i': index % 4 } as CSSProperties}>
      <summary>
        <span className="faq-question">{question}</span>
        <span className="faq-icon" aria-hidden />
      </summary>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </details>
  );
}

export function Faq() {
  const { content } = useLanguage();
  const titleRef = useReveal<HTMLHeadingElement>();

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title reveal-rise" ref={titleRef}>
          {content.faqSection.title}
        </h2>

        <div className="faq-list">
          {content.faqSection.items.map((item, index) => (
            <FaqEntry question={item.question} answer={item.answer} index={index} key={item.question} />
          ))}
        </div>
      </div>
    </section>
  );
}
