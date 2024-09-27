import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // State for submenu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle main menu
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen); // Toggle submenu
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>MyApp</h2>
      </div>

      {/* Hamburger Menu for Mobile View */}
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li className="submenu-container">
          <div className="submenu-title" onClick={toggleSubmenu}>
            Services <i className="fas fa-caret-down"></i>
          </div>
          {/* Submenu */}
          <ul className={`submenu ${isSubmenuOpen ? "open" : ""}`}>
            <li>
              <a href="/web-development">Web Development</a>
            </li>
            <li>
              <a href="/design">Design</a>
            </li>
            <li>
              <a href="/seo">SEO</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
