// pages/About.tsx
import React from 'react';
import '../styles/style.css';
import bhargav from '../assets/exec/bhargav.jpg';
import gloria from '../assets/exec/gloria.jpg';
import advait from '../assets/exec/advait.jpg'
// TODO: add image to ../assets/exec/name.jpg and import here

const About: React.FC = () => {
  return (
    <div className="layout-xl">
      <h1 className="heading-title">About</h1>
      <section>
        <h2 className="heading-subtitle-bold">Welcome to SIGRobotics!</h2>
        <p>We are an ACM@UIUC Special Interest Group for robotics dedicated to fostering an environment where students can learn, experiment, and build all kinds of robots. 
          We welcome students from all backgrounds and skill levels. Whether you're a seasoned programmer or just curious about robotics, there's a place for you in our club!</p>
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
      <br></br>
      <section>
        <h2 className="heading-subtitle-bold">What We Do</h2>
        <ul>
          <li>Weekly workshops and lectures on robotics topics</li>
          <li>Hands-on projects and build sessions</li>
          <li>Speaker events and paper reading groups</li>
          <li>Collaboration with industry partners on cutting-edge projects</li>
        </ul>
      </section>
      <br></br>
      <section>
        <h2 className="heading-subtitle-bold">Our Chairs</h2>
        <p></p>
        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '2rem' }}>
          <div style={{textAlign: 'center'}}>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={"https://media.licdn.com/dms/image/v2/D5603AQEETFQfjDxTLQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725848835082?e=1755734400&v=beta&t=luHSHKAxxVZU1hgV6MTAUWbvlGP5Rj3l2teRNpmEJGI"}
                alt="team members"
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
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
            <h5 style={{marginTop: '1px'}}>Manav Chandaka</h5>
          </div>

          <div style={{textAlign: 'center'}}>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={"https://media.licdn.com/dms/image/v2/D4E03AQHdR1Vl1ck50Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704406369721?e=1755734400&v=beta&t=pq6jZqcuylSls7wz29-yILkg2ZuLHSG887i-paZjgUU"}
                alt="team members"
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
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
            <h5 style={{marginTop: '1px'}}>Reid Faistl</h5>
          </div>

          <div style={{textAlign: 'center'}}>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={"https://media.licdn.com/dms/image/v2/D4D03AQGmHUkcEL5yXQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726537823056?e=1755734400&v=beta&t=LmOs__0nUXh85eHU4Wg8flkDZS0BBLYk9JeglUKnMhA"}
                alt="team members"
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
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
            <h5 style={{marginTop: '1px'}}>Saketh Kantipudi</h5>
          </div>
        </div>
      </section>
      <br></br>
      <section>
        <h2 className="heading-subtitle-bold">Founders & Consultants</h2>
        <p></p>
        <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '2rem' }}>
          <div style={{textAlign: 'center'}}>
            <a href="https://bchandaka.github.io/" target="_blank" rel="noopener noreferrer">
              <img
                src={bhargav}
                alt="team members"
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
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
            <h5 style={{marginTop: '1px'}}>Bhargav Chandaka</h5>
          </div>

          <div style={{textAlign: 'center'}}>
            <a href="https://gxywang.github.io/" target="_blank" rel="noopener noreferrer">
              <img
                src={gloria}
                alt="team members"
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
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
            <h5 style={{marginTop: '1px'}}>Gloria Wang</h5>
          </div>

          <div style={{textAlign: 'center'}}>
            <a href="https://advaitpatel.com" target="_blank" rel="noopener noreferrer">
              <img
                src={advait}
                alt="team members"
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
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
            <h5 style={{marginTop: '1px'}}>Advait Patel</h5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;