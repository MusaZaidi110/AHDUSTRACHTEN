import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // Import the styles for the Footer
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        {/* Column 1: Logo */}
        <div className="footer-column">
          <div className="footer-logo">
            <Link to="/">MyLogo</Link>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer-column" style={{ alignItems: "flex-end" }}>
          <nav className="footer-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Products">Products</Link>
              </li>
              <li>
                <Link to="/About-Us">About Us</Link>
              </li>
              <li>
                <Link to="/Contact-Us">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Footer Bottom: Copyrights */}
      <div className="footer-bottom">
        <p>&copy; 2024 MyCompany. All rights reserved.</p>

        <div className="footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
