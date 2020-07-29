import React from "react";
import Manager from "../DashBoard/Manager";
// import Rono from './dashboard/rono.png';
import './dashboard/Theme.css';
import { structure } from "./dashboard/structure";
import { ColorThemeContext } from "../../ColorContext";
// import OpenMenuHook from "../customHook";

const ThemeDashBoard = () => {
    Manager.setDashboard(structure);

    const dashboard = Manager.getDashboard();
    const Header = dashboard.find(dash => dash.code === "header");
    const Footer = dashboard.find(dash => dash.code === "footer");
    const Article = dashboard.find(dash => dash.code === "article");
    const Nav = dashboard.find(dash => dash.code === "nav");
    const options = { align: "right", colorGeneral: "#cddc39" };

    return (
        <>
            <div id="main">
                <header>
               {Header.body(options)}
                </header>
                <div className="articleWrapper">
                    <nav>{Nav.body()}</nav>
                    <article>{Article.body()}</article>
                    {/* {elementDash.code === "image-M" && <div><img src={Rono}/></div>}  */}
                </div>
                <footer>
                    {Footer.body()}
                </footer>
            </div>
        </>
    );
};

export default ThemeDashBoard;
