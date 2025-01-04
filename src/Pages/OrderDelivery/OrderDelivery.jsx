import React from 'react'
import "./OrderDelivery.css"

import OurProcess from "../../Components/OurProcess/OurProcess.jsx";
import WhyChoose from "../../Components/WhyChoose/WhyChoose.jsx";
import MainVideo from "../../assets/Machine/HeroBackVideo.mp4";
import ProcessTabs from '../../Components/ProcessTabs/ProcessTabs.jsx';



const OrderDelivery = () => {
  return (
    <>
      <div className="Orderdelivery">
        <div className="Orderdelivery-video">
          <video src={MainVideo} type="video/webm" autoPlay loop muted></video>
        </div>
        <div className="Orderdelivery-content">
          <h1 className="Orderdelivery-title">Order TO Delivery</h1>
          <div className="roundImg">
            <div className="text">
            From order placement to delivery, we prioritize quality, authenticity, and your satisfaction. Choosing us means becoming part of a journey rooted in craftsmanship and excellence. Trust us to deliver leather products as unique as you are. Place your order today and experience the difference!
            </div>
          </div>
        </div>
      </div>

      <div className="ImageTextSection">
        <div className="ContentSection">

        </div>
        <div className="ImageSection"></div>
      </div>

      <WhyChoose />

      <OurProcess />

      <ProcessTabs />
    </>
  )
}

export default OrderDelivery;
