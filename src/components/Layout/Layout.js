import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../../context";
import ThemeOnePage from "../themes/ThemeOnePage";
import ThemeDefault from "../themes/ThemeDefault";

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
