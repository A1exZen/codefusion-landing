import type { ReactNode } from 'react';
import type { ProjectContent, ServiceContent, SiteContent } from '../i18n/types';

export interface ModalSection {
  heading: string;
  body: ReactNode;
}

export interface ModalData {
  title: string;
  sections: ModalSection[];
}

export function serviceToModalData(service: ServiceContent, labels: SiteContent['modal']): ModalData {
  return {
    title: service.title,
    sections: [
      {
        heading: labels.whatsIncluded,
        body: (
          <ul className="service-list">
            {service.detail.whatsIncluded.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ),
      },
      {
        heading: labels.technologies,
        body: <p className="service-accent">{service.detail.technologies}</p>,
      },
      {
        heading: labels.whoItsFor,
        body: <p>{service.detail.whoItsFor}</p>,
      },
    ],
  };
}

export function projectToModalData(project: ProjectContent, labels: SiteContent['modal']): ModalData {
  return {
    title: project.title,
    sections: [
      {
        heading: labels.highlights,
        body: (
          <ul className="service-list">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ),
      },
      {
        heading: labels.client,
        body: <p className="service-accent">{project.client}</p>,
      },
      {
        heading: labels.result,
        body: <p>{project.result}</p>,
      },
    ],
  };
}
