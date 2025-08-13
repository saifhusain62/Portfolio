import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";

function Footer() {
  return (
    <footer>
      <div className='min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono mb-10'>
        <div className='flex gap-10 p-4 justify-center text-white'>
            <a href="https://www.linkedin.com/in/saif-husain-84b305287/" className=' p-2 text-2xl rounded hover:-translate-y-1 transition-all bg-blue-600 text-white' target='_blank'>
                <FaLinkedin /></a>
                <a href="https://github.com/saifhusain62" className=' p-2 text-2xl rounded hover:-translate-y-1 transition-all bg-purple-950 text-white' target='_blank'>
                <FaGithub /></a>
                <a href="https://www.facebook.com/saimum.husain.saif" className=' p-2 text-2xl rounded hover:-translate-y-1 transition-all bg-blue-600 text-white' target='_blank'>
                <FaFacebook /></a>
                <a href="https://www.hackerrank.com/profile/mdsakibbd68" className=' p-2 text-2xl rounded hover:-translate-y-1 transition-all bg-green-600 text-white' target='_blank'>
                <SiHackerrank /></a>

        </div>

        <p>©2025.All Rights Reserved by Saif Husain</p>

      </div>
    </footer>
  )
}

export default Footer
