import React, { useState } from 'react';
import Modal from 'react-modal';
										   
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SEO from '../../Components/SEO.js';
import Reading from '../../Components/ReadingComps/readingcomponent.js';
import Video from '../../Components/VideoComps/videocomponent.js';
import videoData from '../Listening-Exercises/Data/video.json';
import readingcompData from '../Reading-Exercises/Data/readingcomp.json';
import '../../CSS/lesson-agenda.css';
import IndirectSpeechExercise from '../../Components/GrammarExerciseComps/indspeechexercisecomp.js';
import IdiomsList from '../../Components/VocabularyListComps/idiomslist.js';

Modal.setAppElement('#root');

const Caffeine = () => {									   

    const [isGridVisible, setIsGridVisible] = useState(true);
    const [isExerciseVisible, setIsExerciseVisible] = useState(false);

    const toggleGridVisibility = () => setIsGridVisible(!isGridVisible);
    const toggleExerciseVisibility = () => setIsExerciseVisible(!isExerciseVisible);

    return (
        <div>
            <SEO
                title='Exam Topics - Caffeine - English Exam Exercises'
                description='A group of English exam exercises centered around the topic of caffeine'
                name='English Exam Exercises - Caffeine'
                type='article' 
            />

            <div className="agenda-container">
                <div className="agenda-title">
                    <h1 className="mt-2">Caffeine</h1>
                </div>

                <div className="agenda-subtitle">Language Point</div>
                
                <div>
                    <p>Indirect Question forms - used to make questions "softer".</p>
                    <div className="grammarctrl descriptionbox">
                        <button type="button" className="grammarbtn" onClick={toggleGridVisibility}>
                            {isGridVisible ? "Hide Language Point" : "Show Language Point"}
                        </button>
                    </div>

                    {isGridVisible && (
                        <div className="grammar-display-grid">
                        <IdiomsList /> 
                                    
                                </div>                        
                             )}

                    <div className="grammarctrl descriptionbox">
                        <button type="button" className="grammarbtn" onClick={toggleExerciseVisibility}>
                            {isExerciseVisible ? "Hide Exercise" : "Show Exercise"}
                        </button>
                    </div>
                    {isExerciseVisible && (
                        <div className="grammar-display-grid">
                           <IndirectSpeechExercise /> 
                        </div>
                    )}


                </div>

                <div className="agenda-subtitle">Reading</div>
				
				<Reading readings={readingcompData} title="Caffeine: The Workplace Drug of Choice" />
                
                <div className="agenda-subtitle">Video</div> 														   
					  

                <Video videos={videoData} title="caffeine" />
						  
					   
                <div className="agenda-subtitle">Discussion</div>
                <div>    
                    <ul>
                        <li>Do you need coffee to wake you up in the morning?</li>
                        <li>Do you care if you have instant coffee?</li>
                        <li>What’s the most number of cups you have drunk in one day?</li>
                        <li>Do you have Starbucks in your country?</li>
                        <li>What do you think of Starbucks?</li>
                        <li>What do you think of the new trend of flavored coffee?</li>
                        <li>Do you like the smell of coffee?</li>
                        <li>What do you know about coffee production and who gets the big profits?</li>
                        <li>What is the difference between drip coffee, cappuccino and espresso?</li>
                        <li>Does coffee that’s grown in different parts of the world taste differently?</li>
                        <li>What role does coffee (or tea) play in your life?</li>
                        <li>What’s the difference between Irish coffee and Turkish coffee?</li>
                        <li>Do you know what fair trade coffee is?</li>
                        <li>Do you like coffee sold in cans?</li>
                        <li>Do you like to buy whole-bean coffee or pre-ground coffee?</li>
                        <li>Do you know the difference between arabica /əˈræbɪkə/ coffee and robusta /rəʊˈbʌstə/ coffee?</li>
                        <li>When is the best time to drink coffee?</li>
                        <li>Which coffee do you like more, hot or cold?</li>
                        <li>What is your favorite coffee shop?</li>
                        <li>How old were you when you started drinking coffee?</li>
                        <li>Are you addicted to coffee?</li>
                        <li>Is coffee bad for you?</li>
                        <li>Does coffee affect your appetite?</li>
                        <li>Do you think caffeine is a dangerous drug?</li>
                        <li>Steve Krashen says that “drinking decaf is like kissing your own sister" - do you agree?</li>
                        <li>Are there any health benefits to drinking coffee?</li>
                        <li>Would you drink less coffee if you knew it stained your teeth?</li>
                        <li>What do you think happens when you overdose on coffee?</li>
                    </ul>
                    </div>
            </div>
        </div>
    );
};

export default Caffeine;
