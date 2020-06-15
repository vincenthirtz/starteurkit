import React from "react";
import { Button, Icon } from "semantic-ui-react";

const HeaderComponent = () => {
  return (
    <div className="presentationHolder">
      <div className="presentation">
        <h1>Starte(u)rkit</h1>
        <span className="s1">React Starter Kit with:</span>
        <span className="s2">Routing Hook, Parcel, Sass, Eslint, Prettier, Pre-commit Hook</span>
      </div>
      <div className="homeLogo">
        <Icon className="icon" name="react" size="huge" />
        <Icon className="icon" name="sass" size="huge" />
        <Icon className="icon" name="node" size="huge" />
        <Icon className="icon" name="npm" size="huge" />
        <Icon className="icon" name="github" size="huge" />
      </div>
      <Button primary size="huge" onClick={() => window.open("https://github.com/vincenthirtz/starteurkit")}>
        Github
        <Icon name="right arrow" />
      </Button>
    </div>
  );
};

export default HeaderComponent;
