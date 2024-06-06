// imports
import { useState, useEffect } from "react" // originally planned for more cool stuff
import { NavLink } from "react-router-dom"


// CSS
const styles = {
  nav: {
    justifyContent: 'space-around',
    display: 'flex',
    width: '50%',
    paddingTop: '30px'
  },
}


// The Nav Component
export default function Nav() {
  return (
    <nav style={styles.nav}>
      <NavLink to="/" style={({ isActive }) => {
        return isActive ? { textDecoration: 'none' } : {};
          }}>AboutMe</NavLink>
      <NavLink to="/contact" style={({ isActive }) => {
        return isActive ? { textDecoration: 'none' } : {};
          }}>Contact</NavLink>
      <NavLink to="/portfolio" style={({ isActive }) => {
        return isActive ? { textDecoration: 'none' } : {};
          }}>Portfolio</NavLink>
      <NavLink to="/resume" style={({ isActive }) => {
        return isActive ? { textDecoration: 'none' } : {};
          }}>Resume</NavLink>
    </nav>
  )
}