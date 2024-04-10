import React from "react";
import exce from "../../images/b2.png";
import "./Excellence.css";
import Footer from "../Footer";

function Excellence() {
  return (
    <div className="excel">
      <div className="i">
        <img src={exce} alt="images" className="exce" />
      </div>
      <Footer/>
    </div>
  );
}
export default Excellence;
