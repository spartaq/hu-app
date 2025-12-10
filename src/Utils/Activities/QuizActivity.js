import React, { useState, useEffect } from "react";
import "../../CSS/QuizActivity.css";
import ProgressBar from "../../Components/ProgressBar";

export default function QuizActivity({ data = {}, onComplete, onScore, onProgress }) {
  const questions = Array.isArray(data.questions) ? data.questions : [data];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [completed, setCompleted] = useState(0); // track completed questions

  const currentQuestion = questions[currentIndex] || {};
  const { question = "", answer = "", options = [], translate, image } = currentQuestion;
  const correctAnswer = answer.trim();

  // Shuffle options
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
    if (options.length) {
      setShuffledOptions(shuffleArray(options));
      setSelectedAnswer(null);
    }
  }, [currentIndex, options]);

  const isCorrect = selectedAnswer?.trim() === correctAnswer;

  const handleAnswerClick = (option) => {
    if (selectedAnswer) return;
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    // Update score if correct
    if (isCorrect && onScore) onScore();

    // Increment completed questions
    const newCompleted = completed + 1;
    setCompleted(newCompleted);

    // Notify parent of progress
    if (onProgress) onProgress(newCompleted, questions.length);

    // Move to next question or finish
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      if (onComplete) onComplete();
    }
  };

  const buildCorrectSentence = () => question.replace("______", correctAnswer);

  if (!currentQuestion) return <p>Loading...</p>;

  return (
    <div className="quizactivity__card">
      
      <h2 className="quizactivity__title">{data.instructions || "Quiz"}</h2>

      {/* Progress Bar */}
      <ProgressBar completed={completed} total={questions.length} />

      <img
  src={currentQuestion.image || data.image}
  alt={currentQuestion.question || "Quiz image"}
  className="quizactivity-image"
/>

      <h3 className="quizactivity__question">{question}</h3>

      <div className="quizactivity__options">
        {shuffledOptions.map((option, index) => {
          let buttonClass = "quizactivity__option-button";

          if (selectedAnswer) {
            if (option === selectedAnswer) {
              buttonClass += isCorrect ? " correct" : " incorrect";
            }
            if (option === correctAnswer && selectedAnswer !== correctAnswer) {
              buttonClass += "correct";
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
    <p>{isCorrect ? "✅ Correct!" : "❌ Incorrect."}</p>

    <div className="quizactivity__solution">
      <p><strong>Correct answer:</strong> {correctAnswer}</p>
      {translate && <p><strong>Translation:</strong> {translate}</p>}
    </div>

    <button className="quizactivity__next-btn control-btn" onClick={handleNext}>
      Next Question →
    </button>
  </div>
)}


    </div>
  );
}
