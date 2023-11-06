import React from "react";
import "./Hero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import banner2 from "../dtl_img_797.png";
const Hero = () => {
  return (
    <div className="carousel slide" id="slider" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://i.pinimg.com/originals/8b/77/88/8b778878009d2fef34e458d42fcf9570.jpg"
            alt="banner-1"
            className="d-block w-100 car-img img-fluid"
          />
        </div>
        <div className="carousel-item">
          <img
            src={banner2}
            alt="banner-2"
            className="d-block w-100 car-img img-fluid"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://pbs.twimg.com/media/C-UlTfBXcAA_9kD.jpg"
            alt="banner-3"
            className="d-block w-100 car-img img-fluid"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#slider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#slider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Hero;
