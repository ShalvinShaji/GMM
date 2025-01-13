import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-xl m-0 p-0">
      {/* Mobile Menu Toggler */}
      <button
        className={`navbar-toggler mobile-menu-btn ${
          isMobileMenuOpen ? "active" : ""
        }`}
        type="button"
        onClick={handleMobileMenuToggle}
        aria-label="Toggle navigation"
      >
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`collapse navbar-collapse sub-menu-bar ${
          isMobileMenuOpen ? "show" : ""
        }`}
        id="navbarSupportedContent"
      >
        <ul id="nav" className="navbar-nav">
          <li className="nav-item">
            <Link to="/" onClick={handleMobileLinkClick}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link "
              id="navbarDropdown"
              role="button"
              aria-expanded="false"
            >
              About
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li className="nav-item">
                <Link
                  to="/reverend-george-mathen"
                  className="dropdown-item"
                  onClick={handleMobileLinkClick}
                >
                  Rev. George Mathen
                </Link>
              </li>
              <li className="nav-item divider"></li>
              <li className="nav-item">
                <Link
                  to="/our-vision-mission"
                  className="dropdown-item"
                  onClick={handleMobileLinkClick}
                >
                  Vision & Mission
                </Link>
              </li>
              <li className="nav-item divider"></li>
              <li className="nav-item">
                <Link
                  to="/governing-board"
                  className="dropdown-item"
                  onClick={handleMobileLinkClick}
                >
                  Governing Board
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/departments" onClick={handleMobileLinkClick}>
              Departments
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/facilities" onClick={handleMobileLinkClick}>
              Facilities
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/doctors" onClick={handleMobileLinkClick}>
              Doctors
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/careers" onClick={handleMobileLinkClick}>
              Careers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" onClick={handleMobileLinkClick}>
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" onClick={handleMobileLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
