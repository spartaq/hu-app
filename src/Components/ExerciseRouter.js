import ExerciseSection from "../Utils/exercisesection.js";

/* ---------------------- IMPORTS ---------------------- */

// EXPLANATION
import HuExplanationLenniData from "../Utils/Activities/Data/grammarexplanation/lenniexplanation.json";
import HuExplanationJelenIdoDefData from "../Utils/Activities/Data/grammarexplanation/jelendefexplanation.json";
import HuExplanationJelenIdoIndefData from "../Utils/Activities/Data/grammarexplanation/jelenindefexplanation.json";
import HuExplanationMultIdoData from "../Utils/Activities/Data/grammarexplanation/multexplanation.json";
import HuExplanationVanData from "../Utils/Activities/Data/grammarexplanation/vanexplanation.json";
import HuExplanationNekivanData from "../Utils/Activities/Data/grammarexplanation/nekivanexplanation.json";
import HuExplanationJovoData from "../Utils/Activities/Data/grammarexplanation/jovoexplanation.json";
import HuExplanationBirtoklasData from "../Utils/Activities/Data/grammarexplanation/birtoklasexplanation.json";
import HuExplanationNevmasData from "../Utils/Activities/Data/grammarexplanation/nevmasexplanation.json";
import HuExplanationNevutoData from "../Utils/Activities/Data/grammarexplanation/nevutoexplanation.json";
import HuExplanationHasonlitasData from "../Utils/Activities/Data/grammarexplanation/hasonlitasexplanation.json";
import HuExplanationFokuszData from "../Utils/Activities/Data/grammarexplanation/fokuszexplanation.json";
import HuExplanationHarmoniaData from "../Utils/Activities/Data/grammarexplanation/harmoniaexplanation.json";

import HuJelenIdoDefQuizData from "../Utils/Activities/Data/quiz/jelenidodefexercisequiz.json";
import HuJelenIdoIndefQuizData from "../Utils/Activities/Data/quiz/jelenidoindefexercisequiz.json";
import HuMultIdoQuizData from "../Utils/Activities/Data/quiz/multidoexercisequiz.json";
import HuLenniQuizData from "../Utils/Activities/Data/quiz/lenniexercisequiz.json";
import HuVanQuizData from "../Utils/Activities/Data/quiz/vanexercisequiz.json";
import HuNekivanQuizData from "../Utils/Activities/Data/quiz/nekivanexercisequiz.json";
import HuJovoQuizData from "../Utils/Activities/Data/quiz/jovoidoexercisequiz.json";
import HuBirtoklasQuizData from "../Utils/Activities/Data/quiz/birtoklasexercisequiz.json";
import HuNevmasQuizData from "../Utils/Activities/Data/quiz/nevmasexercisequiz.json";
import HuNevutoQuizData from "../Utils/Activities/Data/quiz/nevutoexercisequiz.json";
import HuHasonlitasQuizData from "../Utils/Activities/Data/quiz/hasonlitasexercisequiz.json";
import HuFokuszQuizData from "../Utils/Activities/Data/quiz/fokuszexercisequiz.json";
import HuHarmoniaQuizData from "../Utils/Activities/Data/quiz/harmoniaexercisequiz.json";

import HuGrammarJelenIndefData from "../Utils/Activities/Data/grammar/jelenidoindef.json";

import HuDialogueLenniData from "../Utils/Activities/Data/dialogues/lenniDialogue.json";

import orderingFokuszData from "../Utils/Activities/Data/ordering/wordorder_fokusz.json";
import orderingjelenIdoIndef from "../Utils/Activities/Data/ordering/wordorder_jelenidoindef.json";
import orderingVanData from "../Utils/Activities/Data/ordering/wordorder_van.json";

import vocabVerbsData from "../Utils/Activities/Data/vocab/vocab_verbs.json";
import vocabTravelData from "../Utils/Activities/Data/vocab/vocab_travel.json";
import vocabMultData from "../Utils/Activities/Data/vocab/vocab_mult.json";

import readingParentsFootballMatch from "../Utils/Activities/Data/reading/readingParentsFootball.js";
import readingStreamingFatigue from "../Utils/Activities/Data/reading/readingStreamingFatigue.js";
import readingANevemBob from "../Utils/Activities/Data/reading/readingANevemBob.js";
import readingEssityAccount from "../Utils/Activities/Data/reading/readingEssityAccount.js";
import readingSimplePresent from "../Utils/Activities/Data/reading/readingSimplePresent.js";

import videoPhones from "../Utils/Activities/Data/videos/phones.js";
import videoSpotify from "../Utils/Activities/Data/videos/spotify.js";

/* --------------------------------------------------------- */
/* ----------------------- LOOK HERE ------------------------ */
/* --------------------------------------------------------- */

/*
  ALL ROUTING LOGIC is now organized in a clean object structure.
  Type → subtype → dataset
*/

const DATA_MAP = {
  explanation: {
    lenni: HuExplanationLenniData,
    jelenidodef: HuExplanationJelenIdoDefData,
    jelenidoindef: HuExplanationJelenIdoIndefData,
    multido: HuExplanationMultIdoData,
    van: HuExplanationVanData,
    nekivan: HuExplanationNekivanData,
    jovo: HuExplanationJovoData,
    birtoklas: HuExplanationBirtoklasData,
    nevmas: HuExplanationNevmasData,
    nevuto: HuExplanationNevutoData,
    hasonlitas: HuExplanationHasonlitasData,
    fokusz: HuExplanationFokuszData,
    harmonia: HuExplanationHarmoniaData,
  },

  dialogue: {
    lenni: HuDialogueLenniData,
  },

  quiz: {
    jelenidodef: HuJelenIdoDefQuizData,
    jelenidoindef: HuJelenIdoIndefQuizData,
    multido: HuMultIdoQuizData,
    lenni: HuLenniQuizData,
    van: HuVanQuizData,
    nekivan: HuNekivanQuizData,
    jovo: HuJovoQuizData,
    birtoklas: HuBirtoklasQuizData,
    nevmas: HuNevmasQuizData,
    nevuto: HuNevutoQuizData,
    hasonlitas: HuHasonlitasQuizData,
    fokusz: HuFokuszQuizData,
    harmonia: HuHarmoniaQuizData,
  },

  ordering: {
    fokusz: orderingFokuszData,
    jelenidoindef: orderingjelenIdoIndef,
    van: orderingVanData,
  },

  vocab: {
    verbs: vocabVerbsData,
    travel: vocabTravelData,
    mult: vocabMultData,
  },

  grammar: {
    jelenidoindef: HuGrammarJelenIndefData,
  },

  reading: {
    "parents-football-match": readingParentsFootballMatch,
    "streaming-fatigue": readingStreamingFatigue,
    "nevem-bob": readingANevemBob,
    "essityaccount": readingEssityAccount,
    "simplepresent": readingSimplePresent,
  },

  video: {
    phones: videoPhones,
    spotify: videoSpotify,
  },
};

/* --------------------------------------------------------- */

const ExerciseRouter = ({ type, subtype, scrollTargetRef }) => {
  const typeGroup = DATA_MAP[type];

  if (!typeGroup) {
    return <div>Error: Unknown exercise type "{type}".</div>;
  }

  // pick subtype or fallback to the first entry in the group
  const data = typeGroup[subtype] ?? Object.values(typeGroup)[0];

  // Validate shape before rendering ExerciseSection
  if (
    (type === "quiz" && (!data || !Array.isArray(data.questions))) ||
    (type === "ordering" && (!data || !Array.isArray(data))) ||
    (type === "vocab" && (!data || !Array.isArray(data.pairs))) ||
    (type === "grammar" && (!data || !Array.isArray(data.sentences))) ||
    (type === "reading" && !data) ||
    (type === "video" && !data) ||
    (type === "dialogue" && !data)
  ) {
    return <div>Error: Invalid data format for {type} → {subtype}</div>;
  }

  return (
    <ExerciseSection
      type={type}
      data={data}
      id={subtype}
      scrollTargetRef={scrollTargetRef}
    />
  );
};

export default ExerciseRouter;
