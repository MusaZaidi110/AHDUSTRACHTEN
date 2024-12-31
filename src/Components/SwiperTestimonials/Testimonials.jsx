import React from "react";
import "./Testimonials.css";
import Swaper from "./Swiper.jsx";
import MainVideo from "../../assets/Making/Making-Machine-2.webm";
const Testimonials = () => {
  return (
    <>
      <section className="testimonials">
        <div className="testimonials-video">
          <video src={MainVideo} type="video/webm" autoPlay loop muted></video>
        </div>

        <div className="titleHeader">
          <div className="title">Testimonials</div>
          <div className="mainTitle">Our Clients</div>
        </div>
        <div className="swiperSlides">
          <Swaper />
        </div>
      </section>
    </>
  );
};

export default Testimonials;
