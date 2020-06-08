import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Header, Icon } from "semantic-ui-react";

const HeaderComponent = (props) => {
  const { mobile } = props;
  return (
    <Container text>
      <Header
        as="h1"
        content="Starte(u)rkit"
        inverted
        style={{
          fontSize: mobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: mobile ? "1.5em" : "3em",
        }}
      />
      <Header
        as="h2"
        content="React Starter Kit with Routing Hook, Parcel, Sass, Eslint, Prettier, Pre-commit Hook"
        inverted
        style={{
          fontSize: mobile ? "1.5em" : "1.7em",
          fontWeight: "normal",
          marginTop: mobile ? "0.5em" : "1.5em",
        }}
      />
      <Button primary size="huge">
        Github
        <Icon name="right arrow" />
      </Button>
    </Container>
  );
};

export default HeaderComponent;

HeaderComponent.propTypes = {
  mobile: PropTypes.bool.isRequired,
};
