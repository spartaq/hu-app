import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from "react-helmet-async";
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
import MainFrame from './Mainpages/MainFrame';
import A1A2Elementary from './Mainpages/Levels/a1-a2-elementary';
import B1B2Intermediate from './Mainpages/Levels/b1-b2-intermediate';
import C1Advanced from './Mainpages/Levels/c1-advanced';
import GrammarExercises from './Mainpages/Grammar-Exercises/grammar-exercises';
import ToBe from './Mainpages/Grammar-Exercises/to-be';
import ToBePast from './Mainpages/Grammar-Exercises/to-be-past';
import SimplePresent from './Mainpages/Grammar-Exercises/simple-present';
import PresentContinuous from './Mainpages/Grammar-Exercises/present-continuous';
import Future from './Mainpages/Grammar-Exercises/future';
import SimplePast from './Mainpages/Grammar-Exercises/simple-past';
import FirstConditional from './Mainpages/Grammar-Exercises/first-conditional';
import SecondConditional from './Mainpages/Grammar-Exercises/second-conditional';
import ThirdConditional from './Mainpages/Grammar-Exercises/third-conditional';
import PresentPerfect from './Mainpages/Grammar-Exercises/present-perfect';
import PerfectPast from './Mainpages/Grammar-Exercises/perfect-past';
import ThirdCondProd from './Mainpages/Grammar-Exercises/third-cond-prod';
import IndirectSpeech from './Mainpages/Grammar-Exercises/indirect-speech';
import ModalsObligation from './Mainpages/Grammar-Exercises/modals-obligation';
import SenseVerbs from './Mainpages/Grammar-Exercises/sense-verbs';
import EdIng from './Mainpages/Grammar-Exercises/ed-ing';
import ReportedSpeech from './Mainpages/Grammar-Exercises/reported-speech';
import PastContinuous from './Mainpages/Grammar-Exercises/past-continuous';
import SecondCondProd from './Mainpages/Grammar-Exercises/second-cond-prod';
import ModalsDeduction from './Mainpages/Grammar-Exercises/modals-deduction';
import Passive from './Mainpages/Grammar-Exercises/passive';
import Simpcont from './Mainpages/Grammar-Exercises/simpcont';
import ReadingExercises from './Mainpages/Reading-Exercises/reading-exercises';
import ParagraphHeadings from './Mainpages/Reading-Exercises/paragraph-headings';
import ReadingComprehension from './Mainpages/Reading-Exercises/reading-comprehension';
import SpeakingExercises from './Mainpages/Speaking-Exercises/speaking-exercises';
import PictureComparison from './Mainpages/Speaking-Exercises/picture-comparison';
import Speakingtopics from './Mainpages/Speaking-Exercises/speaking-topics';
import ListeningExercises from './Mainpages/Listening-Exercises/listening-exercises';
import Audio from './Mainpages/Listening-Exercises/Audio';
import WritingExercises from './Mainpages/Writing-Exercises/writing-exercises';
import Writing1 from './Mainpages/Writing-Exercises/Writing1';
import VocabularyExercises from './Mainpages/Vocabulary-Exercises/vocabulary-exercises';
import Collocations from './Mainpages/Vocabulary-Exercises/collocations';
import WordForms from './Mainpages/Vocabulary-Exercises/word-forms';
import PhrasalVerbs from './Mainpages/Vocabulary-Exercises/phrasal-verbs';
import LinkingWords from './Mainpages/Vocabulary-Exercises/linking-words';
import Idioms from './Mainpages/Vocabulary-Exercises/idioms';
import DependentPrepositions from './Mainpages/Vocabulary-Exercises/dependent-prepositions';
import C1VocabFlashcards from './Mainpages/Flashcards/c1-vocab-flashcards';
import C1VerbFlashcards from './Mainpages/Flashcards/c1-verb-flashcards';
import B2VerbFlashcards from './Mainpages/Flashcards/b2-verb-flashcards';
import B2AdjFlashcards from './Mainpages/Flashcards/b2-adj-flashcards';
import Flashcards from './Mainpages/flashcards';
import VocabularyQuizzes from './Mainpages/Quizzes/vocabulary-quizzes';
import AllExercises from './Mainpages/all-exercises';
import Tutor from './Mainpages/Tutor';
import Teachers from './Mainpages/Teachers';
import EnglishLevelTest from './Mainpages/Level-Test/level-test';
import Aboutexams from './Mainpages/about-exams';
import Topics from './Mainpages/Topics/topics';
import Lessontemplate from './Mainpages/Topics/lessontemplate';
import IrregularVerbs from './Mainpages/Flashcards/irregular-verbs';
import VerbsHun from './Mainpages/Flashcards/verbshun';
import LessonPlans from './Mainpages/lesson-plans';
import Caffeine from './Mainpages/Topics/caffeine';
import NewYear from './Mainpages/Topics/newyearresolution';
import Habits from './Mainpages/Topics/habits';
import Chatplatforms from './Mainpages/Topics/chatplatforms';
import Automation from './Mainpages/Topics/automation';
import Quality from './Mainpages/Topics/quality';
import Pets from './Mainpages/Topics/pets';
import Choice from './Mainpages/Topics/choice';
import Walking from './Mainpages/Topics/walking';
import People from './Mainpages/Topics/people';
import Food from './Mainpages/Topics/food';
import Tourism from './Mainpages/Topics/tourism';
import Neighbors from './Mainpages/Topics/neighbors';
import FirstCondProd from './Mainpages/Grammar-Exercises/first-cond-prod';
import Airtraffic from './Mainpages/Topics/airtraffic1';
import Gerunds from './Mainpages/Grammar-Exercises/gerunds';
import CauseEffect from './Mainpages/Grammar-Exercises/causeeffect';
import Comparison from './Mainpages/Grammar-Exercises/comparison';
import Relativeclauses from './Mainpages/Grammar-Exercises/relativeclauses';
import Soenough from './Mainpages/Grammar-Exercises/soenough';
import Passivebeing from './Mainpages/Grammar-Exercises/passivebeing';
import VideoInputForm from './Utils/videoinputform';
import Advice from './Mainpages/Topics/advice';
import Ethics from './Mainpages/Topics/ethics';
import Gossip from './Mainpages/Topics/gossip';
import Sustainability from './Mainpages/Topics/sustainability';
import Unless from './Mainpages/Grammar-Exercises/unless';
import Wish from './Mainpages/Grammar-Exercises/wish';
import Problemsolving from './Mainpages/Topics/problemsolving';
import Medicine from './Mainpages/Topics/medicine';
import Persuading from './Mainpages/Topics/persuading';
import Sports from './Mainpages/Topics/sports';
import Weather from './Mainpages/Topics/weather';
import Introlesson from './Mainpages/Topics/introlesson';
import MixedCondProd from './Mainpages/Grammar-Exercises/mixed-cond-prod';
import AdjAdv from './Mainpages/Grammar-Exercises/adjadv';
import Infinitives from './Mainpages/Grammar-Exercises/infinitives';
import Education from './Mainpages/Topics/education';
import PastHabits from './Mainpages/Grammar-Exercises/past-habits';
import Branding from './Mainpages/Topics/branding';
import FastFood from './Mainpages/Topics/fastfood';
import WorkFuture from './Mainpages/Topics/workfuture';
import TeamBuilding from './Mainpages/Topics/teambuilding';
import Meetings from './Mainpages/Topics/meetings';
import Money from './Mainpages/Topics/money';
import Cellphones from './Mainpages/Topics/smartphones';
import Language from './Mainpages/Topics/language';
import Home from './Mainpages/Home';
import Videos from './Mainpages/Listening-Exercises/videos';





const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainFrame />,
        children: [
          {
            index: true, 
            element: <Home />,
          },
          {
            path: 'tutor',
            element: <Tutor />,
          },
          {
            path: 'teachers',
            element: <Teachers />,
          },
          {
            path: 'lesson-plans',
            element: <LessonPlans />,
          },
          {
            path: 'about-exams',
            element: <Aboutexams />,
          },
          {
            path: 'level-test/level-test',
            element: <EnglishLevelTest />,
          },
          {
            path: 'listening-exercises/videos',
            element: <Videos />,
          },
          {
            path: 'levels/a1-a2-elementary',
            element: <A1A2Elementary />,
          },
          {
            path: 'levels/b1-b2-intermediate',
            element: <B1B2Intermediate />,
          },
          {
            path: 'levels/c1-advanced',
            element: <C1Advanced />,
          },
          {
            path: 'topics/topics',
            element: <Topics />,
          },
          {
            path: 'topics/lessontemplate',
            element: <Lessontemplate />,
          },
          {
            path: 'topics/language',
            element: <Language />,
          },
          {
            path: 'topics/branding',
            element: <Branding />,
          },
          {
            path: 'topics/smartphones',
            element: <Cellphones />,
          },
          {
            path: 'topics/money',
            element: <Money />,
          },
          {
            path: 'topics/meetings',
          element: <Meetings />,
          },
          {
            path: 'topics/teambuilding',
          element: <TeamBuilding />,
          },
          {
            path: 'topics/workfuture',
          element: <WorkFuture />,
          },
          {
            path: 'topics/fastfood',
            element: <FastFood />,
          },
          {
            path: 'topics/caffeine',
            element: <Caffeine />,
          },
          {
            path: 'topics/newyearsresolution',
            element: <NewYear />,
          },
          {
            path: 'topics/habits',
            element: <Habits />,
          },
          {
            path: 'topics/chatplatforms',
            element: <Chatplatforms />,
          },
          {
            path: 'topics/automation',
            element: <Automation />,
          },
          {
            path: 'topics/quality',
            element: <Quality />,
          },
          {
            path: 'topics/choice',
            element: <Choice />,
          },
          {
            path: 'topics/pets',
            element: <Pets />,
          },
          {
            path: 'topics/walking',
            element: <Walking />,
          },
          {
            path: 'topics/people',
            element: <People />,
          },
          {
            path: 'topics/neighbors',
            element: <Neighbors />,
          },
          {
            path: 'topics/food',
            element: <Food />,
          },
          {
            path: 'topics/tourism',
            element: <Tourism />,
          },
          {
            path: 'topics/advice',
            element: <Advice />,
          },
          {
            path: 'topics/ethics',
            element: <Ethics />,
          },
          {
            path: 'topics/gossip',
            element: <Gossip />,
          },          
          {
            path: 'topics/sustainability',
            element: <Sustainability />,
          },          
          {
            path: 'topics/problemsolving',
            element: <Problemsolving />,
          },          
          {
            path: 'topics/medicine',
            element: <Medicine />,
          },          
          {
            path: 'topics/sports',
            element: <Sports />,
          },          
          {
            path: 'topics/persuading',
            element: <Persuading />,
          },          
          {
            path: 'topics/weather',
            element: <Weather />,
          },          
          {
            path: 'topics/education',
            element: <Education />,
          },          
          {
            path: 'topics/introlesson',
            element: <Introlesson />,
          },
          {
            path: 'topics/airtraffic',
            element: <Airtraffic />,
          },
          {
            path: 'grammar-exercises',
            element: <GrammarExercises />,
          },
          {
            path: 'grammar-exercises/to-be',
            element: <ToBe />,
          },
          {
            path: 'grammar-exercises/to-be-past',
            element: <ToBePast />,
          },
          {
            path: 'grammar-exercises/simple-present',
            element: <SimplePresent />,
          },
          {
            path: 'grammar-exercises/present-continuous',
            element: <PresentContinuous />,
          },
          {
            path: 'grammar-exercises/simpcont',
            element: <Simpcont />,
          },
          {
            path: 'grammar-exercises/future',
            element: <Future />,
          },
          {
            path: 'grammar-exercises/simple-past',
            element: <SimplePast />,
          },
          {
            path: 'grammar-exercises/past-continuous',
            element: <PastContinuous />,
          },
          {
            path: 'grammar-exercises/present-perfect',
            element: <PresentPerfect />,
          },
          {
            path: 'grammar-exercises/perfect-past',
            element: <PerfectPast />,
          },
          {
            path: 'grammar-exercises/first-conditional',
            element: <FirstConditional />,
          },
          {
            path: 'grammar-exercises/first-cond-prod',
            element: <FirstCondProd />,
          },
          {
            path: 'grammar-exercises/second-conditional',
            element: <SecondConditional />,
          },
          {
            path: 'grammar-exercises/second-cond-prod',
            element: <SecondCondProd />,
          },
          {
            path: 'grammar-exercises/third-conditional',
            element: <ThirdConditional />,
          },
          {
            path: 'grammar-exercises/third-cond-prod',
            element: <ThirdCondProd />,
          },
          {
            path: 'grammar-exercises/mixed-cond-prod',
            element: <MixedCondProd />,
          },
          {
            path: 'grammar-exercises/indirect-speech',
            element: <IndirectSpeech />,
          },
          {
            path: 'grammar-exercises/passive',
            element: <Passive />,
          },
          {
            path: 'grammar-exercises/pasthabits',
            element: <PastHabits />,
          },
          {
            path: 'grammar-exercises/passivebeing',
            element: <Passivebeing />,
          },
          {
            path: 'grammar-exercises/modals-obligation',
            element: <ModalsObligation />,
          },
          {
            path: 'grammar-exercises/modals-deduction',
            element: <ModalsDeduction />,
          },
          {
            path: 'grammar-exercises/sense-verbs',
            element: <SenseVerbs />,
          },          
          {
            path: 'grammar-exercises/ed-ing',
            element: <EdIng />,
          },          
          {
            path: 'grammar-exercises/reported-speech',
            element: <ReportedSpeech />,
          },          
          {
            path: 'grammar-exercises/gerunds',
            element: <Gerunds />,
          },          
          {
            path: 'grammar-exercises/infinitives',
            element: <Infinitives />,
          },             
          {
            path: 'grammar-exercises/causeeffect',
            element: <CauseEffect />,
          },         
          {
            path: 'grammar-exercises/comparison',
            element: <Comparison />,
          },         
          {
            path: 'grammar-exercises/relativeclauses',
            element: <Relativeclauses />,
          },         
          {
            path: 'grammar-exercises/soenough',
            element: <Soenough />,
          },         
          {
            path: 'grammar-exercises/unless',
            element: <Unless />,
          },         
          {
            path: 'grammar-exercises/wish',
            element: <Wish />,
          },         
          {
            path: 'grammar-exercises/adjadv',
            element: <AdjAdv />,
          },
          {
            path: 'reading-exercises',
            element: <ReadingExercises />,
          },
          {
            path: 'reading-exercises/reading-comprehension',
            element: <ReadingComprehension />,
          },
          {
            path: 'reading-exercises/paragraph-headings',
            element: <ParagraphHeadings />,
          },
          {
            path: 'writing-exercises',
            element: <WritingExercises />,
          },
          {
            path: 'writing-exercises/writing1',
            element: <Writing1 />,
          },
          {
            path: 'listening-exercises',
            element: <ListeningExercises />,
          },
          {
            path: 'listening-exercises/audio',
            element: <Audio />,
          },
          {
            path: 'vocabulary-exercises',
            element: <VocabularyExercises />,
          },
          {
            path: 'vocabulary-exercises/collocations',
            element: <Collocations />,
          },
          {
            path: 'vocabulary-exercises/phrasal-verbs',
            element: <PhrasalVerbs />,
          },
          {
            path: 'vocabulary-exercises/dependent-prepositions',
            element: <DependentPrepositions />,
          },
          {
            path: 'vocabulary-exercises/idioms',
            element: <Idioms />,
          },
          {
            path: 'vocabulary-exercises/word-forms',
            element: <WordForms />,
          },
          {
            path: 'vocabulary-exercises/linking-words',
            element: <LinkingWords />,
          },
          {
            path: 'vocabulary-exercises/reported-speech',
            element: <ReportedSpeech />,
          },
          {
            path: 'flashcards',
            element: <Flashcards />,
          },
          {
            path: 'flashcards/c1-vocab-flashcards',
            element: <C1VocabFlashcards />,
          },
          {
            path: 'flashcards/c1-verb-flashcards',
            element: <C1VerbFlashcards />,
          },
          {
            path: 'flashcards/b2-verb-flashcards',
            element: <B2VerbFlashcards />,
          },
          {
            path: 'flashcards/irregular-verbs',
            element: <IrregularVerbs />,
          },
          {
            path: 'flashcards/verbshun',
            element: <VerbsHun />,
          },
          {
            path: 'flashcards/b2-adj-flashcards',
            element: <B2AdjFlashcards />,
          },
          {
            path: 'quizzes/vocabulary-quizzes',
            element: <VocabularyQuizzes />,
          },
          {
            path: 'speaking-exercises',
            element: <SpeakingExercises />,
          },
          {
            path: 'speaking-exercises/speaking-topics',
            element: <Speakingtopics />,
          },
          {
            path: 'speaking-exercises/picture-comparison',
            element: <PictureComparison />,
          },
          {
            path: 'all-exercises',
            element: <AllExercises />,
          },
          {
            path: 'Utils/videoinputform',
            element: <VideoInputForm />,
          },
        ],
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);
