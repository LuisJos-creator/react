import { useState } from 'react'
import Inicio from './pages/Inicio.jsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Nosotros from './pages/Nosotros.jsx'
import Navbar from './components/Navbar.jsx'
import Servicios from './pages/Servicios.jsx'
import Contacto from './pages/Contacto.jsx'
import Footer from './components/Footer.jsx'
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/juegos' element={<Servicios />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
