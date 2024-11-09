import React from "react";
import "../../Components/Collection/Collection.css";
import "./Product.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ img, title, paragraph }) => {
  return (
    <div className="collectionCard">
      <img src={img} alt={title} style={{ height: "270px" }} />
      <Link to="/Contact">
        <div className="overlay">Contact now for Customize Leather</div>
      </Link>
      <div className="contentCard">
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};
