import React from 'react';
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
import GrammarExercises from '../../Components/GrammarExerciseComps/linkingwordsexercisescomp.js';
import GrammarExplanation from '../../Components/GrammarExplanationComps/linkingwordsexplanation.js';
import PhrasalverbsList from '../../Components/VocabularyListComps/phrasalverblist.js';
import idiomData from "../../Mainpages/Vocabulary-Exercises/Data/idioms.json";
import Quiz from '../Quizzes/quiz.js';
import quizzesData from '../Quizzes/Data/gamblingquiz.json';
import headerimg from '../../Images/gambling.webp';
import ToggleSection from '../../Utils/toggleSection';

const sections = [
  { label: "Exercises", description: "Do this exercise to practice your grammar.", type: "quiz", subtype: "linkingwords" },
];


Modal.setAppElement('#root');

const Gambling = () => {

    return (
        <div>
            <SEO
                title='Exam Topics - Gambling - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the gambling'
                name='English Exam Exercises - Gambling'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Gambling</h1>
                     <div className="grammarimage">
                      <img src={headerimg} alt="English Exam Exercises" />
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

                 <div className="agenda-vocabulary">Vocabulary</div>
                <div>                   
                    <div className="agenda-display-grid">
                        <PhrasalverbsList data={idiomData} topic="gambling" />
                    </div>                    
                </div>

                <div className="agenda-quiz">Quiz</div> 
                <div>                   
                    <div className="agenda-display-grid">
                        <Quiz quizzesData={quizzesData} />
                    </div>                    
                </div>

                

                <div className="agenda-reading">Reading</div>
                <div className="reading-container">
                <Reading readings={readingcompData} title="Luck, Loss, and the Rise of Online Gambling" /></div>
                
                <div className="agenda-listening">Video</div>
                             

                <Video videos={videoData} title="The Psychology of Sports Gambling" />
                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="gambling" />
            </div>
        </div>
    );
};

export default Gambling;
