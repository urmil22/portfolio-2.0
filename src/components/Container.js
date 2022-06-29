import React from 'react'
import img from './images/img.svg'
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai'
 
const Container = () => {
  return (
    <section className='container'>
     <div className='name'>
        <h1>Urmil Bhavsar</h1>
        <h4>Web Developer</h4>
        
        <ul>
            <li><a href=''><AiOutlineMail /></a></li>
            <li><a href=''><AiOutlineLinkedin /></a></li>
            <li><a href=''><AiFillGithub /></a></li>
            <li><a href=''><AiOutlineTwitter /></a></li>
            <li><a href=''><AiOutlineInstagram /></a></li>
        </ul>
        <h3>Resume</h3>
     </div>
     <div>
        <img id='img' src={img} />
     </div>
    </section>
  )
}

export default Container