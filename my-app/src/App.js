import React from 'react'
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Nav />
     {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>element
            <Route path="/about"  element={()=> <About />} />
            <Route path="/skills"  element={()=> <Skills />} />
            <Route path="/contact"  element={()=> <Contact />} />
          </Routes>
      </BrowserRouter>*/ }
      
     
    </>
  )
}

export default App
