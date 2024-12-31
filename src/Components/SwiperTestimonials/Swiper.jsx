import { Pagination, Virtual } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import test1 from "../../assets/Testimonials1.png";
import test2 from "../../assets/Testimonials2.png";
import test3 from "../../assets/Testimonials3.png";

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
            <img src={test1} alt="Customer 1 Picture" />
            <div className="nameContainer">
              <div className="name">Sarah L.</div>
              <div className="company">Germany</div>
            </div>
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
            </Stack>
          </div>

          <hr />

          <div className="TestimonialContent">
            <h1>Quality You Can Count On – From Those Who Know Best</h1>
            <p>
              Absolutely thrilled with my purchase! The craftsmanship and
              attention to detail are unmatched. It’s clear that quality is a
              top priority. I’ll definitely be coming back for more!
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="testimonialContainer">
          <div className="headContainer">
            <img src={test2} alt="Customer 1 Picture" />
            <div className="nameContainer">
              <div className="name">Michael.</div>
              <div className="company">Germany</div>
            </div>
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
            </Stack>
          </div>

          <hr />

          <div className="TestimonialContent">
            <h1>Authenticity, Craftsmanship, and Satisfaction</h1>
            <p>
              Incredible experience from start to finish. The team was super
              responsive to my customization requests, and the final product was
              beyond my expectations. Highly recommended!
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="testimonialContainer">
          <div className="headContainer">
            <img src={test3} alt="Customer 1 Picture" />
            <div className="nameContainer">
              <div className="name">Lucas P.</div>
              <div className="company">UK</div>
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
            <h1>Real Stories from Real Customers</h1>
            <p>
              I ordered a custom design, and it was perfect in every way. The
              fit, the material, the details. The customer service was also
              fantastic! I highly recommend this brand to anyone looking for
              quality and authenticity.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
