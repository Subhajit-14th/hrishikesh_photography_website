import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./body_part_two.css";

// Import your images
import img1 from "../../assets/bodyCarosel/imageOne.jpg";
import img2 from "../../assets/bodyCarosel/imageTwo.jpg";
import img3 from "../../assets/bodyCarosel/imageThree.jpg";
import img4 from "../../assets/bodyCarosel/imageFour.jpg";
import img5 from "../../assets/bodyCarosel/imageFive.jpg";

// Add more images to match your design
const images = [img1, img2, img3, img4, img5];

function BodyPartTwo() {
  return (
    <div className="hero-container-part-two">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={0}
        slidesPerView={3} // Show 4 images at a time
        className="image-grid-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`img-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero-text">
        <h2>"YOU FEEL. I FOCUS. WE FRAME"</h2>
        <p>
          A wedding is a validation coupled with the showcase of love inclusive
          of various events with exotic venues, food, guests, dresses, jewellery
          and so on — What if it could never be recorded?
        </p>
        <p>
          A chronology of a couple's journey where they vow together to be{" "}
          <span className="highlight">One</span>.
        </p>
      </div>
    </div>
  );
}

export default BodyPartTwo;
