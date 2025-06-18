import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleDropdownClick = () => {
    if (window.innerWidth <= 768) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">EllaTrends</div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <span className="close-icon">&times;</span>
        ) : (
          <>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </>
        )}
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
        <li>
          <Link to="/" onClick={closeMobileMenu}>Home</Link>
        </li>

        <li
          className={`dropdown ${isDropdownOpen ? 'open' : ''}`}
          onClick={handleDropdownClick}
          onMouseEnter={() => window.innerWidth > 768 && setIsDropdownOpen(true)}
          onMouseLeave={() => window.innerWidth > 768 && setIsDropdownOpen(false)}
        >
          <span className="dropdown-toggle">Dresses ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/Bespoke" onClick={closeMobileMenu}>Bespoke</Link></li>
            <li><Link to="/Readytowear" onClick={closeMobileMenu}>Ready-To-Wear</Link></li>
            <li><Link to="/Bridal" onClick={closeMobileMenu}>Bridal</Link></li>
          </ul>
        </li>

        <li>
          <Link to="/about" onClick={closeMobileMenu}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
