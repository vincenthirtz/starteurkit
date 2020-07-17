import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { navigate, getWorkingPath } from "hookrouter";
import Header from "./Header";
import OutsideAlerter from "./menuWrapper";
import icon from "../icon";
import { ColorThemeContext } from "../../ColorContext";
import OpenMenuHook from "../customHook";

const SidebarComponent = (props) => {
  const { children } = props;
  const { t } = useTranslation();
  const [hasChange, setHasChange] = useState(false);

  const setOnClick = () => {
    setHasChange(true);
  }

  useEffect(() => {
    setHasChange(false);
  }, [hasChange])

  const setLangFR = () => i18n.changeLanguage("fr-FR");

  const setLangEN = () => i18n.changeLanguage("en-US");
  const color = useContext(ColorThemeContext);

  const [OpenMenu] = OpenMenuHook.useOpenMenu();
  return (
    <>
      <div className={`${color} headerHome`}>
        <OutsideAlerter>
          <div className={`topMenu ${OpenMenu ? "" : "hidden"}`}>
            <a onClick={() => {navigate("/"); setOnClick()}} active={getWorkingPath() === "/"}>
              {t("Home")}
            </a>
            <a onClick={() => {navigate("/features"); setOnClick()}} active={getWorkingPath() === "/features"}>
              {t("Features")}
            </a>
            <a onClick={() => {navigate("/about"); setOnClick()}} active={getWorkingPath() === "/about"}>
              {t("About")}
            </a>
            <a onClick={() => {navigate("/contact"); setOnClick()}} active={getWorkingPath() === "/contact"}>
              {t("Contact")}
            </a>
          </div>
        </OutsideAlerter>
        {getWorkingPath() === "/" && <Header />}
      </div>
      <div className="sidebar">{children}</div>
      <div className="flags">
        <span onClick={setLangFR}>{icon.IconFrance()}</span>
        <span onClick={setLangEN}>{icon.IconUnitedKingdom()}</span>
      </div>
    </>
  );
};

export default SidebarComponent;

SidebarComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
