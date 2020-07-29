import React from "react";

const Nav = (props) => {
    const { navStuff } = props

    const menuInput = navStuff.split(",");
    const menu = menuInput.map(m =>
        <a>{m}</a>
    )
    console.log('menu ', menu)
    return <div>
        <ul>
            {menu}
        </ul>
    </div>
};

export default Nav;
