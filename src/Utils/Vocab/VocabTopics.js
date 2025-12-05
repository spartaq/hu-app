import React from "react";
import { useNavigate } from "react-router-dom";
import data from "./VocabWords.json";
import "../../CSS/VocabularyHub.css";

const VocabTopics = () => {
  const navigate = useNavigate();

  return (
    <div className="vocab-topics">
      <h2>Topics</h2>

      <div className="vocab-topics-grid">
        {data.topics.map(topic => (
          <div
            key={topic.id}
            className="vocab-topic-card"
            onClick={() => navigate(`/vocab/topics/${topic.id}`)}
          >
             <div className="vocab-topic-icon">📚</div>
            <div className="vocab-topic-title">{topic.title}</div>
            <div className="vocab-topic-count">{topic.words.length} words</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VocabTopics;
