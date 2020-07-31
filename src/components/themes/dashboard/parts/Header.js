import React, { useContext } from "react";
// import Manager from "../DashBoard/Manager";



const Header = (props) => {
    const { logo, options, headerTitle } = props;
    const { align, colorGeneral } = options;

    return <div
    style={{ color: colorGeneral ? colorGeneral : "dark", 
    display: "grid",
    gridTemplateColumns: "20vh auto auto", placeItems:"center"
    }}>
        <h1 className="headerTitle"  >{headerTitle}</h1>
        <div className="logoContainer">
            {logo && <img style={{
                width: "120px",
                textAlign: align ? align : "left",
                gridColumn: "1/2"
            }} src={`${logo}`} />}
        </div>
    </div>
};

export default Header;
