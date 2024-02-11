import React from 'react'
import fondo from '../assets/img/baner-industrial.png'
import arrow from '../assets/img/arrow-icon.gif'
import { motion } from 'framer-motion'

const Servicios = () => {
    return (
        <div id='sectionTwo' className='relative '>
            <img src={fondo} alt="" className='w-full brightness-[.25] absolute h-full object-cover -z-10 ' />

            <div className='flex flex-col lg:flex-row justify-evenly items-center py-20'>
                <motion.div
                    initial={{ opacity: 0, x: '-200px' }}
                    whileInView={{ opacity: 1, x: '0' }}
                    transition={{ duration: .6, delay: .3 }}
                    viewport={{ once: true }}
                    className='text-white font-bold  py-20 text-6xl'>
                    <p className='text-xl'>CONOCÉ NUESTROS</p>
                    <h1>SERVICIOS</h1>
                </motion.div>
                <ul className="px-4">
                    {
                        servicios.map((servicio, i) => (
                            <motion.li
                                initial={{opacity: 0, x: '-200px' }}
                                whileInView={{opacity: 1, x: '0' }}
                                transition={{ duration: .6, delay: .6 }}
                                viewport={{ once: true }}
                                key={i} className={`text-white text-2xl flex items-start gap-3`}>
                                <img src={arrow} alt="" className='-rotate-90 w-7' />
                                <p>{servicio}</p>
                            </motion.li>
                        ))
                    }
                </ul>
            </div>


        </div>
    )
}


const servicios = ['Neumática integral.', 'Electricidad industrial.', 'Mecánica en general.', 'Mantenimiento correctivo y preventivo de equipos industriales.', 'Montajes y reparaciones en general.', 'Montaje de instrumentos de medición, cableado y canalización.', 'Montaje de cañerías de aire comprimido, agua, vapor.', 'Aislación de cañerías.']


export default Servicios