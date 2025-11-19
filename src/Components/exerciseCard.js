import React from 'react';
import '../CSS/exerciseCard.css';

export default function ExerciseCard({ title, onClick, bgColor }) {
  return (
    <div
      className="exercise-card"
      onClick={onClick}
      style={{ backgroundColor: bgColor }}>
      <h4>{title}</h4>
      <p>Tap to practice</p>
    </div>
  );
}
