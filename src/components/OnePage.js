import React from "react";
import Home from "./Home";
import Features from "./Features";
import Contact from "./Contact";
import About from "./About/About";
import Footer from "./Layout/Footer";

const OnePage = () => {
  return (
    <>
      <a href="#contactOne">Contact</a>
      <>
        <Home id="homeOne" />
        <Features id="featuresOne" />
        <About id="aboutOne" />

        <Contact />
        <Footer />
        <a id="contactOne">pef</a>
      </>
    </>
  );
};

export default OnePage;
