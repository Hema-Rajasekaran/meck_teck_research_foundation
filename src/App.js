import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sample from "../src/components/Sample";
import Home from "./components/Home/Home";
import Image from "./components/Home/Image";
import Quote from "./components/Quote";
import Service from "./components/Service/Service";
import Journey from "./components/Journey/Journey";
import Navbar from "./components/navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Socialmedia from "./components/Socialmedia";
import Academic from "./components/Academic/Academic";
import Excellence from "./components/Excellence/Excellence";
import ValueAddedCourse from "./components/Service/ValueAddedCourse";
import Internship from "./components/Service/Internship";
import AcademicProjects from "./components/Service/AcademicProjects";
import RDConsultancy from "./components/Service/RDConsultancy";
import ProductDesign from "./components/Service/ProductDesign";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <Router>
      <Navbar onNavigate={handleNavigation} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sample />
              <Quote />
              <Home />
              <Image />
              {/* <Queris /> */}
              <Socialmedia />
              <Footer />
            </>
          }
        />
        <Route path="/service" element={<Service />} />
        <Route path="/excellence" element={<Excellence />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/poster" element={<ValueAddedCourse />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/academic-projects" element={<AcademicProjects />} />
        <Route path="/r-and-d-consultancy" element={<RDConsultancy />} />
        <Route path="/project-design" element={<ProductDesign />} />
      </Routes>
    </Router>
  );
};

export default App;
