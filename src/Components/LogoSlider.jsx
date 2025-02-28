import React from "react";
import "./LogoSlider.css";
import sys from  "../Assets/sys.png";
import mba from  "../Assets/mba.png";


const logos = [
   sys,
   mba,
  "https://logos-world.net/wp-content/uploads/2021/08/Byjus-Logo.png",
  "https://softwarehorsepower.com/wp-content/uploads/2022/02/AuthBridge-logo.jpg",
  "https://ileadtaxacademy.in/wp-content/uploads/2021/06/new00001-1024x198.jpg",
  "https://storage.googleapis.com/msgsndr/n8F9VcVM0hakTsyzkaC3/media/66a4d0cd161e9210b353b226.png",
  "https://s3-us-west-2.amazonaws.com/issuewireassets/primg/153736/elefant-22147408000.png",
"https://cfw43.rabbitloader.xyz/eyJjIjp0cnVlLCJoIjoibWFzdGVybXlsaWZlZWR1LmNvbSIsInYiOjMzMzY5NjkzNzksImkiOiI1NTM1Y2JhYi0wZjk1LTRlY2EtZTNmOC1hODdiNjNhOTVmMDAifQ/wp-content/uploads/2022/08/logo-14.png",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4lO4GA4_UDh3hxhW_TpO2oLwPEEj6fzgCrA&s",
"https://storage.googleapis.com/msgsndr/n8F9VcVM0hakTsyzkaC3/media/678f7c245d20c834e47426dd.png",
"https://www.makeintern.com/admin/uploaded_files/employer_company_logo/9649403913a50fb44156c6d57dc8199157c932ca3.png",
"https://storage.googleapis.com/msgsndr/n8F9VcVM0hakTsyzkaC3/media/67adc392a0bb9a750d36b155.png",
"https://storage.googleapis.com/msgsndr/n8F9VcVM0hakTsyzkaC3/media/678f7c24141a59fec2b61c30.png",
"https://storage.googleapis.com/msgsndr/n8F9VcVM0hakTsyzkaC3/media/67adb662a0bb9ae08b36a65f.png",
];

const LogoSlider = () => {
  return (
    <div className="Lslider">
      <div className="Lslide-track">
        {logos.map((logo, index) => (
          <div className="Lslide" key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div className="Lslide" key={index + logos.length}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}

{logos.map((logo, index) => (
          <div className="Lslide" key={index + logos.length}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
