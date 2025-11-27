import ExerciseSection from "../Utils/modalRender.js";

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
// DIALOGUE
import HuDialogueLenniData from "../Utils/Activities/Data/dialogues/lenniDialogue.json";
// EXERCISEQUIZ
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
// TAPAUDIO
import HuTapAudioLenniData from "../Utils/Activities/Data/tapaudio/lenni_tapaudio.json";
// IMAGEMATCH
import HuImageMatchLenniData from "../Utils/Activities/Data/imagematch/lenni_imagematch.json";
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
import vocabLenniData from "../Utils/Activities/Data/vocab/vocab_lenni.json";
import vocabJelenidoDefData from "../Utils/Activities/Data/vocab/vocab_jelendef.json";
import vocabJelenidoIndefData from "../Utils/Activities/Data/vocab/vocab_jelenindef.json";
import vocabMultidoData from "../Utils/Activities/Data/vocab/vocab_mult.json";
import vocabVanData from "../Utils/Activities/Data/vocab/vocab_van.json";
import vocabNekivanData from "../Utils/Activities/Data/vocab/vocab_nekivan.json";
import vocabJovoData from "../Utils/Activities/Data/vocab/vocab_jovo.json";
import vocabBirtoklasData from "../Utils/Activities/Data/vocab/vocab_birtoklas.json";
import vocabNevmasData from "../Utils/Activities/Data/vocab/vocab_nevmas.json";
import vocabNevutoData from "../Utils/Activities/Data/vocab/vocab_nevuto.json";
import vocabHasonlitasData from "../Utils/Activities/Data/vocab/vocab_hasonlitas.json";
import vocabFokuszData from "../Utils/Activities/Data/vocab/vocab_fokusz.json";
import vocabHarmoniaData from "../Utils/Activities/Data/vocab/vocab_harmonia.json";

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
    jelenidodef: HuExplanationJelenIdoDefData,
    jelenidoindef: HuExplanationJelenIdoIndefData,
    mult: HuExplanationMultIdoData,
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
