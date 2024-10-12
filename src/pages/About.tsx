// pages/About.tsx
import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <h1>About Our Robotics Club</h1>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>The Robotics Club is dedicated to fostering innovation, creativity, and technical skills in the field of robotics. We aim to provide a collaborative environment where students can learn, experiment, and build amazing robots.</p>
      </section>
      <section className="history">
        <h2>Our History</h2>
        <p>Founded in 2010, our club has grown from a small group of enthusiasts to a thriving community of over 100 members. We've participated in numerous competitions and have won several awards for our innovative designs and teamwork.</p>
      </section>
      <section className="activities">
        <h2>What We Do</h2>
        <ul>
          <li>Weekly workshops and lectures on robotics topics</li>
          <li>Hands-on projects and build sessions</li>
          <li>Participation in local and national robotics competitions</li>
          <li>Outreach programs to introduce robotics to younger students</li>
          <li>Collaboration with industry partners on cutting-edge projects</li>
        </ul>
      </section>
      <section className="join">
        <h2>Join Us</h2>
        <p>We welcome students from all backgrounds and skill levels. Whether you're a seasoned programmer or just curious about robotics, there's a place for you in our club!</p>
        <button className="join-button">Become a Member</button>
      </section>
    </div>
  );
};

export default About;