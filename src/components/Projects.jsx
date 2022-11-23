import React from 'react'
import "./project.css"

const Projects = () => {
  return (
    <div className='project'>
         <h1>Projects</h1>
<div className='projects'>
    <div className='project__card'>
        <img className='proj_img' src='images/project1.png'/>
        <h2>Netflix Clone</h2>
        <p>Netflix clone with React and Firebase</p>
        <a href='https://eren0i.github.io/Netflix-React/'>View</a>
</div>
<div className='project__card'>
        <img className='proj_img' src='images/project2.png'/>
        <h2>Gastro Work</h2>
        <p>Hire the Best Special Chef in the ur Local Area</p>
        <a href='https://eren0i.github.io/gastroW/'>View</a>
</div>
<div className='project__card'>
        <img className='proj_img' src='images/project3.png'/>
        <h2>ImpactW</h2>
        <p>E-commerce Cloth Brand</p>
        <a href='https://eren0i.github.io/React-Ecommerce-ImpactW/'>View</a>
</div>
<div className='project__card'>
        <img className='proj_img' src='images/project4.png'/>
        <h2>Tenzies</h2>
        <p>The game built with React</p>
        <a href='https://eren0i.github.io/Tenzies/'>View</a>
</div>
<div className='project__card'>
        <img className='proj_img' src='images/project5.png'/>
        <h2>AirBnb Clone</h2>
        <p>AirBnb clone with React</p>
        <a href='https://friendly-cranachan-274ccd.netlify.app/'>View</a>
</div>
<div className='project__card'>
        <img className='proj_img' src='images/project6.png'/>
        <h2>Simon Game</h2>
        <p>Pure Javascript</p>
        <a href='https://eren0i.github.io/SimonGame/'>View</a>
</div>
   </div>
   </div>
  )
}

export default Projects