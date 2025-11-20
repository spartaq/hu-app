import React from 'react';
import '../CSS/modal.css';

export default function Modal({ open, onClose, children, title, footer }) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>      
      <div className="modal-content" onClick={e => e.stopPropagation()}>        
        {/* Purple Header Bar */}
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        {/* Scrollable lesson body */}
        <div className="modal-body">
          {children}
        </div>

      {footer && (
          <div className="modal-footer">
            {footer}
          </div>
        )}

      </div>

    </div>
  );
}


