import React, { useContext } from "react";
import Footer from "../Layout/Footer";
import Contact from "../Contact";
import About from "../About/About";
import Features from "../Features";
import Home from "../Home";
import HeaderComponent from "../Layout/Header";
import "../../style/app.scss";
import { ColorThemeContext } from "../../ColorContext";
import OpenMenuHook from "../customHook";
import OutsideAlerter from "../Layout/menuWrapper";
import icon from "../icon";

const Theme_OnePage = () => {
  const color = useContext(ColorThemeContext);
  const [OpenMenu, setOpenMenu] = OpenMenuHook.useOpenMenu();

  return (
    <>
      <OutsideAlerter>
        <button type="button" className={`burgerMenu ${OpenMenu ? "open" : ""}`} onClick={() => setOpenMenu(!OpenMenu)}>
          <div>
            <span className={`${color} bun1`} />
            <span className={`${color} steak`} />
            <span className={`${color} bun2`} />
          </div>
        </button>
        <ul className={`topMenu ${OpenMenu ? "" : "hidden"}`}>
          <a href="#topPage" style={{ width: "10px" }} className="menuTopArrow">
            {icon.ChevronTop()}
          </a>
          <a href="#homeOne">Home</a>
          <a href="#featuresOne">Features</a>
          <a href="#aboutOne">About</a>
          <a href="#contactOne">Contact</a>
        </ul>
      </OutsideAlerter>
      <div className="scroll-container">
        <div className={`${color} headerHome `}>
          <HeaderComponent />
          <a id="homeOne" />
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
