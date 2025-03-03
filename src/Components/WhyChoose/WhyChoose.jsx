import React from "react";
import "./WhyChoose.css";
import { useTranslation } from "react-i18next";
const WhyChoose = () => {
  const {t} = useTranslation();
  
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
              {t('WhyChooseMission')}
              </p>
            </div>
            <div className="TextBox">
              <h1>Values</h1>
              <p>
              {t('WhyChooseValues')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
