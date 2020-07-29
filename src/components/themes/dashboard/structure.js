import React from "react";
import Header from "./parts/Header"
import Footer from "./parts/Footer"
import Nav from "./parts/Nav"
import Article from "./parts/Article"

export const structure = [
    {
        "id": 0,
        "code": "header",
        "title": "First",
        "body": (options) => <Header options={options} headerTitle="oui le titre" logo="https://img.aws.la-croix.com/2019/11/29/1201063416/17e-album-Renaud-sonne-comme-celui-sagesse_1_729_486.jpg" />,
    },
    {
        "id": 1,
        "code": "nav",
        "title": "Second",
        "body": (options) => <Nav options={options} navStuff= "un, deux, trois" />
    },
    {
        "id": 2,
        "code": "article",
        "title": "Third",
        "body": (options) => <Article options={options} />
    },

    {
        "id": 3,
        "code": "footer",
        "title": "Fourth",
        "body": (options) => <Footer options={options} />
    },
    {
        "id": 4,
        "code": "image-M",
        "title": "Image",
        "body": <img src="./rono" />,
    },
]