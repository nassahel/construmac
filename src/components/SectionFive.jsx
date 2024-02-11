import React from 'react'
import { MapPinIcon, EnvelopeIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import { motion } from 'framer-motion'





const SectionFive = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: .3, delay: .5 }}
			viewport={{ once: true }}

			className='min-h-screen flex flex-col items-center py-20 lg:py-32 gap-20 bg-blue-50' id='sectionFive'>
			<div className='text-4xl font-semibold mb-20 text-azulServe text-center bg-white py-6 w-11/12 lg:w-5/12 rounded shadow-lg'>
				<h2>CONTACTO</h2>
			</div>
			<div className='flex flex-col lg:flex-row gap-40 w-11/12 lg:w-7/12 justify-between'>
				<div className='flex flex-col w-full gap-4 text-xl text-blue-900 font-semibold'>
					<p className='text-center mb-10 text-azulServe'>Si deseas querés mayor información sobre nuestros servicios o tienes alguna duda al respecto, no dudes en consultarnos por alguno de nuestros medios de contacto. Te responderemos a la brevedad!</p>
					<a href='mailto:servemastersas@gmail.com' className='flex gap-2'>
						<EnvelopeIcon className="w-8 text-pink-700" />
						<p className='hover:underline'>servemastersas@gmail.com</p>
					</a>
					<a href='' className='flex gap-2'>
						<MapPinIcon className="w-8 text-pink-700" />
						<p className='hover:underline'>20 de Junio 540, Aguilares, Tucumán</p>
					</a>
					<div href='' className='flex gap-2 items-start'>
						<DevicePhoneMobileIcon className="w-8 text-pink-700" />
						<div className='flex flex-col gap-2'>
							<a className='hover:underline' href="">+549 3865-607676</a>
							<a className='hover:underline' href="">+549 3865-252015</a>
						</div>
					</div>
				</div>

				<div className='w-full flex justify-center'>
					<form action="" className='flex flex-col w-full max-w-[30rem] gap-6 text-lg'>
						<legend className='text-blue-950 font-semibold'>Envianos un mensaje...</legend>
						<input type="text" name="" className='input-form' placeholder='Nombre' id="" />
						<input type="email" name="" className='input-form' placeholder='E-mail' id="" />
						<input type="text" name="" className='input-form' placeholder='Asunto' id="" />
						<textarea name="" id="" cols="30" rows="10" className='h-60 rounded-md border-2 border-gray-400 p-2 resize-none hover:border-pink-700 duration-200 focus:outline-pink-700' placeholder='Mensaje...'></textarea>
						<div className='text-end'>
							<button className='bg-pink-700 hover:bg-pink-800 duration-300 text-white py-2 px-7 rounded-md '>Enviar</button>
						</div>

					</form>
				</div>
			</div>

		</motion.div>
	)
}

export default SectionFive