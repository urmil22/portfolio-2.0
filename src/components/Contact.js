import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai'


const Contact = () => {
  return (
    <section id='contact'>
    <h1>Contact</h1>
     <div className='contact'>
        <ul >
            <li><a href='mailto:urmilbhavsar8@gmail.com' rel="noreferrer" target="_blank"><AiOutlineMail /></a></li>
            <li><a href='https://www.linkedin.com/in/urmil-bhavsar/' rel="noreferrer" target="_blank"><FaLinkedinIn /></a></li>
            <li><a href='https://github.com/urmil22' rel="noreferrer" target="_blank"><AiFillGithub /></a></li>
            <li><a href='https://twitter.com/urmil_bhavsar' rel="noreferrer" target="_blank"><AiOutlineTwitter /></a></li>
            <li><a href='https://www.instagram.com/urmil__bhavsar/' rel="noreferrer" target="_blank"><AiOutlineInstagram /></a></li>
        </ul>
        
     </div>
    </section>
  )
}

export default Contact