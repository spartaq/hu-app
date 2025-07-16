import { Link } from 'react-router-dom';
import SEO from '../Components/SEO';
import Breadcrumb from '../Components/Breadcrumb';
import image from '../Images/exam-books.webp'

export default function Index () {
    return ( 
    <div>
        <SEO />
        <Breadcrumb />
        <div className="all-exercises-container">
        <ul className="all-exercises-list">
            <li><p className="category-title" href="/grammar-exercises">Grammar Exercises</p>
                <ul>
                    <li>
                    <img src={image} width="100px" height="100px" alt="English Exam Exercises" />
                        <Link to="/grammar-exercises/to-be"><span class="label label-a1">A1</span> Be</Link></li>
                    <li><img src={image} width="100px" height="100px" alt="English Exam Exercises" /><Link to="/grammar-exercises/simple-present">Simple Present</Link></li>
                    <li><img src={image} width="100px" height="100px" alt="English Exam Exercises" /><Link to="/grammar-exercises/present-continuous">Present Continuous</Link></li>
                    <li><img src={image} width="100px" height="100px" alt="English Exam Exercises" /><Link to="/grammar-exercises/simple-past">Simple Past</Link></li>
                    <li><Link to="/grammar-exercises/present-perfect">Present Perfect</Link></li>
                    <li><Link to="/grammar-exercises/perfect-past">Present Perfect vs Past Simple</Link></li>
                    <li><Link to="/grammar-exercises/first-conditional">1st Conditional</Link></li>
                    <li><Link to="/grammar-exercises/second-conditional">2nd Conditional</Link></li>
                    <li><Link to="/grammar-exercises/third-conditional">3rd Conditional</Link></li>
                </ul>
            </li>
            <li><p className="category-title" href="/reading-exercises">Reading Exercises</p>
                <ul>
                    <li><Link to="/reading-exercises/reading-comprehension">Reading Comprehension</Link></li>
                    <li><Link to="/reading-exercises/headings">Paragraph Headings</Link></li>
                </ul>
            </li>
            <li><p className="category-title" href="/speaking-exercises">Speaking Exercises</p>
                <ul>
                    <li><Link to="/speaking-exercises/picture-comparison">Picture Comparison</Link></li>
                    <li><Link to="/speaking-exercises/speaking-topics">Speaking Topics</Link></li>
                </ul>
            </li>
            <li><p className="category-title" href="/writing-exercises">Writing Exercises</p>
                <ul>
                    <li><Link to="/writing-exercises/opinions-writing">Opinions</Link></li>
                    <li><Link to="/writing-exercises/pros-cons">Pros/Cons</Link></li>
                    <li><Link to="/writing-exercises/email-writing">Email</Link></li>
                    <li><Link to="/writing-exercises/5-paragraph-essay">5 Paragraph Essay</Link></li>
                </ul>
            </li>
            <li><p className="category-title" href="/listening-exercises">Listening Exercises</p>
                <ul>
                    <li><Link to="/listening-exercises/videos">Videos</Link></li>
                    <li><Link to="/listening-exercises/audio">Audio</Link></li>
                </ul>
            </li>
            <li><p className="category-title" href="/vocabulary-exercises">Vocabulary Exercises</p>
                <ul>
                    <li><Link to="/vocabulary-exercises/flashcardapp">Must-know Words Study Flashcards</Link></li>
                    <li><Link to="/vocabulary-exercises/flashapp">Vocabulary Quizzes</Link></li>
                    <li><Link to="/vocabulary-exercises/collocations1">Collocations</Link></li>
                    <li><Link to="/vocabulary-exercises/collocations2">Synonyms and Antonyms</Link></li>
                </ul>
            </li>
        </ul>
        </div>
    </div>
    );
}




