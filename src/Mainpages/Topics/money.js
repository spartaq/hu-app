import React from 'react';
import Modal from 'react-modal';
import '../../CSS/lesson-agenda.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SEO from '../../Components/SEO.js';
import Video from '../../Components/VideoComps/videocomponent.js';
import videoData from '../Videos/Data/video.json';
import readingcompData from '../Reading-Exercises/Data/readingcomp.js';
import Reading from '../../Components/ReadingComps/readingcomponent.js';
import discussionquestionsData from "../../Components/DiscussionComps/Data/discussionquestions.json";
import RandomQuestionGenerator from '../../Components/DiscussionComps/questiongenerator.js';
import VocabularyMatch from '../../Utils/vocabmatchcolumn.js';
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/moneyquiz.json';
import GrammarExplanation from '../../Components/GrammarExplanationComps/pasthabitsexplanation.js';
import vocabData from "../../Components/VocabularyListComps/Data/vocabcolumn.json";
import idiomData from "../../Mainpages/Vocabulary-Exercises/Data/idioms.json";
import PhrasalverbsList from '../../Components/VocabularyListComps/phrasalverblist.js';
import ToggleSection from '../../Utils/toggleSection';
import headerimg from '../../Images/bucket.webp';

const sections = [
  { label: "Exercises", description: "Do this exercise to practice your grammar.", type: "quiz", subtype: "habits" },
];


Modal.setAppElement('#root');

const Money = () => {
    

    return (
        <div>
            <SEO
                title='Exam Topics - Money - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of money'
                name='English Exam Exercises - Money'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Money</h1>
                    <div className="grammarimage">
                <img src={headerimg} alt="English Exam Exercises" />
                </div> 
                </div>

                
                
                <div className="agenda-subtitle">Quiz</div> 
                <div>                   
                    <div className="agenda-display-grid">
                        <Quiz quizzesData={quizzesData} />
                    </div>                    
                </div>

                <div className="agenda-languagepoint">Language Point</div>
                
                
                <div className="languagepoint-container">
                    
                    <div>


                        <div>
                        <GrammarExplanation /> 
                        </div>                        
                 
                    </div>

                    <div>
                    <div>
                    {sections.map((section, i) => (
                    <div className="bottom-margin" key={i}>
                    <ToggleSection  {...section} /> </div>
                    ))}      
                    </div>
                   
                      
                   
                    </div>

                </div>
                
                <div className="agenda-subtitle">Vocabulary</div>
                <div>                   
                    <div className="agenda-display-grid">
                        <PhrasalverbsList data={idiomData} topic="money" />
                    </div>                    
                </div>

                <div className="agenda-reading">Reading</div>
                <div className="reading-container">
                <Reading readings={readingcompData} title="Money" /> 
                    

                </div>
                
                <div className="agenda-listening">Video</div>
                             

                <Video videos={videoData} title="Does money motivate you?" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="money" />
            </div>
        </div>
    );
};

export default Money;
