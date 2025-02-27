import React from 'react';
import './ImageWithSlogan.css';
import globe from "../Assets/globebg.png"

const ImageWithSlogan = () => {
  return (
    
      <div className="container">
        <div className="image-container">
      <img src={globe} alt="Background" className="background-image" />
    </div>
    <div className="mission">
          <span>
          Our mission is to simplify sales and make it easy for businesses across the globe to grow by sharing a new method of selling. 
          </span>      </div>
      </div>
  );
};

export default ImageWithSlogan;
