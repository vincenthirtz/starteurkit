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
      <ul id="onePageMenu">
        <a href="#featuresOne">Features</a>
        <a href="#aboutOne">About</a>
        <a href="#contactOne">Contact</a>
      </ul>
      <Home id="homeOne" />
      <div>
        <a id="featuresOne" />
        <Features />
      </div>
      <div>
        <a id="aboutOne" />
        <About />
      </div>
      <div>
        <a id="contactOne" />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default OnePage;
