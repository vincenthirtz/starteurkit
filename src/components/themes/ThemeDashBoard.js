import React, { useEffect } from "react";
import Manager from "../DashBoard/Manager";
import Footer from "../Layout/Footer";
import './Theme.css';
// import { ColorThemeContext } from "../../ColorContext";
// import OpenMenuHook from "../customHook";

const test = [
    {
        "id": 0,
        "code": "header",
        "title": "First",
        "body": <div>coucou header</div>
    },
    {
        "id": 1,
        "code": "nav",
        "title": "Second",
        "body": <div>coucou nav</div>
    },
    {
        "id": 2,
        "code": "article",
        "title": "Third",
        "body": <div>coucou article</div>
    },
    {
        "id": 3,
        "code": "footer",
        "title": "Fourth",
        "body": <div>coucou footer</div>
    }
]

const ThemeDashBoard = () => {
    //   const color = useContext(ColorThemeContext);
    Manager.setDashboard(test);

    const dashboard = Manager.getDashboard();

    return (
        <>
            <div id="main">
                {dashboard.map(elementDash => {
                    return (<>
                        {elementDash.code === "header" && <header>{elementDash.body}</header>}
                        {elementDash.code === "nav" && <nav>{elementDash.body}</nav>}
                        {elementDash.code === "article" && <article>{elementDash.body}</article>}
                        {elementDash.code === "footer" && <footer>{elementDash.body}</footer>}
                    </>)
                })}
            </div>
        </>
    );
};

export default ThemeDashBoard;
