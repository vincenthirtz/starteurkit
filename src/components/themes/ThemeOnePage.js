import React, { useContext } from "react";
import Footer from "../Layout/Footer";
import Contact from "../Contact";
import About from "../About/About";
import Features from "../Features";
import Home from "../Home";
import HeaderComponent from "../Layout/Header";
import "../../style/app.scss";
import { ColorThemeContext } from "../../ColorContext";

const Theme_OnePage = () => {
  const color = useContext(ColorThemeContext);

  return (
    <>
      <ul id="onePageMenu">
        <a href="#homeOne">Home</a>
        <a href="#featuresOne">Features</a>
        <a href="#aboutOne">About</a>
        <a href="#contactOne">Contact</a>
      </ul>
      <div className="scroll-container">
        <div className={`${color} headerHome `}>
          <a id="homeOne" />
          <HeaderComponent />
          <Home />
        </div>
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

export default Theme_OnePage;
