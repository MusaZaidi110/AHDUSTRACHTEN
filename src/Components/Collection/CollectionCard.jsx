import React from "react";
import "./Collection.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const CollectionCard = ({ img, title, paragraph }) => {  
  const {t} = useTranslation()

  return (
    <>
      <div className="collectionCard">
        <img src={img} alt={title} />
        <Link to="/Contact">
          <div className="overlay">{t('collectionOverlay')}</div>
        </Link>
        <div className="contentCard">
          <h2>{title}</h2>
          <p>{paragraph}</p>
        </div>
      </div>
    </>
  );
};
