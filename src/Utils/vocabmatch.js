import { useState, useEffect, useMemo } from "react";
import SentenceOrderingBlock from "../Utils/sentenceOrderingBlock";
import sentenceOrderingData from "../Utils/Data/ordering/wordorder_present.json";

export default function TouchInteractionExercise({ data, topic = "", type = "definition-match", text = "", categories = [] }) {
  const filteredData = useMemo(() => {
    return topic
      ? data.filter(item => item.topic?.toLowerCase() === topic.toLowerCase())
      : data;
  }, [data, topic]);

  const [matchedPairs, setMatchedPairs] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [categorizedWords, setCategorizedWords] = useState({});
  const [usedWords, setUsedWords] = useState({});
  const [answers, setAnswers] = useState({});  // NEW: Add state to track answers for gap-fill

  const [shuffledDefinitions, setShuffledDefinitions] = useState([]);

  useEffect(() => {
    if (type === "definition-match") {
      const defs = [...filteredData];
      for (let i = defs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [defs[i], defs[j]] = [defs[j], defs[i]];
      }
      setShuffledDefinitions(defs);
    }
  }, [filteredData, type]);

  const orderingEntry = filteredData.find(item => item.type === "sentence-ordering");
  const correctWords = orderingEntry?.sentence.split(" ") || [];

  const [shuffledWords, setShuffledWords] = useState([]);
  const [selectedWordIndex, setSelectedWordIndex] = useState(null);
  const [placedWords, setPlacedWords] = useState(Array(correctWords.length).fill(null));

  useEffect(() => {
    if (orderingEntry) {
      const wordsWithIndex = orderingEntry.sentence
        .split(" ")
        .map((word, index) => ({ word, id: index }));
      setShuffledWords(shuffleArray(wordsWithIndex));
      setPlacedWords(Array(wordsWithIndex.length).fill(null));
      setSelectedWordIndex(null);
    }
  }, [orderingEntry]);

  const shuffleArray = (arr) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const resetSentenceOrdering = () => {
    const wordsWithIndex = correctWords.map((word, index) => ({ word, id: index }));
    setShuffledWords(shuffleArray(wordsWithIndex));
    setPlacedWords(Array(correctWords.length).fill(null));
    setSelectedWordIndex(null);
  };

  const isCorrectPlacement = (wordObj, position) => {
    return correctWords[position] === wordObj.word;
  };

  const handleWordClick = (word) => {
    setSelectedWord(word === selectedWord ? null : word);
  };

  const handleDefinitionClick = (targetWord) => {
    if (selectedWord === targetWord) {
      setMatchedPairs(prev => [...prev, selectedWord]);
      setSelectedWord(null);
    }
  };

  const handleCategoryClick = (category) => {
    if (!selectedWord) return;
    const correctCategory = filteredData.find(item => item.word === selectedWord)?.category;
    if (correctCategory === category) {
      setCategorizedWords(prev => ({ ...prev, [selectedWord]: category }));
    }
    setSelectedWord(null);
  };

  const resetExercise = () => {
    setMatchedPairs([]);
    setSelectedWord(null);
    setCategorizedWords({});
    setUsedWords({});
    setAnswers({});  // RESET the answers for gap-fill
    if (type === "definition-match") {
      const defs = [...filteredData];
      for (let i = defs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [defs[i], defs[j]] = [defs[j], defs[i]];
      }
      setShuffledDefinitions(defs);
    }
  };

  const uniqueCategories = categories.length > 0
    ? categories
    : [...new Set(filteredData.map(item => item.category))];

  return (
    <div>

      {/* DEFINITION MATCHING */}
      {type === "definition-match" && (
        <div className="vocab-container">
          <div className="words-container">
            {filteredData.map(item => (
              !matchedPairs.includes(item.word) && (
                <div
                  key={item.word}
                  onClick={() => handleWordClick(item.word)}
                  className={`draggable-word ${selectedWord === item.word ? "selected" : ""}`}
                  dangerouslySetInnerHTML={{ __html: item.word }}
                />
              )
            ))}
          </div>
          <div className="definitions-container">
            {shuffledDefinitions.map(item => (
              <div
                key={item.word}
                className={`droppable-definition ${matchedPairs.includes(item.word) ? "matched" : ""}`}
                onClick={() => handleDefinitionClick(item.word)}
              >
                {matchedPairs.includes(item.word) && (
                  <strong dangerouslySetInnerHTML={{ __html: item.word }} />
                )}
                <span dangerouslySetInnerHTML={{ __html: item.definition }} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CATEGORIZATION */}
      {type === "categorization" && (
        <div className="exercise-container">
          <div className="vocabcolumn-container">
            {filteredData.map(item => (
              !categorizedWords[item.word] && (
                <div
                  key={item.word}
                  onClick={() => handleWordClick(item.word)}
                  className={`draggable-word ${selectedWord === item.word ? "selected" : ""}`}
                >
                  {item.word}
                </div>
              )
            ))}
          </div>
          <div className="categories-container" style={{ display: "flex", justifyContent: "space-around" }}>
            {uniqueCategories.map(category => (
              <div
                key={category}
                className="category-column"
                onClick={() => handleCategoryClick(category)}
                style={{ padding: "10px", border: "1px solid black", width: "200px", cursor: "pointer" }}
              >
                <h3>{category}</h3>
                <div className="dropped-words">
                  {filteredData
                    .filter(item => categorizedWords[item.word] === category)
                    .map(item => (
                      <div
                        key={item.word}
                        className="categorized-word"
                        style={{ margin: "5px", padding: "5px", border: "1px solid gray" }}
                      >
                        {item.word}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* GAP-FILL */}
      {type === "gap-fill" && (
        <div className="gap-fill-container">
          <div className="word-bank">
            {filteredData.find(item => item.topic === topic)?.words?.map((word, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedWord(word)}
                className={`word-bank-button ${selectedWord === word ? "selected" : ""}`}
              >
                {word}
              </button>
            ))}
          </div>

          <div className="gap-fill-text">
            {Array.isArray(text)
              ? text.map((line, lineIdx) => (
                  <p key={lineIdx}>
                    {line.split("___").map((chunk, idx, arr) => (
                      <span key={idx}>
                        {chunk}
                        {idx < arr.length - 1 && (
                          <span
                            className="gap"
                            onClick={() => {
                              if (!selectedWord) return;
                              setAnswers(prev => ({
                                ...prev,
                                [`${lineIdx}-${idx}`]: selectedWord
                              }));
                              setSelectedWord(null);
                            }}
                          >
                            {answers[`${lineIdx}-${idx}`] || "___"}
                          </span>
                        )}
                      </span>
                    ))}
                  </p>
                ))
              : text.split("___").map((chunk, idx, arr) => (
                  <span key={idx}>
                    {chunk}
                    {idx < arr.length - 1 && (
                      <span
                        className="gap"
                        onClick={() => {
                          if (!selectedWord) return;
                          setAnswers(prev => ({
                            ...prev,
                            [`${idx}`]: selectedWord
                          }));
                          setSelectedWord(null);
                        }}
                      >
                        {answers[`${idx}`] || "___"}
                      </span>
                    )}
                  </span>
                ))}
          </div>
        </div>
      )}

      {/* PLACEHOLDERS FOR OTHER TYPES */}
      {type === "sentence-ordering" && (
  <div className="sentence-ordering-container">
    {sentenceOrderingData.map((exercise, index) => (
      <SentenceOrderingBlock key={exercise.id} exercise={exercise} />
    ))}
  </div>
)}

    </div>
  );
}


