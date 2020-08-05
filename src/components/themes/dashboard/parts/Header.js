import React from "react";
import SubMenuOpen from "../../../subMenuCustom";



const Header = (props) => {
    const { logo, optionsHeader, headerTitle } = props;
    const { align, colorGeneral, reference } = optionsHeader;
    const [openMenuGreen, setOpenMenuGreen] = SubMenuOpen.useSubMenuOpen()

    const testTurfu = e => {
        setOpenMenuGreen(!openMenuGreen);
    }

    let pictureAlign = "";

    switch (align) {
        case 'left':
            pictureAlign = {
                gridColumn: "1/2",
                textAlign: align,
                width: "5rem",
                height: "5rem",
                gridRow: "1"
            };
            break;
        case 'center':
            pictureAlign = {
                gridColumn: "2/3",
                width: "120px",
                textAlign: align,
                width: "5rem",
                height: "5rem",
                gridRow: "1"
            };
            break;
        case 'right':
            pictureAlign = {
                gridColumn: "3/4",
                textAlign: align,
                width: "5rem",
                height: "5rem",
                gridRow: "1"
            };
            break;
            default:
                pictureAlign = {
                    gridColumn: "1/2",
                    textAlign: align,
                    width: "5rem",
                    height: "5rem",
                    gridRow: "1"
                }
        }

    return (
        <div
            style={{
                color: colorGeneral 
                // ? colorGeneral : "dark"
                ,
                display: "grid",
                gridTemplateColumns: "20vh auto 20vh",
                placeItems: "center"
            }}>
            <h1 className="headerTitle" style={{ textAlign: align }}  >{headerTitle}</h1>
            <div className="logoContainer" style={pictureAlign} >
                {logo && <img src={`${logo}`} />}
            </div>
            <div onClick={e => testTurfu(e)} ref={reference} style={{ gridRow: "1" }}  >
                <div className="burger" />
                <div className="burger" style={{ margin: "0.2rem 0" }} />
                <div className="burger" />
            </div>
        </div>
    )
};

export default Header;
