import React, { useState, useEffect } from 'react';
import idiomsList from '../VocabularyListComps/Data/idiomslist.json';

const IdiomsList = ({ topic }) => {
  const [selectedTopic, setSelectedTopic] = useState('all');

  useEffect(() => {
    if (topic) {
      setSelectedTopic(topic);
    }
  }, [topic]);

  // Extract unique topics from the JSON data
  const topics = ['all', ...new Set(idiomsList.map((item) => item.topic))];

  // Filter idioms based on the selected topic
  const filteredIdioms = selectedTopic === 'all'
    ? idiomsList
    : idiomsList.filter((item) => item.topic === selectedTopic);

  return (
    <div>
      <div>Idioms</div>

      {/* Dropdown for selecting topic */}
      <div>
        <label htmlFor="topic-select">Filter by topic: </label>&nbsp;&nbsp;
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

      {/* Display filtered idioms */}
      <div className="grammar-display-grid">
        {filteredIdioms.map((item, index) => (
          <div key={index} className="idiom-item">
            <strong>{item.word}</strong>: {item.definition}
            <p><i>{item.example}</i></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdiomsList;
