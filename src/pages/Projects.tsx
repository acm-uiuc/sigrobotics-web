import React from 'react';
import '../styles/Projects.css';
import stompy from '../assets/projs/stompy.jpg'
import tb3 from '../assets/projs/tb3.png'
import arm from '../assets/projs/arm.png'

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  status: 'Ongoing' | 'Completed';
}

const projects: Project[] = [
  {
    title: "LeKiwi",
    description: "An open-source, low-cost mobile-manipulator.\n A SIGRobotics x Huggingface LeRobot collaboration.",
    image: "https://github.com/SIGRobotics-UIUC/LeKiwi/raw/main/media/lekiwi_real.jpg",
    link: "https://github.com/SIGRobotics-UIUC/LeKiwi?tab=readme-ov-file",
    status: "Ongoing"
  },
  {
    title: "Robot Arms",
    description: "3D-printed Koch arms for table-top manipulation via imitation learning.",
    image: arm,
    link: "",
    status: "Ongoing"
  },
  {
    title: "Mini Humanoid",
    description: "Training locomotion policies on our own 3D-printed humanoid. Sponsored by KScale Labs.",
    image: stompy,
    link: "https://github.com/SIGRobotics-UIUC/micro-sim",
    status: "Ongoing"
  },
  {
    title: "TB3 Mobile Manipulator",
    description: "Get a Turtlebot3 to get us a cup of coffee! Sponsored by UIUC CDS.",
    image: tb3,
    link: "",
    status: "Ongoing"
  },
];

const Projects: React.FC = () => {
  return (
    <div className="layout-xl">
      <h1 className="heading-title">Our Projects</h1>
      <p>Explore our cutting-edge robotics projects!</p><br></br>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt="team members"
                className="project-image"
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
            {/* <img src={project.image} alt={project.title} className="project-image" /> */}
            <h3 className="heading-md-bold">{project.title}</h3>
            <p>{project.description}</p>
            <br></br>
            <span className={`project-status ${project.status.toLowerCase()}`}>{project.status}</span>
          </div>
        ))}
      </div>
      <br></br>
      <div className="layout-box">
        <h2 className="heading-subtitle-bold">Have a Project Idea?</h2>
        <p>We're always looking for new and exciting projects. If you have an idea, we'd love to hear about it!</p>
        <div className="hero-buttons">
            <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeFxRTifmNDY1QKDFgNkLE7fB7AYqTGxoEYzLcVvsLNg6T20A/viewform?usp=header"
                target="_blank" 
                rel="noopener noreferrer" 
                className="button-secondary"
            >
                Propose a Project
            </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;