import React from 'react';
import '../styles/Papers.css';
import { papers, memberAuthors, Paper } from '../data/papersData';

const PaperCard = ({ paper }: { paper: Paper }) => {
  const primary = paper.links[0];
  return (
    <article className={`paper-item${paper.award ? ' paper-item-award' : ''}`}>
      <a
        href={primary.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`paper-preview paper-preview-${paper.previewKind}`}
        aria-label={`${paper.title} — ${primary.label}`}
      >
        <img src={paper.preview} alt={`First page of ${paper.title}`} loading="lazy" />
      </a>

      <div className="paper-body">
        <p className="paper-venue">
          <span className="paper-venue-name">{paper.venue}</span>
          <span className="paper-venue-year">{paper.year}</span>
        </p>
        {paper.award && (
          <p className="paper-award">
            <span className="paper-award-trophy" aria-hidden="true">🏆</span>
            {paper.award}
          </p>
        )}
        <h3 className="paper-title">
          <a href={primary.url} target="_blank" rel="noopener noreferrer">
            {paper.title}
          </a>
        </h3>
        <p className="paper-authors">
          {paper.authors.split(', ').map((author, i) => (
            <React.Fragment key={author}>
              {i > 0 && ', '}
              {memberAuthors.has(author) ? (
                <strong className="paper-author-member">{author}</strong>
              ) : (
                author
              )}
            </React.Fragment>
          ))}
        </p>
        <p className="paper-abstract">{paper.abstract}</p>
        <ul className="paper-links">
          {paper.links.map((link) => (
            <li key={link.url}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const Papers: React.FC = () => (
  <div className="layout-xl">
    <h1 className="heading-title">Papers</h1>
    <p className="text-lead">
      Research published by SIGRobotics members.
    </p>

    <section>
      <div className="paper-list">
        {papers.map((paper) => (
          <PaperCard key={paper.title} paper={paper} />
        ))}
      </div>
    </section>

    <p className="paper-legend">
      <strong className="paper-author-member">Bold</strong> names are SIGRobotics members.
    </p>
  </div>
);

export default Papers;
