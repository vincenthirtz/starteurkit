import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Icon } from "semantic-ui-react";

const HeaderComponent = () => {
  const { t } = useTranslation();
  return (
    <div className="presentationHolder">
      <div className="presentation">
        <h1>Starte(u)rkit</h1>
        <span className="s1">{t("Subtitle1")}</span>
        <span className="s2">{t("Subtitle2")}</span>
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
