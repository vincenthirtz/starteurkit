import React from "react";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../../style/app.scss";
import OpenMenuHook from "../customHook";
import icon from "../icon";

const Layout = (props) => {
  const { children } = props;
  const [OpenMenu, setOpenMenu] = OpenMenuHook.useOpenMenu();
  return (
    <>
      <span id="haut_de_page" />
      <button type="button" className={`burgerMenu ${OpenMenu ? "open" : ""}`} onClick={() => setOpenMenu(!OpenMenu)}>
        <div>
          <span className="bun1" />
          <span className="steak" />
          <span className="bun2" />
        </div>
      </button>
      <Sidebar>
        <div className="chevronHolder">
          <a className="travelTop" href="#haut_de_page">
            {" "}
            {icon.ChevronTop()}
          </a>
        </div>
        {children}
      </Sidebar>
      <Footer />
    </>
  );
};
export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
