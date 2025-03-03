import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../assets/Logo/logo white png.png";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import "../../../translations/i18n";

const Navbar = () => {
  const { t,i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language); // Default language
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleChange = (event, newLanguage) => {
    if (newLanguage !== null) {
      console.log("Changing language to:", newLanguage);
      setLanguage(newLanguage);
      i18n.changeLanguage(newLanguage); // Change language in i18next
    }
  };

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

        {/* Language Translation for Mobile */}
        <ToggleButtonGroup
          className="mobile"
          value={language}
          exclusive
          onChange={handleChange}
          aria-label="Language"
          sx={{
            // Mobile-only display
            display: { xs: "inline-flex", sm: "none" }, // Shows only on mobile (xs screens)
            // Reduced width
            width: "150px", // Adjust this value as needed
            "& .MuiToggleButtonGroup-grouped": {
              border: "1px solid #ffffff !important",
              color: "#ffffff",
              minWidth: "unset", // Remove default min-width
              padding: "6px 12px", // Adjust padding for smaller size
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              },
            },
          }}
        >
          <ToggleButton
            value="en"
            sx={{
              width: "50%", // Each button takes half the group width
              "&.Mui-selected": {
                backgroundColor: "#ffffff",
                color: "#000000",
                "&:hover": { backgroundColor: "#ffffff" },
              },
            }}
          >
            EN
          </ToggleButton>

          <ToggleButton
            value="nl"
            sx={{
              width: "50%", // Each button takes half the group width
              "&.Mui-selected": {
                backgroundColor: "#ffffff",
                color: "#000000",
                "&:hover": { backgroundColor: "#ffffff" },
              },
            }}
          >
            DE
          </ToggleButton>
        </ToggleButtonGroup>

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
              {t('navbarHome')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/OrderDelivery"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {t('navbarOrderDelivery')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {t('navbarAbout')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Product"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {t('navbarProduct')}
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

        <ToggleButtonGroup
          className="web"
          value={language}
          exclusive
          onChange={handleChange}
          aria-label="Language"
          sx={{
            border: "1px solid #ffffff", // White border
            "& .MuiToggleButtonGroup-grouped": {
              border: "1px solid #ffffff !important", // White border for buttons
              color: "#ffffff", // White text
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.08)", // Slightly darker on hover
              },
            },
          }}
        >
          <ToggleButton
            value="en"
            sx={{
              "&.Mui-selected": {
                backgroundColor: "#ffffff", // White background when selected
                color: "#000000", // Black text when selected
                "&:hover": {
                  backgroundColor: "#ffffff", // Keep white on hover
                },
              },
            }}
          >
            English
          </ToggleButton>

          <ToggleButton
            value="nl"
            sx={{
              "&.Mui-selected": {
                backgroundColor: "#ffffff", // White background when selected
                color: "#000000", // Black text when selected
                "&:hover": {
                  backgroundColor: "#ffffff",
                },
              },
            }}
          >
            German
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </nav>
  );
};

export default Navbar;
