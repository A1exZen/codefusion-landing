import { useLanguage } from '../i18n/LanguageContext';

export function SocialProof() {
  const { content } = useLanguage();

  return (
    <section className="social">
      <div className="container">
        <div className="social-strip">
          {content.social.map((stat) => (
            <div className="social-item" key={stat.label}>
              <span className="dot" />
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
