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
        <img className='proj_img impw' src='images/project3.png'/>
        <h2>ImpactW</h2>
        <p>E-commerce Cloth Brand</p>
        <p>V2 #syncFusion #Tailwind #use_Context #darkTheme #Bootstrap</p>
        <a href='https://eren0i.github.io/React-Ecommerce-ImpactW/'>Viewv1</a>
        <a href='https://eren0i.github.io/ImpactW-Dashboard/'>Viewv2</a>
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
        <img className='proj_img' src='images/projC.png'/>
        <h2>ImpactC</h2>
        <p>Web3,MetaMask integration can use to send money to ETH wallet</p>
        <p>#smart_contract #use_Context #Tailwind #Gradient #CoinAPI #gsap</p>
        <a href='https://eren0i.github.io/ImpactC/'>View</a>
</div>
   </div>
   </div>
  )
}

export default Projects
