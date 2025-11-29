// src/Utils/Activities/Data/vocab/vocabTopics.js
import vocabMultData from "./vocabmatch_mult.json";
import vocabLenniData from "./vocabmatch_lenni.json";
import vocabJelenDefData from "./vocabmatch_jelendef.json";
import vocabJelenIndefData from "./vocabmatch_jelenindef.json";
import vocabVanData from "./vocabmatch_van.json";
import vocabNekivanData from "./vocabmatch_nekivan.json";
import vocabJovoData from "./vocabmatch_jovo.json";
import vocabBirtoklasData from "./vocabmatch_birtoklas.json";
import vocabNevmasData from "./vocabmatch_nevmas.json";
import vocabNevutoData from "./vocabmatch_nevuto.json";
import vocabHasonlitasData from "./vocabmatch_hasonlitas.json";
import vocabFokuszData from "./vocabmatch_fokusz.json";
import vocabHarmoniaData from "./vocabmatch_harmonia.json";

export const vocabmatch_TOPICS = [
  {
    id: "mult",
    title: "Miscellaneous Vocabulary",
    description: "A mix of useful words and phrases.",
    data: vocabMultData
  },
  {
    id: "lenni",
    title: "Lenni (to be)",
    description: "Conjugation and usage of 'to be'.",
    data: vocabLenniData
  },
  {
    id: "jelendef",
    title: "Present Tense (Definite)",
    description: "Definite conjugation forms in the present tense.",
    data: vocabJelenDefData
  },
  {
    id: "jelenindef",
    title: "Present Tense (Indefinite)",
    description: "Indefinite conjugation forms in the present tense.",
    data: vocabJelenIndefData
  },
  {
    id: "mult",
    title: "Past Tense",
    description: "Past tense conjugations and usage.",
    data: vocabMultData
  },
  {
    id: "van",
    title: "Van",
    description: "Usage of 'van' for existence and location.",
    data: vocabVanData
  },
  {
    id: "nekivan",
    title: "Neki van / nincs",
    description: "Expressing possession and lack with 'van/nincs'.",
    data: vocabNekivanData
  },
  {
    id: "jovo",
    title: "Future Tense",
    description: "Expressing future actions.",
    data: vocabJovoData
  },
  {
    id: "birtoklas",
    title: "Possession",
    description: "Vocabulary and structures for possession.",
    data: vocabBirtoklasData
  },
  {
    id: "nevmas",
    title: "Pronouns",
    description: "Personal, possessive, and demonstrative pronouns.",
    data: vocabNevmasData
  },
  {
    id: "nevuto",
    title: "Postpositions",
    description: "Hungarian postpositions (névutók) with examples.",
    data: vocabNevutoData
  },
  {
    id: "hasonlitas",
    title: "Comparison",
    description: "Forming comparatives and superlatives.",
    data: vocabHasonlitasData
  },
  {
    id: "fokusz",
    title: "Focus / Emphasis",
    description: "Structures for emphasizing parts of a sentence.",
    data: vocabFokuszData
  },
  {
    id: "harmonia",
    title: "Vowel Harmony",
    description: "Vocabulary and exercises for Hungarian vowel harmony.",
    data: vocabHarmoniaData
  }
];
