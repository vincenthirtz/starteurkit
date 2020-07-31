import React, { useState, useEffect, useRef } from "react";
import Manager from "../DashBoard/Manager";
import './dashboard/Theme.css';
import { structure } from "./dashboard/structure";
import DashMenuOpen from "../dashCustomHook";
import SubMenuOpen from "../subMenuCustom";


const ThemeDashBoard = (props) => {
    const [dashMenuOpen, setDashMenuOpen] = DashMenuOpen.useDashMenuOpen();
    const [currentClass, setCurrentClass] = useState("");

    console.log('openMenu ,', dashMenuOpen);

    Manager.setDashboard(structure);

    const dashboard = Manager.getDashboard();
    const Header = dashboard.find(dash => dash.code === "header");
    const Footer = dashboard.find(dash => dash.code === "footer");
    const Article = dashboard.find(dash => dash.code === "article");
    const Nav = dashboard.find(dash => dash.code === "nav");
    const options = { align: "right", colorGeneral: "#cddc39" };
    const ref = useRef()

    const [openMenuGreen, setOpenMenuGreen] = SubMenuOpen.useSubMenuOpen()
   
    useEffect(()=>{
        dashMenuOpen ? setOpenMenuGreen(true) : setOpenMenuGreen(false);
        console.log("menugreen Nav", openMenuGreen)
    },[dashMenuOpen])

    return (
        <>
            <div id="main">
                <header>
                    {Header.body(options)}
                </header>
                <div className="articleWrapper">
                    <nav ref={ref} className={openMenuGreen ? `navMenu open` : `navMenu`}>
                        {Nav.body()}
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
