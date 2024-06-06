// imports
import { useState, useEffect } from "react" // originally planned for more cool stuff
import { Link } from "react-router-dom"


// CSS
const styles = {
  ul: {
    h1: "",
    backgroundColor: "#4b244a",
    borderBottom: "1px solid white",
    height: "6rem",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 3rem",
    color: "white"
    

  },
}


// The Component
export default function Nav() {
  return (
    <nav>
      <ul style={styles.ul}>
        <li className="navbar">
          <Link to="/">AboutMe</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Portfolio</Link>
          <Link to="/">Resume</Link>
          <Link to="/">Works</Link>
        </li>
      </ul>
    </nav>
  )
}