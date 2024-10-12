import React from 'react';
import '../styles/Sponsors.css';

interface Sponsor {
  name: string;
  logo: string;
  description: string;
}

const sponsors: Sponsor[] = [
  {
    name: "TechCorp",
    logo: "/api/placeholder/150/100",
    description: "A leading technology company supporting innovation in robotics."
  },
  {
    name: "Engineering Solutions Inc.",
    logo: "/api/placeholder/150/100",
    description: "Providing advanced engineering tools and mentorship to our club."
  },
  {
    name: "University Research Lab",
    logo: "/api/placeholder/150/100",
    description: "Offering access to cutting-edge research facilities and guidance."
  },
  // Add more sponsors as needed
];

const Sponsors: React.FC = () => {
  return (
    <div className="sponsors">
      <h1>Our Sponsors</h1>
      <p className="sponsor-intro">We are grateful for the support of our sponsors who make our projects and competitions possible.</p>
      <div className="sponsor-list">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-item">
            <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="sponsor-logo" />
            <h3>{sponsor.name}</h3>
            <p>{sponsor.description}</p>
          </div>
        ))}
      </div>
      <section className="become-sponsor">
        <h2>Become a Sponsor</h2>
        <p>Interested in supporting the next generation of robotics engineers? Contact us to learn about sponsorship opportunities!</p>
        <button className="contact-button">Contact Us</button>
      </section>
    </div>
  );
};

export default Sponsors;