import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../Components/SEO';
import Sidebar from '../../Components/Sidebar';
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

            <div className="blog-card">
    <div className="description">
      <h1>Phrasal Verbs</h1>
      <h2>Alternate ways of speaking</h2>
      <p>Phrasal Verbs are words we use that are based on a verb and a preposition that changes the meaning of the words.</p>
      <ul>
      <li><Link to="/vocabulary-exercises/phrasal-verbs"><span className="label label-c1">A1-C1</span> Phrasal Verbs</Link></li>
        </ul>
    </div>
  </div>
  
  <div className="blog-card">
    <div className="description">
      <h1>Dependent Prepositions</h1>
      <h2>Alternate ways of speaking</h2>
      <p>Words that go with particular preositions.</p>
      <ul>
      <li><Link to="/vocabulary-exercises/dependent-prepositions"><span className="label label-a1">A1</span> Dependent Prepositions</Link></li>
        </ul>
    </div>
  </div>  

    <div className="blog-card">
    <div className="description">
      <h1>Idioms</h1>
      <h2>Alternate ways of speaking</h2>
      <p>Idioms are words we use that are based on cultural references.</p>
      <ul>
      <li><Link to="/vocabulary-exercises/idioms"><span className="label label-a1">A1</span> Idioms</Link></li>
        </ul>
    </div>
  </div>              
    
    <div className="blog-card">
    <div className="description">
      <h1>Collocations</h1>
      <h2>What goes with what</h2>
      <p>Collocations are words the frequently go together and are a key way to learn new vocabulary.</p>
      <ul>
      <li><Link to="/vocabulary-exercises/collocations1"><span className="label label-a1">A1</span> Collocations 1</Link></li>
        </ul>
    </div>
  </div>
  
  <div className="blog-card">
    <div className="description">
      <h1>Word Forms</h1>
      <h2>The same, yet different</h2>
      <p>Learn and practice the different forms (noun, verb, adjective, etc.) of common words. this helps to build up synonym vocabulary.</p>
      <ul>    
      <li><Link to="/vocabulary-exercises/word-forms"><span className="label label-a1">A1</span> Word Forms</Link></li>
        </ul>
    </div>
  </div>
  
  <div className="blog-card">
    <div className="description">
      <h1>Linking Words</h1>
      <h2>How to connect</h2>
      <p>Learn and practice linking words.</p>
      <ul>    
      <li><Link to="/vocabulary-exercises/linking-words"><span className="label label-a1">A1</span> Linking Words</Link></li>
        </ul>
    </div>
  </div>

  <div className="blog-card">
    <div className="description">
      <h1>Reported Speech</h1>
      <h2>What They Said</h2>
      <p>Learn and practice reported speech.</p>
      <ul>    
      <li><Link to="/vocabulary-exercises/reported-speech"><span className="label label-a1">A1</span> Reported Speech</Link></li>
        </ul>
    </div>
  </div>
  


  </div>
</div>
</div>

</div>
<div>

             <div><Sidebar/></div>
      </div>

  </div>
 

    </div>
    )
}
 
export default Vocabularyexercises;



