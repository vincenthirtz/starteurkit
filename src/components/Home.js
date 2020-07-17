import React, { useContext } from "react";
import { Icon } from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import AnimationTest from "./animations/coffeDrift";
import { ColorThemeContext } from "../ColorContext";
import {ThemeContext} from "../context";


const Home = () => {
  const { t } = useTranslation();
  const color = useContext(ColorThemeContext);
  const theme = useContext(ThemeContext);

  return (
    <div className={`${color} articles ${theme}`}>
      <div>
        <div className={`${color} HomeArticle`} id="coffee">
          <h3 className={`${color} question`}> {t("For students and developers")}</h3>
          <p>{t("Do you need a ready to use project")}</p>
          <AnimationTest />
        </div>
      </div>
      <hr size="1" width="50%" />

      <div className={`${color} HomeArticle`}>
        <h3 className={`${color} question`}>{t("Why choose this kit among the others")}</h3>
        <p className={`${color} homeP`}> {t("It does not pretend to be in the best")}</p>
      </div>
      <hr size="1" width="50%" />
      <div className={`${color} HomeArticle`}>
        <h3 className={`${color} question`}> {t("Can we participate in the project")}</h3>
        <p className={`${color} homeP`}>
          {t("Anyone can participate by offering pull requests")}
          <a className={`${color} discordLink`} href="https://discord.com/invite/9UuNaV"> Discord</a>.
        </p>
        <Icon name="heart" size="large" />
      </div>
    </div>
  );
};

export default Home;
