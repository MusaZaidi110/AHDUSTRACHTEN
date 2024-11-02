import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">AHDUSTRACHTEN</Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="navbar-hamburger" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>

        {/* Menu (hidden on mobile) */}
        <ul className={`navbar-menu ${mobileMenuOpen ? "active" : ""}`}>
          <li>
            <NavLink
              exact
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Products"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Gallery"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Gallery
            </NavLink>
          </li>
        </ul>

        {/* Button (visible on web view only) */}
        <div className="navbar-button">
          <Link className="btn">Get an Appointment</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
