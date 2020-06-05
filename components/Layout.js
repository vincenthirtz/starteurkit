import React from "react";
import PropTypes from "prop-types";
import { Menu } from "semantic-ui-react";
import { navigate } from "hookrouter";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <div>
        <Menu vertical>
          <Menu.Item>
            <Menu.Header>Menu</Menu.Header>

            <Menu.Menu>
              <Menu.Item name="home" onClick={() => navigate("/")}>
                Home
              </Menu.Item>
              <Menu.Item name="about" onClick={() => navigate("/about")}>
                About
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </div>
      <div id="container">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
