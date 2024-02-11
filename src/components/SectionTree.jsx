import React from 'react'
import budeger from '../assets/img/budeger.png'
import santista from '../assets/img/santista.png'
import laPapelera from '../assets/img/la-papelera.png'
import fondoS3 from '../assets/img/fondos3.jpg'
import { motion } from 'framer-motion'

const SectionTree = () => {

  const clientes = [santista, laPapelera, budeger]

  return (
    <div className='flex items-center justify-center py-20 lg:py-36 relative overflow-hidden '>
      <img src={fondoS3} alt="" className='-z-10 object-cover absolute brightness-75 h-full w-full' />
      <div className=' flex flex-col items-center justify-center w-11/12 lg:w-10/12 rounded py-10 lg:px-20 shadow-mg'>

        <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: .4, delay: .1}}
         viewport={{ once: true }}
          className='text-4xl font-semibold mb-20 text-azulServe text-center bg-white py-6 w-11/12 lg:w-6/12 rounded shadow-lg'>
          <h2>NUESTROS CLIENTES</h2>
        </motion.div>
        <div className='w-full flex flex-col lg:flex-row items-center relative justify-evenly gap-10'>
          {
            clientes.map((cliente, index) => (
              <motion.figure
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: .3, delay: .5}}
                viewport={{ once: true }}
                key={index}
                className='flex bg-white items-center justify-center shadow-lg rounded hover:scale-105 duration-200  w-80 p-6 h-64'>
                <img className='w-full' src={cliente} alt="logo empresa Santista" />
              </motion.figure>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SectionTree