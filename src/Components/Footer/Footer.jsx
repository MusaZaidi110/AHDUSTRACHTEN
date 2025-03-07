import React from "react";
import "./Footer.css";

import Logo from "../../assets/Logo/logo white png.png";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import MasterCard from "../../assets/PaymentMethod/MasterCard.png";
import PayPal from "../../assets/PaymentMethod/PayPal.png";
import LCPayment from "../../assets/PaymentMethod/LCPayment.png";
import germanBank from "../../assets/PaymentMethod/GermanBank.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section className="FooterContainer">
      <footer className="footer">
        <div className="col LogoText" style={{width: "28%"}}>
          <div className="logo">
            <Link to={"/"}>
              <img src={Logo} alt="Webstie Logo" width={120} height={80} />
            </Link>
          </div>
          <div className="text">
            {t('herosectionText')}
          </div>
        </div>

        <div className="col contact-info" style={{width: "42%"}}>
          <h4>Contact Info:</h4>
          <ul style={{width: "80%"}}>
            <li>
              <LocationOnIcon />
              Office #02 Acantilado Commercial, 49, Phase 7 Bahria Town,
              Rawalpindi, Islamabad, 46000
            </li>
            <li>
              <LocationOnIcon />
              Leather Village, Head Marala Rd , Malkay Kalan, Sialkot, Punjab
            </li>
            <li>
              <LocalPhoneIcon />
              +92 339 4022 534
            </li>
            <li>
              <EmailIcon />
              usman@ahdustrachtenexport.com
            </li>
            <li>
              <AccessTimeIcon />
              Available 24/7
            </li>
          </ul>
        </div>

        <div className="col" style={{width: "20%"}}>
          <h4>Quick Links:</h4>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/OrderDelivery"}>Order To Delivery</Link></li>
            <li><Link to={"/About"}>About Us</Link></li>
            <li><Link to={"/Product"}>Products</Link></li>
            <li><Link to={"/Contact"}>Contact Us</Link></li>
          </ul>
        </div>

        <div className="col payment-methods" style={{width: "20%"}}>
          <h4>Payment Methods</h4>
          <ul>
            <li>
              <img src={MasterCard} alt="Master Card" width={60} height={40} />
              <p>Master Card</p>
            </li>
            <li>
              <img src={PayPal} alt="Master Card" width={60} height={40} />
              <p>Pay Pal</p>
            </li>
            <li>
              <img src={LCPayment} alt="Master Card" width={60} height={40} />
              <p>LC Payment</p>
            </li>
            <li>
              <img src={germanBank} alt="Master Card" width={60} height={40} />
              <p>German Bank</p>
            </li>
          </ul>
        </div>
      </footer>
      <div className="endText">
        <p>&copy; {t("footerCopyRights")}</p>
      </div>
    </section>
  );
};

export default Footer;
