import React, { useContext } from "react";
import PropTypes from "prop-types";
import ThemeOnePage from "../themes/ThemeOnePage";
import ThemeDefault from "../themes/ThemeDefault";
import "../../style/app.scss";
import { ThemeContext } from "../../context";

const Layout = (props) => {
  const { children } = props;
  const theme = useContext(ThemeContext);

  const switchTime = (child) => {
    switch (theme) {
      case "default":
        return <ThemeDefault>{child}</ThemeDefault>;
      case "onepage":
        return <ThemeOnePage />;
      default:
        return null;
    }
  };

  return switchTime(children);
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
