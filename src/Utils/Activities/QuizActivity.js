
import React, { useState, useMemo } from "react";
import "../../CSS/exercisesection.css";
import shuffle from "../../Utils/shuffle";

const QuizActivity = ({ question, data, onAnswer }) => {
  const quizTitle = data?.quizTitle || "Quiz";
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [explanation, setExplanation] = useState("");

  // Always call hooks before conditionally returning
  const correctAnswer = question?.answer?.split(" - ")[0] || "";

const shuffledOptions = useMemo(() => {
  return shuffle([...question?.options || []]);
}, [question]);

  // Only return fallback after all hooks have run
  if (!question) return <p>Loading...</p>;

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    // setExplanation(question.answer.split(" - ")[1] || "No explanation.");

  };

  return (
    <div className="exercisesection__card">
     

      <h2>{quizTitle}</h2>
      <h2 className="exercisesection__question">{question.question}</h2>

      <div className="exercisesection__options">
        {shuffledOptions.map((option, index) => {
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

      {/* 
      {selectedAnswer && (
        <div className="exercisesection__feedback">
          <p>
            {selectedAnswer === correctAnswer ? "✅ Correct!" : "❌ Incorrect."}
          </p>
          <p>{explanation}</p>
        </div>
      )}
      */}

    </div>
  );
};

export default QuizActivity;
