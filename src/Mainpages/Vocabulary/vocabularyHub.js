// src/Mainpages/Vocabulary/VocabularyHub.js
import { Link } from "react-router-dom";
import { VOCAB_TOPICS } from "../../Utils/Activities/Data/vocab/vocabTopics";
import "../../CSS/VocabularyHub.css";

export default function VocabularyHub() {
  return (
    <div className="vocab-hub-page">
      <h1>Vocabulary Activities</h1>
      <div className="vocab-grid">
        {VOCAB_TOPICS.map((topic) => (
          <Link
            to={`/hungarian/activity/vocab/${topic.id}`}
            state={{ data: topic.data }}
            key={topic.id}
            className="vocab-card"
          >
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
