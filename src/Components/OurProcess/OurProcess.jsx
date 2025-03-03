import React, { useState } from "react";
import "./OurProcess.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import MasterCard from "../../assets/PaymentMethod/MasterCard.png";
import PayPal from "../../assets/PaymentMethod/PayPal.png";
import LCPayment from "../../assets/PaymentMethod/LCPayment.png";
import { useTranslation } from "react-i18next";
const TabsWithContent = () => {
  const {t} = useTranslation();
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    {
      id: "tab1",
      label: "Sample",
      content: (
        <div>
          <h2>{t('ourprocessTab1h2')}</h2>
          <p>
            {t('ourprocessTab1P1')}
            <br /> <strong> {t('ourprocessTab1P2')} </strong> <br />
            {t('ourprocessTab1P3')}
            <br /> <strong> {t('ourprocessTab1P4')} </strong> <br />
           {t('ourprocessTab1P5')} 
          </p>
        </div>
      ),
    },
    {
      id: "tab2",
      label: "Payment of Samples",
      content: (
        <div>
          <h2>{t('ourprocessTab2h2')}</h2>
          <p>
            {t('ourprocessTab2P1')}
            <br /> <strong> {t('ourprocessTab2P2')} </strong> <br />
            {t('ourprocessTab2P3')}
          </p>

          <div className="PaymentImages">
            <div className="paymentwithText">
              <img src={MasterCard} alt="MasterCard Pay Icon" width={100} height={60} />
              <span>Bank Transfer</span>
            </div>

            <div className="paymentwithText">
              <img src={PayPal} alt="PayPal Pay Icon" width={100} height={60} />
              <span>PayPal</span>
            </div>

            <div className="paymentwithText">
              <img src={LCPayment} alt="LCPayment Pay Icon" width={100} height={60} />
              <span>LC Payment Method</span>
            </div>

          </div>
        </div>
      ),
    },
    {
      id: "tab3",
      label: "Sample Times",
      content: (
        <div>
          <h2>{t('ourprocessTab3h2')}</h2>
          <p>
            {t('ourprocessTab3P1')}
            <br /> <strong> {t('ourprocessTab3P2')} </strong> <br />
            {t('ourprocessTab3P3')}
            <br /> <strong> {t('ourprocessTab3P4')} </strong> <br />
            {t('ourprocessTab3P5')}
            <div className="calender">
              <CalendarMonthIcon />
              <strong>{t('ourprocessTime')}</strong>
            </div>
          </p>
        </div>
      ),
    },
    {
      id: "tab4",
      label: "Time with Quantity",
      content: (
        <div>
          <h2>{t('ourprocessTab4h2')}</h2>
          <ul>
            {t('ourprocessTab4P1')}
            <strong> <li>{t('ourprocessTab4P2')}</li> </strong>
            <strong> <li>{t('ourprocessTab4P3')}</li> </strong>
            <strong> <li>{t('ourprocessTab4P4')}</li> </strong>

            <p>{t('ourprocessTab4P5')} </p>
            <strong> <li>{t('ourprocessTab4P6')}</li> </strong>
            <p> {t('ourprocessTab4P7')} </p>
          </ul>
        </div>
      ),
    },
    {
      id: "tab5",
      label: "Shipping by Air",
      content: (
        <div>
          <h2>{t('ourprocessTab5h2')}</h2>
          <ul>
            {t('ourprocessTab5P1')}
            <p>
              <strong>{t('ourprocessTab5P2')}</strong>
              <li>{t('ourprocessTab5Li1')}</li>
              <li>{t('ourprocessTab5Li2')}</li>
            </p>
            <p>
              <strong>{t('ourprocessTab5P3')}</strong>
              <li>{t('ourprocessTab5Li3')}</li>
              <li>{t('ourprocessTab5Li4')}</li>
            </p>
          </ul>
        </div>
      ),
    },
    {
      id: "tab6",
      label: "Shipping by Sea",
      content: (
        <div>
          <h2>{t('ourprocessTab6h2')}</h2>
          <ul>
            {t('ourprocessTab6P1')}
            <p>
              <strong>{t('ourprocessTab6P2')}</strong>
              <li>{t('ourprocessTab6Li1')}</li>
              <li>{t('ourprocessTab6Li2')}</li>
            </p>
            <p>
              <strong>{t('ourprocessTab6P3')}</strong>
              <li>{t('ourprocessTab6Li3')}</li>
              <li>{t('ourprocessTab6Li4')}</li>
            </p>
          </ul>
        </div>
      ),
    }
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <section className="OurProcessContainer">
      <div className="title">{t('ourprocessTitle')}</div>
      <div className="mainTitle">{t('ourprocessMainTitle')}</div>
      <div className="borderLine">
        <div className="upline"></div>
        <div className="downline"></div>
      </div>
      <div className="OurProcessWrapper">
        <div className="OurProcessTabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              data-text={`#${tab.id}`}
              className={`pills ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tabsText">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              id={tab.id}
              className="tab-content"
              style={{ display: activeTab === tab.id ? "block" : "none" }}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabsWithContent;
