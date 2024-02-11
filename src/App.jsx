import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import Nav from './components/Nav'
import NavMovil from './components/NavMovil'


function App() {

  return (
    <div className='app'>
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
