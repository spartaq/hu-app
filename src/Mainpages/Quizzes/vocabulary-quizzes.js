import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../CSS/quizzes.css'
import Score from './Score';
import Questions from './Questions';
import SEO from '../../Components/SEO';
import { Button } from '@mui/material';
import quizzesData from './Data/QuizData.json';
import Sidebar from '../../Components/Sidebar';
import Breadcrumb from '../../Components/Breadcrumb';
import quizimage from '../../Images/quizzes1-1280x470.jpg';

const QuizApp = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(10);
    const [quizStarted, setQuizStarted] = useState(false);
    const [isLastq, setIsLastq] = useState(false);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [quizEnded, setQuizEnded] = useState(false); // State to track if quiz has ended

    useEffect(() => {
        if (quizStarted && currentQuestion < questions.length) {
            const interval = setInterval(() => {
                setTimer(prevTimer => {
                    if (prevTimer > 0) {
                        return prevTimer - 1;
                    } else {
                        setCurrentQuestion(prevQuestion => prevQuestion + 1);
                        return 10;
                    }
                });
            }, 1000);
            
            return () => clearInterval(interval);
        }
    }, [currentQuestion, quizStarted, questions.length]);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const selectRandomQuestions = (questions) => {
        const shuffledQuestions = shuffleArray(questions);
        const questionsWithShuffledOptions = shuffledQuestions.map(question => ({
            ...question,
            options: shuffleArray(question.options)
        }));
        return questionsWithShuffledOptions.slice(0, 10); // Assuming you want to select 10 random questions
    };

    const handleAnswerClick = (selectedAnswer) => {
        if (selectedAnswer === questions[currentQuestion].answer) {
            setScore(prevScore => prevScore + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestion + 2 === questions.length) {
            setIsLastq(true);
        }
        setCurrentQuestion(prevQuestion => prevQuestion + 1);
        setTimer(10);
    };

    const startQuiz = (quizIndex) => {
        const selectedQuiz = quizzesData[quizIndex];
        const selectedQuestions = selectRandomQuestions(selectedQuiz.questions);
        setQuestions(selectedQuestions);
        setCurrentQuiz(quizIndex);
        setQuizStarted(true);
    };

    const handleNewQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setTimer(10);
        setIsLastq(false);
        setQuizStarted(false);
        setQuizEnded(false); // Reset quiz ended state
    };

    return (
        <div>
            <SEO
        title='Vocabulary Quizzes - English Exam Exercises'
        description='A collection of flashcards to strengthen your vocabulary'
        name='English Exam Exercises'
        type='article'
      />
    <Breadcrumb />        
            
            <div className='home-container'>
<div className='homebodytext'>
<img src={quizimage} alt="English Exam Exercises" />
<div className="introtext">
<h3 className="mt-2">Quizzes</h3></div>
<div className="page-description">Here is a collection of vocabulary exercises to do. The exercises are divided by categories which correspond to exam levels. Each category here has 10 exercises, but there are more once you go to the page. Keep chcking back as I am always adding new exercises. 

<div class="courses_container">
<div class="quizzes_box">

<div className="blog-card">
        <div className="description">
        <h1>B2 Adjectives</h1>
        <h2>Getting the basics down</h2>
        <p>Vocabulary exercises, flashcards and quizzes to help you improve and have greater success on exams.</p>
        <Button onClick={handleNewQuiz}>New Quiz</Button>
                <div>
                    {!quizStarted ? (
                        <div>
                            <div className="quizlist-container">
                                {quizzesData.map((quiz, index) => (
                                    
                                    <div className="quizsets-container">
                                        {quiz.quizTitle}
                                                        
                                    <Button className="btn btn-primary" key={index} onClick={() => startQuiz(index)}>
                                    Start
                                    </Button>
                                   
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div>
                            {currentQuestion < questions.length ? (
                                <Questions
                                    questions={questions}
                                    handleNextQuestion={handleNextQuestion}
                                    currentQuestion={currentQuestion}
                                    handleAnswerClick={handleAnswerClick}
                                    timer={timer}
                                    isLastq={isLastq}
                                />
                            ) : (
                                <div>
                                    <Score
                                        score={score}
                                        setScore={setScore}
                                        setCurrentQuestion={setCurrentQuestion}
                                        setQuizStarted={setQuizStarted}
                                        setIsLastq={setIsLastq}
                                        setTimer={setTimer}
                                        questions={questions} // Pass questions array to Score component
                                    />
                                    {quizEnded && (
                                        <div>
                                            <h2>Correct Answers:</h2>
                                            {questions.map((question, index) => (
                                                <div key={index}>
                                                    <p><strong>Question {index + 1}:</strong> {question.question}</p>
                                                    <p><strong>Correct Answer:</strong> {question.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
</div>
</div>


<div className="description">
<h1>B2 Verbs</h1>
<h2>Having an adequate vocabulary brings greater success.</h2>
<p>Vocabulary exercises, flashcards and quizzes to help you improve and have greater success on exams.</p>
<ul>
    <li><Link to="/flashcards/b2-verb-flashcards"> B2 Verbs</Link></li>
</ul>
</div>



<div className="description">
<h1>C1 Verbs</h1>
<h2>Getting the basics down</h2>
<p> vocabulary exercises including all the vocabulary points needed per level.</p>
<ul>
    <li><Link to="/flashcards/c1-verb-flashcards"> C1 Advanced Verbs</Link></li>
</ul>
</div>



</div>
</div>
</div>

</div>
<div>

 <div><Sidebar/></div>
</div>

</div>


        </div>
    );
};

export default QuizApp;
