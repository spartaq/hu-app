import React, { useState } from "react";
import { createTheme, styled } from '@mui/material/styles';
import { Stepper, Step, StepLabel } from '@mui/material';
import '../../CSS/exercisesection.css';
import CheckIcon from '@mui/icons-material/Check';

const Quiz = ({ quizzesData }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [explanation, setExplanation] = useState("");
  const [quizEnded, setQuizEnded] = useState(false);

  const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: ownerState.active ? '#3f50b5' : ownerState.completed ? '#4caf50' : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 24,
    height: 24,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  }));
  
  function CustomStepIcon(props) {
    const { active, completed, className, icon } = props;
  
    return (
      <ColorlibStepIconRoot ownerState={{ active, completed }} className={className}>
        <span style={{ fontSize: '12px' }}>{icon}</span>
      </ColorlibStepIconRoot>
    );
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const selectRandomQuestions = (questions) => {
    const shuffled = shuffleArray(questions);
    return shuffled.map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));
  };

  const startQuiz = (quizIndex) => {
    const selectedQuiz = quizzesData[quizIndex];
    setQuestions(selectRandomQuestions(selectedQuiz.questions));
    setQuizStarted(true);
  };

  const handleAnswerClick = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    const [correctAnswer, explanationText] = questions[currentQuestion]?.answer.split(" - ");
    if (selectedOption === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setExplanation(explanationText);
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

  const handleNewQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizStarted(false);
    setQuizEnded(false);
  };

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: 'red',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  const ProgressBar = ({ current, total }) => {
    return (
      <div style={{ position: 'relative', marginBottom: '24px', padding: '10px 0' }}>
        <div style={{
          height: '4px',
          background: '#ccc',
          position: 'absolute',
          top: '18px',
          left: '0',
          right: '0',
          zIndex: 1,
        }} />
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 2,
        }}>
          {[...Array(total)].map((_, index) => {
            let bgColor = '#ccc';
            if (index === current) bgColor = '#2196f3';
            else if (index < current) bgColor = '#4caf50';
  
            return (
              <div key={index} style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                backgroundColor: bgColor,
                border: '2px solid #fff',
                boxShadow: '0 0 0 2px #ccc',
                textAlign: 'center',
                lineHeight: '24px',
                fontSize: '12px',
                color: '#fff'
              }}>
                {index + 1}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  

  const renderQuestion = () => {
    
    const question = questions[currentQuestion];
    const correctAnswer = question.answer.split(" - ")[0];

    return (
      <div style={{
        border: '1px solid #ccc',
        maxWidth: '600px',
        margin: '0 auto',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#f8f8f8',
        color: '#000'
      }}>


      <div style={{ marginBottom: '20px' }}>
        <Stepper activeStep={currentQuestion} alternativeLabel>
          {questions.map((_, index) => (
            <Step key={index}>
              <StepLabel StepIconComponent={CustomStepIcon} />
            </Step>
          ))}
        </Stepper>
      </div>

        <h2 style={{ textAlign: 'center', fontSize: '20px', fontWeight: '600', marginBottom: '20px' }}>
          {question.question}
        </h2>

        <div style={{ display: 'grid', gap: '12px', marginBottom: '20px' }}>
          {question.options.map((option, index) => {
            let bgColor = '';
            if (selectedAnswer) {
              if (option === correctAnswer) {
                bgColor = '#c8e6c9'; // green
              } else if (option === selectedAnswer && option !== correctAnswer) {
                bgColor = '#ffcdd2'; // red
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                disabled={!!selectedAnswer}
                style={{
                  padding: '10px 15px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  textAlign: 'left',
                  backgroundColor: bgColor || '#fff',
                  cursor: selectedAnswer ? 'default' : 'pointer'
                }}
              >
                {option}
              </button>
            );
          })}
        </div>

        {selectedAnswer && (
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>
            <p style={{ fontWeight: '600' }}>
              {selectedAnswer === correctAnswer ? "✅ Correct!" : "❌ Incorrect."}
            </p>
            {explanation && <p style={{ fontSize: '14px', color: '#666' }}>{explanation}</p>}
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '14px' }}>
            Question {currentQuestion + 1} of {questions.length}
          </p>
          <div>
            <button
              onClick={handlePrevQuestion}
              disabled={currentQuestion === 0}
              style={{
                padding: '6px 10px',
                fontSize: '14px',
                marginRight: '8px',
                backgroundColor: '#eee',
                border: 'none',
                borderRadius: '4px',
                cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer'
              }}
            >
              Previous
            </button>
            <button
              onClick={handleNextQuestion}
              style={{
                padding: '6px 10px',
                fontSize: '14px',
                backgroundColor: '#2196f3',
                color: '#000',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {currentQuestion + 1 === questions.length ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderScore = () => (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#222',
      color: '#fff',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      borderRadius: '8px',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Quiz Completed!</h2>
      <p style={{ fontSize: '18px', marginBottom: '24px' }}>
        Your score: {score} / {questions.length}
      </p>
      <button
        onClick={handleNewQuiz}
        style={{
          backgroundColor: '#4caf50',
          color: '#000',
          padding: '10px 16px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Restart Quiz
      </button>
      <div style={{ textAlign: 'left', marginTop: '20px' }}>
        {questions.map((q, i) => (
          <p key={i}>
            <strong>Q{i + 1}:</strong> {q.question} — {q.answer}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ padding: '24px' }}>
      {!quizStarted ? (
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          {quizzesData.map((quiz, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px',
                padding: '12px 16px',
                border: '1px solid #ccc',
                borderRadius: '6px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}
            >
              <span style={{ fontSize: '16px', fontWeight: '500' }}>{quiz.quizTitle}</span>
              <button
                onClick={() => startQuiz(idx)}
                style={{
                  backgroundColor: '#2196f3',
                  color: '#000',
                  padding: '6px 12px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Start
              </button>
            </div>
          ))}
        </div>
      ) : quizEnded ? renderScore() : renderQuestion()}
    </div>
  );
};

export default Quiz;
