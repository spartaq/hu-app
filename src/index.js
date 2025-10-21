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
import Home from './Mainpages/Home';
import A1A2Elementary from './Mainpages/Levels/a1-a2-elementary';
import B1B2Intermediate from './Mainpages/Levels/b1-b2-intermediate';
import C1Advanced from './Mainpages/Levels/c1-advanced';
import GrammarExercises from './Mainpages/Grammar-Exercises/grammar-exercises';
import ToBePresent from './Mainpages/Grammar-Exercises/to-be-present';
import ToBePast from './Mainpages/Grammar-Exercises/to-be-past';
import SimplePresent from './Mainpages/Grammar-Exercises/simple-present';
import PresentContinuous from './Mainpages/Grammar-Exercises/present-continuous';
import SomeAny from './Mainpages/Grammar-Exercises/some-any';
import Future from './Mainpages/Grammar-Exercises/future';
import SimplePast from './Mainpages/Grammar-Exercises/simple-past';
import FirstConditional from './Mainpages/Grammar-Exercises/first-conditional';
import FirstCondProd from './Mainpages/Grammar-Exercises/first-cond-prod';
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
import Collocations from './Mainpages/Grammar-Exercises/collocations';
import WordForms from './Mainpages/Grammar-Exercises/word-forms';
import LinkingWords from './Mainpages/Grammar-Exercises/linking-words';
import DependentPrepositions from './Mainpages/Grammar-Exercises/dependent-prepositions';
import Gerunds from './Mainpages/Grammar-Exercises/gerunds';
import CauseEffect from './Mainpages/Grammar-Exercises/causeeffect';
import Comparison from './Mainpages/Grammar-Exercises/comparison';
import Relativeclauses from './Mainpages/Grammar-Exercises/relativeclauses';
import Soenough from './Mainpages/Grammar-Exercises/soenough';
import Passivebeing from './Mainpages/Grammar-Exercises/passivebeing';
import PastHabits from './Mainpages/Grammar-Exercises/past-habits';
import MixedCondProd from './Mainpages/Grammar-Exercises/mixed-cond-prod';
import AdjAdv from './Mainpages/Grammar-Exercises/adjadv';
import Infinitives from './Mainpages/Grammar-Exercises/infinitives';
import ReadingExercises from './Mainpages/Reading-Exercises/reading-exercises';
import ParagraphHeadings from './Mainpages/Reading-Exercises/paragraph-headings';
import ReadingComprehension from './Mainpages/Reading-Exercises/reading-comprehension';
import ReadingActivity from './Utils/Activities/ReadingActivity';
import SpeakingExercises from './Mainpages/Speaking-Exercises/speaking-exercises';
import PictureComparison from './Mainpages/Speaking-Exercises/picture-comparison';
import Speakingtopics from './Mainpages/Speaking-Exercises/speaking-topics';
import Videos from './Mainpages/Videos/videos';
import VideoActivity from './Utils/Activities/VideoActivity';
import Audio from './Mainpages/Videos/Audio';
import WritingExercises from './Mainpages/Writing-Exercises/writing-exercises';
import Writing1 from './Mainpages/Writing-Exercises/Writing1';
import VocabularyExercises from './Mainpages/Vocabulary-Exercises/vocabulary-exercises';
import PhrasalVerbs from './Mainpages/Vocabulary-Exercises/phrasal-verbs';
import Idioms from './Mainpages/Vocabulary-Exercises/idioms';
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
import Sidejobs from './Mainpages/Topics/sidejobs';
import Advice from './Mainpages/Topics/advice';
import Ethics from './Mainpages/Topics/ethics';
import Gossip from './Mainpages/Topics/gossip';
import Sustainability from './Mainpages/Topics/sustainability';
import Airtraffic from './Mainpages/Topics/airtraffic1';
import VideoInputForm from './Utils/videoinputform';
import Unless from './Mainpages/Grammar-Exercises/unless';
import Wish from './Mainpages/Grammar-Exercises/wish';
import Problemsolving from './Mainpages/Topics/problemsolving';
import Medicine from './Mainpages/Topics/medicine';
import Persuading from './Mainpages/Topics/persuading';
import Sports from './Mainpages/Topics/sports';
import Weather from './Mainpages/Topics/weather';
import Introlesson from './Mainpages/Topics/introlesson';
import Education from './Mainpages/Topics/education';
import Branding from './Mainpages/Topics/branding';
import FastFood from './Mainpages/Topics/fastfood';
import WorkFuture from './Mainpages/Topics/workfuture';
import TeamBuilding from './Mainpages/Topics/teambuilding';
import Meetings from './Mainpages/Topics/meetings';
import Money from './Mainpages/Topics/money';
import Cellphones from './Mainpages/Topics/smartphones';
import Language from './Mainpages/Topics/language';
import Companypolicy from './Mainpages/Topics/companypolicy';
import JelenIdoDef from './Mainpages/Hungarian/jelenidodef';
import JelenIdoIndef from './Mainpages/Hungarian/jelenidoIndef';
import MultIdo from './Mainpages/Hungarian/multido';
import JovoIdo from './Mainpages/Hungarian/jovoido';
import HungarianTemplate from './Mainpages/Hungarian/hungarianexercisetemplate';
import Vanneki from './Mainpages/Hungarian/vanneki';
import StreamingServices from './Mainpages/Topics/streamingServices';
import HuVerbConjugation from './Mainpages/Hungarian/verbconjugationtable';
import HuDefIndefExplanation from './Mainpages/Hungarian/defIndefExplanation';
import Nekivan from './Mainpages/Hungarian/nekivan';
import Van from './Mainpages/Hungarian/van';
import Birtoklas from './Mainpages/Hungarian/birtoklas';
import Nevmas from './Mainpages/Hungarian/nevmas';
import Nevuto from './Mainpages/Hungarian/nevuto';
import Hasonlitas from './Mainpages/Hungarian/hasonlitas';
import Fokusz from './Mainpages/Hungarian/fokusz';
import Harmonia from './Mainpages/Hungarian/harmonia';
import HungarianExercises from './Mainpages/Hungarian/hungarian-exercises';
import BucketList from './Mainpages/Topics/bucketlist';
import Parenting from './Mainpages/Topics/parenting';
import Corruption from './Mainpages/Topics/corruption';
import Value from './Mainpages/Topics/value';
import Elections from './Mainpages/Topics/elections';
import Music from './Mainpages/Topics/music';





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
            path: 'topics/companypolicy',
            element: <Companypolicy />,
          },
          {
            path: 'topics/sidejobs',
            element: <Sidejobs />,
          },
          { path: 'topics/streamingservices',
            element: <StreamingServices />,
          },
          { path: 'topics/parenting',
            element: <Parenting />,
          },
          { path: 'topics/bucketlist',
            element: <BucketList />,
          },
          { path: 'topics/corruption',
            element: <Corruption />,
          },
          { path: 'topics/value',
            element: <Value />,
          },
          { path: 'topics/elections',
            element: <Elections />,
          },
          { path: 'topics/music',
            element: <Music />,
          },
          {
            path: 'grammar-exercises',
            element: <GrammarExercises />,
          },
          {
            path: 'grammar-exercises/to-be-present',
            element: <ToBePresent />,
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
            path: 'grammar-exercises/some-any',
            element: <SomeAny />,
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
            path: 'grammar-exercises/collocations',
            element: <Collocations />,
          },
          {
            path: 'grammar-exercises/dependent-prepositions',
            element: <DependentPrepositions />,
          },
          {
            path: 'grammar-exercises/word-forms',
            element: <WordForms />,
          },
          {
            path: 'grammar-exercises/linking-words',
            element: <LinkingWords />,
          },
          { path: 'hungarian',
            element: <HungarianExercises />,
          },
          { path: 'hungarian/jelenidodef',
            element: <JelenIdoDef />,
          },
          {
            path: 'hungarian/jelenidoindef',
            element: <JelenIdoIndef />,
          },
          {
            path: 'hungarian/multido',
            element: <MultIdo />,
          },
          { path: 'hungarian/vanneki',
            element: <Vanneki />,
          },
          {
            path: 'hungarian/hungarianexercisetemplate',
            element: <HungarianTemplate />,
          },
          {
            path: 'hungarian/van',
            element: <Van />,
          },
          {
            path: 'hungarian/nekivan',
            element: <Nekivan />,
          },
          {
            path: 'hungarian/jovoido',
            element: <JovoIdo />,
          },
          {
            path: 'hungarian/birtoklas',
            element: <Birtoklas />,
          },
          {
            path: 'hungarian/nevmas',
            element: <Nevmas />,
          },
          {
            path: 'hungarian/nevuto',
            element: <Nevuto />,
          },
          {
            path: 'hungarian/hasonlitas',
            element: <Hasonlitas />,
          },
          {
            path: 'hungarian/fokusz',
            element: <Fokusz />,
          },
          {
            path: 'hungarian/harmonia',
            element: <Harmonia />,
          },
          {
            path: 'hungarian/verbconjugationtable',
            element: <HuVerbConjugation />,
          },
          {
            path: 'hungarian/defindefexplanation',
            element: <HuDefIndefExplanation />,
          },
          {
            path: 'reading-exercises',
            element: <ReadingExercises />,
          },
          {
            path: '/reading/:id',
            element: <ReadingActivity />,
          },
          {
            path: '/reading-exercises/reading-comprehension',
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
            path: '/videos/:id',
            element: <VideoActivity />,
          },
          {
            path: '/videos/videos',
            element: <Videos />,
          },
          {
            path: 'videos/audio',
            element: <Audio />,
          },
          {
            path: 'vocabulary-exercises',
            element: <VocabularyExercises />,
          },
          {
            path: 'vocabulary-exercises/phrasal-verbs',
            element: <PhrasalVerbs />,
          },
          {
            path: 'vocabulary-exercises/idioms',
            element: <Idioms />,
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
