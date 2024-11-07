import React from "react";
import "./ProductDetails.css";
import { useParams, Link } from "react-router-dom";
import img1 from "../../assets/Product/buffaloleather.webp";
import img2 from "../../assets/Product/GoatLeather.jpg";
import img3 from "../../assets/Product/cowLeather.jfif";
import img4 from "../../assets/Product/cowVelvety.jfif";

const productData = {
  1: {
    img: img1,
    title: "Buffalo Skin",
    description:
      "Discover the remarkable strength and character of genuine Buffalo Skin, a leather renowned for its rugged durability and distinctive texture. Carefully crafted to highlight its natural grain, Buffalo Skin combines resilience with a robust, rustic aesthetic that brings unique charm to each piece. This high-quality leather is built to last, with a toughness that resists wear and tear while developing a beautiful patina over time, adding character as it ages. Ideal for creating timeless designs that emphasize strength and natural beauty, Buffalo Skin is a choice that merges practicality with an authentic, raw appeal. Perfect for outerwear, accessories, and rugged apparel, it lends a bold yet refined look to every creation.",
  },
  2: {
    img: img2,
    title: "Regular Goat Skin Beige",
    description:
      "Experience the delicate charm of Regular Goat Skin in Beige, a leather choice celebrated for its blend of softness and durability. With its natural, refined texture, this leather embodies a balance of elegance and resilience, perfect for versatile designs that maintain both sophistication and comfort. Carefully crafted to showcase its warm, earthy tones, each piece brings a touch of timeless style to any wardrobe.",
  },
  3: {
    img: img3,
    title: "Goat suede Beige",
    description:
      "Immerse yourself in the sophisticated warmth and soft texture of Goat Suede in Beige. Known for its plush, velvety surface, this luxurious suede offers both comfort and elegance. The beige hue lends a versatile, neutral tone that complements a wide range of styles, adding subtle warmth and refinement to any piece. With a uniquely soft and supple finish, Goat Suede feels exceptional to the touch, ideal for creating garments and accessories that exude sophistication. Durable and resilient, it’s crafted to maintain its look and feel over time, ensuring long-lasting beauty. Goat Suede Beige is perfect for those who seek a touch of understated luxury in their wardrobe, from jackets to bags and footwear, seamlessly blending style with comfort and timeless appeal.",
  },
  4: {
    img: img4,
    title: "Velvety Cow Suede",
    description:
      "Experience the epitome of luxury with Velvety Cow Suede, a material cherished for its unmatched softness and rich texture. This suede stands out with its smooth, almost plush feel, perfect for pieces that are meant to be both comfortable and visually appealing. The fine-grain texture of velvety cow suede enhances its tactile quality, making it ideal for high-end garments and accessories like jackets, boots, and handbags that demand a sophisticated finish.     The material's natural resilience ensures it holds up beautifully to regular wear, while the velvety surface maintains a fresh, refined appearance over time. Its subtle sheen catches the light, adding depth and dimension, while its soft, earthy tones make it incredibly versatile, blending seamlessly with both classic and contemporary styles. Velvety Cow Suede is a top choice for those who appreciate a balance of elegance, comfort, and timeless durability. Perfect for creating a statement, this suede brings an air of sophistication and luxurious feel to any piece, elevating everyday wear into an indulgent experience.",
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData[id];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="productDetail">
      <div className="img">
        <img src={product.img} alt={product.title} />
        <div className="impNote">
          <p>
            For Customize Product Material, Design and Patterns. <br />
            <Link to="/Contact">Contact Us</Link>
          </p>
        </div>
      </div>
      <div className="contentProduct">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <small className="noteRed">
          For personalized craftsmanship and endless possibilities, reach out to
          us! We specialize in all types of premium leathers and can bring any
          custom product vision to life. Let’s create something uniquely yours!
        </small>
      </div>
    </section>
  );
};

export default ProductDetail;
