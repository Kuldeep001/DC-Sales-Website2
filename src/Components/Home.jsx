import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import video from "../videos/video.mp4";


function Home() {
  return (
    <div className="homepage" id="home">
     <div className="bg-clip">
     <video className="video" autoPlay loop muted   plays-inline="true" >
        <source src={video} type="video/mp4" />
      </video>
    
     </div>
     <div className="left-side">
        <h2> The DC Way of <span> Selling</span> will help you to,</h2>

        <div className="lsc">
          <Carousel
            className="Hcarousel"
            showThumbs={false}
            autoPlay
            interval={2500}
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showArrows={false}
          >
            <div>
              <h1>Sell Better</h1>
            </div>
            <div>
              <h1>Scale Better</h1>
            </div>
            <div>
              <h1>Earn Profits</h1>
            </div>
          </Carousel>
        </div>
        <div className="lsa">
          <a href="https://dahiyaconsulting.com/apply"> Get Start Here</a>
        </div>
      </div>

      {/* <div className="right-side">
        <a  href="https://dahiyaconsulting.com/apply">Book now</a>
      </div> */}
    

    </div>
  );
}

export default Home;
