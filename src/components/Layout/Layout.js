import React, { useContext } from "react";
import PropTypes from "prop-types";
import ThemeDashBoard from "../themes/ThemeDashBoard";
import ThemeOnePage from "../themes/ThemeOnePage";
import ThemeModal from "../themes/ThemeModal";
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
      case "modal":
        return <ThemeModal />;
      case "onepage":
        return <ThemeOnePage />;
      case "dashboard":
        return <ThemeDashBoard />;
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
