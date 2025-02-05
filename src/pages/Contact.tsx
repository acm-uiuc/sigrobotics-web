import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to a server
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p className="contact-intro">Have questions or want to get involved? Reach out to us!</p>
      
      <div className="contact-info">
        <h2>Club Information</h2>
        <p>Email: sigrobotics@acm.illinois.edu</p>
        <p>Address: 201 N Goodwin Ave, Urbana, IL 61801</p>
      </div>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send us a message!</h2>
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
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;