import React from 'react'
import './Project.css'
// import Banner from '../assets/project1.png'
import Banner from '../assets/project.jpg'



function Project() {
  return (
    <section id= "project">
       <h2 className='projectTitle'>My Project</h2> 
       <span className='projectDesc'>Here are my project</span>

      <div className='project-item'>
        <div className='item-details'>
          <p className='P1'>Project-1</p>
          <p className='P2'>TechStack:- Html and css</p>
        </div>
        <a href='#'><img src={Banner} alt='Project-1' className='projectImg' img/></a>
      </div>

      <div className='project-item'>
        <div className='item-details'>
          <p className='P1'>Project-1</p>
          <p className='P2'>TechStack:- Html, CSS and Bootstrap</p>
      </div>
        <a href='#'><img src={Banner} alt='Project-2' className='projectImg' img/></a>
       </div>

    </section>
  )
}

export default Project
