import React from 'react'
import saif from "../images/saifhusain.png"

function Logo() {
  return (
    // <a href="home" className='bg-gradient-to-l  from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent text-lg' > Saif <span className='bg-gradient-to-r  from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent'>Husain</span></a>
    <a href="">
      <img src={saif} alt="" className='w-[150px] h-[120px]'/>
    </a>
  )
}

export default Logo
