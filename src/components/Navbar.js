import React, { useState } from "react"
import menuIcon from "../components/images/menu.png"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  
  return (
    <header>
      <nav>
        <img
          src={menuIcon}
          onClick={() => setShowLinks(!showLinks)}
          className="menu-icon"
          alt="menu-icon"
        />
        <ul className="nav-menu nav-open" id={showLinks ? "hidden" : ""}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#cocurricular">CoCurricular</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>

          <li>
            <a
              href="https://medium.com/@urmil22"
              rel="noreferrer"
              target="_blank"
            >
              Blogs
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
