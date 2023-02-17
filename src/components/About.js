import React from 'react';
import { CgShapeSquare }from 'react-icons/cg'

const About = () => {
  return (
    <section className='about' id='about'>
    <h1>About</h1>
    <div>
      <p className='info-para'> <span className='bullets'> <CgShapeSquare /> </span>  A 22 year old techie pursuing bachelor of technology in computer science engineering.</p>

      <p className='info-para'> <span className='bullets'> <CgShapeSquare /> </span>I have enthusiasm for exploring technologies and developing on that technologies.</p>

      <p className='info-para'> <span className='bullets'> <CgShapeSquare /> </span> I'm always curious to learn new things and apply the learnings to make awesome achievements. </p>

      <p className='info-para'> <span className='bullets'> <CgShapeSquare /> </span> I'm into music at a good extent and I play Ukulule and Guitar sometimes.</p>

      <p className='info-para'> <span className='bullets'> <CgShapeSquare /> </span> I like to play digital games and read books in my free time.</p>
      </div>
    </section>
  )
}

export default About