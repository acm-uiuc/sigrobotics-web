import React from 'react';
import '../styles/Sponsors.css';

interface Sponsor {
  name: string;
  logo: string;
  link: string;
} 

const sponsors: Sponsor[] = [
  {
    name: "ROBOTIS",
    logo: "https://emanual.robotis.com/assets/images/platform/turtlebot3/logo_robotis.png",
    link: "https://en.robotis.com/",
  },
  {
    name: "Hugging Face LeRobot",
    logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    link: "https://huggingface.com/",
  },
  {
    name: "K-Scale Labs",
    logo: "https://avatars.githubusercontent.com/u/89321298?s=200&v=4",
    link: "https://www.kscale.dev/",
  },
  {
    name: "UIUC CDS",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPvnocn_MP38oUknIq1DZI8-7HkYHQ2hAbQ&s",
    link: "https://siebelschool.illinois.edu/",
  },
  // Add more sponsors as needed
];

const Sponsors: React.FC = () => {
  return (
    <div className="layout-xl">
      <h1 className="heading-title">Our Sponsors</h1>
      <section className="layout-box-white">
        <h2 className="heading-subtitle-bold">Become a Sponsor!</h2>
        <p>Interested in supporting the next generation of robotics engineers? Contact us to learn about sponsorship opportunities!</p>
        <a 
          href="mailto:sigrobotics@acm.illinois.edu"
          target="_blank" 
          rel="noopener noreferrer" 
          className="button-primary"
        >
          Contact Us
        </a>
      </section>
      <h2 className="heading-subtitle-bold">Thank You!</h2>
      <p>We are grateful for the support of our sponsors who make our projects and competitions possible.</p>
      <br></br>
      <div className="sponsor-list">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor-item">
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="sponsor-logo" />
            </a>
            <h3 className="heading-md-bold">{sponsor.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;