import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
import Details from './Pages/Details'
import Education from './Pages/Education'
import Projects from './Pages/Projects'
import Certificates from './Pages/Certificates'
import Home from './Pages/Home'

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/education' element={<Education />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/certificates' element={<Certificates />} />


      </Routes>

      <Footer />
    </>
  )
}

export default App