import React from 'react';
import '../styles/Sponsors.css';

interface Sponsor {
  name: string;
  logo: string;
  link: string;
  size: string;
} 

const sponsors: Sponsor[] = [
  {
    name: "FrodoBots",
    logo: "https://cdn.prod.website-files.com/66042185882fa3428f4dd6f1/662bee5b5ef7ed094186a56a_frodobots_ai_logo.png",
    link: "https://www.frodobots.ai/",
    size: "big",
  },
  {
    name: "BitRobot Foundation",
    logo: "https://framerusercontent.com/images/1Az7oGmHlBgOaIPiMw6DuVww8M.png?scale-down-to=1024&width=1285&height=444",
    link: "https://bitrobot.ai/",
    size: "big",
  },
  {
    name: "ROBOTIS",
    logo: "https://en.robotis.com/renewal/img/main/main_logo.png",
    link: "https://en.robotis.com/",
    size: "normal",
  },
  {
    name: "Hugging Face LeRobot",
    logo: "https://cdn-uploads.huggingface.co/production/uploads/631ce4b244503b72277fc89f/MNkMdnJqyPvOAEg20Mafg.png",
    link: "https://huggingface.com/",
    size: "normal",
  },
  {
    name: "Neuralink",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Neuralink_logo.svg",
    link: "https://neuralink.com/",
    size: "normal",
  },
  {
    name: "UIUC CS",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPvnocn_MP38oUknIq1DZI8-7HkYHQ2hAbQ&s",
    link: "https://siebelschool.illinois.edu/",
    size: "normal",
  },
  {
    name: "Saronic",
    logo: "https://www.saronic.com/assets/images/newsroom/default.png",
    link: "https://www.saronic.com/",
    size: "big",
  },
  // Add more sponsors as needed
];

const Sponsors: React.FC = () => {
  const bigSponsors = sponsors.filter(sponsor => sponsor.size === "big");
  const normalSponsors = sponsors.filter(sponsor => sponsor.size === "normal");

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

      {/* Big Sponsors Section */}
      {bigSponsors.length > 0 && (
        <>
          <div className="sponsor-list sponsor-list-big">
            {bigSponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-item sponsor-item-big">
                <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                  <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="sponsor-logo sponsor-logo-big" />
                </a>
                <h3 className="heading-md-bold">{sponsor.name}</h3>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Normal Sponsors Section */}
      {normalSponsors.length > 0 && (
        <>
          <div className="sponsor-list sponsor-list-normal">
            {normalSponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-item sponsor-item-normal">
                <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                  <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="sponsor-logo sponsor-logo-normal" />
                </a>
                <h3 className="heading-md-bold">{sponsor.name}</h3>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sponsors;