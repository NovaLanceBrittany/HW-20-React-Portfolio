// imports
import { useState, useEffect } from "react" 
import { Link } from "react-router-dom"


const styles = {
  header: {
    backgroundColor: "#193589",
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

export default function Footer() {
  return (
    <footer>
    
    <h1 style={styles.h1}></h1>

        // Social Media Links
        <ul style={styles.ul}>
          <li className="d-flex">
            <a href="/auth" className="d-block px-2 text-light text-decoration-none">Signup</a>
            <a href="/auth" className="d-block px-2 text-light text-decoration-none">Sign In</a>
            <a href="/auth" className="d-block px-2 text-light text-decoration-none">Sign Out</a>
          </li>
        </ul>

    </footer>
  )
}
