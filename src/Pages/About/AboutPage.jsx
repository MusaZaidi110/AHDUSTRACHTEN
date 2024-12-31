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

const AboutPage = () => {
  return (
    <>
      <section className="About">
        <div className="aboutContent">
          <div className="title">About US</div>
          <div className="mainTitle">Our INTRODUCTION </div>
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
                    <span>Handcrafted Excellence:</span>
                  </div>
                  We specialize in crafting premium leather products by hand,
                  ensuring every item meets the highest standards of quality and
                  detail.
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
                  Using only genuine, 100% pure leather, our products embody
                  durability and timeless style, offering long-lasting value to
                  our customers.
                </li>
                <li>
                  <div className="headingwithIcon">
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <FlagIcon
                        style={{ fontSize: "1.5rem", color: "#bab86c" }}
                      />
                    </ListItemIcon>
                    <span>Proudly Made in Pakistan:</span>
                  </div>
                  Rooted in Pakistan’s rich heritage of craftsmanship, our
                  products reflect our country’s dedication to artistry and
                  skill.
                </li>
                <li>
                  <div className="headingwithIcon">
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <PublicIcon
                        style={{ fontSize: "1.5rem", color: "#bab86c" }}
                      />
                    </ListItemIcon>
                    <span>Global Export Reach:</span>
                  </div>
                  Trusted worldwide, we proudly export our leather products
                  globally, connecting clients with authentic, high-quality
                  leather goods.
                </li>
                <li>
                  <div className="headingwithIcon">
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <GradeIcon
                        style={{ fontSize: "1.5rem", color: "#bab86c" }}
                      />
                    </ListItemIcon>
                    <span>Quality-Centric Approach:</span>
                  </div>
                  Our commitment to excellence has made us renowned, as we
                  prioritize quality in every stitch, seam, and finish.
                </li>
              </ul>
            </div>
            <div className="right">
              <img src={LogoImg} alt="RightMain Image" />
            </div>
          </div>

          <div className="workContent">
            <div className="title">Our Strategy</div>
            <div className="mainTitle">Our Work Process </div>
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
                      <span>Personalized Deal-Making</span>
                    </div>
                    We begin by engaging with our customers to close a deal that
                    aligns with their vision—whether it’s choosing from our
                    curated selection of high-quality materials or working with
                    custom options specified by the client.
                  </li>
                  <li>
                    <div className="headingwithIcon">
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <BuildIcon
                          style={{ fontSize: "1.5rem", color: "#bab86c" }}
                        />
                      </ListItemIcon>
                      <span>Tailored Production Process</span>
                    </div>
                    Once the details are finalized, our skilled artisans start
                    crafting the order with meticulous attention to detail,
                    ensuring each piece is made to perfection.
                  </li>
                  <li>
                    <div className="headingwithIcon">
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <UpdateIcon
                          style={{ fontSize: "1.5rem", color: "#bab86c" }}
                        />
                      </ListItemIcon>
                      <span>Ongoing Progress Updates</span>
                    </div>
                    Throughout the production process, we keep our customers
                    informed, providing regular updates so they can follow each
                    step and witness the care and craftsmanship that goes into
                    their products.
                  </li>
                  <li>
                    <div className="headingwithIcon">
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <LocalShippingIcon
                          style={{ fontSize: "1.5rem", color: "#bab86c" }}
                        />
                      </ListItemIcon>
                      <span>Secure and Reliable Delivery</span>
                    </div>
                    After completion, we package the products using secure,
                    industry-leading methods, ensuring safe and reliable
                    delivery, no matter where in the world our customers are
                    located.
                  </li>
                  <li>
                    <div className="headingwithIcon">
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <GppGoodIcon
                          style={{ fontSize: "1.5rem", color: "#bab86c" }}
                        />
                      </ListItemIcon>
                      <span>Commitment to Quality and Timeliness</span>
                    </div>
                    Our primary focus remains on maintaining the highest quality
                    standards while meeting the committed delivery
                    timeframe—delivering an experience as exceptional as the
                    products themselves.
                  </li>
                </ul>
                <a href="#" className="btn bigBtn">
                  Let's connect with us
                </a>
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
