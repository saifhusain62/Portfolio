import profileImg from "../images/ownimage.png"
import { FaDownload } from "react-icons/fa";
import resume from "../images/Resume.pdf"

import React from 'react'

function Home2() {
  return (
    <section id="home" className='min=h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-15 mt-48'>
           {/* TEXT CONTENT */}
      <div className="text-center font-mono z-10 px-4">

        <h1 className="text-4xl md:text-5xl lg:text-6xl lg:max-w-w[500px] font-semibold mb-6 px-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent leading-right" > I am Saif Husain</h1>
        <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            I am a MERN-MEAN Developer.Who loves creation interactive,scable web applications.My purpose is to build solutions that offer dynamic UI, high performance and delightful UX.
            </p>
                  {/* BUTTON */}
            <div className="flex justify-center items-center space-x-4"> 
              <a href="#contact" className="bg-gradient-to-r flex flex-row from-teal-500 to-indigo-600 py-3 px-6 rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Contact Me</a>
                     {/* BUTTON */}
              <a href={resume} className="bg-gradient-to-r flex flex-row from-teal-500 to-indigo-600 py-3 px-6 rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]" download>
                <p className="pr-2">Resume</p>
                <span><FaDownload /></span>
              </a>
            </div>

      </div>

      <div className='text-center z-10 px-4'>
          <img src={profileImg} alt="Profile Image" className="w-[300px] border-0 mt-20 rounded shadow-lg shadow-blue-500 lg:m-0 lg:max-w[250px] object-cover object-bottom hover:translate-y-1 transition-all"/>
      </div>
    </section>
  )
}

export default Home2
