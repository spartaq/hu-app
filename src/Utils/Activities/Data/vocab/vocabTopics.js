// src/Utils/Activities/Data/vocab/vocabTopics.js
import vocabTravelData from "./vocab_travel.json";
import vocabVerbsData from "./vocab_verbs.json";
import vocabMultData from "./vocab_mult.json";

export const VOCAB_TOPICS = [
  {
    id: "travel",
    title: "Travel Vocabulary",
    description: "Words and phrases for traveling in Hungary.",
    data: vocabTravelData
  },
  {
    id: "verbs",
    title: "Common Verbs",
    description: "Essential verbs for beginners.",
    data: vocabVerbsData
  },
  {
    id: "mult",
    title: "Miscellaneous Vocabulary",
    description: "A mix of useful words and phrases.",
    data: vocabMultData
  }
];
