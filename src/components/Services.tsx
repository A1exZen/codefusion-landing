import { useRef } from 'react';
import type { CSSProperties, PointerEvent } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../i18n/LanguageContext';
import type { ServiceContent, SiteContent } from '../i18n/types';
import { serviceToModalData, type ModalData } from '../utils/modalData';

interface ServicesProps {
  onOpenDetail: (data: ModalData) => void;
}

function ServiceCard({
  service,
  index,
  labels,
  onOpenDetail,
}: {
  service: ServiceContent;
  index: number;
  labels: SiteContent['modal'];
  onOpenDetail: (data: ModalData) => void;
}) {
  const revealRef = useReveal<HTMLDivElement>();
  const cardRef = useRef<HTMLDivElement | null>(null);

  const setRefs = (node: HTMLDivElement | null) => {
    revealRef.current = node;
    cardRef.current = node;
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <div
      className={`${service.cardClassName} reveal-bento`}
      ref={setRefs}
      style={{ '--i': index } as CSSProperties}
      onPointerMove={handlePointerMove}
    >
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <span className="tag">{service.tag}</span>
      <button className="service-open" onClick={() => onOpenDetail(serviceToModalData(service, labels))}>
        <span>↗</span>
      </button>
    </div>
  );
}

export function Services({ onOpenDetail }: ServicesProps) {
  const { content } = useLanguage();
  const titleRef = useReveal<HTMLHeadingElement>();

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title reveal-rise" ref={titleRef}>
          {content.servicesSection.title}
        </h2>

        <div className="bento">
          {content.servicesSection.items.map((service, index) => (
            <ServiceCard service={service} index={index} labels={content.modal} onOpenDetail={onOpenDetail} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
