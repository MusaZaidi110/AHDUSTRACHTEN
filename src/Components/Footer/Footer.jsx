import React from "react";
import "./Footer.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Footer = () => {
  const email = "email@example.com";

  return (
    <section className="FooterContainer">
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon__item">
            <Link className="social-icon__link" to={`mailto:${email}`}>
              <MailIcon />
            </Link>
          </li>
          <li className="social-icon__item">
            <Link className="social-icon__link" to="#">
              <FacebookIcon />
            </Link>
          </li>
          <li className="social-icon__item">
            <Link className="social-icon__link" to="#">
              <InstagramIcon />
            </Link>
          </li>
          <li className="social-icon__item">
            <Link className="social-icon__link" to="#">
              <LinkedInIcon />
            </Link>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <Link className="menu__link" to="/">
              Home
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/About">
              About
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/Product">
              Product
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
        <p>&copy;2024-25 Ahdus Trachten | All Rights Reserved</p>
      </footer>
    </section>
  );
};

export default Footer;
