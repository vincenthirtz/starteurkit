import React from "react";
import Home from "./Home";
import Features from "./Features";
import Contact from "./Contact";
import About from "./About/About";
import Footer from "./Layout/Footer";
import "../style/app.scss";

const OnePage = () => {
  return (
    <>
      <div className="scroll-container">
        <ul id="onePageMenu">
          <a href="#homeOne">Home</a>
          <a href="#featuresOne">Features</a>
          <a href="#aboutOne">About</a>
          <a href="#contactOne">Contact</a>
        </ul>
        <a id="homeOne" />
        <Home />
        <a id="featuresOne" />
        <Features />
        <a id="aboutOne" />
        <About />
        <a id="contactOne" />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default OnePage;
