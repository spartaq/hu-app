import React from 'react';

const Score = ({ score, setScore, setCurrentQuestion, setQuizStarted, setIsLastq, setTimer, questions }) => {
    return (
        <div className="container mt-3">
            <div className="card p-3">
                <div className="quizcard-body">
                    <h2 className="card-title text-center mb-4">Quiz Completed!</h2>
                    <h4 className="card-text text-center mb-4">Your score: {score}</h4>
                    <button className="btn btn-primary d-block mx-auto mb-4" onClick={() => { setCurrentQuestion(0); setScore(0); setQuizStarted(true); setIsLastq(false); setTimer(15); }}>
                        Restart Quiz
                    </button>
                    <div className="row">
                        {questions.map((question, index) => (
                            <div key={index} className="col-md-6">
                                <p><strong>Question {index + 1}:</strong> {question.question} - {question.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Score;
