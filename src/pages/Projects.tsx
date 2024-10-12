import React from 'react';
import '../styles/Projects.css';

interface Project {
  title: string;
  description: string;
  image: string;
  status: 'Ongoing' | 'Completed';
}

const projects: Project[] = [
  {
    title: "Autonomous Maze Solver",
    description: "A robot that can navigate and solve complex mazes using AI algorithms.",
    image: "/api/placeholder/300/200",
    status: "Ongoing"
  },
  {
    title: "Robotic Arm for Precision Assembly",
    description: "Development of a robotic arm capable of assembling small electronic components.",
    image: "/api/placeholder/300/200",
    status: "Completed"
  },
  {
    title: "Drone Swarm Coordination",
    description: "Creating algorithms for coordinating multiple drones for search and rescue operations.",
    image: "/api/placeholder/300/200",
    status: "Ongoing"
  }
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <div className="projects">
      <h1>Our Projects</h1>
      <p className="projects-intro">Explore the cutting-edge robotics projects our club members are working on:</p>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className={`project-status ${project.status.toLowerCase()}`}>{project.status}</span>
          </div>
        ))}
      </div>
      <section className="join-project">
        <h2>Have a Project Idea?</h2>
        <p>We're always looking for new and exciting projects. If you have an idea, we'd love to hear about it!</p>
        <button className="propose-button">Propose a Project</button>
      </section>
    </div>
  );
};

export default Projects;