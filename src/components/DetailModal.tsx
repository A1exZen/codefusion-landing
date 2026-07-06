import type { CSSProperties } from 'react';
import type { ModalData } from '../utils/modalData';

interface DetailModalProps {
  data: ModalData | null;
  onClose: () => void;
}

export function DetailModal({ data, onClose }: DetailModalProps) {
  return (
    <div className={`service-modal${data ? ' active' : ''}`}>
      <div className="service-overlay" onClick={onClose} />
      <div className="service-window">
        <button className="service-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        {data && (
          <div className="service-content">
            <h3>{data.title}</h3>
            {data.sections.map((section, index) => (
              <div className="service-block" style={{ '--i': index } as CSSProperties} key={section.heading}>
                <h4>{section.heading}</h4>
                {section.body}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
