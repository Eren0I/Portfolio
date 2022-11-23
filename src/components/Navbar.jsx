import React, {useState, useEffect} from 'react'
import "./nav.css"

const Navbar = () => {
    const [show, handleShow] = useState(false);
    const transitionNavBar= ()=>{
        if(window.scrollY>100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", transitionNavBar);
        return ()=>window.removeEventListener("scroll", transitionNavBar);
    },[])   
  return (
    <div className={`nav ${show &&"nav__black"}`}>
    <div className='nav__contents'>
<img className='nav__logo' src='images/logo.png'/>
<ul className='nav__elements'>
<li href="#entry">Home</li>
<li href="#projects">Projects</li>
</ul>
    </div>
    </div>
  )
}

export default Navbar