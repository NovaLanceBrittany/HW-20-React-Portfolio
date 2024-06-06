import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import './App.css'

// Importing the pages
import AboutMe from "./components/pages/AboutMe"
import Contact from "./components/pages/Contact"
import Portfolio from "./components/pages/Portfolio"
import Resume from "./components/pages/Resume"



// Importing the Components
import Header from "./components/Header"
import Footer from "./components/Footer"
import Nav from "./components/Nav"


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            {/* About me & Home Page are one and the same */}
            <Route path='/' element={<AboutMe />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
