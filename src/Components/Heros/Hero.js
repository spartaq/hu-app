import React from 'react';

const Hero = ({ backgroundImage }) => {
  return (
    <div className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` }}>
      <h1>READING EXERCISES</h1>
      <p>Hone Your Reading Skills to the Highest Level</p>
      <input type="text" placeholder="Search..." className="searchBar" />
    </div>
  );
};

export default Hero;