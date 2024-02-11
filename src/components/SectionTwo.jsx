import React from 'react'
import plc from '../assets/img/articulado.webp'
import comprInd from '../assets/img/pavi.jpg'
import foto3 from '../assets/img/maquina3.webp'
import foto7 from '../assets/img/maquina7.jpg'
import { ChevronDoubleRightIcon, CubeTransparentIcon  } from "@heroicons/react/24/outline";
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
        <h2>PRODUCTOS</h2>
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
              <h3 className='text-2xl font-semibold justify-center xl:justify-start flex items-center'> <CubeTransparentIcon  className='w-8 mr-2 text-yellow-500' /> {dato.titulo}</h3>
              <ul className='mb-8 xl:mb-0'>
                {
                  dato.lista.map((li, i) => (
                    <li key={i}><ChevronDoubleRightIcon className="w-5 mr-1 text-yellow-500" />{li}</li>
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
    titulo: "CAMIONES ARTICULADOS",
    lista: ['Los camiones articulados Cat® transportan una amplia gama de materiales en una variedad de aplicaciones y condiciones del terreno. La operación simple y la comodidad estilo automóvil junto con los puntos de servicio combinados y los intervalos de servicio extendidos significan que estos camiones volquete le permiten concentrarse en su trabajo y gastar menos tiempo y dinero en el servicio.', 'CHASIS DESNUDO DE CAMIÓN ARTICULADO', 'CAMIONES ARTICULADOS DE TRES EJES'],
    img: plc
  },
  {
    titulo: "MAQUINAS PAVIMENTADORAS",
    lista: ['Caterpillar ofrece una amplia gama de equipos de pavimentación de asfalto que compiten en los mercados de neumáticos de caucho, orugas de acero y correas de caucho. Las adoquines y los elevadores de hileras brindan soluciones versátiles y confiables para aplicaciones de pavimentación exigentes.', 'TRACK ASPHALT PAVERS', 'WHEEL ASPHALT PAVERS'],
    img: comprInd
  },
  {
    titulo: "COMPACTADORES",
    lista: ['Las maquinas compactadoras son herramientas autopropulsadas sobre ruedas que tienen diferentes rodillos, cuya función es compactar la tierra de manera homogénea. Su función es sencilla: densifica el suelo utilizando su propio peso y una carga dinámica que se ocasiona por medio de la masa excéntrica que va girando alrededor del eje que tiene el rodillo, produciendo así una vibración.', 'Compactadores con rodillo tipo pata de cabra.', 'Compactadores con rodillo vibratorio liso, Compactadores tipo pata de cabra de alta velocidad'],
    img: foto7
  },
  {
    titulo: "EXCAVADORAS",
    lista: ['Se trata de equipo cuyo principal propósito consiste en desplazar tierra y otros materiales. Son fácilmente reconocibles, ya que cuentan con un brazo móvil, un cucharón o balde y una cabina rotatoria.', 'Excavadoras de orugas.', 'Excavadoras de ruedas.', 'Miniexcavadora.', 'Excavadoras de largo alcance.', 'Excavadoras hidráulicas.', 'Draga excavadora.'],
    img: foto3
  }
]

export default SectionTwo