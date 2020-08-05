import React from "react";
import PropTypes from "prop-types";
// import { getWorkingPath } from "hookrouter";

const Article = (props) => {
  const { optionsArticle } = props;
  const { children } = optionsArticle;

  return <div style={{ height: "100%", overflow: "auto" }}>{children}</div>;
};

export default Article;

Article.propTypes = {
  optionsArticle: PropTypes.shape({ children: PropTypes.node }).isRequired,
};
