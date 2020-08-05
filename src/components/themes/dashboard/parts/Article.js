import React from "react";
import PropTypes from "prop-types";
// import { getWorkingPath } from "hookrouter";

const Article = () => {
  // const { optionsArticle } = props;

  return <div>coucou Article</div>;
};

export default Article;

Article.propTypes = {
  optionsArticle: PropTypes.shape({ children: PropTypes.node }).isRequired,
};
