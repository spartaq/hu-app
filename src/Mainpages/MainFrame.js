import { Outlet } from 'react-router-dom';
import React from 'react';
import SEO from '../Components/SEO';

const MainFrame = () => {
  

  return (
    <div>
      <SEO
        title="English Exam Exercises"
        description="Prepare for your English exam with free preparation materials. These include practice tests, vocabulary lists and exam guides."
        name="English Exam Exercises"
        type="article"
      />
      
      <>
        <div className="grid">
          <main className="main">
            <Outlet />
          </main>
        </div>
      </>
    </div>
  );
};

export default MainFrame;
