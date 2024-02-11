import React, { useState } from 'react'

const Nav = () => {

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 120) {
      setColor(true)

    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', changeColor);

  return (
    <div className='hidden lg:block fixed left-0 right-0 z-50'>
      <div className={` ${color && 'hidden'} duration-200 text-white bg-blue-950 sticky top-0 text-end px-4 py-0.5 overflow-hidden`}>
        Tel: 3865-607676  - 3865-252015 - servemastersas@gmail.com
      </div>

      <div className={` ${color ? 'bg-white shadow-md top-0 h-12 ' : 'gra top-7 h-20'} duration-200 lg:flex justify-between items-center pl-6 hidden `}>
        <a href="#" className='h-full flex items-center'>
          <h1 className={` ${color ? 'text-2xl' : 'text-4xl'} text-blue-800 duration-300 font-semibold `}><span className='text-pink-800'>SERVE</span>MASTER S.A.S</h1>
        </a>
        <div className={`flex h-full text-xl mr-14 font-semibold ${color ? 'text-azulServe' : 'text-azulServe'}`}>
          <a className='nav-btn' href="#">INICIO</a>
          <a className='nav-btn' href="#sectionTwo">SERVICIOS</a>
          <a className='nav-btn' href="#sectionFive">CONTACTO</a>
        </div>
      </div>
    </div>
  )
}

export default Nav