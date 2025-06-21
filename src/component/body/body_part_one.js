import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./body_part_one.css";

// Import your images
import bimg1 from "../../assets/headerBanner/imageOne.jpg";
import bimg2 from "../../assets/headerBanner/imageTwo.jpg";
import bimg3 from "../../assets/headerBanner/imageThree.jpg";
import bimg4 from "../../assets/headerBanner/imageFour.jpg";

// Add more images to match your design
const images = [bimg3, bimg1, bimg2, bimg4];

function Body() {
  return (
    <div className="hero-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false, // Keeps autoplay after user interaction
        }}
        className="hero-image"
        spaceBetween={0}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero-text">
        <h2>"YOU FEEL. I FOCUS. WE FRAME"</h2>
        <p>
          A wedding is a validation coupled with the showcase of love inclusive
          of <br />
          various events with exotic venues, food, guests, dresses, jewellery
          and so on — <br />
          What if it could never be recorded?
        </p>
        <p>
          A chronology of a couple's journey where they vow together to be{" "}
          <span className="highlight">One</span>.
        </p>
      </div>
    </div>
  );
}

export default Body;
