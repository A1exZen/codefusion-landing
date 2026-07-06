import type { CSSProperties } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../i18n/LanguageContext';
import type { ComparisonColumn } from '../i18n/types';

function ComparisonCard({ column, index }: { column: ComparisonColumn; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  const direction = index === 0 ? 'reveal-left' : 'reveal-right';

  return (
    <div className={`comparison-card${column.highlight ? ' highlight' : ''} ${direction}`} ref={ref}>
      <h3>{column.label}</h3>
      <ul className="comparison-list">
        {column.items.map((item, itemIndex) => (
          <li
            className={item.positive ? 'is-positive' : 'is-negative'}
            style={{ '--i': itemIndex } as CSSProperties}
            key={item.text}
          >
            <span className="comparison-icon">{item.positive ? '✓' : '✕'}</span>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WhyUs() {
  const { content } = useLanguage();
  const titleRef = useReveal<HTMLHeadingElement>();
  const subtitleRef = useReveal<HTMLParagraphElement>();

  return (
    <section className="why">
      <div className="container">
        <h2 className="section-title reveal-rise" ref={titleRef}>
          {content.whySection.title}
        </h2>
        <p className="why-subtitle reveal-rise" ref={subtitleRef} style={{ '--i': 1 } as CSSProperties}>
          {content.whySection.subtitle}
        </p>

        <div className="comparison-grid">
          {content.whySection.columns.map((column, index) => (
            <ComparisonCard column={column} index={index} key={column.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
