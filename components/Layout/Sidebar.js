import React from "react";
import PropTypes from "prop-types";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { navigate, getWorkingPath } from "hookrouter";
import { Flag } from "semantic-ui-react";
import Header from "./Header";

const SidebarComponent = (props) => {
  const { children } = props;
  const { t } = useTranslation();

  const setLangFR = () => i18n.changeLanguage("fr-FR");

  const setLangEN = () => i18n.changeLanguage("en-US");

  return (
    <>
      <div className="headerHome">
        <div className="topMenu">
          <a onClick={() => navigate("/")} active={getWorkingPath() === "/"}>
            {t("Home")}
          </a>
          <a onClick={() => navigate("/features")} active={getWorkingPath() === "/features"}>
            {t("Features")}
          </a>
          <a onClick={() => navigate("/about")} active={getWorkingPath() === "/about"}>
            {t("About")}
          </a>
          <a onClick={() => navigate("/contact")} active={getWorkingPath() === "/contact"}>
            {t("Contact")}
          </a>
          <Flag name="france" onClick={setLangFR} />
          <Flag name="uk" onClick={setLangEN} />
        </div>
        {getWorkingPath() === "/" && <Header />}
      </div>
      <div>{children}</div>
    </>
  );
};

export default SidebarComponent;

SidebarComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
