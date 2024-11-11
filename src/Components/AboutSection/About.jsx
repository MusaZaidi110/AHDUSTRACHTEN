import React from "react";
import "./About.css";
import product1 from "../../assets/Product/Product-1.webp";
import product2 from "../../assets/Product/Product-2.webp";
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
        <div className="title">About Us</div>
        <div className="mainTitle">Who Are We</div>
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
                  Welcome to AhdusTrachten! Based in Pakistan, we specialize in
                  exquisite, handmade leather products that reflect our rich
                  heritage and commitment to quality.
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
                  Each piece tells a story crafted by our skilled artisans using
                  100% pure leather, ensuring durability and timeless style in
                  every product.
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
                  Our customer-centric approach fosters personalized
                  relationships, guiding you through the design and production
                  process to bring your vision to life.
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
                  We prioritize timely delivery and secure shipping, ensuring a
                  seamless experience from start to finish.
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
                  Join us in celebrating the beauty of handmade leather
                  products—explore our collection and find the perfect blend of
                  tradition and modern elegance.
                </div>
              </li>
            </ul>
          </div>
          {/* <div className="rotator">
            <div className="banner">
              <div className="slider" style={{ "--quantity": images.length }}>
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="item"
                    style={{ "--position": index + 1 }}
                  >
                    <img src={src} alt={`Product ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          <div className="mockImg">
            <img src={MockImg} alt="MockImg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
