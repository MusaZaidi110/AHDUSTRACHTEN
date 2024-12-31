import React from "react";
import "./Collection.css";
import { Link } from "react-router-dom";
export const CollectionCard = ({ img, title, paragraph }) => {
  return (
    <>
      <div className="collectionCard">
        <img src={img} alt={title} />
        <Link to="/Contact">
          <div className="overlay">Contact now for Customize Leather</div>
        </Link>
        <div className="contentCard">
          <h2>{title}</h2>
          <p>{paragraph}</p>
        </div>
      </div>
    </>
  );
};
