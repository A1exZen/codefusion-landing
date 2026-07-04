import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../i18n/LanguageContext';
import type { ServiceContent, SiteContent } from '../i18n/types';
import { serviceToModalData, type ModalData } from '../utils/modalData';

interface ServicesProps {
  onOpenDetail: (data: ModalData) => void;
}

function ServiceCard({
  service,
  labels,
  onOpenDetail,
}: {
  service: ServiceContent;
  labels: SiteContent['modal'];
  onOpenDetail: (data: ModalData) => void;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div className={service.cardClassName} ref={ref}>
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

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">{content.servicesSection.title}</h2>

        <div className="bento">
          {content.servicesSection.items.map((service) => (
            <ServiceCard service={service} labels={content.modal} onOpenDetail={onOpenDetail} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
