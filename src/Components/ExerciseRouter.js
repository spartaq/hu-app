
import ExerciseSection from "../Mainpages/Quizzes/exercisesection";
import presentQuizData from "../Utils/Data/quiz/jelenidoexercisequiz.json";
import pastQuizData from "../Utils/Data/quiz/multidoexercisequiz.json";
import orderingPresentData from "../Utils/Data/ordering/wordorder_present.json";
import orderingPastData from "../Utils/Data/ordering/wordorder_past.json";
import vocabBusinessData from "../Utils/Data/vocab/vocab_business.json";
import vocabTravelData from "../Utils/Data/vocab/vocab_travel.json";
import vocabMultData from "../Utils/Data/vocab/vocab_mult.json";


const ExerciseRouter = ({ type, subtype }) => {
    const getDataByType = (type, subtype) => {
      switch (type) {
        case "quiz":
          switch (subtype) {
            case "present":
              return presentQuizData;
            case "past":
              return pastQuizData;
            default:
              return presentQuizData; // fallback
          }
        case "ordering":
          switch (subtype) {
            case "present":
              return orderingPresentData;
            case "past":
              return orderingPastData;
            default:
              return orderingPresentData;
          }
        case "vocab":
          switch (subtype) {
            case "business":
              return vocabBusinessData;
            case "travel":
              return vocabTravelData;
              case "mult":
                return vocabMultData;
            default:
              return vocabBusinessData;
          }
        default:
          return null;
      }
    };
  
    const data = getDataByType(type, subtype);
  
    if (!data) {
      return <div>Loading...</div>;
    }
  
    return <ExerciseSection type={type} data={data} />;
  };
  
  export default ExerciseRouter;