import React, { useState } from "react";
import '../../CSS/exercisesection.css';

const QuizActivity = ({ question, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [explanation, setExplanation] = useState("");

  if (!question) return <p>Loading...</p>;

  const correctAnswer = question.answer.split(" - ")[0];

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    if (option === correctAnswer && onAnswer) {
      onAnswer(true);
    }
    setExplanation(question.answer.split(" - ")[1] || "No explanation.");
  };

  return (
    <div className="exercisesection__card">
      <h2 className="exercisesection__question">{question.question}</h2>

      <div className="exercisesection__options">
        {question.options.map((option, index) => {
          let buttonClass = "exercisesection__option-button";
          if (selectedAnswer) {
            if (option === correctAnswer) {
              buttonClass += " correct";
            } else if (option === selectedAnswer && option !== correctAnswer) {
              buttonClass += " incorrect";
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              disabled={!!selectedAnswer}
              className={buttonClass}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selectedAnswer && (
        <div className="exercisesection__feedback">
          <p>{selectedAnswer === correctAnswer ? "✅ Correct!" : "❌ Incorrect."}</p>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuizActivity;
