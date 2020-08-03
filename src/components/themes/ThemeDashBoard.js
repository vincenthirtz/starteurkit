import React, { useState, useEffect, useRef } from "react";
import Manager from "../DashBoard/Manager";
import './dashboard/Theme.css';
import { structure } from "./dashboard/structure";
import DashMenuOpen from "../dashCustomHook";
import SubMenuOpen from "../subMenuCustom";


const ThemeDashBoard = (props) => {
    const [currentClass, setCurrentClass] = useState("");

    Manager.setDashboard(structure);
    const refButton = useRef();

    const dashboard = Manager.getDashboard();
    const Header = dashboard.find(dash => dash.code === "header");
    const Footer = dashboard.find(dash => dash.code === "footer");
    const Article = dashboard.find(dash => dash.code === "article");
    const Nav = dashboard.find(dash => dash.code === "nav");
    const optionsHeader = { align: "right", colorGeneral: "#cddc39", reference: refButton };
    const optionsNav = { reference: refButton };
    const [openMenuGreen,
    ] = SubMenuOpen.useSubMenuOpen()


    return (
        <>
            <div id="main">
                <header reference={refButton}>
                    {Header.body(optionsHeader)}
                </header>
                <div className="articleWrapper">
                    <nav reference={refButton} className={openMenuGreen ? `navMenu open` : `navMenu`}>
                        {Nav.body(optionsNav)}
                    </nav>
                    <article>{Article.body()}</article>
                </div>
                <footer>
                    {Footer.body()}
                </footer>
            </div>
        </>
    );
};

export default ThemeDashBoard;
