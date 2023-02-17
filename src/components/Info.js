import React from 'react'
import img from './images/img.svg';
import Typed from 'react-typed';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

const Info = () => {
  return (
    <>
        <section className='landing'>
            <div>
         <h1>Urmil Bhavsar</h1>
            <h4>
            <span className='typing'>
            <Typed
                            strings={[
                                'Frontend Enthusiast',
                                'CSE Undergrad',
                                'Software Engineer',
                                'Web Developer',
                                'Bookworm',
                                'Musicophile'
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        >
                        </Typed>
            </span>
        </h4>
        
        <ul className='social-links'>
            <li><a href='mailto:urmilbhavsar8@gmail.com' ><AiOutlineMail size={25} /></a></li>
            <li><a href='https://www.linkedin.com/in/urmil-bhavsar/' rel="noreferrer" target="_blank"><FaLinkedinIn size={25}/></a></li>
            <li><a href='https://github.com/urmil22' rel="noreferrer" target="_blank"><AiFillGithub size={25} /></a></li>
            <li><a href='https://twitter.com/urmil_bhavsar' rel="noreferrer" target="_blank"><AiOutlineTwitter size={25} /></a></li>
            <li><a href='https://www.instagram.com/urmil__bhavsar/' rel="noreferrer" target="_blank"><AiOutlineInstagram size={25} /></a></li>
        </ul>
        <h4><a id='resume' href='https://drive.google.com/file/d/1oU9FWs84c3oLMU6aL4hJaFsKEQyh2gme/view?usp=sharing' rel="noreferrer" target="_blank">Resume</a></h4>
     </div>

     <div>
        <img id='dp' src={img} alt='server cannot fetch'/>
     </div>
    </section>
    </>
  )
}

export default Info