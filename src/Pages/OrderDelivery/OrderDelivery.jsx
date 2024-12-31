import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import "./OrderDelivery.css"

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
              At every stage of our process, from receiving your order to delivery, our focus is on quality, authenticity, and your satisfaction. When you choose us, you're not just purchasing a product; you're becoming a part of our story – a story built on craftsmanship, dedication, and excellence.

              Let us be your trusted partner in delivering leather products that are as unique as you are. Place your order today and experience the difference!
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

      <ProcessTabs />
    </>
  )
}

export default OrderDelivery;
