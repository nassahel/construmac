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
           <div className={` ${color ? 'bg-yellow-500 shadow-md top-0 h-12 ' : ' top-7 h-20'} duration-200 lg:flex justify-between items-center pl-6 hidden `}>
        <a href="#" className='h-full flex items-center'>
          <h1 className={` ${color ? 'text-2xl' : 'text-4xl'} text-blue-950 duration-300 font-semibold `}><span className=''>CONSTRU</span>MAC</h1>
        </a>
        <div className={`flex text-xl mr-14 font-semibold ${color ? 'text-azulServe' : 'text-azulServe'}`}>
          <a className='nav-btn' href="#">INICIO</a>
          <a className='nav-btn' href="#sectionTwo">PRODUCTOS</a>
          <a className='nav-btn' href="#sectionFive">CONTACTO</a>
        </div>
      </div>
    </div>
  )
}

export default Nav