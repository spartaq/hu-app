import React from "react";
import ExerciseRouter from "../Components/ModalRouter";

export default function ExerciseContent({ type, subtype, description }) {
  return (
    <div className="exercise-modal-content">
      {description && (
        <p className="exercise-description">{description}</p>
      )}

      <ExerciseRouter type={type} subtype={subtype} />
    </div>
  );
}