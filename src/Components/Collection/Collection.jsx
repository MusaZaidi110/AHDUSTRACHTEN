import React from "react";
import { Link } from "react-router-dom";
import "./Collection.css";
import img1 from "../../assets/Making/Making-Parts-1.webp";
import img2 from "../../assets/Making/Making-Parts-3.webp";
import img3 from "../../assets/Product/Product-Leather-1.webp";

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
          <div className="collectionCard">
            <img src={img1} alt="buffaloskinImg" />
            <div className="content">
              <h2>Buffalo Skin</h2>
              <p>
                Discover the strength and style of authentic buffalo leather,
                crafted for lasting durability and showcasing its unique, rugged
                texture.
              </p>
              <Link>more details</Link>
            </div>
          </div>

          <div className="collectionCard">
            <img src={img2} alt="goatskinbeige" />
            <div className="content">
              <h2>Regular Goat Skin Beige</h2>
              <p>
                Embrace the softness and sophistication of regular goat skin in
                beige, designed for comfort with a refined, natural texture that
                brings elegance to every piece.
              </p>
              <Link>more details</Link>
            </div>
          </div>

          <div className="collectionCard">
            <img src={img3} alt="buffaloskinImg" />
            <div className="content">
              <h2>Cow suede Beige</h2>
              <p>
                Discover the plush feel and refined look of cow suede in beige,
                offering a soft, velvety texture that adds warmth and
                sophistication to any piece.
              </p>
              <Link>more details</Link>
            </div>
          </div>

          <div className="collectionCard">
            <img src={img1} alt="buffaloskinImg" />
            <div className="content">
              <h2>Velvety Cow Suede</h2>
              <p>
                Experience the luxurious softness of velvety cow suede, ideal
                for pieces with a rich texture and smooth, refined finish.
              </p>
              <Link style={{ marginTop: "15px" }}>more details</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collection;
