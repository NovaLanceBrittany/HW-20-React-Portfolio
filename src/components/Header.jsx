// imports
import { useState, useEffect } from "react" 
import { Link } from "react-router-dom"
import Nav from './Nav'


// CSS
const styles = {
  header: {
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

  ul: {
    h1: {
      fontSize: "2rem",
      fontStyle: "italic",
      color: "white"
    },

  },


}


// Componenet
export default function Header() {
  return (
    <header style={styles.header}>
      <h1>Brittany Jungclaus</h1>

      <ul style={styles.ul}>
          <li className="d-flex">
            <a href="/auth" className="d-block px-2 text-light text-decoration-none">Signup</a>
            <a href="/auth" className="d-block px-2 text-light text-decoration-none">Sign In</a>
            <a href="/auth" className="d-block px-2 text-light text-decoration-none">Sign Out</a>
          </li>
        </ul>

      <Nav />
    </header>
  )
}

