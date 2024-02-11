import React from 'react'
import logo from '../assets/img/logo_transparent.png'

const SectionOne = () => {
    return (
        <section className="contenedor-main">
            <div className="contenedor-principal flex justify-center text-blue-800 items-center px-6">
                <div className="flex flex-col items-center py-44">
                    <img className='logo-serve text-center w-[250px] bg-white/[.6]' src={logo} alt="logo de servemaster" />                    
                </div>
            </div>
        </section>
    )
}

export default SectionOne