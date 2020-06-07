import React, { useState } from "react";
import PropTypes from "prop-types";
import { navigate, getWorkingPath } from "hookrouter";
import { Button, Container, Menu, Responsive, Segment, Visibility } from "semantic-ui-react";
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
        <Segment inverted textAlign="center" style={{ minHeight: getWorkingPath() === "/" ? 700 : 0, padding: "1em 0em", marginBottom: "20px" }} vertical>
          <Menu fixed={fixed ? "top" : null} inverted={!fixed} pointing={!fixed} secondary={!fixed} size="large">
            <Container>
              <Menu.Item as="a" onClick={() => navigate("/")} active={getWorkingPath() === "/"}>
                Home
              </Menu.Item>
              <Menu.Item as="a" onClick={() => navigate("/features")} active={getWorkingPath() === "/features"}>Features</Menu.Item>
              <Menu.Item as="a"  onClick={() => navigate("/docs")} active={getWorkingPath() === "/docs"}>Docs</Menu.Item>
              <Menu.Item as="a" onClick={() => navigate("/about")} active={getWorkingPath() === "/about"}>
                About
              </Menu.Item>
              <Menu.Item as="a" onClick={() => navigate("/contact")} active={getWorkingPath() === "/contact"}>
                Contact
              </Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted={!fixed}>
                  Log in
                </Button>
                <Button as="a" inverted={!fixed} primary={fixed} style={{ marginLeft: "0.5em" }}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
         {getWorkingPath() === "/" &&  <Header />}
        </Segment>
      </Visibility>

      {children}
    </Responsive>
  );
};

export default SidebarComponent;

SidebarComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
