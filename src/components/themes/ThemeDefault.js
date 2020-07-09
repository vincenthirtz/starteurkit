import React, { useContext } from "react";
import Sidebar from "../Layout/Sidebar";
import Footer from "../Layout/Footer";
import "../../style/onePageStyle/onePageStyle.scss";
import icon from "../icon";
import "../../style/app.scss";
import OpenMenuHook from "../customHook";
import { ColorThemeContext } from "../../ColorContext";

const Theme_Default = (child) => {
  const { children } = child;
  const [OpenMenu, setOpenMenu] = OpenMenuHook.useOpenMenu();
  const color = useContext(ColorThemeContext);

  return (
    <>
      <button type="button" className={`burgerMenu ${OpenMenu ? "open" : ""}`} onClick={() => setOpenMenu(!OpenMenu)}>
        <div>
          <span className={`${color} bun1`} />
          <span className={`${color} steak`} />
          <span className={`${color} bun2`} />
        </div>
      </button>
      <Sidebar>{children}</Sidebar>
      <div className={`${color} chevronHolder`} link="#haut_de_page">
        <a href="#topPage"> {icon.ChevronTop()}</a>
      </div>
      <Footer />
    </>
  );
};

export default Theme_Default;
