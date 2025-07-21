import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import '../../CSS/lesson-agenda.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SEO from '../../Components/SEO.js';
import Reading from '../../Components/ReadingComps/readingcomponent.js';
import Video from '../../Components/VideoComps/videocomponent.js';
import videoData from '../Videos/Data/video.json';
import readingcompData from '../Reading-Exercises/Data/readingcomp.js';
import discussionquestionsData from "../../Components/DiscussionComps/Data/discussionquestions.json";
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';
import vocabData from "../../Components/VocabularyListComps/Data/phrasalverblist.json";
import VocabularyMatch from '../../Utils/vocabmatch.js';
import GapFillExercise from '../../Utils/gapfill.js';
import jsonData from '../Vocabulary-Exercises/Data/gapfill.json';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/gossipquiz.json';
import GrammarExercises from '../../Components/GrammarExerciseComps/indspeechexercisecomp.js';
import GrammarExplanation from '../../Components/GrammarExplanationComps/indspeechexplanation.js';

const gossipGapfill = jsonData.find(item => item.topic === "gossip" && item.type === "gap-fill");



Modal.setAppElement('#root');

const Gossip = () => {

    return (
        <div>
            <SEO
                title='Exam Topics - Gossip - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - New Years Resolutions'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Gossip</h1>
                </div>

                <div className="agenda-languagepoint">Language Point</div>
                
                
                <div className="languagepoint-container">
                    
                    


                        <div>
                        <GrammarExplanation /> 
                        </div>                        
                 
                    

                    

                   
                        <div className="agenda-display-grid">
                           <GrammarExercises />
                        </div>
                   
                    

                </div>
                
                <div className="agenda-vocabulary">Vocabulary</div> 
                

                <div>
                   
                <div className="agenda-display-grid">
                    <VocabularyMatch 
                    data={vocabData} 
                    topic="gossip"
                    type="categorization" />
                    </div>

                    <Quiz quizzesData={quizzesData} /> 
                    
                    </div>
                

                <div className="agenda-reading">Reading</div>
                <div className="reading-container">
                <div className="agenda-display-grid">
                
                                <GapMatch 
                  data={jsonData}
                  topic="gossip" 
                  type="gap-fill"
                  text={gossipGapfill?.text}
                />
                    </div>
                </div>
                
                <div className="agenda-listening">Video</div>
                             

                <Video videos={videoData} title="Gossip Positive" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="gossip" />
            </div>
        </div>
    );
};

export default Gossip;
