import React from 'react'
import manteAsistencia from '../assets/img/mantenimiento-asistencia.jpg'
import plc from '../assets/img/plc.jpg'
import comprInd from '../assets/img/bombas-de-agua.jpg'
import manteEdilicio from '../assets/img/mantenimiento-edilicio.jpg'
import divElectrica from '../assets/img/division-electrica.jpg'
import { ChevronDoubleRightIcon, Cog6ToothIcon, BoltIcon, CpuChipIcon, BuildingOffice2Icon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { motion } from 'framer-motion'




const SectionTwo = () => {
  return (
    <div className='flex flex-col gap-16 lg:gap-28 py-20 lg:py-28 bg-white  items-center'>
      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: .6, delay: .3 }}
        viewport={{ once: true }}
        className='text-4xl font-semibold  text-azulServe text-center'>
        <h2>ESPECIALIDADES</h2>
      </motion.div>
      {
        data.map((dato, index) => (
          <motion.div
            initial={{ opacity: 0, y: '100px' }}
            whileInView={{ opacity: 1, y: '0' }}
            transition={{ duration: .5, delay: .3 }}
            viewport={{ once: true }}
            key={index}
            className={`flex flex-col ${(index + 1) % 2 == 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'} border-b pb-16 lg:pb-24 justify-between items-center text-azulServe px-4 lg:w-9/12`}>
            <div className={`flex flex-col gap-10 ${(index + 1) % 2 == 0 ? 'xl:mr-8' : 'xl:ml-8'}`}>
              <h3 className='text-2xl font-semibold justify-center xl:justify-start flex items-center'> <dato.icono className='w-8 mr-2 text-pink-700' /> {dato.titulo}</h3>
              <ul className='mb-8 xl:mb-0'>
                {
                  dato.lista.map((li, i) => (
                    <li key={i}><ChevronDoubleRightIcon className="w-5 mr-1 text-pink-500" />{li}</li>
                  ))
                }
              </ul>
            </div>
            <img className='h-[25rem] w-[40rem] rounded-sm object-cover shadow-md' src={dato.img} alt="imagen ilustrativa: persona controlando un tablero eléctrico" />
          </motion.div>
        ))
      }
    </div>
  )
}






const data = [
  {
    titulo: "DIVISIÓN ELECTRÓNICA",
    icono: CpuChipIcon,
    lista: ['Programación de PLC, HMI, SCADA.', 'Servomotores, variadores de velocidad.', 'Diseño de sistemas de control con planos de paneles.', 'Diseño de sistemas de control con planos de paneles.', 'Planos de proceso e instrumentación (P&ID).', 'Planos de I/O de campo y de panel, esquemas eléctricos de panel.', 'Planos de conexión de red.', 'Actualizacion tecnológica de equipos productivos (retrofittubg).', 'Reparación de placas electrónicas.'],
    img: plc
  },
  {
    titulo: "DIVISIÓN MECÁNICA INDUSTRIAL",
    icono: WrenchScrewdriverIcon,
    lista: ['Mantenimiento de compresores de aire.', 'Mantenimiento de compresores de aire.'],
    img: comprInd
  },
  {
    titulo: "MANTENIMIENTO EDILICIO",
    icono: BuildingOffice2Icon,
    lista: ['Sistemas de iluminación y emergencia.', 'Sistemas de alarmas y cámaras de seguridad.', 'Mantenimiento edilicio (pintura, albañilería, plomería, carpintería, herrería, cielorrasos).', 'Construcciones en seco (durlock y superboard).'],
    img: manteEdilicio
  },
  {
    titulo: "DIVISIÓN ELÉCTRICA",
    icono: BoltIcon,
    lista: ['Mantenimiento de motores eléctricos.', 'Arranques estrella triangulo.', 'Tableros de control, comando y fuerza.', 'Automatización general de procesos.', 'Montaje de redes eléctricas.', 'Planimetría eléctrica.', 'Ejecución de tareas bajo normativas de seguridad.'],
    img: divElectrica
  }
]

export default SectionTwo