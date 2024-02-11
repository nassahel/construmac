import React, { useState } from 'react'
import foto1 from '../assets/img/maquina1.webp'
import foto2 from '../assets/img/maquina2.webp'
import foto3 from '../assets/img/maquina3.webp'
import foto4 from '../assets/img/maquina4.webp'
import foto5 from '../assets/img/maquina5.jpg'
import foto7 from '../assets/img/maquina7.jpg'
import foto8 from '../assets/img/maquina8.jpg'
import foto9 from '../assets/img/maquina9.jpg'
import foto10 from '../assets/img/maquina10.jpg'
import foto11 from '../assets/img/maquina11.jpg'
import foto12 from '../assets/img/maquina12.jpg'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const SectionFour = () => {

  const fotos = [foto1, foto2, foto3, foto4, foto5, foto7, foto8, foto9, foto10, foto11, foto12]




  return (
    <div className='lg:min-h-screen pt-28 flex flex-col items-center gap-10 overflow-hidden'>
      <div className='flex items-center gap-4'>
        <h2 className='text-4xl font-semibold text-azulServe text-center'>MAQUINAS DISPONIBLES</h2>
      </div>

      <div className='md:w-10/12 lg:w-6/12 py-10 flex'>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          width="90%"
          className='flex flex-col justify-center items-center'
          >
          {
            fotos.map((foto) => (
              <div>
                <img alt="" src={foto} />
              </div>
            ))
          }
        </Carousel>
      </div>
    </div>


  )
}

export default SectionFour