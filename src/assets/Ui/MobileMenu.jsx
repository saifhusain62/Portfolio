import React from 'react'
import { RiCloseLargeFill } from "react-icons/ri";

function MobileMenu({isMenuOpen,setIsMenuOpen}) {
  return (
    <div className={`fixed w-full top-0 left-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-300 gap-15 ease-in-out ${isMenuOpen ? "h-screen opacity-100 pointer-events-auto":"h-0 opacity-0 pointer-events-none"} `}>
      

         <button onClick={()=>setIsMenuOpen(false)} className='absolute top-5 right-7 text-2xl focus:outline-none cursor-pointer' aria-label="Close Menu" >
            <RiCloseLargeFill />
         </button>
         <a href="#home" className='text-gray-300 text-lg  hover:text-xl hover:text-teal-300 transition all'>Home</a>
                      <a href="#about" className='text-gray-300 text-lg hover:text-xl hover:text-teal-300 transition all'>About</a>
                      <a href="#project" className='text-gray-300 text-lg hover:text-xl hover:text-teal-300 transition all'>Project</a>
                      <a href="#contact" className='text-gray-300  text-lg hover:text-xl hover:text-teal-300 transition all'>Contact</a>
 
    </div>
  )
}

export default MobileMenu
