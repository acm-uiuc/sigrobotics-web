// pages/About.tsx
import React from 'react';
import '../styles/style.css';
import '../styles/About.css';
import { whatWeDo, chairs, retired, founders, companies } from '../data/aboutData';

interface Member {
  name: string;
  link: string;
  image: string;
}

const TeamSection = ({ title, members }: { title: string; members: Member[] }) => (
  <section>
    <h2 className="heading-subtitle-bold">{title}</h2>
    <div className="team-grid">
      {members.map((member) => (
        <div key={member.name} className="team-member">
          {/* Not everyone has a page to link to. */}
          {member.link ? (
            <a
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className="team-member-link"
            >
              <img src={member.image} alt={member.name} className="team-member-image" />
            </a>
          ) : (
            <div className="team-member-link">
              <img src={member.image} alt={member.name} className="team-member-image" />
            </div>
          )}
          <p className="team-member-name">{member.name}</p>
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
        <h2 className="heading-subtitle-bold">Welcome to SIGRobotics</h2>
        <p className="text-lead">
          We are an ACM@UIUC Special Interest Group for robotics dedicated to fostering an
          environment where students can learn, experiment, and build all kinds of robots.
          We welcome students from all backgrounds and skill levels. Whether you're a
          seasoned programmer or just curious about robotics, there's a place for you in
          our club!
        </p>
        <div className="action-row">
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

      <section>
        <h2 className="heading-subtitle-bold">What We Do</h2>
        <ul>
          {whatWeDo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <TeamSection title="Our Chairs" members={chairs} />

      <TeamSection title="Retired Chairs" members={retired} />

      <TeamSection title="Founders" members={founders} />

      <section>
        <h2 className="heading-subtitle-bold">Where We've Been</h2>
        <ul className="company-grid">
          {companies.map((company) => (
            <li key={company.name} className="company-tile">
              <span className="company-logo">
                <img src={company.logo} alt="" loading="lazy" aria-hidden="true" />
              </span>
              <span className="company-name">{company.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
