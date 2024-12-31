import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import MainVideo from "../../assets/Machine/HeroBackVideo.mp4";
import img1 from "../../assets/Product/Product-1.webp";
import img2 from "../../assets/Product/Product-2.webp";
import img3 from "../../assets/Product/Product-3.webp";
import img4 from "../../assets/Product/Product-4.webp";
import img5 from "../../assets/Product/Product-5.webp";
import img6 from "../../assets/Product/Product-6.webp";
import img7 from "../../assets/Product/Product-7.webp";
import img8 from "../../assets/Product/Product-8.webp";
import img9 from "../../assets/Product/Product-9.webp";
import img10 from "../../assets/Product/Product-10.webp";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-video">
        <video src={MainVideo} type="video/webm" autoPlay loop muted></video>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Beautiful analytics to grow smarter</h1>
        <div className="roundImg">
          <div className="text">
            Self-serve analytics to boost user conversion, engagement, and
            retention. Trusted by 4,000+ startups.
          </div>
          <div className="btnroundImg">
            <div className="button">
              <Link className="btn heroButton">start now</Link>
            </div>
            <div className="imgs">
              <ul>
                <li>
                  <img src={img1} alt="Image1" />
                </li>
                <li>
                  <img src={img2} alt="Image2" />
                </li>
                <li>
                  <img src={img3} alt="Image3" />
                </li>
                <li>
                  <img src={img4} alt="Image4" />
                </li>
                <li>
                  <img src={img5} alt="Image5" />
                </li>
                <li>
                  <img src={img6} alt="Image6" />
                </li>
                <li>
                  <img src={img7} alt="Image7" />
                </li>
                <li>
                  <img src={img8} alt="Image8" />
                </li>
                <li>
                  <img src={img9} alt="Image9" />
                </li>
                <li>
                  <img src={img10} alt="Image10" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
