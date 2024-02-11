import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='bg-blue-50 min-h-screen flex justify-center text-pink-800 items-center'>
            <div className='text-center flex flex-col gap-2'>
                <h2 className='text-6xl'>Error 404 .-.</h2>
                <p className='text-2xl'>La pagina que buscas no esta disponible.</p>
                <div className='flex justify-center gap-1 text-xl'>
                    <p>Volver al</p>
                    <Link className='text-blue-800 hover:underline' to='/'>Inicio</Link>

                </div>
            </div>

        </div>
    )
}

export default NotFound