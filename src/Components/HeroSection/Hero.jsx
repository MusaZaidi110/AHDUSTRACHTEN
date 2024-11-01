import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import MainVideo from "../../assets/Machine/Machine-Main.webm";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-video">
        <video src={MainVideo} type="video/webm" autoPlay loop muted></video>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Beautiful analytics to grow smarter</h1>
        <div className="roundImg">
          <div className="imgs">
            <ul>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <img src="" alt="" />
              </li>
            </ul>
          </div>
          <div className="text">
            Powerful, self-serve product and growth analytics to help you
            convert, engage and retain more users. <br />
            Trusted By over 4,000 startups.
          </div>
          <div className="button">
            <Link className="btn heroButton">start now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
