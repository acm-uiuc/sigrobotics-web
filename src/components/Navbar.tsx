import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo/logo.png'

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="SIGRobotics Logo" className="navbar-logo-image" />
          <span className="navbar-logo-text">SIGRobotics</span>
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={toggleMenu}>About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/meetings" className="navbar-link" onClick={toggleMenu}>Meetings</Link>
          </li>
          <li className="navbar-item">
            <Link to="/projects" className="navbar-link" onClick={toggleMenu}>Projects</Link>
          </li>
          <li className="navbar-item">
            <Link to="/sponsors" className="navbar-link" onClick={toggleMenu}>Sponsors</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link" onClick={toggleMenu}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;