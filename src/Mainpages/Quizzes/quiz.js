import React, { useState } from "react";
import Questions from "./Questions";
import Score from "./Score";
import { Button } from "@mui/material";

const Quiz = ({ quizzesData }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [explanation, setExplanation] = useState("");
  const [quizEnded, setQuizEnded] = useState(false);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const selectRandomQuestions = (questions) => {
    const shuffledQuestions = shuffleArray(questions);
    return shuffledQuestions.map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));
  };

  const handleAnswerClick = (selectedOption) => {
    setSelectedAnswer(selectedOption);

    // Get the correct answer and explanation by splitting the answer string
    const [correctAnswer, explanation] = questions[currentQuestion]?.answer.split(" - ");

    if (selectedOption === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    // Set the explanation after an answer is selected
    setExplanation(explanation); // Set the explanation correctly
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizEnded(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setSelectedAnswer(null);
    }
  };

  const startQuiz = (quizIndex) => {
    const selectedQuiz = quizzesData[quizIndex];
    setQuestions(selectRandomQuestions(selectedQuiz.questions));
    setQuizStarted(true);
  };

  const handleNewQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizStarted(false);
    setQuizEnded(false);
  };

  return (
    <div>
      <Button onClick={handleNewQuiz}>Restart Quiz</Button>
      {!quizStarted ? (
        <div className="quizlist-container">
          {quizzesData.map((quiz, index) => (
            <div key={index} className="quizsets-container">
              {quiz.quizTitle}
              <Button onClick={() => startQuiz(index)}>Start</Button>
            </div>
          ))}
        </div>
        ) : (
        <>
          {currentQuestion < questions.length ? (
            <>
              <Questions
                questions={questions}
                handlePrevQuestion={handlePrevQuestion}
                handleNextQuestion={handleNextQuestion}
                currentQuestion={currentQuestion}
                handleAnswerClick={handleAnswerClick}
                selectedAnswer={selectedAnswer}
              />
              <div>
                <Button onClick={handlePrevQuestion} disabled={currentQuestion === 0}>
                  Previous
                </Button>
                <Button onClick={handleNextQuestion}>
                  Next
                </Button>
              </div>
            </>
          ) : (
            <Score
              score={score}
              setScore={setScore}
              setCurrentQuestion={setCurrentQuestion}
              setQuizStarted={setQuizStarted}
              questions={questions}
            />
          )}
          {selectedAnswer && (
  <div>
    <p>{selectedAnswer === questions[currentQuestion]?.answer.split(" - ")[0] ? "Correct!" : "Incorrect."}</p>
    <p>{explanation}</p>
  </div>
)}
        </>
      )}
    </div>
  );
};

export default Quiz;
