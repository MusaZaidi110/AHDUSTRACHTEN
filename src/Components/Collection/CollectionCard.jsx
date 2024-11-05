import React from "react";
import "./Collection.css";
import { Link } from "react-router-dom";
export const CollectionCard = ({ img, title, paragraph, productId }) => {
  return (
    <>
      <div className="collectionCard">
        <img src={img} alt={title} />
        <div className="contentCard">
          <h2>{title}</h2>
          <p>{paragraph}</p>
          <Link to={`/Products/${productId}`}>check Details...</Link>
        </div>
      </div>
    </>
  );
};
