import { useLanguage } from '../i18n/LanguageContext';

interface SuccessPopupProps {
  onClose: () => void;
}

export function SuccessPopup({ onClose }: SuccessPopupProps) {
  const { content } = useLanguage();

  return (
    <div className="success-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="success-box">
        <h3>{content.success.title}</h3>
        <p>{content.success.body}</p>
        <button className="btn primary" onClick={onClose}>
          {content.success.button}
        </button>
      </div>
    </div>
  );
}
