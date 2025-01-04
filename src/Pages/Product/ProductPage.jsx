import React from "react";
import "./Product.css";

import img1 from "../../assets/Product/FullGrain.jpg";
import img2 from "../../assets/Product/TopGrain.jpg";
import img3 from "../../assets/Product/Vegetable-Tanned.jpg";
import img4 from "../../assets/Product/SuedeGoat.jpg";
import img8 from "../../assets/Product/BuffaloOilPull.jfif";
import img9 from "../../assets/Product/CowFullGrain.jfif";
import img10 from "../../assets/Product/CowTopGrain.jfif";
import { ProductCard } from "./ProductCard";

const ProductPage = () => {
  return (
    <>
      <section className="products">
        <div className="title">Our Products</div>
        <div className="mainTitle">Materials We Use</div>
        <div className="borderLine">
          <div className="upline"></div>
          <div className="downline"></div>
        </div>

        <div className="ProductContent">
          <ProductCard
            img={img1}
            title="Full-Grain Goat Leather"
            paragraph="Known for its natural grain and longevity, perfect for authentic, durable pieces."
          />

          <ProductCard
            img={img2}
            title="Top-Grain Goat Leather"
            paragraph="Smooth and consistent, combining durability with a refined finish."
          />

          <ProductCard
            img={img3}
            title="Vegetable-Tanned Goat Leather"
            paragraph="Eco-friendly and richly textured, ideal for traditional, handcrafted designs."
          />

          <ProductCard
            img={img4}
            title="Suede Goat Leather"
            paragraph="Soft and velvety, adding a unique texture to our Trachten collection."
          />

          <ProductCard
            img={img8}
            title="Oil-Pull Cow Leather"
            paragraph="Treated with oils and waxes to give it a WORN look. It develops a beautiful patina over time and has a soft, flexible feel, often used for vintage-style products."
          />

          <ProductCard
            img={img9}
            title="Full-Grain Cow Leather"
            paragraph="The highest quality cow leather with the natural grain intact. It is known for its durability, strength, and unique character that develops a beautiful patina over time."
          />

          <ProductCard
            img={img10}
            title="Top-Grain Cow Leather"
            paragraph=" Sanded to remove imperfections, giving it a smooth, consistent finish while retaining durability and flexibility. It’s commonly used for a refined, polished look."
          />
        </div>
      </section>
    </>
  );
};

export default ProductPage;
