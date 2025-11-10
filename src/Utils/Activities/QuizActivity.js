import React, { useState, useEffect } from "react";
import "../../CSS/exercisesection.css";

const QuizActivity = ({ question, data, onAnswer }) => {
  const quizTitle = data?.quizTitle || "Quiz";
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [explanation, setExplanation] = useState("");
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const correctAnswer = question?.answer?.split(" - ")[0]?.trim() || "";

  // Fisher–Yates shuffle function
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Shuffle options whenever a new question loads
  useEffect(() => {
    if (question?.options) {
      const shuffled = shuffleArray(question.options);
      setShuffledOptions(shuffled);
      setSelectedAnswer(null);
      setExplanation("");
    }
  }, [question]);

  if (!question) return <p>Loading...</p>;

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);

    const isCorrect = option.trim() === correctAnswer;
    const result = { correct: isCorrect, next: false, selected: option };

    if (onAnswer) onAnswer(result);

    setTimeout(() => {
      if (onAnswer) onAnswer({ ...result, next: true });
    }, 1000);
  };

  return (
    <div className="exercisesection__card">
      <h2>{quizTitle}</h2>
      <h2 className="exercisesection__question">{question.question}</h2>

      <div className="exercisesection__options">
        {shuffledOptions.map((option, index) => {
          let buttonClass = "exercisesection__option-button";

          if (selectedAnswer) {
            if (option === selectedAnswer) {
              buttonClass +=
                selectedAnswer.trim() === correctAnswer
                  ? " correct"
                  : " incorrect";
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
          <p>
            {selectedAnswer.trim() === correctAnswer
              ? "✅ Correct!"
              : "❌ Incorrect."}
          </p>
          {explanation && <p>{explanation}</p>}
          <button
            onClick={() => {
              setSelectedAnswer(null);
              setExplanation("");
              if (typeof onAnswer === "function") {
                onAnswer({ next: true });
              }
            }}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizActivity;
