import React, { useState, useEffect } from 'react';
import { addTooltipsToText } from '../tooltipUtils';
import YouTubeVideos from '../../Components/YouTubeVideos';
import { FaAngleDown } from 'react-icons/fa';
import "../../CSS/VideoActivity.css";

const VideoActivity = ({ data }) => {
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [showVocab, setShowVocab] = useState(false);
  const [tooltippedTranscript, setTooltippedTranscript] = useState("");

  // Initialize answer state
  useEffect(() => {
    if (data?.questions?.length) setAnswers(Array(data.questions.length).fill(''));
  }, [data]);

  // Process transcript with tooltips
  useEffect(() => {
    if (data?.transcript && showTranscript) {
      const transcriptText = Array.isArray(data.transcript) ? data.transcript.join(' ') : data.transcript;
      const processed = data.vocabulary?.length
        ? addTooltipsToText(transcriptText, data.vocabulary)
        : transcriptText;
      setTooltippedTranscript(processed);
    }
  }, [data, showTranscript]);

  const handleAnswerChange = (qIdx, choice) => {
    const updated = [...answers];
    updated[qIdx] = choice;
    setAnswers(updated);
    setShowResults(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const isCorrect = (qIdx) => answers[qIdx] === data.questions[qIdx].correctAnswer;

  return (
    <div className="video-activity-card">
      <h2 className="video-title">{data?.title}</h2>
      <div className="video-meta">
        {data?.topic && <span>Topic: {data.topic}</span>}
        {data?.level && <span>Level: {data.level}</span>}
      </div>

      <div className="video-player">
        <YouTubeVideos videoId={data.videoId} />
      </div>

      <div className="video-controls">
        <button className="checkbtn" onClick={() => setShowTranscript(prev => !prev)}>
          Transcript <FaAngleDown className={`toggle-icon ${showTranscript ? 'open' : ''}`} />
        </button>
        <button className="checkbtn" onClick={() => setShowVocab(prev => !prev)}>
          Vocabulary <FaAngleDown className={`toggle-icon ${showVocab ? 'open' : ''}`} />
        </button>
      </div>

      {showTranscript && (
        <div className="overlay" onClick={() => setShowTranscript(false)}>
          <div className="overlay-content" onClick={e => e.stopPropagation()}>
            <div className="transcript-text" dangerouslySetInnerHTML={{ __html: tooltippedTranscript }} />
          </div>
        </div>
      )}

      {showVocab && (
        <div className="overlay" onClick={() => setShowVocab(false)}>
          <div className="overlay-content" onClick={e => e.stopPropagation()}>
            <ul className="vocab-list">
              {data.vocabulary?.map((item, idx) => (
                <li key={idx}><strong>{item.hun}</strong> - {item.eng}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <form className="video-questions-form" onSubmit={handleSubmit}>
        {data.questions?.map((q, qIdx) => (
          <div key={qIdx} className="question-block">
            <div className="question-text">{q.number}. {q.question}</div>
            <div className="choices-container">
              {q.choices.map((choice, cIdx) => (
                <label
                  key={cIdx}
                  className={`choice-label ${showResults ? (isCorrect(qIdx) && answers[qIdx] === choice ? 'correct' : answers[qIdx] === choice ? 'incorrect' : '') : ''}`}
                >
                  <input
                    type="radio"
                    name={`question-${qIdx}`}
                    value={choice}
                    checked={answers[qIdx] === choice}
                    onChange={() => handleAnswerChange(qIdx, choice)}
                  />
                  {choice}
                  {showResults && answers[qIdx] === choice && isCorrect(qIdx) && <span className="result-icon">✔️</span>}
                  {showResults && answers[qIdx] === choice && !isCorrect(qIdx) && <span className="result-icon">❌</span>}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button type="submit" className="checkbtn">Check Answers</button>
      </form>
    </div>
  );
};

export default VideoActivity;
