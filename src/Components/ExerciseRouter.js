
import ExerciseSection from "../Utils/exercisesection.js";

import HuExplanationVanData from "../Utils/Activities/Data/grammarexplanation/vanexplanation.json";

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

import HuDialogueVanData from "../Utils/Activities/Data/dialogues/testDialogue.json";

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

const ExerciseRouter = ({ type, subtype, scrollTargetRef }) => {
    const getDataByType = (type, subtype) => {
      switch (type) {

        case "explanation":
          switch (subtype) {
            case "van":
              return HuExplanationVanData; 
            default:
              return HuExplanationVanData;
          }

        case "dialogue":
          switch (subtype) {
            case "testDialogue":
              return HuDialogueVanData;
              default:
                return HuDialogueVanData;
              }

        case "quiz":
          switch (subtype) { 
            case "jelenidodef":
              return HuJelenIdoDefQuizData;
            case "jelenidoindef":
              return HuJelenIdoIndefQuizData;
            case "multido":
              return HuMultIdoQuizData;
            case "lenni":
              return HuLenniQuizData;
            case "van":
              return HuVanQuizData;
            case "nekivan":
              return HuNekivanQuizData;
            case "jovo":
              return HuJovoQuizData;
            case "birtoklas":
              return HuBirtoklasQuizData;
            case "nevmas":
              return HuNevmasQuizData;
            case "nevuto":
              return HuNevutoQuizData;
            case "hasonlitas":
              return HuHasonlitasQuizData;
            case "fokusz":
              return HuFokuszQuizData;
            case "harmonia":
              return HuHarmoniaQuizData;
            default:
              return HuJelenIdoIndefQuizData;
          }


        case "ordering":
          switch (subtype) {
            case "fokusz":
              return orderingFokuszData;
            case "jelenidoindef":
              return orderingjelenIdoIndef;
            case "van":
              return orderingVanData;
            default:
              return orderingjelenIdoIndef;
          }
        case "vocab":
          switch (subtype) {
            case "verbs":
              return vocabVerbsData;
            case "travel":
              return vocabTravelData;
              case "mult":
                return vocabMultData;
            default:
              return vocabMultData;
          }
         
          case "grammar":
            switch (subtype) {
               case "jelenidoindef":
                return HuGrammarJelenIndefData;
             default:
              return HuGrammarJelenIndefData;
            }

            case "reading":
              switch (subtype) {
                case "parents-football-match":
                  return readingParentsFootballMatch;
                case "streaming-fatigue":
                  return readingStreamingFatigue;                  
                case "nevem-bob":
                  return readingANevemBob;                  
                case "essityaccount":
                  return readingEssityAccount;                  
                case "simplepresent":
                  return readingSimplePresent;        
                  default:
                return readingParentsFootballMatch;   
                }

                case "video":
              switch (subtype) {
                case "phones":
                  return videoPhones;
                case "spotify":
                  return videoSpotify;       
                  default:
                return videoPhones;   
                }
        
      }
    };
  
    const data = getDataByType(type, subtype);

if (!data) return <div>Loading...</div>;

if (
  (type === "quiz" && (!data || !Array.isArray(data.questions))) ||
  (type === "ordering" && (!data || !Array.isArray(data))) ||
  (type === "vocab" && (!data || !Array.isArray(data.pairs))) ||
  (type === "grammar" && (!data || !Array.isArray(data.sentences))) ||
  (type === "reading" && !data) ||
  (type === "video" && !data) ||
  (type === "dialogue" && !data)
) {
  return <div>Error: Invalid data format for {type}.</div>;
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