import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import Readingcomp from '../../Mainpages/Reading-Exercises/Data/readingcomp';
import '../../CSS/skills.css';
import { addTooltipsToText } from '../../Utils/tooltipUtils';

const ReadingComponent = ({ title }) => {
    const [readings, setReadings] = useState([]);
    const [currentReading, setCurrentReading] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        // Filter readings by title if specified
        const filteredReadings = Readingcomp.filter(reading => {
            return reading.readingcompTitle === title; // Match by title prop
        });

        setReadings(filteredReadings);
        setCurrentReading(0);
        setAnswers(Array(filteredReadings[0]?.paragraphs[0]?.questions.length).fill(''));
    }, [title]); // When the title changes, refilter readings

    const handleNextReading = () => {
        setCurrentReading(current => (current + 1) % readings.length);
        setAnswers(Array(readings[currentReading]?.paragraphs[0]?.questions.length).fill(''));
        setShowResults(false);
    };

    const handlePrevReading = () => {
        setCurrentReading(current => (current === 0 ? readings.length - 1 : current - 1));
        setAnswers(Array(readings[currentReading]?.paragraphs[0]?.questions.length).fill(''));
        setShowResults(false);
    };

    const handleAnswerChange = (questionIndex, choice) => {
        const updatedAnswers = [...answers];
        updatedAnswers[questionIndex] = choice;
        setAnswers(updatedAnswers);
        setShowResults(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowResults(true);
    };

    const isCorrect = (questionIndex) => {
        return answers[questionIndex] === readings[currentReading]?.paragraphs[0]?.questions[questionIndex]?.correctAnswer;
    };

    const getResultIcon = (questionIndex, choiceIndex) => {
        if (showResults && isCorrect(questionIndex) && answers[questionIndex] === readings[currentReading]?.paragraphs[0]?.questions[questionIndex]?.choices[choiceIndex]) {
            return <span style={{ color: 'green' }}>&#10003;</span>;
        } else if (showResults && !isCorrect(questionIndex) && answers[questionIndex] === readings[currentReading]?.paragraphs[0]?.questions[questionIndex]?.choices[choiceIndex]) {
            return <span style={{ color: 'red' }}>&#10005;</span>;
        } else {
            return null;
        }
    };

    const [showVocab, setShowVocab] = useState(false);

    const toggleVocab = () => {
        setShowVocab(prevState => !prevState);
    };

    const closeVocab = () => {
        setShowVocab(false);
    };

    if (!readings || readings.length === 0 || !readings[currentReading]) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="grammar-comp-container">
                <div className="exercises-container div1">
                    <div className="exercisectrl">
                        <button type="button" className='checkbtn' onClick={toggleVocab}>Vocabulary</button>
                    </div>

                    {showVocab && (
                        <div className="overlay" onClick={closeVocab}>
                            <div className="transcript-overlay" onClick={(e) => e.stopPropagation()}>
                                <div className="vocabulary-text">
                                    {readings[currentReading]?.vocabulary ? (
                                        <ul>
                                            {readings[currentReading].vocabulary.map((item, index) => (
                                                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No vocabulary available for this reading.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        
                        <div className="reading-title">
                            <h1>{title}</h1> 
                        </div>
                       
                        <div>
                            {readings[currentReading]?.paragraphs.map((paragraph, index) => (
                                <div key={index} dangerouslySetInnerHTML={{
                                    __html: addTooltipsToText(paragraph.text, readings[currentReading]?.vocabulary),
                                }} />
                            ))}
                        </div>

                        <div className="question-container">
                        <div className="instructions">Choose the best answer for each question</div>
                            <Carousel interval={null} wrap={false} controls={true} indicators={false} pause={'hover'}>
                                {readings[currentReading].paragraphs[0].questions.map((questionObj, questionIndex) => (
                                    <Carousel.Item key={questionIndex}>
                                        <div className="question-container">
                                            <div className="question">{questionObj.number}. {questionObj.question}</div>
                                            <div className="choices-container">
                                                {questionObj.choices.map((choice, choiceIndex) => (
                                                    <label key={choiceIndex}>
                                                        <input
                                                            type="radio"
                                                            value={choice}
                                                            checked={answers[questionIndex] === choice}
                                                            onChange={() => handleAnswerChange(questionIndex, choice)}
                                                        />
                                                        {choice}
                                                        {getResultIcon(questionIndex, choiceIndex)}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                        <div className="filterctrl">
                            <button type="submit" className="checkbtn">Check Answers</button>
                            <button type="button" className="checkbtn" onClick={handlePrevReading}><i className="fas fa-arrow-left"></i></button>
                            <button type="button" className="checkbtn" onClick={handleNextReading}><i className="fas fa-arrow-right"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReadingComponent;
