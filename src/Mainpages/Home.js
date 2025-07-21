import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import exambooks from '../Images/exam-books.webp';
import Sidebar from '../Components/Sidebar';
import ActivityFilter from "../Utils/activityFilter.js";

const Home = ({ setFilters = () => {} }) => {
  
    const location = useLocation();

    useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
  <div className="home-container">
           
           
           <div className="homebodytext">
             
       <img src={exambooks} alt="English Exam Exercises" />
             <h2>Welcome to <strong>English Exam Exercises</strong>!</h2>

             <p>Are you preparing for exams and looking for effective study resources? Look no further!  Our site offers a wide range of practice exercises, carefully organized by levels and skills to ensure you find exactly what you need. The exercises cover the most common types of tasks you will encounter on TOEFL, EuroExams, Cambridge, Oxford and graduation exams. I have put together a bunch of exercises from grammar and vocabulary to reading comprehension and writing, and these exercises are sure to help you improve for your tests.</p>
             
             </div>

              <div id="filter">
                <ActivityFilter/>
                </div>  


</div>

   
</div>
  );
};

export default Home;
