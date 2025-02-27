import React from "react";
import "./Rating.css";
import reward from "../Assets/reward.png";
import dollar from "../Assets/dollar.png";
import done from "../Assets/done.png";

function Rating() {
  return (
  
      <div className="rating">
        <div className="ratinga">
        <h1>Our Rating</h1>
        </div>
        <div className="ratings">
          <div className="rating-item">
            <img src={reward} alt="reward" />
            <h3>Rating</h3>
            <p>4.3/5 on Trustpilot</p>
          </div>

          <div className="rating-item">
            <img src={dollar} alt="reward" />
            <h3>  &#8377; 2,00,00,000</h3>
            <p> Total sales revenue for our clients we did in last 12 months</p>
          </div>

          <div className="rating-item">
            <img src={done} alt="reward" />
            <h3>43% </h3>
            <p> Minimum Increase in sales in 30 days</p>
          </div>
        </div>
      </div>
    
  );
}

export default Rating;
