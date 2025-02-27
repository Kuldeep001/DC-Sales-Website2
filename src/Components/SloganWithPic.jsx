import React from "react";
import "./SloganWithPic.css";
import sachin from "../Assets/Sachin dc.png";

const SloganWithPic = () => {
  return (
    <div className="slogan-with-image">
      <div className="para">
        <h1> Are you ready to Go Global?</h1>
        <li>
          Kick-start your journey with this power-packed 30min video on how to
          grow any coaching, consulting, or service business fast.
        </li>
       <li> <a href="https://dahiyaconsulting.com/apply"> Get Start Here</a></li>
      </div>

      <div className="image">
        <img className="img" src={sachin} alt="img" />
      </div>
    </div>
  );
};

export default SloganWithPic;
