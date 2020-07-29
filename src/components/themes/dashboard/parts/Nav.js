import React from "react";

const Nav = (props) => {
    const {navStuff}=props

    const menuInput = navStuff.split(",");
    const menu = menuInput.map(m =>
            <ul>
                <a>{m}</a>
            </ul>
       )
console.log('menu ',menu)
  return <div>{menu}</div>
};

export default Nav;
