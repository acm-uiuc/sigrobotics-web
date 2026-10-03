import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo/logo.png';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/papers', label: 'Papers' },
  { to: '/meetings', label: 'Meetings' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/contact', label: 'Contact' },
];

interface Indicator {
  left: number;
  top: number;
  width: number;
  height: number;
  visible: boolean;
}

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [indicator, setIndicator] = useState<Indicator>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    visible: false,
  });
  // Suppresses the glide on the very first placement, so the pill doesn't
  // slide in from the left edge on load.
  const [ready, setReady] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const { pathname } = useLocation();

  /** Park the pill over a given link. */
  const moveTo = useCallback((target: HTMLElement | null) => {
    const menu = menuRef.current;
    if (!menu || !target) {
      setIndicator((prev) => ({ ...prev, visible: false }));
      return;
    }
    const menuBox = menu.getBoundingClientRect();
    const targetBox = target.getBoundingClientRect();
    // Measure both axes off the link's own box so the panel sits exactly on
    // it, rather than stretching to the height of the whole list.
    setIndicator({
      left: targetBox.left - menuBox.left,
      top: targetBox.top - menuBox.top,
      width: targetBox.width,
      height: targetBox.height,
      visible: true,
    });
  }, []);

  /** Return the pill to whichever link matches the current route. */
  const moveToActive = useCallback(() => {
    const active = menuRef.current?.querySelector<HTMLElement>('.navbar-link.active');
    moveTo(active ?? null);
  }, [moveTo]);

  useEffect(() => {
    moveToActive();
    // Webfonts land after first paint and change the link widths, so
    // re-measure once they're in.
    document.fonts?.ready.then(moveToActive).catch(() => {});
    requestAnimationFrame(() => setReady(true));
  }, [pathname, moveToActive]);

  useEffect(() => {
    window.addEventListener('resize', moveToActive);
    return () => window.removeEventListener('resize', moveToActive);
  }, [moveToActive]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="SIGRobotics Logo" className="navbar-logo-image" />
          <span className="navbar-logo-text">SIGRobotics</span>
        </Link>

        <span className="navbar-divider" aria-hidden="true" />

        <button
          type="button"
          className="hamburger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </button>

        <ul
          ref={menuRef}
          className={`navbar-menu ${menuOpen ? 'active' : ''}`}
          onMouseLeave={moveToActive}
        >
          <li
            className={`nav-indicator ${ready ? 'ready' : ''}`}
            aria-hidden="true"
            style={{
              transform: `translate(${indicator.left}px, ${indicator.top}px)`,
              width: `${indicator.width}px`,
              height: `${indicator.height}px`,
              opacity: indicator.visible ? 1 : 0,
            }}
          />
          {links.map(({ to, label }) => (
            <li className="navbar-item" key={to}>
              <Link
                to={to}
                className={`navbar-link ${pathname === to ? 'active' : ''}`}
                onMouseEnter={(e) => moveTo(e.currentTarget)}
                onFocus={(e) => moveTo(e.currentTarget)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
