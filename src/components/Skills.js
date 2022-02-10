import React from "react";
import HTML from "../assets/image/html.svg";
import CSS from "../assets/image/css.svg";
import javascript from "../assets/image/javascript.svg";
import figma from "../assets/image/figma 1.svg";
import python from "../assets/image/python.svg";
import node from "../assets/image/nodejs.svg";
import vscode from "../assets/image/Visual Studio Code.svg";
import git from "../assets/image/git.svg";
import ms_world from "../assets/image/ms_word.svg";
import ms_excel from "../assets/image/ms_excel.svg";
import ms_powerpoint from "../assets/image/ms_powerpoint.svg";
import reactlogo from "../assets/image/react.svg";
import vue from "../assets/image/vue.svg";
import "./Skills.css";

function Skills() {
   return (
      <div className="skills">
         <div className="container-skills">
            <div className="logo-skills">
               <p>SKILLS</p>
            </div>
            <div className="logo-skill-tech">
               <div className="html-skills">
                  <img src={HTML} alt="" />
                  <p>HTML</p>
               </div>
               <div className="css-skills">
                  <img src={CSS} alt="" />
                  <p>CSS</p>
               </div>
               <div className="java-skills">
                  <img src={javascript} alt="" />
                  <p>JavaScript</p>
               </div>
            </div>
            <div className="logo-skill-tech-2">
               <div className="html-skills">
                  <img src={vue} alt="" />
                  <p>VUE JS</p>
               </div>
               <div className="css-skills">
                  <img src={reactlogo} alt="" />
                  <p>REACT JS</p>
               </div>
               <div className="java-skills">
                  <img src={node} alt="" />
                  <p>NODE JS</p>
               </div>
            </div>
            <div className="logo-skill-tech-3">
               <div className="html-skills">
                  <img src={vscode} alt="" />
                  <p>VS Code</p>
               </div>
               <div className="css-skills">
                  <img src={git} alt="" />
                  <p>GIT</p>
               </div>
               <div className="java-skills">
                  <img src={ms_powerpoint} alt="" />
                  <p>POWER POINT</p>
               </div>
            </div>
            <div className="logo-skill-tech-4">
               <div className="html-skills">
                  <img src={ms_excel} alt="" />
                  <p>EXCEL</p>
               </div>
               <div className="css-skills">
                  <img src={ms_world} alt="" />
                  <p>WORLD</p>
               </div>
               <div className="java-skills">
                  <img src={python} alt="" />
                  <p>PYTHON</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Skills;
