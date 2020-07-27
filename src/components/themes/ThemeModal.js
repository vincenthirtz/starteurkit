import React, { useContext, useState } from "react";
import Home from "../Home";
import Footer from "../Layout/Footer";
import Contact from "../Contact";
import About from "../About/About";
import Features from "../Features";
import HeaderComponent from "../Layout/Header";
import "../../style/app.scss";
import { ColorThemeContext } from "../../ColorContext";
import Modal from "../modal";
import ModalHook from "../ModalHook";
import OutsideAlerter from "../Layout/menuWrapper";
import OpenMenuHook from "../customHook";

const Theme_Modal = () => {
  const color = useContext(ColorThemeContext);

  const [modalHook, setModalHook] = ModalHook.useModalHook();
  const [pageName, setPageName] = useState();

  const triggerModal = (page) => {
    setModalHook(!modalHook);
    setPageName(page);
  };

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
          <a href="#homeOne" onClick={() => triggerModal(<Home />)}>
            Presentation
          </a>
          <a href="#featuresOne" onClick={() => triggerModal(<Features />)}>
            Features
          </a>
          <a href="#aboutOne" onClick={() => triggerModal(<About />)}>
            About
          </a>
          <a href="#contactOne" onClick={() => triggerModal(<Contact />)}>
            Contact
          </a>
        </ul>
      </OutsideAlerter>

      <div>
        <div>
          <div className={`${color} headerHome `}>
            <HeaderComponent />
          </div>
        </div>
        <Footer />
      </div>
      {modalHook && <Modal> {pageName} </Modal>}
    </>
  );
};
export default Theme_Modal;
