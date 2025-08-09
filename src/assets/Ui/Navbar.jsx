import React, { useEffect } from 'react'
import Logo from './Logo'
import { CiMenuFries } from "react-icons/ci";

function Navbar({isMenuOpen, setIsMenuOpen}) {

  useEffect(()=>{
     document.body.style.overflow = isMenuOpen ? 'hidden' : "";
  },[isMenuOpen]);
  return (
    <div className='fixed top-0 w-full z-40 bg-black backdrop-blur-lg px-1 border-b border-white/10 shadow-lg'>
        <div className='max-w-5xl mx-auto px-4'>
            <div className='flex justify-between items-center font-mono h-16'>
                <Logo/>

                 <div onClick={()=>setIsMenuOpen(prev=>!prev)} className='text-2xl absolute right-7 z-40 md:hidden cursor-pointer font-mono'>
                       <CiMenuFries />

                 </div>


                <div className='flex md:flex items-center space-x-8'>
                     <div className='hidden md:flex items-center space-x-8'>
                      <a href="#home" className='text-gray-300 text-lg  hover:text-xl hover:text-teal-300 transition all'>Home</a>
                      <a href="#about" className='text-gray-300 text-lg hover:text-xl hover:text-teal-300 transition all'>About</a>
                      <a href="#project" className='text-gray-300 text-lg hover:text-xl hover:text-teal-300 transition all'>Project</a>
                      <a href="#contact" className='text-gray-300  text-lg hover:text-xl hover:text-teal-300 transition all'>Contact</a>

                     </div>
                </div>
            </div>

        </div>
      
    </div> 
  )
}

export default Navbar
