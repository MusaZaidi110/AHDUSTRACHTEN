import React from "react";
import "../../Components/Collection/Collection.css";
import "./Product.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ProductCard = ({ img, title, paragraph }) => {
  const {t} = useTranslation();
  return (
    <div className="collectionCard">
      <img src={img} alt={title} style={{ height: "270px" }} />
      <Link to="/Contact">
        <div className="overlay">{t('productCardOverlay')}</div>
      </Link>
      <div className="contentCard">
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};
