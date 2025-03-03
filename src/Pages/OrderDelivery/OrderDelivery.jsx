import React from 'react'
import "./OrderDelivery.css"

import OurProcess from "../../Components/OurProcess/OurProcess.jsx";
import WhyChoose from "../../Components/WhyChoose/WhyChoose.jsx";
import MainVideo from "../../assets/Machine/HeroBackVideo.mp4";
import ProcessTabs from '../../Components/ProcessTabs/ProcessTabs.jsx';
import { useTranslation } from 'react-i18next';



const OrderDelivery = () => {
  const {t} = useTranslation();
  return (
    <>
      <div className="Orderdelivery">
        <div className="Orderdelivery-video">
          <video src={MainVideo} type="video/webm" autoPlay loop muted></video>
        </div>
        <div className="Orderdelivery-content">
          <h1 className="Orderdelivery-title">{t('Orderdelivery-title')}</h1>
          <div className="roundImg">
            <div className="text">
            {t('Orderdelivery-text')}
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
