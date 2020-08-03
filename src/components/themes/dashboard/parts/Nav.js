import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import DashMenuOpen from "../../../dashCustomHook";
import SubMenuOpen from "../../../subMenuCustom";

const Nav = (props) => {
    const { navStuff, optionsNav } = props
    const { reference } = optionsNav;
    const [openMenuGreen, setOpenMenuGreen] = SubMenuOpen.useSubMenuOpen()
    const node = useRef();

    const menuInput = navStuff.split(",");
    const menu = menuInput.map(m =>
        <span>{m}</span>
    );

    useEffect(() => {

        const handleClick = (e) => {
            if (node.current.contains(e.target)) {
                return;
            }

            if (!!reference && !!reference.current && !reference.current.contains(e.target)) {
                setOpenMenuGreen(false);
            }
        }

        document.addEventListener("mousedown", handleClick);
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