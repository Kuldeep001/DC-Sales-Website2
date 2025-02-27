import React from 'react';
import './Card.css';

const Card = ({ imageSrc, heading, paragraph, linkText, linkHref }) => (
  <div className="card">
  <div className="card-content">
  <div className="image-section">
      <img src={imageSrc} alt={heading} />
    </div>
    <div className="text-section">
      <h2>{heading}</h2>
      <p>{paragraph}</p>
      <a href={linkHref} className="card-link">{linkText}</a>
    </div>
  </div>
</div>
);

export default Card;