import React from "react";
import { useTranslation } from 'react-i18next';
import "./Collection.css";
import img2 from "../../assets/Product/GoatLeather.jpg";
import img3 from "../../assets/Product/cowLeather.jfif";
import img4 from "../../assets/Product/cowVelvety.jfif";

import { CollectionCard } from "./CollectionCard";

const Collection = () => {
    const { t } = useTranslation();

  return (
    <>
      <section className="collection">
        <div className="title opposite">{t('collectionTitle')}</div>
        <div className="mainTitle">{t('collectionMainTitle')}</div>
        <div className="borderLine">
          <div className="upline"></div>
          <div className="downline"></div>
        </div>

        <div className="collectionCards">
          <CollectionCard
            img={img2}
            title = {t('collectionCard1Title')}
            paragraph= {t('collectionCard1Desc')}
          />

          <CollectionCard
            img={img3}
            title = {t('collectionCard2Title')}
            paragraph= {t('collectionCard2Desc')}
          />

          <CollectionCard
            img={img4}
            title = {t('collectionCard3Title')}
            paragraph= {t('collectionCard3Desc')}
          />
        </div>
      </section>
    </>
  );
};

export default Collection;
