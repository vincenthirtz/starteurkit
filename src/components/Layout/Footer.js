import React from "react";
import { useTranslation } from "react-i18next";
import { navigate } from "hookrouter";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="row">
        <h4>{t("Social")} </h4>
        <ul>
          <a href="https://twitter.com/alukaard76">Twitter</a>
          <a href="https://github.com/vincenthirtz">Github</a>
          <a href="https://discord.gg/9UuNaV">Discord</a>
        </ul>
      </div>

      <div className="row">
        <h4>{t("Fast")}</h4>
        <p>{t("Starting a project has never been easier")}</p>
      </div>

      <div className="row">
        <h4>{t("Tech")}</h4>
        <ul>
          <a href="https://reactjs.org/">React</a>
          <a href="https://parceljs.org/">Parcel</a>
          <a href="https://sass-lang.com/">Sass</a>
          <a href="https://nodejs.org/">Node</a>
        </ul>
      </div>

      <div className="row">
        <h4>{t("Simple")}</h4>
        <p>{t("Focus only on your application code")}</p>
      </div>
      <div className="row bot">
        <ul>
          <a href="#">{t("Sitemap")}</a>
          <a onClick={() => navigate("/contact")}>{t("Contact")}</a>
          <a href="#">{t("Terms and Conditions")}</a>
          <a href="#">{t("Privacy Policy")}</a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
