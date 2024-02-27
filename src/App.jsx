import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import Nav from './components/Nav'
import NavMovil from './components/NavMovil'
import Loading from './pages/Loading'


function App() {

  const [loading, setloading] = useState(true);


  useEffect(() => {
    // Simula la carga de la página
    window.addEventListener('load', () => {
      setloading(false);
    });    
  }, []);

  return (
    <div className={`app ${loading && 'h-screen overflow-hidden'}`}>
      <div className={`${!loading && 'hidden'}`}>
        <Loading />
      </div>
      <Nav />
      <NavMovil />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
