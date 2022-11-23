import React from 'react'
import {BsGithub,BsLinkedin,BsDiscord} from "react-icons/bs"

const Social = () => {
  return (
    <div>
        <ul className='social'>
            <li><BsGithub size={30}/></li>
            <li><BsLinkedin size={30}/></li>
            <li><BsDiscord size={30}/></li>
        </ul>
    </div>
  )
}

export default Social