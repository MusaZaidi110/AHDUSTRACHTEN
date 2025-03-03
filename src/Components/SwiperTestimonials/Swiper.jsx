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
import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation();

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
              <div className="name">{t("swiperName")}</div>
              <div className="company">{t("swiperCompany")}</div>
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
            <h1>{t("swiperHeader")}</h1>
            <p>{t("swiperContent")}</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
