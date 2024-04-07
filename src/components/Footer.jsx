import React from "react";
import "./Footer.css";
import Img from "../../src//images/fav.jpeg"

const Footer = () => {
  return (
    <footer className="fotnav">
      <img src="logo.jpeg" alt="logo" class="logo1" />
      <p>&copy; 2024 Meck Teck Reserch Foundation.All rights Reserved</p>
      <img src={Img} alt="Img"/>
    </footer>
  );
};
export default Footer;
