import ModalRender from "./ModalRender.js"

/* ---------------------- IMPORTS ---------------------- */



// **GRAMMAREXPLANATION
import HuExplanationSoundsData from "../Utils/Activities/Data/grammarexplanation/explanation_sounds.json";
import HuExplanationBasicquestionsData from "../Utils/Activities/Data/grammarexplanation/explanation_basicquestions.json";
import HuExplanationIrregularverbsData from "../Utils/Activities/Data/grammarexplanation/explanation_irregularverbs.json";
import HuExplanationNumbersData from "../Utils/Activities/Data/grammarexplanation/explanation_numbers.json";
import HuExplanationBasicadjectivesData from "../Utils/Activities/Data/grammarexplanation/explanation_basicadjectives.json";
import HuExplanationOrderingdrinksData from "../Utils/Activities/Data/grammarexplanation/explanation_orderingdrinks.json";
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
// **DIALOGUE
import HuDialogueSoundsallData from "../Utils/Activities/Data/dialogues/dialogue_soundsall.json";
import HuDialogueSoundsvowelsData from "../Utils/Activities/Data/dialogues/dialogue_soundsvowels.json";
import HuDialogueSoundsconsonantsData from "../Utils/Activities/Data/dialogues/dialogue_soundsconsonants.json";
import HuDialogueBasicquestionsData from "../Utils/Activities/Data/dialogues/dialogue_basicquestions.json";
import HuDialogueIrregularverbsData from "../Utils/Activities/Data/dialogues/dialogue_irregularverbs.json";
import HuDialogueBasicadjectivesData from "../Utils/Activities/Data/dialogues/dialogue_basicadjectives.json";
import HuDialogueNumbersData from "../Utils/Activities/Data/dialogues/dialogue_numbers.json";
import HuDialogueOrderingdrinksData from "../Utils/Activities/Data/dialogues/dialogue_orderingdrinks.json";
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

// **GRAMMARQUIZ
import HuGrammarquizSoundsData from "../Utils/Activities/Data/grammarquiz/grammarquiz_sounds.json";
import HuGrammarquizBasicquestionsData from "../Utils/Activities/Data/grammarquiz/grammarquiz_basicquestions.json";
import HuGrammarquizIrregularverbsData from "../Utils/Activities/Data/grammarquiz/grammarquiz_irregularverbs.json";
import HuGrammarquizBasicadjectivesData from "../Utils/Activities/Data/grammarquiz/grammarquiz_basicadjectives.json";
import HuGrammarquizNumbersData from "../Utils/Activities/Data/grammarquiz/grammarquiz_numbers.json";
import HuOrderingdrinksGrammarQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_orderingdrinks.json";
import HuJelenDefGrammarQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_jelendef.json";
import HuJelenIndefGrammarQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_jelenindef.json";
import HuMultGrammarQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_mult.json";
import HuLenniGrammarQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_lenni.json";
import HuVanGrammarQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_van.json";
import HuNekivanGrammarQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_nekivan.json";
import HuJovoGrammarQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_jovo.json";
import HuBirtoklasGrammarQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_birtoklas.json";
import HuNevmasGrammarQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_nevmas.json";
import HuNevutoGrammarQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_nevuto.json";
import HuHasonlitasGrammarQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_hasonlitas.json";
import HuFokuszGrammarQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_fokusz.json";
import HuHarmoniaGrammarQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_harmonia.json";
import HuBasicphrasesGrammarQuizData from "../Utils/Activities/Data/grammarquiz/grammarquiz_basicphrases.json";

// SAYALOUD
import HuSayAloudBasicPhrasesData from "../Utils/Activities/Data/sayaloud/sayaloud_basicphrases.json";


// **TAPAUDIO
import HuTapAudioSoundsData from "../Utils/Activities/Data/tapaudio/tapaudio_sounds.json";
import HuTapAudioBasicquestionsData from "../Utils/Activities/Data/tapaudio/tapaudio_basicquestions.json";
import HuTapAudioIrregularverbsData from "../Utils/Activities/Data/tapaudio/tapaudio_irregularverbs.json";
import HuTapAudioBasicadjectivesData from "../Utils/Activities/Data/tapaudio/tapaudio_basicadjectives.json";
import HuTapAudioNumbersData from "../Utils/Activities/Data/tapaudio/tapaudio_numbers.json";
import HuTapAudioOrderingdrinksData from "../Utils/Activities/Data/tapaudio/tapaudio_orderingdrinks.json";
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


// **IMAGEMATCH
import HuImageMatchSoundsData from "../Utils/Activities/Data/imagematch/imagematch_sounds.json";
import HuImageMatchBasicquestionsData from "../Utils/Activities/Data/imagematch/imagematch_basicquestions.json";
import HuImageMatchIrregularverbsData from "../Utils/Activities/Data/imagematch/imagematch_irregularverbs.json";
import HuImageMatchBasicadjectivesData from "../Utils/Activities/Data/imagematch/imagematch_basicadjectives.json";
import HuImageMatchNumbersData from "../Utils/Activities/Data/imagematch/imagematch_numbers.json";
import HuImageMatchOrderingdrinksData from "../Utils/Activities/Data/imagematch/imagematch_orderingdrinks.json";
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

// **AUDIOWORDMATCH
import HuAudioWordMatchSoundsData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_sounds.json";
import HuAudioWordMatchBasicquestionsData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_basicquestions.json";
import HuAudioWordMatchIrregularverbsData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_irregularverbs.json";
import HuAudioWordMatchBasicadjectivesData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_basicadjectives.json";
import HuAudioWordMatchNumbersData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_numbers.json";
import HuAudioWordMatchOrderingdrinksData from "../Utils/Activities/Data/audiowordmatch/audiowordmatch_orderingdrinks.json";
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

// **ORDERING
import HuOrderingSoundsData from "../Utils/Activities/Data/ordering/wordorder_sounds.json";
import HuOrderingBasicquestionsData from "../Utils/Activities/Data/ordering/wordorder_basicquestions.json";
import HuOrderingIrregularverbsData from "../Utils/Activities/Data/ordering/wordorder_irregularverbs.json";
import HuOrderingBasicadjectivesData from "../Utils/Activities/Data/ordering/wordorder_basicadjectives.json";
import HuOrderingNumbersData from "../Utils/Activities/Data/ordering/wordorder_numbers.json";
import HuOrderingLenniData from "../Utils/Activities/Data/ordering/wordorder_lenni.json";
import HuOrderingJelendefData from "../Utils/Activities/Data/ordering/wordorder_jelendef.json";
import HuOrderingJelenindefData from "../Utils/Activities/Data/ordering/wordorder_jelenindef.json";
import HuOrderingMultData from "../Utils/Activities/Data/ordering/wordorder_mult.json";
import HuOrderingVanData from "../Utils/Activities/Data/ordering/wordorder_van.json";
import HuOrderingNekivanData from "../Utils/Activities/Data/ordering/wordorder_nekivan.json";
import HuOrderingJovoData from "../Utils/Activities/Data/ordering/wordorder_jovo.json";
import HuOrderingBirtoklasData from "../Utils/Activities/Data/ordering/wordorder_birtoklas.json";
import HuOrderingNevmasData from "../Utils/Activities/Data/ordering/wordorder_nevmas.json";
import HuOrderingNevutoData from "../Utils/Activities/Data/ordering/wordorder_nevuto.json";
import HuOrderingHasonlitasData from "../Utils/Activities/Data/ordering/wordorder_hasonlitas.json";
import HuOrderingFokuszData from "../Utils/Activities/Data/ordering/wordorder_fokusz.json";
import HuOrderingHarmoniaData from "../Utils/Activities/Data/ordering/wordorder_harmonia.json";
import HuOrderingBasicPhrasesData from "../Utils/Activities/Data/ordering/wordorder_basicphrases.json";
import HuOrderingOrderingdrinksData from "../Utils/Activities/Data/ordering/wordorder_orderingdrinks.json";


// **VOCABMATCH
import HuVocabmatchSoundsData from "../Utils/Activities/Data/vocabmatch/vocabmatch_sounds.json";
import HuVocabmatchBasicquestionsData from "../Utils/Activities/Data/vocabmatch/vocabmatch_basicquestions.json";
import HuVocabmatchIrregularverbsData from "../Utils/Activities/Data/vocabmatch/vocabmatch_irregularverbs.json";
import HuVocabmatchBasicadjectivesData from "../Utils/Activities/Data/vocabmatch/vocabmatch_basicadjectives.json";
import HuVocabmatchNumbersData from "../Utils/Activities/Data/vocabmatch/vocabmatch_numbers.json";
import HuVocabmatchOrderingdrinksData from "../Utils/Activities/Data/vocabmatch/vocabmatch_orderingdrinks.json";
import HuVocabmatchLenniData from "../Utils/Activities/Data/vocabmatch/vocabmatch_lenni.json";
import HuVocabmatchJelenidoDefData from "../Utils/Activities/Data/vocabmatch/vocabmatch_jelendef.json";
import HuVocabmatchJelenidoIndefData from "../Utils/Activities/Data/vocabmatch/vocabmatch_jelenindef.json";
import HuVocabmatchMultidoData from "../Utils/Activities/Data/vocabmatch/vocabmatch_mult.json";
import HuVocabmatchVanData from "../Utils/Activities/Data/vocabmatch/vocabmatch_van.json";
import HuVocabmatchNekivanData from "../Utils/Activities/Data/vocabmatch/vocabmatch_nekivan.json";
import HuVocabmatchJovoData from "../Utils/Activities/Data/vocabmatch/vocabmatch_jovo.json";
import HuVocabmatchBirtoklasData from "../Utils/Activities/Data/vocabmatch/vocabmatch_birtoklas.json";
import HuVocabmatchNevmasData from "../Utils/Activities/Data/vocabmatch/vocabmatch_nevmas.json";
import HuVocabmatchNevutoData from "../Utils/Activities/Data/vocabmatch/vocabmatch_nevuto.json";
import HuVocabmatchHasonlitasData from "../Utils/Activities/Data/vocabmatch/vocabmatch_hasonlitas.json";
import HuVocabmatchFokuszData from "../Utils/Activities/Data/vocabmatch/vocabmatch_fokusz.json";
import HuVocabmatchHarmoniaData from "../Utils/Activities/Data/vocabmatch/vocabmatch_harmonia.json";
import HuVocabmatchBasicphrasesData from "../Utils/Activities/Data/vocabmatch/vocabmatch_basicphrases.json";

// READING
import HuReadingBasicPhrases from "../Utils/Activities/Data/reading/reading_basicphrases.json";
// VIDEO
import HuVideosBasicPhrases from "../Utils/Activities/Data/videos/videos_basicphrases.json";
// **LESSONCOMPLETE
import HuLessoncompleteSoundsData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_sounds.json";
import HuLessoncompleteBasicquestionsData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_basicquestions.json";
import HuLessoncompleteIrregularverbsData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_irregularverbs.json";
import HuLessoncompleteBasicadjectivesData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_basicadjectives.json";
import HuLessoncompleteNumbersData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_numbers.json";
import HuLessoncompleteOrderingdrinksData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_orderingdrinks.json";
import HuLessoncompleteLenniData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_lenni.json";
import HuLessoncompleteJelendefData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_jelendef.json";
import HuLessoncompleteJelenindefData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_jelenindef.json";
import HuLessoncompleteMultData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_mult.json";
import HuLessoncompleteVanData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_van.json";
import HuLessoncompleteNekivanData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_nekivan.json";
import HuLessoncompleteJovoData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_jovo.json";
import HuLessoncompleteBirtoklasData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_birtoklas.json";
import HuLessoncompleteNevmasData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_nevmas.json";
import HuLessoncompleteNevutoData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_nevuto.json";
import HuLessoncompleteHasonlitasData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_hasonlitas.json";
import HuLessoncompleteFokuszData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_fokusz.json";
import HuLessoncompleteHarmoniaData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_harmonia.json";
import HuLessoncompleteBasicphrasesData from "../Utils/Activities/Data/lessoncomplete/lessoncomplete_basicphrases.json";

/* --------------------------------------------------------- */
/* ----------------------- LOOK HERE ------------------------ */
/* --------------------------------------------------------- */

/*
  ALL ROUTING LOGIC is now organized in a clean object structure.
  Type → subtype → dataset
*/

const DATA_MAP = {
  grammarexplanation: {
    sounds: HuExplanationSoundsData,
    numbers: HuExplanationNumbersData,
    basicquestions: HuExplanationBasicquestionsData,
    irregularverbs: HuExplanationIrregularverbsData,
    basicadjectives: HuExplanationBasicadjectivesData,
    orderingdrinks: HuExplanationOrderingdrinksData,
    lenni: HuExplanationLenniData,
    jelendef: HuExplanationJelenDefData,
    jelenindef: HuExplanationJelenIndefData,
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
    soundsall: HuDialogueSoundsallData,
    soundsvowels: HuDialogueSoundsvowelsData,
    soundsconsonants: HuDialogueSoundsconsonantsData,
    basicquestions: HuDialogueBasicquestionsData,
    irregularverbs: HuDialogueIrregularverbsData,
    basicadjectives: HuDialogueBasicadjectivesData,
    numbers: HuDialogueNumbersData,
    orderingdrinks: HuDialogueOrderingdrinksData,
    lenni: HuDialogueLenniData,
    jelendef: HuDialogueJelenDefData,
    jelenindef: HuDialogueJelenIndefData,
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

  sayaloud: {
    basicphrases: HuSayAloudBasicPhrasesData
  },

  tapaudio: {
    sounds: HuTapAudioSoundsData,
    basicquestions: HuTapAudioBasicquestionsData,
    irregularverbs: HuTapAudioIrregularverbsData,
    basicadjectives: HuTapAudioBasicadjectivesData,
    numbers: HuTapAudioNumbersData,
    orderingdrinks: HuTapAudioOrderingdrinksData,
    lenni: HuTapAudioLenniData,
    jelendef: HuTapAudioJelenDefData,
    jelenindef: HuTapAudioJelenIndefData,
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
    sounds: HuImageMatchSoundsData,
    basicquestions: HuImageMatchBasicquestionsData,
    irregularverbs: HuImageMatchIrregularverbsData,
    basicadjectives: HuImageMatchBasicadjectivesData,
    numbers: HuImageMatchNumbersData,
    orderingdrinks: HuImageMatchOrderingdrinksData,
    lenni: HuImageMatchLenniData,
    jelendef: HuImageMatchJelenDefData,
    jelenindef: HuImageMatchJelenIndefData,
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
    sounds: HuAudioWordMatchSoundsData,
    basicquestions: HuAudioWordMatchBasicquestionsData,
    irregularverbs: HuAudioWordMatchIrregularverbsData,
    basicadjectives: HuAudioWordMatchBasicadjectivesData,
    numbers: HuAudioWordMatchNumbersData,
    orderingdrinks: HuAudioWordMatchOrderingdrinksData,
    lenni: HuAudioWordMatchLenniData,
    jelendef: HuAudioWordMatchJelenDefData,
    jelenindef: HuAudioWordMatchJelenIndefData,
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

  grammarquiz: {
    sounds: HuGrammarquizSoundsData,
    basicquestions: HuGrammarquizBasicquestionsData,
    irregularverbs: HuGrammarquizIrregularverbsData,
    basicadjectives: HuGrammarquizBasicadjectivesData,
    numbers: HuGrammarquizNumbersData,
    jelendef: HuJelenDefGrammarQuizData,
    jelenindef: HuJelenIndefGrammarQuizData,
    multido: HuMultGrammarQuizData,
    lenni: HuLenniGrammarQuizData,
    van: HuVanGrammarQuizData,
    nekivan: HuNekivanGrammarQuizData,
    jovo: HuJovoGrammarQuizData,
    birtoklas: HuBirtoklasGrammarQuizData,
    nevmas: HuNevmasGrammarQuizData,
    nevuto: HuNevutoGrammarQuizData,
    hasonlitas: HuHasonlitasGrammarQuizData,
    fokusz: HuFokuszGrammarQuizData,
    harmonia: HuHarmoniaGrammarQuizData,
    basicphrases: HuBasicphrasesGrammarQuizData,
    orderingdrinks: HuOrderingdrinksGrammarQuizData
  },

  ordering: {
    sounds: HuOrderingSoundsData,
    basicquestions: HuOrderingBasicquestionsData,
    irregularverbs: HuOrderingIrregularverbsData,
    basicadjectives: HuOrderingBasicadjectivesData,
    numbers: HuOrderingNumbersData,
    orderingdrinks: HuOrderingOrderingdrinksData,
   lenni: HuOrderingLenniData,
    jelendef: HuOrderingJelendefData,
    jelenindef: HuOrderingJelenindefData,
    mult: HuOrderingMultData,
    van: HuOrderingVanData,
    nekivan: HuOrderingNekivanData,
    jovo: HuOrderingJovoData,
    birtoklas: HuOrderingBirtoklasData,
    nevmas: HuOrderingNevmasData,
    nevuto: HuOrderingNevutoData,
    hasonlitas: HuOrderingHasonlitasData,
    fokusz: HuOrderingFokuszData,
    harmonia: HuOrderingHarmoniaData,
    basicphrases: HuOrderingBasicPhrasesData
  },

 vocabmatch: {
    sounds: HuVocabmatchSoundsData,
    basicquestions: HuVocabmatchBasicquestionsData,
    irregularverbs: HuVocabmatchIrregularverbsData,
    basicadjectives: HuVocabmatchBasicadjectivesData,
    numbers: HuVocabmatchNumbersData,
    orderingdrinks: HuVocabmatchOrderingdrinksData,
  lenni: HuVocabmatchLenniData,
  jelendef: HuVocabmatchJelenidoDefData,
  jelenindef: HuVocabmatchJelenidoIndefData,
  mult: HuVocabmatchMultidoData,
  van: HuVocabmatchVanData,
  nekivan: HuVocabmatchNekivanData,
  jovo: HuVocabmatchJovoData,
  birtoklas: HuVocabmatchBirtoklasData,
  nevmas: HuVocabmatchNevmasData,
  nevuto: HuVocabmatchNevutoData,
  hasonlitas: HuVocabmatchHasonlitasData,
  fokusz: HuVocabmatchFokuszData,
  harmonia: HuVocabmatchHarmoniaData,
  basicphrases: HuVocabmatchBasicphrasesData
},

  

  reading: {
  basicphrases: HuReadingBasicPhrases
  },




  video: {
  basicphrases: HuVideosBasicPhrases
  },

  lessoncomplete: {
    sounds: HuLessoncompleteSoundsData,
    basicquestions: HuLessoncompleteBasicquestionsData,
    irregularverbs: HuLessoncompleteIrregularverbsData,
    basicadjectives: HuLessoncompleteBasicadjectivesData,
    numbers: HuLessoncompleteNumbersData,
    orderingdrinks: HuLessoncompleteOrderingdrinksData,
  basicphrases: HuLessoncompleteBasicphrasesData,
  lenni: HuLessoncompleteLenniData,
  jelendef: HuLessoncompleteJelendefData,
  jelenindef: HuLessoncompleteJelenindefData,
  mult: HuLessoncompleteMultData,
  van: HuLessoncompleteVanData,
  nekivan: HuLessoncompleteNekivanData,
  jovo: HuLessoncompleteJovoData,
  birtoklas: HuLessoncompleteBirtoklasData,
  nevmas: HuLessoncompleteNevmasData,
  nevuto: HuLessoncompleteNevutoData,
  hasonlitas: HuLessoncompleteHasonlitasData,
  fokusz: HuLessoncompleteFokuszData,
  harmonia: HuLessoncompleteHarmoniaData,
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
    (type === "grammarquiz" && (!data || !data.data || !Array.isArray(data.data.questions))) ||
    (type === "quiz" && (!data || !Array.isArray(data.questions))) ||
    (type === "ordering" && (!data || !data.data || !Array.isArray(data.data.items))) ||
    (type === "vocabmatch" && (!data || !data.data || !Array.isArray(data.data.items))) ||
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
