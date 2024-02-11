import React from 'react'
import logo from '../assets/img/logo-transparente.png'

const SectionOne = () => {
    return (
        <section className="contenedor-main h-screen">
            <div className="contenedor-principal flex justify-center text-azulServe items-center px-6">
                <div className="flex flex-col items-center">
                    <img className='logo-serve text-center w-[700px]' src={logo} alt="logo de servemaster" />
                    <h2 className="text-2xl lg:text-4xl text-center font-bold mt-10">SERVICIOS DE MANTENIMIENTO INDUSTRIAL</h2>
                    <h6 className="max-w-[700px] text-center font-normal text-2xl mt-4">Somos una empresa dedicada al mantenimiento industrial, que presta sus servicios de manera ágil y garantizada para cumplir con las necesidades de nuestros clientes.</h6>
                </div>
            </div>
        </section>
    )
}

export default SectionOne