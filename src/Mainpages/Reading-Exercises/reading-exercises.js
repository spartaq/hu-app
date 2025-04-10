import { Link } from "react-router-dom";
import SEO from "../../Components/SEO";
import Breadcrumb from "../../Components/Breadcrumb";
import Sidebar from "../../Components/Sidebar";
import reading from "../../Images/reading1-1280x470.jpg";
import ReadingMenu from "../../Components/Menus/ReadingMenu";
import readingcomp from "../Reading-Exercises/Data/readingcomp.json";

const Readingexercises = () => {
    


    return (
        <div>
            <SEO
                title="Reading Exercises - English Exam Exercises"
                description="Reading practice exercises for every type of exam reading section"
                name="Reading English Exam Exercises"
                type="article"
            />
			
			<Breadcrumb />
			
			<div className="home-container">
                
				<div className="homebodytext">
                    
					<img src={reading} alt="English Exam Exercises" />
                    <div className="introtext">
                        <h3 className="mt-2">Reading Exercises</h3></div>

                    <div className="page-description">Here is a collection of vocabulary exercises to do. The exercises are divided by categories which correspond to exam levels. Each category here has 10 exercises, but there are more once you go to the page. Keep checking back as I am always adding new exercises.	
						
						<div className="courses_container">
                            <div className="courses_box">
                                
								<div className="blog-card">
                                    <div className="description">
                                        <h1>Reading Comprehension</h1>
                                        <h2>Getting the basics down</h2>
                                        <p>Vocabulary exercises, flashcards, and quizzes to help you improve and have greater success on exams.
                                        </p>
                                        <ul>
                                            {readingcomp.map((item, index) => (
                                                <li key={index}>
                                                    <Link
                                                        to={`/reading-exercises/reading-comprehension?readingcompTitle=${item.readingcompTitle}`}
                                                    >
                                                        <span className={`label label-${item.level}`}>{item.level}</span> {item.readingcompTitle}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
								
								
								<div className="blog-card">
                                    <div className="description">
                                        <h1>Paragraph Headings</h1>
                                        <h2>Having an adequate vocabulary brings greater success.</h2>
                                        <p>These kinds of tasks are found on TOEFL, EuroExam, and Cambridge.</p>
                                        <ul>
                                            <li>
                                                <Link to="/reading-exercises/paragraph-headings">
                                                    <span className="label label-a2">B2</span> Paragraph Headings
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gmenu div2">
                    <ReadingMenu />
                </div>

                <div>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default Readingexercises;
