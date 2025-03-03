import React from "react";
import "./About.css";
import LogoImg from "../../assets/Logo/logo white png.png";
import menProduct from "../../assets/Product/Product-5.webp";
import ListItemIcon from "@mui/material/ListItemIcon";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import VerifiedIcon from "@mui/icons-material/Verified";
import FlagIcon from "@mui/icons-material/Flag";
import PublicIcon from "@mui/icons-material/Public";
import GradeIcon from "@mui/icons-material/Grade";
import HandshakeIcon from "@mui/icons-material/Handshake";
import BuildIcon from "@mui/icons-material/Build";
import UpdateIcon from "@mui/icons-material/Update";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import GppGoodIcon from "@mui/icons-material/GppGood";
import WhyUsImages from "../../Components/WhyUsImages/WhyUsImages.jsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="About">
        <div className="aboutContent">
          <div className="title">{t("aboutTitle")}</div>
          <div className="mainTitle">{t("aboutMainTitle")}</div>
          <div className="borderLine">
            <div className="upline"></div>
            <div className="downline"></div>
          </div>

          <div className="content">
            <div className="left">
              <ul>
                <li>
                  <div className="headingwithIcon">
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <PrecisionManufacturingIcon
                        style={{ fontSize: "1.5rem", color: "#bab86c" }}
                      />
                    </ListItemIcon>
                    <span>{t("introductionHeading1")}</span>
                  </div>
                  {t("introductionContent1")}
                </li>
                <li>
                  <div className="headingwithIcon">
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <VerifiedIcon
                        style={{ fontSize: "1.5rem", color: "#bab86c" }}
                      />
                    </ListItemIcon>
                    <span>100% Pure Leather:</span>
                  </div>
                  {t("introductionContent2")}
                </li>
                <li>
                  <div className="headingwithIcon">
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <FlagIcon
                        style={{ fontSize: "1.5rem", color: "#bab86c" }}
                      />
                    </ListItemIcon>
                    <span>{t("introductionHeading3")}</span>
                  </div>
                  {t("introductionContent3")}
                </li>
                <li>
                  <div className="headingwithIcon">
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <PublicIcon
                        style={{ fontSize: "1.5rem", color: "#bab86c" }}
                      />
                    </ListItemIcon>
                    <span>{t("introductionHeading4")}</span>
                  </div>
                  {t("introductionContent4")}
                </li>
                <li>
                  <div className="headingwithIcon">
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <GradeIcon
                        style={{ fontSize: "1.5rem", color: "#bab86c" }}
                      />
                    </ListItemIcon>
                    <span>{t("introductionHeading5")}</span>
                  </div>
                  {t("introductionContent5")}
                </li>
              </ul>
            </div>
            <div className="right">
              <img src={LogoImg} alt="RightMain Image" />
            </div>
          </div>

          <div className="workContent">
            <div className="title">{t("workTitle")}</div>
            <div className="mainTitle">{t("workMainTitle")}</div>
            <div className="borderLine">
              <div className="upline"></div>
              <div className="downline"></div>
            </div>

            <div className="content">
              <div className="left">
                <img src={menProduct} alt="Men Image " />
              </div>
              <div className="right">
                <ul>
                  <li>
                    <div className="headingwithIcon">
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <HandshakeIcon
                          style={{ fontSize: "1.5rem", color: "#bab86c" }}
                        />
                      </ListItemIcon>
                      <span>{t("workHeading1")}</span>
                    </div>
                    {t("workContent1")}
                  </li>
                  <li>
                    <div className="headingwithIcon">
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <BuildIcon
                          style={{ fontSize: "1.5rem", color: "#bab86c" }}
                        />
                      </ListItemIcon>
                      <span>{t("workHeading2")}</span>
                    </div>
                    {t("workContent2")}
                  </li>
                  <li>
                    <div className="headingwithIcon">
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <UpdateIcon
                          style={{ fontSize: "1.5rem", color: "#bab86c" }}
                        />
                      </ListItemIcon>
                      <span>{t("workHeading3")}</span>
                    </div>
                    {t("workContent3")}
                  </li>
                  <li>
                    <div className="headingwithIcon">
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <LocalShippingIcon
                          style={{ fontSize: "1.5rem", color: "#bab86c" }}
                        />
                      </ListItemIcon>
                      <span>{t('workHeading4')}</span>
                    </div>
                    {t('workContent4')}
                  </li>
                  <li>
                    <div className="headingwithIcon">
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <GppGoodIcon
                          style={{ fontSize: "1.5rem", color: "#bab86c" }}
                        />
                      </ListItemIcon>
                      <span>{t('workHeading5')}</span>
                    </div>
                    {t('workContent5')}
                  </li>
                </ul>
                <Link href="/Contact" className="btn bigBtn">
                  {t('workContactBtn')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyUsImages />
    </>
  );
};

export default AboutPage;
