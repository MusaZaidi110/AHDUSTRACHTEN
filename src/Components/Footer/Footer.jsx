import React from "react";
import "./Footer.css";

import Logo from "../../assets/Logo/logo white png.png";
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
        <div className="Logo">
          <div className="logoImg">
            <img src={Logo} alt="Logo Image" />
          </div>
        </div>

        <ul className="menu">
          <li className="menu__item">
            <h1>Website Links</h1>
          </li>
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

        <ul className="social-icon">
          <li className="social-icon__item">
            <h1>Social Links</h1>
          </li>
          <li className="social-icon__item">
            <Link className="social-icon__link" to={`mailto:${email}`}>
              <MailIcon />
              <small>Email</small>
            </Link>
          </li>
          <li className="social-icon__item">
            <Link className="social-icon__link" to="#">
              <FacebookIcon />
              <small>Facebook</small>
            </Link>
          </li>
          <li className="social-icon__item">
            <Link className="social-icon__link" to="#">
              <InstagramIcon />
              <small>Instagram</small>
            </Link>
          </li>
          <li className="social-icon__item">
            <Link className="social-icon__link" to="#">
              <LinkedInIcon />
              <small>LinkedIn</small>
            </Link>
          </li>
        </ul>
      </footer>
      <div className="endText">
        <p>&copy;2024-25 Ahdus Trachten | All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
