import React from "react";
import Header from "./parts/Header";
import Footer from "./parts/Footer";
import Nav from "./parts/Nav";
import Article from "./parts/Article";

// eslint-disable-next-line import/prefer-default-export
export const structure = [
  {
    id: 0,
    code: "header",
    title: "First",
    body: (optionsHeader) => <Header optionsHeader={optionsHeader} />,
  },
  {
    id: 1,
    code: "nav",
    title: "Second",
    body: (optionsNav) => <Nav optionsNav={optionsNav} />,
  },
  {
    id: 2,
    code: "article",
    title: "Third",
    body: (optionsArticle) => <Article optionsArticle={optionsArticle} />,
  },
  {
    id: 3,
    code: "footer",
    title: "Fourth",
    body: (optionsFooter) => <Footer optionsFooter={optionsFooter} />,
  },
  {
    id: 4,
    code: "image-M",
    title: "Image",
    body: "prout",
  },
];
