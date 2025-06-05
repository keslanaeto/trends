// src/components/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">EllaTrends</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/dresses">Dresses ▾</a>
          {isDropdownOpen && (
          <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
          <li><Link to="/dresses/casual">Bespoke</Link></li>
          <li><Link to="/dresses/party">Ready-To-Wear</Link></li>
          <li><Link to="/dresses/bridal">Bridal</Link></li>

        </ul>
          )}
        </li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
