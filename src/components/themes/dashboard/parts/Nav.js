import React, { useEffect, useRef} from "react";
import SubMenuOpen from "../../../subMenuCustom";

const Nav = (props) => {
    const { navStuff, optionsNav } = props;
    const { align, reference } = optionsNav;
    const [, setOpenMenuGreen] = SubMenuOpen.useSubMenuOpen();
    const node = useRef();
    const menuInput = navStuff.split(",");
    const menu = menuInput.map(m =>
        <span>{m}</span>
    );

    let navPosition = "";
    let navClass = "";

        switch (align) {
            case 'left':
                navClass='navLeft'; 
                navPosition = {
                    width: "100%",
                    height:"100%"
                };
                break;
            case 'center':
                navClass='navCenter'; 
                navPosition = {
                    width: "100%",
                };
                break;
            case 'right':
                navClass='navRight'; 
                navPosition={
                    width: "100%",
                };
                break;
        };
    

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

    return (
        <div ref={node} 
        style={navPosition} 
        className={navClass}
        >
            <ul >
                {menu}
            </ul>
        </div>
    )
};

export default Nav;