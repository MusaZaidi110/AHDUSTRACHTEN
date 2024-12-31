import React from "react";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <>
      <section className="whyus">
        <div className="title">Our Business</div>
        <div className="mainTitle">Why Are We Chosen</div>
        <div className="borderLine">
          <div className="upline"></div>
          <div className="downline"></div>
        </div>

        <div className="cards">
          <div className="card">
            <h3>Unmatched Craftsmanship</h3>
            <p>
              Our skilled artisans bring precision and dedication to every
              piece, ensuring unparalleled quality and attention to detail.
            </p>
          </div>

          <div className="card">
            <h3>100% Authentic Materials</h3>
            <p>
              Using only genuine, top-tier materials, we promise durability and
              authenticity in all our products.
            </p>
          </div>

          <div className="card">
            <h3>Customer-Centric Approach</h3>
            <p>
              Your satisfaction is our priority; we provide dedicated support
              and customization to meet your unique needs.
            </p>
          </div>

          <div className="card">
            <h3>Exclusive, Timeless Design</h3>
            <p>
              Our products feature designs that are both stylish and enduring,
              tailored to make a lasting impression.
            </p>
          </div>
        </div>

        <div className="btnContainer">
          <a href="#" className="btn bigBtn">
            Let's Connect
          </a>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
