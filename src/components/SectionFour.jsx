import React, { useState } from 'react'
import foto1 from '../assets/img/sv-foto1.jpg'
import foto2 from '../assets/img/sv-foto2.jpeg'
import foto3 from '../assets/img/sv-foto3.jpg'
import foto4 from '../assets/img/sv-foto4.jpg'
import foto5 from '../assets/img/sv-foto5.jpg'
import foto6 from '../assets/img/sv-foto6.jpg'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const SectionFour = () => {

  const fotos = [foto1, foto2, foto3, foto4, foto5, foto6]




  return (
    <div className='lg:min-h-screen pt-28 flex flex-col items-center gap-10 overflow-hidden'>
      <div className='flex items-center gap-4'>
        <h2 className='text-4xl font-semibold text-azulServe text-center'>ALGUNOS DE NUESTROS TRABAJOS</h2>
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