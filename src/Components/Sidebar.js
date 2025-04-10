import React, { useEffect } from 'react';
import ContactForm from '../Components/ContactForm';
import todd2 from '../Images/todd2.png';


const Sidebar = () => {


  return (
<div>
                      <div>



                      <figure data-title="For Teachers">
                                        <figcaption>
                                            <div className="page-description"><p>The exercises here are designed for you to use with your students. Most of the grammar exercises are tenses that are intended to be used as drills while the flashcards and quizzes focus on vocabulary. If you have students preparing for English exams, all the practice exercises you need can be found here in one place.</p> </div>
                                            
                                        </figcaption>
                                </figure>

                                <figure data-title="For Students">
                                        <figcaption>
                                            <div className="page-description"><p>The exercises here are designed to be used with a teacher but are also ideal for self-study. Of course, you'll need to connect with a real person for speaking practice and writing evaluation.</p></div>
                                            
                                        </figcaption>
                                </figure>

                                            
<div className="hometext"><ContactForm/></div>     
                  <div className="toddimg">
                      <img src={todd2} className="float-image" alt="" />
                                  <h2 className="toddhelp">Let me help you pass those exams!</h2>
                                    
                                  <p> Hi, I'm Todd and I’ve been teaching English for 30+ years now. I've decided to gather together all my knowledge and put into one place: here!</p> 

                                  <p>For speaking practice, I offer exam practice sessions online to help you, your friends, your children, whoever, practice English as effectively as possible.</p>
                  </div>


                  </div>
        <>
     

      
    </> </div>
  );
};

export default Sidebar;
