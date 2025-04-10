import React from "react";
import exambooks from '../Images/exam-books.webp'
import Sidebar from '../Components/Sidebar';
import ActivityFilter from "../Utils/activityFilter.js";

const Home = ({ setFilters = () => {} }) => {  

  return (
    <div>
  <div className="home-container">
           
           
           <div className="homebodytext">
             
       <img src={exambooks} alt="English Exam Exercises" />
             <h2>Welcome to <strong>English Exam Exercises</strong>!</h2>

             <p>Are you preparing for exams and looking for effective study resources? Look no further!  Our site offers a wide range of practice exercises, carefully organized by levels and skills to ensure you find exactly what you need. The exercises cover the most common types of tasks you will encounter on TOEFL, EuroExams, Cambridge, Oxford and graduation exams. I have put together a bunch of exercises from grammar and vocabulary to reading comprehension and writing, and these exercises are sure to help you improve for your tests.</p>

             <p>But that's not all! Our primary goal is to provide you with the best one-on-one online speaking practice. Whether you want to boost your general English proficiency or prepare specifically for an exam, we're here to help you succeed. Explore our resources, and don't hesitate to reach out to book a personalized session.</p>
             
             </div>

             <div><ActivityFilter/></div>         
<div><Sidebar/></div>
</div>

   
</div>
  );
};

export default Home;
