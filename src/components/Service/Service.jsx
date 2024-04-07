import React from "react";
import Textblock from "./Textblock";
import Imageslider from "./Imageslider";
import "./service.css";
import Inn from "../../images/clear.jpg";
import imageUrls from "./imageUrls";
import Autoscroll from "./Autoscroll";
import Ino from "../../images/ser.PNG";
import Cap from "../../images/Cap.PNG";

export default function Service() {
  return (
    <div>
      <Autoscroll />
      <div className="ink">
        <img src={Inn} alt="this" className="in1" />
        <div className="app-containe">
          <Textblock />
          <Imageslider images={imageUrls} />
        </div>
        <div className="ink2">
          <img src={Ino} alt="hi" className="in1" />
          <img src={Cap} alt="logo2" />
        </div>
        <div className="foot">
          <img src="logo.jpeg" alt="logo" class="logo1" />
          <p>&copy; 2024 Meck Teck Research Foundation.All rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
