import React, { useContext, useState } from "react";
import { getWorkingPath } from "hookrouter";
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

const ThemeOnePage = (child) => {
  const color = useContext(ColorThemeContext);
  const [OpenMenu, setOpenMenu] = OpenMenuHook.useOpenMenu();
  const { children } = child;

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  const Default = (
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
      {showScroll && (
        <div className={`${color} chevronTopPage`} link="#haut_de_page" onClick={scrollTop}>
          <a href=""> {icon.ChevronTop()}</a>
        </div>
      )}
    </>
  );

  const render = getWorkingPath() === "/" ? Default : children;

  return render;
};

export default ThemeOnePage;
