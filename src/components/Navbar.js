import React from 'react'

const Navbar = () => {
  return (
     <header>
       <nav>
          <ul className='menu'>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Skills</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Projects</a></li>
            <li><a href='https://medium.com/@urmil22' rel="noreferrer" target="_blank">Blogs</a></li>
          </ul>
       </nav>
    </header>
  )
}

export default Navbar