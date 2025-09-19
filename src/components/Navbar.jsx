import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className="navbar">
      {/* Desktop avatar */}
      <div className="nav-avatar">
        <NavLink to="/">
          <img src="/images/mini-profilepic.png" alt="miniProfile" />
        </NavLink>
      </div>

      {/* Hamburger knapp */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Desktop nav-links */}
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>HOME</NavLink>
          </li>
          <li>
            <NavLink to="/resume" className={({isActive}) => isActive ? 'active' : ''}>RESUME</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'active' : ''}>PROJECTS</NavLink>
          </li>
        </ul>
      </div>

      {/* Modal meny för mobil */}
      {menuOpen && (
        <div className="menu-modal" onClick={toggleMenu}>
          <div className="menu-content" onClick={e => e.stopPropagation()}>
            <ul>
              <li>
                <NavLink to="/" onClick={() => setMenuOpen(false)}>HOME</NavLink>
              </li>
              <li>
                <NavLink to="/resume" onClick={() => setMenuOpen(false)}>RESUME</NavLink>
              </li>
              <li>
                <NavLink to="/projects" onClick={() => setMenuOpen(false)}>PROJECTS</NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
