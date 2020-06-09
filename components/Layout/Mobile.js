import React, { useState } from "react";
import PropTypes from "prop-types";
import { navigate, getWorkingPath } from "hookrouter";
import { Button, Container, Menu, Responsive, Segment, Sidebar, Icon } from "semantic-ui-react";
import Header from "./Header";

const MobileComponent = (props) => {
  const { children } = props;
  const [sidebarOpened, setSidebarOpened] = useState();
  const getWidth = () => {
    const isSSR = typeof window === "undefined";

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
  };

  return (
    <Responsive as={Sidebar.Pushable} getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
      <Sidebar
        as={Menu}
        animation="push"
        inverted
        onHide={() => setSidebarOpened(false)}
        vertical
        visible={sidebarOpened}
      >
        <Menu.Item as="a" onClick={() => navigate("/")} active={getWorkingPath() === "/"}>
          Home
        </Menu.Item>
        <Menu.Item as="a" onClick={() => navigate("/features")} active={getWorkingPath() === "/features"}>
          Features
        </Menu.Item>
        <Menu.Item as="a" onClick={() => navigate("/about")} active={getWorkingPath() === "/about"}>
          About
        </Menu.Item>
        <Menu.Item as="a" onClick={() => navigate("/contact")} active={getWorkingPath() === "/contact"}>
          Contact
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment inverted textAlign="center" style={{ minHeight: 350, padding: "1em 0em" }} vertical>
          <Container>
            <Menu inverted pointing secondary size="large">
              <Menu.Item onClick={() => setSidebarOpened(true)}>
                <Icon name="sidebar" />
              </Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted>
                  Log in
                </Button>
                <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Menu>
          </Container>
          <Header mobile />
        </Segment>

        {children}
      </Sidebar.Pusher>
    </Responsive>
  );
};

export default MobileComponent;

MobileComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
