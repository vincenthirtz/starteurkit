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
    body: (optionsNav) => <Nav optionsNav={optionsNav} navStuff="un, deux, trois, quatre, cinq, six, sept" />,
  },
  {
    id: 2,
    code: "article",
    title: "Third",
    body: (options) => <Article optionsArticle={options} />,
  },

  {
    id: 3,
    code: "footer",
    title: "Fourth",
    body: (options) => <Footer optionsFooter={options} />,
  },
  {
    id: 4,
    code: "image-M",
    title: "Image",
    body: <img src="./rono" />,
  },
];
