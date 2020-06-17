import React, { useState } from "react";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../../style/app.scss";
import BurgerIcon from "../../img/icon";

const Layout = (props) => {
  const { children } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className="burgerMenu" onClick={() => setOpen(!open)}>
        koukou2
      </button>
      <BurgerIcon className="sandwich" onClick={() => setOpen(!open)} />
      <Sidebar open={open}>{children}</Sidebar>

      <Footer />
    </>
  );
};
export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
