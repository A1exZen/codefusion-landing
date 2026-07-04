import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../i18n/LanguageContext';
import type { ProcessStepContent } from '../i18n/types';

function ProcessStep({ step }: { step: ProcessStepContent }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div className={step.className} ref={ref}>
      <span>{step.number}</span>
      <h4>{step.title}</h4>
      <p>{step.description}</p>
    </div>
  );
}

export function Process() {
  const { content } = useLanguage();

  return (
    <section className="process">
      <div className="bg-word">PROCESS</div>
      <div className="container">
        <h2 className="section-title">{content.processSection.title}</h2>

        <div className="process-grid">
          {content.processSection.steps.map((step) => (
            <ProcessStep step={step} key={step.number} />
          ))}
        </div>
      </div>
    </section>
  );
}
