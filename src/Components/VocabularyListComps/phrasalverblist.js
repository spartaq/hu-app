import React, { useState, useEffect } from 'react';
import vocabularyList from '../VocabularyListComps/Data/phrasalverblist.json';

const VocabularyList = ({ topic }) => {
  const [selectedTopic, setSelectedTopic] = useState('all');

  useEffect(() => {
    if (topic) {
      setSelectedTopic(topic);
    }
  }, [topic]);

  // Extract unique topics from the JSON data
  const topics = ['all', ...new Set(vocabularyList.map((item) => item.topic))];

  // Filter vocabulary items based on the selected topic
  const filteredVocabulary = selectedTopic === 'all'
    ? vocabularyList
    : vocabularyList.filter((item) => item.topic === selectedTopic);

  return (
    <div>
      <div>Vocabulary List</div>

      {/* Dropdown for selecting topic */}
      <div>
        <label htmlFor="topic-select">Filter by topic: </label>
        <select
          id="topic-select"
          onChange={(e) => setSelectedTopic(e.target.value)}
          value={selectedTopic}
        >
          {topics.map((topicOption, index) => (
            <option key={index} value={topicOption}>
              {topicOption.charAt(0).toUpperCase() + topicOption.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Display filtered vocabulary */}
      <div className="grammar-display-grid">
        {filteredVocabulary.map((item, index) => (
          <div key={index} className="vocabulary-item">
            <strong>{item.word}</strong>: {item.definition}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VocabularyList;
