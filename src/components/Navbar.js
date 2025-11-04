import React, { useState } from 'react';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = ['home','about','skills','projects','education','contact'];

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo">Sagar Roy</div>
        
        {/* Mobile menu button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation links */}
        <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map(item => (
            <li key={item}>
              <Link 
                to={item} 
                smooth={true} 
                duration={500} 
                spy={true} 
                offset={-70} 
                className="nav-link"
                onClick={closeMenu}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
