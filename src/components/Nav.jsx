import React, { useState } from 'react';
import { RocketLaunchIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Nav = () => {
    let Links =[
        {name:"Inicio",link:"/"},
        {name:"Servicios",link:"/servicios"},
        {name:"Acerca",link:"/acerca-de"},
        {name:"Contacto",link:"/contacto"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <nav className='shadow-md w-full fixed top-0 left-0'>
           <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <RocketLaunchIcon className='w-7 h-7 text-blue-600'/>
                <span>Razhor</span>
            </div>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linked items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                    </li>))
                }
                {/* buttons */}
                <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>
                  Empezar
                </button>
            </ul>
           </div>
        </nav>
    );
};

export default Nav;