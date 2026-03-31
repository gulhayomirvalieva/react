import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <a href="#">justHIKING</a>
        <ul>
          <li><a href="#Abaut">About US</a></li>
          <li><a href="#Benef">Benefits</a></li>
          <li><a href="#Hikes">Hikes</a></li>
          <li><a href="#Stories">Stories</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
        <button>BOOK NOW</button>
      </nav>

      <h2>Welcome</h2>
      <h1>EXPLORE SRI LANKA
        WITH US</h1>
      <button>Discover Hikes</button>
    </header>
  )
}

export default Header