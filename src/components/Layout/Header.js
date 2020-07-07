import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "semantic-ui-react";
import { ColorThemeContext } from "../../ColorContext";

const HeaderComponent = () => {
  const { t } = useTranslation();
  const color = useContext(ColorThemeContext);
  return (
    <div className={`${color} presentationHolder`}>
      <div className={`${color} presentation`}>
        <h1 className={`${color}`}>Starte(u)rkit</h1>
        <span className={`${color} s1`}>{t("Subtitle1")}</span>
        <span className={`${color} s2`}>
          {t("Pre_commit_Hook")}, {t("Routing_Hook")}, {t("Prettier")}, {t("Eslint")}, {t("Parcel")}, {t("Sass")}
        </span>
      </div>
      <div className={`${color} homeLogo`}>
        <Icon className={`${color} icon`} name="react" size="huge" />
        <Icon className={`${color} icon`} name="sass" size="huge" />
        <Icon className={`${color} icon`} name="node" size="huge" />
        <Icon className={`${color} icon`} name="npm" size="huge" />
        <Icon className={`${color} icon`} name="github" size="huge" />
      </div>
    </div>
  );
};

export default HeaderComponent;
