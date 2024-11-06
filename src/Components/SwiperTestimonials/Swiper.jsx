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
              <div className="name">ABC Person</div>
              <div className="company">XYZ Company</div>
            </div>
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={4}
                precision={0.5}
                readOnly
              />
            </Stack>
          </div>

          <hr />

          <div className="TestimonialContent">
            <h1>It was a Very Good Experience</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              distinctio quas doloribus et quibusdam fuga repellendus, possimus
              tempora, nemo architecto beatae cumque quisquam nobis delectus
              fugiat ipsum optio labore? Iure tempore excepturi aspernatur quis
              quam dolorem saepe qui magni cupiditate!
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="testimonialContainer">
          <div className="headContainer">
            <img src={test2} alt="Customer 1 Picture" />
            <div className="nameContainer">
              <div className="name">ABC Person</div>
              <div className="company">XYZ Company</div>
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
            <h1>It was a Very Good Experience</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              distinctio quas doloribus et quibusdam fuga repellendus, possimus
              tempora, nemo architecto beatae cumque quisquam nobis delectus
              fugiat ipsum optio labore? Iure tempore excepturi aspernatur quis
              quam dolorem saepe qui magni cupiditate!
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="testimonialContainer">
          <div className="headContainer">
            <img src={test3} alt="Customer 1 Picture" />
            <div className="nameContainer">
              <div className="name">ABC Person</div>
              <div className="company">XYZ Company</div>
            </div>
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={4}
                precision={0.5}
                readOnly
              />
            </Stack>
          </div>

          <hr />

          <div className="TestimonialContent">
            <h1>It was a Very Good Experience</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              distinctio quas doloribus et quibusdam fuga repellendus, possimus
              tempora, nemo architecto beatae cumque quisquam nobis delectus
              fugiat ipsum optio labore? Iure tempore excepturi aspernatur quis
              quam dolorem saepe qui magni cupiditate!
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
