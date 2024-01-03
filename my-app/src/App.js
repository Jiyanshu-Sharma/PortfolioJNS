import React from 'react'
import Nav from './components/Nav';
import './App.css'
import Home from './components/Home';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js'
import Experience from './components/Experience.js';
import Blogs from './components/Blogs.js';
import Contact from './components/Contact';
import Footer from './components/Footer.js'

/*


import {BrowserRouter , Routes , Route } from 'react-router-dom';*/

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Skills />  
      <Experience />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </>
  )
}

export default App
