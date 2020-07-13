import React, { useContext } from "react";
import PropTypes from "prop-types";
import ThemeOnePage from "../themes/ThemeOnePage";
import ThemeHorizontal from "../themes/ThemeHorizontal";
import ThemeDefault from "../themes/ThemeDefault";
import "../../style/app.scss";
import { ThemeContext } from "../../context";

const Layout = (props) => {
  const { children } = props;
  const theme = useContext(ThemeContext);

  const switchTheme = (child) => {
    switch (theme) {
      case "default":
        return <ThemeDefault>{child}</ThemeDefault>;
      case "horizontal":
        return <ThemeHorizontal />;
      case "onepage":
        return <ThemeOnePage />;
      default:
        return null;
    }
  };

  return switchTheme(children);
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
