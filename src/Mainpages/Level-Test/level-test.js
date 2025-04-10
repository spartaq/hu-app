import React, { useState, useEffect } from 'react';
import questions from './Data/reviewquestions.json';
import '../../CSS/leveltest.css';
import ReadingMenu from '../../Components/Menus/ReadingMenu';
import Sidebar from '../../Components/Sidebar';
import leveltest from '../../Images/levels-header-1280x470.png';
import SEO from '../../Components/SEO';
import Breadcrumb from '../../Components/Breadcrumb';
import Confetti from 'react-confetti';

const shuffleArray = (array) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

const EnglishLevelTest = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (hasStarted) {
      setShuffledOptions(shuffleArray(questions[currentQuestionIndex].options));
    }
  }, [currentQuestionIndex, hasStarted]);

  const startTest = () => {
    setHasStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setResult(null);
    setUserAnswers([]);
    setSelectedOption(null);
    setShowFeedback(false);
    setShuffledOptions(shuffleArray(questions[0].options));
    localStorage.removeItem('levelTestResult');
  };

  const resetTest = () => {
    setHasStarted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setResult(null);
    setUserAnswers([]);
    localStorage.removeItem('levelTestResult');
  };

  const handleAnswer = (option) => {
    setSelectedOption(option);
    setShowFeedback(true);

    const correct = questions[currentQuestionIndex].correctAnswer;
    const isCorrect = option === correct;

    setUserAnswers((prev) => [
      ...prev,
      {
        question: questions[currentQuestionIndex].question,
        selectedAnswer: option,
        correctAnswer: correct,
      },
    ]);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => {
      const next = currentQuestionIndex + 1;
      if (next < questions.length) {
        setCurrentQuestionIndex(next);
        setShuffledOptions(shuffleArray(questions[next].options));
        setSelectedOption(null);
        setShowFeedback(false);
      } else {
        determineLevel();
      }
    }, 1000);
  };

  const determineLevel = () => {
    let level;
    if (score <= 1) {
      level = 'Very Good';
    } else if (score <= 2) {
      level = 'Great';
    } else if (score <= 3) {
      level = 'Excellent';
    } else if (score <= 4) {
      level = 'Good Job';
    } else {
      level = 'Great Job!';
    }

    setResult(level);
    localStorage.setItem(
      'levelTestResult',
      JSON.stringify({
        score,
        level,
        userAnswers,
      })
    );
  };

  const showCorrectSentences = () => {
    return (
      <div className="correct-answers-container">
        {questions.map((question, index) => {
          const userAnswer = userAnswers[index]?.selectedAnswer;
          const isCorrect = userAnswer === question.correctAnswer;

          return (
            <div className="correct-answer-row" key={index}>
              <p>
                <strong>Q{index + 1}:</strong>{' '}
                {question.question.replace('___', question.correctAnswer)}
              </p>
              <p>
                <strong>Your answer:</strong> {userAnswer}{' '}
                {isCorrect ? '✅' : `❌ (Correct: ${question.correctAnswer})`}
              </p>
            </div>
          );
        })}
      </div>
    );
  };

  if (!hasStarted) {
    return (
      <div>
        <SEO title="Vocabulary Quizzes - English Exam Exercises" description="A collection of flashcards to strengthen your vocabulary" name="English Exam Exercises" type="article" />
        <Breadcrumb />
        <div className="leveltest-container">
          <div className="homebodytext">
            <img src={leveltest} alt="English Exam Exercises" />
            <div className="introtext">
              <h3 className="mt-2">Level Test</h3>
              <p>Here is a collection of exercises organized by topic to help you synthesize the language.</p>
            </div>
            <div className="leveltest-container">
              <h1 className="leveltest-header">English Level Test</h1>
              <button onClick={startTest} className="start-button">Start Test</button>
            </div>
          </div>
          <ReadingMenu />
          <Sidebar />
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div>
        {result === 'Advanced' && <Confetti />}
        <div className="leveltest-container">
          <div className="homebodytext">
            <img src={leveltest} alt="English Exam Exercises" />
            <div className="introtext">
              <h3 className="mt-2">Level Test</h3>
              <p>Here is a collection of exercises organized by topic to help you synthesize the language.</p>
            </div>
            <div className="leveltest-container div1">
              <h1 className="leveltest-header">English Level Test</h1>
              <div className="result">Your level is: <strong>{result}</strong></div>
              {showCorrectSentences()}
              <button onClick={resetTest} className="restart-button">Restart Test</button>
            </div>
          </div>
          <ReadingMenu />
          <Sidebar />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="leveltest-container">
        <div className="homebodytext">
          <img src={leveltest} alt="English Exam Exercises" />
          <div className="introtext">
            <h3 className="mt-2">Level Tests and Grammar Reviews</h3>
            <p>This test has {questions.length} questions. Choose the correct word or phrase to complete each sentence.</p>
          </div>

          <div className="leveltest-container div1">
            <h1 className="leveltest-header">Grammar Review</h1>
            <div className="question-counter">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            <div className="questionbox">
              <p className="question">
                {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}
              </p>
              <div className="options">
                {shuffledOptions.map((option) => {
                  let btnClass = '';
                  if (showFeedback) {
                    if (option === questions[currentQuestionIndex].correctAnswer) {
                      btnClass = 'correct';
                    } else if (option === selectedOption) {
                      btnClass = 'incorrect';
                    }
                  }

                  return (
                    <button
                      key={option}
                      className={btnClass}
                      disabled={showFeedback}
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
            <button onClick={resetTest} className="reset-button">Reset Test</button>
          </div>
        </div>

        <div className="div2">
          <ReadingMenu />
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default EnglishLevelTest;
