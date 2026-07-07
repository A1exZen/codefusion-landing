import type { CSSProperties } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useScrollParallax } from '../hooks/useScrollParallax';
import { useLanguage } from '../i18n/LanguageContext';
import type { TechGroupContent } from '../i18n/types';

function TechGroup({ group, index }: { group: TechGroupContent; index: number }) {
  const ref = useReveal<HTMLDivElement>(0.2);

  return (
    <div className="tech-group" ref={ref} style={{ '--i': index } as CSSProperties}>
      <span className="tech-group-label">{group.label}</span>
      <div className="tech-pills">
        {group.items.map((item, i) => (
          <span className="tech-pill" key={item} style={{ '--pi': i } as CSSProperties}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  const { content } = useLanguage();
  const titleRef = useReveal<HTMLHeadingElement>();
  const bgWordRef = useScrollParallax<HTMLDivElement>(0.12, 80);

  return (
    <section className="tech">
      <div className="bg-word" ref={bgWordRef}>
        innovation
      </div>
      <div className="container">
        <h2 className="section-title reveal-rise" ref={titleRef}>
          {content.techSection.title}
        </h2>

        <div className="tech-groups">
          {content.techSection.groups.map((group, index) => (
            <TechGroup group={group} index={index} key={group.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
