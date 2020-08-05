/* eslint-disable no-lone-blocks */
import React, { useEffect, useRef } from "react";
import "./dashboard/Theme.css";
import { structure } from "./dashboard/structure";
import SubMenuOpen from "../subMenuCustom";

const ThemeDashBoard = (child) => {
  const { children } = child;
  const refButton = useRef();
  const Header = structure.find((dash) => dash.code === "header");
  const Footer = structure.find((dash) => dash.code === "footer");
  const Article = structure.find((dash) => dash.code === "article");
  const Nav = structure.find((dash) => dash.code === "nav");
  const optionsHeader = { align: "left", colorGeneral: "#ffffff", reference: refButton };
  const optionsNav = { align: "center", reference: refButton };
  const optionsArticle = { children };
  const wrapOption = { align: "center" };
  const [openMenuGreen] = SubMenuOpen.useSubMenuOpen();

  let navWrapStyle = {};
  let articleWrapStyle = {};
  const actualWidth = window.screen.availWidth;

  if (actualWidth <= 330) {
    wrapOption.align = "mobile";
  }

  switch (wrapOption.align) {
    case "mobile":
      {
        navWrapStyle = {
          gridColumn: "1/ 4",
          gridRow: "1",
          backgroundColor: "#00a0ec",
        };
        articleWrapStyle = {
          gridColumn: " 1 /4",
          gridRow: "1/span 3",
        };
      }
      break;
    case "left":
      navWrapStyle = {
        gridColumn: "1/2",
        gridRow: "1/span 3",
        backgroundColor: "#00a0ec",
      };
      articleWrapStyle = {
        gridColumn: " 2/4",
        gridRow: "1/span 3",
      };
      break;
    case "center":
      navWrapStyle = {
        gridColumn: " span 3",
        gridRow: "1/2",
        backgroundColor: "#00a0ec",
        display: "flex",
        justifyContent: "center",
      };
      articleWrapStyle = {
        gridColumn: " span 3",
        gridRow: "2/3",
      };
      break;
    case "right":
      navWrapStyle = {
        gridColumn: " 3/4",
        gridRow: "1/2",
        backgroundColor: "#00a0ec",
      };
      articleWrapStyle = {
        gridColumn: " 1/3",
        gridRow: "1/span 3",
      };
      break;
    default:
      navWrapStyle = {
        gridColumn: "1/2",
        gridRow: "1/span 3",
        backgroundColor: "#00a0ec",
      };
      articleWrapStyle = {
        gridColumn: " 2/4",
        gridRow: "1/span 3",
      };
      break;
  }

  useEffect(() => {
    if (actualWidth <= 330) {
      wrapOption.align = "mobile";
    }
  }, [actualWidth]);

  return (
    <>
      <div id="main">
        <header reference={refButton}>{Header.body(optionsHeader)}</header>
        <div className="articleWrapper">
          <nav reference={refButton} style={navWrapStyle} className={openMenuGreen ? `navMenu open` : `navMenu`}>
            {Nav.body(optionsNav)}
          </nav>
          <article style={articleWrapStyle}>{Article.body(optionsArticle)}</article>
        </div>
        <footer>{Footer.body()}</footer>
      </div>
    </>
  );
};

export default ThemeDashBoard;
