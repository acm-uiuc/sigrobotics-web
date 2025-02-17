import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Meetings from './pages/Meetings';
import Projects from './pages/Projects';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';
import './styles/App.css';
import HeroSection from './components/HeroSection';
import openHouseImage from './assets/open_house.png';

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
                          className="text-blue-600 hover:text-blue-800 underline"
                      >
                          ACM@UIUC
                      </a>
                      , focused on building open-ended projects, contributing to open-source, and doing 
                      quality research in robotics and robot learning.
                  </>
              }
              imageSrc={openHouseImage}
              imageAlt="UIUC Robotics team working on a project"
            />
          }/>
          <Route path="/about" element={<About />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;