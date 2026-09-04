import React from 'react';
import '../styles/Projects.css';
import { projects, Project } from '../data/projectsData';
import GitHubStars, { parseRepo } from '../components/GitHubStars';

const StatusChip = ({ status }: { status: Project['status'] }) => (
  <span className={`project-status ${status.toLowerCase()}`}>{status}</span>
);

/** Optionally wrap in an outbound link — several projects have no URL yet. */
const MaybeLink = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) =>
  href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  );

const ProjectCard = ({ project }: { project: Project }) => (
  <div className={`project-item${project.award ? ' project-item-award' : ''}`}>
    {project.award && (
      <p className="project-award-banner">
        <span className="project-award-trophy" aria-hidden="true">🏆</span>
        <span className="project-award-place">{project.award.place}</span>
      </p>
    )}
    <div className="project-image-container">
      <MaybeLink href={project.link} className="project-image-link">
        <img src={project.image} alt={project.title} className="project-image" />
      </MaybeLink>
    </div>
    <div className="project-content">
      <h3 className="heading-md-bold">{project.title}</h3>
      {project.award && (
        <p className="project-award-event">
          {project.award.event}
          <span className="project-award-hosts">{project.award.hosts}</span>
        </p>
      )}
      <p>{project.description}</p>
    </div>
    <div className="project-status-container">
      <StatusChip status={project.status} />
    </div>
  </div>
);

const FeaturedProject = ({ project }: { project: Project }) => {
  const repo = parseRepo(project.link);
  return (
  <section className="project-feature">
    <MaybeLink href={project.link} className="project-feature-media">
      <img src={project.image} alt={project.title} />
    </MaybeLink>
    <div className="project-feature-body">
      <p className="label-eyebrow">Featured project</p>
      <h2 className="heading-subtitle-bold">{project.title}</h2>
      <p className="project-feature-text">{project.description}</p>
      <div className="project-feature-meta">
        <StatusChip status={project.status} />
      </div>
      {project.link && (
        <div className="action-row">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            View on GitHub
          </a>
          {repo && <GitHubStars repo={repo} />}
        </div>
      )}
    </div>
  </section>
  );
};

const Projects: React.FC = () => {
  const featured = projects.find((project) => project.featured);
  // The featured project leads the page, so keep it out of the grids below.
  const rest = projects.filter((project) => !project.featured);
  const ongoing = rest.filter((project) => project.status === 'Ongoing');
  const completed = rest.filter((project) => project.status === 'Completed');

  return (
    <div className="layout-xl">
      <h1 className="heading-title">Our Projects</h1>
      <p className="text-lead">Explore our novel robotics projects! We like building!</p>

      {featured && <FeaturedProject project={featured} />}

      {completed.length > 0 && (
        <section>
          <h2 className="heading-subtitle-bold">Completed</h2>
          <div className="project-list">
            {completed.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}

      {ongoing.length > 0 && (
        <section>
          <h2 className="heading-subtitle-bold">Ongoing</h2>
          <div className="project-list">
            {ongoing.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}


      <div className="layout-box-white">
        <h2 className="heading-subtitle-bold">Have a Project Idea?</h2>
        <p>We're always looking for new and exciting projects. If you have an idea, we'd love to hear about it!</p>
        <div className="action-row">
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
