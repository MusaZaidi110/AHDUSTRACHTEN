import React from "react";
import "./WhyChoose.css";
const WhyChoose = () => {
  return (
    <>
      <div className="WhyChooseContainer">
        <hr />
        <div className="WhyChooseText">
          <h1>
            Our <span>Mission</span> & <span> Values</span>
          </h1>
          <div className="TextContainer">
            <div className="TextBox">
              <h1>Mission</h1>
              <p>
              To Redefine Quality and Craftsmanship, One Product at a Time.
              We aim to leave an impression that speaks of quality, passion, and dedication.
              </p>
            </div>
            <div className="TextBox">
              <h1>Values</h1>
              <p>
              To Become the Global Standard for Premium Leather Products.
              We aim to create a legacy that inspires confidence and loyalty among our customers across the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
