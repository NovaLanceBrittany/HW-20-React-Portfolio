// imports
import { useState, useEffect } from "react" 
import { Link } from "react-router-dom"
import Nav from './Nav'


// CSS
const styles = {
  header: {
    // h1: "",
    // backgroundColor: "#4b244a",
    // borderBottom: "1px solid white",
    // height: "6rem",
    // marginBottom: "10px",
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    // padding: "0 3rem",
    // color: "white"
    

  },
}


// Componenet
export default function Header() {
  return (
    <header style={styles.header}>
      <h1>Brittany Jungclaus</h1>

      {/* This is the Nav Bar Component */}
      <Nav />
    </header>
  )
}

