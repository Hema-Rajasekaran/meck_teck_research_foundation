import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ onNavigate }) => {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const [showSubMenu, setShowSubMenu] = useState(false);

  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const handleNavigate = (page) => {
    onNavigate(page);
    setShowSubMenu(false); // Close submenu when navigating
  };

  return (
    <nav className="nav">
      <img src="favicon1.jpeg" alt="logo" className="logo" />
      <a href="#" className="nav__brand">
        MECK TECK RESEARCH FOUNDATION
      </a>
      <br></br>
      {/* <p className="nav__udyam">( Registered Under Ministry of Micro,Small and Medium Enterprises UDYAM-TN-17-00-157761 )</p> */}
      <img src="logo.jpeg" alt="logo" className="logo" />
      
      <ul className={active}>
        <li className="nav__item">
          <Link to="/" className="nav__link" onClick={() => onNavigate("home")}>
            Home
          </Link>
        </li>
        <li className="nav__item nav__services" onMouseEnter={toggleSubMenu} onMouseLeave={toggleSubMenu}>
          <Link to="service" className="nav__link" onClick={() => onNavigate("service")}>
            Services
          </Link>
          {showSubMenu && (
            <ul className="nav__submenu">
              <li>
                <Link to="/value-added-course" onClick={() => handleNavigate("value-added-course")}>
                  Value Added Course
                </Link>
              </li>
              <li>
                <Link to="/workshop" onClick={() => handleNavigate("workshop")}>
                  Workshop
                </Link>
              </li>
              <li>
                <Link to="/internship" onClick={() => handleNavigate("internship")}>
                  Internship
                </Link>
              </li>
              <li>
                <Link to="/r-and-d" onClick={() => handleNavigate("r-and-d")}>
                  R & D Consultancy Services
                </Link>
              </li>
              <li>
                <Link to="/academic-projects" onClick={() => handleNavigate("academic-projects")}>
                  Academic Projects
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="nav__item">
          <Link to="/excellence" className="nav__link" onClick={() => onNavigate("excellence")}>
            COE/ISL
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/journey" className="nav__link" onClick={() => onNavigate("journey")}>
            Gallery
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/academic" className="nav__link" onClick={() => onNavigate("academic")}>
            Academic Partners
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contact" className="nav__link" onClick={() => onNavigate("contact")}>
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
