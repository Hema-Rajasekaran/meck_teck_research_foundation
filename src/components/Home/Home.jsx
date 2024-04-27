import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="overall">
      <div className="content">
        <h1>Client-Centric Company </h1>
      </div>
      <div className="para">
        <p>
          At{" "}
          <span>
            <b>Meck Teck Research Foundation</b>
            
          </span>{" "}
          was established in the year 2018.It was recognized by Ministry of Micro,Small & Medium Enterprises.Meck Teck Research Foundation is a startup company offering Workshop,Value added course,certification course,Seminar,Guest Lecture,Skill Development Course,Internship and Projects in the field of science and engineering under emerging technologies to make the students as industry ready person.
        </p><br/>
        <p>Meck Teck Research Foundation is furnished with advanced equipment's which can support the students to enhance their technical knowlegde and skill set in the emerging technology.Futhermore we are providing R & D Consultancy services in various domains to support the UG/PG/Ph.D Scholars/Faculty members in Scicence and Engineering Streams to carry out their project & Research work.</p>
      </div>

      <marquee
        className="Us"
        behavior="scroll"
        direction="left"
        scrollamount="15"
      >
        <p>"What sets us apart is our commitment to Innovation."</p>
      </marquee>
    </div>
  );
};

export default Home;
