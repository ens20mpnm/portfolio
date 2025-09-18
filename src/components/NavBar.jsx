import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="navbar">
      <div className="nav-avatar">
        <NavLink to="/">
          <img src="/mini-profilepic.png" alt="mini profile picture" />
        </NavLink>
      </div>
      <div className="nav-container">
        <ul className="nav-links-index">
          <li><NavLink to="/" className={({isActive})=> isActive ? 'active' : ''}>HOME</NavLink></li>
          <li><NavLink to="/contact" className={({isActive})=> isActive ? 'active' : ''}>CONTACT</NavLink></li>
          <li><NavLink to="/resume" className={({isActive})=> isActive ? 'active' : ''}>RESUME</NavLink></li>
          <li><NavLink to="/projects" className={({isActive})=> isActive ? 'active' : ''}>PROJECTS</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
