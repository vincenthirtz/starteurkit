import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import icon from "./icon";
import { ThemeContext } from "../context";

const Features = () => {
  const theme = useContext(ThemeContext);
  const windowWidth = window.innerWidth;
  const [gridClass, setgridClass] = useState("");

  useEffect(() => {
    if (windowWidth > 800) {
      setgridClass("gridWrap");
    } else {
      setgridClass("");
    }
  }, [windowWidth]);

  const { t } = useTranslation();

  return (
    <div className={`featureWrap articles ${theme}`}>
      <h3 className="sectionTitle">{t("Features")}</h3>
      <div className={`${gridClass}`}>
        <div className="article">
          {icon.IconResponsive()}
          <div className="textOlder">
            <h4>{t("Responsive")}</h4>
            <p>{t("ResponsiveDescription")}</p>
          </div>
        </div>

        <div className="article">
          {icon.IconFast()}
          <div className="textOlder">
            <h4>{t("Fast")}</h4>
            <p>{t("FastDescription")}</p>
          </div>
        </div>

        <div className="article">
          {icon.IconEdit()}
          <div className="textOlder">
            <h4>{t("Customizable")}</h4>
            <p>{t("CustomizableDescription")}</p>
          </div>
        </div>

        <div className="article">
          {icon.IconInternational()}
          <div className="textOlder">
            <h4>{t("Internationalization")}</h4>
            <p>{t("InternationalizationDescription")}</p>
          </div>
        </div>

        <div className="article">
          {icon.IconUniversal()}
          <div className="textOlder">
            <h4>{t("UniversalAccess")}</h4>
            <p>{t("UniversalAccessDescription")}</p>
          </div>
        </div>

        <div className="article">
          {icon.IconReady()}
          <div className="textOlder">
            <h4>{t("ReadyToUse")}</h4>
            <p>{t("ReadyToUseDescription")}</p>
          </div>
        </div>

        <div className="article bot">
          {icon.IconExport()}
          <div className="textOlder">
            <h4>{t("Exportable")}</h4>
            <p>{t("ExportableDescription")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
