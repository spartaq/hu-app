import ModalRender from "./ModalRender.js"

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
import HuExplanationBasicPhrasesData from "../Utils/Activities/Data/grammarexplanation/explanation_basicphrases.json";
// DIALOGUE
import HuDialogueLenniData from "../Utils/Activities/Data/dialogues/dialogue_lenni.json";
import HuDialogueJelenDefData from "../Utils/Activities/Data/dialogues/dialogue_jelendef.json";
import HuDialogueJelenIndefData from "../Utils/Activities/Data/dialogues/dialogue_jelenindef.json";
import HuDialogueMultData from "../Utils/Activities/Data/dialogues/dialogue_mult.json";
import HuDialogueVanData from "../Utils/Activities/Data/dialogues/dialogue_van.json";
import HuDialogueNekivanData from "../Utils/Activities/Data/dialogues/dialogue_nekivan.json";
import HuDialogueJovoData from "../Utils/Activities/Data/dialogues/dialogue_jovo.json";
import HuDialogueBirtoklasData from "../Utils/Activities/Data/dialogues/dialogue_birtoklas.json";
import HuDialogueNevmasData from "../Utils/Activities/Data/dialogues/dialogue_nevmas.json";
import HuDialogueNevutoData from "../Utils/Activities/Data/dialogues/dialogue_nevuto.json";
import HuDialogueHasonlitasData from "../Utils/Activities/Data/dialogues/dialogue_hasonlitas.json";
import HuDialogueFokuszData from "../Utils/Activities/Data/dialogues/dialogue_fokusz.json";
import HuDialogueHarmoniaData from "../Utils/Activities/Data/dialogues/dialogue_harmonia.json";
import HuDialogueBasicPhrasesData from "../Utils/Activities/Data/dialogues/dialogue_basicphrases.json";

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
import HuBasicphrasesQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_basicphrases.json";
// TAPAUDIO
import HuTapAudioLenniData from "../Utils/Activities/Data/tapaudio/tapaudio_lenni.json";
import HuTapAudioJelenDefData from "../Utils/Activities/Data/tapaudio/tapaudio_jelendef.json";
import HuTapAudioJelenIndefData from "../Utils/Activities/Data/tapaudio/tapaudio_jelenindef.json";
import HuTapAudioMultData from "../Utils/Activities/Data/tapaudio/tapaudio_mult.json";
import HuTapAudioVanData from "../Utils/Activities/Data/tapaudio/tapaudio_van.json";
import HuTapAudioNekivanData from "../Utils/Activities/Data/tapaudio/tapaudio_nekivan.json";
import HuTapAudioJovoData from "../Utils/Activities/Data/tapaudio/tapaudio_jovo.json";
import HuTapAudioBirtoklasData from "../Utils/Activities/Data/tapaudio/tapaudio_birtoklas.json";
import HuTapAudioNevmasData from "../Utils/Activities/Data/tapaudio/tapaudio_nevmas.json";
import HuTapAudioNevutoData from "../Utils/Activities/Data/tapaudio/tapaudio_nevuto.json";
import HuTapAudioHasonlitasData from "../Utils/Activities/Data/tapaudio/tapaudio_hasonlitas.json";
import HuTapAudioFokuszData from "../Utils/Activities/Data/tapaudio/tapaudio_fokusz.json";
import HuTapAudioHarmoniaData from "../Utils/Activities/Data/tapaudio/tapaudio_harmonia.json";
import HuTapAudioBasicPhrasesData from "../Utils/Activities/Data/tapaudio/tapaudio_basicphrases.json";


// IMAGEMATCH
import HuImageMatchLenniData from "../Utils/Activities/Data/imagematch/imagematch_lenni.json";
import HuImageMatchJelenDefData from "../Utils/Activities/Data/imagematch/imagematch_jelendef.json";
import HuImageMatchJelenIndefData from "../Utils/Activities/Data/imagematch/imagematch_jelenindef.json";
import HuImageMatchMultData from "../Utils/Activities/Data/imagematch/imagematch_mult.json";
import HuImageMatchVanData from "../Utils/Activities/Data/imagematch/imagematch_van.json";
import HuImageMatchNekivanData from "../Utils/Activities/Data/imagematch/imagematch_nekivan.json";
import HuImageMatchJovoData from "../Utils/Activities/Data/imagematch/imagematch_jovo.json";
import HuImageMatchBirtoklasData from "../Utils/Activities/Data/imagematch/imagematch_birtoklas.json";
import HuImageMatchNevmasData from "../Utils/Activities/Data/imagematch/imagematch_nevmas.json";
import HuImageMatchNevutoData from "../Utils/Activities/Data/imagematch/imagematch_nevuto.json";
import HuImageMatchHasonlitasData from "../Utils/Activities/Data/imagematch/imagematch_hasonlitas.json";
import HuImageMatchFokuszData from "../Utils/Activities/Data/imagematch/imagematch_fokusz.json";
import HuImageMatchHarmoniaData from "../Utils/Activities/Data/imagematch/imagematch_harmonia.json";
import HuImageMatchBasicPhrasesData from "../Utils/Activities/Data/imagematch/imagematch_basicphrases.json";

// AUDIOWORDMATCH
import HuAudioWordMatchLenniData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_lenni.json";
import HuAudioWordMatchJelenDefData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_jelendef.json";
import HuAudioWordMatchJelenIndefData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_jelenindef.json";
import HuAudioWordMatchMultData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_mult.json";
import HuAudioWordMatchVanData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_van.json";
import HuAudioWordMatchNekivanData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_nekivan.json";
import HuAudioWordMatchJovoData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_jovo.json";
import HuAudioWordMatchBirtoklasData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_birtoklas.json";
import HuAudioWordMatchNevmasData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_nevmas.json";
import HuAudioWordMatchNevutoData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_nevuto.json";
import HuAudioWordMatchHasonlitasData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_hasonlitas.json";
import HuAudioWordMatchFokuszData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_fokusz.json";
import HuAudioWordMatchHarmoniaData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_harmonia.json";
import HuAudioWordMatchBasicPhrasesData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_basicphrases.json";

// GRAMMAR
import HuGrammarJelenIndefData from "../Utils/Activities/Data/grammar/jelenidoindef.json";
// WORDORDER
import orderingLenniData from "../Utils/Activities/Data/ordering/wordorder_lenni.json";
import orderingJelenDefData from "../Utils/Activities/Data/ordering/wordorder_jelendef.json";
import orderingJelenIndefData from "../Utils/Activities/Data/ordering/wordorder_jelenindef.json";
import orderingMultData from "../Utils/Activities/Data/ordering/wordorder_mult.json";
import orderingVanData from "../Utils/Activities/Data/ordering/wordorder_van.json";
import orderingNekivanData from "../Utils/Activities/Data/ordering/wordorder_nekivan.json";
import orderingJovoData from "../Utils/Activities/Data/ordering/wordorder_jovo.json";
import orderingBirtoklasData from "../Utils/Activities/Data/ordering/wordorder_birtoklas.json";
import orderingNevmasData from "../Utils/Activities/Data/ordering/wordorder_nevmas.json";
import orderingNevutoData from "../Utils/Activities/Data/ordering/wordorder_nevuto.json";
import orderingHasonlitasData from "../Utils/Activities/Data/ordering/wordorder_hasonlitas.json";
import orderingFokuszData from "../Utils/Activities/Data/ordering/wordorder_fokusz.json";
import orderingHarmoniaData from "../Utils/Activities/Data/ordering/wordorder_harmonia.json";
import orderingBasicPhrasesData from "../Utils/Activities/Data/ordering/wordorder_basicphrases.json";



// VOCABMATCH
import vocabmatchLenniData from "../Utils/Activities/Data/vocabmatch/vocabmatch_lenni.json";
import vocabmatchJelenidoDefData from "../Utils/Activities/Data/vocabmatch/vocabmatch_jelendef.json";
import vocabmatchJelenidoIndefData from "../Utils/Activities/Data/vocabmatch/vocabmatch_jelenindef.json";
import vocabmatchMultidoData from "../Utils/Activities/Data/vocabmatch/vocabmatch_mult.json";
import vocabmatchVanData from "../Utils/Activities/Data/vocabmatch/vocabmatch_van.json";
import vocabmatchNekivanData from "../Utils/Activities/Data/vocabmatch/vocabmatch_nekivan.json";
import vocabmatchJovoData from "../Utils/Activities/Data/vocabmatch/vocabmatch_jovo.json";
import vocabmatchBirtoklasData from "../Utils/Activities/Data/vocabmatch/vocabmatch_birtoklas.json";
import vocabmatchNevmasData from "../Utils/Activities/Data/vocabmatch/vocabmatch_nevmas.json";
import vocabmatchNevutoData from "../Utils/Activities/Data/vocabmatch/vocabmatch_nevuto.json";
import vocabmatchHasonlitasData from "../Utils/Activities/Data/vocabmatch/vocabmatch_hasonlitas.json";
import vocabmatchFokuszData from "../Utils/Activities/Data/vocabmatch/vocabmatch_fokusz.json";
import vocabmatchHarmoniaData from "../Utils/Activities/Data/vocabmatch/vocabmatch_harmonia.json";
import vocabmatchBasicphrasesData from "../Utils/Activities/Data/vocabmatch/vocabmatch_basicphrases.json";

// READING
import readingParentsFootballMatch from "../Utils/Activities/Data/reading/readingParentsFootball.js";
import readingStreamingFatigue from "../Utils/Activities/Data/reading/readingStreamingFatigue.js";
import readingANevemBob from "../Utils/Activities/Data/reading/readingANevemBob.js";
import readingEssityAccount from "../Utils/Activities/Data/reading/readingEssityAccount.js";
import readingSimplePresent from "../Utils/Activities/Data/reading/readingSimplePresent.js";
// VIDEO
import videoPhones from "../Utils/Activities/Data/videos/phones.js";
import videoSpotify from "../Utils/Activities/Data/videos/spotify.js";
// LESSONCOMPLETE
import lessoncompleteLenniData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_lenni.json";
import lessoncompleteJelendefData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_jelendef.json";
import lessoncompleteJelenindefData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_jelenindef.json";
import lessoncompleteMultData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_mult.json";
import lessoncompleteVanData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_van.json";
import lessoncompleteNekivanData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_nekivan.json";
import lessoncompleteJovoData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_jovo.json";
import lessoncompleteBirtoklasData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_birtoklas.json";
import lessoncompleteNevmasData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_nevmas.json";
import lessoncompleteNevutoData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_nevuto.json";
import lessoncompleteHasonlitasData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_hasonlitas.json";
import lessoncompleteFokuszData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_fokusz.json";
import lessoncompleteHarmoniaData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_harmonia.json";
import lessoncompleteBasicphrasesData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_basicphrases.json";

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
    basicphrases: HuExplanationBasicPhrasesData
  },

  dialogue: {
    lenni: HuDialogueLenniData,
    jelenDef: HuDialogueJelenDefData,
    jelenIndef: HuDialogueJelenIndefData,
    mult: HuDialogueMultData,
    van: HuDialogueVanData,
    nekivan: HuDialogueNekivanData,
    jovo: HuDialogueJovoData,
    birtoklas: HuDialogueBirtoklasData,
    nevmas: HuDialogueNevmasData,
    nevuto: HuDialogueNevutoData,
    hasonlitas: HuDialogueHasonlitasData,
    fokusz: HuDialogueFokuszData,
    harmonia: HuDialogueHarmoniaData,
    basicphrases: HuDialogueBasicPhrasesData
  },

  tapaudio: {
    lenni: HuTapAudioLenniData,
    jelenDef: HuTapAudioJelenDefData,
    jelenIndef: HuTapAudioJelenIndefData,
    mult: HuTapAudioMultData,
    van: HuTapAudioVanData,
    nekivan: HuTapAudioNekivanData,
    jovo: HuTapAudioJovoData,
    birtoklas: HuTapAudioBirtoklasData,
    nevmas: HuTapAudioNevmasData,
    nevuto: HuTapAudioNevutoData,
    hasonlitas: HuTapAudioHasonlitasData,
    fokusz: HuTapAudioFokuszData,
    harmonia: HuTapAudioHarmoniaData,
    basicphrases: HuTapAudioBasicPhrasesData
  },

  imagematch: {
    lenni: HuImageMatchLenniData,
    jelenDef: HuImageMatchJelenDefData,
    jelenIndef: HuImageMatchJelenIndefData,
    mult: HuImageMatchMultData,
    van: HuImageMatchVanData,
    nekivan: HuImageMatchNekivanData,
    jovo: HuImageMatchJovoData,
    birtoklas: HuImageMatchBirtoklasData,
    nevmas: HuImageMatchNevmasData,
    nevuto: HuImageMatchNevutoData,
    hasonlitas: HuImageMatchHasonlitasData,
    fokusz: HuImageMatchFokuszData,
    harmonia: HuImageMatchHarmoniaData,
    basicphrases: HuImageMatchBasicPhrasesData
  },  

  audiowordmatch: {
    lenni: HuAudioWordMatchLenniData,
    jelenDef: HuAudioWordMatchJelenDefData,
    jelenIndef: HuAudioWordMatchJelenIndefData,
    mult: HuAudioWordMatchMultData,
    van: HuAudioWordMatchVanData,
    nekivan: HuAudioWordMatchNekivanData,
    jovo: HuAudioWordMatchJovoData,
    birtoklas: HuAudioWordMatchBirtoklasData,
    nevmas: HuAudioWordMatchNevmasData,
    nevuto: HuAudioWordMatchNevutoData,
    hasonlitas: HuAudioWordMatchHasonlitasData,
    fokusz: HuAudioWordMatchFokuszData,
    harmonia: HuAudioWordMatchHarmoniaData,
    basicphrases: HuAudioWordMatchBasicPhrasesData
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
    basicphrases: HuBasicphrasesQuizData
  },

  ordering: {
   lenni: orderingLenniData,
    jelenDef: orderingJelenDefData,
    jelenIndef: orderingJelenIndefData,
    mult: orderingMultData,
    van: orderingVanData,
    nekivan: orderingNekivanData,
    jovo: orderingJovoData,
    birtoklas: orderingBirtoklasData,
    nevmas: orderingNevmasData,
    nevuto: orderingNevutoData,
    hasonlitas: orderingHasonlitasData,
    fokusz: orderingFokuszData,
    harmonia: orderingHarmoniaData,
    basicphrases: orderingBasicPhrasesData
  },

 vocabmatch: {
  lenni: vocabmatchLenniData,
  jelenDef: vocabmatchJelenidoDefData,
  jelenIndef: vocabmatchJelenidoIndefData,
  mult: vocabmatchMultidoData,
  van: vocabmatchVanData,
  nekivan: vocabmatchNekivanData,
  jovo: vocabmatchJovoData,
  birtoklas: vocabmatchBirtoklasData,
  nevmas: vocabmatchNevmasData,
  nevuto: vocabmatchNevutoData,
  hasonlitas: vocabmatchHasonlitasData,
  fokusz: vocabmatchFokuszData,
  harmonia: vocabmatchHarmoniaData,
  basicphrases: vocabmatchBasicphrasesData
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

  lessoncomplete: {
  basicphrases: lessoncompleteBasicphrasesData,
  lenni: lessoncompleteLenniData,
  jelendef: lessoncompleteJelendefData,
  jelenindef: lessoncompleteJelenindefData,
  mult: lessoncompleteMultData,
  van: lessoncompleteVanData,
  nekivan: lessoncompleteNekivanData,
  jovo: lessoncompleteJovoData,
  birtoklas: lessoncompleteBirtoklasData,
  nevmas: lessoncompleteNevmasData,
  nevuto: lessoncompleteNevutoData,
  hasonlitas: lessoncompleteHasonlitasData,
  fokusz: lessoncompleteFokuszData,
  harmonia: lessoncompleteHarmoniaData,
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
    (type === "vocabmatch" && (!data || !Array.isArray(data.pairs))) ||
    (type === "grammar" && (!data || !Array.isArray(data.sentences))) ||
    (type === "reading" && !data) ||
    (type === "video" && !data) ||
    (type === "dialogue" && !data) ||
    (type === "lessoncomplete" && !data)
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
