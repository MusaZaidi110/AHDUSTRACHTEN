import React from "react";

import "./Collection.css";
import img1 from "../../assets/Making/Making-Parts-1.webp";
import img2 from "../../assets/Making/Making-Parts-3.webp";
import img3 from "../../assets/Product/Product-Leather-1.webp";
import img4 from "../../assets/Product/Product-1.webp";
import { CollectionCard } from "./CollectionCard";

const Collection = () => {
  return (
    <>
      <section className="collection">
        <div className="title">Our Products</div>
        <div className="mainTitle">Our Top Collections</div>
        <div className="borderLine">
          <div className="upline"></div>
          <div className="downline"></div>
        </div>

        <div className="collectionCards">
          <CollectionCard
            img={img1}
            title="Buffalo Skin"
            paragraph="Discover the strength and style of authentic buffalo leather,
            crafted for lasting durability and showcasing its unique, rugged
            texture."
            productId={1}
          />

          <CollectionCard
            img={img2}
            title="Regular Goat Skin Beige"
            paragraph="Embrace the softness and sophistication of regular goat skin in
                beige, designed for comfort with a refined, natural texture that
                brings elegance to every piece."
            productId={2}
          />

          <CollectionCard
            img={img3}
            title="Cow suede Beige"
            paragraph="Discover the plush feel and refined look of cow suede in beige,
                offering a soft, velvety texture that adds warmth and
                sophistication to any piece."
            productId={3}
          />

          <CollectionCard
            img={img4}
            title="Velvety Cow Suede"
            paragraph="Experience the luxurious softness of velvety cow suede, ideal
                for pieces with a rich texture and smooth, refined finish."
            productId={4}
          />
        </div>
      </section>
    </>
  );
};

export default Collection;
