import React from "react";
import Hero from "../Components/HeroSection/Hero";
// import About from "../Components/AboutSection/About";
import WhyUsImages from "../Components/WhyUsImages/WhyUsImages";
import WhyUs from "../Components/WhyUs/WhyUs";
import Collection from "../Components/Collection/Collection";
import Process from "../Components/Process/Process";
import Testimonials from "../Components/SwiperTestimonials/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Hero />
      {/* <About /> */}
      <WhyUsImages />
      <WhyUs />
      <Collection />
      <Process />
      <Testimonials />
    </div>
  );
};

export default HomePage;
