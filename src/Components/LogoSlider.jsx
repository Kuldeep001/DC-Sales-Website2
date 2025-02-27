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
  "https://media.licdn.com/dms/image/D4D3DAQHDUQumbztRaw/image-scale_191_1128/0/1692983952816/netizen_media_cover?e=2147483647&v=beta&t=Y7qkxwWKsQCNYbLTO4Fp8J_Ed9cHVa6dwOCf4lZCCuk",
"https://cfw43.rabbitloader.xyz/eyJjIjp0cnVlLCJoIjoibWFzdGVybXlsaWZlZWR1LmNvbSIsInYiOjMzMzY5NjkzNzksImkiOiI1NTM1Y2JhYi0wZjk1LTRlY2EtZTNmOC1hODdiNjNhOTVmMDAifQ/wp-content/uploads/2022/08/logo-14.png",
"https://careermatrix.in/wp-content/uploads/2024/03/cropped-301677264_472949398183228_1970368898841118067_n.jpg",
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
