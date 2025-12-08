import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorker';
import { HelmetProvider } from "react-helmet-async";
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
import Home from './Mainpages/Home';
import JelenDef from './Mainpages/Hungarian/jelendef';
import Lenni from './Mainpages/Hungarian/lenni';
import JelenIndef from './Mainpages/Hungarian/jelenindef';
import Mult from './Mainpages/Hungarian/mult';
import Van from './Mainpages/Hungarian/van';
import Jovo from './Mainpages/Hungarian/jovo';
import HuVerbConjugation from './Mainpages/Hungarian/verbconjugationtable';
import Nekivan from './Mainpages/Hungarian/nekivan';
import Birtoklas from './Mainpages/Hungarian/birtoklas';
import Nevmas from './Mainpages/Hungarian/nevmas';
import Nevuto from './Mainpages/Hungarian/nevuto';
import Hasonlitas from './Mainpages/Hungarian/hasonlitas';
import Fokusz from './Mainpages/Hungarian/fokusz';
import Harmonia from './Mainpages/Hungarian/harmonia';
import ActivityFilter from './Utils/activityFilter';
import LessonList from './Mainpages/lesson-list';
import ReadingHub from './Mainpages/ReadingHub/readingHub';
import ReadingActivityPage from './Utils/Activities/ReadingActivity';
import VocabularymatchHub from './Mainpages/VocabularyMatchHub/vocabularymatchHub';
import VocabularyActivityPage from './Utils/Activities/VocabMatch';
import GrammarQuizHub from './Mainpages/GrammarQuizHub/grammarquizHub';
import BasicPhrases from './Mainpages/Hungarian/basicphrases';
import OrderingDrinks from './Mainpages/Hungarian/orderingdrinks';
import Numbers from './Mainpages/Hungarian/numbers';
import BasicAdjectives from './Mainpages/Hungarian/basicadjectives';
import IrregularVerbs from './Mainpages/Hungarian/irregularverbs';
import BasicQuestions from './Mainpages/Hungarian/basicquestions';
import Sounds from './Mainpages/Hungarian/sounds';
import VocabHome from './Mainpages/VocabularyHub/VocabHome';
import VocabTopics from './Mainpages/VocabularyHub/VocabTopics';
import VocabCards from './Mainpages/VocabularyHub/VocabCards';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'hungarian/sounds',
        element: <Sounds />,
      },
      {
        path: 'hungarian/lenni',
        element: <Lenni />,
      },
      {
        path: 'hungarian/jelendef',
        element: <JelenDef />,
      },
      {
        path: 'hungarian/jelenindef',
        element: <JelenIndef />,
      },
      {
        path: 'hungarian/mult',
        element: <Mult />,
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
        path: 'hungarian/jovo',
        element: <Jovo />,
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
        path: 'hungarian/orderingdrinks',
        element: <OrderingDrinks />,
      },
      {
        path: 'hungarian/basicphrases',
        element: <BasicPhrases />,
      },
      {
        path: 'hungarian/numbers',
        element: <Numbers />,
      },
      {
        path: 'hungarian/basicadjectives',
        element: <BasicAdjectives />,
      },
      {
        path: 'hungarian/irregularverbs',
        element: <IrregularVerbs />,
      },
      {
        path: 'hungarian/basicquestions',
        element: <BasicQuestions />,
      },
      {
        path: 'hungarian/verbconjugationtable',
        element: <HuVerbConjugation />,
      },
      {
        path: 'hungarian/activities',
        element: <ActivityFilter />,
      },
      {
        path: 'hungarian/lesson-list',
        element: <LessonList />,
      },
      {
        path: 'hungarian/readingHub',
        element: <ReadingHub />,
      },
      {
        path: 'hungarian/activity/reading/:id',
        element: <ReadingActivityPage />,
      },
      {
        path: 'hungarian/vocabularymatchHub',
        element: <VocabularymatchHub />,
      },

      // vocab
      {
        path: 'vocab',
        element: <VocabHome />,
      },
      {
        path: 'vocab/topics',
        element: <VocabTopics />,
      },
      {
        path: 'vocab/topics/:topicId',
        element: <VocabCards />,
      },
      {
        path: 'hungarian/activity/vocab/:id',
        element: <VocabularyActivityPage />,
      },
      {
        path: 'hungarian/grammarquizHub',
        element: <GrammarQuizHub />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);

serviceWorkerRegistration.register();