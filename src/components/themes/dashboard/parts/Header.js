import React, { useContext } from "react";
// import Manager from "../DashBoard/Manager";



const Header = (props) => {
    const { logo, options, headerTitle } = props;
    const { align, colorGeneral } = options;

    return <div style={{color: colorGeneral ? colorGeneral : "dark"}}>
        <h1>{headerTitle}</h1>
        {logo && <img style={{ width: "120px",  textAlign: align ? align : "left"}} src={`${logo}`} />}
    </div>
};

export default Header;
