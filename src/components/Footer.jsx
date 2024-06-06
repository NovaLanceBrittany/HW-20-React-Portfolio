// imports
import { useState, useEffect } from "react" 
import { Link } from "react-router-dom"

//CSS
const styles = {
  // header: {
  //   backgroundColor: "#193589",
  //   borderBottom: "1px solid white",
  //   height: "6rem",
  //   marginBottom: "10px",
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   padding: "0 3rem",
  //   color: "white"
  // },
}

export default function Footer() {
  return (
    <footer>
    
    <h1 style={styles.h1}></h1>

        {/* Social Media Links */}
        <ul style={styles.ul}>
          <li className="d-flex">
            <a href="https://www.linkedin.com/in/brittany-jungclaus-14933b101/" target="_blank">LinkedIn</a>
            <a href="https://x.com/NovaLanceBritt" target="_blank">Twitter</a>
            <a href="https://github.com/NovaLanceBrittany" target="_blank">GitHub</a>
          </li>
        </ul>
    </footer>
  )
}
