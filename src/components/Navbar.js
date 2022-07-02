import React from 'react'

const Navbar = () => {
  return (
       <nav>
          <ul className='menu'>
            <li><a href='/'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>

            <li><a href='https://medium.com/@urmil22' rel="noreferrer" target="_blank">Blogs</a></li>
          </ul>
       </nav>
  )
}

export default Navbar