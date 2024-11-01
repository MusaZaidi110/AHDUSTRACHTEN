import React from "react";
import "./About.css";
import product1 from "../../assets/Product/Product-1.webp";
import product2 from "../../assets/Product/Product-2.webp";
import product3 from "../../assets/Product/Product-3.webp";
import product4 from "../../assets/Product/Product-4.webp";
import product5 from "../../assets/Product/Product-5.webp";
import product6 from "../../assets/Product/Product-6.webp";
import product7 from "../../assets/Product/Product-7.webp";
import product8 from "../../assets/Product/Product-8.webp";
import product9 from "../../assets/Product/Product-9.webp";
import product10 from "../../assets/Product/Product-10.webp";
import Icon from "../../assets/bulletIcon.png";
const About = () => {
  const images = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
  ];

  return (
    <>
      <section className="about">
        <div className="title">About Us</div>
        <div className="mainTitle">Who Are We</div>
        <div className="borderLine">
          <div className="upline"></div>
          <div className="downline"></div>
        </div>

        <div className="contentSection">
          <div className="contentList">
            <ul>
              <li>
                <img src={Icon} alt="Bullet Icon" />
                <div className="text">
                  <span>100% Authentic Leather:</span> <br />
                  Every product we offer is crafted from premium, genuine
                  leather, chosen for durability, richness, and timeless appeal.
                </div>
              </li>

              <li>
                <img src={Icon} alt="Bullet Icon" />
                <div className="text">
                  <span>Crafting Traditions:</span> <br />
                  We specialize in Trachten, merging traditional design with
                  high-quality materials, making each piece a blend of heritage
                  and fashion.
                </div>
              </li>

              <li>
                <img src={Icon} alt="Bullet Icon" />
                <div className="text">
                  <span>Handcrafted Excellence:</span> <br />
                  Our skilled artisans pour dedication into every stitch,
                  ensuring that each product meets the highest standards of
                  leather craftsmanship.
                </div>
              </li>

              <li>
                <img src={Icon} alt="Bullet Icon" />
                <div className="text">
                  <span>Uncompromising Quality:</span> <br />
                  With us, quality isn’t a goal; it’s a standard. Our products
                  are built to last, providing a luxury that only gets better
                  with time.
                </div>
              </li>

              <li>
                <img src={Icon} alt="Bullet Icon" />
                <div className="text">
                  <span>Modern Meets Classic:</span> <br />
                  Our products honor traditional craftsmanship while fitting
                  effortlessly into the modern wardrobe.
                </div>
              </li>

              <li>
                <img src={Icon} alt="Bullet Icon" />
                <div className="text">
                  <span>Built to Last Generations:</span> <br />
                  Each piece is made not just for today but to be cherished,
                  shared, and remembered for years.
                </div>
              </li>
            </ul>
          </div>
          <div className="rotator">
            <div className="banner">
              <div className="slider" style={{ "--quantity": images.length }}>
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="item"
                    style={{ "--position": index + 1 }}
                  >
                    <img src={src} alt={`Product ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
