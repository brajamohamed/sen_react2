import React from "react";
import "./Train.css";
const Train = () => {
  return (
    <div className="carousel" id="slider" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            id="train-hero"
            src="https://os-wordpress-media.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2022/04/13115352/Untitled-design-2022-04-13T115333.602.jpg"
            alt="banner1"
            className="d-block w-100 img-fluid"
          />
        </div>
        <div className="carousel-item">
          <img
            id="train-hero"
            src="https://beebom.com/wp-content/uploads/2022/04/redRail-app-released-ss-1.jpg?w=730&h=487&crop=1&quality=75"
            alt="banner2"
            className="d-block w-100 img-fluid"
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

export default Train;
