import React from "react";
import Hero from "../Components/HeroSection/Hero";
import About from "../Components/AboutSection/About";
import WhyUs from "../Components/WhyUs/WhyUs";
import Collection from "../Components/Collection/Collection";
import Process from "../Components/Process/Process";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhyUs />
      <Collection />
      <Process />
    </div>
  );
};

export default HomePage;
