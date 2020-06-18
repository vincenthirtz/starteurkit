import React, { useState } from "react";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../../style/app.scss";

const Layout = (props) => {
  const { children } = props;
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className={`burgerMenu ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
        <div>
          <span className="bun1" />
          <span className="steak" />
          <span className="bun2" />
        </div>
      </button>
      <Sidebar open={open}>{children}</Sidebar>

      <Footer />
    </>
  );
};
export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
