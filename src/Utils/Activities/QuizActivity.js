// src/Utils/Activities/QuizActivity.js
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "../../CSS/QuizActivity.css";
import quizimg from "../../Images/neighbors1.jpg";

const QuizActivity = ({ question, onAnswer }) => {
  const location = useLocation();
  const data = location.state?.data;
  const quizTitle = data?.quizTitle || "Quiz";
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  const correctAnswer = question?.answer?.split(" - ")[0]?.trim() || "";

  // Fisher–Yates shuffle
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Reset when question changes
  useEffect(() => {
    if (question?.options) {
      setShuffledOptions(shuffleArray(question.options));
      setSelectedAnswer(null);
    }
  }, [question]);

  if (!question) return <p>Loading...</p>;

  // Fill correct answer into the sentence for final display
  const buildCorrectSentence = () => {
    return question.question.replace("______", correctAnswer);
  };

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    const isCorrect = (selectedAnswer || "").trim() === correctAnswer;

    if (typeof onAnswer === "function") {
      onAnswer({ correct: isCorrect, next: true, selected: selectedAnswer });
    }

    setSelectedAnswer(null);
  };

  const isCorrect = selectedAnswer?.trim() === correctAnswer;

  return (
    <div className="quizactivity__card activity-card">
      <h2>Complete the sentence</h2>
      <img src={quizimg} alt="Hungarian" className="quiz-img" />
       
      <h2 className="quizactivity__question">{question.question}</h2>

      <div className="quizactivity__options">
        {shuffledOptions.map((option, index) => {
          let buttonClass = "quizactivity__option-button";

          if (selectedAnswer) {
            if (option === selectedAnswer) {
              buttonClass += isCorrect ? " correct" : " incorrect";
            }
            if (option === correctAnswer && selectedAnswer !== correctAnswer) {
              buttonClass += " correct";
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
        <div className="quizactivity__feedback">

          {/* Normal correct/incorrect message */}
          <p>{isCorrect ? "✅ Correct!" : "❌ Incorrect."}</p>

          {/* NEW: Show full correct sentence + translation ONLY when correct */}
          {isCorrect && (
            <div className="quizactivity__solution">
              <p><strong>Correct sentence:</strong> {buildCorrectSentence()}</p>
              {question.translate && (
                <p><strong>Translation:</strong> {question.translate}</p>
              )}
            </div>
          )}

          <button className="quizactivity__next-btn control-btn" onClick={handleNext}>
            Next Question →
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizActivity;
