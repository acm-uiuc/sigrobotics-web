import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Meetings from './pages/Meetings';
import Papers from './pages/Papers';
import Projects from './pages/Projects';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';
import './styles/App.css';
import HeroSection from './components/HeroSection';
// Hero background — swap this import for your own image.
import heroImage from './assets/project_dating.jpg';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />


        <Routes>
          <Route path="/" element={
            <HeroSection
              title="Welcome to SIGRobotics."
              description={
                  <>
                      We are a student-run robotics special-interest group, chartered through{' '}
                      <a 
                          href="https://acm.illinois.edu" 
                          target="_blank" 
                          rel="noopener noreferrer"
                      >
                          ACM@UIUC
                      </a>
                      , focused on building open-ended projects, contributing to open-source, and doing 
                      quality research in robotics and robot learning.
                  </>
              }
              imageSrc={heroImage}
              imageAlt="SIGRobotics members at a project dating meeting"
            />
          }/>
          <Route path="/about" element={<About />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/papers" element={<Papers />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;