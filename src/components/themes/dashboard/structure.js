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
    body: (optionsHeader) => (
      <Header
        optionsHeader={optionsHeader}
        headerTitle="Titre point comme"
        logo="https://img.aws.la-croix.com/2019/11/29/1201063416/17e-album-Renaud-sonne-comme-celui-sagesse_1_729_486.jpg"
      />
    ),
  },
  {
    id: 1,
    code: "nav",
    title: "Second",
    body: (optionsNav) => (
      <Nav
        optionsNav={optionsNav}
        navStuff={[
          { id: 1, name: "Home", route: "/" },
          { id: 2, name: "Contact", route: "/contact" },
        ]}
      />
    ),
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
    body: <img src="./rono" />,
  },
];
