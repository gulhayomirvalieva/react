import React from "react";
import "./Hero.css"
// import arrow_icon from "../assets/arrow_icon.png";
import hero_image from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEEW ARRIVALS ONLY</h2>
        <p>
          new 👋 <br />
          collections <br />
          for everyone
        </p>
        <div className="hero-latest-btn">
          <div>
            Last Collection <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
