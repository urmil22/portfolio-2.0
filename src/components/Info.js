import React from 'react'
import img from './images/img.svg'
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai'

const Info = () => {
  return (
    <div>
        <section className='container'>
     <div className='name'>
        <h1>Urmil Bhavsar</h1>
        <h4>Web Developer</h4>
        
        <ul>
            <li><a href='mailto:urmilbhavsar8@gmail.com' ><AiOutlineMail /></a></li>
            <li><a href='https://www.linkedin.com/in/urmil-bhavsar/' rel="noreferrer" target="_blank"><FaLinkedinIn /></a></li>
            <li><a href='https://github.com/urmil22' rel="noreferrer" target="_blank"><AiFillGithub /></a></li>
            <li><a href='https://twitter.com/urmil_bhavsar' rel="noreferrer" target="_blank"><AiOutlineTwitter /></a></li>
            <li><a href='https://www.instagram.com/urmil__bhavsar/' rel="noreferrer" target="_blank"><AiOutlineInstagram /></a></li>
        </ul>
        <h3><a href='https://drive.google.com/file/d/1b_AspL-I1LqNQkzTP3_X301XDY-9Xqx7/view?usp=sharing' rel="noreferrer" target="_blank">Resume</a></h3>
     </div>
     <div>
        <img id='img' src={img} alt='server cannot fetch'/>
     </div>
    </section>
    </div>
  )
}

export default Info