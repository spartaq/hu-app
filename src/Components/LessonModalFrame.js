import React from 'react';
import '../CSS/LessonModalFrame.css';

export default function Modal({ open, onClose, children, title, footer }) {
  if (!open) return null;

  return (
    <div className="lesson-modal-overlay" onClick={onClose}>      
      <div className="lesson-modal-content" onClick={e => e.stopPropagation()}>        
        {/* Purple Header Bar */}
        <div className="lesson-modal-header">
          <h2 className="lesson-modal-title">{title}</h2>
          <button className="lesson-modal-close" onClick={onClose}>×</button>
        </div>

        {/* Scrollable lesson body */}
        <div className="lesson-modal-body">
          {children}
        </div>

      {footer && (
          <div className="lesson-modal-footer">
            {footer}
          </div>
        )}

      </div>

    </div>
  );
}


