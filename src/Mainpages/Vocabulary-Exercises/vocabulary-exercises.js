import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../Components/SEO';
import Breadcrumb from '../../Components/Breadcrumb';
import vocabulary from '../../Images/vocabulary-focus-1280x470.jpg';

const Vocabularyexercises = () => {
    return (
    <div>
         <SEO
            title='Vocabulary Exercises - English Exam Exercises'
            description='A big list of English vocabuluary exercises to practice for exams'
            name='English Exam Exercises'
            type='article' />
            <Breadcrumb />

            <div className='home-container'>
            <div className='homebodytext'>
            <img src={vocabulary} alt="English Exam Exercises" />
            <div className="introtext">
      <h3 className="mt-2">Vocabulary Exercises</h3></div>
            <div className="page-description">Here is a collection of vocabulary exercises to do. The exercises are divided by categories which correspond to exam levels. Each category here has 10 exercises, but there are more once you go to the page. Keep chcking back as I am always adding new exercises. 

            <div class="courses_container">
            <div class="courses_box">

  <Link to="/vocabulary-exercises/phrasal-verbs">
  <div className="blog-card">
    <div className="description">
      <span className="label label-c1">A1-C1</span>
        <h1>Phrasal Verbs</h1>
        <h2>Alternate ways of speaking</h2>
        <p>Phrasal Verbs are words we use that are based on a verb and a preposition that changes the meaning of the words.</p>
    </div>
  </div>
  </Link>

  <Link to="/vocabulary-exercises/idioms">
    <div className="blog-card">
    <div className="description">
    <span className="label label-a1">A1</span>
      <h1>Idioms</h1>
      <h2>Alternate ways of speaking</h2>
      <p>Idioms are words we use that are based on cultural references.</p>
    </div>
  </div>              
  </Link> 


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
 
export default Vocabularyexercises;



