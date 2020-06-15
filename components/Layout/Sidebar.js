import React from "react";
import PropTypes from "prop-types";
import { navigate, getWorkingPath } from "hookrouter";
import Header from "./Header";

const SidebarComponent = (props) => {
  const { children } = props;

  return (
    <>
      <div className="headerHome">
        <div className="topMenu">
          <a onClick={() => navigate("/")} active={getWorkingPath() === "/"}>
            Home
          </a>
          <a onClick={() => navigate("/features")} active={getWorkingPath() === "/features"}>
            Features
          </a>
          <a onClick={() => navigate("/about")} active={getWorkingPath() === "/about"}>
            About
          </a>
          <a onClick={() => navigate("/contact")} active={getWorkingPath() === "/contact"}>
            Contact
          </a>
        </div>
        {getWorkingPath() === "/" && <Header />}
      </div>
      <div>{children}</div>
    </>
  );
};

export default SidebarComponent;

SidebarComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
