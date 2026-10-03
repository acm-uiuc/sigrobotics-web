import React, { useEffect, useState } from 'react';
import '../styles/GitHubStars.css';

/** Hand-drawn 5-point star: uneven arms, edges bowed like a pen stroke. */
const STAR_PATH =
  'M 11.66 3.03 Q 12.68 5.96 14.19 8.67 Q 17.48 8.59 20.75 9.01 Q 17.99 10.92 ' +
  '15.48 13.13 Q 16.41 16.0 17.11 18.92 Q 14.53 17.46 12.16 15.66 Q 9.39 17.6 ' +
  '6.39 19.17 Q 7.35 16.17 8.52 13.25 Q 6.0 10.83 3.25 8.67 Q 6.45 8.58 9.65 ' +
  '8.84 Q 10.69 5.95 11.66 3.03 Z';

/** "SIGRobotics-UIUC/LeKiwi" out of any github.com URL, or null. */
export function parseRepo(url: string): string | null {
  const match = /^https?:\/\/(?:www\.)?github\.com\/([^/?#]+)\/([^/?#]+)/.exec(url);
  if (!match) return null;
  return `${match[1]}/${match[2].replace(/\.git$/, '')}`;
}

const CACHE_PREFIX = 'gh-stars:';
const CACHE_TTL = 60 * 60 * 1000; // GitHub allows 60 unauthenticated calls/hour.

function readCache(repo: string): number | null {
  try {
    const raw = sessionStorage.getItem(CACHE_PREFIX + repo);
    if (!raw) return null;
    const { count, at } = JSON.parse(raw);
    return Date.now() - at < CACHE_TTL ? count : null;
  } catch {
    return null;
  }
}

function writeCache(repo: string, count: number) {
  try {
    sessionStorage.setItem(
      CACHE_PREFIX + repo,
      JSON.stringify({ count, at: Date.now() })
    );
  } catch {
    /* private browsing, quota — the button works fine without the cache */
  }
}

const format = (n: number) =>
  n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k` : `${n}`;

const GitHubStars: React.FC<{ repo: string }> = ({ repo }) => {
  const [count, setCount] = useState<number | null>(() => readCache(repo));

  useEffect(() => {
    if (count !== null) return;
    let cancelled = false;
    fetch(`https://api.github.com/repos/${repo}`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        if (cancelled || typeof data?.stargazers_count !== 'number') return;
        writeCache(repo, data.stargazers_count);
        setCount(data.stargazers_count);
      })
      .catch(() => {
        /* Rate-limited or offline: fall back to a plain Star button. */
      });
    return () => {
      cancelled = true;
    };
  }, [repo, count]);

  return (
    <a
      className="gh-star"
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        count === null
          ? `Star ${repo} on GitHub`
          : `Star ${repo} on GitHub — ${count} stars`
      }
    >
      <span className="gh-star-main">
        <svg className="gh-star-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d={STAR_PATH} />
        </svg>
        Star
      </span>
      {count !== null && <span className="gh-star-count">{format(count)}</span>}
    </a>
  );
};

export default GitHubStars;
