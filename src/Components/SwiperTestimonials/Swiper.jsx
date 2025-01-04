import { Pagination, Virtual } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import Img1 from "../../assets/Testimonials/Testimonial-1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "./SwiperCustom.css";

export default () => {
  return (
    <Swiper
      modules={[Pagination, Virtual]}
      spaceBetween={50}
      initialSlide={2}
      slidesPerView={3}
      centeredSlides={true}
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <div className="testimonialContainer">
          <div className="headContainer">
            <img src={Img1} alt="Customer 1 Picture" />
            <div className="nameContainer">
              <div className="name">Krist und König</div>
              <div className="company">Germany</div>
            </div>
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={5}
                precision={0.5}
                readOnly
              />
            </Stack>
          </div>

          <hr />

          <div className="TestimonialContent">
            <h1>Quality You Can Rely On – Crafted by Experts</h1>
            <p>
            I am beyond impressed with my purchase! The craftsmanship and meticulous attention to detail are truly unparalleled. It’s evident that excellence and quality are at the heart of this brand. This is more than a product—it’s a masterpiece. I’m already looking forward to my next order!
            </p>
          </div>
        </div>
      </SwiperSlide>


    </Swiper>
  );
};
