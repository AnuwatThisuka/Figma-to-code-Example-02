import React from "react";
import Logo from "../assets/image/Profile_2.svg";
import "./header.css";
function header() {
   return (
      <div className="header">
         <div className="container">
            <div className="logo-img">
               <a href="#Something">
                  <img src={Logo} alt="" />
                  <p>Anuwat Portfolio</p>
               </a>
            </div>
            <div className="header-con">
               <ul className="menu">
                  <li className="menu-link">
                     <a href="#Somthing">Home</a>
                  </li>
               </ul>
               <ul className="menu">
                  <li className="menu-link">
                     <a href="#Somthing">About</a>
                  </li>
               </ul>
               <ul className="menu">
                  <li className="menu-link">
                     <a href="#Somthing">Skills</a>
                  </li>
               </ul>
               <ul className="menu">
                  <li className="menu-link">
                     <a href="#Somthing">Writeups</a>
                  </li>
               </ul>
               <ul className="menu">
                  <button class="cta">
                     <span>Say Hello</span>
                     <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                     </svg>
                  </button>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default header;
