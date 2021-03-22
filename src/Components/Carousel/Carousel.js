import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
    <div>
      <img src={require("../../photos/Xcarousel2.jpg")} alt="Dog1" />
    </div>
    <div>
      <img src={require("../../photos/Xcarousel1.jpg")} alt="Dog2" />
    </div>
    <div>
      <img src={require("../../photos/Xcarousel3.jpg")} alt="Dog2" />
    </div>
  </Carousel>
);
