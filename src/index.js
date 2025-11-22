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
import MainFrame from './Mainpages/MainFrame';
import Home from './Mainpages/Home';
import VerbsHun from './Mainpages/Flashcards/verbshun';
import JelenIdoDef from './Mainpages/Hungarian/jelenidodef';
import Lenni from './Mainpages/Hungarian/lenni';
import JelenIdoIndef from './Mainpages/Hungarian/jelenidoIndef';
import MultIdo from './Mainpages/Hungarian/multido';
import JovoIdo from './Mainpages/Hungarian/jovoido';
import HungarianTemplate from './Mainpages/Hungarian/hungarianexercisetemplate';
import Vanneki from './Mainpages/Hungarian/vanneki';
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
import ActivityFilter from './Utils/activityFilter';
import LessonList from './Mainpages/lesson-list';



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
            path: 'hungarian',
            element: <HungarianExercises />,
          },
          { 
            path: 'hungarian/lenni',
            element: <Lenni />,
          },
          { 
            path: 'hungarian/jelenidodef',
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
            path: 'grammar-exercises/van',
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
            path: 'flashcards/verbshun',
            element: <VerbsHun />,
          },
          {
            path: 'hungarian/activities',
            element: <ActivityFilter />,
          },
          {
            path: 'hungarian/lesson-list',
            element: <LessonList />,
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

serviceWorkerRegistration.register();