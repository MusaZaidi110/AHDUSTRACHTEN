import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import "./ProcessTabs.css";

import IconImg1 from "../../assets/ProcessIcons/OrderBooking.png";
import IconImg2 from "../../assets/ProcessIcons/LeatherAquire.png";
import IconImg3 from "../../assets/ProcessIcons/Stiching.png";
import IconImg4 from "../../assets/ProcessIcons/QualityCheck.png";
import IconImg5 from "../../assets/ProcessIcons/Packaging.png";
import IconImg6 from "../../assets/ProcessIcons/Export.png";

import Image1 from "../../assets/Logo/logo white png.png";
import Image2 from "../../assets/Making/RawMaterials.jpeg";
import Image3 from "../../assets/Team/Making-Part-10.webp";
import Image4 from "../../assets/Product/InspectionReport.jpeg";
import Image5 from "../../assets/Product/Product-4.webp";
import Image6 from "../../assets/Delivery/Delivery-Transport-1.webp";
import { useTranslation } from "react-i18next";

const ProcessTabs = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="ProcessTabs">
      {/* Tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="image tabs example"
      >
        <Tab
          icon={
            <img
              src={IconImg1}
              alt="Image 1"
              style={{ width: 40, height: 40 }}
            />
          }
          label={t("ProcessTabs1")}
        />
        <Tab
          icon={
            <img
              src={IconImg2}
              alt="Image 2"
              style={{ width: 40, height: 40 }}
            />
          }
          label={t("ProcessTabs2")}
        />
        <Tab
          icon={
            <img
              src={IconImg3}
              alt="Image 3"
              style={{ width: 40, height: 40 }}
            />
          }
          label={t("ProcessTabs3")}
        />
        <Tab
          icon={
            <img
              src={IconImg4}
              alt="Image 4"
              style={{ width: 40, height: 40 }}
            />
          }
          label={t("ProcessTabs4")}
        />
        <Tab
          icon={
            <img
              src={IconImg5}
              alt="Image 5"
              style={{ width: 40, height: 40 }}
            />
          }
          label={t("ProcessTabs5")}
        />
        <Tab
          icon={
            <img
              src={IconImg6}
              alt="Image 6"
              style={{ width: 40, height: 40 }}
            />
          }
          label={t("ProcessTabs6")}
        />
      </Tabs>

      {/* Content Under Tabs */}
      <div style={{ marginTop: "20px" }}>
        {value === 0 && (
          <div className="TabContent">
            <div className="TextBox">
              <h2>{t('ProcessTabsHeading1')}</h2>
              <p>
                {t('ProcessTabsContent1')}
              </p>
            </div>
            <div className="TabImage TextBox">
              <img src={Image1} alt="Image 1" loading="lazy" />
            </div>
          </div>
        )}
        {value === 1 && (
          <div className="TabContent">
            <div className="TextBox">
              <h2>{t('ProcessTabsHeading2')}</h2>
              <p>
                {t('ProcessTabsContent2P1')}
                <br />
                {t('ProcessTabsContent2P2')}
              </p>
            </div>
            <div className="TabImage TextBox">
              <img src={Image2} alt="Image 1" loading="lazy" />
            </div>
          </div>
        )}
        {value === 2 && (
          <div className="TabContent">
            <div className="TextBox">
              <h2>{t('ProcessTabsHeading3')}</h2>
              <p>
                {t('ProcessTabsContent3P1')}    
                <br />
                {t('ProcessTabsContent3P2')}
              </p>
            </div>
            <div className="TabImage TextBox">
              <img src={Image3} alt="Image 1" loading="lazy" />
            </div>
          </div>
        )}
        {value === 3 && (
          <div className="TabContent">
            <div className="TextBox">
              <h2>{t('ProcessTabsHeading4')}</h2>
              <p>
                {t('ProcessTabsContent4P1')}    
                <br />
                {t('ProcessTabsContent4P2')}    
              </p>
            </div>
            <div className="TabImage TextBox">
              <img src={Image4} alt="Image 1" loading="lazy" />
            </div>
          </div>
        )}
        {value === 4 && (
          <div className="TabContent">
            <div className="TextBox">
              <h2>{t('ProcessTabsHeading5')}</h2>
              <p>
                {t('ProcessTabsContent5P1')}    
                <br />
                {t('ProcessTabsContent5P2')}
              </p>
            </div>
            <div className="TabImage TextBox">
              <img src={Image5} alt="Image 5" loading="lazy" />
            </div>
          </div>
        )}
        {value === 5 && (
          <div className="TabContent">
            <div className="TextBox">
              <h2>{t('ProcessTabsHeading6')}</h2>
              <p>
                {t('ProcessTabsContent6P1')}
                <br />
                {t('ProcessTabsContent6P2')}
                <br />
                {t('ProcessTabsContent6P3')}
              </p>
            </div>
            <div className="TabImage TextBox">
              <img src={Image6} alt="Image 6" loading="lazy" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessTabs;
