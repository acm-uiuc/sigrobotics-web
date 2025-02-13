import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo/android-chrome-192x192.png'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="sigrobotics logo"
                style={{
                  width: '64px',
                  height: '64px',
                  objectFit: 'cover',
                  objectPosition: 'bottom',
                }}/>
          SIGRobotics
        </Link>
        <ul className="navbar-menu">
          {/* <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li> */}
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/meetings" className="navbar-link">Meetings</Link>
          </li>
          <li className="navbar-item">
            <Link to="/projects" className="navbar-link">Projects</Link>
          </li>
          <li className="navbar-item">
            <Link to="/sponsors" className="navbar-link">Sponsors</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;