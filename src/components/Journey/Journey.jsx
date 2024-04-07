import i1 from "../../images/bk.jpg";
import click from "./Click";
import "./journey.css";
import ImageSlider from "./ImageSlider";
import React from "react";
import Quot from "./Quot";


export default function Journey() {
  return (
    <div>
      <div className="pose">
        <img src={i1} alt="hello" />
      </div>
      <div>
        <Quot />
      </div>  
      <>
      <div className="c">
        <ImageSlider images={click} />
      </div>
      </>
      <div className="foot1">
        <img src="logo.jpeg" alt="logo" class="logo1" />
        <p>&copy; 2024 Meck Teck Research Foundation.All rights Reserved</p>
      </div>
    </div>
  );
}
