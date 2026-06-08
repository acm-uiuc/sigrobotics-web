import React from 'react';
import '../styles/Projects.css';
import { projects } from '../data/projectsData'; // Importing from the separate file

const Projects: React.FC = () => {
  // Separate projects by status
  const ongoingProjects = projects.filter((project) => project.status === 'Ongoing');
  const completedProjects = projects.filter((project) => project.status === 'Completed');

  return (
    <div className="layout-xl">
      <h1 className="heading-title">Our Projects</h1>
      <p>Explore our cutting-edge robotics projects!</p><br></br>

      {/* ONGOING PROJECTS */}
      {ongoingProjects.length > 0 && (
        <>
          <h2 className="heading-subtitle-bold">Ongoing</h2>
          <div className="project-list">
            {ongoingProjects.map((project, index) => (
              <div key={`ongoing-${index}`} className="project-item">
                <div className="project-image-container">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
                    <img
                      src={project.image}
                      alt={project.title}
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
                </div>
                <div className="project-content">
                  <h3 className="heading-md-bold">{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-status-container">
                  <span className={`project-status ${project.status.toLowerCase()}`}>{project.status}</span>
                </div>
              </div>
            ))}
          </div>
          <br></br>
        </>
      )}

      {/* COMPLETED PROJECTS */}
      {completedProjects.length > 0 && (
        <>
          <h2 className="heading-subtitle-bold">Completed</h2>
          <div className="project-list">
            {completedProjects.map((project, index) => (
              <div key={`completed-${index}`} className="project-item">
                <div className="project-image-container">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
                    <img
                      src={project.image}
                      alt={project.title}
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
                </div>
                <div className="project-content">
                  <h3 className="heading-md-bold">{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-status-container">
                  <span className={`project-status ${project.status.toLowerCase()}`}>{project.status}</span>
                </div>
              </div>
            ))}
          </div>
          <br></br>
        </>
      )}

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
