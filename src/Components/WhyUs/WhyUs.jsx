import React from "react";
import "./WhyUs.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const WhyUs = () => {
  const {t} = useTranslation();

  return (
    <>
      <section className="whyus">
        <div className="title">{t('whyusTitle')}</div>
        <div className="mainTitle">{t('whyusMainTitle')}</div>
        <div className="borderLine">
          <div className="upline"></div>
          <div className="downline"></div>
        </div>

        <div className="cards">
          <div className="card">
            <p>{t('whyusCard1')}</p>
          </div>

          <div className="card">
          <p>{t('whyusCard2')}</p>
          </div>

          <div className="card">
          <p>{t('whyusCard3')}</p>
          </div>


          <div className="card">
          <p>{t('whyusCard4')}</p>
          </div>

          <div className="card">
          <p>{t('whyusCard5')}</p>
          </div>
        </div>

        <div className="btnContainer">
          <Link to="/Contact" className="btn bigBtn">
            {t('whyusButton')}
          </Link>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
