import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "./VocabWords.json";
import "../../CSS/VocabularyHub.css";

const VocabCards = () => {
  const { topicId } = useParams();
  const topic = data.topics.find(t => t.id === topicId);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);

  if (!topic) {
    return <div className="vocab-not-found">Topic not found.</div>;
  }

  const openModal = (word) => {
    setSelectedWord(word);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedWord(null);
  };

  const playAudio = () => {
    // placeholder audio: beep
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = 880;
    o.connect(g);
    g.connect(ctx.destination);
    g.gain.value = 0.02;
    o.start();
    setTimeout(() => { o.stop(); ctx.close(); }, 180);
  };

  return (
    <div className="vocab-app">
      {/* Header */}
      <header className="vocab-header">
        <div>
          <h1>{topic.title}</h1>
          <div className="vocab-header-sub">
            {topic.words.length} words
          </div>
        </div>
      </header>

      {/* Grid */}
      <main className="vocab-main">
        <section className="vocab-grid">
          {topic.words.map(word => (
            <article
              key={word.id}
              className="vocab-card"
              tabIndex={0}
              onClick={() => openModal(word)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openModal(word);
              }}
            >
              <div className="vocab-card-imgwrap">
                {word.image ? (
                  <img src={word.image} alt={word.translation || word.word} />
                ) : (
                  <span className="vocab-img-placeholder">📄</span>
                )}
              </div>

              <div>
                <div className="vocab-card-word">{word.word}</div>
                <div className="vocab-meta">
                  <span className="vocab-level">{word.level || "A1"}</span>
                  <span className="vocab-chip">{topic.title}</span>
                </div>
              </div>

              <div className="vocab-card-actions">
                <div className="vocab-meta">audio • image</div>
                <div className="vocab-chip">{word.review || "new"}</div>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="vocab-footer">
        <button className="vocab-btn secondary">Browse</button>
        <button className="vocab-btn primary" onClick={() => topic.words.length && openModal(topic.words[0])}>
          Practice
        </button>
      </footer>

      {/* Modal */}
      {modalOpen && selectedWord && (
        <div className="vocab-modal show" role="dialog" aria-modal="true">
          <div className="vocab-modal-card">
            <div className="modal-top">
              <div>
                <div className="modal-word">{selectedWord.word}</div>
                <div className="modal-ipa">
                  [{selectedWord.ipa || ""}] • {selectedWord.translation || ""}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
                <button className="audio-btn" onClick={playAudio}>🔊 Play</button>
                <button className="vocab-btn secondary" onClick={closeModal}>Close</button>
              </div>
            </div>
            <div className="modal-img">
              {selectedWord.image && <img src={selectedWord.image} alt={selectedWord.word} />}
            </div>
            <div className="modal-body">
              Example: Ez egy {selectedWord.word}. — This is a {selectedWord.translation}.
            </div>
            <div className="modal-actions">
              <button className="action-again">Again</button>
              <button className="action-know">Got it</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VocabCards;
