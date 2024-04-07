import React from 'react';
import "./Academic.css";
import image1 from "../../images/i1.PNG";
import image2 from "../../images/i2.PNG";
import image3 from "../../images/i3.PNG";
import image4 from "../../images/i4.PNG";

export default function Academic() {
  return (
    <div className="aca">
      <h1>Academic Partners</h1>
      <div className="image-container">
        <img src={image1} alt="Partner 1" />
        <img src={image2} alt="Partner 2" />
        <img src={image3} alt="Partner 3" />
        <img src={image4} alt="Partner 4" />
      </div>
    </div>
  );
}
