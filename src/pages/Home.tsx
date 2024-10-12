import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to the Robotics Club</h1>
      <div className="about-us">
        <h2>About Us</h2>
        <p>We are a student-run organization focused on robotics and technology...</p>
      </div>
      <div className="image-gallery">
        {/* Add your images here */}
        <img src="/path-to-image1.jpg" alt="Robotics Club Activity 1" />
        <img src="/path-to-image2.jpg" alt="Robotics Club Activity 2" />
        <img src="/path-to-image3.jpg" alt="Robotics Club Activity 3" />
      </div>
    </div>
  );
};

export default Home;