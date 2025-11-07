import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import '../../CSS/lesson-agenda.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SEO from '../../Components/SEO.js';
import GrammarExplanation from '../../Components/GrammarExplanationComps/suggestexplanation.js';
import Grammarexercises from '../../Components/GrammarExerciseComps/suggestexercisescomp.js';
import Reading from '../../Components/ReadingComps/readingcomponent.js';
import readingcompData from '../Reading-Exercises/Data/readingcomp.js'

import gapfillData from '../Vocabulary-Exercises/Data/gapfill.json';
import Video from '../../Components/VideoComps/videocomponent.js';
import videoData from '../Videos/Data/video.json';

import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/advicequiz.json';
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';
import discussionquestionsData from "../../Components/DiscussionComps/Data/discussionquestions.json";
import headerimg from '../../Images/secondcond1.webp';
import ToggleSection from '../../Utils/toggleSection';

const sections = [
  { label: "Exercises", description: "Do this exercise to practice your grammar.", type: "quiz", subtype: "suggest" },
];

Modal.setAppElement('#root');

const Advice = () => {

    return (
        <div>
            <SEO
                title='Exam Topics - Advice - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - New Years Resolutions'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Advice</h1><
                        div className="grammarimage">
                      <img src={headerimg} alt="English Exam Exercises" />
                    </div>  
                </div>

                <div className="agenda-languagepoint">Language Point</div>
                
                
                <div className="languagepoint-container">


                        <div>
                        <GrammarExplanation />
                        </div>

                        <div>
                   
                               <div>
        {sections.map((section, i) => (
          <div className="bottom-margin" key={i}>
          <ToggleSection  {...section} /> </div>
        ))}      
           </div>
                    </div>                   
                        <div className="agenda-display-grid">
                           <Grammarexercises />
                        </div>
                </div>                
                
                   <div className="agenda-quiz">Quiz</div>  
                    <div>
                    <Quiz quizzesData={quizzesData} /> 
                    </div>                    
                

                <div className="agenda-reading">Reading</div> 
                <div className="reading-container">
                <div className="agenda-display-grid">
                <Reading readings={readingcompData} title="" />
                    </div>
                </div>
                
                <div className="agenda-listening">Video</div> 
                             

                <Video videos={videoData} title="The Secret to Great Feedback" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="exa" />
            </div>
        </div>
    );
};

export default Advice;
