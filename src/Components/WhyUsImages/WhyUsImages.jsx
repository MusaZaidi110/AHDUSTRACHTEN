import React from "react";
import "./WhyUsImages.css";

// SwiperJS imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// Importing images
import img1 from "../../assets/Machine/Machine-3.webp";
import img2 from "../../assets/Making/Making-Parts-1.webp";
import img3 from "../../assets/Making/Making-Part-6.webp";
import img4 from "../../assets/Making/Making-Parts-3.webp";
import img5 from "../../assets/Making/Making-Part-7.webp";
import img6 from "../../assets/Making/Making-Part-5.webp";
import img7 from "../../assets/Team/Machine-3.webp";
import img8 from "../../assets/Team/Making-Part-10.webp";
import img9 from "../../assets/Product/Product-2.webp";
import img10 from "../../assets/Product/Product-4.webp";
import img11 from "../../assets/Product/Product-Leather-1.webp";
import img12 from "../../assets/Product/Product-Leather-2.webp";
import img13 from "../../assets/Product/Product-5.webp";
import img14 from "../../assets/Product/Product-6.webp";
import img15 from "../../assets/Product/Product-9.webp";
import img16 from "../../assets/Product/Product-10.webp";

const WhyUsImages = () => {
    // Array of images and their overlay texts
    const images = [
        { src: img1, text: "High-Quality Machinery" },
        { src: img2, text: "Expert Craftsmanship" },
        { src: img3, text: "Attention to Detail" },
        { src: img4, text: "Timeless Design" },
        { src: img5, text: "Authentic Leather" },
        { src: img6, text: "Precision Work" },
        { src: img7, text: "Dedicated Team" },
        { src: img8, text: "Modern Techniques" },
        { src: img9, text: "Premium Products" },
        { src: img10, text: "Elegant Styles" },
        { src: img11, text: "Unmatched Durability" },
        { src: img12, text: "Natural Finishing" },
        { src: img13, text: "Customer Favorites" },
        { src: img14, text: "Sustainable Practices" },
        { src: img15, text: "Trusted by Many" },
        { src: img16, text: "Crafted with Passion" },
    ];

    return (
        <section className="whyusimage">
            {/* Titles */}
            <div className="title">Why Us</div>
            <div className="mainTitle">How We Differ</div>
            <div className="borderLine">
                <div className="upline"></div>
                <div className="downline"></div>
            </div>

            {/* SwiperJS Grid Integration */}
            <Swiper
                modules={[Grid, Autoplay]} // Include Autoplay module
                grid={{ rows: 2, fill: "row" }}
                spaceBetween={20}
                autoplay={{
                    delay: 2000, // Slide every 2 seconds
                    disableOnInteraction: false, // Keeps autoplay enabled after user interaction
                }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 }, // Adjust the number of columns on larger screens
                }}
                className="swiper-container"
            >
                {/* Render each image dynamically in SwiperSlide */}
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                        <div className="card">
                            <img src={image.src} alt={`Why Us Image ${index + 1}`} />
                            <div className="overlay">
                                <p>{image.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default WhyUsImages;
