import React from "react";
import "./header.css"
import Img from "../images/memo_logo.png"
export default function Header(){

    return(
        <div className="header">
       <div className="header__left">
        <img src={Img} alt="logo" />
       </div>
       <div className="header__center">
      
       </div>
       <div className="header__right">

       </div>
        </div>
    )
}