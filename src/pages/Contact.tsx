import React from 'react';
import '../styles/Contact.css';
import { FaDiscord, FaTwitter, FaGithub } from 'react-icons/fa';

const socials = [
  { label: 'Discord', href: 'https://discord.gg/xBNhspqwSc', Icon: FaDiscord },
  { label: 'Twitter', href: 'https://x.com/sigrobotics', Icon: FaTwitter },
  { label: 'GitHub', href: 'https://github.com/SIGRobotics-UIUC', Icon: FaGithub },
];

const Contact: React.FC = () => (
  <div className="layout-xl">
    <h1 className="heading-title">Contact Us</h1>
    <p className="text-lead">
      Have questions or want to get involved? Reach out to us!
    </p>

    <dl className="contact-details">
      <div>
        <dt>Email</dt>
        <dd>
          <a href="mailto:sigrobotics@acm.illinois.edu">
            sigrobotics@acm.illinois.edu
          </a>
        </dd>
      </div>
      <div>
        <dt>Address</dt>
        <dd>201 N Goodwin Ave, Urbana, IL 61801</dd>
      </div>
    </dl>

    <div className="social-links">
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon />
        </a>
      ))}
    </div>
  </div>
);

export default Contact;
