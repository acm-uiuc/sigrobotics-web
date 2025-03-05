import React from 'react';
import '../styles/Sponsors.css';

interface Sponsor {
  name: string;
  logo: string;
  link: string;
} 

const sponsors: Sponsor[] = [
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
    logo: "https://pbs.twimg.com/profile_images/1820548762588135425/btfn2u9P_400x400.jpg",
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
      <p>We are grateful for the support of our sponsors who make our projects possible.</p>
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