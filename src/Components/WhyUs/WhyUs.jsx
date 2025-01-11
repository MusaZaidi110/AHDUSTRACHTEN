import React from "react";
import "./WhyUs.css";
import { Link } from "react-router-dom";

const WhyUs = () => {
  return (
    <>
      <section className="whyus">
        <div className="title">Benefits</div>
        <div className="mainTitle">Why Us?</div>
        <div className="borderLine">
          <div className="upline"></div>
          <div className="downline"></div>
        </div>

        <div className="cards">
          <div className="card">
            <p>Proper Sampling Before Production to Satisfy Customer.</p>
          </div>

          <div className="card">
            <p>Every Single Piece is Quality-Controlled.
              Three Quality Processes to Insure Quality.
            </p>
          </div>

          <div className="card">
            <p>We Foster Collaboration and Satisfaction to Ensure Unmatched Quality.
            </p>
          </div>


          <div className="card">
            <p>We are Easily Approachable and Avaliable for Meetings in also Germany.
            </p>
          </div>

          <div className="card">
            <p>
              We also deals with Custom Designs. 
              Private Branding can be done on Products.
            </p>
          </div>
        </div>

        <div className="btnContainer">
          <Link to="/Contact" className="btn bigBtn">
            Let's Talk
          </Link>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
