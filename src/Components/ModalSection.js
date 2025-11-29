import React from "react";
import ModalRouter from "./ModalRouter";

export default function ModalContent({ type, subtype, description }) {
  return (
    <div className="exercise-modal-content">
      {description && (
        <p className="exercise-description">{description}</p>
      )}

      <ModalRouter type={type} subtype={subtype} />
    </div>
  );
}