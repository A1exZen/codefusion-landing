import { useState, type FormEvent } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useScrollParallax } from '../hooks/useScrollParallax';
import { useLanguage } from '../i18n/LanguageContext';
import { SuccessPopup } from './SuccessPopup';

export function ContactCta() {
  const { content } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const introRef = useReveal<HTMLDivElement>();
  const formRef = useReveal<HTMLDivElement>();
  const bgWordRef = useScrollParallax<HTMLDivElement>(0.12, 80);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const contact = String(formData.get('contact') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!name || !contact) {
      alert(content.contact.validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, contact, message }),
      });

      if (!response.ok) throw new Error('Request failed');

      setShowSuccess(true);
      form.reset();
    } catch (err) {
      console.error(err);
      alert(content.contact.sendError);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="cta">
      <div className="bg-word bg-word--light" ref={bgWordRef}>
        contact
      </div>
      <div className="cta-bg">
        <span />
        <span />
      </div>

      <div className="container cta-grid">
        <div className="cta-intro reveal-left" ref={introRef}>
          <h2>{content.contact.title}</h2>
          <p>{content.contact.subtitle}</p>

          <ul className="cta-points">
            {content.contact.points.map((point) => (
              <li key={point}>
                <span className="cta-point-icon">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="cta-form-card reveal-right" ref={formRef}>
          <form className="form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder={content.contact.namePlaceholder} required />
            <input type="text" name="contact" placeholder={content.contact.contactPlaceholder} required />
            <textarea name="message" placeholder={content.contact.messagePlaceholder} rows={4} />
            <button type="submit" className="btn primary" disabled={isSubmitting}>
              {isSubmitting ? content.contact.sending : content.contact.send}
            </button>
          </form>
        </div>
      </div>

      {showSuccess && <SuccessPopup onClose={() => setShowSuccess(false)} />}
    </section>
  );
}
