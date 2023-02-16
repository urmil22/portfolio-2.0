import React from 'react'

const Navbar = () => {
  return (
<>
<input type="checkbox" id="toggle" />

<nav>
    <label class="navbar-toggler" for="toggle">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </label>

    <ul class="nav-list">
         <li class="nav-item"><a class="nav-link" href='/'>Home</a></li>
        <li class="nav-item"><a class="nav-link" href='#about'>About</a></li>
        <li class="nav-item"><a class="nav-link" href='#skills'>Skills</a></li>
        <li class="nav-item"><a class="nav-link" href='#projects'>Projects</a></li>
        <li class="nav-item"><a class="nav-link" href='#contact'>Contact</a></li>
        <li class="nav-item"><a class="nav-link" href='https://medium.com/@urmil22' rel="noreferrer" target="_blank">Blogs</a></li>
    </ul>

</nav>
      </>
  )
}

export default Navbar