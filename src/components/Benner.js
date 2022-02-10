import React from 'react'
import './Benner.css'
import Hero from '../assets/image/Benner.svg'
import Logoimgbenner from '../assets/image/logo-img-benner.svg'
import github from '../assets/image/github.svg'
import linkin from '../assets/image/Vector.svg'
import instargram from '../assets/image/instagram.svg'
import twitter from '../assets/image/twitter.svg'

function Benner() {
  return (
    <div className="benner">
        <div className="container-benner">
            <div className="Hero-img">
                <img src={Hero} alt="" />
            </div>
            <div className="username">
                <p>
                    ANUWAT THISUKA
                </p>
            </div>
            <div className="img-benner-logo">
                <img src={Logoimgbenner} alt="" />
            </div>
            <div className="skill-benner">
                <p>IoT Engineer/Automation Engineer/R&D Engineer</p>
            </div>
            <div className="menu-so">
                <ul>
                    <li>
                        <a href="https://github.com/AnuwatThisuka">
                        <img src={github} alt="" />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="https://twitter.com/?lang=th"><img src={twitter} alt="" /></a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="https://th.linkedin.com/"><img src={linkin} alt="" /></a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/">
                        <img src={instargram} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Benner