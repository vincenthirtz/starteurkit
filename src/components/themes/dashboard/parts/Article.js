import React from "react";
import PropTypes from "prop-types";

const Article = (props) => {
  const {
    optionsArticle,
    // articleStuff
  } = props;
  const { children } = optionsArticle;
  return (
    <div
      // articleStuff={articleStuff}
      style={{ height: "100%", overflow: "inherit", overflowX: "hidden" }}
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
