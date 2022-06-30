import React from 'react'
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { IoIosDocument } from 'react-icons/io';
import { FaJava } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Skills = () => {
  return (
    <>
    <section>
    <h1 style={{color:'var(--secondary-color)' }}>Skills</h1>
    </section>
    <section className='skills'>
      
      
        <div className='item 1'><FaHtml5 /> <span>HTML</span></div>
        <div className='item 2'><FaCss3Alt /><span> CSS</span></div>
        <div className='item 3'><IoLogoJavascript /><span> JavaScript</span> </div>
        <div className='item 4'><FaReact /><span> React</span> </div>
        <div className='item 5'><IoIosDocument /><span> C/C++</span></div>
        <div className='item 6'><FaJava /><span> Java</span> </div>
        <div className='item 7'><FaDatabase /><span> SQL</span></div>
        <div className='item 8'><FaGitAlt /><span> Git </span></div>
        <div className='item 9'><FaGithub /><span> GitHub</span></div>
      
    </section>
    </>
  )
}

export default Skills