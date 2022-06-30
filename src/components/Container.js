import React from 'react'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Info from './Info'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'

 
const Container = () => {
  return (
   <>
    <Navbar />
    <Info />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
   </>
  )
}

export default Container