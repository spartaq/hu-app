import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import headerimg from '../Images/hungarian-home.jpg';
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
             
       <img src={headerimg} alt="Hungarian Exercises" />
             <h2>Welcome to <strong>Hungarian Exercises</strong>!</h2>

             <p>Exercises to practice Hungarian</p>
             
             </div>

              <div id="filter">
                <ActivityFilter/>
                </div>  


</div>

   
</div>
  );
};

export default Home;
