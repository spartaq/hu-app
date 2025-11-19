import React from 'react';
import '../CSS/modal.css';

export default function Modal({ open, onClose, children, title }) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="modal-title">{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
}
