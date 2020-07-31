import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import DashMenuOpen from "../../../dashCustomHook";
import SubMenuOpen from "../../../subMenuCustom";

import { checkPropTypes } from "prop-types";


const Nav = (props) => {
    const { navStuff, refButton, } = props

    const [dashMenuOpen, setDashMenuOpen] = DashMenuOpen.useDashMenuOpen();
    const [openMenuGreen, setOpenMenuGreen] = SubMenuOpen.useSubMenuOpen()

    const node = useRef();
    const menuInput = navStuff.split(",");

    const menu = menuInput.map(m =>
        <span>{m}</span>
    );

    const handleClick = (e) => {
        if (node.current.contains(e.target)) {
            return;
        }
        // window.alert("oskour")
        setOpenMenuGreen(false);
        }


    

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
    }, []);
    useLayoutEffect(() => {
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [])

//trouver un moyen de passer l'état de openMenuGreen à dashOpenMenu

    return (
        <div ref={node}  >
            <h3>menu</h3>
            <ul >
                {menu}
            </ul>
        </div>
    )
};

export default Nav;
