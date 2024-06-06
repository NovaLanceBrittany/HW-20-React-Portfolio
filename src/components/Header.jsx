// imports
import { useState, useEffect } from "react" 
import { Link } from "react-router-dom"
import Nav from './Nav'


// CSS
const styles = {
  header: {
    // The container
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '6rem',
    backgroundColor: "var(--VioletJTC)",
    borderBottom: "1px solid var(--PowderBlue)",
    paddingTop: "30px",
    paddingLeft: "50px",
  },
  
  // My Name
  fname: {
    color: "white"
  },
  lname: {
    color: "var(--PowderBlue)"
  } 
}


// Header Componenet
export default function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.fname}>Brittany</h1>
      <h1 style={styles.lname}>Jungclaus</h1>

      {/* This is the Nav Bar Component */}
      <Nav />
    </header>
  )
}

