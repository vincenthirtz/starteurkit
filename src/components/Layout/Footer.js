import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { navigate } from "hookrouter";
import { ColorThemeContext } from "../../ColorContext";

const Footer = () => {
  const { t } = useTranslation();
  const color = useContext(ColorThemeContext);

  return (
    <div className={`${color} footer`}>
      <div className={`${color} row`}>
        <h4 className={`${color}`}>{t("Social")} </h4>
        <ul>
          <a href="https://twitter.com/alukaard76">Twitter</a>
          <a href="https://github.com/vincenthirtz">Github</a>
          <a href="https://discord.gg/9UuNaV">Discord</a>
        </ul>
      </div>

      <div className={`${color} row`}>
        <h4 className={`${color}`}>{t("Fast")}</h4>
        <p>{t("Starting a project has never been easier")}</p>
      </div>

      <div className={`${color} row`}>
        <h4 className={`${color}`}>{t("Tech")}</h4>
        <ul>
          <a className={`${color} linkfooter`} href="https://reactjs.org/">
            React
          </a>
          <a className={`${color} linkfooter`} href="https://parceljs.org/">
            Parcel
          </a>
          <a className={`${color} linkfooter`} href="https://sass-lang.com/">
            Sass
          </a>
          <a className={`${color} linkfooter`} href="https://nodejs.org/">
            Node
          </a>
        </ul>
      </div>

      <div className={`${color} row`}>
        <h4 className={`${color}`}>{t("Simple")}</h4>
        <p>{t("Focus only on your application code")}</p>
      </div>
      <div className="row">
        <ul className={`${color}`}>
          <a className={`${color} linkfooter`} href="#">
            {t("Sitemap")}
          </a>
          <a className={`${color} linkfooter`} onClick={() => navigate("/contact")}>
            {t("Contact")}
          </a>
          <a className={`${color} linkfooter`} href="#">
            {t("Terms and Conditions")}
          </a>
          <a className={`${color} linkfooter`} s href="#">
            {t("Privacy Policy")}
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
