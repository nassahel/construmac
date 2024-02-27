import React from 'react'
import grua from '../assets/img/grua.png'

const Loading = () => {
    return (
        <div className='h-screen bg-yellow-400 w-full flex justify-center items-center'>

            <img src={grua} alt="" className='w-20 animate-ping' />

        </div>
    )
}

export default Loading