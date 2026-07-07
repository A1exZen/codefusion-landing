import type { SiteContent } from './types';

export const en: SiteContent = {
  meta: {
    title: 'CodeFusion',
    description:
      'CodeFusion is a full-cycle software agency serving clients across Europe, North America and the CIS: web, mobile, AI/LLM engineering and design, from prototype to production.',
  },
  nav: {
    services: 'Services',
    projects: 'Projects',
    contact: 'Contact',
    faq: 'FAQ',
    discuss: 'Discuss a Project',
  },
  hero: {
    titleLine: 'WE TURN IDEAS INTO',
    typingWords: ['websites', 'mobile apps', 'web applications', 'AI-powered systems', 'CRM & ERP systems'],
    subtitle: 'Software, mobile and AI-powered products for businesses across Europe, North America and the CIS.',
    discuss: 'Discuss a Project →',
    ourServices: 'Our Services',
    points: ['⚡ From idea to launch in 4–8 weeks', '🎯 Turnkey or embedded in your team', '🔧 24/7 Support'],
    availableBadge: 'Available for new projects',
    chipRating: 'Client rating',
    chipLive: 'Live project shipped',
  },
  social: [
    { value: '20+', label: 'projects delivered' },
    { value: '3+ years', label: 'hands-on engineering experience' },
    { value: '95%', label: 'client retention rate' },
  ],
  servicesSection: {
    title: 'What We Do',
    items: [
      {
        id: 'design',
        title: 'Design & Prototyping',
        description: 'UX research, interactive Figma prototypes and design systems, validated before a line of code is written',
        tag: 'From 1 week',
        cardClassName: 'card big blue',
        detail: {
          whatsIncluded: [
            'UX research and competitive analysis',
            'User flows and interactive Figma prototypes',
            'Design systems and UI kits',
            'Dev-ready handoff specifications',
          ],
          technologies: 'Figma, UX Research, Design Systems, Prototyping, UI Kits',
          whoItsFor:
            'Startups and product teams who want to validate direction and avoid costly late-stage revisions before development begins.',
        },
      },
      {
        id: 'ai',
        title: 'AI & Machine Learning',
        description: 'LLM integration, RAG pipelines and fine-tuned models built on your own data',
        tag: 'Custom',
        cardClassName: 'card tall dark',
        detail: {
          whatsIncluded: [
            'LLM integration (OpenAI, Anthropic)',
            'RAG architecture and vector databases',
            'Model fine-tuning on custom datasets',
            'Computer vision pipelines',
          ],
          technologies: 'Python, OpenAI API, Anthropic API, LangChain, PyTorch, RAG, Fine-tuning',
          whoItsFor:
            'Companies looking to embed AI assistants, automate document- or image-heavy workflows, or build on top of their own proprietary data.',
        },
      },
      {
        id: 'web',
        title: 'Web Development',
        description: 'Landing pages, corporate websites, and web apps focused on conversion',
        tag: 'From 2 weeks',
        cardClassName: 'card',
        detail: {
          whatsIncluded: [
            'Task and business goals analysis',
            'UX structure and user journey mapping',
            'UI design in a modern digital style',
            'Responsive layout (desktop / tablet / mobile)',
            'Interactions and micro-animations',
            'Basic SEO setup and page speed optimisation',
          ],
          technologies: 'React, Next.js, Vue, Nuxt.js, TypeScript, Tailwind CSS, NestJS / Node.js, PostgreSQL',
          whoItsFor:
            'Startups, businesses, SaaS products, marketing campaigns, and companies that care about conversion, speed and visual quality.',
        },
      },
      {
        id: 'mobile',
        title: 'Mobile Applications',
        description: 'iOS and Android, native and cross-platform development',
        tag: 'iOS • Android',
        cardClassName: 'card',
        detail: {
          whatsIncluded: [
            'Logic and user journey design',
            'UX/UI design for mobile',
            'iOS and Android development',
            'Bluetooth BLE and IoT device connectivity',
            'API and backend system integrations',
            'Push notifications, testing and store publication',
          ],
          technologies: 'React Native, Expo, Swift, Kotlin, Firebase, REST / GraphQL API, Bluetooth BLE',
          whoItsFor: 'Startups, service platforms, marketplaces and connected-hardware products that need a fast go-to-market.',
        },
      },
      {
        id: 'software',
        title: 'Software Development',
        description: 'CRM, ERP and complex internal systems tailored to your business processes',
        tag: 'Custom',
        cardClassName: 'card',
        detail: {
          whatsIncluded: [
            'Business process analysis',
            'System architecture design',
            'Web panels and internal service development',
            'Role-based access control',
            'Third-party system integrations',
            'Documentation and team training',
          ],
          technologies: 'NestJS, Node.js, Java / Spring Boot, Python (FastAPI), PostgreSQL, Redis, Docker',
          whoItsFor: 'Companies with internal workflows that need CRM, ERP, admin panels and custom systems built for business growth.',
        },
      },
      {
        id: 'bots',
        title: 'Telegram Bots',
        description: 'Automation, Mini Apps, support bots',
        tag: 'From 1 week',
        cardClassName: 'card wide blue-soft',
        detail: {
          whatsIncluded: [
            'Conversation flow design',
            'Bot development of any complexity',
            'CRM, website and service integrations',
            'Telegram Mini Apps / Web Apps',
            'Admin management panels',
          ],
          technologies: 'Node.js, Python, Telegram Bot API, Telegram Web Apps, Webhooks',
          whoItsFor: 'Businesses, support services, info-products, startups and e-commerce projects.',
        },
      },
      {
        id: 'support',
        title: 'Remote Support',
        description: 'Monitoring, updates and technical support 24/7',
        tag: '24/7',
        cardClassName: 'card',
        detail: {
          whatsIncluded: [
            'Technical support 24/7',
            'Uptime monitoring and observability',
            'Updates and improvements',
            'Bug fixing and optimisation',
            'Project scaling',
          ],
          technologies: 'Docker, Kubernetes, CI/CD pipelines, AWS, GCP',
          whoItsFor: 'Live production projects, post-MVP startups, and companies without an in-house IT team.',
        },
      },
    ],
  },
  projectsSection: {
    title: 'Recently Completed Projects',
    items: [
      {
        id: 'auk-mini-2',
        title: 'Auk Mini 2 — Smart Indoor Garden App',
        tags: ['IoT', 'React Native', 'Bluetooth BLE'],
        client: 'Auk (Norway) · Consumer hardware · 200,000+ users across 30 countries',
        highlights: [
          "Full UX research phase and an interactive Figma prototype aligned with Auk's brand guidelines before development began.",
          'Cross-platform iOS and Android app in React Native with Bluetooth BLE connectivity for real-time device control (lighting schedules, growth modes, intensity).',
          "AI-powered in-app support chat using a RAG architecture over Auk's article knowledge base, reducing support load.",
          'Personalised growth notifications and care tips based on plant lifecycle stage and device telemetry.',
        ],
        result: 'Shipped to 200,000+ users across 30 countries.',
      },
      {
        id: 'medvision',
        title: 'MedVision — Clinical Imaging Diagnostic Platform',
        tags: ['HealthTech', 'Python', 'Fine-tuned CNN', 'Next.js'],
        client: 'Medical SaaS · AI-assisted radiology workflow · Web platform',
        highlights: [
          'UX research with radiologists to map existing diagnostic workflows and friction points.',
          "DICOM ingestion and processing pipeline integrated with a custom-trained CNN fine-tuned on the client's proprietary dataset.",
          'Clinical interface with heatmap visualisation and confidence scoring per finding, prioritising physician review queues.',
          'Role-based access control, full audit logging, GDPR-compliant data handling.',
        ],
        result: 'Reduced preliminary image analysis time by ~70%.',
      },
      {
        id: 'legalflow',
        title: 'LegalFlow — AI-Powered Legal Document Automation',
        tags: ['LegalTech', 'LLM / GPT-4', 'RAG', 'NestJS', 'Next.js'],
        client: 'Legal SaaS · Contract generation and risk analysis · CRM integration',
        highlights: [
          "Complete product UX designed through stakeholder interviews and workflow mapping across the firm's document lifecycle.",
          "AI assistant on GPT-4 with a RAG pipeline over the firm's legal knowledge base — context-aware document generation in under 30 seconds.",
          "Automated contract risk analysis returning structured JSON, integrated directly into the firm's CRM via REST API.",
          'Multi-tier access control, version history, inline commenting, one-click export to PDF and DOCX.',
        ],
        result: 'Cut weekly document preparation time from 40+ hours to under 8.',
      },
    ],
  },
  processSection: {
    title: 'How We Work',
    steps: [
      {
        number: '01',
        title: 'Discovery',
        description: 'UX research, technical scoping and a clear requirements and architecture plan before any estimate is locked in',
        className: 'step blue',
      },
      {
        number: '02',
        title: 'Design & Prototype',
        description: 'Wireframes to a fully interactive Figma prototype, validated with stakeholders before a line of code is written',
        className: 'step',
      },
      {
        number: '03',
        title: 'Build & Integrate',
        description:
          'Sprint-based development with code review, CI/CD pipelines and continuous QA — you see working software every sprint, not just at the end',
        className: 'step dark',
      },
      {
        number: '04',
        title: 'Launch & Support',
        description: 'Staged rollout with monitoring from day one, a warranty period for fixes, and 24/7 support on retainer if you need it',
        className: 'step',
      },
    ],
  },
  whySection: {
    title: 'Why CodeFusion',
    subtitle: 'See the difference before you commit to a team.',
    columns: [
      {
        label: 'CodeFusion',
        highlight: true,
        items: [
          { text: 'Senior full-cycle team, not a single freelancer', positive: true },
          { text: 'Fixed price and timeline, agreed upfront', positive: true },
          { text: 'We start within days, not weeks', positive: true },
          { text: 'Direct communication with your engineers', positive: true },
          { text: 'Full source code and IP ownership', positive: true },
          { text: '24/7 support after launch', positive: true },
        ],
      },
      {
        label: 'Freelancers & Agencies',
        highlight: false,
        items: [
          { text: 'One person juggling multiple clients', positive: false },
          { text: 'Unpredictable hourly billing', positive: false },
          { text: 'Waitlisted for weeks before work starts', positive: false },
          { text: 'Messages routed through account managers', positive: false },
          { text: 'Vendor lock-in on code and infrastructure', positive: false },
          { text: 'Support ends the moment the project ships', positive: false },
        ],
      },
    ],
  },
  techSection: {
    title: 'Technologies',
    groups: [
      { label: 'Design', items: ['Figma', 'UX Research', 'Design Systems', 'Prototyping', 'UI Kit'] },
      {
        label: 'Frontend',
        items: [
          'React',
          'Next.js',
          'Vue',
          'Nuxt.js',
          'TypeScript',
          'Tailwind CSS',
          'Redux / Zustand',
          'React Native',
          'Expo',
          'Telegram Web Apps',
        ],
      },
      { label: 'Backend', items: ['NestJS', 'Node.js', 'Java / Spring Boot', 'REST', 'GraphQL', 'WebSocket'] },
      { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
      {
        label: 'AI / ML',
        items: ['Python', 'OpenAI API', 'Anthropic API', 'LangChain', 'PyTorch', 'RAG', 'Fine-tuning', 'Vector Databases'],
      },
      {
        label: 'AI-Assisted Engineering',
        items: ['Claude Code', 'Codex', 'GitHub Copilot', 'Cursor'],
      },
      { label: 'Infra / DevOps', items: ['Docker', 'Kubernetes', 'CI/CD (GitHub Actions)', 'AWS', 'GCP', 'Vercel', 'Terraform'] },
    ],
  },
  faqSection: {
    title: 'FAQ',
    items: [
      {
        question: "What's the process for starting a project?",
        answer:
          "We start with a short discovery call to understand your goals, then send a proposal with scope, timeline and cost. Once you approve it, we sign an NDA and kick off with sprint planning.",
      },
      {
        question: 'How is pricing determined, and can payments be split into milestones?',
        answer:
          'Cost depends on scope and complexity — a fixed price for well-defined projects, or time-and-materials for evolving ones. A first consultation and estimate are free. Payments are typically split into milestones: 30% at kickoff, 40% after development, 30% after launch and sign-off.',
      },
      {
        question: 'How long does a typical project take?',
        answer:
          'A landing page ships in 2–3 weeks, a mobile or web app in 6–10 weeks, and AI-powered systems vary with data and integration scope. We always confirm a concrete timeline before starting.',
      },
      {
        question: 'Do you work with international clients?',
        answer:
          'Yes — we work with clients across Europe, North America and the CIS, communicate in English, and support EU/US time zones with async updates when needed.',
      },
      {
        question: 'Do you sign NDAs and assign IP rights?',
        answer:
          'Yes. An NDA and IP assignment agreement are standard before any project details are shared, and you receive full source code and rights to the product on delivery.',
      },
      {
        question: 'Can you join our existing team or extend our codebase?',
        answer:
          "Yes — we regularly work embedded in a client's team or extend an existing codebase, not just build greenfield projects from scratch.",
      },
      {
        question: 'How do you handle data privacy in AI/LLM projects?',
        answer:
          'We design AI features around your data governance requirements — private model endpoints, no training on client data by default, and role-based access control where needed.',
      },
      {
        question: 'Do you offer support after launch?',
        answer:
          'Yes. Every fixed-scope project includes a warranty period for fixes, and we offer ongoing retainer or pay-per-task support afterward.',
      },
    ],
  },
  contact: {
    title: 'Ready to Discuss Your Project?',
    subtitle: "Leave a request — we'll get back to you within 2 hours",
    points: [
      'Reply within 2 hours, free scoping call included',
      'NDA signed before any details are shared',
      'Fixed price and timeline before you commit',
    ],
    namePlaceholder: 'Your name',
    contactPlaceholder: 'Telegram or Email',
    messagePlaceholder: 'Tell us about your project',
    send: 'Send Request',
    sending: 'Sending…',
    validationError: 'Please fill in your name and contact details',
    sendError: 'Sending failed, please try again later',
  },
  success: {
    title: 'Request Sent ✅',
    body: "We'll get back to you within 2 hours",
    button: 'Got it',
  },
  footer: {
    tagline: 'Full-cycle software, mobile & AI engineering studio.',
    navHeading: 'Navigation',
    contactHeading: 'Get in Touch',
    copy: '© 2026 CodeFusion. All rights reserved.',
  },
  modal: {
    whatsIncluded: "What's included",
    technologies: 'Technologies',
    whoItsFor: "Who it's for",
    highlights: 'Highlights',
    client: 'Client',
    result: 'Result',
  },
};
