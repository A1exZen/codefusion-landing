import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../i18n/LanguageContext';
import type { ProjectContent, SiteContent } from '../i18n/types';
import { projectToModalData, type ModalData } from '../utils/modalData';

interface ProjectsProps {
  onOpenDetail: (data: ModalData) => void;
}

function ProjectCard({
  project,
  labels,
  onOpenDetail,
}: {
  project: ProjectContent;
  labels: SiteContent['modal'];
  onOpenDetail: (data: ModalData) => void;
}) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div className="card project-card" ref={ref}>
      <div className="project-meta">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <h3>{project.title}</h3>
      <p className="project-client">{project.client}</p>

      <ul className="project-highlights">
        {project.highlights.slice(0, 3).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button className="service-open" onClick={() => onOpenDetail(projectToModalData(project, labels))}>
        <span>↗</span>
      </button>
    </div>
  );
}

export function Projects({ onOpenDetail }: ProjectsProps) {
  const { content } = useLanguage();

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">{content.projectsSection.title}</h2>

        <div className="projects-grid">
          {content.projectsSection.items.map((project) => (
            <ProjectCard project={project} labels={content.modal} onOpenDetail={onOpenDetail} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
