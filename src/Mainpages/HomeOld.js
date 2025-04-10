import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import SEO from '../Components/SEO';
import Breadcrumb from '../Components/Breadcrumb';
import Sidebar from '../Components/Sidebar';
import exambooks from '../Images/exam-books.webp'
import grammar from '../Images/grammar4-1280x470.jpg'
import reading from '../Images/reading1-1280x470.jpg'
import speaking from '../Images/speaking3-1280x470.jpg'
import listening from '../Images/listening-conference-1280x470.jpg'
import vocabulary from '../Images/vocabulary-focus-1280x470.jpg'
import writing from '../Images/writing1-1280x470.jpg'
import flashcards from '../Images/flashcard2-1280x470.jpg'
import quizzes from '../Images/quizzes1-1280x470.jpg'

const Home = () => {
    return <div>
<SEO
            title='English Exam Exercises'
            description='A big list of English exercises to practice for exams'
            name='English Exam Exercises'
            type='article' />
        <Breadcrumb />
        <>
        <div>
          <div className="home-container">
           
           
            <div className="homebodytext">
              
        <img src={exambooks} alt="English Exam Exercises" />
              <h2>Welcome to <strong>English Exam Exercises</strong>!</h2>

              <p>Are you preparing for exams and looking for effective study resources? Look no further!  Our site offers a wide range of practice exercises, carefully organized by levels and skills to ensure you find exactly what you need. The exercises cover the most common types of tasks you will encounter on TOEFL, EuroExams, Cambridge, Oxford and graduation exams. I have put together a bunch of exercises from grammar and vocabulary to reading comprehension and writing, and these exercises are sure to help you improve for your tests.</p>

              <p>But that's not all! Our primary goal is to provide you with the best one-on-one online speaking practice. Whether you want to boost your general English proficiency or prepare specifically for an exam, we're here to help you succeed. Explore our resources, and don't hesitate to reach out to book a personalized session.</p>
              
              
              
  <div class="courses_container">
  <div class="courses_box">
    
    <div className="blog-card">
    <div className="meta">
      <div className="photo" style={{ backgroundImage: `url(${grammar})` }}></div>
      </div>
    <div className="description">
      <h1>Grammar</h1>
      <h2>Getting the basics down</h2>
      <p> Grammar exercises including all the grammar points needed per level.</p>
      <p className="read-more">
        <Link to="/grammar-exercises">Start Learning</Link>
      </p>
    </div>
  </div>
  
  <div className="blog-card">
    <div className="meta">
      <div className="photo" style={{ backgroundImage: `url(${vocabulary})` }}></div>
      
    </div>
    <div className="description">
      <h1>Vocabulary</h1>
      <h2>Having an adeuate vocabulary brings greater success.</h2>
      <p>Vocabulary exercises, flashcards and quizzes to help you improve and have greater success on exams.</p>
      <p className="read-more">
        <Link to="/vocabulary-exercises">Start Learning</Link>
      </p>
    </div>
  </div>

  <div className="blog-card">
    <div className="meta">
      <div className="photo" style={{ backgroundImage: `url(${speaking})` }}></div>
      
    </div>
    <div className="description">
      <h1>Speaking</h1>
      <h2>Getting the basics down</h2>
      <p> Grammar exercises including all the grammar points needed per level.</p>
      <p className="read-more">
        <Link to="/speaking-exercises">Start Learning</Link>
      </p>
    </div>
  </div>
  
  <div className="blog-card">
    <div className="meta">
      <div className="photo" style={{ backgroundImage: `url(${reading})` }}></div>
      
    </div>
    <div className="description">
      <h1>Reading</h1>
      <h2>Having an adeuate vocabulary brings greater success.</h2>
      <p>Vocabulary exercises, flashcards and quizzes to help you improve and have greater success on exams.</p>
      <p className="read-more">
        <Link to="/reading-exercises">Start Learning</Link>
      </p>
    </div>
  </div>

  <div className="blog-card">
    <div className="meta">
      <div className="photo" style={{ backgroundImage: `url(${writing})` }}></div>
     
    </div>
    <div className="description">
      <h1>Writing</h1>
      <h2>Getting the basics down</h2>
      <p> Grammar exercises including all the grammar points needed per level.</p>
      <p className="read-more">
        <Link to="/writing-exercises">Start Learning</Link>
      </p>
    </div>
  </div>
  
  <div className="blog-card">
    <div className="meta">
      <div className="photo" style={{ backgroundImage: `url(${listening})` }}></div>
      
    </div>
    <div className="description">
      <h1>Listening</h1>
      <h2>Having an adeuate vocabulary brings greater success.</h2>
      <p>Vocabulary exercises, flashcards and quizzes to help you improve and have greater success on exams.</p>
      <p className="read-more">
        <Link to="/listening-exercises">Start Learning</Link>
      </p>
    </div>
  </div>

<div className="blog-card">
  <div className="meta">
    <div className="photo" style={{ backgroundImage: `url(${flashcards})` }}></div>
    
  </div>
  <div className="description">
    <h1>Flashcards</h1>
    <h2>Getting the basics down</h2>
    <p> Grammar exercises including all the grammar points needed per level.</p>
    <p className="read-more">
      <Link to="/flashcards">Start Learning</Link>
    </p>
  </div>
</div>

<div className="blog-card">
  <div className="meta">
    <div className="photo" style={{ backgroundImage: `url(${quizzes})` }}></div>
    
  </div>
  <div className="description">
    <h1>Quizzes</h1>
    <h2>Having an adequate vocabulary brings greater success.</h2>
    <p>Vocabulary exercises, flashcards and quizzes to help you improve and have greater success on exams.</p>
    <p className="read-more">
      <Link to="/quizzes/vocabulary-quizzes">Start Learning</Link>
    </p>
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
                                
      </>
      </div>;
}
 
export default Home;

