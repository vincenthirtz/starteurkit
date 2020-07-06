import React, { useContext } from "react";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Contact from "../Contact";
import About from "../About/About";
import Features from "../Features";
import Home from "../Home";
import "../../style/app.scss";
import OpenMenuHook from "../customHook";
import icon from "../icon";
import { ThemeContext } from "../../context";

const Layout = (props) => {
  const { children } = props;
  const [OpenMenu, setOpenMenu] = OpenMenuHook.useOpenMenu();
  const themes = useContext(ThemeContext);
  const RenderLayoutOnepage = (
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

  const RenderLayout = (
    <>
      <button type="button" className={`burgerMenu ${OpenMenu ? "open" : ""}`} onClick={() => setOpenMenu(!OpenMenu)}>
        <div>
          <span className="bun1" />
          <span className="steak" />
          <span className="bun2" />
        </div>
      </button>
      <Sidebar>{children}</Sidebar>
      <div className="chevronHolder" link="#haut_de_page">
        <a href="#topPage"> {icon.ChevronTop()}</a>
      </div>
      <Footer />
    </>
  );
  return themes.default ? RenderLayout : RenderLayoutOnepage;
};
export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
