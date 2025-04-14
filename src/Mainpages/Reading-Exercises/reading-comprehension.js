import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import SEO from '../../Components/SEO';
import Readingcomp from './Data/readingcomp';
import ReadingMenu from '../../Components/Menus/ReadingMenu';
import Breadcrumbs from '../../Components/Breadcrumb';
import Sidebar from '../../Components/Sidebar';
import '../../CSS/skills.css';
import { addTooltipsToText } from '../../Utils/tooltipUtils';
import VocabularyMatch from '../../Utils/vocabmatchcolumn.js';
import vocabData from "../../Components/VocabularyListComps/Data/vocabcolumn.json";
import { FaAngleDown } from 'react-icons/fa';


const ReadingComp1 = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const initialTopic = searchParams.get('topic') || 'all';
    const initialLevel = searchParams.get('level') || 'all';
    const initialReadingcompTitle = searchParams.get('readingcompTitle') || '';

    const [readings, setReadings] = useState([]);
    const [currentReading, setCurrentReading] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState(initialTopic);
    const [selectedLevel] = useState(initialLevel);
    const [selectedReadingcompTitle] = useState(initialReadingcompTitle);
    const [isTopicMenuOpen, setIsTopicMenuOpen] = useState(false);
    const topicMenuRef = useRef(null);

    useEffect(() => {
        const filteredReadings = Readingcomp.filter(reading => {
            const matchesTopic = selectedTopic === 'all' || reading.topic.toLowerCase() === selectedTopic.toLowerCase();
            const matchesLevel = selectedLevel === 'all' || reading.level.toLowerCase() === selectedLevel.toLowerCase();
            return matchesTopic && matchesLevel;
        });

        const reorderedReadings = filteredReadings.sort((a, b) => {
            if (a.readingcompTitle.toLowerCase() === selectedReadingcompTitle.toLowerCase()) return -1;
            if (b.readingcompTitle.toLowerCase() === selectedReadingcompTitle.toLowerCase()) return 1;
            return 0;
        });

        setReadings(reorderedReadings);
        setCurrentReading(0);
        setAnswers(Array(reorderedReadings[0]?.paragraphs[0]?.questions.length).fill(''));
    }, [selectedTopic, selectedLevel, selectedReadingcompTitle]);

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

    const toggleTopicMenu = () => {
        setIsTopicMenuOpen(!isTopicMenuOpen);
    };

    const handleTopicChange = (topic) => {
        setSelectedTopic(topic);
        setCurrentReading(0);
        setAnswers([]);
        setIsTopicMenuOpen(false);
        setSearchParams({
            topic: topic,
            level: selectedLevel,
            readingcompTitle: selectedReadingcompTitle,
        });
    };

    const [isGridVisible, setIsGridVisible] = useState(true);
    
      const toggleGridVisibility = () => {
        setIsGridVisible((prev) => !prev);
      };

    const [showVocab, setShowVocab] = useState(false);

    const toggleVocab = () => {
        setShowVocab(prevState => !prevState);
    };

    const closeVocab = () => {
        setShowVocab(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (topicMenuRef.current && !topicMenuRef.current.contains(event.target)) {
                setIsTopicMenuOpen(true);
            }
        };
        if (isTopicMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isTopicMenuOpen]);

    if (!readings || readings.length === 0 || !readings[currentReading]) {
        return <div>Loading...</div>;
    }

      

    return (
        <div>
            <SEO
                title='Reading Comprehension Exercises - English Exam Exercises'
                description='A collection of texts to practice reading comprehension'
                name='English Exam Exercises'
                type='article'
            />
            <Breadcrumbs />
            <div className="home-container">
                <div className="introtext">
                    <h3 className="mt-2">{readings[currentReading]?.readingcompTitle}</h3>
                    <img src={readings[currentReading]?.image} alt={readings[currentReading]?.readingcompTitle} className="topics-image" />
                    <div className="details">
                        <span className="level">Level: {readings[currentReading]?.level}</span>
                        <span className="topic">Topic: {readings[currentReading]?.topic}</span>
                    </div>
                </div>
            </div>
            
            <div className="grammar-container">
                <div className="exercises-container">
                    

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
                        <div className="showagendagrammarbox"  onClick={toggleGridVisibility}>

                        {isGridVisible ? 'Hide' : 'Vocabulary'}<FaAngleDown /></div>


                        {isGridVisible && (
                            <div className="grammar-display-grid">
                            <VocabularyMatch
                            data={vocabData}
                            topic={readings[currentReading]?.topic.toLowerCase()}
                            />
                            </div>
                        )}
                        <div className="showagendagrammarbox">Reading</div>
                    <form className="readingform" onSubmit={handleSubmit}>
                        <div className="reading-text">
                            {readings[currentReading]?.paragraphs.map((paragraph, index) => (
                                <div key={index} dangerouslySetInnerHTML={{
                                    __html: addTooltipsToText(paragraph.text, readings[currentReading]?.vocabulary),
                                }} />
                            ))}
                        </div>

                        <div className="question-container">
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
                        <div className="exercisectrl">
                        <button className="checkbtn" onClick={toggleTopicMenu}>☰ Topics</button>
                        <button type="button" className='checkbtn' onClick={toggleVocab}>Vocabulary</button>                        
                        <button type="button" className="checkbtn" onClick={handlePrevReading}><i className="fas fa-arrow-left"></i></button>
                        <button type="button" className="checkbtn" onClick={handleNextReading}><i className="fas fa-arrow-right"></i></button>
                    </div>
                    </form>
                </div>

                <div ref={topicMenuRef} className={`skills-topic-menu ${isTopicMenuOpen ? 'open' : ''}`}>
                        <div className="topic-buttons">
                            <button className="flashbtn" onClick={() => handleTopicChange('all')}>All</button>
                            <button className="flashbtn" onClick={() => handleTopicChange('daily')}>Daily Life and Activities</button>
                            <button className="flashbtn" onClick={() => handleTopicChange('Holidays and Travel')}>Holidays and Travel</button>
                            <button className="flashbtn" onClick={() => handleTopicChange('money')}>Money</button>
                            <button className="flashbtn" onClick={() => handleTopicChange('food')}>Food</button>
                        </div>
                    </div>

                <div className="gmenu"><ReadingMenu /></div>
                <div><Sidebar /></div>
            </div>
        </div>
    );
};

export default ReadingComp1;
