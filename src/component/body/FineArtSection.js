import React from "react";
import "./fine_art_section.css";
import bgImage from "../../assets/footerImg/IMG_4455.jpeg.jpg";

function FineArtSection() {
  return (
    <div className="fine-art-section">
      <div
        className="fine-art-background"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="fine-art-overlay">
          <div className="fine-art-text">
            <h1>
              <span className="fine">FINE</span>{" "}
              <span className="art">ART CLASS</span>
            </h1>
            <p>
              Ibtida is our finest offering with fine-art editorial style
              photography led by Siddharth Sharma, founder of House On The
              Clouds. The essence of Ibtida is to create photographs that stand
              the test of time. The classic, non-intrusive approach of
              documenting the most important day of your life with bright and
              airy images that take you back in time. This is an exclusive
              package which we offer to selected weddings only and we believe
              this deserves a website of its own. Click below to visit Ibtida.Co
            </p>
            <button>Visit Ibtida.Co</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FineArtSection;
