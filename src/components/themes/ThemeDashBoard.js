/* eslint-disable no-lone-blocks */
import React, { useEffect, useRef } from "react";
import "./dashboard/Theme.css";
import { structure } from "./dashboard/structure";
import SubMenuOpen from "../subMenuCustom";
import CofeeCup from "../../img/cofee.png";

const ThemeDashBoard = (child) => {
  const { children } = child;
  const refButton = useRef();
  const Header = structure.find((dash) => dash.code === "header");
  const Footer = structure.find((dash) => dash.code === "footer");
  const Article = structure.find((dash) => dash.code === "article");
  const Nav = structure.find((dash) => dash.code === "nav");
  const optionsHeader = {
    align: "left",
    colorGeneral: "#ffffff",
    reference: refButton,
    imageHeader: CofeeCup,
    headerTitle: "Titre point comme",
  };
  const optionsNav = {
    align: "center",
    reference: refButton,
    menu: [
      { id: 1, name: "Home", route: "/" },
      { id: 2, name: "Contact", route: "/contact" },
    ],
  };
  const optionsArticle = {
    children,
  };
  const wrapOption = { align: "center" };
  const [openMenuGreen] = SubMenuOpen.useSubMenuOpen();

  let navWrapStyle = {};
  let articleWrapStyle = {};
  const actualWidth = window.screen.availWidth;

  if (actualWidth <= 420) {
    wrapOption.align = "mobile";
  }

  switch (wrapOption.align) {
    case "mobile":
      {
        navWrapStyle = {
          gridColumn: "1/ 4",
          gridRow: "1",
          backgroundColor: "#0f1635",
        };
        articleWrapStyle = {
          gridColumn: " 1 /4",
          gridRow: "1/span 3",
          height: "100%",
        };
      }
      break;
    case "left":
      navWrapStyle = {
        gridColumn: "1/2",
        gridRow: "1/span 3",
        backgroundColor: "#0f1635",
      };
      articleWrapStyle = {
        gridColumn: " 2/4",
        gridRow: "1/span 3",
        height: "100%",
      };
      break;
    case "center":
      navWrapStyle = {
        gridColumn: "1/4",
        gridRow: "2/3",
        backgroundColor: "#0f1635",
        display: "flex",
        justifyContent: "center",
      };
      articleWrapStyle = {
        gridColumn: "1/4",
        height: "100%",
      };
      break;
    case "right":
      navWrapStyle = {
        gridColumn: " 3/4",
        gridRow: "1/2",
        backgroundColor: "#0f1635",
      };
      articleWrapStyle = {
        gridColumn: " 1/3",
        gridRow: "1/span 3",
        height: "100%",
      };
      break;
    default:
      navWrapStyle = {
        gridColumn: "1/2",
        gridRow: "1/span 3",
        backgroundColor: "#0f1635",
      };
      articleWrapStyle = {
        gridColumn: " 2/4",
        gridRow: "1/span 3",
        height: "100%",
      };
      break;
  }

  useEffect(() => {
    if (actualWidth <= 400) {
      wrapOption.align = "mobile";
    }
  }, [actualWidth]);

  return (
    <>
      <div id="main">
        <header reference={refButton}>{Header.body(optionsHeader)}</header>
        <nav
          reference={refButton}
          style={navWrapStyle}
          className={openMenuGreen ? `navMenu open` : `navMenu`}
          isMobile={actualWidth}
        >
          {Nav.body(optionsNav)}
        </nav>
        <div className="articleWrapper">
          <article className="article" style={articleWrapStyle}>
            {Article.body(optionsArticle)}
          </article>
        </div>
        <footer className="base">{Footer.body()}</footer>
      </div>
    </>
  );
};

export default ThemeDashBoard;
