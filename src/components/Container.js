import React from 'react'
import About from './About'
import CoCurricular from './CoCurricular'
import Contact from './Contact'
import Footer from './Footer'
import Info from './Info'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'

 
const Container = () => {
  return (
   <div className='wrapper'>
    <Navbar />
    <Info />
    <About />
    <Skills />
    <Projects />
    <CoCurricular />
    <Contact />
    <Footer />
   </div>
  )
}

export default Container