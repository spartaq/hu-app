import { Link } from 'react-router-dom';
import SEO from '../../Components/SEO';
import Breadcrumbs from '../../Components/Breadcrumb';
import listening from '../../Images/listening-conference-1280x470.jpg';
import Sidebar from '../../Components/Sidebar';



const Listeningexercises = () => {
    return (
    <div>
         <SEO
            title='Listening Exercises - English Exam Exercises'
            description='A collection of lectures to listen to on videso, podcasts and general audio.'
            name='English Exam Exercises'
            type='article' />
        <Breadcrumbs />
        <div className='home-container'>
            <div className='homebodytext'>
            <img src={listening} alt="English Exam Exercises" />
            <div className="introtext">
      <h3 className="mt-2">Listening Exercises</h3></div>
            <div className="page-description">Here is a collection of vocabulary exercises to do. The exercises are divided by categories which correspond to exam levels. Each category here has 10 exercises, but there are more once you go to the page. Keep chcking back as I am always adding new exercises. 

            <div class="courses_container">
            <div class="courses_box">
    
    <div className="blog-card">
    <div className="description">
      <h1>Videos</h1>
      <h2>Getting the basics down</h2>
      <p>Writing guide, flashcards and quizzes to help you improve and have greater success on exams.</p>
      <ul>
      <li><Link to="/Videos/videos"><span className="label label-a1">A1</span> Videos</Link></li>
        </ul>
    </div>
  </div>
  
  <div className="blog-card">
    <div className="description">
      <h1>Audio</h1>
      <h2>Having an adequate vocabulary brings greater success.</h2>
      <p>Vocabulary exercises, flashcards and quizzes to help you improve and have greater success on exams.</p>
      <ul>
                <li><Link to="/listening-exercises/audio"><span className="label label-a2">A2</span> Audio</Link></li>
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

 
export default Listeningexercises;




