import React from "react";
import PropTypes from "prop-types";
import Container from "./Container";
import Footer from "./Footer";
import "../style/test.scss";

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
