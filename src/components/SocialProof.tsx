import { useLanguage } from '../i18n/LanguageContext';
import { useCountUp } from '../hooks/useCountUp';
import type { StatContent } from '../i18n/types';

function SocialStat({ stat }: { stat: StatContent }) {
  const [ref, display] = useCountUp<HTMLElement>(stat.value);

  return (
    <div className="social-item">
      <span className="dot" />
      <strong ref={ref}>{display}</strong>
      <p>{stat.label}</p>
    </div>
  );
}

export function SocialProof() {
  const { content } = useLanguage();

  return (
    <section className="social">
      <div className="container">
        <div className="social-strip">
          {content.social.map((stat) => (
            <SocialStat stat={stat} key={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
