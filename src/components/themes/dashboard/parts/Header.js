import React, { useRef, useEffect } from "react";
// import Manager from "../DashBoard/Manager";
import DashMenuOpen from "../../../dashCustomHook";
import SubMenuOpen from "../../../subMenuCustom";



const Header = (props) => {
    const { logo, optionsHeader, headerTitle } = props;
    const { align, colorGeneral, reference } = optionsHeader;
    const [dashMenuOpen, setDashMenuOpen] = DashMenuOpen.useDashMenuOpen();
    const [openMenuGreen, setOpenMenuGreen] = SubMenuOpen.useSubMenuOpen()
    // const refButton = useRef();

    const testTurfu = e => {
        setOpenMenuGreen(!openMenuGreen);
    }


    return (
        <div
            style={{
                color: colorGeneral ? colorGeneral : "dark",
                display: "grid",
                gridTemplateColumns: "20vh auto auto", placeItems: "center"
            }}>
            <h1 className="headerTitle"  >{headerTitle}</h1>
            <div className="logoContainer">
                {logo && <img style={{
                    width: "120px",
                    textAlign: align ? align : "left",
                    gridColumn: "1/2"
                }} src={`${logo}`} />}
            </div>
            <button onClick={e => testTurfu(e)} ref={reference}   >
                <div className="burger" />
                <div className="burger" style={{ margin: "0.2rem 0" }} />
                <div className="burger" />
            </button>
        </div>
    )
};

export default Header;
