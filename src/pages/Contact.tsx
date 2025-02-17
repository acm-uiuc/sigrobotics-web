import React, { useState } from 'react';
import '../styles/Contact.css';
import { FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // send msg via email client
    const mailto = `mailto:sigrobotics@acm.illinois.edu?subject=Contact Form Submission 
      ${encodeURIComponent(name)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
      )}`;
    
    window.location.href = mailto
    
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="layout-xl">
      <h1 className="heading-title">Contact Us</h1>
      <p>Have questions or want to get involved? Reach out to us!</p>
      <br></br>
      <div className="layout-box">
        <h2 className="heading-subtitle-bold">SIGRobotics Contact</h2>
        <p><b>Email:</b> sigrobotics@acm.illinois.edu</p>
        <p><b>Address:</b> 201 N Goodwin Ave, Urbana, IL 61801</p>
      
        <div className="social-links">
        <a 
          href="https://discord.gg/xBNhspqwSc" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Discord"
        >
          <FaDiscord />
        </a>
        <a 
          href="https://x.com/sigrobotics" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
        <a 
          href="https://github.com/SIGRobotics-UIUC" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
      </div>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="heading-subtitle-bold">Send us a message!</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="button-primary">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;