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
import CategoryMatch from '../../Utils/Activities/VocabMatch.js';
import GapMatch from '../../Utils/Activities/VocabMatch.js';
import categoryData from "../../Components/VocabularyListComps/Data/vocabcolumn.json";
import gapfillData from '../Vocabulary-Exercises/Data/gapfill.json';
import Video from '../../Components/VideoComps/videocomponent.js';
import videoData from '../Videos/Data/video.json';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/advicequiz.json';
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';
import discussionquestionsData from "../../Components/DiscussionComps/Data/discussionquestions.json";

const gossipGapfill = gapfillData.find(item => item.topic === "gossip" && item.type === "gap-fill");

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
                    <h1 className="mt-2">Advice</h1>
                </div>

                <div className="agenda-languagepoint">Language Point</div>
                
                
                <div className="languagepoint-container">


                        <div>
                        <GrammarExplanation />
                        </div>
                   
                        <div className="agenda-display-grid">
                           <Grammarexercises />
                        </div>
                   
                    

                </div>
                
                <div className="agenda-vocabulary">Vocabulary</div>              
                   
                <div className="agenda-display-grid">
                    
                    <CategoryMatch
                    data={categoryData}
                    topic="sports"
                    type="categorization"
                    />
<hr></hr>
                    <GapMatch 
                    data={gapfillData}
                    topic="gossip" 
                    type="gap-fill"
                    text={gossipGapfill?.text}
                    />
                    
                    </div>
                    
                    <div>Quiz
                    <Quiz quizzesData={quizzesData} /> 
                    </div>
                    
                

                <div className="agenda-reading">Reading</div> 
                <div className="reading-container">
                <div className="agenda-display-grid">
                <Reading readings={readingcompData} title="Plane Crashes: Perception vs. Reality" />
                    </div>
                </div>
                
                <div className="agenda-listening">Video</div> 
                             

                <Video videos={videoData} title="The Secret to Great Feedback" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="advice" />
            </div>
        </div>
    );
};

export default Advice;
