import React from 'react';
import '../styles/Sponsors.css';
import { sponsors } from '../data/sponsorsData';

const Sponsors: React.FC = () => (
  <div className="layout-xl">
    <h1 className="heading-title">Our Sponsors</h1>
    <p className="text-lead">
      We are grateful for the support of our sponsors, who make our projects and
      competitions possible.
    </p>

    <section>
      <ul className="sponsor-grid">
        {sponsors.map((sponsor) => (
          <li key={sponsor.name} className="sponsor-tile">
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <span className="sponsor-logo">
                <img src={sponsor.logo} alt="" loading="lazy" aria-hidden="true" />
              </span>
              <span className="sponsor-name">{sponsor.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>

    <section className="layout-box-white">
      <h2 className="heading-subtitle-bold">Become a Sponsor</h2>
      <p>
        Interested in supporting the next generation of robotics engineers?
        Contact us to learn about sponsorship opportunities.
      </p>
      <div className="action-row">
        <a href="mailto:sigrobotics@acm.illinois.edu" className="button-primary">
          Contact Us
        </a>
      </div>
    </section>
  </div>
);

export default Sponsors;
