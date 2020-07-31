import React, { useRef } from "react";
// import Manager from "../DashBoard/Manager";
import DashMenuOpen from "../../../dashCustomHook";


const Header = (props) => {
    const { logo, options, headerTitle } = props;
    const { align, colorGeneral } = options;
    const [dashMenuOpen, setDashMenuOpen] = DashMenuOpen.useDashMenuOpen();
    const refButton = useRef(focus);

    
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
            <div onClick={() => setDashMenuOpen(!dashMenuOpen)} ref={refButton} >
                    <div className="burger" />
                    <div className="burger" style={{ margin: "0.2rem 0" }} />
                    <div className="burger" />
            </div>
        </div>
    )
};

export default Header;
