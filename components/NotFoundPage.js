import React from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return <div>{t("404")}</div>;
};

export default NotFound;
