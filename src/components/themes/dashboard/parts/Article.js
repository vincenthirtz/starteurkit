import React from "react";
import PropTypes from "prop-types";
// import { getWorkingPath } from "hookrouter";

const Article = (props) => {
  const {
    optionsArticle,
    // articleStuff
  } = props;
  const { children } = optionsArticle;
  return (
    <div
      // articleStuff={articleStuff}
      style={{ height: "100%", overflow: "auto", overflowX: "hidden" }}
    >
      {children}
    </div>
  );
};

export default Article;

Article.propTypes = {
  optionsArticle: PropTypes.shape({ children: PropTypes.node }).isRequired,
  // articleStuff:PropTypes.a
};
