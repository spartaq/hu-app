import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import data from "./VocabWords.json";
import "../../CSS/VocabularyHub.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function VocabCards() {
  const { topicId } = useParams();
  const topic = data.topics.find(t => t.id === topicId);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);
   const audioRef = useRef(null);

   useEffect(() => {
  if (!topic) return;
  audioRef.current = new Audio(topic.audio);
}, [topic]);

  if (!topic) {
    return <div className="vocab-not-found">Topic not found.</div>;
  }

  

  const openModal = (word) => {
    setSelectedWord(word);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedWord(null);
    setModalOpen(false);
  };

  /** === Timestamp audio player === */




const playAudio = (word) => {
  if (!audioRef.current) return;

  const audio = audioRef.current;

  audio.currentTime = word.start / 1000;
  audio.play();

  const stop = () => {
    if (audio.currentTime >= word.end / 1000) {
      audio.pause();
      audio.removeEventListener("timeupdate", stop);
    }
  };

  audio.addEventListener("timeupdate", stop);
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
    <img src={word.image} alt={word.word} />
  ) : (
    <div className="vocab-img-placeholder">📷</div>
  )}
</div>

              <div>
                <div className="vocab-card-word">{word.word}</div>
                <div className="vocab-meta">
                  <span className="vocab-chip">{topic.title}</span>
                </div>
              </div>

              <div className="vocab-card-actions">
                <div className="vocab-meta">audio</div>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="vocab-footer">
        <button className="vocab-btn secondary">Browse</button>
        <button
          className="vocab-btn primary"
          onClick={() => topic.words.length && openModal(topic.words[0])}
        >
          Practice
        </button>
      </footer>

      {/* Modal */}
      {modalOpen && (
  <div className="vocab-modal show" role="dialog" aria-modal="true">
    <Swiper
      modules={[Navigation, Pagination, Keyboard]}
      pagination={{ clickable: true }}
      keyboard={{ enabled: true }}
      spaceBetween={24}
      slidesPerView={1}
      initialSlide={topic.words.findIndex(w => w.id === selectedWord?.id)}
      onSlideChange={(swiper) => {
        const idx = swiper.activeIndex;
        setSelectedWord(topic.words[idx]);
      }}
      className="vocab-modal-swiper"
    >
      {topic.words.map((word) => (
        <SwiperSlide key={word.id}>
          <div className="vocab-modal-card">
            <div className="modal-top">
              <div>
                <div className="modal-word">{word.word}</div>
                <div className="modal-ipa">
                  [{word.ipa || ""}] • {word.translation || ""}
                </div>
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:8, alignItems:"flex-end" }}>
                <button className="audio-btn" onClick={() => playAudio(word)}>
                  🔊 Play
                </button>
                <button className="vocab-btn secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>

            {word.image && (
              <div className="modal-img">
                <img src={word.image} alt={word.word} />
              </div>
            )}

            <div className="modal-body">
              Example: {word.example} — {word.example_translation}
            </div>

            <div className="modal-actions">
              <button className="action-again">Again</button>
              <button className="action-know">Got it</button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
)}



    </div>
  );
}
