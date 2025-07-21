import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import SEO from '../../Components/SEO';
import YouTubeVideos from '../../Components/YouTubeVideos';
import { addTooltipsToText } from '../tooltipUtils';

const Videos = ({ data: videoData }) => {
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [tooltippedTranscript, setTooltippedTranscript] = useState("");
  const [showTranscript, setShowTranscript] = useState(false);
  const [showVocab, setShowVocab] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [title, setTitle] = useState("");

 

  useEffect(() => {
    if (videoData && showTranscript) {
      const transcriptText = videoData.transcript.join(" ");
      const vocabulary = videoData.vocabulary;
      if (vocabulary && vocabulary.length > 0) {
        const tooltipped = addTooltipsToText(transcriptText, vocabulary);
        setTooltippedTranscript(tooltipped);
      } else {
        setTooltippedTranscript(transcriptText);
      }
    }
  }, [videoData, showTranscript]);

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
    return answers[questionIndex] === videoData.questions[questionIndex].correctAnswer;
  };

  const getResultIcon = (questionIndex, choiceIndex) => {
    if (!showResults) return null;
    const selected = answers[questionIndex];
    const choice = videoData.questions[questionIndex].choices[choiceIndex];
    const correct = videoData.questions[questionIndex].correctAnswer;
    if (selected === choice && selected === correct) return <span style={{ color: 'green' }}>&#10003;</span>;
    if (selected === choice && selected !== correct) return <span style={{ color: 'red' }}>&#10005;</span>;
    return null;
  };

  const toggleTranscript = () => setShowTranscript(prev => !prev);
  const toggleVocab = () => setShowVocab(prev => !prev);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  if (!videoData) return <div>Loading video...</div>;

  return (
    <div>
      <SEO
        title='Video Comprehension Exercises - English Exam Exercises'
        description='A collection of videos to practice listening comprehension'
        name='English Exam Exercises'
        type='article'
      />

      <div className="introtext">
        <div className="grammartitle">
          <span className="label label-a1">A1</span>
          <h3 className="mt-2">{videoData.title}</h3>
        </div>

        <div className="exercises-container">
          <div className="skills-controls">
            <button className="checkbtn" onClick={toggleMenu}>☰ Video List</button>
            <button className="checkbtn" onClick={toggleTranscript}>Transcript</button>
            <button className="checkbtn" onClick={toggleVocab}>Vocabulary</button>
          </div>

          <div className="videointerface">
            <div className="videotitle">
              <h1>{videoData.title}</h1>
              <span>Topic: {videoData.topic}</span>
              <span>Level: {videoData.level}</span>
            </div>

            <div className="video-container">
              <YouTubeVideos videoId={videoData.videoId} />
            </div>
          </div>

          {showTranscript && (
            <div className="overlay" onClick={() => setShowTranscript(false)}>
              <div className="transcript-overlay" onClick={(e) => e.stopPropagation()}>
                <div className="transcript-text" dangerouslySetInnerHTML={{ __html: tooltippedTranscript }} />
              </div>
            </div>
          )}

          {showVocab && (
            <div className="overlay" onClick={() => setShowVocab(false)}>
              <div className="transcript-overlay" onClick={(e) => e.stopPropagation()}>
                <div className="vocabulary-text">
                  <ul>
                    {videoData.vocabulary.map((item, idx) => {
                      const [word, translation] = item.split(" - ");
                      return <li key={idx}><strong>{word}</strong> - {translation}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <Carousel interval={null} wrap={false} controls indicators={false}>
              {videoData.questions.map((q, i) => (
                <Carousel.Item key={i}>
                  <div className="question-container">
                    <div className="question">{q.number}. {q.question}</div>
                    <div className="choices-container">
                      {q.choices.map((choice, j) => (
                        <label key={j}>
                          <input
                            type="radio"
                            value={choice}
                            checked={answers[i] === choice}
                            onChange={() => handleAnswerChange(i, choice)}
                          />
                          {choice} {getResultIcon(i, j)}
                        </label>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="checkbtn">Check Answer</button>
                </Carousel.Item>
              ))}
            </Carousel>
          </form>

          {/* Optional Video Menu */}
          <div className={`mobile-menu-speaking ${isMenuOpen ? 'open' : ''}`}>
            <div className="set-buttons">
              <button className="close-button" onClick={toggleMenu}>✕</button>
              {/* You could dynamically list links here if you track a full video list */}
              <a className="flashbtn" href="/videos?title=video1">Video 1</a>
              <a className="flashbtn" href="/videos?title=video2">Video 2</a>
              {/* etc. */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
