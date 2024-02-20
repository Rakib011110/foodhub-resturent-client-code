import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Category.css";

// import required modules
import { Pagination } from "swiper/modules";

// import required modules
import slide1 from "../../../assets/order-now/Black Modern Healthy Food Flyer.png";
import slide2 from "../../../assets/order-now/Blue Creative Delicious Food Flyer .png";
import slide3 from "../../../assets/order-now/Dark Mexican Food Promotional Flyer.png";
import slide4 from "../../../assets/order-now/Food Promo (Flyer).png";
import slide5 from "../../../assets/order-now/Orange and White Modern Special Pizza Flyer.png";
import slide6 from "../../../assets/order-now/Orange Black Delicious Modern Fast Food Brand Campaign Flyer.png";

const Category = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={slide1} alt="" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide6} alt="" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide1} alt="" />{" "}
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
