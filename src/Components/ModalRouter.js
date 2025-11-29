import ModalRender from "../Utils/modalRender.js";

/* ---------------------- IMPORTS ---------------------- */

// EXPLANATION
import HuExplanationLenniData from "../Utils/Activities/Data/grammarexplanation/explanation_lenni.json";
import HuExplanationJelenDefData from "../Utils/Activities/Data/grammarexplanation/explanation_jelendef.json";
import HuExplanationJelenIndefData from "../Utils/Activities/Data/grammarexplanation/explanation_jelenindef.json";
import HuExplanationMultData from "../Utils/Activities/Data/grammarexplanation/explanation_mult.json";
import HuExplanationVanData from "../Utils/Activities/Data/grammarexplanation/explanation_van.json";
import HuExplanationNekivanData from "../Utils/Activities/Data/grammarexplanation/explanation_nekivan.json";
import HuExplanationJovoData from "../Utils/Activities/Data/grammarexplanation/explanation_jovo.json";
import HuExplanationBirtoklasData from "../Utils/Activities/Data/grammarexplanation/explanation_birtoklas.json";
import HuExplanationNevmasData from "../Utils/Activities/Data/grammarexplanation/explanation_nevmas.json";
import HuExplanationNevutoData from "../Utils/Activities/Data/grammarexplanation/explanation_nevuto.json";
import HuExplanationHasonlitasData from "../Utils/Activities/Data/grammarexplanation/explanation_hasonlitas.json";
import HuExplanationFokuszData from "../Utils/Activities/Data/grammarexplanation/explanation_fokusz.json";
import HuExplanationHarmoniaData from "../Utils/Activities/Data/grammarexplanation/explanation_harmonia.json";
// DIALOGUE
import HuDialogueLenniData from "../Utils/Activities/Data/dialogues/dialogue_lenni.json";
// EXERCISEQUIZ
import HuJelenDefQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_jelendef.json";
import HuJelenIndefQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_jelenindef.json";
import HuMultQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_mult.json";
import HuLenniQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_lenni.json";
import HuVanQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_van.json";
import HuNekivanQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_nekivan.json";
import HuJovoQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_jovo.json";
import HuBirtoklasQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_birtoklas.json";
import HuNevmasQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_nevmas.json";
import HuNevutoQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_nevuto.json";
import HuHasonlitasQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_hasonlitas.json";
import HuFokuszQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_fokusz.json";
import HuHarmoniaQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_harmonia.json";
// TAPAUDIO
import HuTapAudioLenniData from "../Utils/Activities/Data/tapaudio/tapaudio_lenni.json";
// IMAGEMATCH
import HuImageMatchLenniData from "../Utils/Activities/Data/imagematch/imagematch_lenni.json";
// AUDIOWORDMATCH
import HuAudioWordMatchLenniData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_lenni.json";
// GRAMMAR
import HuGrammarJelenIndefData from "../Utils/Activities/Data/grammar/jelenidoindef.json";
// WORDORDER
import orderingFokuszData from "../Utils/Activities/Data/ordering/wordorder_fokusz.json";
import orderingjelenIndef from "../Utils/Activities/Data/ordering/wordorder_jelenindef.json";
import orderingVanData from "../Utils/Activities/Data/ordering/wordorder_van.json";
import orderingLenniData from "../Utils/Activities/Data/ordering/wordorder_lenni.json";
// VOCABMATCH
import vocabLenniData from "../Utils/Activities/Data/vocabmatch/vocabmatch_lenni.json";
import vocabJelenidoDefData from "../Utils/Activities/Data/vocabmatch/vocabmatch_jelendef.json";
import vocabJelenidoIndefData from "../Utils/Activities/Data/vocabmatch/vocabmatch_jelenindef.json";
import vocabMultidoData from "../Utils/Activities/Data/vocabmatch/vocabmatch_mult.json";
import vocabVanData from "../Utils/Activities/Data/vocabmatch/vocabmatch_van.json";
import vocabNekivanData from "../Utils/Activities/Data/vocabmatch/vocabmatch_nekivan.json";
import vocabJovoData from "../Utils/Activities/Data/vocabmatch/vocabmatch_jovo.json";
import vocabBirtoklasData from "../Utils/Activities/Data/vocabmatch/vocabmatch_birtoklas.json";
import vocabNevmasData from "../Utils/Activities/Data/vocabmatch/vocabmatch_nevmas.json";
import vocabNevutoData from "../Utils/Activities/Data/vocabmatch/vocabmatch_nevuto.json";
import vocabHasonlitasData from "../Utils/Activities/Data/vocabmatch/vocabmatch_hasonlitas.json";
import vocabFokuszData from "../Utils/Activities/Data/vocabmatch/vocabmatch_fokusz.json";
import vocabHarmoniaData from "../Utils/Activities/Data/vocabmatch/vocabmatch_harmonia.json";

// READING
import readingParentsFootballMatch from "../Utils/Activities/Data/reading/readingParentsFootball.js";
import readingStreamingFatigue from "../Utils/Activities/Data/reading/readingStreamingFatigue.js";
import readingANevemBob from "../Utils/Activities/Data/reading/readingANevemBob.js";
import readingEssityAccount from "../Utils/Activities/Data/reading/readingEssityAccount.js";
import readingSimplePresent from "../Utils/Activities/Data/reading/readingSimplePresent.js";
// VIDEO
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
    jelenidodef: HuExplanationJelenDefData,
    jelenidoindef: HuExplanationJelenIndefData,
    mult: HuExplanationMultData,
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

  tapaudio: {
    lenni: HuTapAudioLenniData,
  },

  imagematch: {
    lenni: HuImageMatchLenniData,
  },  

  audiowordmatch: {
    lenni: HuAudioWordMatchLenniData,
  },  

  quiz: {
    jelenidodef: HuJelenDefQuizData,
    jelenidoindef: HuJelenIndefQuizData,
    multido: HuMultQuizData,
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
    jelenidoindef: orderingjelenIndef,
    van: orderingVanData,
    lenni: orderingLenniData
  },

 vocab: {
  lenni: vocabLenniData,
  jelenDef: vocabJelenidoDefData,
  jelenIndef: vocabJelenidoIndefData,
  mult: vocabMultidoData,
  van: vocabVanData,
  nekivan: vocabNekivanData,
  jovo: vocabJovoData,
  birtoklas: vocabBirtoklasData,
  nevmas: vocabNevmasData,
  nevuto: vocabNevutoData,
  hasonlitas: vocabHasonlitasData,
  fokusz: vocabFokuszData,
  harmonia: vocabHarmoniaData,
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

const ModalRouter = ({ type, subtype, scrollTargetRef }) => {
  const typeGroup = DATA_MAP[type];

  if (!typeGroup) {
    return <div>Error: Unknown exercise type "{type}".</div>;
  }

  // pick subtype or fallback to the first entry in the group
  const data = typeGroup[subtype] ?? Object.values(typeGroup)[0];

  // Validate shape before rendering ModalRender
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
    <ModalRender
      type={type}
      data={data}
      id={subtype}
      scrollTargetRef={scrollTargetRef}
    />
  );
};

export default ModalRouter;
