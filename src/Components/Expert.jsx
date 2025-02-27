import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Expert.css';

const Expert= ({ imageSrc1, imageSrc2,imageSrc3,imageSrc4, heading, paragraph }) => (
  <div className="Ecard">
    <div className="Ecard-content">
    <div className="Ecarousel-section">


    <Carousel
            className="Expert-carousel"
            showThumbs={false}
            autoPlay
            interval={2500}
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showArrows={false}
          >
            <div>
        <img src={imageSrc1} alt="Sass" />
            </div>
            <div>
        <img src={imageSrc2} alt="Ed-Tech" />
            </div>
            <div>
        <img src={imageSrc3} alt="Ed-Tech" />
            </div>
            <div>
        <img src={imageSrc4} alt="Ed-Tech" />
            </div>
          </Carousel>

      </div>
      <div className="Etext-section">
        <h2>{heading}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  </div>
);

export default Expert;