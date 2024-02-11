import { motion } from 'framer-motion'
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from 'react';


const NavMovil = () => {

  const [sideBar, setSidebar] = useState(false)



  return (
    <motion.nav

      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: .5 }}
      viewport={{ once: true }}
      className='fixed w-full items-center h-14 shadow-md bg-white z-50 lg:hidden'>
      <div className='flex items-center h-full justify-between px-3'>
        <Bars3Icon onClick={() => setSidebar(true)} className={` ${sideBar && "hidden"} h-10 w-10 text-blue-950 cursor-pointer`} />
        <a href='#' className='text-2xl text-blue-950 font-semibold inline'><span className=''>Constru</span>Mac</a>
      </div>

      <div className={`${sideBar ? "w-full" : "w-0"} duration-200 fixed top-0 bottom-0 left-0 right-0 gap-4 bg-blue-950 flex justify-between flex-col overflow-hidden`}>

        <div className='flex flex-col gap-6'>
          <button onClick={() => setSidebar(false)} className='block ml-auto mr-2 mt-2'><XMarkIcon className="h-10 w-10 text-white hover:text-yellow-500 duration-200" /></button>
          <a onClick={() => setSidebar(false)} href='#' className='nav-mov'>INICIO</a>
          <a onClick={() => setSidebar(false)} href='#sectionTwo' className='nav-mov'>SERVICIOS</a>
          <a onClick={() => setSidebar(false)} href='#sectionFive' className='nav-mov'>CONTÁCTO</a>
        </div>
        <div>
          <div className='text-center mb-20'>
            <a href='#' className='text-2xl text-yellow-400 inline truncate'><span className=''>Constru</span>Mac</a>
          </div>
         </div>

      </div>
    </motion.nav>

  )
}

export default NavMovil