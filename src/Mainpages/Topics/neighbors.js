import React, { useEffect, useState } from 'react';
import { TikTokEmbed } from "react-social-media-embed";
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
import PassiveExercises from '../../Components/GrammarExerciseComps/passiveexercisescomp.js';
import PassiveExplanation from '../../Components/GrammarExplanationComps/passiveexplanation.js';
import headerimg from '../../Images/neighbors1.jpg';
import ToggleSection from '../../Utils/toggleSection';

const sections = [
  { label: "Exercises", description: "Do this exercise to practice your grammar.", type: "quiz", subtype: "passive" },
  { label: "Exercises", description: "Do this exercise to practice your grammar.", type: "grammar", subtype: "passive" },
];


Modal.setAppElement('#root');

const Neighbors = () => {
    const [menuItems, setMenuItems] = useState([]);
    
        

    return (
        <div>
            <SEO
                title='Exam Topics - Neighbors - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of the new year'
                name='English Exam Exercises - Neighbors'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Neighbors</h1>
                    <div className="grammarimage">
                                    <img src={headerimg} alt="English Exam Exercises" />
                                    </div> 
                </div>
               

                <div className="agenda-languagepoint">Language Point</div> <div 
                className="languagepoint-container">
                    
                    <div>


                        <div>
                        <PassiveExplanation /> 
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

                <div className="agenda-reading">Reading</div>
                <div className="reading-container">   
                <Reading readings={readingcompData} title="Neighbor Conflicts and Etiquette" />
                </div>
                
                <div className="agenda-listening">Video</div>
                
                <Video videos={videoData} title="The Case of the Blocked Windows – A Neighbor Dispute" />

                
                <div className="agenda-discussion">Discussion</div>
                <RandomQuestionGenerator discussionquestions={discussionquestionsData} topic="neighbors" />
            </div>
        </div>
    );
};

export default Neighbors;
