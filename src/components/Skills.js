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
import { SiTailwindcss } from 'react-icons/si';
import { DiPython } from 'react-icons/di';

const Skills = () => {
  return (
    <>
    <section id='skills'>
    <h1>Skills</h1>
    
    <div className='skills-grid'>
        <div className='item1'><FaHtml5 color='#3b82f6' size={20}/> <h4>HTML</h4></div>
        <div className='item2'><FaCss3Alt color='#3b82f6' size={20} /><h4> CSS</h4></div>
        <div className='item3'><IoLogoJavascript color='#3b82f6' size={20}/><h4> JavaScript</h4> </div>
        <div className='item4'><FaReact color='#3b82f6' size={20}/><h4> React</h4> </div>
        <div className='item5'><IoIosDocument color='#3b82f6' size={20}/><h4> C/C++</h4></div>
        <div className='item6'><FaJava color='#3b82f6' size={20}/><h4> Java</h4> </div>
        <div className='item7'><FaDatabase color='#3b82f6' size={20}/><h4> SQL</h4></div>
        <div className='item8'><FaGitAlt color='#3b82f6' size={20}/><h4> Git </h4></div>
        <div className='item9'><FaGithub color='#3b82f6' size={20}/><h4> GitHub</h4></div>
        <div className='item10'><SiTailwindcss color='#3b82f6' size={20}/><h4> Tailwind CSS</h4></div>
        <div className='item11'><DiPython color='#3b82f6' size={20}/><h4> Python</h4></div>
      </div>
    </section>
    </>
  )
}

export default Skills