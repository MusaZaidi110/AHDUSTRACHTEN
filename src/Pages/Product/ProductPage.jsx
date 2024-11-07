import React from "react";
import "./Product.css";

import img1 from "../../assets/Product/FullGrain.jpg";
import img2 from "../../assets/Product/TopGrain.jpg";
import img3 from "../../assets/Product/Vegetable-Tanned.jpg";
import img4 from "../../assets/Product/SuedeGoat.jpg";
import img5 from "../../assets/Product/BuffaloFullGrain.jfif";
import img6 from "../../assets/Product/BuffaloTopGrain.jfif";
import img7 from "../../assets/Product/BuffaloNubuck.jfif";
import img8 from "../../assets/Product/BuffaloOilPull.jfif";
import img9 from "../../assets/Product/CowFullGrain.jfif";
import img10 from "../../assets/Product/CowTopGrain.jfif";
import img11 from "../../assets/Product/CowHide.jfif";
import img12 from "../../assets/Product/CowCorrectedGrain.jfif";
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
            img={img5}
            title="Full-Grain Buffalo Leather"
            paragraph="The highest quality buffalo leather, with the entire grain layer intact, known for its rugged texture, strength, and natural markings, offering a rustic and authentic look."
          />

          <ProductCard
            img={img6}
            title="Top-Grain Buffalo Leather"
            paragraph="Slightly sanded to remove imperfections while maintaining the leather’s durability and flexibility. It has a smoother surface than full-grain, giving a refined appearance."
          />

          <ProductCard
            img={img7}
            title="Buffalo Nubuck Leather"
            paragraph="Top-grain buffalo leather buffed to create a soft, suede-like texture. This variant is durable and has a velvety feel, making it ideal for unique and high-end products."
          />

          <ProductCard
            img={img8}
            title="Distressed or Oil-Pull Buffalo Leather"
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

          <ProductCard
            img={img11}
            title="Cowhide Suedes"
            paragraph=" Made from the inner layers of the hide, this variant has a soft, velvety surface. Though not as strong as full-grain, it offers a unique texture ideal for fashion accessories and footwear."
          />

          <ProductCard
            img={img12}
            title="Corrected-Grain Cow Leather"
            paragraph=" Heavily sanded to remove natural imperfections and embossed with artificial grain patterns. It has a uniform, polished appearance, commonly used for products requiring a flawless finish."
          />
        </div>
      </section>
    </>
  );
};

export default ProductPage;
