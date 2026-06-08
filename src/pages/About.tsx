// pages/About.tsx
import React from 'react';
import '../styles/style.css';
import { whatWeDo, chairs, retired, founders, companies } from '../data/aboutData';

// Helper component for rendering team members to keep the code DRY (Don't Repeat Yourself)
const TeamSection = ({ title, members }: { title: string, members: any[] }) => (
  <section>
    <h2 className="heading-subtitle-bold">{title}</h2>
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '2rem' }}>
      {members.map((member, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <a href={member.link} target="_blank" rel="noopener noreferrer">
            <img
              src={member.image}
              alt={member.name}
              style={{
                width: '200px',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease' // Added CSS transition for smoother hover
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
              }}
            />
          </a>
          <h5 style={{ marginTop: '1px' }}>{member.name}</h5>
        </div>
      ))}
    </div>
  </section>
);

const About: React.FC = () => {
  return (
    <div className="layout-xl">
      <h1 className="heading-title">About</h1>
      
      <section>
        <h2 className="heading-subtitle-bold">Welcome to SIGRobotics!</h2>
        <p>
          We are an ACM@UIUC Special Interest Group for robotics dedicated to fostering an environment where students can learn, experiment, and build all kinds of robots. 
          We welcome students from all backgrounds and skill levels. Whether you're a seasoned programmer or just curious about robotics, there's a place for you in our club!
        </p>
        <div className="hero-buttons">
          <a 
            href="https://discord.gg/d6MXagJTb8"
            target="_blank" 
            rel="noopener noreferrer" 
            className="button-primary"
          >
            Join Discord
          </a>
        </div>
      </section>

      <br />

      <section>
        <h2 className="heading-subtitle-bold">What We Do</h2>
        <ul>
          {whatWeDo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <br />

      <TeamSection title="Our Chairs" members={chairs} />

      <br />
      
      <TeamSection title="Retired Chairs" members={retired} />
      
      <br />

      <TeamSection title="Founders" members={founders} />

      <br />

      <section>
        <h2 className="heading-subtitle-bold">Where We've Been</h2>
        <ul>
          {companies.map((company, index) => (
            <li key={index}>{company}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
