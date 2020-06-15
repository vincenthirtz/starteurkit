import React from "react";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../style/home.scss";

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Sidebar>{children}</Sidebar>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
