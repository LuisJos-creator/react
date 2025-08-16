import { useState } from 'react'
import Inicio from './pages/Inicio.jsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Nosotros from './pages/Nosotros.jsx'
import Navbar from './components/Navbar.jsx'
function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/nosotros' element={<Nosotros />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
