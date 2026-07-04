import { useLanguage } from '../i18n/LanguageContext';

export function TechStack() {
  const { content } = useLanguage();

  return (
    <section className="tech">
      <div className="bg-word">innovation</div>
      <div className="container">
        <h2 className="section-title">{content.techSection.title}</h2>

        <div className="tech-groups">
          {content.techSection.groups.map((group) => (
            <div className="tech-group" key={group.label}>
              <h4>{group.label}</h4>
              <div className="tech-grid">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
