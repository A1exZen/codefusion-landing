import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../i18n/LanguageContext';

function FaqEntry({ question, answer }: { question: string; answer: string }) {
  const ref = useReveal<HTMLDetailsElement>();

  return (
    <details ref={ref}>
      <summary>{question}</summary>
      <p>{answer}</p>
    </details>
  );
}

export function Faq() {
  const { content } = useLanguage();

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">{content.faqSection.title}</h2>

        {content.faqSection.items.map((item) => (
          <FaqEntry question={item.question} answer={item.answer} key={item.question} />
        ))}
      </div>
    </section>
  );
}
