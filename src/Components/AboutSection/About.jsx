import React from "react";
import { useTranslation } from 'react-i18next';
import '../../../translations/i18n'; // Import i18n configuration
import "./About.css";
import product1 from "../../assets/Product/Product-1.webp";
import product2 from "../../assets/Product/ProductItem.jpeg";
import product3 from "../../assets/Product/Product-3.webp";
import product4 from "../../assets/Product/Product-4.webp";
import product5 from "../../assets/Product/Product-5.webp";
import product6 from "../../assets/Product/Product-6.webp";
import product7 from "../../assets/Product/Product-7.webp";
import product8 from "../../assets/Product/Product-8.webp";
import product9 from "../../assets/Product/Product-9.webp";
import product10 from "../../assets/Product/Product-10.webp";
import MockImg from "../../assets/Mobile_App_Screen_Mockup.png";

import HandshakeIcon from "@mui/icons-material/Handshake";
import BuildIcon from "@mui/icons-material/Build";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GppGoodIcon from "@mui/icons-material/GppGood";

const About = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const images = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
  ];

  return (
    <>
      <section className="about">
        <div className="title">{t('aboutTitle')}</div>
        <div className="mainTitle">{t('aboutMainTitle')}</div>
        <div className="borderLine">
          <div className="upline"></div>
          <div className="downline"></div>
        </div>

        <div className="contentSection">
          <div className="contentList">
            <ul className="features-list">
              <li>
                <div className="headingIcon">
                  <HandshakeIcon
                    style={{
                      fontSize: "20px",
                      color: "#bab86c",
                      marginTop: "5px",
                    }}
                  />
                  {t('aboutFirstFeatureList')}
                </div>
              </li>

              <li>
                <div className="headingIcon">
                  <BuildIcon
                    style={{
                      fontSize: "20px",
                      color: "#bab86c",
                      marginTop: "5px",
                    }}
                  />
                  {t('aboutSecondFeatureList')}
                </div>
              </li>

              <li>
                <div className="headingIcon">
                  <AccessTimeFilledIcon
                    style={{
                      fontSize: "20px",
                      color: "#bab86c",
                      marginTop: "5px",
                    }}
                  />
                  {t('aboutThirdFeatureList')}
                </div>
              </li>

              <li>
                <div className="headingIcon">
                  <LocalShippingIcon
                    style={{
                      fontSize: "20px",
                      color: "#bab86c",
                      marginTop: "5px",
                    }}
                  />
                  {t('aboutFourthFeatureList')}
                </div>
              </li>

              <li>
                <div className="headingIcon">
                  <GppGoodIcon
                    style={{
                      fontSize: "20px",
                      color: "#bab86c",
                      marginTop: "5px",
                    }}
                  />
                  {t('aboutFifthFeatureList')}
                </div>
              </li>
            </ul>
          </div>

          <div className="mockImg">
            <img src={MockImg} alt="MockImg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
