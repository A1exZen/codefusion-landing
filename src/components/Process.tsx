import type { CSSProperties } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../i18n/LanguageContext';

const VARIANTS = ['is-blue', 'is-light', 'is-dark', 'is-light'];

export function Process() {
  const { content } = useLanguage();
  const titleRef = useReveal<HTMLHeadingElement>();
  const steps = content.processSection.steps;

  return (
    <section className="process">
      <div className="container">
        <h2 className="section-title reveal-rise" ref={titleRef}>
          {content.processSection.title}
        </h2>

        <div className="process-stack">
          {steps.map((step, index) => (
            <article
              className={`process-card ${VARIANTS[index % VARIANTS.length]}`}
              style={{ '--i': index } as CSSProperties}
              key={step.number}
            >
              <div className="process-num">{step.number}</div>
              <div className="process-body">
                <span className="process-count">
                  {step.number} / {String(steps.length).padStart(2, '0')}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
