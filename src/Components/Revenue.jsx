import React from 'react';
import './Revenue.css';

const Revenue = ({ mainHeading, mainParagraph, items }) => {
  return (
    
      <div className='revenue' id="ser" >
      <h1>{mainHeading}</h1>
      <p>{mainParagraph}</p>
      <div className='subrev'>
        {items.map((item, index) => (
          <div  className='subcon' key={index}>
            <img src={item.imgSrc} alt={item.heading}  />
            <h2>{item.heading}</h2>
            <p>{item.paragraph}</p>
            <a href={item.link} >Book Now</a>
          </div>
        ))}
      </div>
    </div>
  
  );
};

export default Revenue;