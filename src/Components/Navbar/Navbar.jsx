import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../assets/Logo/logo white png.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={Logo} alt="Logo Img" />
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="navbar-hamburger" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>

        {/* Menu (hidden on mobile) */}
        <ul className={`navbar-menu ${mobileMenuOpen ? "active" : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/OrderDelivery" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Order To Delivery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Product"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Product
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
        </ul>

        {/* Button (visible on web view only) */}
        <div className="navbar-button">
          <Link className="btn" to={"/Contact"}>
            Talk To Us About Your Order
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
