import React, { useState } from "react";
import "../../CSS/exercisesection.css";

const QuizActivity = ({ question, data, onAnswer }) => {
  const quizTitle = data?.quizTitle || "Quiz";
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [explanation, setExplanation] = useState("");

  const correctAnswer = question?.answer?.split(" - ")[0] || "";
  const options = question?.options || [];

  if (!question) return <p>Loading...</p>;

  const handleAnswerClick = (option) => {
  setSelectedAnswer(option);

  const isCorrect = option.trim() === correctAnswer.trim();
  const result = { correct: isCorrect, next: false, selected: option };

  if (onAnswer) {
    // tell parent whether it’s correct, but don’t advance yet
    onAnswer(result);
  }

  // Give React one paint frame (~50–100 ms) to show color before next fires
  setTimeout(() => {
    if (onAnswer) onAnswer({ ...result, next: true });
  }, 1000);
};

  return (
    <div className="exercisesection__card">
      <h2>{quizTitle}</h2>
      <h2 className="exercisesection__question">{question.question}</h2>

    <div className="exercisesection__options">
  {options.map((option, index) => {
    let buttonClass = "exercisesection__option-button";

    if (selectedAnswer) {
      if (option === selectedAnswer) {
        // only the selected button gets a class
        buttonClass += selectedAnswer.trim() === correctAnswer.trim() ? " correct" : " incorrect";
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
          {explanation && <p>{explanation}</p>}
          <button onClick={() => {
            console.log("Next button clicked");
            setSelectedAnswer(null);
            setExplanation("");
            if (typeof onAnswer === "function") {
              onAnswer({ next: true });
            }
          }}>Next Question</button>
        </div>
      )}

      
    </div>
  );
};

export default QuizActivity;
