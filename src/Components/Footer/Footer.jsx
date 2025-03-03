import React from "react";
import "./Footer.css";

import Logo from "../../assets/Logo/logo white png.png";
import { Link } from "react-router-dom";

import MasterCard from "../../assets/PaymentMethod/MasterCard.png";
import PayPal from "../../assets/PaymentMethod/PayPal.png";
import LCPayment from "../../assets/PaymentMethod/LCPayment.png";
import germanBank from "../../assets/PaymentMethod/GermanBank.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();

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
            <h1>{t('footerMenuHeading1')}</h1>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/">
              {t('footerHome')}
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/About">
              {t('footerAbout')}
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/Product">
              {t('footerProduct')}
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/Contact">
              {t('footerContact')}
            </Link>
          </li>
        </ul>

        <ul className="payment-method">
          <li className="payment-method__item">
            <h1>{t('footerPaymentHeader')}</h1>
          </li>

          <div className="PaymentMethodsContainer">
            <li className="payment-method__item">
              <img src={MasterCard} alt="MasterCard Payment Method Icon" width={100} height={60} />
            </li>
            <li className="payment-method__item">
              <img src={PayPal} alt="Paypal Payment Method Icon" width={100} height={50} />
            </li>
          </div>

          <div className="PaymentMethodsContainer">
            <li className="payment-method__item">
              <img src={LCPayment} alt="LCPayment Method Icon" width={100} height={60} />
            </li>
            <div className="payment-method__item">
              <img src={germanBank} alt="German Bank Method Icon" width={100} />
            </div>
          </div>

        </ul>
      </footer>
      <div className="endText">
        <p>&copy; {t('footerCopyRights')}</p>
      </div>
    </section>
  );
};

export default Footer;
