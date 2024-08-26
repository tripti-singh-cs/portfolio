import React from 'react'
import './intro.css'
import Hire from '../assets/hireme.png'
import reactLogo from '../assets/react.svg' 
import {Link} from 'react-scroll'
function intro() {
  return (
    <section id = "intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>
                I'm <span className='introName'>Tripti</span>
                <br/>
                Full stack Web developer
            </span>
            <p className='introPara'>
                I am skilled web developer with experience in creating
                <br/>
                visually appealing and user friendly website.
            </p>
            <Link>
            <button className='btn2'>
                <img src ={Hire} alt='img' className ='btnImg2'/>
                Hire Me
            </button>
            </Link>
        </div>

        <img src ={reactLogo} alt ='React Logo' className ='logo2'/>
    </section>
  )
}

export default intro;
