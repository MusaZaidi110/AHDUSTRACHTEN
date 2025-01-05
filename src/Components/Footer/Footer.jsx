import React from "react";
import "./Footer.css";

import Logo from "../../assets/Logo/logo white png.png";
import { Link } from "react-router-dom";

import ApplePay from "../../assets/PaymentMethod/ApplePay.png";
import GPay from "../../assets/PaymentMethod/GPay.png";
import MasterCard from "../../assets/PaymentMethod/MasterCard.png";
import PayPal from "../../assets/PaymentMethod/PayPal.png";
import Stripe from "../../assets/PaymentMethod/Stripe.png";

const Footer = () => {
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

        <ul className="payment-method">
          <li className="payment-method__item">
            <h1>Payment Methods</h1>
          </li>
          <div className="PaymentMethodsContainer">
            <li className="payment-method__item">
              <img src={ApplePay} alt="Apple Payment Method Icon" width={100} height={60} />
            </li>
            <li className="payment-method__item">
              <img src={GPay} alt="Google Payment Method Icon" width={100} height={60} />
            </li>
          </div>

          <div className="PaymentMethodsContainer">
            <li className="payment-method__item">
              <img src={MasterCard} alt="MasterCard Payment Method Icon" width={100} height={60} />
            </li>
            <li className="payment-method__item">
              <img src={Stripe} alt="Stripe Payment Method Icon" width={100} height={60} />
            </li>
          </div>
          
          <div className="PaymentMethodsContainer">
            
          <img src={PayPal} alt="Paypal Payment Method Icon" width={100} height={50} />
          </div>
        </ul>
      </footer>
      <div className="endText">
        <p>&copy;2025-26 Ahdus Trachten | All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
