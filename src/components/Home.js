import React from "react";
import { Icon } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="gridwrapper">
        <div className="gridText">
          <h3> {t("For students and developers")}</h3>
          <p>{t("Do you need a ready to use project")}</p>
        </div>
        <Icon name="coffee" size="massive" className="gridIcon" />
      </div>
      <hr size="1" width="50%" />

      <div className="HomeArticle">
        <h3 className="question">{t("Why choose this kit among the others")}</h3>
        <p>{t("It does not pretend to be in the best")}</p>
      </div>
      <hr size="1" width="50%" />
      <div className="HomeArticle">
        <h3 className="question"> {t("Can we participate in the project")}</h3>
        <p>
          {t("Anyone can participate by offering pull requests")}
          <a href="https://discord.com/invite/9UuNaV"> Discord</a>.
        </p>
        <Icon name="heart" size="large" />
      </div>
    </>
  );
};

export default Home;
