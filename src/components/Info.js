import React from 'react'
import img from './images/img.svg'
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

const Info = () => {
  return (
    <div>
        <section className='container'>
     <div className='name'>
        <h1>Urmil Bhavsar</h1>

         <span className='dynamic-text'>
         <TypeAnimation
      sequence={[
        'CSE Undergrad', 
        1000, 
        'Frontend Enthusiast', 
        1000, 
        'Bookworm', 
        1000,
        'Software Engineer',
        1000,
        'Musicophile',
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
    />
      
         </span>
        

        <ul>
            <li><a href='mailto:urmilbhavsar8@gmail.com' ><AiOutlineMail /></a></li>
            <li><a href='https://www.linkedin.com/in/urmil-bhavsar/' rel="noreferrer" target="_blank"><FaLinkedinIn /></a></li>
            <li><a href='https://github.com/urmil22' rel="noreferrer" target="_blank"><AiFillGithub /></a></li>
            <li><a href='https://twitter.com/urmil_bhavsar' rel="noreferrer" target="_blank"><AiOutlineTwitter /></a></li>
            <li><a href='https://www.instagram.com/urmil__bhavsar/' rel="noreferrer" target="_blank"><AiOutlineInstagram /></a></li>
        </ul>
        <h3><a href='https://drive.google.com/file/d/1oU9FWs84c3oLMU6aL4hJaFsKEQyh2gme/view?usp=sharing' rel="noreferrer" target="_blank">Resume</a></h3>
     </div>
     <div>
        <img id='img' src={img} alt='server cannot fetch'/>
     </div>
    </section>
    </div>
  )
}

export default Info