import React, { useState } from "react";
import PropTypes from "prop-types";
import { navigate, getWorkingPath } from "hookrouter";
import { Responsive, Segment, Visibility } from "semantic-ui-react";
import Header from "./Header";

const SidebarComponent = (props) => {
  const { children } = props;
  const [fixed, setFixed] = useState();
  const getWidth = () => {
    const isSSR = typeof window === "undefined";

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
  };

  const setSidebar = () => setFixed(!fixed);

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility once={false} onBottomPassed={setSidebar} onBottomPassedReverse={setSidebar}>
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: getWorkingPath() === "/" ? 700 : 0, padding: "1em 0em", marginBottom: "20px" }}
          vertical
        >
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
        </Segment>
      </Visibility>
      <div style={{ minHeight: getWorkingPath() !== "/" && 700 }}>{children}</div>
    </Responsive>
  );
};

export default SidebarComponent;

SidebarComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
