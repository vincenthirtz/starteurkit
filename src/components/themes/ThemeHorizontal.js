import React, { useContext, useState } from "react";
import Home from "../Home";
import Footer from "../Layout/Footer";
import Contact from "../Contact";
import About from "../About/About";
import Features from "../Features";
import HeaderComponent from "../Layout/Header";
import "../../style/app.scss";
import { ColorThemeContext } from "../../ColorContext";
import Modal from "../modal";




const Theme_Horizontal = () => {
  const color = useContext(ColorThemeContext);

  const [openModal, setOpenModal] = useState(false);
  const [pageName, setPageName] = useState()

  const triggerModal =(page)=>{
    setOpenModal(!openModal);
    setPageName(page)
    }
  const includeModal=()=>{
    if(openModal===true){
      return(
        <Modal> {pageName} </Modal>
      )
  }
  }

  
  return (
    <>
    {includeModal()}
      <ul id="onePageMenu">
        <a href="#homeOne" onClick={()=>triggerModal(<Home/>)} >Presentation</a>
        <a href="#featuresOne" onClick={()=>triggerModal(<Features/>)} >Features</a>
        <a href="#aboutOne" onClick={()=>triggerModal(<About/>)} >About</a>
        <a href="#contactOne" onClick={()=>triggerModal(<Contact/>)} >Contact</a>
      </ul>
      <div  >

        <div  >
          <div className={`${color} headerHome `}>
            <HeaderComponent/>
          </div>
        </div>
{/* 
        <a id="homeOne" className="anchor"/>
        <div className="horizontalPage" >
        <Home />
        </div>

        <a id="featuresOne" className="anchor" />
        <div className="horizontalPage" >
          <Features />
        </div>

        <a id="aboutOne" className="anchor" />
        <div className="horizontalPage" 
        >
          <About />
        </div>

        <a id="contactOne" className="anchor" />
        <div className="horizontalPage" >
          <Contact />
        </div> */}
          <Footer />
      </div>
      </>
  );
};
export default Theme_Horizontal;
