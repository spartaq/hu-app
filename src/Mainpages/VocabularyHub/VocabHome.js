import React from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/VocabularyHub.css";

const VocabHome = () => {
  const navigate = useNavigate();

  return (
    <div className="vocab-home">
      <h1>Learn Vocabulary</h1>

      <button onClick={() => navigate("/vocab/topics")}>
        Browse Topics
      </button>
    </div>
  );
};

export default VocabHome;
