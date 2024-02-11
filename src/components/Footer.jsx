import React from 'react'

const Footer = () => {
  return (
    <div className='bg-azulServe text-white flex flex-col font-light'>

      <div className='flex flex-col items-center pt-6 gap-1'>
        <a href='#' className='text-2xl text-yellow-500 inline font-normal'><span className=''>Constru</span>Mac</a>
        <div className='flex gap-2 text-sm'>
          <a className='hover:underline' href="#">Mapa del sitio</a>
          <p>|</p>
          <a className='hover:underline' href="#">Legales</a>

        </div>
        <p>2024 © Todos los derechos reservados ConstruMac S.A.</p>
      </div>

      <div className='flex gap-1 justify-end mr-6 py-2  items-center'>
        <p className='text-sm'>Desarrollado por</p><a className='text-yellow-500 text-md hover:underline' href="">Nassahel E.</a>
      </div>

    </div>
  )
}

export default Footer