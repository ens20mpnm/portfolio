import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

export default function App(){
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ProjektDagbok" element={<ProjektDagbok />} />
      </Routes>
    </div>
  )
}
