import React from 'react'
import { FaCircle } from 'react-icons/fa'

const About = () => {
  return (
    <section className='about' id='about'>
    <h1>About</h1>
      <p> <FaCircle className='bullets'/> A 22 year old techie pursuing bachelor of technology in computer science engineering.</p>

      <p> <FaCircle className='bullets'/> I have enthusiasm for exploring technologies and developing on that technologies.</p>

      <p> <FaCircle className='bullets'/> I'm always curious to learn new things and apply the learnings to make awesome achievements. </p>

      <p> <FaCircle className='bullets'/> I'm into music at a good extent and I play Ukulule and Guitar sometimes.</p>

      <p> <FaCircle className='bullets'/> I like to play digital games and read books in my free time.</p>
    </section>
  )
}

export default About