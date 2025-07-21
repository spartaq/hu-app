import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../Components/SEO';
import Sidebar from '../../Components/Sidebar';
import Breadcrumb from '../../Components/Breadcrumb';
import mainimage from '../../Images/grammar4-1280x470.jpg';


const Hungarianexercises = () => {
    return (
    <div>
         <SEO
            title='Hungarian Exercises - Hungarian Exam Exercises'
            description='A big list of Hungarian grammar exercises to practice for exams'
            name='Hungarian Exam Exercises'
            type='article' />
            <Breadcrumb />
            
            
    <div className='home-container'>
        
        <div className='homebodytext'>
            <img src={mainimage} alt="Hungarian Exam Exercises" />
            <div className="introtext">
                <h3 className="mt-2">Hungarian Exercises</h3>
            </div>
                
                <div className="page-description">Here is a collection of grammar exercises to do. The exercises are divided by categories which correspond to exam levels. Each category here has 10 exercises, but there are more once you go to the page. Keep chcking back as I am always adding new exercises.</div>

                <div class="courses_container">
                    <div class="courses_box">

                                <div className="blog-card">
                                    <div className="description">
                                      <h1>Verb Tenses</h1>
                                      <h2>Getting the basics down</h2>
                                      <p>Vocabulary exercises, flashcards and quizzes to help you improve and have greater success on exams.</p>
                                      <div class="linkbox-items-body">
                                      <div class="linkbox-items-body-content">
                                      <Link to="jelenidoindef">
                                      <span><span className="label label-hu1">HU1</span> Jelen Idő Alanyi (Present Indefinite)</span></Link>
                                        <i class="fa fa-angle-right"></i>
                                      </div>
                                      <div class="linkbox-items-body-content">
                                      <Link to="jelenidodef">
                                      <span><span className="label label-hu1">HU1</span> Jelen Idő Targyás (Present Indefinite)</span></Link>
                                        <i class="fa fa-angle-right"></i>
                                      </div>
                                      <div class="linkbox-items-body-content">
                                      <Link to="multido">
                                        <span><span className="label label-hu1">HU1</span> Mult Idő (Past)</span></Link>
                                        <i class="fa fa-angle-right"></i>
                                      </div>
                                      <div class="linkbox-items-body-content">
                                      <Link to="jovoido">
                                        <span><span className="label label-hu1">HU1</span> Jövő Idő (Future)</span></Link>
                                        <i class="fa fa-angle-right"></i>
                                      </div>
                                      <div class="linkbox-items-body-content">
                                      <Link to="hasonlitas"><span><span className="label label-hu1">HU1</span> Hasonlítás (Comparison)</span></Link>
                                        <i class="fa fa-angle-right"></i>
                                      </div>
                                      <div class="linkbox-items-body-content">
                                      <Link to="nekivan"><span><span className="label label-hu1">HU1</span> Neki van (to have)</span></Link>
                                        <i class="fa fa-angle-right"></i>
                                      </div>
                                      <div class="linkbox-items-body-content">
                                      <Link to="nevmas"><span><span className="label label-hu1">HU1</span> Névmás (Pronouns)</span></Link>
                                        <i class="fa fa-angle-right"></i>
                                      </div>
                                      <div class="linkbox-items-body-content">
                                      <Link to="nevuto"><span><span className="label label-hu1">HU1</span> Névutó (Prepositions)</span></Link>
                                        <i class="fa fa-angle-right"></i>
                                      </div>
                                      <div class="linkbox-items-body-content">
                                      <Link to="van"><span><span className="label label-hu1">HU1</span> Van (To be, there is)</span></Link>
                                        <i class="fa fa-angle-right"></i>
                                      </div>
                                      <div class="linkbox-items-body-content">
                                      <Link to="harmonia"><span><span className="label label-hu2">HU2</span> Harmonia (Vowel Agreement)</span></Link>
                                        <i class="fa fa-angle-right"></i>
                                      </div>
                                      <div class="linkbox-items-body-content">
                                      <Link to="birtoklas"><span><span className="label label-hu2">HU2</span> Birtóklás (Possessive)</span></Link>
                                        <i class="fa fa-angle-right"></i>
                                      </div>
                                      <div class="linkbox-items-body-content">
                                      <Link to="fokusz"><span><span className="label label-hu2">HU2</span> Fokusz (Word Order)</span></Link>
                                        <i class="fa fa-angle-right"></i>
                                      </div>
                                        </div>
                                    </div>
                                </div>
                                  




                    </div>
                </div>
                

        </div>
        
        <div>
            
        </div>

    </div>
 

    </div>
    )
}
 
export default Hungarianexercises;

