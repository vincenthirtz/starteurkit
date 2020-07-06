import React from "react";

const themes = {
  default: true,
  onepage: false,
};

// eslint-disable-next-line import/prefer-default-export
export const ThemeContext = React.createContext(themes);
