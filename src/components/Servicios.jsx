import React from 'react'
import fondo from '../assets/img/servicios.jpg'
import arrow from '../assets/img/arrow-icon.gif'
import grua from '../assets/img/grua.png'
import { motion } from 'framer-motion'

const Servicios = () => {
    return (
        <div id='sectionTwo' className='relative bg-yellow-400 '>
            {/* <img src={fondo} alt="" className='w-full brightness-[.25] absolute h-full object-cover -z-10 ' /> */}

            <div className='flex h-full  flex-col lg:flex-row justify-evenly px-6 items-start '>
                <motion.div
                    initial={{ opacity: 0, x: '-200px' }}
                    whileInView={{ opacity: 1, x: '0' }}
                    transition={{ duration: .6, delay: .3 }}
                    viewport={{ once: true }}
                    className=' font-bold text-blue-950 py-10 h-full text-6xl'>
                    <p className='text-xl'>CONOCÉ NUESTROS</p>
                    <h1>SERVICIOS</h1>
                    <img src={grua} alt="" className='w-40 mx-auto py-10 hidden lg:block' />
                </motion.div>
                <ul className="px-4 lg:py-10 pb-10">
                    {
                        servicios.map((servicio, i) => (
                            <motion.li
                                initial={{opacity: 0, x: '-200px' }}
                                whileInView={{opacity: 1, x: '0' }}
                                transition={{ duration: .6, delay: .6 }}
                                viewport={{ once: true }}
                                key={i} className={`text-blue-950 text-2xl flex items-start gap-3`}>
                                <img src={arrow} alt="" className=' w-9' />
                                <p>{servicio}</p>
                            </motion.li>
                        ))
                    }
                </ul>
            </div>


        </div>
    )
}


const servicios = ['Ventas de maquinaria de construcción', 'Ventas de repuestos', 'Service de maquinarias', 'Reparacion de maquinarias', 'Montajes y reparaciones en general.', 'Asesoria de compra', 'Asesoria de cuidado de maquinarias.', 'Venta de insumos en general.']


export default Servicios