import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav">
      <h1> Dahiyaconsulting&trade;</h1>

      <div className="nav-link">
        <a href="#home">Home</a>
        <a href="#ser">Services</a>
        <a href="https://dahiyaconsulting.com/testimonials">Review</a>
        <a href="#ContactUs">Contact</a>
        </div>


        <i onClick={toggleMenu} className={`menu-icon ${menuOpen ? 'open' : ''} ri-menu-line`}>
          {menuOpen && (
            <span className="menu">
             <li> <a href="#home">Home</a> </li>
             <li>  <a href="#ser">Services</a></li>
             <li>  <a href="https://dahiyaconsulting.com/testimonials">Review</a> </li>
             <li>      <a href="#ContactUs">Contact</a></li>
            </span>
          )}
        </i>
    </div>
  );
}

export default Navbar;
