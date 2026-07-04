export type Lang = 'en' | 'ru';

export interface ServiceDetail {
  whatsIncluded: string[];
  technologies: string;
  whoItsFor: string;
}

export interface ServiceContent {
  id: string;
  title: string;
  description: string;
  tag: string;
  cardClassName: string;
  detail: ServiceDetail;
}

export interface ProjectContent {
  id: string;
  title: string;
  tags: string[];
  client: string;
  highlights: string[];
  result: string;
}

export interface TechGroupContent {
  label: string;
  items: string[];
}

export interface FaqItemContent {
  question: string;
  answer: string;
}

export interface StatContent {
  value: string;
  label: string;
}

export interface ProcessStepContent {
  number: string;
  title: string;
  description: string;
  className: string;
}

export interface WhyCardContent {
  title: string;
  description: string;
  className: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    services: string;
    projects: string;
    contact: string;
    faq: string;
    discuss: string;
  };
  hero: {
    titleLine: string;
    typingWords: string[];
    subtitle: string;
    discuss: string;
    ourServices: string;
    points: string[];
  };
  social: StatContent[];
  servicesSection: {
    title: string;
    items: ServiceContent[];
  };
  projectsSection: {
    title: string;
    items: ProjectContent[];
  };
  processSection: {
    title: string;
    steps: ProcessStepContent[];
  };
  whySection: {
    title: string;
    cards: WhyCardContent[];
  };
  techSection: {
    title: string;
    groups: TechGroupContent[];
  };
  faqSection: {
    title: string;
    items: FaqItemContent[];
  };
  contact: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    contactPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    validationError: string;
    sendError: string;
  };
  success: {
    title: string;
    body: string;
    button: string;
  };
  footer: {
    tagline: string;
    navHeading: string;
    contactHeading: string;
    copy: string;
  };
  modal: {
    whatsIncluded: string;
    technologies: string;
    whoItsFor: string;
    highlights: string;
    client: string;
    result: string;
  };
}
