import React from "react";
import { Carousel } from "antd";
import "./Carrousel.scss"
export default function Carrousel() {
  return (
    <Carousel autoplay>
      <div>
        <h3 className="slider-job">Company photo 1</h3>
      </div>
      <div>
        <h3 className="slider-job">Company photo 2</h3>
      </div>
      <div>
        <h3 className="slider-job">Company photo 3</h3>
      </div>
      <div>
        <h3 className="slider-job">Company photo 4</h3>
      </div>
    </Carousel>
  );
}
